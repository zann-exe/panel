// ═══════════════════════════════════════════════════════════════════
//  GOJOAI.JS — Mode Chat AI ala Gojo Satoru (.gojoai on/off)
// ═══════════════════════════════════════════════════════════════════
//  .gojoai on/off → toggle per chat/grup, DEFAULT ON. Hanya Admin grup,
//  Owner, atau Creator yang boleh mengubah (lihat commands/index.js
//  untuk command-nya, pola sama persis dengan .autoread/.self).
//
//  Saat mode ini ON:
//    - Di DM (japri)  : bot membalas SEMUA pesan teks biasa (bukan
//                        command) pakai gaya Gojo Satoru lewat AI.
//    - Di grup         : bot HANYA membalas kalau di-mention (@bot)
//                        atau pesannya me-reply/quote pesan bot
//                        sebelumnya — supaya bot tidak ikut nimbrung
//                        di setiap obrolan biasa member grup.
//
//  Dipanggil dari lib/messagePipeline.js untuk setiap pesan yang BUKAN
//  command (lihat pemanggilan handleGojoAiChat() di sana).
// ═══════════════════════════════════════════════════════════════════

import { store, save } from './db.js';
import { log } from './logger.js';
import { areJidsSameUser } from '@whiskeysockets/baileys';
import { recallRealJid } from './lidMapping.js';

function gojoAiStore() { return store('gojoai', {}); }

export function isGojoAiEnabled(jid) {
    const data = gojoAiStore();
    // Belum pernah diatur sama sekali untuk chat ini -> default ON,
    // sesuai permintaan: fitur ini aktif dari awal begitu bot dipasang.
    return data[jid]?.enabled !== false;
}

export function setGojoAiEnabled(jid, val) {
    const data = gojoAiStore();
    data[jid] = { enabled: !!val };
    save('gojoai');
}

// ── Persona ────────────────────────────────────────────────────────
// Gojo Satoru: sombong-tapi-menghibur, percaya diri berlebihan, gaul,
// ditulis ulang gaya sendiri (bukan kutipan verbatim manga/anime) —
// konsisten dengan pendekatan di commands/gojoCommands.js.
//
// PENTING (branding): instruksi eksplisit di bawah supaya AI TIDAK
// PERNAH menyebut/membocorkan nama SC atau AI lain (Elaina, Alya,
// Ourin, ChatGPT, Llama, dst) — identitasnya harus konsisten "Gojo"
// saja, sesuai brand bot ini.
//
// FIX: dipersingkat dari versi sebelumnya — prompt yang kepanjangan
// kalau di-encode ke URL (dipakai sebagai query param di bawah) bisa
// gampang kena limit panjang URL beberapa server/proxy (umumnya di
// kisaran 4096-8192 karakter), apalagi digabung sama pesan user yang
// panjang. Ini kemungkinan besar penyebab error yang dilaporkan.
const GOJO_AI_PERSONA =
    'Kamu Gojo Satoru (Jujutsu Kaisen), jadi asisten chat WhatsApp. ' +
    'Gaya santai, gaul, pede berlebihan tapi menghibur. Balas SINGKAT ' +
    '1-3 kalimat, tanpa markdown. Identitasmu HANYA "Gojo" — jangan ' +
    'pernah bilang kamu AI/chatbot atau sebut nama bot/AI lain apapun ' +
    '(Elaina, Alya, Ourin, ChatGPT, dst), walau ditanya langsung.';

// ── Pemanggilan AI eksternal ─────────────────────────────────────────
// Provider utama memakai endpoint publik yang saat ini mendokumentasikan
// chat GET tanpa API key. Provider lama Siputzx tetap dipertahankan sebagai
// fallback supaya workflow Gojo tidak berubah total jika provider utama
// sedang bermasalah.
const AI_PROVIDERS = [
    {
        name: 'Prexzy ChatGPT',
        url: 'https://prexzyapis.com/ai/chatgpt',
        method: 'GET',
        queryParam: 'q',
        body: null,
    },
    {
        name: 'Siputzx MetaAI',
        url: 'https://api.siputzx.my.id/api/ai/metaai',
        method: 'GET',
        queryParam: 'query',
        body: null,
    },
];

async function getGojoAiReply(userText) {
    // Batasi input agar request tetap ringan dan tidak menghasilkan URL
    // terlalu panjang pada provider yang memakai query parameter.
    const text = userText.slice(0, 500);
    const timeout = (ms) => new Promise((_, reject) =>
        setTimeout(() => reject(new Error(`timeout ${ms / 1000}s`)), ms)
    );

    function buildQueryText() {
        return `${GOJO_AI_PERSONA}\n\nPesan user: ${text}`;
    }

    function parseReplyText(data) {
        const candidates = [
            data?.result,
            data?.data,
            data?.response,
            data?.answer,
            data?.message,
            data?.result?.data,
            data?.result?.response,
            data?.result?.answer,
        ];

        for (const value of candidates) {
            if (typeof value === 'string' && value.trim()) return value.trim();
        }
        return null;
    }

    const queryText = buildQueryText();
    const errors = [];

    for (const provider of AI_PROVIDERS) {
        try {
            const url = new URL(provider.url);
            if (provider.queryParam) url.searchParams.set(provider.queryParam, queryText);

            const request = provider.method === 'POST'
                ? fetch(provider.url, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(provider.body || { query: queryText }),
                })
                : fetch(url.toString());

            const res = await Promise.race([request, timeout(15_000)]);

            if (!res.ok) {
                errors.push(`${provider.name}: HTTP ${res.status} ${res.statusText}`);
                continue;
            }

            const contentType = res.headers.get('content-type') || '';
            const raw = await res.text();
            let data;

            try {
                data = contentType.includes('json') ? JSON.parse(raw) : JSON.parse(raw.trim());
            } catch {
                // Be tolerant if a public provider returns a plain text body.
                if (raw.trim()) return raw.trim();
                errors.push(`${provider.name}: respons kosong/bukan JSON`);
                continue;
            }

            const reply = parseReplyText(data);
            if (reply) return reply;

            errors.push(`${provider.name}: format respons tidak dikenali`);
        } catch (err) {
            errors.push(`${provider.name}: ${err.message}`);
        }
    }

    throw new Error(errors.join('; ') || 'semua provider AI gagal');
}

// ── Deteksi trigger ───────────────────────────────────────────────
// FIX: sebelumnya cuma bandingkan angka nomor polos dari sock.user.jid
// terhadap mentionedJid/participant — mention/reply tidak pernah
// terdeteksi (dilaporkan user). Kemungkinan besar penyebabnya: WhatsApp
// kadang melaporkan sebuah identitas (termasuk identitas bot sendiri di
// dalam suatu grup) sebagai @lid (identifier privasi WhatsApp), BUKAN
// nomor asli — perbandingan string polos jadi gagal walau sebenarnya
// merujuk ke bot yang sama. Sekarang dicek berlapis:
//   1) areJidsSameUser() bawaan Baileys (menangani suffix device :XX)
//   2) perbandingan angka nomor polos (fallback tambahan)
//   3) cache lid<->nomor asli (recallRealJid, lib/lidMapping.js),
//      dicek DUA ARAH — jid bot maupun jid pembanding bisa sama-sama
//      berupa @lid
// Juga mengumpulkan semua kemungkinan identitas bot dari objek sock
// (jid & lid kalau tersedia), bukan cuma satu sumber.
function botIdentities(sock) {
    return [sock.user?.jid, sock.user?.lid, sock.user?.id].filter(Boolean);
}

function sameJid(a, b) {
    if (!a || !b) return false;
    if (a === b) return true;
    try { if (areJidsSameUser(a, b)) return true; } catch {}
    const numA = a.split('@')[0].split(':')[0];
    const numB = b.split('@')[0].split(':')[0];
    if (numA === numB) return true;
    if (a.includes('@lid')) { const r = recallRealJid(a); if (r && sameJid(r, b)) return true; }
    if (b.includes('@lid')) { const r = recallRealJid(b); if (r && sameJid(r, a)) return true; }
    return false;
}

function isBotJid(jid, sock) {
    return botIdentities(sock).some(botId => sameJid(botId, jid));
}

function isBotMentioned(msg, sock) {
    const mentioned = msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
    return mentioned.some(j => isBotJid(j, sock));
}

function isReplyToBot(msg, sock) {
    const quotedParticipant = msg.message?.extendedTextMessage?.contextInfo?.participant;
    return !!quotedParticipant && isBotJid(quotedParticipant, sock);
}

/**
 * Dipanggil dari messagePipeline.js untuk SETIAP pesan yang BUKAN
 * command. Return true kalau pesan ini "ditangani" oleh Gojo AI, false
 * kalau dilewati (mode off / trigger tidak cocok / dsb) — supaya
 * pemanggil tahu tidak perlu proses tambahan apapun.
 */
export async function handleGojoAiChat(sock, msg, jid, body, isGroup) {
    if (!body || !body.trim()) return false;
    if (!isGojoAiEnabled(jid)) return false;

    if (isGroup) {
        // Di grup: HANYA respon kalau di-mention atau reply ke pesan bot
        // — supaya bot tidak ikut nimbrung di obrolan biasa member grup.
        if (!isBotMentioned(msg, sock) && !isReplyToBot(msg, sock)) return false;
    }
    // Di DM: selalu boleh, tidak butuh mention.

    try {
        const reply = await getGojoAiReply(body);
        await sock.sendMessage(jid, { text: reply }, { quoted: msg });
    } catch (err) {
        log.error(`GojoAI: ${err.message}`);
        // Detail provider hanya dicatat di log server. Jangan bocorkan
        // URL/status/error internal API ke user WhatsApp.
        try {
            await sock.sendMessage(jid, {
                text: '💭 Gojo lagi susah sinyal buat mikir, coba lagi bentar ya.'
            }, { quoted: msg });
        } catch {}
    }
    return true;
}
