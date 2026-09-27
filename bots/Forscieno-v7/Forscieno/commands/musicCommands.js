/**
 * musicCommands.js — Fitur .play untuk Gojo Satoru MD
 * Cari & download audio dari YouTube, lalu kirim ke pengguna.
 *
 * ═══════════════════════════════════════════════════════════════════
 *  GANTI DARI @distube/ytdl-core KE yt-dlp (lihat lib/ytdlpBinary.js
 *  untuk penjelasan lengkap kenapa) — singkatnya: @distube/ytdl-core
 *  sudah di-archive (tidak ada update lagi), itu sebabnya .play selalu
 *  gagal dengan "Status code: 403". yt-dlp (project terpisah, dijalankan
 *  sebagai binary lewat child_process — BUKAN library Node.js) jauh
 *  lebih sering di-update mengikuti perubahan YouTube, dan binary
 *  standalone-nya tidak butuh Python ter-install di server.
 * ═══════════════════════════════════════════════════════════════════
 *
 * Dependensi:
 *   - lib/ytdlpBinary.js : auto-download & jalankan binary yt-dlp
 *   (yt-search SUDAH TIDAK DIPAKAI di sini — yt-dlp sendiri sudah bisa
 *   search YouTube lewat sintaks "ytsearch1:<query>", jadi satu sumber
 *   kebenaran yang sama dipakai untuk cari & download, bukan dua tools
 *   berbeda yang bisa saling tidak sinkron.)
 */

import { ensureYtDlp, runYtDlp } from '../lib/ytdlpBinary.js';

// ─── Helper: format durasi detik → mm:ss / h:mm:ss ───────────────
function fmtDur(seconds) {
    seconds = Math.round(seconds || 0);
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    if (h > 0) return `${h}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    return `${m}:${String(s).padStart(2, '0')}`;
}

function fmtViews(n) {
    if (!n) return '?';
    return Number(n).toLocaleString('id-ID');
}

// ─── Helper: cari 1 video lewat yt-dlp sendiri (sintaks ytsearch1:) ──
// --dump-single-json mengembalikan metadata video TANPA mendownloadnya
// (cepat, hanya beberapa detik), mirip cara kerja yt-search sebelumnya
// tapi datanya datang dari sumber yang SAMA dengan yang nanti dipakai
// untuk download — jadi tidak ada risiko video yang ditemukan saat
// "search" beda dengan yang di-download.
async function searchVideo(binPath, query) {
    const { stdout } = await runYtDlp(binPath, [
        `ytsearch1:${query}`,
        '--dump-single-json',
        '--no-warnings',
        '--no-playlist',
        '--skip-download',
    ], { timeoutMs: 30_000 });

    const text = stdout.toString('utf8').trim();
    if (!text) return null;

    // ytsearch1: mengembalikan SATU objek JSON (bukan array), karena
    // batas hasil sudah dipatok 1 lewat angka di belakang "ytsearch".
    let data;
    try {
        data = JSON.parse(text);
    } catch {
        return null;
    }
    // Beberapa versi yt-dlp membungkusnya dalam { entries: [...] }
    // kalau query berupa playlist pencarian — tangani keduanya.
    if (data?.entries?.length) data = data.entries[0];
    if (!data || !data.id) return null;

    return {
        id: data.id,
        url: data.webpage_url || `https://www.youtube.com/watch?v=${data.id}`,
        title: data.title || 'Tanpa judul',
        author: data.uploader || data.channel || 'Unknown',
        seconds: data.duration || 0,
        views: data.view_count || 0,
    };
}

// ─── Command .play ────────────────────────────────────────────────
async function play(reply, sock, jid, msg, args) {
    if (!args || args.length === 0) {
        return reply(
`🎵 *CARA PAKAI .play*

Ketik judul lagu atau artis:
➜ \`.play Naruto opening\`
➜ \`.play Yoasobi Idol\`
➜ \`.play Alan Walker Faded\`

Bot akan cari di YouTube lalu kirim audionya langsung!`
        );
    }

    const query = args.join(' ');

    // 0. Siapkan binary yt-dlp (download sekali kalau belum ada — bisa
    //    makan waktu beberapa detik di pemanggilan PERTAMA saja).
    let binPath;
    try {
        binPath = await ensureYtDlp();
    } catch (err) {
        return reply(`❌ ${err.message}`);
    }

    // 1. Beritahu user sedang mencari
    await reply(`🔍 Mencari *"${query}"* di YouTube...`);

    let video;
    try {
        video = await searchVideo(binPath, query);
        if (!video) return reply('❌ Tidak ada hasil ditemukan. Coba kata kunci lain.');
    } catch (err) {
        return reply(`❌ Gagal mencari lagu: ${err.message}`);
    }

    // 2. Cek durasi — batasi 10 menit supaya tidak timeout / file terlalu besar
    const MAX_DURATION_SEC = 600;
    if (video.seconds > MAX_DURATION_SEC) {
        return reply(
`⚠️ Durasi lagu terlalu panjang!

🎵 *${video.title}*
⏱️ Durasi: ${fmtDur(video.seconds)} (maks. 10 menit)

Coba cari lagu yang lebih pendek ya.`
        );
    }

    // 3. Beritahu user sedang download
    await reply(
`🎵 *Ditemukan!*

📌 *${video.title}*
👤 ${video.author}
⏱️ ${fmtDur(video.seconds)}
👁️ ${fmtViews(video.views)} views

⬇️ Mengunduh audio...`
    );

    // 4. Download audio lewat yt-dlp, langsung ke stdout (tanpa nulis file
    //    sementara ke disk) — "-o -" artinya output ke stdout.
    //    Format dipilih 'bestaudio' (stream audio mentah asli, TANPA proses
    //    convert/extract tambahan) — sengaja TIDAK pakai --extract-audio,
    //    supaya fitur ini tidak butuh ffmpeg ter-install untuk kasus paling
    //    umum. Mimetype dikirim sesuai container aslinya (lihat langkah 5).
    let audioBuffer;
    try {
        const { stdout } = await runYtDlp(binPath, [
            video.url,
            '-f', 'bestaudio',
            '--no-warnings',
            '--no-playlist',
            '-o', '-',
        ], { timeoutMs: 180_000 });
        audioBuffer = stdout;
        if (!audioBuffer || audioBuffer.length === 0) throw new Error('Output kosong dari yt-dlp.');
    } catch (err) {
        return reply(
`❌ Gagal mengunduh audio:
${err.message}

Coba lagi beberapa saat, atau coba judul/lagu lain.`
        );
    }

    // 5. Kirim audio ke user — coba beberapa mimetype umum (kebanyakan
    //    'bestaudio' YouTube adalah container m4a/webm-opus), WhatsApp
    //    biasanya tetap bisa mainkan walau mimetype tidak 100% presisi.
    const mimetypesToTry = ['audio/mp4', 'audio/mpeg', 'audio/ogg; codecs=opus'];
    let sent = false;
    let lastErr;
    for (const mimetype of mimetypesToTry) {
        try {
            await sock.sendMessage(jid, {
                audio:    audioBuffer,
                mimetype,
                ptt:      false,        // false = file audio biasa (bukan voice note)
            }, { quoted: msg });
            sent = true;
            break;
        } catch (err) {
            lastErr = err;
        }
    }
    if (!sent) {
        return reply(`❌ Gagal mengirim audio: ${lastErr?.message || 'unknown error'}`);
    }
}

// ─── Export ───────────────────────────────────────────────────────
export const musicCommands = { play };
