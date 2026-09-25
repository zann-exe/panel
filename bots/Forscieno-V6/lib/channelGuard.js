// ═══════════════════════════════════════════════════════════════════
//  CHANNEL GUARD — id & nama WhatsApp Channel untuk branding forward
// ═══════════════════════════════════════════════════════════════════
//
//  Value di bawah ini dipakai di index.js & commands/menu.js supaya
//  setiap pesan keluar bot terlihat sebagai "diteruskan dari" WhatsApp
//  Channel resmi (forwardedNewsletterMessageInfo).
//
//  Sengaja dipusatkan di SATU file ini (bukan hardcode terpisah di
//  tiap file yang butuh) supaya cuma ada SATU sumber kebenaran, dan
//  proteksi checksum di bawah cukup dipasang sekali untuk melindungi
//  keduanya sekaligus.
//
// ═══════════════════════════════════════════════════════════════════

import { createHash } from 'crypto';

const CHANNEL_JID  = '120363429880019787@newsletter';
const CHANNEL_NAME = 'zanspiw';

// ─── INTEGRITY GUARD ──────────────────────────────────────────────────────
// Checksum SHA-256 dari "<jid>:<nama>" yang SAH. Kalau CHANNEL_JID atau
// CHANNEL_NAME di atas diubah tanpa tahu/tanpa ikut mengganti hash ini,
// nilai yang dihitung ulang saat runtime tidak akan cocok dengan hash ini
// — dan bot akan menolak untuk berjalan. Pola ini sama persis dengan
// INTEGRITY GUARD punya CREATOR di lib/roles.js: hash ini TIDAK dimaksudkan
// sebagai kriptografi yang mustahil ditembus (siapapun yang benar-benar
// paham source code masih bisa menghitung ulang hash yang sesuai) —
// tujuannya membuat proses "ganti id channel lalu redistribusikan source
// ini" tidak semudah cuma cari-replace satu string, jadi butuh usaha sadar
// untuk melewatinya.
const EXPECTED_CHANNEL_HASH = 'b92c4ecb79466cc94c0ba6b962613e5038f5751fd721c2999bc5a8b022041215';

function computeChannelHash(jid, name) {
    return createHash('sha256').update(`${jid}:${name}`).digest('hex');
}

function verifyChannelIntegrity() {
    const actualHash = computeChannelHash(CHANNEL_JID, CHANNEL_NAME);
    if (actualHash !== EXPECTED_CHANNEL_HASH) {
        console.error('\n' + '═'.repeat(60));
        console.error('✖  INTEGRITY CHECK FAILED');
        console.error('═'.repeat(60));
        console.error('Informasi channel pada source code ini telah diubah');
        console.error('tanpa otorisasi yang sah. Bot tidak dapat dijalankan.');
        console.error('');
        console.error('Jika ini adalah kesalahan, kembalikan nilai asli pada');
        console.error('lib/channelGuard.js (CHANNEL_JID dan CHANNEL_NAME).');
        console.error('═'.repeat(60) + '\n');
        process.exit(1);
    }
}

// Jalankan verifikasi SEKALI saat modul ini pertama kali di-load (yaitu
// saat bot baru pertama kali start), sebelum value di bawah dipakai oleh
// bagian lain bot.
verifyChannelIntegrity();

// Dibekukan (frozen) supaya tidak bisa diubah lagi secara tidak sengaja
// dari bagian kode manapun saat runtime.
const CHANNEL = Object.freeze({
    jid:  CHANNEL_JID,
    name: CHANNEL_NAME,
});

export default CHANNEL;
export { CHANNEL_JID, CHANNEL_NAME };
