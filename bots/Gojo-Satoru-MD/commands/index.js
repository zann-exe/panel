import { rpgCommands } from './rpgCommands.js';
import { getReplyDelayOverride, setReplyDelayOverride } from '../lib/replyDelay.js';
import { recallRealJid } from '../lib/lidMapping.js';
import { rpgCommands2 } from './rpgCommands2.js';
import { rpgCommands3 } from './rpgCommands3.js';
import { rpgCommands4 } from './rpgCommands4.js';
import { rpgCommands5 } from './rpgCommands5.js';
import { adminCommands, checkMute, isGroupLocked } from './adminCommands.js';
import { adminCommands2 } from './adminCommands2.js';
import { adminCommands3 } from './adminCommands3.js';
import { adminCommands4 } from './adminCommands4.js';
import {
    manualDeleteNsfw, checkNsfwStrikeCmd,
    resetNsfwStrikeCmd, setNsfwStrikeLimitCmd,
} from '../features/antiNsfw.js';
import { funCommands } from './funCommands.js';
import { funCommands2 } from './funCommands2.js';
import { funCommands3 } from './funCommands3.js';
import { textTools, mathTools, converterTools, generatorTools, infoTools } from './toolsCommands.js';
import { mathTools2, dateTools, formatTools, validatorTools } from './toolsCommands2.js';
import { toolsCommands3 } from './toolsCommands3.js';
import { toolsCommands4 } from './toolsCommands4.js';
import { toolsCommands5 } from './toolsCommands5.js';
import { toolsCommands6 } from './toolsCommands6.js';
import { toolsCommands7 } from './toolsCommands7.js';
import { toolsCommands8 } from './toolsCommands8.js';
import { toolsCommands9 } from './toolsCommands9.js';
import { toolsCommands10 } from './toolsCommands10.js';
import { toolsCommands11 } from './toolsCommands11.js';
import { toolsCommands12 } from './toolsCommands12.js';
import { funCommands4 } from './funCommands4.js';
import {
    toBotakCmd, toChibiCmd, toFiguraCmd, toGhibliCmd, toHijabCmd,
    toLegoCmd, toHitamCmd, to3dCmd, toRobloxCmd, toOilPaintingCmd,
} from './mediaCommands3.js';
import { getGroupSettings } from '../lib/db.js';
import {
    grayscaleCmd, mirrorCmd, blurCmd, rotate90Cmd, rotate180Cmd,
    speedUpCmd, slowMoCmd, muteVideoCmd, extractAudioCmd, volumeUpCmd,
    sepiaCmd, invertCmd, pixelateCmd, brightenCmd, darkenCmd, reverseVideoCmd,
    flipVerticalCmd, squareCropCmd, watermarkCmd, hdCmd,
} from './mediaCommands2.js';
import {
    trackCommandUsage, botStats, showChangelog,
    submitSuggestion, listSuggestions, clearSuggestions,
    showCredits, showSupport, backupNow,
} from './botCommands.js';
import {
    eventCreate, eventRsvp, eventList, eventAttendees,
    quickLock, quickUnlock,
} from './adminCommands7.js';
import { mediaCommands } from './mediaCommands.js';
import { gojoCommands } from './gojoCommands.js';
import { broadcastCommands } from './broadcastCommands.js';
import { jadibotCommands } from './jadibotCommands.js';
import { musicCommands } from './musicCommands.js';
import { socialDownloadCommands } from './socialDownloadCommands.js';
import { trackCommand, countUsers, countGroups, getTotalCommandsRan, getTopCommands } from '../lib/db.js';
import { fmtDuration, safeReplyText, withTimeout, fmtTime, fmtDate, isLidJid } from '../lib/utils.js';
import { isCreator, isOwner, isPremium, listOwners, listPremium, getRoleLabel, getCreatorInfo, addOwner, removeOwner, addPremium, removePremium, isCoCreator, listCoCreators, addCoCreator, removeCoCreator } from '../lib/roles.js';
import { checkMediaLimit, consumeMediaLimit, buyMediaLimit, addLimitManual, limitStatusText } from '../lib/mediaLimit.js';
import { getChar, saveChar } from '../lib/rpgEngine.js';
import { isAutoread, setAutoread, isAutotyping, setAutotyping } from '../lib/autoFeatures.js';
import { isGojoAiEnabled, setGojoAiEnabled } from '../lib/gojoAi.js';
import {
    cpanelMenuText, makeCreateServerHandler, makeListServerHandler,
    makeDelServerHandler, makeServerInfoHandler, makeRoleHandler,
    makeGcSellerHandler, makeCadminHandler,
} from './panelCommands.js';
import { VALID_SERVERS, VALID_ROLES, RAM_TIERS } from '../lib/pterodactylReseller.js';
import {
    guildCreate, guildJoin, guildLeave, guildKick, guildPromote, guildDemote,
    guildDonate, guildUpgrade, guildDisband, guildInfo, guildMembers, guildListCmd,
} from './rpgCommands6.js';
import {
    plantCmd, waterCmd, harvestCmd, farmStatusCmd,
    titlesCmd, equipTitleCmd, cookCmd, recipesCmd,
    bountyCmd, claimBountyCmd,
} from './rpgCommands7.js';
import {
    pinAdd, pinRemove, pinList,
    noteAdd, noteList, noteDel,
    templateSave, templateLoad, templateList, templateDel,
    announcementAdd, announcementList, announcementDel,
    birthdaySet, birthdayList, birthdayDel,
} from './adminCommands5.js';
import {
    bulkPromote, bulkDemote, bulkKick,
    listInactive, topActive,
    taskAssign, taskMine, taskList, taskDone,
    maintenanceToggle,
} from './adminCommands6.js';
import { store, save } from '../lib/db.js';
import { sewaCommands } from './sewaCommands.js';
import { bratGenerate, iqc } from './bratCommands.js';
import { checkSewaExpiry, isSewaActive, isSewaMode } from '../lib/sewaBot.js';

// ── Runtime bot config (selfMode dll) — persist ke db ───────────────────────
function botCfg() { return store('botConfig', { selfMode: false, autojoin: true }); }
function saveBotCfg() { save('botConfig'); }

// Load saved config saat startup (mutasi settings langsung)
;(() => {
    const cfg = botCfg();
    if (typeof cfg.selfMode === 'boolean') settings.selfMode = cfg.selfMode;
    if (typeof cfg.public  === 'boolean') settings.public   = cfg.public;
})();
import { log } from '../lib/logger.js';
import { sendMainMenu, sendAdminMenu, sendFunMenu, sendToolsMenu, sendMediaMenu, sendBotMenu, sendRpgMenu, sc } from './menu.js';
import settings from '../setting.js';
import { parseDaftarInput, register, getProfile, isRegistered } from '../lib/registry.js';

const BOT_START_TIME = Date.now();

// ─── REPLY (PLAIN TEXT) ───────────────────────────────────────────────────
// CATATAN: fitur thumbnail/externalAdReply yang sebelumnya ada di sini
// SUDAH DIHAPUS. Penyebabnya: ditemukan error nyata di lapangan —
//   "The value of "value" is out of range. It must be >= 0 and <= 255"
// — yang terjadi spesifik saat mengirim externalAdReply ke JID berformat
// @lid (format "Linked ID" baru yang dipakai WhatsApp untuk beberapa
// akun/grup). Error ini membuat SESSION BAILEYS RUSAK TOTAL ("Session
// rusak. Auto-reset...", lalu "Session lama dihapus otomatis"), yang
// kemungkinan besar adalah akar dari masalah command yang gagal total
// tanpa balasan ATAUPUN error yang kita selidiki sebelumnya — bukan
// sekadar 1 pesan gagal, tapi seluruh sesi koneksi ke WhatsApp jadi
// tidak sehat setelahnya. Karena risiko ini (crash + corrupt session)
// jauh lebih besar daripada manfaat kosmetik sebuah thumbnail, fitur ini
// dihapus sepenuhnya, bukan sekadar diberi try/catch tambahan.
async function replyWithThumb(sock, jid, text, quotedMsg) {
    text = safeReplyText(text);
    try {
        return await withTimeout(sock.sendMessage(jid, { text }, { quoted: quotedMsg }), 30_000, 'sendMessage(plainText)');
    } catch (err) {
        log.error(`GAGAL kirim pesan ke ${jid}: ${err.message}`);
        throw err;
    }
}

// ─── REPLY DENGAN GAMBAR (thumbnail khusus per-command) ────────────────────
// PENTING: ini BEDA dengan externalAdReply yang dihapus di atas — ini kirim
// gambar biasa (message `image`, persis pola settings.thumbnailUrl yang
// sudah dipakai di .menu & .allmenu), BUKAN link-preview ad-reply. Jadi
// tidak memicu bug @lid yang dulu bikin session corrupt. Selalu fallback
// ke teks biasa (replyWithThumb) kalau kirim gambar gagal.
export async function replyWithImage(sock, jid, quotedMsg, imageUrl, text) {
    if (imageUrl) {
        try {
            await withTimeout(
                sock.sendMessage(jid, { image: { url: imageUrl }, caption: safeReplyText(text) }, { quoted: quotedMsg }),
                30_000,
                'sendMessage(image)'
            );
            return;
        } catch (err) {
            log.error(`Gagal kirim gambar thumbnail ke ${jid}: ${err.message}`);
            // lanjut ke fallback teks biasa di bawah
        }
    }
    await replyWithThumb(sock, jid, text, quotedMsg);
}

function getMentioned(msg) {
    return msg.message?.extendedTextMessage?.contextInfo?.mentionedJid || [];
}

// ─── COMMAND TABLE ──────────────────────────────────────────────────────
// Each entry: [aliases[], handler(ctx)]
// ctx = { sock, msg, jid, sender, args, isGroup, body, reply, isAdmin, mentioned }
const routes = [];

// Command rahasia: tetap bisa dipanggil lewat prefix seperti biasa,
// tapi sengaja DIHILANGKAN dari .menu, .allmenu, dan menu kategori manapun.
const HIDDEN_COMMANDS = new Set([
    'ryoiken', 'ryoikitenkai', 'domainexpansion', 'tenkai',
]);

function reg(aliases, handler) {
    for (const a of aliases) routes.push([a, handler]);
}

// ── MENU / HELP ──────────────────────────────────────────────────────────
reg(['menu', 'help', 'start'], async (ctx) => sendMainMenu(ctx.reply, ctx.sender, ctx.sock, ctx.jid, ctx.msg, {
    isOwner: ctx.isOwner,
    isPremium: ctx.isPremium,
    pushName: ctx.msg?.pushName,
    botStartTime: BOT_START_TIME,
}));

// (Handler .allmenu didaftarkan di bawah, setelah routeMap tersedia —
//  lihat dekat definisi getAllCommandNames())
reg(['menurpg', 'rpgmenu', 'menugame'], async (ctx) => sendRpgMenu(ctx.reply));
reg(['menuadmin', 'adminmenu'], async (ctx) => sendAdminMenu(ctx.reply));
reg(['menufun', 'funmenu'], async (ctx) => sendFunMenu(ctx.reply));
reg(['menutools', 'toolsmenu'], async (ctx) => sendToolsMenu(ctx.reply));
reg(['menumedia', 'mediamenu'], async (ctx) => sendMediaMenu(ctx.reply));
reg(['menubot', 'botmenu'], async (ctx) => sendBotMenu(ctx.reply));

// .totalfitur — tampilkan jumlah total command/fitur yang terdaftar di
// bot ini. Pakai getRegisteredCommandCount() (didefinisikan di bawah,
// setelah routeMap dibuat) supaya angkanya selalu akurat & otomatis
// ikut bertambah kalau ada command baru — tidak di-hardcode manual.
reg(['totalfitur', 'totalfeature', 'jumlahfitur'], async (ctx) => {
    const total = getRegisteredCommandCount();
    const prefix = settings.prefix || '.';
    await ctx.reply(
`📦 *TOTAL FITUR ${settings.botName.toUpperCase()}*
━━━━━━━━━━━━━━━━━━
✨ Total command terdaftar : *${total} fitur*
━━━━━━━━━━━━━━━━━━
💡 Ketik *${prefix}allmenu* untuk lihat daftar lengkapnya.
💡 Ketik *${prefix}menu* untuk tampilan ringkas per kategori.`
    );
});

// ── REGISTRASI WAJIB (.daftar nama.umur) ──────────────────────────────────
reg(['daftar', 'register'], async (ctx) => {
    // Balasan .daftar yang MENYURUH/MEMANDU user daftar (belum terdaftar,
    // format salah, dsb) pakai thumbnail khusus (settings.thumbnailDaftar)
    // lewat replyWithImage. Khusus balasan "PENDAFTARAN BERHASIL" di bawah
    // SENGAJA pakai ctx.reply (teks polos) — thumbnail dihapus dari situ saja.
    const kirim = (text) => replyWithImage(ctx.sock, ctx.jid, ctx.msg, settings.thumbnailDaftar, text);

    if (isRegistered(ctx.sender) || ctx.isOwner) {
        const profile = getProfile(ctx.sender);
        if (profile) {
            return kirim(`✅ Kamu sudah terdaftar sebagai *${profile.name}* (${profile.age} tahun).`);
        }
        return kirim('✅ Kamu sudah bisa pakai bot ini (Owner/Creator otomatis terdaftar).');
    }

    const parsed = parseDaftarInput(ctx.args.join(' '));
    if (!parsed) {
        return kirim(
`📋 *CARA DAFTAR*
━━━━━━━━━━━━━━━━━━
◈ Format  : *${settings.prefix}daftar nama.umur*
◈ Contoh  : *${settings.prefix}daftar Gojo.20*
━━━━━━━━━━━━━━━━━━`
        );
    }

    const result = register(ctx.sender, parsed.name, parsed.age);
    if (!result.ok) return kirim(`❌ ${result.reason}`);

    await ctx.reply(
`✅ *PENDAFTARAN BERHASIL!*
━━━━━━━━━━━━━━━━━━
◈ Nama : *${parsed.name}*
◈ Umur : *${parsed.age} tahun*
━━━━━━━━━━━━━━━━━━
Selamat bergabung di *${settings.botName}*! 🌊
Ketik *${settings.prefix}menu* untuk lihat semua command.`
    );
});

// ── RPG: CHARACTER ───────────────────────────────────────────────────────
reg(['rpg', 'mulai', 'startrpg', 'createchar'], async (ctx) => rpgCommands.startRPG(ctx.reply, ctx.sender, ctx.args));
reg(['class', 'ganticlass', 'setclass'], async (ctx) => rpgCommands.setClass(ctx.reply, ctx.sender, ctx.args));
reg(['profil', 'profile', 'cek', 'stats', 'char'], async (ctx) => rpgCommands.showProfile(ctx.reply, ctx.sender, ctx.msg, ctx.mentioned));
reg(['inventory', 'inv', 'bag'], async (ctx) => rpgCommands.showInventory(ctx.reply, ctx.sender));
reg(['equip', 'pakai'], async (ctx) => rpgCommands.equipItem(ctx.reply, ctx.sender, ctx.args));
reg(['unequip', 'lepas'], async (ctx) => rpgCommands.unequipItem(ctx.reply, ctx.sender, ctx.args));
reg(['use', 'pakaiitem', 'minum'], async (ctx) => rpgCommands.useItem(ctx.reply, ctx.sender, ctx.args));
reg(['istirahat', 'rest', 'tidur'], async (ctx) => rpgCommands.rest(ctx.reply, ctx.sender));

// ── RPG: COMBAT ──────────────────────────────────────────────────────────
reg(['hunt', 'berburu', 'buru'], async (ctx) => rpgCommands.hunt(ctx.reply, ctx.sender));
reg(['lawan', 'battle', 'pvp', 'duel'], async (ctx) => rpgCommands.battle(ctx.reply, ctx.sender, ctx.mentioned));
reg(['bossinfo', 'listboss', 'daftarboss'], async (ctx) => rpgCommands2.bossInfo(ctx.reply));
reg(['boss', 'raid', 'lawanboss'], async (ctx) => rpgCommands2.fightBoss(ctx.reply, ctx.sender, ctx.args));
reg(['dungeoninfo', 'listdungeon', 'daftardungeon'], async (ctx) => rpgCommands2.dungeonInfo(ctx.reply));
reg(['dungeon', 'masukdungeon', 'explore'], async (ctx) => rpgCommands2.enterDungeon(ctx.reply, ctx.sender, ctx.args));

// ── RPG: ECONOMY ─────────────────────────────────────────────────────────
reg(['toko', 'shop', 'store'], async (ctx) => rpgCommands2.showShop(ctx.reply, ctx.args));
reg(['beli', 'buy', 'belanja'], async (ctx) => rpgCommands2.buyItem(ctx.reply, ctx.sender, ctx.args));
reg(['jual', 'sell'], async (ctx) => rpgCommands2.sellItem(ctx.reply, ctx.sender, ctx.args));
reg(['daily', 'klaim', 'absen'], async (ctx) => rpgCommands2.dailyReward(ctx.reply, ctx.sender));
reg(['joblist', 'listjob', 'daftarkerja'], async (ctx) => rpgCommands2.joblist(ctx.reply));
reg(['kerja', 'work', 'job'], async (ctx) => rpgCommands2.work(ctx.reply, ctx.sender, ctx.args));
reg(['nabung', 'deposit', 'save', 'tabung'], async (ctx) => rpgCommands2.bankDeposit(ctx.reply, ctx.sender, ctx.args));
reg(['tarik', 'withdraw', 'ambil'], async (ctx) => rpgCommands2.bankWithdraw(ctx.reply, ctx.sender, ctx.args));
reg(['transfer', 'kirim', 'kirimgold', 'send'], async (ctx) => rpgCommands2.transfer(ctx.reply, ctx.sender, ctx.mentioned, ctx.args));
reg(['rob', 'rampok', 'curi'], async (ctx) => rpgCommands2.rob(ctx.reply, ctx.sender, ctx.mentioned));

// ── RPG: PETS ─────────────────────────────────────────────────────────────
reg(['petshop', 'tokopet'], async (ctx) => rpgCommands2.petShop(ctx.reply));
reg(['buypet', 'belipet', 'adopsi'], async (ctx) => rpgCommands2.buyPet(ctx.reply, ctx.sender, ctx.args));
reg(['petinfo', 'mypet', 'petku'], async (ctx) => rpgCommands2.petInfo(ctx.reply, ctx.sender));
reg(['setpet', 'gantipet', 'pilihpet'], async (ctx) => rpgCommands2.setPet(ctx.reply, ctx.sender, ctx.args));

// ── RPG: QUEST / ACHIEVEMENT ─────────────────────────────────────────────
reg(['quest', 'misi', 'questlist'], async (ctx) => rpgCommands2.showQuests(ctx.reply, ctx.sender));
reg(['questclaim', 'klaimquest', 'klaimmisi'], async (ctx) => rpgCommands2.claimQuest(ctx.reply, ctx.sender, ctx.args));
reg(['achievement', 'pencapaian', 'lencana'], async (ctx) => rpgCommands2.showAchievements(ctx.reply, ctx.sender));

// ── RPG: SOCIAL / RANKING ────────────────────────────────────────────────
reg(['ranking', 'top', 'top10'], async (ctx) => rpgCommands2.showRanking(ctx.reply));
reg(['leaderboard', 'papantop', 'lb'], async (ctx) => rpgCommands2.leaderboard(ctx.reply, ctx.args));
reg(['marry', 'nikah', 'menikah'], async (ctx) => rpgCommands2.marry(ctx.reply, ctx.sender, ctx.mentioned));
reg(['divorce', 'cerai', 'pisah'], async (ctx) => rpgCommands2.divorce(ctx.reply, ctx.sender));

// ── ADMIN: MUTE ──────────────────────────────────────────────────────────
reg(['mute', 'bisukan'], async (ctx) => adminCommands.muteGroup(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['unmute', 'bukabisu'], async (ctx) => adminCommands.unmuteGroup(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['mutestatus', 'cekmute'], async (ctx) => adminCommands.muteStatus(ctx.reply, ctx.jid));

// ── ADMIN: MEMBER MANAGEMENT ─────────────────────────────────────────────
reg(['kick', 'keluarkan', 'tendang'], async (ctx) => adminCommands.kickMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['ryoiken', 'ryoikitenkai', 'domainexpansion', 'tenkai'], async (ctx) => adminCommands.ryoikiTenkaiKick(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['promote', 'jadikanadmin', 'naikkan'], async (ctx) => adminCommands.promoteMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['demote', 'turunkan', 'copotadmin'], async (ctx) => adminCommands.demoteMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['add', 'tambahmember', 'invite'], async (ctx) => adminCommands.addMember(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));

// ── ADMIN: WARN ───────────────────────────────────────────────────────────
reg(['warn', 'peringatan', 'beriwarn'], async (ctx) => adminCommands.warnMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['unwarn', 'hapuswarn'], async (ctx) => adminCommands.unwarnMember(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['checkwarn', 'cekwarn', 'totalwarn'], async (ctx) => adminCommands.checkWarn(ctx.reply, ctx.jid, ctx.mentioned, ctx.sender));
reg(['warnlimit', 'limitwarn', 'setwarnlimit'], async (ctx) => adminCommands.setWarnLimit(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));

// ── ADMIN: GROUP INFO / SETTINGS ─────────────────────────────────────────
reg(['groupinfo', 'infogrup', 'infogroup'], async (ctx) => adminCommands.groupInfo(ctx.sock, ctx.reply, ctx.jid));
reg(['setname', 'gantinamagrup', 'namagrup'], async (ctx) => adminCommands.setGroupName(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['setdesc', 'gantidesk', 'deskripsigrup'], async (ctx) => adminCommands.setGroupDesc(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lockgroup', 'kuncigrup', 'closegroup'], async (ctx) => adminCommands.lockGroup(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['unlockgroup', 'bukagrup', 'opengroup'], async (ctx) => adminCommands.unlockGroup(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['link', 'linkgrup', 'invitelink', 'getlink'], async (ctx) => adminCommands.getInviteLink(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['revoke', 'resetlink', 'revokelink'], async (ctx) => adminCommands.revokeInviteLink(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['leave', 'keluargrup', 'botkeluar'], async (ctx) => adminCommands.leaveGroup(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['hidetag', 'htag', 'tagsemua'], async (ctx) => adminCommands.hidetag(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.args, ctx.isAdmin));
reg(['tagall', 'mentionall', 'tagsemuamember'], async (ctx) => adminCommands.tagAll(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.args, ctx.isAdmin));
reg(['listadmin', 'daftaradmin', 'admins'], async (ctx) => adminCommands.listAdmins(ctx.sock, ctx.reply, ctx.jid));
reg(['membercount', 'jumlahmember', 'totalmember'], async (ctx) => adminCommands.groupMembersCount(ctx.sock, ctx.reply, ctx.jid));

// ── ADMIN: WELCOME / FAREWELL ────────────────────────────────────────────
reg(['setwelcome', 'aturwelcome'], async (ctx) => adminCommands.setWelcomeMsg(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['setfarewell', 'aturfarewell', 'aturperpisahan'], async (ctx) => adminCommands.setFarewellMsg(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['welcome'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'welcome', 'Welcome Message', ctx.args, ctx.isAdmin));
reg(['farewell'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'farewell', 'Farewell Message', ctx.args, ctx.isAdmin));

// ── ADMIN: PROTECTION TOGGLES ────────────────────────────────────────────
reg(['antigb'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antigb', 'Anti-GB', ctx.args, ctx.isAdmin));
reg(['antilink'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antilink', 'Anti-Link', ctx.args, ctx.isAdmin));
reg(['antispam', 'antiflood'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antispam', 'Anti-Spam/Anti-Flood', ctx.args, ctx.isAdmin));
reg(['antitoxic'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antitoxic', 'Anti-Toxic', ctx.args, ctx.isAdmin));
reg(['antishortlink', 'antishorturl'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antishortlink', 'Anti-ShortLink', ctx.args, ctx.isAdmin));
reg(['slowmode', 'modelambat'], async (ctx) => adminCommands.setSlowmode(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lockmedia'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'media', ctx.args, ctx.isAdmin));
reg(['lockstiker', 'locksticker'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'sticker', ctx.args, ctx.isAdmin));

// ── ADMIN: PROTEKSI TAMBAHAN (v3.1.0) ────────────────────────────────────
reg(['antilinkphising', 'antiphising', 'antiphishing'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antilinkphising', 'Anti-Link-Phising', ctx.args, ctx.isAdmin));
reg(['antijudol', 'antijudi'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antijudol', 'Anti-Judol', ctx.args, ctx.isAdmin));
reg(['antipinjol', 'antipinjaman'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antipinjol', 'Anti-Pinjol', ctx.args, ctx.isAdmin));
reg(['anticaps', 'antikapital'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'anticaps', 'Anti-Caps', ctx.args, ctx.isAdmin));
reg(['antivirtex', 'antivirustext'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antivirtex', 'Anti-Virtex', ctx.args, ctx.isAdmin));
reg(['antitag', 'antitagsw'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antitag', 'Anti-Tag', ctx.args, ctx.isAdmin));
// v3.2.0: Anti-NSFW — deteksi otomatis (lihat features/antiNsfw.js untuk cara setup API key)
reg(['antinsfw', 'antiporn', 'antiporno'], async (ctx) => adminCommands.toggleSetting(ctx.reply, ctx.jid, 'antinsfw', 'Anti-NSFW', ctx.args, ctx.isAdmin));
reg(['hapusnsfw', 'delnsfw', 'deletensfw'], async (ctx) => manualDeleteNsfw(ctx));
reg(['cekstrikensfw', 'nsfwstrikes', 'strikensfw'], async (ctx) => checkNsfwStrikeCmd(ctx));
reg(['resetnsfwstrike', 'resetstrikensfw'], async (ctx) => resetNsfwStrikeCmd(ctx));
reg(['setnsfwlimit', 'nsfwlimit'], async (ctx) => setNsfwStrikeLimitCmd(ctx));
reg(['resetprotection', 'matikansemuaproteksi', 'unprotectall'], async (ctx) => adminCommands4.resetProtectionAll(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['antilinkall', 'fullantilink'], async (ctx) => adminCommands4.setAntiLinkAll(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['helpproteksi', 'panduanproteksi'], async (ctx) => adminCommands4.helpProteksi(ctx.reply));
reg(['grouplockstatus', 'statusproteksi', 'ceksemuaproteksi'], async (ctx) => adminCommands4.groupLockStatus(ctx.reply, ctx.jid));

// ── ADMIN: CUSTOM BAD-WORD (perluasan Anti-Toxic per-grup) ──────────────
reg(['addbadword', 'tambahkatakasar'], async (ctx) => adminCommands4.addBadWordCmd(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['delbadword', 'hapuskatakasar'], async (ctx) => adminCommands4.delBadWordCmd(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['listbadword', 'daftarkatakasar'], async (ctx) => adminCommands4.listBadWordCmd(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: LINK ALLOWLIST (pengecualian Anti-Link) ───────────────────────
reg(['allowlinkadd', 'izinkanlink'], async (ctx) => adminCommands4.allowLinkAdd(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['allowlinkdel', 'hapusizinlink'], async (ctx) => adminCommands4.allowLinkDel(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['allowlinklist', 'daftarizinlink'], async (ctx) => adminCommands4.allowLinkShow(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: WHITELIST PROTEKSI ────────────────────────────────────────────
reg(['whitelistadd', 'putihkan'], async (ctx) => adminCommands4.whitelistAdd(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['whitelistdel', 'hapusputih'], async (ctx) => adminCommands4.whitelistDel(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['whitelist', 'daftarputih'], async (ctx) => adminCommands4.whitelistShow(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: LOCK TIPE KONTEN GRANULAR (v3.1.0) ────────────────────────────
reg(['lockimage', 'lockgambar'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'image', ctx.args, ctx.isAdmin));
reg(['lockvideo', 'lockvidio'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'video', ctx.args, ctx.isAdmin));
reg(['lockdocument', 'lockdokumen'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'document', ctx.args, ctx.isAdmin));
reg(['lockcontact', 'lockkontak'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'contact', ctx.args, ctx.isAdmin));
reg(['locklocation', 'locklokasi'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'location', ctx.args, ctx.isAdmin));
reg(['lockvn', 'lockvoicenote'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'voice', ctx.args, ctx.isAdmin));
reg(['lockaudio', 'lockmusik'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'audio', ctx.args, ctx.isAdmin));
reg(['lockgif', 'lockgifplay'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'gif', ctx.args, ctx.isAdmin));
reg(['lockpoll', 'lockjajak'], async (ctx) => adminCommands.lockType(ctx.reply, ctx.jid, 'poll', ctx.args, ctx.isAdmin));

// ── ADMIN: MUTE PER-MEMBER (beda dari .mute grup-wide) ───────────────────
reg(['mutemember', 'bisukanmember'], async (ctx) => adminCommands4.muteMemberCmd(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['unmutemember', 'bukabisumember'], async (ctx) => adminCommands4.unmuteMemberCmd(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['listmutedmember', 'daftarbisu'], async (ctx) => adminCommands4.listMutedMemberCmd(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: MEMBER MANAGEMENT LANJUTAN ────────────────────────────────────
reg(['kickall', 'kicksemua', 'tendangsemua'], async (ctx) => adminCommands4.kickAll(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.isAdmin, ctx.args));
reg(['warnall', 'warnsemua', 'peringatkansemua'], async (ctx) => adminCommands4.warnAll(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.isAdmin));
reg(['cekwarnall', 'listwarn', 'semuawarn'], async (ctx) => adminCommands4.listWarnAll(ctx.reply, ctx.jid));
reg(['topwarn', 'warnterbanyak'], async (ctx) => adminCommands4.topWarn(ctx.reply, ctx.jid));
reg(['resetwarnall', 'hapussemuawarn'], async (ctx) => adminCommands4.resetWarnAllCmd(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['banlist', 'daftarblokir'], async (ctx) => adminCommands2.listBanned(ctx.reply, ctx.jid));
reg(['unbanall', 'hapussemuablokir'], async (ctx) => adminCommands2.unbanAll(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['slowmodeoff', 'matikanslow'], async (ctx) => adminCommands.setSlowmode(ctx.reply, ctx.jid, ['0'], ctx.isAdmin));

// ── ADMIN: INFO / DASHBOARD GRUP ──────────────────────────────────────────
reg(['cekbot', 'botadmin', 'statusbot'], async (ctx) => adminCommands4.checkBotAdmin(ctx.sock, ctx.reply, ctx.jid));
reg(['groupsummary', 'dashboardgrup', 'ringkasangrup'], async (ctx) => adminCommands4.groupSummary(ctx.sock, ctx.reply, ctx.jid));
reg(['groupage', 'umurgrup'], async (ctx) => adminCommands4.groupAge(ctx.sock, ctx.reply, ctx.jid));
reg(['admincount', 'jumlahadmin'], async (ctx) => adminCommands4.adminCount(ctx.sock, ctx.reply, ctx.jid));
reg(['groupcreator', 'pembuatgrup'], async (ctx) => adminCommands4.groupCreatorInfo(ctx.sock, ctx.reply, ctx.jid));
reg(['exportmember', 'datamember', 'listmemberdata'], async (ctx) => adminCommands4.exportMember(ctx.sock, ctx.reply, ctx.jid));

// ── ADMIN: BACKUP / RESTORE PENGATURAN GRUP ──────────────────────────────
reg(['backupsetting', 'backupgrup'], async (ctx) => adminCommands4.backupSetting(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['restoresetting', 'restoregrup'], async (ctx) => adminCommands4.restoreSetting(ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: APPROVAL JOIN REQUEST ──────────────────────────────────────────
reg(['listrequest', 'pendingrequest', 'daftarrequest'], async (ctx) => adminCommands4.listJoinRequests(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['approverequest', 'terimarequest'], async (ctx) => adminCommands4.approveJoinRequest(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.mentioned, ctx.isAdmin));
reg(['rejectrequest', 'tolakrequest'], async (ctx) => adminCommands4.rejectJoinRequest(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.mentioned, ctx.isAdmin));
reg(['approveall', 'terimasemua'], async (ctx) => adminCommands4.approveAllRequests(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['rejectall', 'tolaksemua'], async (ctx) => adminCommands4.rejectAllRequests(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));

// ── ADMIN: JADWAL BUKA/TUTUP GRUP OTOMATIS ────────────────────────────────
reg(['jadwalbuka', 'autobuka'], async (ctx) => adminCommands4.setOpenSchedule(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['jadwaltutup', 'autotutup'], async (ctx) => adminCommands4.setCloseSchedule(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['canceljadwalgrup', 'batalotomatis'], async (ctx) => adminCommands4.cancelSchedule(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['cekjadwalgrup', 'statusotomatis'], async (ctx) => adminCommands4.checkScheduleStatus(ctx.reply, ctx.jid));

// ── ADMIN: KONFIGURASI GRUP NATIVE WHATSAPP LAINNYA ──────────────────────
reg(['seticon', 'gantiicon', 'ubahicon'], async (ctx) => adminCommands4.setGroupIcon(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.isAdmin));
reg(['hapusicon', 'removeicon'], async (ctx) => adminCommands4.removeGroupIcon(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['lockinfo', 'kuncinfogrup'], async (ctx) => adminCommands4.lockGroupInfo(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['unlockinfo', 'bukainfogrup'], async (ctx) => adminCommands4.unlockGroupInfo(ctx.sock, ctx.reply, ctx.jid, ctx.isAdmin));
reg(['ephemeral', 'pesansementara'], async (ctx) => adminCommands4.setEphemeral(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));

// ── FUN / GAMES ───────────────────────────────────────────────────────────
reg(['quote', 'katabijak', 'motivasi'], async (ctx) => funCommands.quote(ctx.reply));
reg(['fact', 'fakta', 'faktaunik'], async (ctx) => funCommands.fact(ctx.reply));
reg(['riddle', 'tekateki'], async (ctx) => funCommands.riddle(ctx.reply, ctx.jid));
reg(['jawab', 'answer'], async (ctx) => {
    await funCommands.answerRiddle(ctx.reply, ctx.jid, ctx.args);
    await funCommands.answerTebak(async () => {}, ctx.jid, ctx.args).catch(() => {});
});
reg(['truth'], async (ctx) => funCommands.truth(ctx.reply));
reg(['dare'], async (ctx) => funCommands.dare(ctx.reply));
reg(['tebakgambar', 'guessimage'], async (ctx) => funCommands.tebakGambar(ctx.reply, ctx.jid));
reg(['pantun'], async (ctx) => funCommands.pantun(ctx.reply));
reg(['zodiak', 'horoscope', 'ramalan'], async (ctx) => funCommands.horoscope(ctx.reply, ctx.args));
reg(['coinflip', 'lempar koin', 'koin'], async (ctx) => funCommands.coinFlip(ctx.reply));
reg(['dice', 'dadu', 'roll'], async (ctx) => funCommands.rollDice(ctx.reply, ctx.args));
reg(['rps', 'bgk', 'batugunting'], async (ctx) => funCommands.rps(ctx.reply, ctx.args));
reg(['slot', 'judi', 'slotmachine'], async (ctx) => funCommands.slot(ctx.reply, ctx.sender));
reg(['tebakangka', 'guessnumber'], async (ctx) => funCommands.tebakAngka(ctx.reply, ctx.jid));
reg(['tebak'], async (ctx) => funCommands.guessNumber(ctx.reply, ctx.jid, ctx.args));
reg(['wyr', 'wouldyourather', 'pilihmana'], async (ctx) => funCommands.wouldYouRather(ctx.reply));
reg(['jodoh', 'ceklodoh', 'lovetest'], async (ctx) => funCommands.checkJodoh(ctx.reply, ctx.sender, ctx.mentioned));
reg(['tarot', 'kartutarot'], async (ctx) => funCommands.tarotCard(ctx.reply));
reg(['fortunecookie', 'ramalankue'], async (ctx) => funCommands.fortuneCookie(ctx.reply));
reg(['lovecalc', 'hitungcinta', 'kalkulatorcinta'], async (ctx) => funCommands.hitungCinta(ctx.reply, ctx.sender, ctx.mentioned, ctx.args));

// ── FUN: GOJO SATORU SPECIAL ──────────────────────────────────────────────
reg(['gojo', 'gojoquote', 'katagojo'], async (ctx) => gojoCommands.gojoQuote(ctx.reply));
reg(['gojoteknik', 'jurusgojo', 'tekniksihir'], async (ctx) => gojoCommands.gojoTeknik(ctx.reply));
reg(['gojoroast', 'roastgojo'], async (ctx) => gojoCommands.gojoRoast(ctx.reply, ctx.sender, ctx.mentioned));
reg(['gojohype', 'semangatgojo', 'gojosupport'], async (ctx) => gojoCommands.gojoHype(ctx.reply, ctx.sender, ctx.mentioned));
reg(['gojofact', 'faktagojo'], async (ctx) => gojoCommands.gojoFact(ctx.reply));
reg(['gojopower', 'ceklevelgojo', 'powerlevel'], async (ctx) => gojoCommands.gojoPower(ctx.reply, ctx.sender, ctx.mentioned));

// ── TOOLS: TEXT ───────────────────────────────────────────────────────────
reg(['upper', 'kapital'], async (ctx) => textTools.upper(ctx.reply, ctx.args));
reg(['lower', 'kecil'], async (ctx) => textTools.lower(ctx.reply, ctx.args));
reg(['reverse', 'balik'], async (ctx) => textTools.reverse(ctx.reply, ctx.args));
reg(['tobinary', 'kebinary'], async (ctx) => textTools.toBinary(ctx.reply, ctx.args));
reg(['frombinary', 'daribinary'], async (ctx) => textTools.fromBinary(ctx.reply, ctx.args));
reg(['tobase64', 'kebase64'], async (ctx) => textTools.toBase64(ctx.reply, ctx.args));
reg(['frombase64', 'daribase64'], async (ctx) => textTools.fromBase64(ctx.reply, ctx.args));
reg(['tohex', 'kehex'], async (ctx) => textTools.toHex(ctx.reply, ctx.args));
reg(['fromhex', 'darihex'], async (ctx) => textTools.fromHex(ctx.reply, ctx.args));
reg(['rot13'], async (ctx) => textTools.rot13(ctx.reply, ctx.args));
reg(['leet', 'leetspeak'], async (ctx) => textTools.leet(ctx.reply, ctx.args));
reg(['alternating', 'acakcase'], async (ctx) => textTools.alternating(ctx.reply, ctx.args));
reg(['wordcount', 'hitungkata'], async (ctx) => textTools.countWords(ctx.reply, ctx.args));

// ── TOOLS: MATH ───────────────────────────────────────────────────────────
reg(['calc', 'hitung', 'kalkulator'], async (ctx) => mathTools.calc(ctx.reply, ctx.args));
reg(['persen', 'percent'], async (ctx) => mathTools.percent(ctx.reply, ctx.args));
reg(['bmi', 'imt'], async (ctx) => mathTools.bmi(ctx.reply, ctx.args));
reg(['kurs', 'currency'], async (ctx) => mathTools.convertCurrencyNote(ctx.reply));
reg(['umur', 'age', 'hitungumur'], async (ctx) => mathTools.ageCalc(ctx.reply, ctx.args));

// ── TOOLS: CONVERTER ──────────────────────────────────────────────────────
reg(['convertlength', 'konversipanjang'], async (ctx) => converterTools.convertLength(ctx.reply, ctx.args));
reg(['convertweight', 'konversiberat'], async (ctx) => converterTools.convertWeight(ctx.reply, ctx.args));
reg(['convertsuhu', 'convertemp'], async (ctx) => converterTools.convertTemp(ctx.reply, ctx.args));

// ── TOOLS: GENERATOR ──────────────────────────────────────────────────────
reg(['genpassword', 'buatpassword', 'password'], async (ctx) => generatorTools.genPassword(ctx.reply, ctx.args));
reg(['genuuid', 'uuid'], async (ctx) => generatorTools.genUUID(ctx.reply));
reg(['pilih', 'choose', 'pickrandom'], async (ctx) => generatorTools.pickRandom(ctx.reply, ctx.args));
reg(['shuffle', 'acak'], async (ctx) => generatorTools.shuffleList(ctx.reply, ctx.args));

// ── TOOLS: INFO ───────────────────────────────────────────────────────────
reg(['ping'], async (ctx) => {
    const start = Date.now();
    await ctx.sock.sendPresenceUpdate('composing', ctx.jid);
    const latency = Date.now() - start;
    await ctx.reply(
`🏓 *PONG!*

◈ *Latensi*  : \`${latency}ms\`
◈ *Status*   : 🟢 Online & Aktif
◈ *Runtime*  : ${fmtDuration(Date.now() - BOT_START_TIME)}
◈ *Users*    : ${countUsers()} player terdaftar
◈ *Grup*     : ${countGroups()} grup aktif
◈ *Cmd Total*: ${getTotalCommandsRan()} kali dijalankan`
    );
});

reg(['owner', 'creator', 'dev', 'developer'], async (ctx) => {
    const creator = getCreatorInfo();
    const owners = listOwners();
    const mainOwnerNum = settings.ownerNumber ? settings.ownerNumber.replace(/[^0-9]/g, '') : null;
    const extraOwners = owners.filter(o => o.number !== mainOwnerNum);
    const ownerLines = extraOwners.length
        ? extraOwners.map((o, i) => `${i + 1}. +${o.number}`).join('\n')
        : '_(belum ada Owner tambahan — pakai .addowner atau edit `ownerNumbers` di setting.js)_';
    await ctx.reply(
`👑 *INFO CREATOR & OWNER*

◈ *Creator* : ${creator.name}
◈ *Nomor*   : +${creator.number}
_(Creator tidak bisa diganti lewat command apapun)_

⭐ *${settings.ownerName || 'Owner'}*${mainOwnerNum ? `\n◈ *Nomor* : +${mainOwnerNum}` : '\n_(belum diisi — set `ownerName` & `ownerNumber` di setting.js)_'}

📋 *Owner Lainnya:*
${ownerLines}
_(Nama & nomor Owner utama bisa diganti lewat setting.js: \`ownerName\` dan \`ownerNumber\`)_

◈ *Bot* : ${settings.botName} v${settings.botVersion || '3.0.0'}

📞 Hubungi Creator jika ada pertanyaan,\nlaporan bug, atau request fitur!

_wa.me/${creator.number}_`
    );
});

// .pembayaran — info nomor e-wallet Owner (DANA/GoPay/OVO). Nomornya
// diambil dari setting.js (nodana/nogopay/noovo) supaya Owner bisa ganti
// sendiri kapan saja tanpa perlu edit command ini.
reg(['pembayaran', 'payment', 'bayar'], async (ctx) => {
    await ctx.reply(
`💰 *INFO PEMBAYARAN*

◈ DANA  : ${settings.nodana  || '_(belum diisi)_'}
◈ GoPay : ${settings.nogopay || '_(belum diisi)_'}
◈ OVO   : ${settings.noovo   || '_(belum diisi)_'}

Silakan transfer ke salah satu nomor di atas sesuai nominal yang disepakati, lalu kirim bukti transfer ke Owner untuk konfirmasi.

_(Nomor bisa diganti Owner lewat setting.js: \`nodana\`, \`nogopay\`, \`noovo\`)_`
    );
});

// .sosmedowner — info sosial media Owner, diambil dari setting.js
// (ig/tele/yt) supaya bisa diganti Owner kapan saja.
reg(['sosmedowner', 'sosmed', 'socialmedia'], async (ctx) => {
    await ctx.reply(
`📱 *SOSIAL MEDIA OWNER*

◈ Instagram : ${settings.ig   || '_(belum diisi)_'}
◈ Telegram  : ${settings.tele || '_(belum diisi)_'}
◈ YouTube   : ${settings.yt   || '_(belum diisi)_'}

Yuk follow & subscribe buat dukung Owner! 🙌

_(Bisa diganti Owner lewat setting.js: \`ig\`, \`tele\`, \`yt\`)_`
    );
});

// ── JABATAN: CREATOR / OWNER / PREMIUM ────────────────────────────────────
// Owner & Premium sekarang GABUNGAN dari beberapa sumber:
//   1) `ownerNumber` (Owner utama, tunggal) + `ownerNumbers` (Owner
//      tambahan, array) / `premiumNumbers` di setting.js — manual edit
//      file, butuh restart bot supaya berlaku.
//   2) data/owners.json & data/premium.json (diatur lewat command
//      .addowner/.addprem saat bot berjalan, langsung aktif tanpa restart).
// .addowner boleh dipakai oleh Owner ATAUPUN Creator. .delowner & .delprem
// tetap lebih terbatas (lihat masing-masing handler di bawah).
// Nomor yang berasal dari setting.js TIDAK BISA dihapus lewat command
// (harus edit file itu langsung) — ini supaya nomor yang sudah di-set
// manual lewat file tidak bisa dicabut diam-diam lewat chat oleh siapapun.
reg(['listowner', 'daftarowner', 'cekowner'], async (ctx) => {
    const creator = getCreatorInfo();
    const owners = listOwners();
    const lines = [`👑 *Creator*: ${creator.name} (+${creator.number})`];
    if (owners.length === 0) {
        lines.push('', '⭐ *Owner*: _(belum ada Owner tambahan)_');
    } else {
        lines.push('', '⭐ *Daftar Owner:*');
        owners.forEach((o, i) => lines.push(`${i + 1}. +${o.number} _(${o.source})_`));
    }
    lines.push('', `_${settings.prefix}addowner @tag — tambah Owner (Owner/Creator)_`);
    await ctx.reply(lines.join('\n'));
});
reg(['addowner'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menambah Owner.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}addowner @tag* atau *${settings.prefix}addowner 628xxx*`);
    const result = addOwner(target);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} berhasil dijadikan *Owner*.`);
});
reg(['delowner', 'removeowner'], async (ctx) => {
    if (!ctx.isCreator) return ctx.reply('❌ Hanya *Creator* yang bisa menghapus Owner.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}delowner @tag* atau *${settings.prefix}delowner 628xxx*`);
    const result = removeOwner(target);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} sudah dicabut dari jabatan *Owner*.`);
});
reg(['listprem', 'listpremium', 'daftarpremium'], async (ctx) => {
    const premiums = listPremium();
    const lines = [];
    if (premiums.length === 0) {
        lines.push('💎 *Daftar Premium*', '', '_(belum ada user Premium)_');
    } else {
        lines.push(`💎 *Daftar Premium* (${premiums.length})`, '');
        premiums.forEach((p, i) => lines.push(`${i + 1}. +${p.number} _(${p.source})_`));
    }
    lines.push('', `_${settings.prefix}addprem @tag — tambah Premium (Owner only)_`);
    await ctx.reply(lines.join('\n'));
});
reg(['addprem', 'addpremium'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menambah Premium.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}addprem @tag* atau *${settings.prefix}addprem 628xxx*`);
    const result = addPremium(target);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} berhasil dijadikan *Premium*. 💎`);
});
reg(['delprem', 'delpremium', 'removepremium'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menghapus Premium.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g, '')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}delprem @tag* atau *${settings.prefix}delprem 628xxx*`);
    const result = removePremium(target);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ Status *Premium* @${target.split('@')[0]} sudah dicabut.`);
});
reg(['cekjabatan', 'myrole', 'rolesaya', 'cekrole'], async (ctx) => {
    const target = ctx.mentioned?.[0] || ctx.sender;
    const label = getRoleLabel(target);
    const who = target === ctx.sender ? 'Kamu' : `@${target.split('@')[0]}`;
    await ctx.reply(`🔖 *Jabatan*\n\n${who} saat ini: *${label}*`);
});

// ─── CO-CREATOR ─────────────────────────────────────────────────────────────
reg(['creator', 'infocreator'], async (ctx) => {
    const info = getCreatorInfo();
    const coList = listCoCreators();
    const lines = [
        `╔══════════════════════════╗`,
        `║  👑  *CREATOR INFO*`,
        `╚══════════════════════════╝`,
        ``,
        `🌟 *Primary Creator*`,
        `┗ +${info.number} _(${info.name})_`,
    ];
    if (coList.length > 0) {
        lines.push(``, `🌟 *Co-Creator (${coList.length})*`);
        coList.forEach((c, i) => lines.push(`┗ ${i+1}. +${c.number}`));
    } else {
        lines.push(``, `_Belum ada Co-Creator._`);
    }
    await ctx.reply(lines.join('\n'));
});

reg(['addcreator'], async (ctx) => {
    if (!ctx.isCreator) return ctx.reply('❌ Hanya *Primary Creator* yang bisa menambah Co-Creator.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g,'')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}addcreator @tag* atau *${settings.prefix}addcreator 628xxx*`);
    const result = addCoCreator(target, ctx.sender);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} berhasil dijadikan *Co-Creator*. 🌟`);
});

reg(['delcreator', 'removecreator'], async (ctx) => {
    if (!ctx.isCreator) return ctx.reply('❌ Hanya *Primary Creator* yang bisa menghapus Co-Creator.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g,'')}@s.whatsapp.net` : null);
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}delcreator @tag*`);
    const result = removeCoCreator(target, ctx.sender);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(`✅ @${target.split('@')[0]} sudah dicabut dari jabatan *Co-Creator*.`);
});

reg(['listcreator', 'daftarcreator'], async (ctx) => {
    const coList = listCoCreators();
    const info   = getCreatorInfo();
    const lines  = [`🌟 *Daftar Creator*`, ``, `👑 Primary: +${info.number} _(${info.name})_`];
    if (coList.length === 0) {
        lines.push('', '_Belum ada Co-Creator._');
    } else {
        lines.push('', `🌟 Co-Creator (${coList.length}):`);
        coList.forEach((c, i) => lines.push(`${i+1}. +${c.number}`));
    }
    await ctx.reply(lines.join('\n'));
});

// ─── ADDLIMIT — tambah limit media manual (owner/creator) ───────────────────
reg(['addlimit', 'tambablimit'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menambah limit.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] ? `${ctx.args[0].replace(/[^0-9]/g,'')}@s.whatsapp.net` : null);
    const amount = parseInt(ctx.args?.[ctx.mentioned?.[0] ? 0 : 1]) || 1;
    if (!target) return ctx.reply(`📌 Cara pakai: *${settings.prefix}addlimit @tag [jumlah]*\nContoh: *${settings.prefix}addlimit @user 5*`);
    const result = addLimitManual(target, amount);
    await ctx.reply(
        `✅ *+${amount} limit media* ditambahkan ke @${target.split('@')[0]}.\n` +
        `📊 Sisa limit hari ini: *${Math.max(0, result.max - result.newUsed)}/${result.max}*`
    );
});

// ─── ADDGOLD — tambah gold RPG manual (owner/creator) ───────────────────────
reg(['addgold', 'tambahgold', 'givegold'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner* atau *Creator* yang bisa menambah gold.');
    const target = ctx.mentioned?.[0] || (ctx.args?.[0] && !parseInt(ctx.args[0])
        ? `${ctx.args[0].replace(/[^0-9]/g,'')}@s.whatsapp.net`
        : null);
    const amount = parseInt(ctx.args?.[ctx.mentioned?.[0] ? 0 : 1]) || 0;
    if (!target || amount <= 0) {
        return ctx.reply(`📌 Cara pakai: *${settings.prefix}addgold @tag [jumlah]*\nContoh: *${settings.prefix}addgold @user 1000*`);
    }
    const char = getChar(target);
    if (!char) return ctx.reply(`❌ @${target.split('@')[0]} belum punya karakter RPG.`);
    char.gold += amount;
    saveChar(target, char);
    await ctx.reply(
        `✅ *+${amount.toLocaleString()} gold* diberikan ke @${target.split('@')[0]}.\n` +
        `💰 Total gold sekarang: *${char.gold.toLocaleString()} gold*`
    );
});

// ─── BUYLIMIT — beli limit tambahan pakai gold (user biasa) ─────────────────
reg(['buylimit', 'belilimit', 'buylimits'], async (ctx) => {
    const result = buyMediaLimit(ctx.sender);
    if (!result.ok) return ctx.reply(`❌ ${result.reason}`);
    await ctx.reply(
        `✅ Berhasil membeli *1 limit media tambahan*!\n` +
        `💰 Gold terpakai: *${result.cost} gold*\n` +
        `💳 Sisa gold: *${result.sisaGold.toLocaleString()} gold*\n\n` +
        `Sekarang kamu bisa pakai fitur media lagi.`
    );
});

// ─── CEKLIMIT — cek sisa limit harian (siapapun) ────────────────────────────
reg(['ceklimit', 'mylimit', 'limitku', 'sisalimit'], async (ctx) => {
    await ctx.reply(`📊 *Status Limit Media Harian*\n\n${limitStatusText(ctx.sender)}`);
});

// ─── AUTOREAD ────────────────────────────────────────────────────────────────
reg(['autoread', 'autobaca', 'autolihat'], async (ctx) => {
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (!['on', 'off', 'aktif', 'nonaktif'].includes(arg)) {
        return ctx.reply(
            `📌 *Autoread* — bot otomatis centang biru setiap pesan masuk\n\n` +
            `Status sekarang: *${isAutoread(ctx.jid) ? '✅ ON' : '❌ OFF'}*\n\n` +
            `Ketik *.autoread on* atau *.autoread off* untuk ubah.`
        );
    }
    const val = arg === 'on' || arg === 'aktif';
    setAutoread(ctx.jid, val);
    await ctx.reply(`${val ? '✅' : '❌'} *Autoread* berhasil di-${val ? 'aktifkan' : 'nonaktifkan'}.`);
});

// ─── AUTOTYPING ──────────────────────────────────────────────────────────────
reg(['autotyping', 'automengetik', 'autoketik'], async (ctx) => {
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (!['on', 'off', 'aktif', 'nonaktif'].includes(arg)) {
        return ctx.reply(
            `📌 *Autotyping* — bot tampil "mengetik..." sebelum balas pesan\n\n` +
            `Status sekarang: *${isAutotyping(ctx.jid) ? '✅ ON' : '❌ OFF'}*\n\n` +
            `Ketik *.autotyping on* atau *.autotyping off* untuk ubah.`
        );
    }
    const val = arg === 'on' || arg === 'aktif';
    setAutotyping(ctx.jid, val);
    await ctx.reply(`${val ? '✅' : '❌'} *Autotyping* berhasil di-${val ? 'aktifkan' : 'nonaktifkan'}.`);
});

// ─── GOJO AI — mode chat AI ala Gojo Satoru, on/off per chat/grup ───────────
// Default ON (lihat lib/gojoAi.js). Hanya Admin grup/Owner/Creator yang
// boleh ubah. Di grup: bot cuma respon kalau di-mention/di-reply. Di DM:
// bot respon semua chat biasa. Logic trigger & pemanggilan AI ada di
// lib/gojoAi.js — file ini cuma toggle on/off-nya.
reg(['gojoai'], async (ctx) => {
    if (!ctx.isAdmin && !ctx.isOwner && !ctx.isCreator) {
        return ctx.reply('❌ Hanya *Admin grup*, *Owner*, atau *Creator* yang bisa mengubah mode ini.');
    }
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (!['on', 'off', 'aktif', 'nonaktif'].includes(arg)) {
        return ctx.reply(
            `📌 *Gojo AI* — bot balas chat biasa pakai gaya Gojo Satoru (AI)\n\n` +
            `Status sekarang: *${isGojoAiEnabled(ctx.jid) ? '✅ ON' : '❌ OFF'}*\n` +
            `• Di grup: bot cuma respon kalau di-*mention* atau di-*reply*.\n` +
            `• Di DM: bot respon semua chat biasa.\n\n` +
            `Ketik *.gojoai on* atau *.gojoai off* untuk ubah.`
        );
    }
    const val = arg === 'on' || arg === 'aktif';
    setGojoAiEnabled(ctx.jid, val);
    await ctx.reply(`${val ? '✅' : '❌'} *Gojo AI* berhasil di-${val ? 'aktifkan' : 'nonaktifkan'} untuk chat ini.`);
});

// ─── CPANEL — jualan slot server Pterodactyl (v1-v5) ───────────────────────
// Backend/logic ada di lib/pterodactylReseller.js & commands/panelCommands.js
// — di sini cuma pendaftaran command-nya. Jumlahnya banyak (create × RAM ×
// versi, role × aksi × versi, dst) makanya pakai loop, bukan reg() satu-satu.
reg(['cpanel'], async (ctx) => ctx.reply(cpanelMenuText(settings.prefix)));

// Create server: .1gbv1 .. .10gbv5, .univ1 .. .univ5 (11 tier × 5 server)
for (const ram of RAM_TIERS) {
    for (const ver of VALID_SERVERS) {
        const cmdName = ram === 'unli' ? `uni${ver}` : `${ram}${ver}`;
        reg([cmdName], makeCreateServerHandler(ram, ver));
    }
}

// List / Del / Info server: per versi (v1-v5)
for (const ver of VALID_SERVERS) {
    reg([`listserver${ver}`, `servers${ver}`], makeListServerHandler(ver));
    reg([`delserver${ver}`, `hapusserver${ver}`], makeDelServerHandler(ver));
    reg([`serverinfo${ver}`, `sinfo${ver}`], makeServerInfoHandler(ver));
}

// Role management: add/del/list × owner/ceo/reseller × v1-v5 (45 command)
for (const role of VALID_ROLES) {
    for (const ver of VALID_SERVERS) {
        reg([`add${role}${ver}`], makeRoleHandler('add', role, ver));
        reg([`del${role}${ver}`], makeRoleHandler('del', role, ver));
        reg([`list${role}${ver}`], makeRoleHandler('list', role, ver));
    }
}

// GC Seller: addgcseller/resetgcseller × v1-v5
for (const ver of VALID_SERVERS) {
    reg([`addgcseller${ver}`], makeGcSellerHandler('add', ver));
    reg([`resetgcseller${ver}`], makeGcSellerHandler('reset', ver));
}

// Cadmin — buat akun root admin panel (bukan role bot): v1-v5
for (const ver of VALID_SERVERS) {
    reg([`cadmin${ver}`, `createadmin${ver}`], makeCadminHandler(ver));
}

// ─── GUILD SYSTEM — fitur RPG baru (lib/guildSystem.js) ────────────────────
reg(['guildcreate'], guildCreate);
reg(['guildjoin'], guildJoin);
reg(['guildleave'], guildLeave);
reg(['guildkick'], guildKick);
reg(['guildpromote'], guildPromote);
reg(['guilddemote'], guildDemote);
reg(['guilddonate'], guildDonate);
reg(['guildupgrade'], guildUpgrade);
reg(['guilddisband'], guildDisband);
reg(['guildinfo'], guildInfo);
reg(['guildmembers'], guildMembers);
reg(['guildlist'], guildListCmd);

// ─── FARMING, TITLE, COOKING, BOUNTY — fitur RPG baru ──────────────────────
reg(['plant', 'tanam'], plantCmd);
reg(['water', 'siram'], waterCmd);
reg(['harvest', 'panen'], harvestCmd);
reg(['farmstatus', 'statuslahan'], farmStatusCmd);
reg(['titles', 'daftartitle'], titlesCmd);
reg(['equiptitle', 'pakaititle'], equipTitleCmd);
reg(['cook', 'masak'], cookCmd);
reg(['recipes', 'daftarresep'], recipesCmd);
reg(['bounty'], bountyCmd);
reg(['claimbounty', 'klaimbounty'], claimBountyCmd);

// ─── ADMIN SUBSISTEM BARU (commands/adminCommands5.js) ─────────────────────
// FIX: nama awal (.pin/.addnote/.listnote/.delnote/.catatan) ternyata
// SUDAH dipakai command lain (.pin = Pinterest downloader, .addnote dkk
// = fitur notes umum grup yang sudah ada) — kalau dipakai lagi di sini,
// bakal DIAM-DIAM menimpa command lama itu (bug serius). Diganti nama
// yang jelas beda supaya tidak tabrakan sama sekali.
reg(['setpengumuman', 'pengumumanpasang'], pinAdd);
reg(['hapuspengumuman', 'pengumumanhapus'], pinRemove);
reg(['pengumuman', 'cekpengumuman'], pinList);

reg(['addmembernote', 'tambahcatatan'], noteAdd);
reg(['listmembernote'], noteList);
reg(['delmembernote', 'hapuscatatan'], noteDel);

reg(['savetemplate'], templateSave);
reg(['loadtemplate'], templateLoad);
reg(['listtemplate'], templateList);
reg(['deltemplate'], templateDel);

reg(['addannouncement', 'tambahjadwalteks'], announcementAdd);
reg(['listannouncement', 'jadwaltekslist'], announcementList);
reg(['delannouncement', 'hapusjadwalteks'], announcementDel);

reg(['setbirthday', 'settanggallahir'], birthdaySet);
reg(['listbirthday', 'daftarultah'], birthdayList);
reg(['delbirthday', 'hapustanggallahir'], birthdayDel);

// ─── ADMIN BATCH BARU #2 (commands/adminCommands6.js) ──────────────────────
reg(['bulkpromote'], bulkPromote);
reg(['bulkdemote'], bulkDemote);
reg(['bulkkick'], bulkKick);
reg(['listinactive', 'membertidakaktif'], listInactive);
reg(['topactive', 'memberaktif'], topActive);
reg(['assigntask', 'kasihtugas'], taskAssign);
reg(['mytasks', 'tugasku'], taskMine);
reg(['listtasks', 'semuatugas'], taskList);
reg(['donetask', 'tugasselesai'], taskDone);
reg(['maintenancemode'], maintenanceToggle);

// ─── SELF MODE ────────────────────────────────────────────────────────────────
// Bot hanya merespon pesan dari owner/nomor bot sendiri.
// Hanya owner/creator yang bisa ubah ini.
reg(['self', 'selfmode', 'modeself'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner/Creator* yang bisa mengubah mode bot.');
    const arg = (ctx.args?.[0] || '').toLowerCase();
    if (!['on', 'off'].includes(arg)) {
        return ctx.reply(
            `📌 *Self Mode* — bot hanya respon ke owner/nomor bot sendiri\n\n` +
            `Status sekarang: *${settings.selfMode ? '✅ ON (Self)' : '❌ OFF (Public)'}*\n\n` +
            `Ketik *.self on* atau *.self off* untuk ubah.`
        );
    }
    const val = arg === 'on';
    settings.selfMode = val;
    const cfg = botCfg();
    cfg.selfMode = val;
    saveBotCfg();
    await ctx.reply(
        val
            ? `✅ *Self Mode ON* — bot sekarang hanya merespon owner & nomor bot sendiri.`
            : `❌ *Self Mode OFF* — bot kembali merespon semua orang.`
    );
});

// ─── PUBLIC / PRIVATE MODE ────────────────────────────────────────────────────
reg(['public', 'publicmode', 'modepublic', 'setpublic'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner/Creator* yang bisa mengubah mode bot.');
    settings.public = true;
    settings.selfMode = false;
    const cfg = botCfg(); cfg.selfMode = false; cfg.public = true; saveBotCfg();
    await ctx.reply('✅ *Mode Public* — bot sekarang bisa digunakan semua orang.');
});

reg(['private', 'privatemode', 'modeprivate', 'setprivate'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner/Creator* yang bisa mengubah mode bot.');
    settings.public = false;
    settings.selfMode = true;
    const cfg = botCfg(); cfg.selfMode = true; cfg.public = false; saveBotCfg();
    await ctx.reply('✅ *Mode Private* — bot sekarang hanya merespon owner & nomor bot sendiri.');
});

// ─── SEWA BOT ─────────────────────────────────────────────────────────────────
reg(['sewa', 'sewakan', 'sewagrup'], async (ctx) => sewaCommands.sewa(ctx));
reg(['ceksewa', 'infosewa', 'statussewa'], async (ctx) => sewaCommands.ceksewa(ctx));
reg(['delsewa', 'hapussewa', 'removesewa'], async (ctx) => sewaCommands.delsewa(ctx, ctx.sock));
reg(['listsewa', 'daftarsewa', 'sewaall'], async (ctx) => sewaCommands.listsewa(ctx));
reg(['extsewa', 'perpanjangsewa', 'renewsewa', 'addsewa'], async (ctx) => sewaCommands.extsewa(ctx));
reg(['hargasewa', 'pricesewa', 'infoharga'], async (ctx) => sewaCommands.hargasewa(ctx));
reg(['gantihargasewa', 'sethargasewa', 'ubahhargasewa'], async (ctx) => sewaCommands.gantihargasewa(ctx));
reg(['sewamode', 'modesewabot', 'togglesewa'], async (ctx) => sewaCommands.sewamode(ctx));

// ─── BRAT ─────────────────────────────────────────────────────────────────────
// Variant brat dipangkas jadi 3 command ini saja (2026-07-07) — semua
// variant lain (bratimg/brathd/bratanime/bratpatrick/bratsquidward/
// bratgojo/bratvermeil/bratvid/bratvid2/bratgojovid/bratvermeilvid) dan
// menu picker-nya (bratmenu/bratlist) sudah dihapus dari bratCommands.js.
reg(['brat'], async (ctx) => bratGenerate(ctx, 'brat'));
reg(['bratgreen'], async (ctx) => bratGenerate(ctx, 'bratgreen'));
reg(['bratwhite'], async (ctx) => bratGenerate(ctx, 'bratwhite'));

// ─── IQC ──────────────────────────────────────────────────────────────────────
reg(['iqc', 'iphonequote', 'iphoneqc', 'imessagequote'], async (ctx) => iqc(ctx));
// OFF = bot auto-keluar dari grup yang dimasukkan orang lain (bukan owner)
// ON  = bot tetap di grup dan bisa digunakan (default)
reg(['autojoin', 'automasukgrup', 'autojoingrup'], async (ctx) => {
    if (!ctx.isOwner) return ctx.reply('❌ Hanya *Owner/Creator* yang bisa mengubah setting autojoin.');
    const arg = (ctx.args?.[0] || '').toLowerCase();
    const cfg = botCfg();
    if (!['on', 'off'].includes(arg)) {
        return ctx.reply(
            `📌 *Autojoin* — kontrol apakah bot keluar otomatis dari grup yang tidak diizinkan\n\n` +
            `Status sekarang: *${cfg.autojoin !== false ? '✅ ON (bot stay di semua grup)' : '❌ OFF (bot auto-keluar jika bukan owner yg masukkan)'}*\n\n` +
            `Ketik *.autojoin on* atau *.autojoin off* untuk ubah.`
        );
    }
    const val = arg === 'on';
    cfg.autojoin = val;
    saveBotCfg();
    await ctx.reply(
        val
            ? `✅ *Autojoin ON* — bot akan stay di semua grup yang dimasukkan.`
            : `❌ *Autojoin OFF* — bot akan otomatis keluar dari grup jika bukan owner yang memasukkan.`
    );
});

reg(['whoami', 'nomorku'], async (ctx) => {
    const num = (ctx.sender || '').split('@')[0];
    if (isLidJid(ctx.sender)) {
        // FIX: dulu angka di depan "@lid" ditampilkan seolah-olah nomor HP
        // asli (padahal itu ID internal acak dari WhatsApp, bukan nomor
        // HP) — sekarang dijelaskan dengan jujur, supaya user tidak
        // mengira itu nomornya, dan supaya kalau identitas ini terlihat
        // beda di lain waktu, user paham kenapa (keterbatasan WhatsApp,
        // bukan bug di nomor mereka).
        return ctx.reply(
`🪪 *INFO AKUNMU*

⚠️ WhatsApp mengirim akunmu sebagai ID privat (*LID*), bukan nomor HP biasa.
◈ *ID*    : \`${num}\` _(bukan nomor HP asli)_
◈ *JID*   : \`${ctx.sender}\`
◈ *Chat*  : ${ctx.isGroup ? '👥 Grup' : '💬 Private'}

_Ini keterbatasan dari sistem WhatsApp sendiri, bukan kesalahan bot. Coba kirim pesan biasa (bukan reply) kalau ingin bot mengenali nomor HP aslimu._`
        );
    }
    await ctx.reply(
`🪪 *INFO NOMORMU*

◈ *Nomor* : +${num}
◈ *JID*   : \`${ctx.sender}\`
◈ *Chat*  : ${ctx.isGroup ? '👥 Grup' : '💬 Private'}`
    );
});

reg(['runtime', 'uptime'], async (ctx) => {
    const topCmds = getTopCommands(5).map(([cmd, n], i) => `  ${i+1}. \`${cmd}\` — ${n}x`).join('\n');
    await ctx.reply(
`⏱️ *BOT RUNTIME*

◈ *Aktif sejak* : ${fmtDuration(Date.now() - BOT_START_TIME)} lalu
◈ *Users RPG*   : ${countUsers()} orang
◈ *Grup aktif*  : ${countGroups()} grup
◈ *Total cmd*   : ${getTotalCommandsRan()} kali

🏆 *Top 5 Command Terpopuler:*
${topCmds || '  _(belum ada data)_'}`
    );
});

reg(['jam', 'waktuserver', 'servertime'], async (ctx) => infoTools.serverTime(ctx.reply));

// ── MEDIA ─────────────────────────────────────────────────────────────────
reg(['repost', 'kirimulang'], async (ctx) => mediaCommands.repostLast(ctx.sock, ctx.reply, ctx.jid, ctx.sender));
reg(['mediainfo', 'infomedia'], async (ctx) => mediaCommands.mediaInfo(ctx.reply, ctx.jid));
reg(['sticker', 'stiker', 's'], async (ctx) => mediaCommands.quoteAsSticker(ctx.reply));
reg(['pp', 'fotoprofile', 'profilepic'], async (ctx) => mediaCommands.profilePicInfo(ctx.sock, ctx.reply, ctx.jid, ctx.mentioned, ctx.sender));
reg(['ppgrup', 'fotogrup', 'grouppic'], async (ctx) => mediaCommands.getGroupPic(ctx.sock, ctx.reply, ctx.jid, ctx.sender));

// ── RPG: GATHERING / CRAFTING / GAMBLING / TRAINING (batch 3) ───────────
reg(['mine', 'tambang', 'menambang'], async (ctx) => rpgCommands3.mine(ctx.reply, ctx.sender));
reg(['fish', 'mancing', 'memancing'], async (ctx) => rpgCommands3.fish(ctx.reply, ctx.sender));
reg(['craft', 'crafting', 'buatitem'], async (ctx) => rpgCommands3.craft(ctx.reply, ctx.sender, ctx.args));
reg(['refine', 'tingkatkan', 'upgrade'], async (ctx) => rpgCommands3.refine(ctx.reply, ctx.sender, ctx.args));
reg(['gamble', 'taruhan', 'judigold'], async (ctx) => rpgCommands3.gamble(ctx.reply, ctx.sender, ctx.args));
reg(['lottery', 'lotre', 'undian'], async (ctx) => rpgCommands3.lottery(ctx.reply, ctx.sender));
reg(['train', 'latihan', 'training'], async (ctx) => rpgCommands3.train(ctx.reply, ctx.sender, ctx.args));
reg(['prestige', 'naikkelas', 'reborn'], async (ctx) => rpgCommands3.prestige(ctx.reply, ctx.sender));

// ── ADMIN: RULES / NOTES / POLL / BAN / AUTOREPLY (batch 2) ──────────────
reg(['setrules', 'aturanaturgrup'], async (ctx) => adminCommands2.setRules(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['rules', 'aturan', 'aturangrup'], async (ctx) => adminCommands2.showRules(ctx.reply, ctx.jid));
reg(['addnote', 'tambahnote', 'catat'], async (ctx) => adminCommands2.addNote(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['notes', 'listnote', 'catatan'], async (ctx) => adminCommands2.listNotes(ctx.reply, ctx.jid));
reg(['delnote', 'hapusnote', 'deletenote'], async (ctx) => adminCommands2.deleteNote(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['pollnative', 'pollwa', 'jajakpendapat'], async (ctx) => adminCommands2.createPoll(ctx.sock, ctx.reply, ctx.jid, ctx.msg, ctx.args));
reg(['antidelete', 'antihapus'], async (ctx) => adminCommands2.antidelete(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['statsgrupmember', 'infostatsgrup', 'statsmember'], async (ctx) => adminCommands2.groupActivity(ctx.sock, ctx.reply, ctx.jid));
reg(['ban', 'blokirbot', 'blockuser'], async (ctx) => adminCommands2.banUser(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['unban', 'bukablokir', 'unblockuser'], async (ctx) => adminCommands2.unbanUser(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['autoreply', 'aturbalasan', 'setautoreply'], async (ctx) => adminCommands2.setAutoReply(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['listautoreply', 'daftarbalasan'], async (ctx) => adminCommands2.listAutoReply(ctx.reply, ctx.jid));

// ── FUN: BATCH 2 ──────────────────────────────────────────────────────────
reg(['compliment', 'puji', 'pujian'], async (ctx) => funCommands2.compliment(ctx.reply, ctx.mentioned));
reg(['roast', 'roasting', 'sindir'], async (ctx) => funCommands2.roast(ctx.reply, ctx.mentioned));
reg(['pickupline', 'gombalan', 'rayuan'], async (ctx) => funCommands2.pickupLine(ctx.reply));
reg(['nhie', 'neverhaveiever', 'pernahgak'], async (ctx) => funCommands2.neverHaveIEver(ctx.reply));
reg(['storystarter', 'mulaicerita'], async (ctx) => funCommands2.storyStarter(ctx.reply));
reg(['emojipuzzle', 'tebakemoji'], async (ctx) => funCommands2.emojiPuzzle(ctx.reply, ctx.jid));
reg(['jawabemoji', 'answeremoji'], async (ctx) => funCommands2.answerEmoji(ctx.reply, ctx.jid, ctx.args));
reg(['bola8', 'ramalanbola'], async (ctx) => funCommands2.magic8ball(ctx.reply, ctx.args));
reg(['challenge', 'tantangan', 'tantanganharian'], async (ctx) => funCommands2.randomChallenge(ctx.reply));
reg(['wordassoc', 'asosiasikata'], async (ctx) => funCommands2.wordAssociation(ctx.reply, ctx.jid));
reg(['mbti', 'tipemodel'], async (ctx) => funCommands2.mbtiGuess(ctx.reply));
reg(['luckynumberku', 'nomorberuntungku'], async (ctx) => funCommands2.luckyNumber(ctx.reply, ctx.sender));
reg(['mood', 'moodharian', 'dailymood'], async (ctx) => funCommands2.dailyMood(ctx.reply));

// ── TOOLS: MATH BATCH 2 ───────────────────────────────────────────────────
reg(['isprime', 'cekprima'], async (ctx) => mathTools2.isPrime(ctx.reply, ctx.args));
reg(['palindrome', 'cekpalindrome'], async (ctx) => mathTools2.isPalindrome(ctx.reply, ctx.args));
reg(['faktorial', 'factorial'], async (ctx) => mathTools2.factorial(ctx.reply, ctx.args));
reg(['fibonacci', 'fibo'], async (ctx) => mathTools2.fibonacci(ctx.reply, ctx.args));
reg(['gcdlcm', 'fpbkpk'], async (ctx) => mathTools2.gcdLcm(ctx.reply, ctx.args));
reg(['suhulengkap', 'celsiusall'], async (ctx) => mathTools2.celsiusAll(ctx.reply, ctx.args));
reg(['roman', 'romawi'], async (ctx) => mathTools2.toRoman(ctx.reply, ctx.args));
reg(['kuadrat', 'quadratic'], async (ctx) => mathTools2.quadratic(ctx.reply, ctx.args));
reg(['average', 'ratarata'], async (ctx) => mathTools2.average(ctx.reply, ctx.args));
reg(['median'], async (ctx) => mathTools2.median(ctx.reply, ctx.args));

// ── TOOLS: DATE BATCH ──────────────────────────────────────────────────────
reg(['harike', 'dayofweek'], async (ctx) => dateTools.dayOfWeek(ctx.reply, ctx.args));
reg(['sisahari', 'daysuntil', 'countdown'], async (ctx) => dateTools.daysUntil(ctx.reply, ctx.args));
reg(['leapyear', 'tahunkabisat'], async (ctx) => dateTools.isLeapYear(ctx.reply, ctx.args));
reg(['zodiaklahir', 'cekzodiak'], async (ctx) => dateTools.zodiacSign(ctx.reply, ctx.args));

// ── TOOLS: FORMAT BATCH ───────────────────────────────────────────────────
reg(['kapitalkata'], async (ctx) => formatTools.toTitleCase(ctx.reply, ctx.args));
reg(['removespace', 'hapusspasi'], async (ctx) => formatTools.removeSpaces(ctx.reply, ctx.args));
reg(['repeat'], async (ctx) => formatTools.repeatText(ctx.reply, ctx.args));
reg(['charat', 'karakterke'], async (ctx) => formatTools.charAt(ctx.reply, ctx.args));
reg(['textstats', 'statistikteks'], async (ctx) => formatTools.textStats(ctx.reply, ctx.args));

// ── TOOLS: VALIDATOR BATCH ────────────────────────────────────────────────
reg(['validemail'], async (ctx) => validatorTools.validateEmail(ctx.reply, ctx.args));
reg(['validphone', 'ceknomor'], async (ctx) => validatorTools.validatePhone(ctx.reply, ctx.args));
reg(['cekpassword', 'passwordstrength'], async (ctx) => validatorTools.checkPasswordStrength(ctx.reply, ctx.args));

// ── RPG: LOOKUP / INFO (batch 4) ──────────────────────────────────────────
reg(['monster', 'monsterinfo', 'infomonster'], async (ctx) => rpgCommands4.monsterInfo(ctx.reply, ctx.args));
reg(['monsterlist', 'listmonster', 'daftarmonster'], async (ctx) => rpgCommands4.monsterList(ctx.reply, ctx.args));
reg(['iteminfo', 'infoitem', 'detailitem'], async (ctx) => rpgCommands4.itemInfo(ctx.reply, ctx.args));
reg(['weaponlist', 'listweapon', 'daftarweapon', 'daftarsenjata'], async (ctx) => rpgCommands4.weaponList(ctx.reply, ctx.args));
reg(['armorlist', 'listarmor', 'daftarzirah', 'daftararmor'], async (ctx) => rpgCommands4.armorList(ctx.reply, ctx.args));
reg(['compare', 'bandingkan', 'comparepower'], async (ctx) => rpgCommands4.comparePower(ctx.reply, ctx.sender, ctx.mentioned));
reg(['classinfo', 'infoclass', 'detailclass'], async (ctx) => rpgCommands4.classInfo(ctx.reply, ctx.args));
reg(['hp', 'cekhp', 'checkhp'], async (ctx) => rpgCommands4.checkHp(ctx.reply, ctx.sender));
reg(['gold', 'cekgold', 'checkgold', 'saldo'], async (ctx) => rpgCommands4.checkGold(ctx.reply, ctx.sender));
reg(['level', 'ceklevel', 'checklevel', 'lvl'], async (ctx) => rpgCommands4.checkLevel(ctx.reply, ctx.sender));

// ── EXTRA ALIASES TO ROUND OUT FEATURE COVERAGE ──────────────────────────
reg(['cekprofil', 'lihatprofil', 'myprofile', 'akun'], async (ctx) => rpgCommands.showProfile(ctx.reply, ctx.sender, ctx.msg, ctx.mentioned));
reg(['tas', 'cektas', 'myinventory', 'mybag'], async (ctx) => rpgCommands.showInventory(ctx.reply, ctx.sender));
reg(['pakaiweapon', 'equipweapon', 'gunakan'], async (ctx) => rpgCommands.equipItem(ctx.reply, ctx.sender, ctx.args));
reg(['lepasweapon', 'unequipweapon'], async (ctx) => rpgCommands.unequipItem(ctx.reply, ctx.sender, ctx.args));
reg(['minumpotion', 'usepotion', 'pakaipotion'], async (ctx) => rpgCommands.useItem(ctx.reply, ctx.sender, ctx.args));
reg(['serbu', 'attack', 'hajar'], async (ctx) => rpgCommands.hunt(ctx.reply, ctx.sender));
reg(['tarung', 'fight', 'challengepvp'], async (ctx) => rpgCommands.battle(ctx.reply, ctx.sender, ctx.mentioned));
reg(['healhp', 'pulihkan', 'sembuh'], async (ctx) => rpgCommands.rest(ctx.reply, ctx.sender));
reg(['raidboss', 'seranggboss', 'fightraid'], async (ctx) => rpgCommands2.fightBoss(ctx.reply, ctx.sender, ctx.args));
reg(['masuk', 'enterdungeon', 'gerbang'], async (ctx) => rpgCommands2.enterDungeon(ctx.reply, ctx.sender, ctx.args));
reg(['cektoko', 'lihattoko', 'viewstore'], async (ctx) => rpgCommands2.showShop(ctx.reply, ctx.args));
reg(['purchase', 'belanjaitem'], async (ctx) => rpgCommands2.buyItem(ctx.reply, ctx.sender, ctx.args));
reg(['jualitem', 'sellitem'], async (ctx) => rpgCommands2.sellItem(ctx.reply, ctx.sender, ctx.args));
reg(['absenharian', 'klaimharian', 'rewardharian'], async (ctx) => rpgCommands2.dailyReward(ctx.reply, ctx.sender));
reg(['bekerja', 'cariuang', 'ngumpulgold'], async (ctx) => rpgCommands2.work(ctx.reply, ctx.sender, ctx.args));
reg(['setor', 'simpanbank', 'depositbank'], async (ctx) => rpgCommands2.bankDeposit(ctx.reply, ctx.sender, ctx.args));
reg(['ambilbank', 'withdrawbank', 'tarikbank'], async (ctx) => rpgCommands2.bankWithdraw(ctx.reply, ctx.sender, ctx.args));
reg(['kirimgoldke', 'sendgold', 'transfergold'], async (ctx) => rpgCommands2.transfer(ctx.reply, ctx.sender, ctx.mentioned, ctx.args));
reg(['merampok', 'mencuri', 'steal'], async (ctx) => rpgCommands2.rob(ctx.reply, ctx.sender, ctx.mentioned));
reg(['cekpet', 'mypets', 'listpets'], async (ctx) => rpgCommands2.petInfo(ctx.reply, ctx.sender));
reg(['gantipetaktif', 'activatepet'], async (ctx) => rpgCommands2.setPet(ctx.reply, ctx.sender, ctx.args));
reg(['daftarmisi', 'listquest', 'misiku'], async (ctx) => rpgCommands2.showQuests(ctx.reply, ctx.sender));
reg(['ambilreward', 'claimreward', 'klaimreward'], async (ctx) => rpgCommands2.claimQuest(ctx.reply, ctx.sender, ctx.args));
reg(['lencanaku', 'myachievements', 'badge'], async (ctx) => rpgCommands2.showAchievements(ctx.reply, ctx.sender));
reg(['papanperingkat', 'globaltop', 'rankingglobal'], async (ctx) => rpgCommands2.showRanking(ctx.reply));
reg(['papanskor', 'scoreboard'], async (ctx) => rpgCommands2.leaderboard(ctx.reply, ctx.args));
reg(['menikahi', 'lamar', 'propose'], async (ctx) => rpgCommands2.marry(ctx.reply, ctx.sender, ctx.mentioned));
reg(['putuscinta', 'breakup', 'akhiripernikahan'], async (ctx) => rpgCommands2.divorce(ctx.reply, ctx.sender));
reg(['nambang', 'mengeruk', 'digging'], async (ctx) => rpgCommands3.mine(ctx.reply, ctx.sender));
reg(['memancingikan', 'gofishing'], async (ctx) => rpgCommands3.fish(ctx.reply, ctx.sender));
reg(['bikinitem', 'forge', 'tempa'], async (ctx) => rpgCommands3.craft(ctx.reply, ctx.sender, ctx.args));
reg(['perkuatitem', 'enhance', 'upgradeitem'], async (ctx) => rpgCommands3.refine(ctx.reply, ctx.sender, ctx.args));
reg(['bettinggold', 'bet', 'pasangtaruhan'], async (ctx) => rpgCommands3.gamble(ctx.reply, ctx.sender, ctx.args));
reg(['beliundian', 'tiketlotre', 'buylottery'], async (ctx) => rpgCommands3.lottery(ctx.reply, ctx.sender));
reg(['latihangym', 'workout', 'gym'], async (ctx) => rpgCommands3.train(ctx.reply, ctx.sender, ctx.args));
reg(['naikprestige', 'rebornchar', 'ascend'], async (ctx) => rpgCommands3.prestige(ctx.reply, ctx.sender));
reg(['cekaturangrup', 'lihataturan'], async (ctx) => adminCommands2.showRules(ctx.reply, ctx.jid));
reg(['simpancatatan', 'savenote'], async (ctx) => adminCommands2.addNote(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lihatcatatan', 'viewnotes'], async (ctx) => adminCommands2.listNotes(ctx.reply, ctx.jid));
reg(['buatpolling', 'votingbuat'], async (ctx) => adminCommands2.createPoll(ctx.sock, ctx.reply, ctx.jid, ctx.msg, ctx.args));
reg(['statistikgrup', 'infoaktivitas'], async (ctx) => adminCommands2.groupActivity(ctx.sock, ctx.reply, ctx.jid));
reg(['blokirpengguna', 'blockmember'], async (ctx) => adminCommands2.banUser(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['bukablokirpengguna', 'unblockmember'], async (ctx) => adminCommands2.unbanUser(ctx.reply, ctx.jid, ctx.mentioned, ctx.isAdmin));
reg(['aturautobalas', 'configautoreply'], async (ctx) => adminCommands2.setAutoReply(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lihatautobalas', 'viewautoreply'], async (ctx) => adminCommands2.listAutoReply(ctx.reply, ctx.jid));
reg(['katasemangat', 'motivation', 'penyemangat'], async (ctx) => funCommands.quote(ctx.reply));
reg(['faktamenarik', 'funfact'], async (ctx) => funCommands.fact(ctx.reply));
reg(['puzzleotak', 'brainteaser'], async (ctx) => funCommands.riddle(ctx.reply, ctx.jid));
reg(['kejujuran', 'truthquestion'], async (ctx) => funCommands.truth(ctx.reply));
reg(['tantanganfun', 'daretask'], async (ctx) => funCommands.dare(ctx.reply));
reg(['gambartebak', 'pictureguess'], async (ctx) => funCommands.tebakGambar(ctx.reply, ctx.jid));
reg(['pantunlucu', 'rhyme'], async (ctx) => funCommands.pantun(ctx.reply));
reg(['cekzodiakku', 'myzodiac'], async (ctx) => funCommands.horoscope(ctx.reply, ctx.args));
reg(['flipcoin', 'lempar'], async (ctx) => funCommands.coinFlip(ctx.reply));
reg(['lemparkandadu', 'rolldice'], async (ctx) => funCommands.rollDice(ctx.reply, ctx.args));
reg(['suitan', 'suit'], async (ctx) => funCommands.rps(ctx.reply, ctx.args));
reg(['mesinslot', 'spinslot'], async (ctx) => funCommands.slot(ctx.reply, ctx.sender));
reg(['mulaitebakangka', 'startguess'], async (ctx) => funCommands.tebakAngka(ctx.reply, ctx.jid));
reg(['jawabangka', 'guessanswer'], async (ctx) => funCommands.guessNumber(ctx.reply, ctx.jid, ctx.args));
reg(['pilihsalahsatu', 'eitheror'], async (ctx) => funCommands.wouldYouRather(ctx.reply));
reg(['cekjodohku', 'lovematch'], async (ctx) => funCommands.checkJodoh(ctx.reply, ctx.sender, ctx.mentioned));
reg(['kartutarothariini', 'dailytarot'], async (ctx) => funCommands.tarotCard(ctx.reply));
reg(['kuekeberuntungan', 'luckycookie'], async (ctx) => funCommands.fortuneCookie(ctx.reply));
reg(['kalkulatorjodoh', 'lovepercent'], async (ctx) => funCommands.hitungCinta(ctx.reply, ctx.sender, ctx.mentioned, ctx.args));
reg(['hurufbesar', 'majukan'], async (ctx) => textTools.upper(ctx.reply, ctx.args));
reg(['hurufkecil', 'minorkan'], async (ctx) => textTools.lower(ctx.reply, ctx.args));
reg(['balikteks', 'mirrortext'], async (ctx) => textTools.reverse(ctx.reply, ctx.args));
reg(['encodebinary', 'tobinary2'], async (ctx) => textTools.toBinary(ctx.reply, ctx.args));
reg(['decodebinary', 'frombinary2'], async (ctx) => textTools.fromBinary(ctx.reply, ctx.args));
reg(['encodebase64', 'tobase642'], async (ctx) => textTools.toBase64(ctx.reply, ctx.args));
reg(['decodebase64', 'frombase642'], async (ctx) => textTools.fromBase64(ctx.reply, ctx.args));
reg(['encodehex', 'tohex2'], async (ctx) => textTools.toHex(ctx.reply, ctx.args));
reg(['decodehex', 'fromhex2'], async (ctx) => textTools.fromHex(ctx.reply, ctx.args));
reg(['sandirot13', 'cipherrot13'], async (ctx) => textTools.rot13(ctx.reply, ctx.args));
reg(['bahasaleet', 'leetify'], async (ctx) => textTools.leet(ctx.reply, ctx.args));
reg(['hurufselangseling', 'zigzagcase'], async (ctx) => textTools.alternating(ctx.reply, ctx.args));
reg(['hitungkatakalimat', 'wordcounter'], async (ctx) => textTools.countWords(ctx.reply, ctx.args));
reg(['kalkulatorhitung', 'mathcalc'], async (ctx) => mathTools.calc(ctx.reply, ctx.args));
reg(['hitungpersen', 'percentcalc'], async (ctx) => mathTools.percent(ctx.reply, ctx.args));
reg(['hitungbmi', 'bmicalc'], async (ctx) => mathTools.bmi(ctx.reply, ctx.args));
reg(['cekkurs', 'kursinfo'], async (ctx) => mathTools.convertCurrencyNote(ctx.reply));
reg(['hitungusia', 'agecounter'], async (ctx) => mathTools.ageCalc(ctx.reply, ctx.args));
reg(['konversipanjang2', 'lengthconv'], async (ctx) => converterTools.convertLength(ctx.reply, ctx.args));
reg(['konversiberat2', 'weightconv'], async (ctx) => converterTools.convertWeight(ctx.reply, ctx.args));
reg(['konversisuhu2', 'tempconv'], async (ctx) => converterTools.convertTemp(ctx.reply, ctx.args));
reg(['buatpasswordku', 'newpassword'], async (ctx) => generatorTools.genPassword(ctx.reply, ctx.args));
reg(['buatuuid', 'newuuid'], async (ctx) => generatorTools.genUUID(ctx.reply));
reg(['pilihanrandom', 'randomchoice'], async (ctx) => generatorTools.pickRandom(ctx.reply, ctx.args));
reg(['acakdaftar', 'shufflelist'], async (ctx) => generatorTools.shuffleList(ctx.reply, ctx.args));
reg(['cekping', 'pingbot'], async (ctx) => infoTools.ping(ctx.reply));
reg(['siapakahaku', 'mynumber'], async (ctx) => infoTools.whoami(ctx.reply, ctx.sender));
reg(['lamabotaktif', 'botuptime'], async (ctx) => infoTools.runtime(ctx.reply, BOT_START_TIME));
reg(['waktusekarang', 'currenttime'], async (ctx) => infoTools.serverTime(ctx.reply));
reg(['cekprima2', 'primecheck'], async (ctx) => mathTools2.isPrime(ctx.reply, ctx.args));
reg(['cekpalindrome2', 'palindromecheck'], async (ctx) => mathTools2.isPalindrome(ctx.reply, ctx.args));
reg(['hitungfaktorial', 'factorialcalc'], async (ctx) => mathTools2.factorial(ctx.reply, ctx.args));
reg(['urutanfibonacci', 'fibsequence'], async (ctx) => mathTools2.fibonacci(ctx.reply, ctx.args));
reg(['hitungfpbkpk', 'gcdlcmcalc'], async (ctx) => mathTools2.gcdLcm(ctx.reply, ctx.args));
reg(['konversisuhulengkap', 'fullcelsius'], async (ctx) => mathTools2.celsiusAll(ctx.reply, ctx.args));
reg(['angkaromawi', 'romannumeral'], async (ctx) => mathTools2.toRoman(ctx.reply, ctx.args));
reg(['rumuskuadrat', 'quadraticformula'], async (ctx) => mathTools2.quadratic(ctx.reply, ctx.args));
reg(['hitungratarata', 'averagecalc'], async (ctx) => mathTools2.average(ctx.reply, ctx.args));
reg(['hitungmedian', 'mediancalc'], async (ctx) => mathTools2.median(ctx.reply, ctx.args));
reg(['cekharike', 'whatday'], async (ctx) => dateTools.dayOfWeek(ctx.reply, ctx.args));
reg(['hitungsisahari', 'remainingdays'], async (ctx) => dateTools.daysUntil(ctx.reply, ctx.args));
reg(['cekkabisat', 'leapcheck'], async (ctx) => dateTools.isLeapYear(ctx.reply, ctx.args));
reg(['cekzodiaklahir', 'birthzodiac'], async (ctx) => dateTools.zodiacSign(ctx.reply, ctx.args));
reg(['judulkata', 'capitalizetitle'], async (ctx) => formatTools.toTitleCase(ctx.reply, ctx.args));
reg(['hapusspasi2', 'trimallspace'], async (ctx) => formatTools.removeSpaces(ctx.reply, ctx.args));
reg(['ulangiteks', 'repeatstring'], async (ctx) => formatTools.repeatText(ctx.reply, ctx.args));
reg(['ambilkarakter', 'getchar'], async (ctx) => formatTools.charAt(ctx.reply, ctx.args));
reg(['statistikkalimat', 'sentencestats'], async (ctx) => formatTools.textStats(ctx.reply, ctx.args));
reg(['cekformatmail', 'emailcheck'], async (ctx) => validatorTools.validateEmail(ctx.reply, ctx.args));
reg(['cekformatnomor', 'phonecheck'], async (ctx) => validatorTools.validatePhone(ctx.reply, ctx.args));
reg(['kekuatanpassword', 'pwstrength'], async (ctx) => validatorTools.checkPasswordStrength(ctx.reply, ctx.args));
reg(['pujimember', 'givecompliment'], async (ctx) => funCommands2.compliment(ctx.reply, ctx.mentioned));
reg(['sindirmember', 'giveroast'], async (ctx) => funCommands2.roast(ctx.reply, ctx.mentioned));
reg(['rayuangombal', 'flirtline'], async (ctx) => funCommands2.pickupLine(ctx.reply));
reg(['pernahkahkamu', 'haveyouever'], async (ctx) => funCommands2.neverHaveIEver(ctx.reply));
reg(['pembukacerita', 'tellstory'], async (ctx) => funCommands2.storyStarter(ctx.reply));
reg(['tebakemojifilm', 'emojimovie'], async (ctx) => funCommands2.emojiPuzzle(ctx.reply, ctx.jid));
reg(['jawabantebakemoji', 'emojianswer'], async (ctx) => funCommands2.answerEmoji(ctx.reply, ctx.jid, ctx.args));
reg(['bola8magic', 'eightball'], async (ctx) => funCommands2.magic8ball(ctx.reply, ctx.args));
reg(['tantanganrandom', 'dailychallenge'], async (ctx) => funCommands2.randomChallenge(ctx.reply));
reg(['asosiasikatabaru', 'wordlink'], async (ctx) => funCommands2.wordAssociation(ctx.reply, ctx.jid));
reg(['tebakmbti', 'mbtitoday'], async (ctx) => funCommands2.mbtiGuess(ctx.reply));
reg(['nomorhoki', 'luckynum'], async (ctx) => funCommands2.luckyNumber(ctx.reply, ctx.sender));
reg(['moodku', 'mytodaymood'], async (ctx) => funCommands2.dailyMood(ctx.reply));

// ── FUN/GAME BARU (funCommands3) ─────────────────────────────────────────
reg(['trivia'], async (ctx) => funCommands3.trivia(ctx.reply, ctx.jid));
reg(['jawabtrivia'], async (ctx) => funCommands3.answerTrivia(ctx.reply, ctx.jid, ctx.args));
reg(['wyr2', 'wouldyourather2'], async (ctx) => funCommands3.wouldYouRather2(ctx.reply));
reg(['wordscramble', 'acakkata'], async (ctx) => funCommands3.wordScramble(ctx.reply, ctx.jid));
reg(['jawabscramble'], async (ctx) => funCommands3.answerScramble(ctx.reply, ctx.jid, ctx.args));
reg(['riddle2', 'tekateki2'], async (ctx) => funCommands3.riddle2(ctx.reply, ctx.jid));
reg(['jawabriddle2'], async (ctx) => funCommands3.answerRiddle2(ctx.reply, ctx.jid, ctx.args));
reg(['dadjoke', 'lawakanbapak'], async (ctx) => funCommands3.dadJoke(ctx.reply));
reg(['konspirasi', 'conspiracyfun'], async (ctx) => funCommands3.conspiracyFun(ctx.reply));
reg(['kepribadianhariini', 'personalitytoday'], async (ctx) => funCommands3.personalityToday(ctx.reply));
reg(['rolldadu', 'multidice'], async (ctx) => funCommands3.rollMultiDice(ctx.reply, ctx.args));
reg(['guesshilo', 'tebakhilomulai'], async (ctx) => funCommands3.guessHigherLower(ctx.reply, ctx.jid));
reg(['tebakhilo'], async (ctx) => funCommands3.answerHigherLower(ctx.reply, ctx.jid, ctx.args));
reg(['pujianrandom2', 'randomcompliment2'], async (ctx) => funCommands3.randomCompliment2(ctx.reply, ctx.mentioned));
reg(['katahariini', 'wordoftheday'], async (ctx) => funCommands3.wordOfTheDay(ctx.reply));
reg(['pilihini', 'thisorthat'], async (ctx) => funCommands3.thisOrThat(ctx.reply));
reg(['magic8ball', 'tanyabola8'], async (ctx) => funCommands3.magic8ball(ctx.reply, ctx.args));
reg(['ratehariini', 'ratemyday'], async (ctx) => funCommands3.rateMyDay(ctx.reply));
reg(['angkakeberuntungan', 'luckynumber'], async (ctx) => funCommands3.luckyNumber(ctx.reply));
reg(['emojirandom', 'randomemoji'], async (ctx) => funCommands3.randomEmoji(ctx.reply));
reg(['pengagumrahasia', 'secretadmirer'], async (ctx) => funCommands3.secretAdmirer(ctx.reply));
reg(['afirmasihariini', 'dailyaffirmation'], async (ctx) => funCommands3.dailyAffirmation(ctx.reply));

// ── RPG BARU (rpgCommands5) ──────────────────────────────────────────────
reg(['gacha', 'undianitem'], async (ctx) => rpgCommands5.gacha(ctx.reply, ctx.sender));
reg(['expedition', 'ekspedisi'], async (ctx) => rpgCommands5.expedition(ctx.reply, ctx.sender));
reg(['klaimekspedisi', 'claimexpedition'], async (ctx) => rpgCommands5.claimExpedition(ctx.reply, ctx.sender));
reg(['titleku', 'mytitle', 'cektitle'], async (ctx) => rpgCommands5.checkTitle(ctx.reply, ctx.sender));
reg(['renamechar', 'gantinama'], async (ctx) => rpgCommands5.renameChar(ctx.reply, ctx.sender, ctx.args));
reg(['resetbuff', 'resetbuffs'], async (ctx) => rpgCommands5.resetBuffs(ctx.reply, ctx.sender));
reg(['statdetail', 'statlengkap'], async (ctx) => rpgCommands5.statDetail(ctx.reply, ctx.sender));

// ── TOOLS BARU (toolsCommands3) ──────────────────────────────────────────
reg(['cekpalindrom'], async (ctx) => toolsCommands3.checkPalindrome(ctx.reply, ctx.args));
reg(['cekcc'], async (ctx) => toolsCommands3.checkCreditCard(ctx.reply, ctx.args));
reg(['cekemail'], async (ctx) => toolsCommands3.checkEmail(ctx.reply, ctx.args));
reg(['ceknohp'], async (ctx) => toolsCommands3.checkPhoneNumber(ctx.reply, ctx.args));
reg(['caesarenkrip'], async (ctx) => toolsCommands3.caesarEncrypt(ctx.reply, ctx.args));
reg(['caesardekrip'], async (ctx) => toolsCommands3.caesarDecrypt(ctx.reply, ctx.args));
reg(['tomorse'], async (ctx) => toolsCommands3.toMorse(ctx.reply, ctx.args));
reg(['frommorse'], async (ctx) => toolsCommands3.fromMorse(ctx.reply, ctx.args));
reg(['bmidetail'], async (ctx) => toolsCommands3.bmiDetailed(ctx.reply, ctx.args));
reg(['umurdetail'], async (ctx) => toolsCommands3.calculateAge2(ctx.reply, ctx.args));
reg(['persenubah'], async (ctx) => toolsCommands3.percentageChange(ctx.reply, ctx.args));
reg(['diskon'], async (ctx) => toolsCommands3.discountCalc(ctx.reply, ctx.args));
reg(['splitbill', 'bagitagihan'], async (ctx) => toolsCommands3.splitBill(ctx.reply, ctx.args));
reg(['warnarandom', 'randomcolor'], async (ctx) => toolsCommands3.randomColor(ctx.reply));
reg(['tanggalrandom', 'randomdate'], async (ctx) => toolsCommands3.randomDate(ctx.reply, ctx.args));
reg(['textascii'], async (ctx) => toolsCommands3.textToAscii(ctx.reply, ctx.args));
reg(['asciitext'], async (ctx) => toolsCommands3.asciiToText(ctx.reply, ctx.args));
reg(['frekuensikata', 'wordfreq'], async (ctx) => toolsCommands3.wordFrequency(ctx.reply, ctx.args));
reg(['titlecase'], async (ctx) => toolsCommands3.titleCase(ctx.reply, ctx.args));
reg(['camelcase'], async (ctx) => toolsCommands3.camelCase(ctx.reply, ctx.args));
reg(['snakecase'], async (ctx) => toolsCommands3.snakeCase(ctx.reply, ctx.args));
reg(['kebabcase'], async (ctx) => toolsCommands3.kebabCase(ctx.reply, ctx.args));
reg(['hitungvokal'], async (ctx) => toolsCommands3.countVowels(ctx.reply, ctx.args));
reg(['hapusvokal'], async (ctx) => toolsCommands3.removeVowels(ctx.reply, ctx.args));
reg(['hitungkonsonan'], async (ctx) => toolsCommands3.countConsonants(ctx.reply, ctx.args));
reg(['ulangteks', 'repeattext'], async (ctx) => toolsCommands3.repeatText(ctx.reply, ctx.args));
reg(['suhu', 'tempconvert'], async (ctx) => toolsCommands3.tempConvert(ctx.reply, ctx.args));
reg(['hitungtip', 'tipcalc'], async (ctx) => toolsCommands3.tipCalc(ctx.reply, ctx.args));

// ─── TOOLS BATCH BARU (warna, cipher, teks, JSON, regex) ───────────────────
reg(['hex2rgb'], async (ctx) => toolsCommands4.hexToRgbCmd(ctx.reply, ctx.args));
reg(['rgb2hex'], async (ctx) => toolsCommands4.rgbToHexCmd(ctx.reply, ctx.args));
reg(['vigenere'], async (ctx) => toolsCommands4.vigenereEncrypt(ctx.reply, ctx.args));
reg(['vigeneredekrip'], async (ctx) => toolsCommands4.vigenereDecrypt(ctx.reply, ctx.args));
reg(['atbash'], async (ctx) => toolsCommands4.atbash(ctx.reply, ctx.args));
reg(['tobase32'], async (ctx) => toolsCommands4.toBase32(ctx.reply, ctx.args));
reg(['frombase32'], async (ctx) => toolsCommands4.fromBase32(ctx.reply, ctx.args));
reg(['slugify'], async (ctx) => toolsCommands4.slugifyCmd(ctx.reply, ctx.args));
reg(['loremipsum'], async (ctx) => toolsCommands4.loremIpsum(ctx.reply, ctx.args));
reg(['randomname', 'namarandom'], async (ctx) => toolsCommands4.randomFantasyName(ctx.reply));
reg(['anagram'], async (ctx) => toolsCommands4.anagramCheck(ctx.reply, ctx.args));
reg(['syllable', 'sukukata'], async (ctx) => toolsCommands4.syllableCount(ctx.reply, ctx.args));
reg(['readingtime', 'waktubaca'], async (ctx) => toolsCommands4.readingTime(ctx.reply, ctx.args));
reg(['numeronim'], async (ctx) => toolsCommands4.numeronym(ctx.reply, ctx.args));
reg(['dogyears', 'umuranjing'], async (ctx) => toolsCommands4.dogYears(ctx.reply, ctx.args));
reg(['jsonvalidate'], async (ctx) => toolsCommands4.jsonValidate(ctx.reply, ctx.args));
reg(['jsonformat'], async (ctx) => toolsCommands4.jsonFormat(ctx.reply, ctx.args));
reg(['regextest'], async (ctx) => toolsCommands4.regexTest(ctx.reply, ctx.args));

// .qrcode & .shorturl butuh ctx.sock langsung (kirim gambar / panggil API
// eksternal), jadi didaftarkan inline di sini, bukan lewat toolsCommands4.js
reg(['qrcode', 'qr'], async (ctx) => {
    const text = ctx.args.join(' ').trim();
    if (!text) return ctx.reply('📌 Cara pakai: *.qrcode [teks/link]*');
    const url = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(text)}`;
    try {
        await ctx.sock.sendMessage(ctx.jid, { image: { url }, caption: `📱 QR Code untuk:\n${text.slice(0, 100)}` }, { quoted: ctx.msg });
    } catch (err) {
        await ctx.reply(`❌ Gagal membuat QR code: ${err.message}`);
    }
});
reg(['shorturl', 'pendekkanlink'], async (ctx) => {
    const link = ctx.args[0];
    if (!link || !/^https?:\/\//i.test(link)) return ctx.reply('📌 Cara pakai: *.shorturl [link lengkap dengan http/https]*');
    try {
        const res = await fetch(`https://is.gd/create.php?format=simple&url=${encodeURIComponent(link)}`);
        const short = await res.text();
        if (!short.startsWith('http')) throw new Error(short);
        await ctx.reply(`🔗 *Link Pendek*\n\n${short}`);
    } catch (err) {
        await ctx.reply(`❌ Gagal memendekkan link: ${err.message}`);
    }
});

// ─── TOOLS BATCH BESAR #2 (commands/toolsCommands5.js) ─────────────────────
reg(['urlencode'], async (ctx) => toolsCommands5.urlEncode(ctx.reply, ctx.args));
reg(['urldecode'], async (ctx) => toolsCommands5.urlDecode(ctx.reply, ctx.args));
reg(['htmlencode'], async (ctx) => toolsCommands5.htmlEncode(ctx.reply, ctx.args));
reg(['htmldecode'], async (ctx) => toolsCommands5.htmlDecode(ctx.reply, ctx.args));
reg(['rot47'], async (ctx) => toolsCommands5.rot47(ctx.reply, ctx.args));
reg(['xorcipher'], async (ctx) => toolsCommands5.xorCipher(ctx.reply, ctx.args));
reg(['xordekrip'], async (ctx) => toolsCommands5.xorDecrypt(ctx.reply, ctx.args));
reg(['digitalroot'], async (ctx) => toolsCommands5.digitalRoot(ctx.reply, ctx.args));
reg(['collatz'], async (ctx) => toolsCommands5.collatzLength(ctx.reply, ctx.args));
reg(['perfectnumber'], async (ctx) => toolsCommands5.perfectNumberCheck(ctx.reply, ctx.args));
reg(['popcount'], async (ctx) => toolsCommands5.popCount(ctx.reply, ctx.args));
reg(['binaryops'], async (ctx) => toolsCommands5.binaryOps(ctx.reply, ctx.args));
reg(['circlearea'], async (ctx) => toolsCommands5.circleCalc(ctx.reply, ctx.args));
reg(['triangleheron'], async (ctx) => toolsCommands5.triangleHeron(ctx.reply, ctx.args));
reg(['rectarea'], async (ctx) => toolsCommands5.rectCalc(ctx.reply, ctx.args));
reg(['spherevolume'], async (ctx) => toolsCommands5.sphereCalc(ctx.reply, ctx.args));
reg(['stdev'], async (ctx) => toolsCommands5.stdDeviation(ctx.reply, ctx.args));
reg(['statmode'], async (ctx) => toolsCommands5.statMode(ctx.reply, ctx.args));
reg(['compoundinterest'], async (ctx) => toolsCommands5.compoundInterest(ctx.reply, ctx.args));
reg(['simpleinterest'], async (ctx) => toolsCommands5.simpleInterest(ctx.reply, ctx.args));
reg(['loanpayment'], async (ctx) => toolsCommands5.loanPayment(ctx.reply, ctx.args));
reg(['roi'], async (ctx) => toolsCommands5.roiCalc(ctx.reply, ctx.args));
reg(['businessdays'], async (ctx) => toolsCommands5.businessDaysBetween(ctx.reply, ctx.args));
reg(['weeknumber'], async (ctx) => toolsCommands5.weekNumber(ctx.reply, ctx.args));
reg(['quarter'], async (ctx) => toolsCommands5.quarterOf(ctx.reply, ctx.args));
reg(['levenshtein'], async (ctx) => toolsCommands5.levenshtein(ctx.reply, ctx.args));
reg(['passphrase'], async (ctx) => toolsCommands5.passphrase(ctx.reply, ctx.args));
reg(['acronym'], async (ctx) => toolsCommands5.acronymGenerate(ctx.reply, ctx.args));
reg(['listunique'], async (ctx) => toolsCommands5.listUnique(ctx.reply, ctx.args));
reg(['listintersect'], async (ctx) => toolsCommands5.listIntersect(ctx.reply, ctx.args));
reg(['listdiff'], async (ctx) => toolsCommands5.listDiff(ctx.reply, ctx.args));
reg(['windchill'], async (ctx) => toolsCommands5.windChill(ctx.reply, ctx.args));
reg(['heatindex'], async (ctx) => toolsCommands5.heatIndex(ctx.reply, ctx.args));
reg(['angleconvert'], async (ctx) => toolsCommands5.angleConvert(ctx.reply, ctx.args));
reg(['cmyk2rgb'], async (ctx) => toolsCommands5.cmykToRgb(ctx.reply, ctx.args));

// ─── MEDIA BATCH BARU (commands/mediaCommands2.js, pakai ffmpeg) ───────────
reg(['grayscale', 'hitamputih'], grayscaleCmd);
reg(['mirror', 'cerminkan'], mirrorCmd);
reg(['blur'], blurCmd);
reg(['hd', 'hdphoto', 'upscale'], hdCmd);
reg(['rotate90'], rotate90Cmd);
reg(['rotate180'], rotate180Cmd);
reg(['speedup'], speedUpCmd);
reg(['slowmo'], slowMoCmd);
reg(['mutevideo'], muteVideoCmd);
reg(['extractaudio'], extractAudioCmd);
reg(['volumeup'], volumeUpCmd);

// ─── BOT BATCH BARU (commands/botCommands.js) ──────────────────────────────
reg(['botstats', 'statistikbot'], botStats);
reg(['changelog', 'riwayatupdate'], showChangelog);
reg(['suggest', 'saran'], submitSuggestion);
reg(['listsuggestions', 'listsaran'], listSuggestions);
reg(['clearsuggestions', 'hapussaran'], clearSuggestions);
reg(['credits'], showCredits);
reg(['support', 'bantuan'], showSupport);
reg(['backupnow', 'backupsekarang'], backupNow);

// ─── MEDIA BATCH #3 (efek tambahan) ────────────────────────────────────────
reg(['sepia'], sepiaCmd);
reg(['invert'], invertCmd);
reg(['pixelate'], pixelateCmd);
reg(['brighten', 'terangkan'], brightenCmd);
reg(['darken', 'gelapkan'], darkenCmd);
reg(['reversevideo', 'balikvideo'], reverseVideoCmd);
reg(['flipvertical', 'flipvertikal'], flipVerticalCmd);
reg(['square', 'cropsquare'], squareCropCmd);
reg(['watermark'], watermarkCmd);

// ─── TOOLS BATCH #7 (commands/toolsCommands10.js) ──────────────────────────
reg(['tobase58'], async (ctx) => toolsCommands10.toBase58(ctx.reply, ctx.args));
reg(['frombase58'], async (ctx) => toolsCommands10.fromBase58(ctx.reply, ctx.args));
reg(['pressureconvert'], async (ctx) => toolsCommands10.pressureConvert(ctx.reply, ctx.args));
reg(['randomword'], async (ctx) => toolsCommands10.randomWord(ctx.reply));
reg(['randomcity'], async (ctx) => toolsCommands10.randomCity(ctx.reply));
reg(['topwords'], async (ctx) => toolsCommands10.wordFrequencyTop(ctx.reply, ctx.args));

// ─── AI STYLE TRANSFER (commands/mediaCommands3.js) — butuh setup ──────────
// settings.puterAuthToken (lihat setting.js buat cara dapetnya)
reg(['tobotak'], toBotakCmd);
reg(['tochibi'], toChibiCmd);
reg(['tofigura'], toFiguraCmd);
reg(['toghibli'], toGhibliCmd);
reg(['tohijab'], toHijabCmd);
reg(['tolego'], toLegoCmd);
reg(['tohitam'], toHitamCmd);
reg(['to3d'], to3dCmd);
reg(['toroblox'], toRobloxCmd);
reg(['tooilpainting'], toOilPaintingCmd);

// ─── TOOLS BATCH #8 (commands/toolsCommands11.js) ──────────────────────────
reg(['upsidedown'], async (ctx) => toolsCommands11.upsideDown(ctx.reply, ctx.args));
reg(['zalgotext'], async (ctx) => toolsCommands11.zalgoText(ctx.reply, ctx.args));
reg(['smallcaps'], async (ctx) => toolsCommands11.smallCaps(ctx.reply, ctx.args));
reg(['strikethrough'], async (ctx) => toolsCommands11.strikethroughText(ctx.reply, ctx.args));
reg(['underline'], async (ctx) => toolsCommands11.underlineText(ctx.reply, ctx.args));
reg(['circledtext'], async (ctx) => toolsCommands11.circledText(ctx.reply, ctx.args));
reg(['fullwidth'], async (ctx) => toolsCommands11.fullwidthText(ctx.reply, ctx.args));
reg(['hammingdistance'], async (ctx) => toolsCommands11.hammingDistance(ctx.reply, ctx.args));
reg(['jaccard'], async (ctx) => toolsCommands11.jaccardSimilarity(ctx.reply, ctx.args));
reg(['averagespeed'], async (ctx) => toolsCommands11.averageSpeed(ctx.reply, ctx.args));
reg(['electricitybill'], async (ctx) => toolsCommands11.electricityBill(ctx.reply, ctx.args));

// ─── TOOLS BATCH #9 (commands/toolsCommands12.js) — fisika/matematika/konverter ─
reg(['ohm', 'hukumohm'], async (ctx) => toolsCommands12.ohmLaw(ctx.reply, ctx.args));
reg(['energikinetik'], async (ctx) => toolsCommands12.kineticEnergy(ctx.reply, ctx.args));
reg(['gayagravitasi'], async (ctx) => toolsCommands12.gravitationalForce(ctx.reply, ctx.args));
reg(['jarakproyektil'], async (ctx) => toolsCommands12.projectileRange(ctx.reply, ctx.args));
reg(['percepatan'], async (ctx) => toolsCommands12.acceleration(ctx.reply, ctx.args));
reg(['faktorprima'], async (ctx) => toolsCommands12.primeFactors(ctx.reply, ctx.args));
reg(['fpbstep'], async (ctx) => toolsCommands12.gcdSteps(ctx.reply, ctx.args));
reg(['matrixtambah'], async (ctx) => toolsCommands12.matrixAdd(ctx.reply, ctx.args));
reg(['matrixkali'], async (ctx) => toolsCommands12.matrixMultiply(ctx.reply, ctx.args));
reg(['persentaselemak'], async (ctx) => toolsCommands12.bodyFatPercent(ctx.reply, ctx.args));
reg(['pacelari'], async (ctx) => toolsCommands12.runningPace(ctx.reply, ctx.args));
reg(['konversidata'], async (ctx) => toolsCommands12.dataUnitConvert(ctx.reply, ctx.args));
reg(['konversidaya'], async (ctx) => toolsCommands12.powerUnitConvert(ctx.reply, ctx.args));

// ─── FUN BATCH #4 (commands/funCommands4.js) — shio/zodiak/generator random ────
reg(['shiozodiak'], async (ctx) => funCommands4.chineseZodiac(ctx.reply, ctx.args));
reg(['artimimpi'], async (ctx) => funCommands4.dreamMeaning(ctx.reply, ctx.args));
reg(['warnahoki'], async (ctx) => funCommands4.luckyColor(ctx.reply));
reg(['elementzodiak'], async (ctx) => funCommands4.zodiacElement(ctx.reply, ctx.args));
reg(['namatim'], async (ctx) => funCommands4.randomTeamName(ctx.reply));
reg(['julukananime'], async (ctx) => funCommands4.animeEpithet(ctx.reply));
reg(['namakerajaan'], async (ctx) => funCommands4.randomKingdomName(ctx.reply));

// ─── DELAY — atur delay balasan bot (0 = instan) ───────────────────────────
// FIX: sekarang Admin grup juga boleh pakai, tidak cuma Owner/Creator.
// CATATAN PENTING (belum diubah, sengaja diberitahu dulu): setting ini
// masih GLOBAL — satu nilai yang sama berlaku untuk SEMUA chat (grup lain,
// DM, dst), bukan cuma grup tempat Admin itu mengetik .delay. Kalau bot ini
// dipakai di banyak grup berbeda (mis. mode sewa) dan tiap grup butuh delay
// sendiri-sendiri, kabari lagi supaya ini diubah jadi per-grup.
reg(['delay'], async (ctx) => {
    if (!ctx.isOwner && !ctx.isCreator && !ctx.isAdmin) {
        return ctx.reply('❌ Hanya Owner/Creator atau Admin grup yang bisa mengubah delay balasan bot.');
    }
    const arg = ctx.args[0];
    if (arg === undefined) {
        const current = getReplyDelayOverride();
        return ctx.reply(
            `📌 *Delay Balasan Bot*\n\n` +
            `Status sekarang: *${current === null ? 'Default (acak 3-4 detik)' : current === 0 ? 'Instan (0 detik)' : current + ' detik'}*\n\n` +
            `Ketik \`.delay [detik]\` untuk ubah (0 = instan/langsung).\nKetik \`.delay default\` untuk balik ke delay acak bawaan.`
        );
    }
    if (arg.toLowerCase() === 'default') {
        setReplyDelayOverride(null);
        return ctx.reply('✅ Delay balasan bot dikembalikan ke default (acak 3-4 detik).');
    }
    const seconds = parseInt(arg, 10);
    if (isNaN(seconds) || seconds < 0 || seconds > 60) {
        return ctx.reply('⚠️ Cara pakai: `.delay [detik]` (0-60, 0 = instan) atau `.delay default`');
    }
    setReplyDelayOverride(seconds);
    return ctx.reply(`✅ Delay balasan bot diatur ke *${seconds === 0 ? 'instan (0 detik)' : seconds + ' detik'}*.`);
});

// ─── TOOLS BATCH #4 — sederhana/dasar (commands/toolsCommands7.js) ─────────
reg(['massconvert'], async (ctx) => toolsCommands7.massConvert(ctx.reply, ctx.args));
reg(['volumeconvert'], async (ctx) => toolsCommands7.volumeConvert(ctx.reply, ctx.args));
reg(['trimspaces'], async (ctx) => toolsCommands7.trimSpaces(ctx.reply, ctx.args));
reg(['capitalizefirst'], async (ctx) => toolsCommands7.capitalizeFirst(ctx.reply, ctx.args));
reg(['countchar'], async (ctx) => toolsCommands7.countChar(ctx.reply, ctx.args));
reg(['randomcolorname'], async (ctx) => toolsCommands7.randomColorName(ctx.reply));
reg(['ageinseconds'], async (ctx) => toolsCommands7.ageInSeconds(ctx.reply, ctx.args));
reg(['nextweekday'], async (ctx) => toolsCommands7.nextWeekday(ctx.reply, ctx.args));
reg(['gcdlist'], async (ctx) => toolsCommands7.gcdList(ctx.reply, ctx.args));
reg(['lcmlist'], async (ctx) => toolsCommands7.lcmList(ctx.reply, ctx.args));
reg(['removedupewords'], async (ctx) => toolsCommands7.removeDuplicateWords(ctx.reply, ctx.args));
reg(['strlen'], async (ctx) => toolsCommands7.stringLength(ctx.reply, ctx.args));
reg(['isnumeric'], async (ctx) => toolsCommands7.isNumeric(ctx.reply, ctx.args));
reg(['reversenumber'], async (ctx) => toolsCommands7.reverseNumber(ctx.reply, ctx.args));

// ─── ADMIN & BOT — tambahan sederhana ───────────────────────────────────────
reg(['grouplinkqr'], async (ctx) => {
    if (!ctx.isAdmin) return ctx.reply('❌ Khusus Admin grup.');
    try {
        const code = await ctx.sock.groupInviteCode(ctx.jid);
        const link = `https://chat.whatsapp.com/${code}`;
        const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(link)}`;
        await ctx.sock.sendMessage(ctx.jid, { image: { url: qrUrl }, caption: `🔗 QR Code link grup ini:\n${link}` }, { quoted: ctx.msg });
    } catch (err) {
        await ctx.reply(`❌ Gagal buat QR: ${err.message}`);
    }
});
reg(['version', 'versibot'], async (ctx) => ctx.reply(`🤖 *${settings.botName}*\nVersi: *v${settings.botVersion}*`));

// ─── TOOLS BATCH #5 (commands/toolsCommands8.js) ───────────────────────────
reg(['removepunctuation'], async (ctx) => toolsCommands8.removePunctuation(ctx.reply, ctx.args));
reg(['extractnumbers'], async (ctx) => toolsCommands8.extractNumbers(ctx.reply, ctx.args));
reg(['extractemails'], async (ctx) => toolsCommands8.extractEmails(ctx.reply, ctx.args));
reg(['extracturls'], async (ctx) => toolsCommands8.extractUrls(ctx.reply, ctx.args));
reg(['wordwrap'], async (ctx) => toolsCommands8.wordWrap(ctx.reply, ctx.args));
reg(['tax'], async (ctx) => toolsCommands8.taxCalc(ctx.reply, ctx.args));
reg(['taxremove'], async (ctx) => toolsCommands8.taxRemove(ctx.reply, ctx.args));
reg(['discountstack'], async (ctx) => toolsCommands8.discountStack(ctx.reply, ctx.args));
reg(['retirement'], async (ctx) => toolsCommands8.retirementCountdown(ctx.reply, ctx.args));
reg(['bmr'], async (ctx) => toolsCommands8.bmrCalc(ctx.reply, ctx.args));
reg(['idealweight'], async (ctx) => toolsCommands8.idealWeightRange(ctx.reply, ctx.args));
reg(['waterintake'], async (ctx) => toolsCommands8.waterIntake(ctx.reply, ctx.args));
reg(['timeconvert'], async (ctx) => toolsCommands8.timeConvert(ctx.reply, ctx.args));
reg(['numeralsystem'], async (ctx) => toolsCommands8.numeralSystem(ctx.reply, ctx.args));
reg(['leapyearlist'], async (ctx) => toolsCommands8.leapYearList(ctx.reply, ctx.args));
reg(['daysinmonth'], async (ctx) => toolsCommands8.daysInMonth(ctx.reply, ctx.args));
reg(['zodiaccompat'], async (ctx) => toolsCommands8.zodiacCompat(ctx.reply, ctx.args));

// ─── TOOLS BATCH #6 (commands/toolsCommands9.js) ───────────────────────────
reg(['simplifyfraction'], async (ctx) => toolsCommands9.simplifyFraction(ctx.reply, ctx.args));
reg(['fractiontodecimal'], async (ctx) => toolsCommands9.fractionToDecimal(ctx.reply, ctx.args));
reg(['decimaltofraction'], async (ctx) => toolsCommands9.decimalToFraction(ctx.reply, ctx.args));
reg(['gpacalc'], async (ctx) => toolsCommands9.gpaCalculator(ctx.reply, ctx.args));
reg(['romanvalidate'], async (ctx) => toolsCommands9.romanValidate(ctx.reply, ctx.args));
reg(['currencyformat'], async (ctx) => toolsCommands9.currencyFormat(ctx.reply, ctx.args));
reg(['rollnotation'], async (ctx) => toolsCommands9.rollNotation(ctx.reply, ctx.args));
reg(['drawcard'], async (ctx) => toolsCommands9.drawCard(ctx.reply, ctx.args));
reg(['hashtaggen'], async (ctx) => toolsCommands9.hashtagGenerate(ctx.reply, ctx.args));

// ─── ADMIN — preview pesan welcome tanpa perlu member baru join ────────────
reg(['previewwelcome'], async (ctx) => {
    const gs = getGroupSettings(ctx.jid);
    if (!gs.welcomeText) return ctx.reply('ℹ️ Belum ada pesan welcome yang diatur.\nSet dulu lewat `.setwelcome [teks]`.');
    const rendered = gs.welcomeText
        .replace(/\{user\}/g, `@${ctx.sender.split('@')[0]}`)
        .replace(/\{group\}/g, ctx.jid);
    await ctx.sock.sendMessage(ctx.jid, { text: `👋 *Preview Welcome Message:*\n\n${rendered}`, mentions: [ctx.sender] }, { quoted: ctx.msg });
});

// ─── ADMIN BATCH #3 (Event RSVP, Quick Lock) ───────────────────────────────
reg(['createevent', 'buatevent'], eventCreate);
reg(['rsvp'], eventRsvp);
reg(['listevents', 'daftarevent'], eventList);
reg(['eventattendees', 'pesertaevent'], eventAttendees);
reg(['quicklock'], quickLock);
reg(['quickunlock'], quickUnlock);

// ─── TOOLS BATCH #3 (commands/toolsCommands6.js) ───────────────────────────
reg(['railfence'], async (ctx) => toolsCommands6.railFenceEnc(ctx.reply, ctx.args));
reg(['railfencedekrip'], async (ctx) => toolsCommands6.railFenceDec(ctx.reply, ctx.args));
reg(['caesarbrute'], async (ctx) => toolsCommands6.caesarBrute(ctx.reply, ctx.args));
reg(['tobase36'], async (ctx) => toolsCommands6.toBase36(ctx.reply, ctx.args));
reg(['frombase36'], async (ctx) => toolsCommands6.fromBase36(ctx.reply, ctx.args));
reg(['piglatin'], async (ctx) => toolsCommands6.pigLatin(ctx.reply, ctx.args));
reg(['ncr'], async (ctx) => toolsCommands6.combination(ctx.reply, ctx.args));
reg(['npr'], async (ctx) => toolsCommands6.permutation(ctx.reply, ctx.args));
reg(['pascalrow'], async (ctx) => toolsCommands6.pascalRow(ctx.reply, ctx.args));
reg(['primelist'], async (ctx) => toolsCommands6.primeList(ctx.reply, ctx.args));
reg(['trapezoidarea'], async (ctx) => toolsCommands6.trapezoidArea(ctx.reply, ctx.args));
reg(['hexagonarea'], async (ctx) => toolsCommands6.hexagonArea(ctx.reply, ctx.args));
reg(['cylindervolume'], async (ctx) => toolsCommands6.cylinderCalc(ctx.reply, ctx.args));
reg(['ibancheck'], async (ctx) => toolsCommands6.ibanValidate(ctx.reply, ctx.args));
reg(['macvalidate'], async (ctx) => toolsCommands6.macValidate(ctx.reply, ctx.args));
reg(['ipv4validate'], async (ctx) => toolsCommands6.ipv4Validate(ctx.reply, ctx.args));
reg(['pingenerate'], async (ctx) => toolsCommands6.pinGenerate(ctx.reply, ctx.args));
reg(['couponcode'], async (ctx) => toolsCommands6.couponCode(ctx.reply));
reg(['numbertowords'], async (ctx) => toolsCommands6.numberToWords(ctx.reply, ctx.args));
reg(['fueleff'], async (ctx) => toolsCommands6.fuelEfficiency(ctx.reply, ctx.args));
reg(['cookingconvert'], async (ctx) => toolsCommands6.cookingConvert(ctx.reply, ctx.args));
reg(['textanalysis'], async (ctx) => toolsCommands6.textStats(ctx.reply, ctx.args));

// ── ADMIN GRUP BARU (adminCommands3) ─────────────────────────────────────
reg(['poll', 'buatpoll'], async (ctx) => adminCommands3.createPoll(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['vote'], async (ctx) => adminCommands3.votePoll(ctx.reply, ctx.jid, ctx.sender, ctx.args));
reg(['hasilpoll', 'pollresult'], async (ctx) => adminCommands3.pollResult(ctx.reply, ctx.jid, ctx.args));
reg(['listpoll', 'daftarpoll'], async (ctx) => adminCommands3.listPolls(ctx.reply, ctx.jid));
reg(['addjadwal'], async (ctx) => adminCommands3.addSchedule(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['listjadwal', 'jadwalgrup'], async (ctx) => adminCommands3.listSchedule(ctx.reply, ctx.jid));
reg(['deljadwal'], async (ctx) => adminCommands3.deleteSchedule(ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['lapor'], async (ctx) => adminCommands3.reportToAdmin(ctx.reply, ctx.jid, ctx.sender, ctx.args));
reg(['listlaporan', 'laporanmember'], async (ctx) => adminCommands3.listReports(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['clearlaporan', 'bersihkanlaporan'], async (ctx) => adminCommands3.clearReports(ctx.reply, ctx.jid, ctx.isAdmin));
reg(['aktivitasgrup', 'groupactivity'], async (ctx) => adminCommands3.groupActivity(ctx.reply, ctx.jid));

// ─── SIDER — deteksi & kick member yang gak pernah/jarang chat ───────────
// ".sider" cuma menampilkan daftarnya (read-only). ".kicksider" langsung
// mengeluarkan semua yang terdeteksi — DESTRUKTIF, makanya tetap wajib
// admin (lihat isAdminCheck di dalam masing-masing handler).
// Threshold opsional: ".sider 7d" / ".kicksider 12h" dst (default 3 hari).
reg(['sider', 'cekrider', 'listsider'], async (ctx) =>
    adminCommands3.checkSider(ctx.sock, ctx.reply, ctx.jid, ctx.args, ctx.isAdmin));
reg(['kicksider', 'tendangrider'], async (ctx) =>
    adminCommands3.kickSider(ctx.sock, ctx.reply, ctx.msg, ctx.jid, ctx.args, ctx.isAdmin));

// ── BROADCAST (OWNER ONLY) ───────────────────────────────────────────────
reg(['broadcast', 'bc', 'broadcastgc'], async (ctx) => broadcastCommands.broadcastToGroups(ctx.sock, ctx.reply, ctx.args, ctx.isOwner));
reg(['broadcastuser', 'bcuser', 'broadcastpribadi'], async (ctx) => broadcastCommands.broadcastToUsers(ctx.sock, ctx.reply, ctx.args, ctx.isOwner));
reg(['listgrup', 'jumlahgrup', 'totalgrup'], async (ctx) => broadcastCommands.listGroupsCount(ctx.sock, ctx.reply, ctx.isOwner));

// ── JADIBOT ───────────────────────────────────────────────────────────────
reg(['jadibot', 'selfbot', 'pasangbot'], async (ctx) => jadibotCommands.startJadibot(ctx.reply, ctx.sender, ctx.args));
reg(['stopbot', 'matikanbot', 'berhentibot'], async (ctx) => jadibotCommands.stopJadibot(ctx.reply, ctx.sender, ctx.args, ctx.isOwner));
reg(['listjadibot', 'daftarjadibot'], async (ctx) => jadibotCommands.listJadibot(ctx.reply, ctx.isOwner));

// ─── MUSIK ────────────────────────────────────────────────────────
reg(['play', 'musik', 'music', 'lagu', 'ytmp3'], async (ctx) =>
    musicCommands.play(ctx.reply, ctx.sock, ctx.jid, ctx.msg, ctx.args));

// ─── DOWNLOAD SOSIAL MEDIA ──────────────────────────────────────────
// Sama seperti .play, dipakai bersama lib/ytdlpBinary.js (yt-dlp juga
// support Instagram & TikTok, jadi tidak ada dependency baru). Bisa
// dipakai dengan ".ig <link>" ATAU reply ke pesan yang isinya link.
reg(['ig', 'instagram', 'igdl', 'instagramdl'], async (ctx) =>
    socialDownloadCommands.downloadInstagram(ctx));
reg(['tiktok', 'tt', 'tiktokdl', 'ttdl'], async (ctx) =>
    socialDownloadCommands.downloadTiktok(ctx));
reg(['ytmp4', 'ytvideo', 'youtubemp4', 'ytv', 'ydl'], async (ctx) =>
    socialDownloadCommands.downloadYoutubeVideo(ctx));
reg(['twitter', 'twdl', 'twitterdl', 'xdl', 'xvideo'], async (ctx) =>
    socialDownloadCommands.downloadTwitter(ctx));
reg(['facebook', 'fbdl', 'fb', 'facebookdl', 'fbreels'], async (ctx) =>
    socialDownloadCommands.downloadFacebook(ctx));
reg(['scdl', 'soundcloud', 'soundclouddl'], async (ctx) =>
    socialDownloadCommands.downloadSoundcloud(ctx));
reg(['pin', 'pinterest', 'pindl', 'pinterestdl'], async (ctx) =>
    socialDownloadCommands.downloadPinterest(ctx));
reg(['threads', 'threadsdl'], async (ctx) =>
    socialDownloadCommands.downloadThreads(ctx));
reg(['reddit', 'redditdl'], async (ctx) =>
    socialDownloadCommands.downloadReddit(ctx));
reg(['bilibili', 'bili', 'bilibilidl'], async (ctx) =>
    socialDownloadCommands.downloadBilibili(ctx));
reg(['dailymotion', 'dmdl'], async (ctx) =>
    socialDownloadCommands.downloadDailymotion(ctx));
reg(['vimeo', 'vimeodl'], async (ctx) =>
    socialDownloadCommands.downloadVimeo(ctx));
reg(['snackvideo', 'snack', 'snackdl'], async (ctx) =>
    socialDownloadCommands.downloadSnackvideo(ctx));

// ─── KATEGORISASI OTOMATIS UNTUK .allmenu ──────────────────────────────────
// Daripada menebak kategori dari potongan nama command (rawan salah —
// contoh: kata pendek seperti 's' atau 'add' bisa nyangkut ke command lain
// yang tidak relevan), kita baca langsung source code handler-nya
// (handler.toString()) untuk tahu objek modul apa yang sebenarnya dipanggil
// di dalamnya (rpgCommands, adminCommands, funCommands, dst). Ini akurat
// karena bersumber dari kode aslinya, bukan tebakan kata kunci.
// PENTING: blok kategorisasi ini (termasuk pendaftaran command "allmenu" di
// bawah) HARUS berada SEBELUM baris `const routeMap = new Map(routes)`,
// supaya alias "allmenu" juga ikut masuk ke dalam routeMap. Kalau dipindah
// ke bawah routeMap, command tersebut akan terdaftar di array `routes` tapi
// tidak pernah masuk ke Map yang benar-benar dipakai untuk lookup saat user
// mengetik command — sehingga bot akan diam total tanpa error sama sekali
// (bug ini pernah terjadi pada versi sebelumnya, dan sudah diperbaiki).
const MODULE_TO_CATEGORY = {
    rpgCommands:        '⚔️ RPG',
    adminCommands:      '🛡️ Admin',
    funCommands:        '🎮 Fun',
    gojoCommands:       '🎮 Fun',
    toolsCommands:      '🛠️ Tools',
    textTools:          '🛠️ Tools',
    mathTools:          '🛠️ Tools',
    converterTools:     '🛠️ Tools',
    generatorTools:     '🛠️ Tools',
    infoTools:          '🛠️ Tools',
    validatorTools:     '🛠️ Tools',
    dateTools:          '🛠️ Tools',
    formatTools:        '🛠️ Tools',
    mediaCommands:      '🖼️ Media',
    bratCommands:       '🖼️ Media',
    jadibotCommands:    '🤖 Bot',
    broadcastCommands:  '🤖 Bot',
    sewaCommands:       '🤖 Bot',
    musicCommands:           '🎵 Musik & Download',
    socialDownloadCommands:  '🎵 Musik & Download',
};
const CATEGORY_ORDER = ['⚔️ RPG', '🛡️ Admin', '🎮 Fun', '🛠️ Tools', '🖼️ Media', '🎵 Musik & Download', '👑 Jabatan', '🖥️ Panel', '🤖 Bot', '📦 Lainnya'];

// Command inline (arrow function langsung, bukan memanggil objek modul
// seperti rpgCommands.xxx()) tidak bisa dideteksi modulnya lewat
// categorizeByHandlerSource, sehingga sebelumnya semua jatuh ke "📦 Lainnya"
// — membuat kategori itu jadi tempat sampah campuran info bot, ping, dan
// command jabatan. Daftar berikut memetakan alias-alias spesifik tersebut
// ke kategori yang sebenarnya lebih tepat, dicek SEBELUM fallback umum.
const ALIAS_OVERRIDE_CATEGORY = {
    // Info umum bot → masuk kategori Bot
    ping: '🤖 Bot', cekping: '🤖 Bot', pingbot: '🤖 Bot',
    runtime: '🤖 Bot', uptime: '🤖 Bot', lamabotaktif: '🤖 Bot', botuptime: '🤖 Bot',
    whoami: '🤖 Bot', siapakahaku: '🤖 Bot', mynumber: '🤖 Bot', nomorku: '🤖 Bot',
    jam: '🤖 Bot', waktusekarang: '🤖 Bot', currenttime: '🤖 Bot', waktuserver: '🤖 Bot', servertime: '🤖 Bot',
    allmenu: '🤖 Bot', menu: '🤖 Bot', help: '🤖 Bot', start: '🤖 Bot',
    daftar: '🤖 Bot', register: '🤖 Bot',
    totalfitur: '🤖 Bot', totalfeature: '🤖 Bot', jumlahfitur: '🤖 Bot',
    pembayaran: '🤖 Bot', payment: '🤖 Bot', bayar: '🤖 Bot',
    sosmedowner: '🤖 Bot', sosmed: '🤖 Bot', socialmedia: '🤖 Bot',
    gojoai: '🤖 Bot',
    sider: '🛡️ Admin', cekrider: '🛡️ Admin', listsider: '🛡️ Admin',
    kicksider: '🛡️ Admin', tendangrider: '🛡️ Admin',
    // Jabatan Creator/Owner/Premium → kategori sendiri
    owner: '👑 Jabatan', creator: '👑 Jabatan', dev: '👑 Jabatan', developer: '👑 Jabatan',
    listowner: '👑 Jabatan', daftarowner: '👑 Jabatan', cekowner: '👑 Jabatan',
    addowner: '👑 Jabatan', delowner: '👑 Jabatan', removeowner: '👑 Jabatan',
    listprem: '👑 Jabatan', listpremium: '👑 Jabatan', daftarpremium: '👑 Jabatan',
    addprem: '👑 Jabatan', addpremium: '👑 Jabatan',
    delprem: '👑 Jabatan', delpremium: '👑 Jabatan', removepremium: '👑 Jabatan',
    cekjabatan: '👑 Jabatan', myrole: '👑 Jabatan', rolesaya: '👑 Jabatan', cekrole: '👑 Jabatan',
};

// FIX: command .cpanel (create/list/del server, role owner/ceo/reseller,
// gcseller, cadmin — lihat commands/panelCommands.js) jumlahnya banyak
// (131 command: 11 tier RAM × 5 server, dst) — didaftarkan lewat loop di
// atas, jadi kategorinya juga di-generate lewat loop di sini, bukan
// ditulis manual satu-satu. Semua masuk kategori '🖥️ Panel' di .allmenu.
ALIAS_OVERRIDE_CATEGORY.cpanel = '🖥️ Panel';

// Guild system → kategori RPG
for (const n of ['guildcreate','guildjoin','guildleave','guildkick','guildpromote','guilddemote','guilddonate','guildupgrade','guilddisband','guildinfo','guildmembers','guildlist']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '⚔️ RPG';
}
for (const n of ['plant','tanam','water','siram','harvest','panen','farmstatus','statuslahan','titles','daftartitle','equiptitle','pakaititle','cook','masak','recipes','daftarresep','bounty','claimbounty','klaimbounty']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '⚔️ RPG';
}
// Admin subsistem baru → kategori Admin
for (const n of ['setpengumuman','pengumumanpasang','hapuspengumuman','pengumumanhapus','pengumuman','cekpengumuman','addmembernote','tambahcatatan','listmembernote','delmembernote','hapuscatatan','savetemplate','loadtemplate','listtemplate','deltemplate','addannouncement','tambahjadwalteks','listannouncement','jadwaltekslist','delannouncement','hapusjadwalteks','setbirthday','settanggallahir','listbirthday','daftarultah','delbirthday','hapustanggallahir']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🛡️ Admin';
}
for (const n of ['bulkpromote','bulkdemote','bulkkick','listinactive','membertidakaktif','topactive','memberaktif','assigntask','kasihtugas','mytasks','tugasku','listtasks','semuatugas','donetask','tugasselesai','maintenancemode']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🛡️ Admin';
}
for (const n of ['grayscale','hitamputih','mirror','cerminkan','blur','rotate90','rotate180','speedup','slowmo','mutevideo','extractaudio','volumeup','hd','hdphoto','upscale']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🖼️ Media';
}
for (const n of ['botstats','statistikbot','changelog','riwayatupdate','suggest','saran','listsuggestions','listsaran','clearsuggestions','hapussaran']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🤖 Bot';
}
for (const n of ['credits','support','bantuan','backupnow','backupsekarang']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🤖 Bot';
}
for (const n of ['sepia','invert','pixelate','brighten','terangkan','darken','gelapkan','reversevideo','balikvideo']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🖼️ Media';
}
for (const n of ['flipvertical','flipvertikal','square','cropsquare']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🖼️ Media';
}
for (const n of ['watermark']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🖼️ Media';
}
for (const n of ['tobotak','tochibi','tofigura','toghibli','tohijab','tolego','tohitam','to3d','toroblox','tooilpainting']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🖼️ Media';
}
// FIX: brat/bratgreen/bratwhite/iqc & alias-nya manggil fungsi bare
// (bratGenerate(ctx, variant) / iqc(ctx) dari commands/bratCommands.js),
// BUKAN lewat objek "bratCommands.method()" — jadi tidak kena regex
// deteksi modul otomatis di categorizeByHandlerSource, dan sebelumnya
// nyasar ke "📦 Lainnya" padahal ini fitur Media (generate gambar teks).
for (const n of ['brat','bratgreen','bratwhite','iqc','iphonequote','iphoneqc','imessagequote']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🖼️ Media';
}
for (const n of ['grouplinkqr']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🛡️ Admin';
}
for (const n of ['previewwelcome']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🛡️ Admin';
}
for (const n of ['version','versibot']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🤖 Bot';
}
for (const n of ['delay']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🤖 Bot';
}
for (const n of ['createevent','buatevent','rsvp','listevents','daftarevent','eventattendees','pesertaevent','quicklock','quickunlock']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🛡️ Admin';
}
// v3.2.0: Anti-NSFW (lihat features/antiNsfw.js) — handler inline (ctx) =>
// fn(ctx), tidak lewat objek modul seperti adminCommands.xxx, jadi perlu
// override manual di sini juga supaya tidak jatuh ke "📦 Lainnya".
for (const n of ['hapusnsfw','delnsfw','deletensfw','cekstrikensfw','nsfwstrikes','strikensfw','resetnsfwstrike','resetstrikensfw','setnsfwlimit','nsfwlimit']) {
    ALIAS_OVERRIDE_CATEGORY[n] = '🛡️ Admin';
}
for (const ram of RAM_TIERS) {
    for (const ver of VALID_SERVERS) {
        ALIAS_OVERRIDE_CATEGORY[ram === 'unli' ? `uni${ver}` : `${ram}${ver}`] = '🖥️ Panel';
    }
}
for (const ver of VALID_SERVERS) {
    ALIAS_OVERRIDE_CATEGORY[`listserver${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`servers${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`delserver${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`hapusserver${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`serverinfo${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`sinfo${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`addgcseller${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`resetgcseller${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`cadmin${ver}`] = '🖥️ Panel';
    ALIAS_OVERRIDE_CATEGORY[`createadmin${ver}`] = '🖥️ Panel';
    for (const role of VALID_ROLES) {
        ALIAS_OVERRIDE_CATEGORY[`add${role}${ver}`] = '🖥️ Panel';
        ALIAS_OVERRIDE_CATEGORY[`del${role}${ver}`] = '🖥️ Panel';
        ALIAS_OVERRIDE_CATEGORY[`list${role}${ver}`] = '🖥️ Panel';
    }
}

function categorizeByHandlerSource(handler) {
    const src = handler.toString();
    // Cari pola "namaModul.method(" atau "namaModulN.method(" di source handler
    const match = src.match(/\b([a-zA-Z]+(?:Commands|Tools))\d*\./);
    if (match && MODULE_TO_CATEGORY[match[1]]) return MODULE_TO_CATEGORY[match[1]];
    // Fallback: handler yang memanggil fungsi sendXxxMenu (bukan modul objek)
    if (/sendRpgMenu/.test(src)) return '⚔️ RPG';
    if (/sendAdminMenu/.test(src)) return '🛡️ Admin';
    if (/sendFunMenu/.test(src)) return '🎮 Fun';
    if (/sendToolsMenu/.test(src)) return '🛠️ Tools';
    if (/sendMediaMenu/.test(src)) return '🖼️ Media';
    if (/sendBotMenu|sendMainMenu/.test(src)) return '🤖 Bot';
    return '📦 Lainnya';
}

// (ALIAS_TO_CATEGORY dibangun di bawah, SETELAH semua reg() — termasuk
// reg(['allmenu']) di bawah ini — selesai dipanggil. Lihat penjelasan
// lengkap di dekat definisi routeMap.)

// ─── SUB-KATEGORI KHUSUS UNTUK "🛡️ Admin" DI .allmenu ──────────────────────
// FIX: sebelumnya kategori Admin (200+ command) di .allmenu cuma dipecah
// per HURUF AWAL (—A—, —B—, dst) kalau jumlahnya lewat SPLIT_THRESHOLD —
// jadi command yang SEBENARNYA berhubungan (misalnya semua command
// "anti-X" buat proteksi, atau semua yang terkait "kick") malah kepencar
// ke huruf berbeda-beda, susah dicari. Mapping ini mengelompokkan command
// Admin per FUNGSI — sama seperti pengelompokan yang sudah ada di
// sendAdminMenu (.menuadmin) — dipakai KHUSUS saat render kategori Admin
// di .allmenu (kategori lain tetap pakai alphabet-split seperti biasa).
//
// PENTING soal kelengkapan: mapping ini ditulis manual dari daftar command
// yang terlihat di sendAdminMenu + alias override di atas — TIDAK di-scan
// otomatis dari seluruh adminCommands*.js, jadi ada kemungkinan ada alias
// admin lain yang belum masuk sini. Supaya TIDAK ADA command yang hilang
// dari tampilan (mengulang masalah "menghilang" yang sudah pernah terjadi
// di .menu), command Admin yang tidak ketemu di mapping ini TETAP muncul —
// otomatis jatuh ke bucket "📦 Lainnya" di urutan paling akhir, bukan
// didiamkan/dibuang begitu saja.
const ADMIN_SUBCATEGORY_GROUPS = {
    '👥 Member & Kick':          ['kick', 'promote', 'demote', 'add', 'listadmin', 'membercount',
                                   'kickall', 'bulkpromote', 'bulkdemote', 'bulkkick'],
    '⚠️ Warn':                   ['warn', 'unwarn', 'checkwarn', 'warnlimit',
                                   'warnall', 'cekwarnall', 'topwarn', 'resetwarnall'],
    '🔇 Mute & Kunci Grup':      ['mute', 'unmute', 'mutestatus', 'lockgroup', 'unlockgroup',
                                   'slowmode', 'lockmedia', 'lockstiker',
                                   'mutemember', 'unmutemember', 'listmutedmember'],
    '🛡️ Anti-Spam & Proteksi':  ['antigb', 'antilink', 'antishortlink', 'antilinkphising',
                                   'antispam', 'antitoxic', 'antijudol', 'antipinjol', 'anticaps',
                                   'antivirtex', 'antitag', 'resetprotection', 'antilinkall',
                                   'grouplockstatus', 'helpproteksi'],
    '🔞 Anti-NSFW & Strike':     ['hapusnsfw', 'delnsfw', 'deletensfw', 'cekstrikensfw', 'nsfwstrikes',
                                   'strikensfw', 'resetnsfwstrike', 'resetstrikensfw',
                                   'setnsfwlimit', 'nsfwlimit'],
    '🔒 Lock Konten':            ['lockimage', 'lockvideo', 'lockdocument', 'lockcontact',
                                   'locklocation', 'lockvn', 'lockaudio', 'lockgif', 'lockpoll'],
    '📝 Kata Terlarang & Whitelist': ['addbadword', 'delbadword', 'listbadword',
                                   'allowlinkadd', 'allowlinkdel', 'allowlinklist',
                                   'whitelistadd', 'whitelistdel', 'whitelist'],
    '⚙️ Pengaturan Grup':        ['groupinfo', 'setname', 'setdesc', 'link', 'revoke', 'leave',
                                   'hidetag', 'tagall', 'seticon', 'hapusicon',
                                   'lockinfo', 'unlockinfo', 'ephemeral',
                                   'backupsetting', 'restoresetting'],
    '👋 Welcome & Farewell':     ['welcome', 'setwelcome', 'farewell', 'setfarewell'],
    '👀 Sider':                  ['sider', 'cekrider', 'listsider', 'kicksider', 'tendangrider'],
    '📋 Ban & Auto-Reply':       ['ban', 'unban', 'banlist', 'unbanall', 'autoreply', 'notes'],
    '📊 Poll, Jadwal & Laporan': ['poll', 'vote', 'hasilpoll', 'listpoll',
                                   'addjadwal', 'listjadwal', 'deljadwal',
                                   'lapor', 'listlaporan', 'clearlaporan', 'aktivitasgrup',
                                   'jadwalbuka', 'jadwaltutup', 'cekjadwalgrup', 'canceljadwalgrup'],
    '📥 Approval Join Request':  ['listrequest', 'approverequest', 'rejectrequest',
                                   'approveall', 'rejectall'],
    '📊 Dashboard & Info Grup':  ['groupsummary', 'groupage', 'admincount',
                                   'groupcreator', 'exportmember', 'cekbot'],
    '📢 Pengumuman & Catatan':   ['setpengumuman', 'pengumumanpasang', 'pengumuman', 'cekpengumuman',
                                   'hapuspengumuman', 'pengumumanhapus',
                                   'addmembernote', 'tambahcatatan', 'listmembernote',
                                   'delmembernote', 'hapuscatatan',
                                   'addannouncement', 'tambahjadwalteks', 'listannouncement',
                                   'jadwaltekslist', 'delannouncement', 'hapusjadwalteks',
                                   'setbirthday', 'settanggallahir', 'listbirthday', 'daftarultah',
                                   'delbirthday', 'hapustanggallahir'],
    '🗂️ Template Grup':          ['savetemplate', 'loadtemplate', 'listtemplate', 'deltemplate'],
    '⚡ Bulk, Aktivitas & Tugas':['topactive', 'memberaktif', 'listinactive', 'membertidakaktif',
                                   'assigntask', 'kasihtugas', 'mytasks', 'tugasku',
                                   'listtasks', 'semuatugas', 'donetask', 'tugasselesai',
                                   'maintenancemode'],
    '🎉 Event & Quick Lock':     ['createevent', 'buatevent', 'rsvp', 'listevents', 'daftarevent',
                                   'eventattendees', 'pesertaevent', 'quicklock', 'quickunlock',
                                   'grouplinkqr', 'previewwelcome'],
};
const ADMIN_SUBCATEGORY_ORDER = [...Object.keys(ADMIN_SUBCATEGORY_GROUPS), '📦 Lainnya'];
const ADMIN_SUBCATEGORY = {};
for (const [label, names] of Object.entries(ADMIN_SUBCATEGORY_GROUPS)) {
    for (const n of names) ADMIN_SUBCATEGORY[n] = label;
}

// ─── "BACA" MENU PER-KATEGORI UNTUK .allmenu (FIX 2026-07-24) ──────────────
// Permintaan: .allmenu harus dikategorikan + dikasih penjelasan fitur di
// SETIAP kategori, persis seperti gaya sendAdminMenu (│ .kick @tag — Keluarkan
// member), bukan cuma sendAdminMenu saja.
//
// Daripada nulis ulang manual deskripsi utuk 900+ command (rawan typo &
// bakal nyimpang dari sendRpgMenu/sendFunMenu/dst begitu salah satu diedit
// di masa depan), fungsi ini "membaca" teks yang SUDAH ditulis manusia di
// sendRpgMenu/sendFunMenu/sendToolsMenu/sendMediaMenu/sendBotMenu/
// sendAdminMenu (commands/menu.js) — satu sumber tunggal dipakai bareng
// oleh .menurpg dst DAN .allmenu, jadi otomatis selalu sinkron.
//
// PENTING soal keamanan parsing: dari SEMUA nama command per baris (mis.
// ".guildpromote/demote @user"), yang diambil CUMA SATU — nama yang eksplisit
// ditandai prefix di awal baris (".guildpromote"). Sengaja TIDAK menebak
// perluasan alias setelah "/" atau ",": sudah dicoba & ketemu kasus nyata
// "guildpromote/demote" (RPG, maksudnya guildpromote/guilddemote) yang kalau
// di-expand naif akan salah nabrak command ".demote" milik Admin (beda fitur
// total). Command yang alias keduanya tidak ketemu di sini tetap AMAN tampil
// via fallback gaya lama (nama polos, lihat renderFallback() di bawah) —
// tidak pernah hilang, cuma tidak dapat sub-grup/deskripsi.
let _menuKB = null;
async function getMenuKnowledgeBase() {
    if (_menuKB) return _menuKB;
    const prefix = settings.prefix || '.';
    const descMap = new Map();   // nama command -> deskripsi singkat
    const subcatMap = new Map(); // nama command -> label sub-kategori (sudah diformat bold+smallcaps)

    for (const sendFn of [sendRpgMenu, sendAdminMenu, sendFunMenu, sendToolsMenu, sendMediaMenu, sendBotMenu]) {
        let raw = '';
        await sendFn(async (text) => { raw = text; }); // "reply" palsu — cuma nangkep teksnya, TIDAK kirim apapun
        let section = null;
        for (const rawLine of raw.split('\n')) {
            const line = rawLine.trim();
            const header = line.match(/^╭─「\s*(.+?)\s*」/);
            if (header) { section = header[1]; continue; }
            if (!line.startsWith('│')) continue;
            const body = line.replace(/^│\s*/, '').trim();
            if (!body.startsWith(prefix)) continue; // baris catatan/italic, bukan command
            const m = body.slice(prefix.length).match(/^[a-zA-Z][a-zA-Z0-9]*/);
            if (!m) continue;
            const name = m[0].toLowerCase();
            const dashIdx = body.indexOf('—');
            const desc = dashIdx === -1 ? null : (body.slice(dashIdx + 1).trim() || null);
            if (desc && !descMap.has(name)) descMap.set(name, desc);
            if (section && !subcatMap.has(name)) subcatMap.set(name, section);
        }
    }
    _menuKB = { descMap, subcatMap };
    return _menuKB;
}

// FIX v3: .allmenu sekarang dikirim sebagai SATU pesan tunggal (bukan 9
// pesan terpisah seperti versi sebelumnya). Alasan: di lapangan ditemukan
// bahwa mengirim banyak pesan berurutan dalam waktu singkat ke koneksi
// WhatsApp yang sedang kurang stabil bisa menyebabkan kegagalan total tanpa
// error yang tertangkap sama sekali (tidak seperti .menu/.ping yang hanya
// kirim 1 pesan dan selalu berhasil). Pesan gabungan ini tetap di bawah
// limit aman (~11.000 karakter, jauh di bawah batas 60.000 karakter
// safeReplyText), dikelompokkan rapi per kategori dalam satu balasan.
reg(['allmenu'], async (ctx) => {
    const names = getAllCommandNames();
    const prefix = settings.prefix || '.';
    const creator = getCreatorInfo();
    const now = Date.now();

    const grouped = {};
    for (const name of names) {
        const cat = ALIAS_TO_CATEGORY.get(name) || '📦 Lainnya';
        (grouped[cat] ??= []).push(name);
    }

    // ── Header: info lengkap bertema Gojo, gaya bercabang (┌│└) ──────────
    const header =
`🥶 *${settings.botName}* ❄️ — Domain Penuh
_"Ini bukan cuma menu. Ini Unlimited Void — semua jurus, terlihat jelas."_

┌ 🕐 ${sc('Waktu')}    : ${fmtTime(now)} WIB
│ 📅 ${sc('Tanggal')}  : ${fmtDate(now)}
└ ⚡ ${sc('Prefix')}   : \`${prefix}\`

┌ 👑 ${sc('Creator')}  : ${creator.name}
│ 🌀 ${sc('Status')}   : 🟢 Online & Siap Tarung
└ 📊 ${sc('Total')}    : *${names.length}* command terdaftar

┌── 🛡️ *PROTEKSI & FITUR*
│ ✅ Anti-GB
│ ✅ Anti-Link
│ ✅ Anti-Shortlink
│ ✅ Anti-Spam
│ ✅ Anti-Toxic
│ ✅ Anti-Flood
│ ✅ Auto-Read
└ ⏳ Cooldown Active

『 領域展開 — Semua Jurus Terungkap 』`;

    const sections = [header];

    // Setiap kategori ditampilkan dalam kotak bergaya: ╭─〔 emoji NAMA 〕─╮
    // diikuti ┣➤ command, ditutup ┗━━━. Untuk kategori yang isinya BANYAK
    // (RPG, Tools, dst — bisa 200+ command), list dipecah lagi per HURUF
    // AWAL (— A —, — B —, dst, seperti daftar kontak HP) supaya tidak jadi
    // satu tembok teks panjang yang malesin dibaca — orang bisa langsung
    // loncat ke huruf yang dia cari.
    const SPLIT_THRESHOLD = 20; // di atas ini, baru dipecah per huruf
    // FIX 2026-07-24: dulu cuma kategori Admin yang dikelompokkan per fungsi
    // + dikasih deskripsi; kategori lain cuma nama polos + split alfabet.
    // menuKB "membaca" sendRpgMenu/sendAdminMenu/sendFunMenu/sendToolsMenu/
    // sendMediaMenu/sendBotMenu (lihat getMenuKnowledgeBase() di atas) supaya
    // gaya yang sama (kelompok per fungsi + deskripsi singkat) sekarang
    // dipakai di SEMUA kategori, bukan cuma Admin.
    const menuKB = await getMenuKnowledgeBase();

    // Format satu baris command: .nama [tag] — deskripsi (kalau kepetik)
    const fmt = n => {
        const tag = roleTag(n);
        const desc = menuKB.descMap.get(n);
        return `┣➤ ${prefix}${n}${tag ? ' ' + tag : ''}${desc ? ` — ${desc}` : ''}`;
    };
    // Gaya LAMA (alfabet kalau banyak, plain list kalau sedikit) — dipakai
    // sebagai fallback tiap kali sebuah command TIDAK ketemu di menuKB (belum
    // sempat ditulis di menu.js), supaya command itu tetap AMAN muncul,
    // cuma tanpa sub-grup/deskripsi. Command tidak pernah hilang dari daftar.
    const renderFallback = fallbackList => {
        if (fallbackList.length > SPLIT_THRESHOLD) {
            const sorted = [...fallbackList].sort();
            const byLetter = {};
            for (const name of sorted) {
                const letter = name[0].toUpperCase();
                (byLetter[letter] ??= []).push(name);
            }
            return Object.keys(byLetter).sort().map(letter => {
                const lines = byLetter[letter].map(fmt);
                return `┃ ▸ *— ${sc(letter)} —*\n${lines.join('\n')}`;
            }).join('\n┃\n');
        }
        return fallbackList.map(fmt).join('\n');
    };

    for (const cat of CATEGORY_ORDER) {
        const list = grouped[cat];
        if (!list || list.length === 0) continue;

        // FIX: kategori Panel (.cpanel) SENGAJA tidak di-list satu-satu
        // di sini — 151 command (create server × 11 tier RAM × 5 versi,
        // role × 3 aksi × 5 versi, dst) bikin .allmenu jadi kepanjangan
        // buat dibaca. Kategori ini sudah punya menu detail sendiri
        // (.cpanel), jadi cukup ringkasan + pointer ke situ.
        if (cat === '🖥️ Panel') {
            sections.push(
`╭─〔 *${sc(cat)}* 〕─╮ _(${list.length})_\n┣➤ ${prefix}cpanel — buka menu lengkap (create/kelola server, role, dst)\n┗━━━━━━━━━━━━━━━━⊱`
            );
            continue;
        }

        let body;
        if (cat === '🛡️ Admin') {
            // Admin sudah punya pengelompokan manual per fungsi (lihat
            // ADMIN_SUBCATEGORY_GROUPS) — dipertahankan apa adanya karena
            // sudah lebih lengkap dari hasil "baca otomatis" (mencakup
            // command yang belum sempat ditulis di sendAdminMenu, mis.
            // sub-sistem Anti-NSFW). Yang baru: tiap baris SEKARANG ikut
            // dikasih deskripsi juga (dari menuKB, hasil baca sendAdminMenu).
            const bySubcat = {};
            for (const name of list) {
                const sub = ADMIN_SUBCATEGORY[name] || '📦 Lainnya';
                (bySubcat[sub] ??= []).push(name);
            }
            body = ADMIN_SUBCATEGORY_ORDER
                .filter(sub => bySubcat[sub]?.length)
                .map(sub => {
                    const lines = bySubcat[sub].sort().map(fmt);
                    return `┃ ▸ *${sc(sub)}*\n${lines.join('\n')}`;
                })
                .join('\n┃\n');
        } else {
            // Kategori LAIN (RPG, Fun, Tools, Media, Musik & Download, Bot,
            // dst) — dikelompokkan per fungsi pakai menuKB.subcatMap, dengan
            // urutan sub-kategori mengikuti urutan kemunculan aslinya di
            // menu.js. Command yang tidak ketemu di menuKB dikumpulkan &
            // dirender lewat renderFallback() (gaya lama), bukan dibuang.
            const bySubcat = {};
            const subcatOrder = [];
            const unclassified = [];
            for (const name of list) {
                const sub = menuKB.subcatMap.get(name);
                if (!sub) { unclassified.push(name); continue; }
                if (!bySubcat[sub]) { bySubcat[sub] = []; subcatOrder.push(sub); }
                bySubcat[sub].push(name);
            }
            if (subcatOrder.length === 0) {
                // Tidak ada satupun command di kategori ini yang berhasil
                // dipetakan (mis. kategori tanpa menu detail sendiri) —
                // pakai gaya lama seutuhnya, sama seperti sebelum FIX ini.
                body = renderFallback(list);
            } else {
                const subSections = subcatOrder.map(sub => {
                    const lines = bySubcat[sub].sort().map(fmt);
                    return `┃ ▸ ${sub}\n${lines.join('\n')}`;
                });
                if (unclassified.length) {
                    subSections.push(`┃ ▸ *${sc('Lainnya')}*\n${renderFallback(unclassified)}`);
                }
                body = subSections.join('\n┃\n');
            }
        }

        sections.push(
`╭─〔 *${sc(cat)}* 〕─╮ _(${list.length})_\n${body}\n┗━━━━━━━━━━━━━━━━⊱`
        );
    }

    sections.push(`\n— ✦☆✦ — *${sc('KETERANGAN')}*\n🌟 = CREATOR  |  Ⓞ = OWNER  |  Ⓐ = ADMIN  |  Ⓟ = PREMIUM\n_Tanpa simbol = bisa dipakai semua user (free)_\n\n💡 Ketik *${prefix}menu* untuk tampilan ringkas.\n「 _Infinity has no limit — and neither does this list._ 」`);

    const text = sections.join('\n\n');
    // FIX: pakai replyWithImage() yang sudah ada (didefinisikan di atas,
    // dipakai juga oleh .menu) — kirim dengan thumbnail Gojo Satoru & fallback
    // otomatis ke teks biasa kalau gagal, SEKALIGUS sudah bungkus safeReplyText()
    // (sebelumnya caption di sini dikirim TANPA itu — celah kecil yang baru
    // kelihatan penting sekarang karena pesannya jadi lebih panjang gara-gara
    // tambahan deskripsi per command).
    await replyWithImage(ctx.sock, ctx.jid, ctx.msg, settings.thumbnailUrl, text);
});

const routeMap = new Map(routes);

// ─── ROLE TAG MAP ─────────────────────────────────────────────────────────
// Pemetaan alias command → tag jabatan yang diperlukan.
// 🌟 = Creator only  |  Ⓞ = Owner  |  Ⓐ = Admin grup  |  Ⓟ = Premium
// Tidak ada tag = Free (semua user bisa pakai)
const ROLE_TAG = {
    // Creator only
    addcreator: '🌟', removecreator: '🌟', delcreator: '🌟',

    // Owner / Creator
    addowner: 'Ⓞ', delowner: 'Ⓞ', removeowner: 'Ⓞ',
    addprem: 'Ⓞ', addpremium: 'Ⓞ', delprem: 'Ⓞ', delpremium: 'Ⓞ', removepremium: 'Ⓞ',
    broadcast: 'Ⓞ', broadcastgc: 'Ⓞ', bc: 'Ⓞ',
    broadcastuser: 'Ⓞ', bcuser: 'Ⓞ', broadcastpribadi: 'Ⓞ',
    listgrup: 'Ⓞ', jumlahgrup: 'Ⓞ', totalgrup: 'Ⓞ',
    listjadibot: 'Ⓞ', daftarjadibot: 'Ⓞ',
    addgold: 'Ⓞ', tambahgold: 'Ⓞ', givegold: 'Ⓞ',
    addlimit: 'Ⓞ', tambablimit: 'Ⓞ',

    // Admin grup
    kick: 'Ⓐ', keluarkan: 'Ⓐ', tendang: 'Ⓐ',
    ryoiken: 'Ⓐ', ryoikitenkai: 'Ⓐ', domainexpansion: 'Ⓐ', tenkai: 'Ⓐ',
    promote: 'Ⓐ', jadikanadmin: 'Ⓐ', naikkan: 'Ⓐ',
    demote: 'Ⓐ', turunkan: 'Ⓐ', copotadmin: 'Ⓐ',
    add: 'Ⓐ', tambahmember: 'Ⓐ', invite: 'Ⓐ',
    warn: 'Ⓐ', peringatan: 'Ⓐ', beriwarn: 'Ⓐ',
    unwarn: 'Ⓐ', hapuswarn: 'Ⓐ',
    warnlimit: 'Ⓐ', limitwarn: 'Ⓐ', setwarnlimit: 'Ⓐ',
    mute: 'Ⓐ', bisukan: 'Ⓐ',
    unmute: 'Ⓐ', bukabisu: 'Ⓐ',
    lockgroup: 'Ⓐ', kuncigrup: 'Ⓐ', closegroup: 'Ⓐ',
    unlockgroup: 'Ⓐ', bukagrup: 'Ⓐ', opengroup: 'Ⓐ',
    setname: 'Ⓐ', gantinamagrup: 'Ⓐ', namagrup: 'Ⓐ',
    setdesc: 'Ⓐ', gantidesk: 'Ⓐ', deskripsigrup: 'Ⓐ',
    link: 'Ⓐ', linkgrup: 'Ⓐ', invitelink: 'Ⓐ', getlink: 'Ⓐ',
    revoke: 'Ⓐ', resetlink: 'Ⓐ', revokelink: 'Ⓐ',
    leave: 'Ⓐ', keluargrup: 'Ⓐ', botkeluar: 'Ⓐ',
    hidetag: 'Ⓐ', htag: 'Ⓐ', tagsemua: 'Ⓐ',
    tagall: 'Ⓐ', mentionall: 'Ⓐ', tagsemuamember: 'Ⓐ',
    antilink: 'Ⓐ', antispam: 'Ⓐ', antiflood: 'Ⓐ',
    antitoxic: 'Ⓐ', antibot: 'Ⓐ', antisara: 'Ⓐ', antigb: 'Ⓐ',
    antinsfw: 'Ⓐ', antiporn: 'Ⓐ', antiporno: 'Ⓐ',
    hapusnsfw: 'Ⓐ', delnsfw: 'Ⓐ', deletensfw: 'Ⓐ',
    resetnsfwstrike: 'Ⓐ', resetstrikensfw: 'Ⓐ',
    setnsfwlimit: 'Ⓐ', nsfwlimit: 'Ⓐ',
    setwelcome: 'Ⓐ', setfarewell: 'Ⓐ', slowmode: 'Ⓐ',
    locklink: 'Ⓐ', locksticker: 'Ⓐ', lockvideo: 'Ⓐ', lockgambar: 'Ⓐ',
    poll: 'Ⓐ', buatpoll: 'Ⓐ',
    addjadwal: 'Ⓐ', deljadwal: 'Ⓐ',
    listlaporan: 'Ⓐ', laporanmember: 'Ⓐ',
    clearlaporan: 'Ⓐ', bersihkanlaporan: 'Ⓐ',
    sider: 'Ⓐ', cekrider: 'Ⓐ', listsider: 'Ⓐ',
    kicksider: 'Ⓐ', tendangrider: 'Ⓐ',
};

function roleTag(alias) {
    return ROLE_TAG[alias] || '';
}

// Bangun mapping alias -> kategori SETELAH semua reg() (termasuk
// reg(['allmenu'])) selesai dipanggil — supaya allmenu sendiri juga
// terklasifikasi dengan benar, bukan jatuh ke fallback "📦 Lainnya".
// (Sebelumnya ini dibangun SEBELUM reg(['allmenu']) dipanggil, sehingga
// alias "allmenu" belum ada di array `routes` saat iterasi ini berjalan
// — bug yang sama persis pernah terjadi pada routeMap itu sendiri.)
const ALIAS_TO_CATEGORY = new Map();
for (const [alias, handler] of routes) {
    if (!ALIAS_TO_CATEGORY.has(alias)) {
        const cat = ALIAS_OVERRIDE_CATEGORY[alias] || categorizeByHandlerSource(handler);
        ALIAS_TO_CATEGORY.set(alias, cat);
    }
}

// FIX: .allmenu (dan sekarang .totalfitur juga) menghitung/menampilkan
// fitur UNIK — command dengan beberapa alias (misal owner/creator/dev/
// developer) dihitung SEKALI, bukan sekali per nama panggilan. Awalnya
// .totalfitur sengaja dipisah untuk mempertahankan angka branding
// "1200+ Fitur" yang menghitung semua alias satu-satu — tapi itu bikin
// angkanya kelihatan dobel/mengada-ada begitu dibandingkan sama .allmenu
// (yang sudah unik). Sekarang disatukan: keduanya pakai angka fitur
// unik yang sebenarnya. Kalau kamu update angka "1200+ Fitur" di
// package.json/README nanti, sesuaikan ke angka unik ini juga.
function getUniqueCommandNames() {
    const seenHandlers = new Set();
    const primaryNames = [];
    for (const [name, handler] of routeMap.entries()) {
        if (HIDDEN_COMMANDS.has(name)) continue;
        if (seenHandlers.has(handler)) continue;
        seenHandlers.add(handler);
        primaryNames.push(name);
    }
    return primaryNames;
}

export function getRegisteredCommandCount() {
    return getUniqueCommandNames().length;
}

export function getAllCommandNames() {
    return getUniqueCommandNames().sort();
}

// FIX BUG: dipakai messagePipeline.js SEBELUM kirim reaksi ⏳ — supaya
// command yang tidak terdaftar (typo, dsb) tidak dikasih reaksi ⏳ yang
// akan nyangkut selamanya (karena handleCommand() return lebih awal kalau
// !handler, SEBELUM sempat sampai ke bagian yang kirim reaksi ✅/❌).
export function commandExists(name) {
    return routeMap.has(name);
}

// ── Reaksi emoji sebagai indikator status command ───────────────────────
// ⏳ = sedang diproses, ✅ = berhasil, ❌ = gagal/error. Reaksi dikirim ke
// pesan ASLI dari user (msg.key), jadi kelihatan langsung di pesan yang
// dia ketik sendiri — tidak perlu baca teks balasan bot buat tahu status.
// Dibungkus try/catch supaya reaksi yang gagal terkirim (jaringan lagi
// bermasalah, dsb) tidak ikut menggagalkan command itu sendiri.
async function reactTo(sock, jid, msgKey, emoji) {
    try { await sock.sendMessage(jid, { react: { text: emoji, key: msgKey } }); } catch {}
}

export async function handleCommand(sock, msg, jid, sender, command, args, isGroup, body, precomputedIsAdmin) {
    let isAdmin = false;
    if (typeof precomputedIsAdmin === 'boolean') {
        isAdmin = precomputedIsAdmin;
    } else if (isGroup) {
        try {
            // FIX: dibungkus withTimeout — lihat penjelasan lengkap di
            // messagePipeline.js mengenai risiko groupMetadata() hang tanpa
            // batas waktu pada koneksi yang sedang rate-limited.
            const metadata = await withTimeout(sock.groupMetadata(jid), 15_000, 'groupMetadata(handleCommand)');
            // FIX @lid: p.id di groupMetadata bisa @lid sementara sender @s.whatsapp.net
            const participant = metadata.participants.find(p => {
                if (p.id === sender) return true;
                if (p.id.includes('@lid')) { const r = recallRealJid(p.id); if (r && r === sender) return true; }
                if (sender.includes('@lid')) { const r = recallRealJid(sender); if (r && r === p.id) return true; }
                return false;
            });
            isAdmin = participant?.admin === 'admin' || participant?.admin === 'superadmin';
        } catch {
            isAdmin = false;
        }
    }

    // Hirarki jabatan: Creator > Owner > Premium > User biasa.
    // isOwner tetap dipertahankan sebagai nama field di ctx (kompatibel
    // dengan command lama yang sudah memakai ctx.isOwner), tapi sekarang
    // sumber kebenarannya dari roles.js (mendukung banyak Owner dinamis,
    // bukan cuma satu nomor statis dari settings.ownerNumber).
    // FIX: dibungkus try/catch — sebelumnya kalau salah satu dari ketiga
    // fungsi ini melempar error (misal db.js gagal baca/tulis file data),
    // errornya akan keluar dari handleCommand() TANPA tertangkap try/catch
    // apapun (karena posisinya di luar blok try di bawah), sehingga
    // SEMUA command gagal total tanpa balasan apapun ke user — walau log
    // "⚡ ... → .command" tetap muncul di console karena itu dicatat
    // sebelum titik ini. Sekarang errornya hanya membuat ctx.isCreator/
    // isOwner/isPremium default ke false (paling aman), bukan menggagalkan
    // seluruh proses command.
    let isCreatorFlag = false, isOwnerFlag = false, isPremiumFlag = false;
    try {
        isCreatorFlag = isCreator(sender);
        isOwnerFlag   = isOwner(sender);
        isPremiumFlag = isPremium(sender);
    } catch (err) {
        log.error(`Gagal cek jabatan untuk ${sender}: ${err.message}`);
    }
    const reply = (text) => replyWithThumb(sock, jid, text, msg);
    const mentioned = getMentioned(msg);

    const handler = routeMap.get(command);
    if (!handler) {
        log.error(`Command "${command}" TIDAK DITEMUKAN di routeMap (total ${routeMap.size} command terdaftar).`);
        return;
    }

    // ── Sewa Mode check ────────────────────────────────────────────────────
    // Kalau sewaMode ON dan ini grup → hanya grup bersewa yang bisa jalan.
    // Owner/Creator selalu bypass. Command info-sewa (ceksewa, hargasewa) juga bypass.
    const SEWA_BYPASS_CMDS = new Set(['ceksewa','infosewa','statussewa','hargasewa','pricesewa','infoharga','menu','help','start']);
    if (isGroup && isSewaMode() && !isOwnerFlag && !isCreatorFlag && !SEWA_BYPASS_CMDS.has(command)) {
        if (!isSewaActive(jid)) {
            return replyWithThumb(sock, jid,
                `⏳ *Bot Belum Disewa*\n\n` +
                `Grup ini belum memiliki sewa bot aktif.\n` +
                `Ketik \`${settings.prefix}hargasewa\` untuk info harga dan cara sewa.`,
                msg
            );
        }
    }

    // Track command usage analytics
    try { trackCommand(command); } catch {}

    const ctx = {
        sock, msg, jid, sender, args, isGroup, body, reply, isAdmin,
        isOwner: isOwnerFlag,
        isCreator: isCreatorFlag,
        isPremium: isPremiumFlag,
        mentioned,
    };

    // FIX: reaksi ⏳ sekarang dikirim lebih awal, di messagePipeline.js
    // (sebelum autoTyping) — supaya muncul INSTAN saat command diterima,
    // bukan baru muncul setelah delay "mengetik..." 3-4 detik. Di sini
    // tinggal reaksi hasil akhirnya (✅ / ❌) setelah handler selesai.
    try {
        const longTimeoutCommands = [
            'play', 'musik', 'music', 'lagu', 'ytmp3',
            'ig', 'instagram', 'igdl', 'instagramdl',
            'tiktok', 'tt', 'tiktokdl', 'ttdl',
            'iqc', 'iphonequote', 'iphoneqc', 'imessagequote',
        ];
        const timeoutMs = longTimeoutCommands.includes(command) ? 180_000 : 60_000;
        await withTimeout(handler(ctx), timeoutMs, `command "${command}"`);
        await reactTo(sock, jid, msg.key, '✅');
        try { trackCommandUsage(command); } catch { /* ignore */ }
        try { trackCommandUsage(command); } catch { /* ignore */ }
    } catch (err) {
        log.error(`Command "${command}": ${err.message}`);
        try { await reply('⚠️ Terjadi kesalahan saat menjalankan command ini.'); } catch {}
        await reactTo(sock, jid, msg.key, '❌');
    }
}

export { checkMute, isGroupLocked };
