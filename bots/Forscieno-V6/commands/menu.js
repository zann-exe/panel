import settings from '../setting.js';
import { fmtDate, fmtTime, fmtDuration } from '../lib/utils.js';
import { log } from '../lib/logger.js';
import { markMenuPending } from '../lib/menuShortcut.js';
import { mapChars, SMALLCAPS_MAP } from './toolsCommands11.js';

// FIX "font beda dari contoh": label section .menu sebelumnya pakai gaya
// unicode Bold-Italic Sans (𝙉𝙖𝙢𝙖, 𝑵𝑶𝑻𝑬, dst) — beda gaya sama contoh
// referensi yang dikasih user (gaya small-caps, mis. "ʙᴏᴛ ɪɴғᴏ"). sc()
// pakai SMALLCAPS_MAP yang SAMA persis dengan command .smallcaps yang
// sudah ada, supaya gaya font di .menu konsisten dengan tool bawaan bot.
// Diekspor (bukan cuma dipakai internal) supaya .allmenu di commands/index.js
// bisa pakai helper font yang SAMA — biar font section header di .allmenu
// konsisten dengan .menu, .menuadmin, dst (semua satu sumber).
export const sc = (text) => mapChars(text.toLowerCase(), SMALLCAPS_MAP);

const P   = settings.prefix   || '.';
const BOT = settings.botName  || 'Forscieno BOT';
const TAG = settings.botTagline || '❄️ Infinity Edition';

// ─── MENU UTAMA (RINGKAS) ─────────────────────────────────────────
// Sengaja dibuat singkat — info lengkap (proteksi aktif & daftar semua
// command) dipindahkan ke .allmenu, supaya .menu cepat dibaca sekilas.
// Struktur info (Nama/Status/Uptime/Respon/Versi/Mode/Prefix) terinspirasi
// dari format menu bot lain yang dicontohkan user, disesuaikan ke identitas
// Forscieno BOT.
export async function sendMainMenu(reply, sender, sock, jid, msg, opts = {}) {
    const now     = Date.now();
    const jam     = fmtTime(now);
    const tanggal = fmtDate(now);
    const { isOwner = false, isPremium = false, pushName = null, botStartTime = now } = opts;

    let latensi = 0;
    if (sock && jid) {
        const t0 = Date.now();
        try { await sock.sendPresenceUpdate('composing', jid); } catch { /* abaikan */ }
        latensi = Date.now() - t0;
    }

    const statusLabel = isOwner ? 'Pemilik Bot 👑' : isPremium ? 'Premium 💎' : 'Free User 🌿';
    const namaTampil  = pushName || (sender ? sender.split('@')[0] : 'Kakak');

    const userLines = '';

    const menuText =
`╭━━━〔 🌊 *${BOT.toUpperCase()}* 🌊 〕━━━⬣
┃ ⟤ ${sc('Nama')}      : ${namaTampil}
┃ ⟤ ${sc('Status')}    : ${statusLabel}
┃ ⟤ ${sc('Uptime')}    : ${fmtDuration(now - botStartTime)}
┃ ⟤ ${sc('Respon')}    : ${latensi.toFixed(2)} ms
┃ ⟤ ${sc('Versi')}     : v${settings.botVersion || '3.0.0'}
┃ ⟤ ${sc('Mode')}      : ${settings.public !== false ? 'Public' : 'Private'}
┃ ⟤ ${sc('Prefix')}    : ${P}
╰━━━━━━━━━━━━━━━━━━━━⬣

╭━━━〔 💭 ${sc('Note')} 〕━━━⬣
┃ _"Fitur bot ini mungkin tak sebanyak bot lain,_
┃ _tapi bot lain belum tentu rajin update & fix error 😝"_
╰━━━━━━━━━━━━━━━━━━━━⬣
[ 🌐 READY PANEL LEGAL ]
zanspiwpteroshoppanel.my.id
╭━━━〔 📖 ${sc('Keterangan')} 〕━━━⬣
┃ ⟤ 🌟 = ${sc('Creator')}
┃ ⟤ Ⓞ = ${sc('Owner')}
┃ ⟤ Ⓐ = ${sc('Admin')}
┃ ⟤ Ⓟ = ${sc('Premium')}
┃ ⟤ _Tanpa simbol = Free (semua bisa pakai)_
╰━━━━━━━━━━━━━━━━━━━━⬣`;
    // SATU pesan gabungan (bukan 2 pesan terpisah lagi): thumbnail jadi header
    // interactiveMessage, menuText (info bot + KETERANGAN) jadi body, tombol
    // tetap nativeFlowMessage seperti sebelumnya. Sebelumnya ini 2 pesan
    // (gambar+caption dulu, baru interactiveMessage menyusul) makanya di WA
    // muncul sebagai 2 bubble kepisah — sekarang cukup 1 relayMessage.
    // Pattern yang sudah terbukti stabil lewat trial-and-error:
    // 1. Bungkus dalam viewOnceMessage.message
    // 2. contextInfo (forwardedNewsletterMessageInfo) taruh DALAM interactiveMessage
    // 3. nativeFlowMessage sebagai plain object (bukan proto.create)
    // 4. relayMessage + additionalNodes biz/native_flow
    if (sock && jid) {
        try {
            const { generateWAMessageFromContent, prepareWAMessageMedia } = await import('@whiskeysockets/baileys');

            // Siapkan thumbnail sebagai media header. Kalau gagal (URL
            // bermasalah dll), lanjut TANPA gambar di header — jangan sampai
            // gara-gara 1 thumbnail, seluruh menu gagal terkirim.
            let headerMedia = {};
            if (settings.thumbnailUrl) {
                try {
                    headerMedia = await prepareWAMessageMedia(
                        { image: { url: settings.thumbnailUrl } },
                        { upload: sock.waUploadToServer }
                    );
                } catch (err) {
                    log?.warn?.(`[menu] gagal siapkan thumbnail header: ${err.message}`);
                }
            }

            const rows = [
                { title: '🛡️ Menu Admin',  description: 'Manajemen grup, proteksi & warn sistem',      id: `${P}menuadmin` },
                { title: '🛠️ Menu Tools',  description: 'Kalkulator, konversi, enkripsi & utilitas',  id: `${P}menutools` },
                { title: '🖼️ Menu Media',  description: 'Sticker, download TikTok/IG & foto profil',  id: `${P}menumedia` },
                { title: '🤖 Menu Bot',     description: 'Owner control, broadcast & jadibot',           id: `${P}menubot`   },
                { title: '🖥️ Menu Cpanel', description: 'Jualan slot server Pterodactyl (v1-v5)',       id: `${P}cpanel`    },
                { title: '📜 All Menu',     description: 'Lihat SEMUA command lengkap sekaligus',        id: `${P}allmenu`   }
            ];

            // FIX: comment di atas bilang pattern yang terbukti stabil itu
            // "1. Bungkus dalam viewOnceMessage.message" — tapi kode di bawah
            // ini sebelumnya TIDAK melakukan itu; messageContextInfo &
            // interactiveMessage langsung jadi root object, tanpa viewOnceMessage
            // sama sekali. Beberapa referensi implementasi native_flow lain untuk
            // Baileys (yang terbukti jalan) SEMUA membungkusnya dalam
            // viewOnceMessage.message. Tanpa itu, WhatsApp client kadang masih
            // sempat render body text-nya sebentar lalu "menghilang" (bubble-nya
            // di-collapse/disembunyikan lagi oleh client) karena bentuknya tidak
            // dikenali persis seperti yang diharapkan — ini konsisten dengan
            // laporan "teksnya kayak menghilang". Sekarang dibungkus dengan benar.
            const waMsg = generateWAMessageFromContent(jid, {
                viewOnceMessage: {
                    message: {
                        messageContextInfo: {
                            deviceListMetadata: {},
                            deviceListMetadataVersion: 2
                        },
                        interactiveMessage: {
                            header: {
                                title: '〔 領域展開 〕 Pilih Domain-mu',
                                hasMediaAttachment: !!headerMedia.imageMessage,
                                ...headerMedia
                            },
                            body: {
                                text: `${menuText}\n\nKetuk tombol di bawah untuk memilih kategori command 👇`
                            },
                            footer: {
                                text: `© ${BOT} | Forscieno BOT Official`
                            },
                            contextInfo: {
                                isForwarded: true,
                                forwardingScore: 999,
                                forwardedNewsletterMessageInfo: {
                                    newsletterJid: '120363429880019787@newsletter',
                                    newsletterName: 'Forscieno BOT Official',
                                    serverMessageId: 1
                                }
                            },
                            nativeFlowMessage: {
                                buttons: [{
                                    name: 'single_select',
                                    buttonParamsJson: JSON.stringify({
                                        title: '📋 Buka Daftar Menu',
                                        sections: [{ title: '📚 KATEGORI MENU', rows }]
                                    })
                                }]
                            }
                        }
                    }
                }
            }, { quoted: msg, userJid: sock.user?.jid });

            await sock.relayMessage(jid, waMsg.message, {
                messageId: waMsg.key.id,
                additionalNodes: [{
                    tag: 'biz',
                    attrs: {},
                    content: [{
                        tag: 'interactive',
                        attrs: { type: 'native_flow', v: '1' },
                        content: [{ tag: 'native_flow', attrs: { v: '9', name: 'mixed' } }]
                    }]
                }]
            });
            // Interactive menu berhasil terkirim: aktifkan konteks shortcut angka.
            markMenuPending(sender);
        } catch (err) {
            log?.warn?.(`[menu] tombol interaktif gagal: ${err.message}`);
            // Fallback: SATU pesan teks polos (info bot + KETERANGAN + shortcut
            // angka digabung) — walau interaktif gagal total, user tetap cuma
            // terima 1 pesan, bukan 2.
            markMenuPending(sender);
            await reply(
`${menuText}

『 領域展開 — Pilih Domain-mu 』
_Balas angka 1-6 atau ketik command-nya:_

*1* — 🛡️ Menu Admin
*2* — 🛠️ Menu Tools
*3* — 🖼️ Menu Media
*4* — 🤖 Menu Bot
*5* — 🖥️ Menu Cpanel
*6* — 📜 All Menu`
            );
        }
    }
}

export async function sendAdminMenu(reply) {
    await reply(
`╔══════════════════════════════════════╗
║   🛡️  *${sc('MENU ADMIN & MANAJEMEN GRUP')}*
╚══════════════════════════════════════╝

╭─「 👥 *${sc('MANAJEMEN MEMBER')}* 」
│ ${P}kick @tag        — Keluarkan member
│ ${P}promote @tag     — Jadikan admin
│ ${P}demote @tag      — Cabut jabatan admin
│ ${P}add 628xxx       — Tambah member baru
│ ${P}listadmin        — Daftar admin grup
│ ${P}membercount      — Jumlah total member
╰──────────────────────────────

╭─「 👑 *${sc('JABATAN BOT')}* 」
│ ${P}cekjabatan [@tag] — Cek jabatan (Creator/Owner/Premium)
│ ${P}addowner @tag    — Angkat Owner _(Creator only)_
│ ${P}delowner @tag    — Cabut Owner _(Creator only)_
│ ${P}listowner        — Daftar Creator & Owner
│ ${P}addprem @tag     — Angkat Premium _(Owner only)_
│ ${P}delprem @tag     — Cabut Premium _(Owner only)_
│ ${P}listprem         — Daftar user Premium
│
│ _Bisa juga diatur permanen lewat_
│ _\`ownerNumbers\` / \`premiumNumbers\`_
│ _di setting.js (butuh restart)._
╰──────────────────────────────

╭─「 ⚠️ *${sc('SISTEM WARN')}* 」
│ ${P}warn @tag        — Beri peringatan
│ ${P}unwarn @tag      — Hapus peringatan
│ ${P}checkwarn @tag   — Cek jumlah warn
│ ${P}warnlimit [n]    — Atur batas warn (default 3)
╰──────────────────────────────

╭─「 🔇 *${sc('MUTE & KUNCI GRUP')}* 」
│ ${P}mute [durasi]    — Mute semua member
│ ${P}unmute           — Unmute grup
│ ${P}mutestatus       — Cek status mute
│ ${P}lockgroup        — Kunci grup (hanya admin bisa chat)
│ ${P}unlockgroup      — Buka kunci grup
│ ${P}slowmode [detik] — Aktifkan slow mode
│ ${P}lockmedia on/off — Kunci pengiriman media
│ ${P}lockstiker on/off— Kunci pengiriman stiker
╰──────────────────────────────

╭─「 ⚙️ *${sc('PENGATURAN GRUP')}* 」
│ ${P}groupinfo        — Info lengkap grup
│ ${P}setname [nama]   — Ubah nama grup
│ ${P}setdesc [teks]   — Ubah deskripsi grup
│ ${P}link             — Dapatkan link undangan
│ ${P}revoke           — Reset link undangan
│ ${P}leave            — Bot keluar dari grup
│ ${P}hidetag [teks]   — Mention semua (tersembunyi)
│ ${P}tagall [teks]    — Mention semua member
╰──────────────────────────────

╭─「 👋 *${sc('WELCOME & FAREWELL')}* 」
│ ${P}welcome on/off   — Toggle pesan sambutan
│ ${P}setwelcome [teks]— Atur teks sambutan
│ ${P}farewell on/off  — Toggle pesan perpisahan
│ ${P}setfarewell [txt]— Atur teks perpisahan
│   _Variabel: {name} {group} {num}_
╰──────────────────────────────

╭─「 🛡️ *${sc('PROTEKSI')}* 」
│ ${P}antigb on/off         — Anti link grup WA
│ ${P}antilink on/off       — Anti semua link
│ ${P}antishortlink on/off  — Anti link pemendek
│ ${P}antilinkphising on/off— Anti link/pola phising
│ ${P}antispam on/off       — Anti spam pesan
│ ${P}antitoxic on/off      — Anti kata kasar
│ ${P}antijudol on/off      — Anti promosi judi online
│ ${P}antipinjol on/off     — Anti promosi pinjol ilegal
│ ${P}anticaps on/off       — Anti HURUF KAPITAL berlebihan
│ ${P}antivirtex on/off     — Anti teks virus/zalgo
│ ${P}antitag on/off        — Anti spam mention massal
│ _(Anti-flood otomatis aktif jika antispam on)_
│
│ ${P}resetprotection   — Matikan SEMUA proteksi sekaligus
│ ${P}antilinkall on/off— Semua proteksi link sekaligus
│ ${P}grouplockstatus   — Lihat status semua proteksi & lock
│ ${P}helpproteksi      — Cheatsheet ringkas semua proteksi
╰──────────────────────────────

╭─「 🔒 *${sc('LOCK KONTEN GRANULAR')}* 」
│ ${P}lockimage on/off    — Kunci gambar
│ ${P}lockvideo on/off    — Kunci video
│ ${P}lockdocument on/off — Kunci dokumen (.apk dll)
│ ${P}lockcontact on/off  — Kunci kontak/vCard
│ ${P}locklocation on/off — Kunci share lokasi
│ ${P}lockvn on/off       — Kunci voice note
│ ${P}lockaudio on/off    — Kunci file audio/musik
│ ${P}lockgif on/off      — Kunci GIF
│ ${P}lockpoll on/off     — Kunci polling
│ _(terpisah dari ${P}lockmedia — bisa kunci 1 jenis saja)_
╰──────────────────────────────

╭─「 📝 *${sc('KATA TERLARANG, LINK & WHITELIST')}* 」
│ ${P}addbadword [kata]  — Tambah kata terlarang custom
│ ${P}delbadword [kata]  — Hapus kata terlarang custom
│ ${P}listbadword        — Lihat daftar kata custom
│ ${P}allowlinkadd [dom] — Kecualikan domain dari Anti-Link
│ ${P}allowlinkdel [dom] — Hapus pengecualian domain
│ ${P}allowlinklist      — Lihat daftar domain dikecualikan
│ ${P}whitelistadd @tag  — Bebaskan member dari proteksi baru
│ ${P}whitelistdel @tag  — Hapus dari whitelist
│ ${P}whitelist          — Lihat daftar whitelist
╰──────────────────────────────

╭─「 📊 *${sc('POLL, JADWAL & LAPORAN')}* 」
│ ${P}poll [q]|[a]|[b] — Buat polling
│ ${P}vote [id] [no]   — Pilih jawaban poll
│ ${P}hasilpoll [id]   — Lihat hasil poll
│ ${P}listpoll         — Semua poll aktif
│ ${P}addjadwal [teks] — Tambah jadwal grup
│ ${P}listjadwal       — Lihat semua jadwal
│ ${P}deljadwal [no]   — Hapus jadwal
│ ${P}lapor [isi]      — Laporkan ke admin
│ ${P}listlaporan      — Lihat semua laporan
│ ${P}clearlaporan     — Hapus semua laporan
│ ${P}aktivitasgrup    — Statistik aktivitas
╰──────────────────────────────

╭─「 👀 *${sc('SIDER (MEMBER GAK AKTIF)')}* 」
│ ${P}sider [durasi]     — Cek member yg gak/jarang chat
│ ${P}kicksider [durasi] — Kick semua sider sekaligus
│ _Default durasi: 3 hari. Contoh: ${P}sider 7d_
│ _Admin grup tidak pernah dihitung sider._
╰──────────────────────────────

╭─「 📋 *${sc('FITUR LAIN')}* 」
│ ${P}ban @tag         — Ban user dari bot
│ ${P}unban @tag       — Unban user
│ ${P}banlist          — Lihat daftar user diblokir
│ ${P}unbanall         — Buka semua blokir sekaligus
│ ${P}autoreply [...]  — Atur auto-reply
│ ${P}notes [...]      — Catatan grup
╰──────────────────────────────

╭─「 👥➕ *${sc('MANAJEMEN MEMBER LANJUTAN')}* 」
│ ${P}kickall yakin    — Keluarkan SEMUA non-admin
│ ${P}warnall          — Beri warn ke SEMUA non-admin
│ ${P}cekwarnall       — Lihat semua member yg punya warn
│ ${P}topwarn          — Ranking member warn terbanyak
│ ${P}resetwarnall     — Reset semua data warn grup ini
│ ${P}mutemember @tag  — Bisukan 1 member (bukan grup)
│ ${P}unmutemember @tag— Buka bisu 1 member
│ ${P}listmutedmember  — Lihat member yang dibisukan
╰──────────────────────────────

╭─「 📥 *${sc('APPROVAL JOIN REQUEST')}* 」
│ _(khusus grup mode "Perlu Persetujuan Admin")_
│ ${P}listrequest         — Lihat permintaan join tertunda
│ ${P}approverequest 62xx — Terima 1 permintaan
│ ${P}rejectrequest 62xx  — Tolak 1 permintaan
│ ${P}approveall          — Terima semua sekaligus
│ ${P}rejectall           — Tolak semua sekaligus
╰──────────────────────────────

╭─「 ⏰ *${sc('JADWAL BUKA/TUTUP OTOMATIS')}* 」
│ ${P}jadwalbuka 07:00  — Jadwal buka grup tiap hari
│ ${P}jadwaltutup 22:00 — Jadwal tutup grup tiap hari
│ ${P}cekjadwalgrup     — Lihat jadwal aktif
│ ${P}canceljadwalgrup  — Batalkan jadwal
╰──────────────────────────────

╭─「 ⚙️➕ *${sc('KONFIGURASI GRUP LANJUTAN')}* 」
│ ${P}seticon        — Set foto grup (reply gambar)
│ ${P}hapusicon      — Hapus foto grup
│ ${P}lockinfo       — Kunci info grup (nama/ikon/desc)
│ ${P}unlockinfo     — Buka kunci info grup
│ ${P}ephemeral [d]  — Pesan sementara: off/1d/7d/90d
│ ${P}backupsetting  — Backup semua pengaturan grup
│ ${P}restoresetting — Kembalikan dari backup
╰──────────────────────────────

╭─「 📊 *${sc('DASHBOARD & INFO GRUP')}* 」
│ ${P}groupsummary   — Dashboard ringkas grup
│ ${P}groupage       — Umur grup ini
│ ${P}admincount     — Jumlah admin
│ ${P}groupcreator   — Siapa pembuat grup
│ ${P}exportmember   — Export data semua member
│ ${P}cekbot         — Cek status admin bot di grup ini
╰──────────────────────────────

╭─「 📢 *${sc('PENGUMUMAN & CATATAN')}* 」 _(baru!)_
│ ${P}setpengumuman [teks] — Pasang pengumuman grup
│ ${P}pengumuman            — Lihat pengumuman aktif
│ ${P}hapuspengumuman       — Hapus pengumuman
│ ${P}addmembernote @user [catatan] — Catatan ttg 1 member
│ ${P}listmembernote @user — Lihat catatan member
│ ${P}delmembernote @user [no] — Hapus 1 catatan
╰──────────────────────────────

╭─「 🗂️ *${sc('TEMPLATE GRUP')}* 」 _(baru!)_
│ ${P}savetemplate [nama] — Simpan snapshot proteksi grup
│ ${P}loadtemplate [nama] — Terapkan template ke grup ini
│ ${P}listtemplate        — Semua template tersimpan
│ ${P}deltemplate [nama]  — Hapus template
╰──────────────────────────────

╭─「 ⏰ *${sc('PENGUMUMAN TERJADWAL & ULTAH')}* 」 _(baru!)_
│ ${P}addannouncement 08:00 [teks] — Pesan berulang harian
│ ${P}listannouncement    — Lihat semua jadwal
│ ${P}delannouncement [no]— Hapus jadwal
│ ${P}setbirthday DD-MM   — Simpan tanggal lahirmu
│ ${P}listbirthday        — Daftar ultah member grup
│ _(Bot otomatis ucapin jam 08:00 pas harinya)_
╰──────────────────────────────

╭─「 ⚡ *${sc('BULK, AKTIVITAS & TUGAS')}* 」 _(baru!)_
│ ${P}bulkpromote/bulkdemote @user1 @user2 ... — Massal
│ ${P}bulkkick @user1 @user2 ... — Keluarkan banyak sekaligus
│ ${P}topactive          — Leaderboard member paling aktif
│ ${P}listinactive [hari]— Member yang gak aktif
│ ${P}assigntask @user [tugas] — Kasih tugas ke member
│ ${P}mytasks            — Lihat tugasmu
│ ${P}listtasks          — Semua tugas aktif (admin)
│ ${P}donetask [no]      — Tandai tugas selesai
│ ${P}maintenancemode on/off — Bot cuma respon Owner sementara
╰──────────────────────────────

╭─「 🎉 *${sc('EVENT & QUICK LOCK')}* 」 _(baru!)_
│ ${P}createevent YYYY-MM-DD [teks] — Buat event
│ ${P}rsvp [id] ya/tidak — Konfirmasi kehadiran
│ ${P}listevents / eventattendees [id]
│ ${P}quicklock  — Aktifkan proteksi darurat sekaligus
│ ${P}quickunlock — Matikan lagi
│ ${P}grouplinkqr — QR code link invite grup ini
│ ${P}previewwelcome — Lihat preview pesan welcome
╰──────────────────────────────`
    );
}

// ─── MENU TOOLS ────────────────────────────────────────────────────
export async function sendToolsMenu(reply) {
    await reply(
`╔══════════════════════════════════════╗
║   🛠️  *${sc('MENU TOOLS & UTILITY')}*
╚══════════════════════════════════════╝

╭─「 ℹ️ *${sc('INFO BOT')}* 」
│ ${P}pembayaran — Info pembayaran (DANA/GoPay/OVO)
│ ${P}sosmedowner — Sosial media Owner
│ ${P}owner   — Info & kontak developer
│ ${P}ping    — Cek latensi & status bot
│ ${P}whoami  — Lihat info nomormu
│ ${P}runtime — Lama bot sudah aktif
│ ${P}jam     — Waktu server sekarang
╰──────────────────────────────

╭─「 🔤 *${sc('MANIPULASI TEKS')}* 」
│ ${P}upper [teks]     — HURUF BESAR SEMUA
│ ${P}lower [teks]     — huruf kecil semua
│ ${P}reverse [teks]   — sket terbalik
│ ${P}alternating      — HuRuF SeLaNg-SeLiNg
│ ${P}titlecase [teks] — Setiap Kata Kapital
│ ${P}camelcase        — camelCaseFormat
│ ${P}snakecase        — snake_case_format
│ ${P}kebabcase        — kebab-case-format
│ ${P}leet [teks]      — l337 sp34k
│ ${P}rot13 [teks]     — ROT13 cipher
│ ${P}wordcount [teks] — Hitung jumlah kata
│ ${P}hitungvokal      — Hitung huruf vokal
│ ${P}hitungkonsonan   — Hitung konsonan
│ ${P}hapusvokal       — Hapus semua vokal
│ ${P}ulangteks [n]    — Ulangi teks N kali
│ ${P}frekuensikata    — Frekuensi tiap kata
╰──────────────────────────────

╭─「 🔐 *${sc('ENKRIPSI & ENCODING')}* 」
│ ${P}tobinary [txt]   — Teks → Binary
│ ${P}frombinary [bin] — Binary → Teks
│ ${P}tobase64 [txt]   — Teks → Base64
│ ${P}frombase64 [b64] — Base64 → Teks
│ ${P}tohex [txt]      — Teks → Hexadecimal
│ ${P}fromhex [hex]    — Hex → Teks
│ ${P}tomorse [txt]    — Teks → Morse Code
│ ${P}frommorse [...]  — Morse → Teks
│ ${P}caesarenkrip [n] — Caesar cipher encrypt
│ ${P}caesardekrip [n] — Caesar cipher decrypt
│ ${P}textascii [txt]  — Teks → ASCII codes
│ ${P}asciitext [...]  — ASCII → Teks
╰──────────────────────────────

╭─「 🔢 *${sc('MATEMATIKA')}* 」
│ ${P}calc [expr]      — Kalkulator pintar
│ ${P}persen [a] [b]   — Hitung persentase
│ ${P}persenubah [a][b]— Perubahan persentase
│ ${P}bmi [kg] [cm]    — Hitung BMI
│ ${P}bmidetail        — BMI detail lengkap
│ ${P}umur [YYYY-MM-DD]— Hitung usia
│ ${P}cekprima [n]     — Cek bilangan prima
│ ${P}faktorial [n]    — Hitung faktorial
│ ${P}fibonacci [n]    — Deret Fibonacci
│ ${P}gcdlcm [a] [b]   — FPB dan KPK
│ ${P}roman [n]        — Angka → Romawi
│ ${P}kuadrat [a][b][c]— Rumus kuadrat
│ ${P}average [...]    — Rata-rata angka
│ ${P}median [...]     — Nilai median
╰──────────────────────────────

╭─「 📐 *${sc('KONVERSI')}* 」
│ ${P}convertlength    — Konversi panjang
│ ${P}convertweight    — Konversi berat
│ ${P}suhu [n] [mode]  — Konversi suhu
│   _(c2f / f2c / c2k / k2c)_
│ ${P}suhulengkap [n]  — Konversi ke semua
╰──────────────────────────────

╭─「 💸 *${sc('KEUANGAN')}* 」
│ ${P}diskon [harga]%  — Hitung diskon
│ ${P}splitbill [..][n]— Bagi tagihan rata
│ ${P}hitungtip [bill] — Hitung tip (%)
╰──────────────────────────────

╭─「 ✅ *${sc('VALIDATOR')}* 」
│ ${P}cekpalindrom     — Cek palindrom
│ ${P}cekemail [email] — Validasi email
│ ${P}ceknohp [nomor]  — Validasi no HP
│ ${P}cekcc [nomor]    — Cek kartu kredit
│ ${P}cekpassword [pw] — Kekuatan password
╰──────────────────────────────

╭─「 🎲 *${sc('GENERATOR RANDOM')}* 」
│ ${P}genpassword [n]  — Generate password kuat
│ ${P}genuuid          — Generate UUID
│ ${P}pilih a, b, c    — Pilih secara random
│ ${P}shuffle a, b, c  — Acak urutan item
│ ${P}warnarandom      — Warna HEX random
│ ${P}tanggalrandom    — Tanggal random
╰──────────────────────────────

╭─「 📅 *${sc('TANGGAL & WAKTU')}* 」
│ ${P}harike [tanggal]  — Hari dalam minggu
│ ${P}sisahari [tgl]    — Hitung sisa hari
│ ${P}leapyear [tahun]  — Cek tahun kabisat
│ ${P}zodiaklahir [tgl] — Zodiak dari tgl lahir
╰──────────────────────────────

╭─「 🆕 *${sc('TOOLS BARU')}* 」
│ ${P}qrcode [teks]     — Generate QR code
│ ${P}shorturl [link]   — Pendekkan link
│ ${P}hex2rgb / rgb2hex — Konversi kode warna
│ ${P}vigenere [key][txt] — Vigenère cipher
│ ${P}atbash [teks]     — Atbash cipher
│ ${P}tobase32/frombase32 — Base32 encode/decode
│ ${P}slugify [teks]    — Ubah jadi URL slug
│ ${P}loremipsum [n]    — Generate lorem ipsum
│ ${P}randomname        — Nama fantasi random
│ ${P}anagram [a] [b]   — Cek anagram
│ ${P}syllable [teks]   — Hitung suku kata
│ ${P}readingtime [teks]— Estimasi waktu baca
│ ${P}numeronim [kata]  — Buat numeronim
│ ${P}dogyears [umur]   — Konversi umur anjing
│ ${P}jsonvalidate/jsonformat [json] — Cek/rapikan JSON
│ ${P}regextest [pattern] [teks] — Tes regex
╰──────────────────────────────

╭─「 🆕 *${sc('TOOLS BARU #2')}* 」
│ ${P}urlencode/urldecode, htmlencode/htmldecode
│ ${P}rot47, xorcipher/xordekrip [key][teks]
│ ${P}digitalroot/collatz/perfectnumber/popcount [n]
│ ${P}binaryops [a] [and/or/xor] [b]
│ ${P}circlearea/triangleheron/rectarea/spherevolume
│ ${P}stdev/statmode [n1,n2,...]
│ ${P}compoundinterest/simpleinterest/loanpayment/roi
│ ${P}businessdays/weeknumber/quarter [tanggal]
│ ${P}levenshtein [a] | [b], passphrase [n], acronym [teks]
│ ${P}listunique/listintersect/listdiff
│ ${P}windchill/heatindex/angleconvert/cmyk2rgb
╰──────────────────────────────

╭─「 🆕 *${sc('TOOLS BARU #3')}* 」
│ ${P}railfence/railfencedekrip, caesarbrute, piglatin
│ ${P}tobase36/frombase36
│ ${P}ncr/npr [n] [r], pascalrow [n], primelist [n]
│ ${P}trapezoidarea/hexagonarea/cylindervolume
│ ${P}ibancheck/macvalidate/ipv4validate
│ ${P}pingenerate/couponcode/numbertowords
│ ${P}fueleff/cookingconvert, textanalysis [teks]
╰──────────────────────────────

╭─「 🆕 *${sc('TOOLS BARU #4 (dasar)')}* 」
│ ${P}massconvert/volumeconvert [nilai] [mode]
│ ${P}trimspaces/capitalizefirst/countchar [teks]
│ ${P}randomcolorname, ageinseconds [tgl]
│ ${P}nextweekday [hari], gcdlist/lcmlist [n1,n2,...]
│ ${P}removedupewords/strlen/isnumeric/reversenumber
╰──────────────────────────────

╭─「 🆕 *${sc('TOOLS BARU #5')}* 」
│ ${P}extractnumbers/extractemails/extracturls [teks]
│ ${P}removepunctuation/wordwrap [teks]
│ ${P}tax/taxremove/discountstack — Kalkulator harga
│ ${P}retirement [umur_skrg] [umur_pensiun]
│ ${P}bmr/idealweight/waterintake — Info kesehatan dasar
│ ${P}timeconvert [detik], numeralsystem [n][dari][ke]
│ ${P}leapyearlist/daysinmonth, zodiaccompat [z1] [z2]
╰──────────────────────────────

╭─「 🆕 *${sc('TOOLS BARU #6')}* 」
│ ${P}simplifyfraction/fractiontodecimal/decimaltofraction
│ ${P}gpacalc [n1,n2,...], romanvalidate [angka]
│ ${P}currencyformat [angka] [IDR/USD/EUR]
│ ${P}rollnotation [XdY+Z] — Dadu ala tabletop
│ ${P}drawcard [n] — Kocok kartu remi
│ ${P}hashtaggen [topik]
╰──────────────────────────────

╭─「 🆕 *${sc('TOOLS BARU #7')}* 」
│ ${P}tobase58/frombase58
│ ${P}pressureconvert [nilai] [mode]
│ ${P}randomword, randomcity
│ ${P}topwords [teks] — Kata paling sering muncul
╰──────────────────────────────

╭─「 🆕 *${sc('TOOLS BARU #8 (dekorasi teks)')}* 」
│ ${P}upsidedown/zalgotext/smallcaps [teks]
│ ${P}strikethrough/underline/circledtext/fullwidth [teks]
│ ${P}hammingdistance/jaccard — Perbandingan teks/set
│ ${P}averagespeed/electricitybill
╰──────────────────────────────`
    );
}

// ─── MENU MEDIA ───────────────────────────────────────────────────
export async function sendMediaMenu(reply) {
    await reply(
`╔══════════════════════════════════════╗
║   🖼️  *${sc('MENU MEDIA')}*
╚══════════════════════════════════════╝

╭─「 🎵 *${sc('MUSIK YOUTUBE')}* 」
│ ${P}play <judul>   — Cari & kirim audio dari YouTube
│ _Contoh: \`${P}play Naruto opening\`_
╰──────────────────────────────

╭─「 📥 *${sc('DOWNLOAD SOSIAL MEDIA')}* 」
│ ${P}ig <link>      — Download video Instagram (reel/post)
│ ${P}tiktok <link>  — Download video TikTok
│ _Bisa juga REPLY ke pesan yang isinya link, lalu ketik command-nya_
╰──────────────────────────────

╭─「 📤 *${sc('REPOST MEDIA')}* 」
│ ${P}repost    — Kirim ulang media terakhir
│ ${P}mediainfo — Info media terakhir di chat
╰──────────────────────────────

╭─「 🎭 *${sc('STIKER')}* 」
│ ${P}sticker  — Cara membuat stiker WA
│ _Kirim gambar/video dengan caption_
│ \`${P}sticker\` untuk konversi otomatis
╰──────────────────────────────

╭─「 📸 *${sc('FOTO PROFIL')}* 」
│ ${P}pp [@tag]  — Lihat foto profil member
│ ${P}ppgrup     — Lihat foto profil grup
╰──────────────────────────────

╭─「 🟢 *${sc('BRAT & IQC')}* 」
│ ${P}brat <teks>        — Gambar teks ala "brat"
│ \`${P}iqc <teks> dark\` — Versi tema gelap
│ _Bisa juga reply pesan teks lalu ketik command-nya_
╰──────────────────────────────

╭─「 🆕 *${sc('DOWNLOADER TAMBAHAN')}* 」
│ ${P}threads, reddit, bilibili, dailymotion, vimeo, snackvideo
│ _Reply/kirim link platform terkait + command-nya_
╰──────────────────────────────

╭─「 🎛️ *${sc('EFEK MEDIA (butuh ffmpeg)')}* 」
│ ${P}grayscale / mirror / blur — Reply gambar (grayscale/mirror bisa video juga)
│ ${P}rotate90 / rotate180      — Putar gambar
│ ${P}hd                        — Upscale + pertajam foto (reply foto)
│ ${P}speedup / slowmo          — Reply video, ubah kecepatan 2x/0.5x
│ ${P}mutevideo                 — Hapus suara dari video
│ ${P}extractaudio              — Ambil audio dari video jadi mp3
│ ${P}volumeup                  — Reply voice note/audio, naikkan volume 2x
╰──────────────────────────────

╭─「 🎛️ *${sc('EFEK MEDIA #2')}* 」
│ ${P}sepia / invert / pixelate — Reply gambar
│ ${P}brighten / darken         — Atur kecerahan gambar
│ ${P}reversevideo              — Reply video, dibalik jadi mundur
│ ${P}flipvertical / square     — Flip vertikal / crop persegi
│ ${P}watermark [teks]          — Reply gambar + caption teks watermark
╰──────────────────────────────

╭─「 🤖 *${sc('AI STYLE TRANSFER')}* 」 _(baru! butuh setup)_
│ ${P}tobotak / tochibi / tofigura / toghibli
│ ${P}tohijab / tolego / tohitam / to3d
│ ${P}toroblox / tooilpainting
│ _Reply/kirim foto + command-nya_
│ ⚠️ Butuh settings.puterAuthToken diisi dulu di setting.js
│ (lihat komentar setup lengkap di situ)
╰──────────────────────────────

💡 _Fitur media terus berkembang!_
_Update bot secara berkala untuk fitur baru._`
    );
}

// ─── MENU BOT ─────────────────────────────────────────────────────
export async function sendBotMenu(reply) {
    await reply(
`╔══════════════════════════════════════╗
║   🤖  *${sc('MENU BOT — OWNER CONTROL')}*
╚══════════════════════════════════════╝

╭─「 📦 *${sc('INFO FITUR')}* 」
│ ${P}totalfitur   — Jumlah total command/fitur bot
│ ${P}allmenu      — Lihat semua command lengkap
╰──────────────────────────────

╭─「 📢 *${sc('BROADCAST')}* 」
│ ${P}broadcast [pesan]     — Kirim ke semua grup
│ ${P}broadcastuser [pesan] — Kirim ke semua user tercatat
│ ${P}listgrup              — Lihat jumlah grup bot
│ _⚠️ Khusus owner saja_
╰──────────────────────────────

╭─「 🔄 *${sc('JADIBOT (MULTI-DEVICE)')}* 」
│ ${P}jadibot [628xxx]  — Pasang bot di nomor lain
│ ${P}stopbot [628xxx]  — Hentikan jadibot
│ ${P}listjadibot       — Daftar jadibot aktif
╰──────────────────────────────

╭─「 🖥️ *${sc('CPANEL — JUALAN SLOT SERVER')}* 」
│ ${P}cpanel — Menu lengkap create/kelola server Pterodactyl (v1-v5)
│ _⚠️ Isi settings.pterodactyl di setting.js dulu_
╰──────────────────────────────

╭─「 📊 *${sc('STATISTIK & SARAN')}* 」 _(baru!)_
│ ${P}botstats    — Statistik pemakaian bot
│ ${P}changelog   — Riwayat update bot
│ ${P}suggest [saran] — Kirim saran fitur ke Owner
│ ${P}listsuggestions — Lihat semua saran (Owner)
╰──────────────────────────────

╭─「 🙏 *${sc('CREDITS & SUPPORT')}* 」 _(baru!)_
│ ${P}credits    — Teknologi di balik bot ini
│ ${P}support    — Butuh bantuan? Mulai dari sini
│ ${P}backupnow  — Backup manual data bot (Owner)
│ ${P}version    — Lihat versi bot saat ini
│ ${P}delay [detik] — Atur delay balasan bot (0 = instan, Owner/Admin)
╰──────────────────────────────

╭─「 ℹ️ *${sc('CATATAN PENTING')}* 」
│ ◈ Setiap jadibot = koneksi WA terpisah
│ ◈ Max ${20} jadibot aktif bersamaan
│ ◈ Risiko ban nomor jadibot ditanggung user
│ ◈ Gunakan dengan bijak!
╰──────────────────────────────`
    );
}
