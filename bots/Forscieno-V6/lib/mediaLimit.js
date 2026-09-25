// ═══════════════════════════════════════════════════════════════════
//  MEDIALIMIT.JS — Sistem Limit Harian + Beli Limit Pakai Gold
// ═══════════════════════════════════════════════════════════════════
//
//  ATURAN:
//  • Free    : 3x/hari, beli limit = 100 gold/limit
//  • Premium : 6x/hari, beli limit = 50 gold/limit (50% diskon)
//  • Owner / Creator : unlimited (tidak pernah kena limit)
//
//  Reset harian otomatis tiap kali hari kalender berubah (00:00 WIB).
// ═══════════════════════════════════════════════════════════════════

import { store, save }    from './db.js';
import { isOwner, isPremium, isCreator } from './roles.js';

const FREE_DAILY    = 3;
const PREMIUM_DAILY = 6;

function todayKey() {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
}

function limitStore() {
    return store('mediaLimits', {});
}

function getUserEntry(sender) {
    const data = limitStore();
    const today = todayKey();
    if (!data[sender] || data[sender].date !== today) {
        data[sender] = { date: today, used: 0 };
    }
    return data[sender];
}

/** Cek apakah masih punya limit. Kembalikan info status. */
export function checkMediaLimit(sender) {
    // Owner & Creator: unlimited
    if (isCreator(sender) || isOwner(sender)) {
        return { allowed: true, unlimited: true };
    }

    const prem   = isPremium(sender);
    const max    = prem ? PREMIUM_DAILY : FREE_DAILY;
    const entry  = getUserEntry(sender);
    const sisa   = max - entry.used;

    return {
        allowed: sisa > 0,
        unlimited: false,
        used: entry.used,
        max,
        sisa,
        isPremium: prem,
    };
}

/** Kurangi 1 limit harian. Panggil setelah command berhasil dijalankan. */
export function consumeMediaLimit(sender) {
    if (isCreator(sender) || isOwner(sender)) return;
    const data  = limitStore();
    const entry = getUserEntry(sender);
    entry.used += 1;
    data[sender] = entry;
    save('mediaLimits');
}

/** Purchase is intentionally disabled in the current build. */
export function buyMediaLimit(sender) {
    return { ok: false, reason: 'Pembelian limit tidak tersedia pada versi ini.' };
}

/** Tambah limit user secara manual (oleh owner/creator via .addlimit). */
export function addLimitManual(targetSender, amount = 1) {
    const data  = limitStore();
    const entry = getUserEntry(targetSender);
    // Kurangi 'used' supaya sisa bertambah (tidak melebihi max tapi cukup untuk manual override)
    entry.used  = Math.max(0, entry.used - amount);
    data[targetSender] = entry;
    save('mediaLimits');
    const prem  = isPremium(targetSender);
    const max   = prem ? PREMIUM_DAILY : FREE_DAILY;
    return { sisa: Math.min(max - entry.used + amount, max - entry.used), newUsed: entry.used, max };
}

/** Ringkasan status limit untuk ditampilkan ke user. */
export function limitStatusText(sender) {
    const info = checkMediaLimit(sender);
    if (info.unlimited) return '♾️ _Unlimited (Owner/Creator)_';
    return (
        `📊 Limit harian: *${info.sisa}/${info.max}* sisa\n` +
        `💡 Limit tambahan hanya dapat diberikan oleh Owner/Creator.`
    );
}
