// ═══════════════════════════════════════════════════════════════════
//  MENUSHORTCUT.JS — Shortcut Angka untuk .menu
//  Dipisah jadi modul sendiri (bukan ditaruh di menu.js ATAU
//  messagePipeline.js) supaya keduanya bisa sama-sama import tanpa
//  bikin circular dependency (menu.js dipakai oleh commands/index.js,
//  yang juga dipakai oleh messagePipeline.js).
// ═══════════════════════════════════════════════════════════════════

import settings from '../setting.js';

const PREFIX = settings.prefix || '.';

// Pemetaan angka balasan → nama command tujuan (tanpa prefix).
// RPG/Fun sudah sengaja dihapus dari bot, jadi shortcut harus mengikuti
// kategori menu yang benar-benar masih tersedia.
export const MENU_SHORTCUT_MAP = {
    '1': 'menuadmin',
    '2': 'menutools',
    '3': 'menumedia',
    '4': 'menubot',
    '5': 'cpanel',
    '6': 'allmenu',
};

const PENDING_TTL_MS = 3 * 60 * 1000; // berlaku 3 menit sejak .menu ditampilkan
const pendingBySender = new Map();    // sender -> timestamp

// Dipanggil dari menu.js setiap kali .menu berhasil ditampilkan ke user.
export function markMenuPending(sender) {
    if (sender) pendingBySender.set(sender, Date.now());
}

// Dipanggil dari messagePipeline.js. Mengembalikan nama command (tanpa
// prefix) kalau body persis 1 digit "1".."6" DAN sender masih dalam
// jendela waktu sejak .menu terakhir ditampilkan ke dia. Sekali dipakai,
// status pending langsung dihapus (one-shot) supaya angka berikutnya di
// luar konteks .menu tidak ke-trigger lagi secara tidak sengaja.
export function resolveMenuShortcut(sender, rawBody) {
    const bareDigit = (rawBody || '').trim();
    const target = MENU_SHORTCUT_MAP[bareDigit];
    if (!target) return null;

    const ts = pendingBySender.get(sender);
    if (!ts) return null;
    pendingBySender.delete(sender);

    if (Date.now() - ts > PENDING_TTL_MS) return null;
    return PREFIX + target;
}
