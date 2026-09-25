process.on('uncaughtException', console.error)
process.on('unhandledRejection', console.error)

/*
	* Create By Naze
	* Follow https://github.com/nazedev
	* Whatsapp : https://whatsapp.com/channel/0029VaWOkNm7DAWtkvkJBK43
*/

require('./settings');
const fs = require('fs');
const os = require('os');
const qs = require('qs');
const util = require('util');
const jimp = require('jimp');
const path = require('path');
const https = require('https');
const axios = require('axios');
const chalk = require('chalk');
const yts = require('yt-search');
const ytdl = require('ytdl-core');
const cron = require('node-cron');
const cheerio = require('cheerio');
const fetch = require('node-fetch');
const FileType = require('file-type');
const { Chess } = require('chess.js');
const FormData = require('form-data');
const {
    google
} = require('googleapis');
const similarity = require('similarity');
const PDFDocument = require('pdfkit');
const webp = require('node-webpmux');
const ffmpeg = require('fluent-ffmpeg');
const speed = require('performance-now');
const didYouMean = require('didyoumean');
const { performance } = require('perf_hooks');
const moment = require('moment-timezone');
const translate = require('translate-google-api');
const { Akinator, AkinatorAnswer } = require('aki-api');
const PhoneNum = require('awesome-phonenumber');
const { exec, spawn, execSync } = require('child_process');
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, getBinaryNodeChildren, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('baileys');

const menfesTimeouts = new Map();
const TicTacToe = require('./lib/tictactoe');
const { antiSpam } = require('./src/antispam');
const templateMenu = require('./lib/template_menu');
const { TelegraPh, UguuSe } = require('./lib/uploader');
const { toAudio, toPTT, toVideo } = require('./lib/converter');
const { GroupUpdate, LoadDataBase } = require('./src/message');
const { JadiBot, StopJadiBot, ListJadiBot } = require('./src/jadibot');
const { imageToWebp, videoToWebp, gifToWebp, writeExif } = require('./lib/exif');
const { cmdAdd, cmdDel, cmdAddHit, addExpired, getPosition, getExpired, getStatus, checkStatus, getAllExpired, checkExpired } = require('./src/database');
const { rdGame, iGame, tGame, gameSlot, gameCasinoSolo, gameSamgongSolo, gameMerampok, gameBegal, daily, buy, setLimit, addLimit, addMoney, setMoney, transfer, Blackjack, SnakeLadder } = require('./lib/game');
const { pinterest, wallpaper, remini, wikimedia, hitamkan, yanzGpt, mediafireDl, ringtone, styletext, instagramDl, tiktokDl, facebookDl, instaStalk, telegramStalk, tiktokStalk, genshinStalk, instaStory, bk9Ai, spotifyDl, ytMp4, ytMp3, NvlGroup, quotedLyo, youSearch, gptLogic, savetube, simi, geminiAi } = require('./lib/screaper');
const { unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, errorCache, normalize, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, convertTimestampToDate, getAllHTML, tarBackup } = require('./lib/function');
let cover = [ 'https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1754250850650-6rln8u.jpg', 'https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1754252872386-haj5u8.jpg', 'https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1754252858317-8g8u0r.jpg', 'https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1754252843559-s1z59f.jpg', 'https://raw.githubusercontent.com/NdikzDatabase/Database/main/Database/1754252825246-c1szcw.jpg'
]
async function gptScrape(message) {
    const referer = 'https://gptonline.ai/id/chatgpt-online';

    try {
        const html = (await axios.get(referer)).data;
        const attrs = {};
        const attrList = ['nonce', 'post-id', 'bot-id', 'url'];

        for (const key of attrList) {
            const match = html.match(new RegExp(`data-${key}="([^"]+)"`));
            if (!match) throw new Error(`Attribute ${key} tidak ditemukan`);
            attrs[key] = match[1];
        }

        const form = new FormData();
        const clientId = 'sU' + Math.random().toString(36).slice(2, 10);

        form.append('_wpnonce', attrs['nonce']);
        form.append('post_id', attrs['post-id']);
        form.append('url', attrs['url']);
        form.append('action', 'wpaicg_chat_shortcode_message');
        form.append('message', message);
        form.append('bot_id', attrs['bot-id']);
        form.append('chatbot_identity', `custom_bot_${attrs['bot-id']}`);
        form.append('wpaicg_chat_history', JSON.stringify([{
            role: 'user',
            content: message
        }]));
        form.append('wpaicg_chat_client_id', clientId);

        const res = await axios.post(
            'https://gptonline.ai/id/wp-admin/admin-ajax.php',
            form, {
                headers: {
                    ...form.getHeaders(),
                    Referer: referer,
                    Origin: 'https://gptonline.ai',
                    'User-Agent': 'Mozilla/5.0',
                }
            }
        );

        return res.data?.data || '⚠️ Tidak ada respon dari AI.';
    } catch (err) {
        return `❌ Error: ${err.response?.data?.message || err.message}`;
    }
}
module.exports = alya = async (alya, m, msg, store) => {
	const botNumber = alya.decodeJid(alya.user.id);
	const ownerNumber = db?.set?.[botNumber]?.owner?.map(x => x.id) || owner;
	
	try {
		
		await LoadDataBase(alya, m);
		await GroupUpdate(alya, m, store);
		
		const body = ((m.type === 'conversation') ? m.message.conversation :
		(m.type == 'imageMessage') ? m.message.imageMessage.caption :
		(m.type == 'videoMessage') ? m.message.videoMessage.caption :
		(m.type == 'extendedTextMessage') ? m.message.extendedTextMessage.text :
		(m.type == 'reactionMessage') ? m.message.reactionMessage.text :
		(m.type == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId :
		(m.type == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
		(m.type == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId :
		(m.type == 'interactiveResponseMessage'  && m.quoted) ? (m.message.interactiveResponseMessage?.nativeFlowResponseMessage ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : '') :
		(m.type == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || '') :
		(m.type == 'editedMessage') ? (m.message.editedMessage?.message?.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.editedMessage?.message?.protocolMessage?.editedMessage?.conversation || '') :
		(m.type == 'protocolMessage') ? (m.message.protocolMessage?.editedMessage?.extendedTextMessage?.text || m.message.protocolMessage?.editedMessage?.conversation || m.message.protocolMessage?.editedMessage?.imageMessage?.caption || m.message.protocolMessage?.editedMessage?.videoMessage?.caption || '') : '') || '';
		
		const budy = (typeof m.text == 'string' ? m.text : '')
		const isCreator = isOwner = [botNumber, ...ownerNumber].filter(v => typeof v === 'string').map(v => v.replace(/[^0-9]/g, '')).includes(m.sender.split('@')[0])
		const cases = db.cases ? db.cases : (db.cases = [...fs.readFileSync('./alya.js', 'utf-8').matchAll(/case\s+['"]([^'"]+)['"]/g)].map(match => match[1]));
		const prefix = isCreator ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '') : db.set[botNumber].multiprefix ? (/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@()#,'"*+÷/\%^&.©^]/gi)[0] : /[\uD800-\uDBFF][\uDC00-\uDFFF]/gi.test(body) ? body.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]/gi)[0] : listprefix.find(a => body?.startsWith(a)) || '¿') : listprefix.find(a => body?.startsWith(a)) || '¿'
		const isCmd = body.startsWith(prefix)
		const args = body.trim().split(/ +/).slice(1)
		const quoted = m.quoted ? m.quoted : m
		const command = isCreator ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : isCmd ? body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase() : ''
		const text = q = args.join(' ')
		const mime = (quoted.msg || quoted).mimetype || ''
		const qmsg = (quoted.msg || quoted)
		const author = db?.set?.[botNumber]?.author || 'Alya Chan';
		const packname = db?.set?.[botNumber]?.packname || 'Bot WhatsApp';
		const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
		const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
		const jam = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
		const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
		const almost = 0.72
		const time = Date.now()
		const time_now = new Date()
		const time_end = 60000 - (time_now.getSeconds() * 1000 + time_now.getMilliseconds());
		const readmore = String.fromCharCode(8206).repeat(999)
		const setv = pickRandom(listv)
		
		// Read Database
		const sewa = db.sewa
		const premium = db.premium
		const set = db.set[botNumber]
		
		// Database Game
		let suit = db.game.suit
		let chess = db.game.chess
		let chat_ai = db.game.chat_ai
		let menfes = db.game.menfes
		let tekateki = db.game.tekateki
		let akinator = db.game.akinator
		let tictactoe = db.game.tictactoe
		let tebaklirik = db.game.tebaklirik
		let kuismath = db.game.kuismath
		let blackjack = db.game.blackjack
		let tebaklagu = db.game.tebaklagu
		let tebakkata = db.game.tebakkata
		let family100 = db.game.family100
		let susunkata = db.game.susunkata
		let tebakbom = db.game.tebakbom
		let ulartangga = db.game.ulartangga
		let tebakkimia = db.game.tebakkimia
		let caklontong = db.game.caklontong
		let tebakangka = db.game.tebakangka
		let tebaknegara = db.game.tebaknegara
		let tebakgambar = db.game.tebakgambar
		let tebakbendera = db.game.tebakbendera
		
		const isVip = db.users[m.sender] ? db.users[m.sender].vip : false
		const isBan = db.users[m.sender] ? db.users[m.sender].ban : false
		const isLimit = db.users[m.sender] ? (db.users[m.sender].limit > 0) : false
		const isPremium = isCreator || checkStatus(m.sender, premium) || false
		const isNsfw = m.isGroup ? db.groups[m.chat].nsfw : false
		
		// Fake
		const fkontak = {
			key: {
				remoteJid: '0@s.whatsapp.net',
				participant: '0@s.whatsapp.net',
				fromMe: false,
				id: 'Alya'
			},
			message: {
				contactMessage: {
					displayName: (m.pushName || author),
					vcard: `BEGIN:VCARD\nVERSION:3.0\nN:XL;${m.pushName || author},;;;\nFN:${m.pushName || author}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
					sendEphemeral: true
				}
			}
		}
		
		// Reset Limit
		cron.schedule('00 00 * * *', async () => {
			cmdDel(db.hit);
			console.log('Reseted Limit Users')
			let user = Object.keys(db.users)
			for (let jid of user) {
				const limitUser = db.users[jid].vip ? limit.vip : checkStatus(jid, premium) ? limit.premium : limit.free
				if (db.users[jid].limit < limitUser) db.users[jid].limit = limitUser
			}
			if (set?.autobackup) {
				let datanya = './database/' + tempatDB;
				if (tempatDB.startsWith('mongodb')) {
					datanya = './database/backup_database.json';
					fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), 'utf-8');
				}
				let tglnya = new Date().toISOString().replace(/[:.]/g, '-');
				for (let o of ownerNumber) {
					try {
						await alya.sendMessage(o, { document: fs.readFileSync(datanya), mimetype: 'application/json', fileName: tglnya + '_database.json' })
						console.log(`[AUTO BACKUP] Backup berhasil dikirim ke ${o}`);
					} catch (e) {
						console.error(`[AUTO BACKUP] Gagal mengirim backup ke ${o}:`, error);
					}
				}
			}
		}, {
			scheduled: true,
			timezone: 'Asia/Jakarta'
		});
		
		// Auto Set Bio
		if (set.autobio) {
			if (new Date() * 1 - set.status > 60000) {
				await alya.updateProfileStatus(`${alya.user.name} | 🎯 Runtime : ${runtime(process.uptime())}`).catch(e => {})
				set.status = new Date() * 1
			}
		}
		
		// Set Mode
		if (!isCreator) {
			if ((set.grouponly === set.privateonly)) {
				if (!alya.public && !m.key.fromMe) return
			} else if (set.grouponly) {
				if (!m.isGroup) return
			} else if (set.privateonly) {
				if (m.isGroup) return
			}
		}
		
		// Group Settings
		if (m.isGroup) {
			// Mute
			if (db.groups[m.chat].mute && !isCreator) {
				return
			}
			
			// Anti Hidetag
			if (!m.key.fromMe && m.mentionedJid?.length === m.metadata.participanis?.length && db.groups[m.chat].antihidetag && !isCreator && m.isBotAdmin && !m.isAdmin) {
				await alya.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
				await m.reply('*Anti Hidetag Sedang Aktif❗*')
			}
			
			// Anti Tag Sw
			if (!m.key.fromMe && db.groups[m.chat].antitagsw && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (m.type === 'groupStatusMentionMessage' || m.message?.groupStatusMentionMessage || m.message?.protocolMessage?.type === 25 || Object.keys(m.message).length === 1 && Object.keys(m.message)[0] === 'messageContextInfo') {
					if (!db.groups[m.chat].tagsw[m.sender]) {
						db.groups[m.chat].tagsw[m.sender] = 1
						await m.reply(`Grup ini terdeteksi ditandai dalam Status WhatsApp\n@${m.sender.split('@')[0]}, mohon untuk tidak menandai grup dalam status WhatsApp\nPeringatan ${db.groups[m.chat].tagsw[m.sender]}/5, akan dikick sewaktu waktu❗`)
					} else if (db.groups[m.chat].tagsw[m.sender] >= 5) {
						await alya.groupParticipantsUpdate(m.chat, [m.sender], 'remove').catch((err) => m.reply('Gagal!'))
						await m.reply(`@${m.sender.split("@")[0]} telah dikeluarkan dari grup\nKarena menandai grup dalam status WhatsApp sebanyak 5x`)
						delete db.groups[m.chat].tagsw[m.sender]
					} else {
						db.groups[m.chat].tagsw[m.sender] += 1
						await m.reply(`Grup ini terdeteksi ditandai dalam Status WhatsApp\n@${m.sender.split('@')[0]}, mohon untuk tidak menandai grup dalam status WhatsApp\nPeringatan ${db.groups[m.chat].tagsw[m.sender]}/5, akan dikick sewaktu waktu❗`)
					}
				}
			}
			
			// Anti Toxic
			if (!m.key.fromMe && db.groups[m.chat].antitoxic && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.toLowerCase().split(/\s+/).some(word => badWords.includes(word))) {
					await alya.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await alya.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Berkata Toxic\nMohon gunakan bahasa yang sopan.`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Toxic❗*'}, ...m.key }}}, {})
				}
			}
			
			// Anti Delete
			if (m.type == 'protocolMessage' && db.groups[m.chat].antidelete && !isCreator && m.isBotAdmin && !m.isAdmin) {
				const mess = msg.message.protocolMessage
				if (store?.messages?.[m.chat]?.array) {
					const chats = store.messages[m.chat].array.find(a => a.id === mess.key.id);
					if (!chats?.msg) return
					chats.msg.contextInfo = { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }
					const pesan = chats.type === 'conversation' ? { extendedTextMessage: { text: chats.msg, contextInfo: { mentionedJid: [chats.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Delete❗*'}, ...chats.key }}} : { [chats.type]: chats.msg }
					await alya.relayMessage(m.chat, pesan, {})
				}
			}
			
			// Anti Link Group
			if (db.groups[m.chat].antilink && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.match('chat.whatsapp.com/')) {
					await alya.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await alya.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Link Group\nMaaf Link Harus Di Hapus..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Link❗*'}, ...m.key }}}, {})
				}
			}
			
			// Anti Virtex Group
			if (db.groups[m.chat].antivirtex && !isCreator && m.isBotAdmin && !m.isAdmin) {
				if (budy.length > 4000) {
					await alya.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await alya.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Virtex..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Virtex❗*'}, ...m.key }}}, {})
					await alya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
				if (m.msg?.nativeFlowMessage?.messageParamsJson?.length > 3500) {
					await alya.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: m.id, participant: m.sender }})
					await alya.relayMessage(m.chat, { extendedTextMessage: { text: `Terdeteksi @${m.sender.split('@')[0]} Mengirim Bug..`, contextInfo: { mentionedJid: [m.key.participant], isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: '*Anti Bug❗*'}, ...m.key }}}, {})
					await alya.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
				}
			}
			
		}
		
		// Auto Read
		if (m.message && m.key.remoteJid !== 'status@broadcast') {
			if ((set.autoread && alya.public) || isCreator) {
				alya.readMessages([m.key]);

const vice = chalk.hex('#00EAD3');
const theme = {
  header: chalk.bgWhite.black.bold,
  label: chalk.cyan,
  value: chalk.whiteBright,
  messageText: chalk.gray,
};

// Fungsi bantu format key-value agar rapih di tengah
const formatProperty = (emoji, key, value) =>
  vice("║ ") + theme.label(`${emoji} ${key.padEnd(7)}:`) + ' ' + theme.value(value.toString().padEnd(34)) + vice("║\n");

// Dapatkan data dari pesan
const msg = {
  id: m.key.id,
  jid: m.chat,
  type: budy || m.type,
  isBot: isCreator,
  name: m.pushName || (isCreator ? 'Bot' : 'Anonim'),
  metadata: m.metadata,
  isGroup: m.isGroup,
  text: m.text || budy,
  msg: m,
};

// Banner pesan [GROUP/PRIVATE/NEWSLETTER]
const getMessageTypeBanner = () => {
  if (msg.isGroup) return '[GROUP]';
  if (msg.jid.endsWith('@newsletter')) return '[NEWSLETTER]';
  return '[PRIVATE]';
};

// Mulai buat log
let log = '';
log += vice("╔════════════════════════════════════════════════╗\n");
log += vice("║ ") + theme.header(` 📨 PESAN MASUK ${getMessageTypeBanner()} `.padEnd(44)) + vice(" ║\n");
log += vice("╠════════════════════════════════════════════════╣\n");

log += formatProperty('🆔', 'ID', msg.id);
log += formatProperty('🔗', 'JID', msg.jid);
log += formatProperty('📋', 'TYPE', msg.type);
log += formatProperty('🤖', 'BOT', msg.isBot ? 'YES ✓' : 'NO ✗');
log += formatProperty('👤', 'NAME', msg.name);

if (msg.isGroup) {
  log += formatProperty('📑', 'SUBJECT', msg.metadata?.subject || 'N/A');
}

log += vice("╠════════════════════════════════════════════════╣\n");

const preview = msg.text?.slice(0, 200) || JSON.stringify(msg.msg, null, 2) || "No content";
const formattedPreview = theme.messageText(preview + (preview.length >= 200 ? "..." : ""));

log += vice("╚════════════════════════════════════════════════╝\n");
log += formattedPreview;

console.log(log);
			}
		}
		
		// Filter Bot & Ban
		if (m.isBot) return
		if (db.users[m.sender]?.ban && !isCreator) return
		
		// Mengetik & Anti Spam & Hit
		if (alya.public && isCmd) {
			if (set.autotyping) {
				await alya.sendPresenceUpdate('composing', m.chat)
			}
			if (cases.includes(command)) {
				cmdAdd(db.hit);
				cmdAddHit(db.hit, command);
			}
			if (set.antispam && antiSpam.isFiltered(m.sender)) {
				console.log(chalk.bgRed('[ SPAM ] : '), chalk.black(chalk.bgHex('#1CFFF7')(`From -> ${m.sender}`), chalk.bgHex('#E015FF')(` In ${m.isGroup ? m.chat : 'Private Chat'}`)))
				return m.reply('「 ❗ 」Beri Jeda 5 Detik Per Command Kak')
			}
		}
		
		if (isCmd && !isCreator) antiSpam.addFilter(m.sender)
		
		// Cmd Media
		let fileSha256;
		if (m.isMedia && m.msg.fileSha256 && db.cmd && (m.msg.fileSha256.toString('base64') in db.cmd)) {
			let hash = db.cmd[m.msg.fileSha256.toString('base64')]
			fileSha256 = hash.text
		}
		
		// Salam
		if (/^a(s|ss)alamu('|)alaikum(| )(wr|)( |)(wb|)$/.test(budy?.toLowerCase())) {
			const jwb_salam = ['Wa\'alaikumusalam','Wa\'alaikumusalam wr wb','Wa\'alaikumusalam Warohmatulahi Wabarokatuh']
			m.reply(pickRandom(jwb_salam))
		}
		
		// Waktu Sholat
		const jadwalSholat = {
			Subuh: '04:30',
			Dzuhur: '12:06',
			Ashar: '15:21',
			Maghrib: '18:08',
			Isya: '19:00'
		}
		if (!this.intervalSholat) this.intervalSholat = null;
		if (!this.waktusholat) this.waktusholat = {};
		if (this.intervalSholat) clearInterval(this.intervalSholat); 
		setTimeout(() => {
			this.intervalSholat = setInterval(async() => {
				const sekarang = moment.tz('Asia/Jakarta');
				const jamSholat = sekarang.format('HH:mm');
				const hariIni = sekarang.format('YYYY-MM-DD');
				const detik = sekarang.format('ss');
				if (detik !== '00') return;
				for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
					if (jamSholat === waktu && this.waktusholat[sholat] !== hariIni) {
						this.waktusholat[sholat] = hariIni
						for (const [idnya, settings] of Object.entries(db.groups)) {
							if (settings.waktusholat) {
								await alya.sendMessage(idnya, { text: `Waktu *${sholat}* telah tiba, ambilah air wudhu dan segeralah shalat🙂.\n\n*${waktu.slice(0, 5)}*\n_untuk wilayah Jakarta dan sekitarnya._` }, { ephemeralExpiration: m.expiration || store?.messages[idnya]?.array?.slice(-1)[0]?.metadata?.ephemeralDuration || 0 }).catch(e => {})
							}
						}
					}
				}
			}, 60000)
		}, time_end);
		
		// Cek Expired
		checkExpired(premium);
		checkExpired(sewa, alya);
		
		// TicTacToe
		let room = Object.values(tictactoe).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
		if (room) {
			let now = Date.now();
			if (now - (room.lastMove || now) > 5 * 60 * 1000) {
				m.reply('Game Tic-Tac-Toe dibatalkan karena tidak ada aktivitas selama 5 menit.');
				delete tictactoe[room.id];
				return;
			}
			room.lastMove = now;
			let ok, isWin = false, isTie = false, isSurrender = false;
			if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
			isSurrender = !/^[1-9]$/.test(m.text)
			if (m.sender !== room.game.currentTurn) {
				if (!isSurrender) return true
			}
			if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
				m.reply({'-3': 'Game telah berakhir','-2': 'Invalid','-1': 'Posisi Invalid',0: 'Posisi Invalid'}[ok])
				return true
			}
			if (m.sender === room.game.winner) isWin = true
			else if (room.game.board === 511) isTie = true
			if (!(room.game instanceof TicTacToe)) {
				room.game = Object.assign(new TicTacToe(room.game.playerX, room.game.playerO), room.game)
			}
			let arr = room.game.render().map(v => ({X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]))
			if (isSurrender) {
				room.game._currentTurn = m.sender === room.game.playerX
				isWin = true
			}
			let winner = isSurrender ? room.game.currentTurn : room.game.winner
			if (isWin) {
				db.users[m.sender].limit += 3
				db.users[m.sender].money += 3000
			}
			let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\n${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}\n❌: @${room.game.playerX.split('@')[0]}\n⭕: @${room.game.playerO.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
			if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
			room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
			if (room.x !== room.o) await alya.sendMessage(room.x, { text: str, mentions: parseMention(str) }, { quoted: m })
			await alya.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
			if (isTie || isWin) delete tictactoe[room.id]
		}
		
		// Suit PvP
		let roof = Object.values(suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
		if (roof) {
			let now = Date.now();
			let win = '', tie = false;
			if (now - (roof.lastMove || now) > 3 * 60 * 1000) {
				m.reply('Game Suit dibatalkan karena tidak ada aktivitas selama 3 menit.');
				delete suit[roof.id];
				return;
			}
			roof.lastMove = now;
			if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
				if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
					m.reply(`@${roof.p2.split`@`[0]} menolak suit,\nsuit dibatalkan`)
					delete suit[roof.id]
					return !0
				}
				roof.status = 'play';
				roof.asal = m.chat;
				m.reply(`Suit telah dikirimkan ke chat\n\n@${roof.p.split`@`[0]} dan @${roof.p2.split`@`[0]}\n\nSilahkan pilih suit di chat masing-masing klik https://wa.me/${botNumber.split`@`[0]}`)
				if (!roof.pilih) alya.sendMessage(roof.p, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
				if (!roof.pilih2) alya.sendMessage(roof.p2, { text: `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️` }, { quoted: m })
			}
			let jwb = m.sender == roof.p, jwb2 = m.sender == roof.p2;
			let g = /gunting/i, b = /batu/i, k = /kertas/i, reg = /^(gunting|batu|kertas)/i;
			
			if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
				roof.pilih = reg.exec(m.text.toLowerCase())[0];
				roof.text = m.text;
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`);
				if (!roof.pilih2) alya.sendMessage(roof.p2, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
				roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
				roof.text2 = m.text
				m.reply(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
				if (!roof.pilih) alya.sendMessage(roof.p, { text: '_Lawan sudah memilih_\nSekarang giliran kamu' })
			}
			let stage = roof.pilih
			let stage2 = roof.pilih2
			if (roof.pilih && roof.pilih2) {
				if (b.test(stage) && g.test(stage2)) win = roof.p
				else if (b.test(stage) && k.test(stage2)) win = roof.p2
				else if (g.test(stage) && k.test(stage2)) win = roof.p
				else if (g.test(stage) && b.test(stage2)) win = roof.p2
				else if (k.test(stage) && b.test(stage2)) win = roof.p
				else if (k.test(stage) && g.test(stage2)) win = roof.p2
				else if (stage == stage2) tie = true
				db.users[roof.p == win ? roof.p : roof.p2].limit += tie ? 0 : 3
				db.users[roof.p == win ? roof.p : roof.p2].money += tie ? 0 : 3000
				alya.sendMessage(roof.asal, { text: `_*Hasil Suit*_${tie ? '\nSERI' : ''}\n\n@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}\n@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}\n\nPemenang Mendapatkan\n*Hadiah :* Uang(3000) & Limit(3)`.trim(), mentions: [roof.p, roof.p2] }, { quoted: m })
				delete suit[roof.id]
			}
		}
		
		// Tebak Bomb
		let pilih = '🌀', bomb = '💣';
		if (m.sender in tebakbom) {
			if (!/^[1-9]|10$/i.test(body) && !isCmd && !isCreator) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 1) return !0;
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 2) {
				tebakbom[m.sender].board[parseInt(body) - 1] = bomb;
				tebakbom[m.sender].pick++;
				m.react('❌')
				tebakbom[m.sender].bomb--;
				tebakbom[m.sender].nyawa.pop();
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].nyawa.length < 1) {
					await m.reply(`*GAME TELAH BERAKHIR*\nKamu terkena bomb\n\n ${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n_Pengurangan Limit : 1_`);
					m.react('😂')
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\nKamu terkena bomb\n ${brd.join('')}\n\nTerpilih: ${tebakbom[m.sender].pick}\nSisa nyawa: ${tebakbom[m.sender].nyawa}`);
				return !0;
			}
			if (tebakbom[m.sender].petak[parseInt(body) - 1] === 0) {
				tebakbom[m.sender].petak[parseInt(body) - 1] = 1;
				tebakbom[m.sender].board[parseInt(body) - 1] = pilih;
				tebakbom[m.sender].pick++;
				tebakbom[m.sender].lolos--;
				let brd = tebakbom[m.sender].board;
				if (tebakbom[m.sender].lolos < 1) {
					db.users[m.sender].money += 6000
					await m.reply(`*KAMU HEBAT ಠ⁠ᴥ⁠ಠ*\n\n${brd.join('')}\n\n*Terpilih :* ${tebakbom[m.sender].pick}\n*Sisa nyawa :* ${tebakbom[m.sender].nyawa}\n*Bomb :* ${tebakbom[m.sender].bomb}\nBonus Money 💰 *+6000*`);
					delete tebakbom[m.sender];
				} else m.reply(`*PILIH ANGKA*\n\n${brd.join('')}\n\nTerpilih : ${tebakbom[m.sender].pick}\nSisa nyawa : ${tebakbom[m.sender].nyawa}\nBomb : ${tebakbom[m.sender].bomb}`)
			}
		}
		
		// Akinator
		if (m.sender in akinator) {
			if (m.quoted && akinator[m.sender].key == m.quoted.id) {
				if (budy == '5') {
					if (akinator[m.sender]?.progress?.toFixed(0) == 0) {
						delete akinator[m.sender]
						return m.reply(`🎮 Akinator Game End!\nWith *0* Progress`)
					}
					akinator[m.sender].isWin = false
					await akinator[m.sender].cancelAnswer()
					let { key } = await m.reply(`🎮 Akinator Game Back :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - ${akinator[m.sender]?.progress?.toFixed(0) == 0 ? 'End' : 'Back'}`)
					akinator[m.sender].key = key.id
				} else if (akinator[m.sender].isWin && ['benar', 'ya'].includes(budy.toLowerCase())) {
					m.react('🎊')
					delete akinator[m.sender]
				} else {
					if (!isNaN(budy) && budy.match(/^[0-4]$/) && budy) {
						if (akinator[m.sender].isWin) {
							let { key } = await m.reply({ image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }});
							akinator[m.sender].key = key.id
						} else {
							await akinator[m.sender].answer(budy)
							if (akinator[m.sender].isWin) {
								let { key } = await m.reply({ image: { url: akinator[m.sender].sugestion_photo }, caption: `🎮 Akinator Answer :\n\n@${m.sender.split('@')[0]}\nDia adalah *${akinator[m.sender].sugestion_name}*\n_${akinator[m.sender].sugestion_desc}_\n\n- 5 - Back\n- *Ya* (untuk keluar dari sesi)`, contextInfo: { mentionedJid: [m.sender] }});
								akinator[m.sender].key = key.id
							} else {
								let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]} (${akinator[m.sender].progress.toFixed(2)}) %\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n- 5 - Back`)
								akinator[m.sender].key = key.id
							}
						}
					}
				}
			}
		}
		
		// Game
		const games = { tebaklirik, tekateki, tebaklagu, tebakkata, kuismath, susunkata, tebakkimia, caklontong, tebakangka, tebaknegara, tebakgambar, tebakbendera }
		for (let gameName in games) {
			let game = games[gameName];
			let id = iGame(game, m.chat);
			if ((!isCmd || isCreator) && m.quoted && id == m.quoted.id) {
				if (game[m.chat + id]?.jawaban) {
					if (gameName == 'kuismath') {
						jawaban = game[m.chat + id].jawaban
						const difficultyMap = { 'noob': 1, 'easy': 1.5, 'medium': 2.5, 'hard': 4, 'extreme': 5, 'impossible': 6, 'impossible2': 7 };
						let randMoney = difficultyMap[kuismath[m.chat + id].mode]
						if (!isNaN(budy)) {
							if (budy.toLowerCase() == jawaban) {
								db.users[m.sender].money += randMoney * 1000
								await m.reply(`Jawaban Benar 🎉\nBonus Money 💰 *+${randMoney * 1000}*`)
								delete kuismath[m.chat + id]
							} else m.reply('*Jawaban Salah!*')
						}
					} else {
						jawaban = game[m.chat + id].jawaban
						let jawabBenar = /tekateki|tebaklirik|tebaklagu|tebakkata|tebaknegara|tebakbendera/.test(gameName) ? (similarity(budy.toLowerCase(), jawaban) >= almost) : (budy.toLowerCase() == jawaban)
						let bonus = gameName == 'caklontong' ? 9999 : gameName == 'tebaklirik' ? 4299 : gameName == 'susunkata' ? 2989 : 3499
						if (jawabBenar) {
							db.users[m.sender].money += bonus * 1
							await m.reply(`Jawaban Benar 🎉\nBonus Money 💰 *+${bonus}*`)
							delete game[m.chat + id]
						} else m.reply('*Jawaban Salah!*')
					}
				}
			}
		}
		
		// Family 100
		if (m.chat in family100) {
			if (m.quoted && m.quoted.id == family100[m.chat].id && !isCmd) {
				let room = family100[m.chat]
				let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
				let isSurender = /^((me)?nyerah|surr?ender)$/i.test(teks)
				if (!isSurender) {
					let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
					if (room.terjawab[index]) return !0
					room.terjawab[index] = m.sender
				}
				let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
				let caption = `Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}\n${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}\n${Array.from(room.jawaban, (jawaban, index) => { return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false }).filter(v => v).join('\n')}\n${isSurender ? '' : `Perfect Player`}`.trim()
				m.reply(caption)
				if (isWin || isSurender) delete family100[m.chat]
			}
		}
		
		// Chess
		if ((!isCmd || isCreator) && (m.sender in chess)) {
			const game = chess[m.sender];
			if (m.quoted && game.id == m.quoted.id && game.turn == m.sender && game.botMode) {
				if (!(game instanceof Chess)) {
					chess[m.sender] = Object.assign(new Chess(game.fen), game);
				}
				if (game.isCheckmate() || game.isDraw() || game.isGameOver()) {
					const status = game.isCheckmate() ? 'Checkmate' : game.isDraw() ? 'Draw' : 'Game Over';
					delete chess[m.sender];
					return m.reply(`♟Game ${status}\nPermainan dihentikan`);
				}
				const [from, to] = budy.toLowerCase().split(' ');
				if (!from || !to || from.length !== 2 || to.length !== 2) return m.reply('Format salah! Gunakan: e2 e4');
				try {
					game.move({ from, to });
				} catch (e) {
					return m.reply('Langkah Tidak Valid!')
				}
				
				if (game.isGameOver()) {
					delete chess[m.sender];
					return m.reply(`♟Permainan Selesai\nPemenang: @${m.sender.split('@')[0]}`);
				}
				const moves = game.moves({ verbose: true });
				const botMove = moves[Math.floor(Math.random() * moves.length)];
				game.move(botMove);
				game._fen = game.fen();
				game.time = Date.now();
				
				if (game.isGameOver()) {
					delete chess[m.sender];
					return m.reply(`♟Permainan Selesai\nPemenang: BOT`);
				}
				const encodedFen = encodeURI(game._fen);
				const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,`https://chessboardimage.com/${encodedFen}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765`,`https://fen2image.chessvision.ai/${encodedFen}/`];
				for (let url of boardUrls) {
					try {
						const { data } = await axios.get(url, { responseType: 'arraybuffer' });
						let { key } = await m.reply({ image: data, caption: `♟️CHESS GAME (vs BOT)\n\nLangkahmu: ${from} → ${to}\nLangkah bot: ${botMove.from} → ${botMove.to}\n\nGiliranmu berikutnya!\nExample: e2 e4`, mentions: [m.sender] });
						game.id = key.id;
						break;
					} catch (e) {}
				}
			} else if (game.time && (Date.now() - game.time >= 3600000)) {
				delete chess[m.sender];
				return m.reply(`♟Waktu Habis!\nPermainan dihentikan`);
			}
		}
		if (m.isGroup && (!isCmd || isCreator) && (m.chat in chess)) {
			if (m.quoted && chess[m.chat].id == m.quoted.id && [chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) {
				if (!(chess[m.chat] instanceof Chess)) {
					chess[m.chat] = Object.assign(new Chess(chess[m.chat].fen), chess[m.chat]);
				}
				if (chess[m.chat].isCheckmate() || chess[m.chat].isDraw() || chess[m.chat].isGameOver()) {
					const status = chess[m.chat].isCheckmate() ? 'Checkmate' : chess[m.chat].isDraw() ? 'Draw' : 'Game Over';
					delete chess[m.chat];
					return m.reply(`♟Game ${status}\nPermainan dihentikan`);
				}
				const [from, to] = budy.toLowerCase().split(' ');
				if (!from || !to || from.length !== 2 || to.length !== 2) return m.reply('Format salah! Gunakan format seperti: e2 e4');
				if ([chess[m.chat].player1, chess[m.chat].player2].includes(m.sender) && chess[m.chat].turn === m.sender) {
					try {
						chess[m.chat].move({ from, to });
					} catch (e) {
						return m.reply('Langkah Tidak Valid!')
					}
					chess[m.chat].time = Date.now();
					chess[m.chat]._fen = chess[m.chat].fen();
					const isPlayer2 = chess[m.chat].player2 === m.sender
					const nextPlayer = isPlayer2 ? chess[m.chat].player1 : chess[m.chat].player2;
					const encodedFen = encodeURI(chess[m.chat]._fen);
					const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`,`https://chessboardimage.com/${encodedFen}${!isPlayer2 ? '-flip' : ''}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765${!isPlayer2 ? '&orientation=black' : ''}`,`https://fen2image.chessvision.ai/${encodedFen}/${!isPlayer2 ? '?pov=black' : ''}`];
					for (let url of boardUrls) {
						try {
							const { data } = await axios.get(url, { responseType: 'arraybuffer' });
							let { key } = await m.reply({ image: data, caption: `♟️CHESS GAME\n\nGiliran: @${nextPlayer.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [nextPlayer] });
							chess[m.chat].turn = nextPlayer
							chess[m.chat].id = key.id;
							break;
						} catch (e) {}
					}
				}
			} else if (chess[m.chat].time && (Date.now() - chess[m.chat].time >= 3600000)) {
				delete chess[m.chat]
				return m.reply(`♟Waktu Habis!\nPermainan dihentikan`)
			}
		}
		
		// Ular Tangga
		if (m.isGroup && (!isCmd || isCreator) && (m.chat in ulartangga)) {
			if (m.quoted && ulartangga[m.chat].id == m.quoted.id) {
				if (!(ulartangga[m.chat] instanceof SnakeLadder)) {
					ulartangga[m.chat] = Object.assign(new SnakeLadder(ulartangga[m.chat]), ulartangga[m.chat]);
				}
				if (/^(roll|kocok)/i.test(budy.toLowerCase())) {
					const player = ulartangga[m.chat].players.findIndex(a => a.id == m.sender)
					if (ulartangga[m.chat].turn !== player) return m.reply('Bukan Giliranmu!')
					const roll = ulartangga[m.chat].rollDice();
					await m.reply(`https://raw.githubusercontent.com/nazedev/database/master/games/images/dice/roll-${roll}.webp`);
					ulartangga[m.chat].nextTurn();
					ulartangga[m.chat].players[player].move += roll
					if (ulartangga[m.chat].players[player].move > 100) ulartangga[m.chat].players[player].move = 100 - (ulartangga[m.chat].players[player].move - 100);
					let teks = `🐍🪜Warna: ${['Merah','Biru Muda','Kuning','Hijau','Ungu','Jingga','Biru Tua','Putih'][player]} -> ${ulartangga[m.chat].players[player].move}\n`;
					if(Object.keys(ulartangga[m.chat].map.move).includes(ulartangga[m.chat].players[player].move.toString())) {
						teks += ulartangga[m.chat].players[player].move > ulartangga[m.chat].map.move[ulartangga[m.chat].players[player].move] ? 'Kamu Termakan Ular!\n' : 'Kamu Naik Tangga\n'
						ulartangga[m.chat].players[player].move = ulartangga[m.chat].map.move[ulartangga[m.chat].players[player].move];
					}
					const newMap = await ulartangga[m.chat].drawBoard(ulartangga[m.chat].map.url, ulartangga[m.chat].players);
					if (ulartangga[m.chat].players[player].move === 100) {
						teks += `@${m.sender.split('@')[0]} Menang\nHadiah:\n- Limit + 50\n- Money + 100.000`;
						addLimit(50, m.sender, db);
						addMoney(100000, m.sender, db);
						delete ulartangga[m.chat];
						return m.reply({ image: newMap, caption: teks, mentions: [m.sender] });
					}
					let { key } = await m.reply({ image: newMap, caption: teks + `Giliran: @${ulartangga[m.chat].players[ulartangga[m.chat].turn].id.split('@')[0]}`, mentions: [m.sender, ulartangga[m.chat].players[ulartangga[m.chat].turn].id] });
					ulartangga[m.chat].id = key.id;
				} else m.reply('Example: roll/kocok')
			} else if (ulartangga[m.chat].time && (Date.now() - ulartangga[m.chat].time >= 7200000)) {
				delete ulartangga[m.chat]
				return m.reply(`🐍🪜Waktu Habis!\nPermainan dihentikan`)
			}
		}
		
		// Menfes & Room Ai
		if (!m.isGroup && (!isCmd || isCreator)) {
			if (menfes[m.sender] && m.key.remoteJid !== 'status@broadcast' && m.msg) {
				m.react('✈');
				m.msg.contextInfo = { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}
				const pesan = m.type === 'conversation' ? { extendedTextMessage: { text: m.msg, contextInfo: { isForwarded: true, forwardingScore: 1, quotedMessage: { conversation: `*Pesan Dari ${menfes[m.sender].nama ? menfes[m.sender].nama : 'Seseorang'}*`}, key: { remoteJid: '0@s.whatsapp.net', fromMe: false, participant: '0@s.whatsapp.net' }}}} : { [m.type]: m.msg }
				await alya.relayMessage(menfes[m.sender].tujuan, pesan, {});
			}
			
			if (chat_ai[m.sender] && m.key.remoteJid !== 'status@broadcast') {
				if (!/^(del((room|c|hat)ai)|>|<$)$/i.test(command) && budy) {
					chat_ai[m.sender].push({ role: 'user', content: budy });
					let hasil;
					try {
						hasil = await gptLogic(chat_ai[m.sender], budy)
					} catch (e) {
						try {
							hasil = await yanzGpt(chat_ai[m.sender])
						} catch (e) {
							hasil = 'Gagal Mengambil Respon, Website sedang gangguan'
						}
					}
					const response = hasil?.choices?.[0]?.message?.content || hasil || 'Maaf, saya tidak mengerti.';
					chat_ai[m.sender].push({ role: 'assistant', content: response });
					await m.reply(response)
				}
			}
		}
		
		// Afk
		let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
		for (let jid of mentionUser) {
			let user = db.users[jid]
			if (!user) continue
			let afkTime = user.afkTime
			if (!afkTime || afkTime < 0) continue
			let reason = user.afkReason || ''
			m.reply(`Jangan tag dia!\nDia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}\nSelama ${clockString(new Date - afkTime)}`.trim())
		}
		if (db.users[m.sender].afkTime > -1) {
			let user = db.users[m.sender]
			m.reply(`@${m.sender.split('@')[0]} berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}\nSelama ${clockString(new Date - user.afkTime)}`)
			user.afkTime = -1
			user.afkReason = ''
		}
		const globalpp = pickRandom(cover)
		
		
		switch(fileSha256 || command) {
			// Tempat Add Case
			case '19rujxl1e': {
				console.log('.')
			}
			break
			
			// Owner Menu
			case 'shutdown': case 'off': {
				if (!isCreator) return m.reply(mess.owner)
				m.reply(`*[BOT] Process Shutdown...*`).then(() => {
					process.exit(0)
				})
			}
			break
			case 'setbio': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Mana text nya?')
				alya.setStatus(q)
				m.reply(`*Bio telah di ganti menjadi ${q}*`)
			}
			break
			case 'setppbot': {
				if (!isCreator) return m.reply(mess.owner)
				if (!/image/.test(quoted.type)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await alya.downloadAndSaveMediaMessage(quoted, 'ppbot.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await alya.query({
						tag: 'iq',
						attrs: {
							to: '@s.whatsapp.net',
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await alya.updateProfilePicture(botNumber, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delppbot': {
				if (!isCreator) return m.reply(mess.owner)
				await alya.removeProfilePicture(alya.user.id)
				m.reply('Sukses')
			}
			break
			case 'join': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Link Group!')
				if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return m.reply('Link Invalid!')
				const result = args[0].split('https://chat.whatsapp.com/')[1]
				m.reply(mess.wait)
				await alya.groupAcceptInvite(result).catch((res) => {
					if (res.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (res.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (res.data == 409) return m.reply('Bot Sudah Join Di Grup Tersebut❗');
					if (res.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (res.data == 500) return m.reply('Grup Penuh❗');
				})
			}
			break
			case 'leave': {
				if (!isCreator) return m.reply(mess.owner)
				await alya.groupLeave(m.chat).then(() => alya.sendFromOwner(ownerNumber, 'Sukses Keluar Dari Grup', m, { contextInfo: { isForwarded: true }})).catch(e => {});
			}
			break
			case 'clearchat': {
				if (!isCreator) return m.reply(mess.owner)
				await alya.chatModify({ delete: true, lastMessages: [{ key: m.key, messageTimestamp: m.timestamp }] }, m.chat).catch((e) => m.reply('Gagal Menghapus Chat!'))
				m.reply('Sukses Membersihkan Pesan')
			}
			break
			case 'getmsgstore': case 'storemsg': {
				if (!isCreator) return m.reply(mess.owner)
				let [teks1, teks2] = text.split`|`
				if (teks1 && teks2) {
					const msgnya = await store.loadMessage(teks1, teks2)
					if (msgnya?.message) await alya.relayMessage(m.chat, msgnya.message, {})
					else m.reply('Pesan Tidak Ditemukan!')
				} else m.reply(`Contoh: ${prefix + command} 123xxx@g.us|3EB0xxx`)
			}
			break
			case 'blokir': case 'block': {
				if (!isCreator) return m.reply(mess.owner)
				if (text || m.quoted) {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await alya.updateBlockStatus(numbersOnly, 'block').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 62xxx`)
			}
			break
			case 'listblock': {
				let anu = await alya.fetchBlocklist()
				m.reply(`Total Block : ${anu.length}\n` + anu.map(v => '• ' + v.replace(/@.+/, '')).join`\n`)
			}
			break
			case 'openblokir': case 'unblokir': case 'openblock': case 'unblock': {
				if (!isCreator) return m.reply(mess.owner)
				if (text || m.quoted) {
					const numbersOnly = m.isGroup ? (text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender) : m.chat
					await alya.updateBlockStatus(numbersOnly, 'unblock').then((a) => m.reply(mess.done)).catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 62xxx`)
			}
			break
			case 'ban': case 'banned': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && !db.users[nmrnya].ban) {
					db.users[nmrnya].ban = true
					m.reply('User Telah Di ban!')
				} else m.reply('User tidak terdaftar di database!')
			}
			break
			case 'unban': case 'unbanned': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx`)
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].ban) {
					db.users[nmrnya].ban = false
					m.reply('User Telah Di unban!')
				} else m.reply('User tidak terdaftar di database!')
			}
			break
			case 'mute': case 'unmute': {
				if (!isCreator) return m.reply(mess.owner)
				if (!m.isGroup) return m.reply(mess.group)
				if (command == 'mute') {
					db.groups[m.chat].mute = true
					m.reply('Bot Telah Di Mute Di Grup Ini!')
				} else if (command == 'unmute') {
					db.groups[m.chat].mute = false
					m.reply('Sukses Unmute')
				}
			}
			break
			case 'addowner': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text || isNaN(text)) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx`)
				const nmrnya = text.replace(/[^0-9]/g, '')
				const onWa = await alya.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db?.set?.[botNumber]?.owner) {
					if (db.set[botNumber].owner.find(a => a.id === nmrnya)) return m.reply('Nomer Tersebut Sudah Ada Di Owner!')
					db.set[botNumber].owner.push({ id: nmrnya, lock: false });
				}
				m.reply('Sukses Add Owner')
			}
			break
			case 'delowner': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text || isNaN(text)) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx`)
				const nmrnya = text.replace(/[^0-9]/g, '')
				const onWa = await alya.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				let list = db.set[botNumber].owner
				const index = list.findIndex(o => o.id === nmrnya);
				if (index === -1) return m.reply('Owner tidak ditemukan di daftar!')
				list.splice(index, 1)
				m.reply('Sukses Delete Owner')
			}
			break
			case 'adduang': case 'addmoney': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 1000`)
				if (args[1].length > 15) return m.reply('Jumlah Money Maksimal 15 digit angka!')
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await alya.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].money >= 0) {
					addMoney(args[1], nmrnya, db)
					m.reply('Sukses Add Uang')
				} else m.reply('User tidak terdaftar di database!')
			}
			break
			case 'addlimit': {
				if (!isCreator) return m.reply(mess.owner)
				if (!args[0] || !args[1] || isNaN(args[1])) return m.reply(`Kirim/tag Nomernya!\nExample:\n${prefix + command} 62xxx 10`)
				if (args[1].length > 10) return m.reply('Jumlah Limit Maksimal 10 digit angka!')
				const nmrnya = args[0].replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await alya.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
					addLimit(args[1], nmrnya, db)
					m.reply('Sukses Add limit')
				} else m.reply('User tidak terdaftar di database!')
			}
			break
			case 'listpc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = Object.keys(store.messages).filter(a => a.endsWith('.net') || a.endsWith('lid'));
				let teks = `● *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					if (store.messages?.[i]?.array?.length) {
						let nama = alya.getName(m.sender)
						teks += `${setv} *Nama :* ${nama}\n${setv} *User :* @${i.split('@')[0]}\n${setv} *Chat :* https://wa.me/${i.split('@')[0]}\n\n=====================\n\n`
					}
				}
				await m.reply(teks)
			}
			break
			case 'listgc': {
				if (!isCreator) return m.reply(mess.owner)
				let anu = Object.keys(store.messages).filter(a => a.endsWith('@g.us'));
				let teks = `● *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
				if (anu.length === 0) return m.reply(teks)
				for (let i of anu) {
					let metadata;
					try {
						metadata = store.groupMetadata[i]
					} catch (e) {
						metadata = (store.groupMetadata[i] = await alya.groupMetadata(i).catch(e => ({})))
					}
					teks += metadata?.subject ? `${setv} *Nama :* ${metadata.subject}\n${setv} *Admin :* ${metadata.owner ? `@${metadata.owner.split('@')[0]}` : '-' }\n${setv} *ID :* ${metadata.id}\n${setv} *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n${setv} *Member :* ${metadata.participants.length}\n\n=====================\n\n` : ''
				}
				await m.reply(teks)
			}
			break
			case 'creategc': case 'buatgc': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} *Nama Gc*`)
				let group = await alya.groupCreate(q, [m.sender])
				let res = await alya.groupInviteCode(group.id)
				await m.reply(`*Link Group :* *https://chat.whatsapp.com/${res}*\n\n*Nama Group :* *${group.subject}*\nSegera Masuk dalam 30 detik\nAgar menjadi Admin`, { detectLink: true })
				await sleep(30000)
				await alya.groupParticipantsUpdate(group.id, [m.sender], 'promote').catch(e => {});
				await alya.sendMessage(group.id, { text: 'Done' })
			}
			break
			case 'addsewa': case 'sewa': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} https://chat.whatsapp.com/xxx | waktu\n${prefix + command} https://chat.whatsapp.com/xxx | 30 hari`)
				let [teks1, teks2] = text.split('|')?.map(x => x.trim()) || [];
				if (!isUrl(teks1) && !teks1.includes('chat.whatsapp.com/')) return m.reply('Link Invalid!')
				const urlny = teks1.split('chat.whatsapp.com/')[1]
				try {
					await alya.groupAcceptInvite(urlny)
				} catch (e) {
					if (e.data == 400) return m.reply('Grup Tidak Di Temukan❗');
					if (e.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
					if (e.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					if (e.data == 500) return m.reply('Grup Penuh❗');
				}
				await alya.groupGetInviteInfo(urlny).then(a => {
					addExpired({ url: urlny, expired: (teks2?.replace(/[^0-9]/g, '') || 30) + 'd', ...a }, sewa)
					m.reply('Sukses Menambahkan Sewa Selama ' + (teks2?.replace(/[^0-9]/g, '') || 30) + ' hari\nOtomatis Keluar Saat Waktu Habis!')
				}).catch(e => m.reply('Gagal Menambahkan Sewa!'))
			}
			break
			case 'delsewa': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} https://chat.whatsapp.com/xxxx\n Or \n${prefix + command} id_group@g.us`)
				const urlny = text.split('chat.whatsapp.com/')[1].trim()
				if (checkStatus(urlny, sewa)) {
					await m.reply('Sukses Menghapus Sewa')
					await alya.groupLeave(getStatus(urlny, sewa).id).catch(e => {});
					sewa.splice(getPosition(urlny, sewa), 1);
				} else m.reply(`${text} Tidak Terdaftar Di Database\nExample:\n${prefix + command} https://chat.whatsapp.com/xxxx\n Or \n${prefix + command} id_group@g.us`)
			}
			break
			case 'listsewa': {
				if (!isCreator) return m.reply(mess.owner)
				let txt = `*------「 LIST SEWA 」------*\n\n`
				for (let s of sewa) {
					txt += `➸ *ID*: ${s.id}\n➸ *Url*: https://chat.whatsapp.com/${s.url}\n➸ *Expired*: ${formatDate(s.expired)}\n\n`
				}
				m.reply(txt)
			}
			break
			case 'addpr': case 'addprem': case 'addpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30 hari`)
				let [teks1, teks2] = text.split('|').map(x => x.trim());
				const nmrnya = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				const onWa = await alya.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				if (teks2) {
					if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
						addExpired({ id: nmrnya, expired: teks2.replace(/[^0-9]/g, '') + 'd' }, premium);
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]} Selama ${teks2}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.premium
						db.users[nmrnya].money += db.users[nmrnya].vip ? money.vip : money.premium
					} else m.reply('Nomer tidak terdaftar di BOT !\nPastikan Nomer Pernah Menggunakan BOT!')
				} else m.reply(`Masukkan waktunya!\Example:\n${prefix + command} @tag|waktu\n${prefix + command} @${m.sender.split('@')[0]}|30d\n_d = day_`)
			}
			break
			case 'delpr': case 'delprem': case 'delpremium': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply(`Example:\n${prefix + command} @tag`)
				const nmrnya = text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
				if (db.users[nmrnya] && db.users[nmrnya].limit >= 0) {
					if (checkStatus(nmrnya, premium)) {
						premium.splice(getPosition(nmrnya, premium), 1);
						m.reply(`Sukses ${command} @${nmrnya.split('@')[0]}`)
						db.users[nmrnya].limit += db.users[nmrnya].vip ? limit.vip : limit.free
						db.users[nmrnya].money += db.users[nmrnya].vip ? money.vip : money.free
					} else m.reply(`User @${nmrnya.split('@')[0]} Bukan Premium❗`)
				} else m.reply('Nomer tidak terdaftar di BOT !')
			}
			break
			case 'listpr': case 'listprem': case 'listpremium': {
				if (!isCreator) return m.reply(mess.owner)
				let txt = `*------「 LIST PREMIUM 」------*\n\n`
				for (let userprem of premium) {
					txt += `➸ *Nomer*: @${userprem.id.split('@')[0]}\n➸ *Limit*: ${db.users[userprem.id].limit}\n➸ *Money*: ${db.users[userprem.id].money.toLocaleString('id-ID')}\n➸ *Expired*: ${formatDate(userprem.expired)}\n\n`
				}
				m.reply(txt)
			}
			break
			case 'upsw': {
				if (!isCreator) return m.reply(mess.owner)
				const statusJidList = Object.keys(db.users)
				const backgroundColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
				try {
					if (quoted.isMedia) {
						if (/image|video/.test(quoted.mime)) {
							await alya.sendMessage('status@broadcast', {
								[`${quoted.mime.split('/')[0]}`]: await quoted.download(),
								caption: text || m.quoted?.body || ''
							}, { statusJidList, broadcast: true })
							m.react('✅')
						} else if (/audio/.test(quoted.mime)) {
							await alya.sendMessage('status@broadcast', {
								audio: await quoted.download(),
								mimetype: 'audio/mp4',
								ptt: true
							}, { backgroundColor, statusJidList, broadcast: true })
							m.react('✅')
						} else m.reply('Only Support video/audio/image/text')
					} else if (quoted.text) {
						await alya.sendMessage('status@broadcast', { text: text || m.quoted?.body || '' }, {
							textArgb: 0xffffffff,
							font: Math.floor(Math.random() * 9),
							backgroundColor, statusJidList,
							broadcast: true
						})
						m.react('✅')
					} else m.reply('Only Support video/audio/image/text')
				} catch (e) {
					m.reply('Gagal Mengupload Status Whatsapp!')
				}
			}
			break
			case 'addcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text && !text.startsWith('case')) return m.reply('Masukkan Casenya!')
				fs.readFile('alya.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const posisi = data.indexOf("case '19rujxl1e':");
					if (posisi !== -1) {
						const codeBaru = data.slice(0, posisi) + '\n' + `${text}` + '\n' + data.slice(posisi);
						fs.writeFile('alya.js', codeBaru, 'utf8', (err) => {
							if (err) {
								m.reply('Terjadi kesalahan saat menulis file: ', err);
							} else m.reply('Case berhasil ditambahkan');
						});
					} else m.reply('Gagal Menambahkan case!');
				});
			}
			break
			case 'getcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				try {
					const getCase = (cases) => {
						return "case"+`'${cases}'`+fs.readFileSync("alya.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
					}
					m.reply(`${getCase(text)}`)
				} catch (e) {
					m.reply(`case ${text} tidak ditemukan!`)
				}
			}
			break
			case 'delcase': {
				if (!isCreator) return m.reply(mess.owner)
				if (!text) return m.reply('Masukkan Nama Casenya!')
				fs.readFile('alya.js', 'utf8', (err, data) => {
					if (err) {
						console.error('Terjadi kesalahan saat membaca file:', err);
						return;
					}
					const regex = new RegExp(`case\\s+'${text.toLowerCase()}':[\\s\\S]*?break`, 'g');
					const modifiedData = data.replace(regex, '');
					fs.writeFile('alya.js', modifiedData, 'utf8', (err) => {
						if (err) {
							m.reply('Terjadi kesalahan saat menulis file: ', err);
						} else m.reply('Case berhasil dihapus dari file');
					});
				});
			}
			break
			case 'backup': {
				if (!isCreator) return m.reply(mess.owner)
				switch (args[0]) {
					case 'all':
					let bekup = './database/backup_all.tar.gz';
					tarBackup('./', bekup).then(() => {
						return m.reply({
							document: fs.readFileSync(bekup),
							mimetype: 'application/gzip',
							fileName: 'backup_all.tar.gz'
						})
					}).catch(e => m.reply('Gagal backup: ', + e))
					break
					case 'auto':
					if (set.autobackup) return m.reply('Sudah Aktif Sebelumnya!')
					set.autobackup = true
					m.reply('Sukses Mengaktifkan Auto Backup')
					break
					case 'session':
					await m.reply({
						document: fs.readFileSync('./alyadev/creds.json'),
						mimetype: 'application/json',
						fileName: 'creds.json'
					});
					break
					case 'database':
					let tglnya = new Date().toISOString().replace(/[:.]/g, '-');
					let datanya = './database/' + tempatDB;
					if (tempatDB.startsWith('mongodb')) {
						datanya = './database/backup_database.json';
						fs.writeFileSync(datanya, JSON.stringify(global.db, null, 2), 'utf-8');
					}
					await m.reply({
						document: fs.readFileSync(datanya),
						mimetype: 'application/json',
						fileName: tglnya + '_database.json'
					})
					break
					default:
					m.reply('Gunakan perintah:\n- backup all\n- backup auto\n- backup session\n- backup database');
				}
			}
			break
			case 'getsession': {
				if (!isCreator) return m.reply(mess.owner)
				await m.reply({
					document: fs.readFileSync('./alyadev/creds.json'),
					mimetype: 'application/json',
					fileName: 'creds.json'
				});
			}
			break
			case 'deletesession': case 'delsession': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./alyadev', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['session-', 'pre-key', 'sender-key', 'app-state'].some(ext => item.startsWith(ext)));					
					let teks = `Terdeteksi ${filteredArray.length} Session file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Session File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./alyadev/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah Session', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'deletesampah': case 'delsampah': {
				if (!isCreator) return m.reply(mess.owner)
				fs.readdir('./database/sampah', async function (err, files) {
					if (err) {
						console.error('Unable to scan directory: ' + err);
						return m.reply('Unable to scan directory: ' + err);
					}
					let filteredArray = await files.filter(item => ['gif', 'png', 'bin','mp3', 'mp4', 'jpg', 'webp', 'webm', 'opus', 'jpeg'].some(ext => item.endsWith(ext)));
					let teks = `Terdeteksi ${filteredArray.length} Sampah file\n\n`
					if(filteredArray.length == 0) return m.reply(teks);
					filteredArray.map(function(e, i) {
						teks += (i+1)+`. ${e}\n`
					})
					if (text && text == 'true') {
						let { key } = await m.reply('Menghapus Sampah File..')
						await filteredArray.forEach(function (file) {
							fs.unlinkSync('./database/sampah/' + file)
						});
						sleep(2000)
						m.reply('Berhasil Menghapus Semua Sampah', { edit: key })
					} else m.reply(teks + `\nKetik _${prefix + command} true_\nUntuk Menghapus`)
				});
			}
			break
			case 'setnamebot': case 'setbotname': {
				if (!isCreator) return m.reply(mess.owner)
				if (text || m.quoted) {
					const teksnya = text ? text : m.quoted.text
					if (db?.set?.[botNumber]?.setbotname) db.set[botNumber].setbotname = teksnya
					m.reply('Sukses')
				} else m.reply(`Contoh: ${prefix + command} textnya`)
			}
			break
			case 'setpacknamebot': case 'setbotpackname': {
				if (!isCreator) return m.reply(mess.owner)
				if (text || m.quoted) {
					const teksnya = text ? text : m.quoted.text
					if (db?.set?.[botNumber]?.packname) db.set[botNumber].packname = teksnya
					m.reply('Sukses')
				} else m.reply(`Contoh: ${prefix + command} textnya`)
			}
			break
			case 'setauthorbot': case 'setbotauthor': {
				if (!isCreator) return m.reply(mess.owner)
				if (text || m.quoted) {
					const teksnya = text ? text : m.quoted.text
					if (db?.set?.[botNumber]?.author) db.set[botNumber].author = teksnya
					m.reply('Sukses')
				} else m.reply(`Contoh: ${prefix + command} textnya`)
			}
			break
			case 'sc': case 'script': {
				await m.reply(`mau sc nya?, ambil di ch kenn\nhttps://whatsapp.com/channel/0029Vb6pEVXLCoX2PARoRH3m`, {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						forwardedNewsletterMessageInfo: {
							newsletterJid: my.ch,
							serverMessageId: null,
							newsletterName: 'Join For More Info'
						},
						externalAdReply: {
							title: author,
							body: 'Subscribe My YouTube',
							thumbnail: fake.thumbnail,
							mediaType: 2,
							mediaUrl: my.yt,
							sourceUrl: my.yt,
						}
					}
				})
			}
			break
			case 'donasi': case 'donate': {
				m.reply('Donasi Dapat Melalui Url Dibawah Ini :\nhttps://saweria.co/alya')
			}
			break
			
			// Group Menu
			case 'add': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					try {
						await alya.groupParticipantsUpdate(m.chat, [numbersOnly], 'add').then(async (res) => {
							for (let i of res) {
								let invv = await alya.groupInviteCode(m.chat)
								const statusMessages = {
									200: `Berhasil menambahkan @${numbersOnly.split('@')[0]} ke grup!`,
									401: 'Dia Memblokir Bot!',
									409: 'Dia Sudah Join!',
									500: 'Grup Penuh!'
								};
								if (statusMessages[i.status]) {
									return m.reply(statusMessages[i.status]);
								} else if (i.status == 408) {
									await m.reply(`@${numbersOnly.split('@')[0]} Baru-Baru Saja Keluar Dari Grub Ini!\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`)
									await m.reply(`${'https://chat.whatsapp.com/' + invv}\n------------------------------------------------------\n\nAdmin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, { detectLink: true, chat: numbersOnly, quoted: fkontak }).catch((err) => m.reply('Gagal Mengirim Undangan!'))
								} else if (i.status == 403) {
									let a = i.content.content[0].attrs
									await alya.sendGroupInvite(m.chat, numbersOnly, a.code, a.expiration, m.metadata.subject, `Admin: @${m.sender.split('@')[0]}\nMengundang anda ke group ini\nSilahkan masuk jika berkehendak🙇`, null, { mentions: [m.sender] })
									await m.reply(`@${numbersOnly.split('@')[0]} Tidak Dapat Ditambahkan\n\nKarena Target Private\n\nUndangan Akan Dikirimkan Ke\n-> wa.me/${numbersOnly.replace(/\D/g, '')}\nMelalui Jalur Pribadi`)
								} else m.reply('Gagal Add User\nStatus : ' + i.status)
							}
						})
					} catch (e) {
						m.reply('Terjadi Kesalahan! Gagal Add User')
					}
				} else m.reply(`Contoh: ${prefix + command} 62xxx`)
			}
			break
			case 'kick': case 'dor': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await alya.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 62xxx`)
			}
			break
			case 'promote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await alya.groupParticipantsUpdate(m.chat, [numbersOnly], 'promote').catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 62xxx`)
			}
			break
			case 'demote': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					await alya.groupParticipantsUpdate(m.chat, [numbersOnly], 'demote').catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} 62xxx`)
			}
			break
			case 'warn': case 'warning': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					if (!db.groups[m.chat].warn[numbersOnly]) {
						db.groups[m.chat].warn[numbersOnly] = 1
						m.reply('Peringatan 1/4, akan dikick sewaktu waktu❗')
					} else if (db.groups[m.chat].warn[numbersOnly] >= 3) {
						await alya.groupParticipantsUpdate(m.chat, [numbersOnly], 'remove').catch((err) => m.reply('Gagal!'))
						delete db.groups[m.chat].warn[numbersOnly]
					} else {
						db.groups[m.chat].warn[numbersOnly] += 1
						m.reply(`Peringatan ${db.groups[m.chat].warn[numbersOnly]}/4, akan dikick sewaktu waktu❗`)
					}
				} else m.reply(`Contoh: ${prefix + command} 62xxx`)
			}
			break
			case 'unwarn': case 'delwarn': case 'unwarning': case 'delwarning': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const numbersOnly = text ? text.replace(/\D/g, '') + '@s.whatsapp.net' : m.quoted?.sender
					if (db.groups[m.chat]?.warn?.[numbersOnly]) {
						delete db.groups[m.chat].warn[numbersOnly]
						m.reply('Berhasil Menghapus Warning!')
					}
				} else m.reply(`Contoh: ${prefix + command} 62xxx`)
			}
			break
			case 'setname': case 'setnamegc': case 'setsubject': case 'setsubjectgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const teksnya = text ? text : m.quoted.text
					await alya.groupUpdateSubject(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} textnya`)
			}
			break
			case 'setdesc': case 'setdescgc': case 'setdesk': case 'setdeskgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (text || m.quoted) {
					const teksnya = text ? text : m.quoted.text
					await alya.groupUpdateDescription(m.chat, teksnya).catch((err) => m.reply('Gagal!'))
				} else m.reply(`Contoh: ${prefix + command} textnya`)
			}
			break
			case 'setppgroups': case 'setppgrup': case 'setppgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply('Reply Gambar yang mau dipasang di Profile Bot')
				if (!/image/.test(quoted.type)) return m.reply(`Reply Image Dengan Caption ${prefix + command}`)
				let media = await alya.downloadAndSaveMediaMessage(quoted, 'ppgc.jpeg')
				if (text.length > 0) {
					let { img } = await generateProfilePicture(media)
					await alya.query({
						tag: 'iq',
						attrs: {
							target: m.chat,
							to: '@s.whatsapp.net',
							type: 'set',
							xmlns: 'w:profile:picture'
						},
						content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]
					})
					await fs.unlinkSync(media)
					m.reply('Sukses')
				} else {
					await alya.updateProfilePicture(m.chat, { url: media })
					await fs.unlinkSync(media)
					m.reply('Sukses')
				}
			}
			break
			case 'delete': case 'del': case 'd': {
				if (!m.quoted) return m.reply('Reply pesan yang mau di delete')
				await alya.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: m.isBotAdmin ? false : true, id: m.quoted.id, participant: m.quoted.sender }})
			}
			break
			case 'pin': case 'unpin': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await alya.sendMessage(m.chat, { pin: { type: command == 'pin' ? 1 : 0, time: 2592000, key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'linkgroup': case 'linkgrup': case 'linkgc': case 'urlgroup': case 'urlgrup': case 'urlgc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let response = await alya.groupInviteCode(m.chat)
				await m.reply(`https://chat.whatsapp.com/${response}\n\nLink Group : ${(store.groupMetadata[m.chat] ? store.groupMetadata[m.chat] : (store.groupMetadata[m.chat] = await alya.groupMetadata(m.chat))).subject}`, { detectLink: true })
			}
			break
			case 'revoke': case 'newlink': case 'newurl': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await alya.groupRevokeInvite(m.chat).then((a) => {
					m.reply(`Sukses Menyetel Ulang, Tautan Undangan Grup ${m.metadata.subject}`)
				}).catch((err) => m.reply('Gagal!'))
			}
			break
			case 'group': case 'grup': case 'gc': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let set = db.groups[m.chat]
				switch (args[0]?.toLowerCase()) {
					case 'close': case 'open':
					await alya.groupSettingUpdate(m.chat, args[0] == 'close' ? 'announcement' : 'not_announcement').then(a => m.reply(`*Sukses ${args[0] == 'open' ? 'Membuka' : 'Menutup'} Group*`))
					break
					case 'join':
					const _list = await alya.groupRequestParticipantsList(m.chat).then(a => a.map(b => b.jid))
					if (/(a(p|pp|cc)|(ept|rove))|true|ok/i.test(args[1]) && _list.length > 0) {
						await alya.groupRequestParticipantsUpdate(m.chat, _list, 'approve').catch(e => m.react('❌'))
					} else if (/reject|false|no/i.test(args[1]) && _list.length > 0) {
						await alya.groupRequestParticipantsUpdate(m.chat, _list, 'reject').catch(e => m.react('❌'))
					} else m.reply(`List Request Join :\n${_list.length > 0 ? '- @' + _list.join('\n- @').split('@')[0] : '*Nothing*'}\nExample : ${prefix + command} join acc/reject`)
					break
					case 'pesansementara': case 'disappearing':
					if (/90|7|1|24|on/i.test(args[1])) {
						alya.sendMessage(m.chat, { disappearingMessagesInChat: /90/i.test(args[1]) ? 7776000 : /7/i.test(args[1]) ? 604800 : 86400 })
					} else if (/0|off|false/i.test(args[1])) {
						alya.sendMessage(m.chat, { disappearingMessagesInChat: 0 })
					} else m.reply('Silahkan Pilih :\n90 hari, 7 hari, 1 hari, off')
					break
					case 'antilink': case 'antivirtex': case 'antidelete': case 'welcome': case 'antitoxic': case 'waktusholat': case 'nsfw': case 'antihidetag': case 'setinfo': case 'antitagsw': case 'leave': case 'promote': case 'demote':
					if (/on|true/i.test(args[1])) {
						if (set[args[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[args[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (/off|false/i.test(args[1])) {
						set[args[0]] = false
						m.reply('*Sukse Change To Off*')
					} else m.reply(`❗${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`)
					break
					case 'setwelcome': case 'setleave': case 'setpromote': case 'setdemote':
					if (args[1]) {
						set.text[args[0]] = args.slice(1).join(' ');
						m.reply(`Sukses Mengubah ${args[0].split('set')[1]} Menjadi:\n${set.text[args[0]]}`)
					} else m.reply(`Example:\n${prefix + command} ${args[0]} Isi Pesannya\n\nMisal Dengan tag:\n${prefix + command} ${args[0]} Kepada @\nMaka akan Menjadi:\nKepada @0\n\nMisal dengan Tag admin:\n${prefix + command} ${args[0]} Dari @admin untuk @\nMaka akan Menjadi:\nDari @${m.sender.split('@')[0]} untuk @0\n\nMisal dengan Nama grup:\n${prefix + command} ${args[0]} Dari @admin untuk @ di @subject\nMaka akan Menjadi:\nDari @${m.sender.split('@')[0]} untuk @0 di ${m.metadata.subject}`)
					break
					default:
					m.reply(`Settings Group ${m.metadata.subject}\n- open\n- close\n- join acc/reject\n- disappearing 90/7/1/off\n- antilink on/off ${set.antilink ? '🟢' : '🔴'}\n- antivirtex on/off ${set.antivirtex ? '🟢' : '🔴'}\n- antidelete on/off ${set.antidelete ? '🟢' : '🔴'}\n- welcome on/off ${set.welcome ? '🟢' : '🔴'}\n- leave on/off ${set.leave ? '🟢' : '🔴'}\n- promote on/off ${set.promote ? '🟢' : '🔴'}\n- demote on/off ${set.demote ? '🟢' : '🔴'}\n- setinfo on/off ${set.setinfo ? '🟢' : '🔴'}\n- nsfw on/off ${set.nsfw ? '🟢' : '🔴'}\n- waktusholat on/off ${set.waktusholat ? '🟢' : '🔴'}\n- antihidetag on/off ${set.antihidetag ? '🟢' : '🔴'}\n- antitagsw on/off ${set.antitagsw ? '🟢' : '🔴'}\n\n- setwelcome _textnya_\n- setleave _textnya_\n- setpromote _textnya_\n- setdemote _textnya_\n\nExample:\n${prefix + command} antilink off`)
				}
			}
			break
			case 'tagall': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				let setv = pickRandom(listv)
				let teks = `*Tag All*\n\n*Pesan :* ${q ? q : ''}\n\n`
				for (let mem of m.metadata.participants) {
					teks += `${setv} @${mem.id.split('@')[0]}\n`
				}
				await m.reply(teks, { mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'hidetag': case 'h': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				await m.reply(q ? q : '', { mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'totag': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!m.isAdmin) return m.reply(mess.admin)
				if (!m.isBotAdmin) return m.reply(mess.botAdmin)
				if (!m.quoted) return m.reply(`Reply pesan dengan caption ${prefix + command}`)
				delete m.quoted.chat
				await alya.sendMessage(m.chat, { forward: m.quoted.fakeObj, mentions: m.metadata.participants.map(a => a.id) })
			}
			break
			case 'listonline': case 'liston': {
				if (!m.isGroup) return m.reply(mess.group)
				let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
				if (!store.presences || !store.presences[id]) return m.reply('Sedang Tidak ada yang online!')
				let online = [...Object.keys(store.presences[id]), botNumber]
				await m.reply('List Online:\n\n' + online.map(v => setv + ' @' + v.replace(/@.+/, '')).join`\n`, { mentions: online }).catch((e) => m.reply('Sedang Tidak Ada Yang Online..'))
			}
			break
			
			// Bot Menu
			case 'owner': case 'listowner': {
				await alya.sendContact(m.chat, ownerNumber, m);
			}
			break
			case 'profile': case 'cek': {
				const user = Object.keys(db.users)
				const infoUser = db.users[m.sender]
				await m.reply(`*👤Profile @${m.sender.split('@')[0]}* :\n🐋User Bot : ${user.includes(m.sender) ? 'True' : 'False'}\n🔥User : ${isVip ? 'VIP' : isPremium ? 'PREMIUM' : 'FREE'}${isPremium ? `\n⏳Expired : ${checkStatus(m.sender, premium) ? formatDate(getExpired(m.sender, db.premium)) : '-'}` : ''}\n🎫Limit : ${infoUser.limit}\n💰Uang : ${infoUser ? infoUser.money.toLocaleString('id-ID') : '0'}`)
			}
			break
			case 'leaderboard': {
				const entries = Object.entries(db.users).sort((a, b) => b[1].money - a[1].money).slice(0, 10).map(entry => entry[0]);
				let teksnya = '╭──❍「 *LEADERBOARD* 」❍\n'
				for (let i = 0; i < entries.length; i++) {
					teksnya += `│• ${i + 1}. @${entries[i].split('@')[0]}\n│• Balance : ${db.users[entries[i]].money.toLocaleString('id-ID')}\n│\n`
				}
				m.reply(teksnya + '╰──────❍');
			}
			break
			case 'totalpesan': {
				let messageCount = {};
				let messages = store?.messages[m.chat]?.array || [];
				let participants = m?.metadata?.participants?.map(p => p.id) || store?.messages[m.chat]?.array?.map(p => p.key.participant) || [];
				messages.forEach(mes => {
					if (mes.key?.participant && mes.message) {
						messageCount[mes.key.participant] = (messageCount[mes.key.participant] || 0) + 1;
					}
				});
				let totalMessages = Object.values(messageCount).reduce((a, b) => a + b, 0);
				let date = new Date().toLocaleDateString('id-ID');
				let zeroMessageUsers = participants.filter(user => !messageCount[user]).map(user => `- @${user.replace(/[^0-9]/g, '')}`);
				let messageList = Object.entries(messageCount).map(([sender, count], index) => `${index + 1}. @${sender.replace(/[^0-9]/g, '')}: ${count} Pesan`);
				let result = `Total Pesan ${totalMessages} dari ${participants.length} anggota\nPada tanggal ${date}:\n${messageList.join('\n')}\n\nNote: ${text.length > 0 ? `\n${zeroMessageUsers.length > 0 ? `Sisa Anggota yang tidak mengirim pesan (Sider):\n${zeroMessageUsers.join('\n')}` : 'Semua anggota sudah mengirim pesan!'}` : `\nCek Sider? ${prefix + command} --sider`}`;
				m.reply(result)
			}
			break
			case 'req': case 'request': {
				if (!text) return m.reply('Mau Request apa ke Owner?')
				await m.reply(`*Request Telah Terkirim Ke Owner*\n_Terima Kasih🙏_`)
				await alya.sendFromOwner(ownerNumber, `Pesan Dari : @${m.sender.split('@')[0]}\nUntuk Owner\n\nRequest ${text}`, m, { contextInfo: { mentionedJid: [m.sender], isForwarded: true }})
			}
			break
			case 'totalfitur': {
				const total = ((fs.readFileSync('./alya.js').toString()).match(/case '/g) || []).length
				m.reply(`Total Fitur : ${total}`);
			}
			break
			case 'daily': case 'claim': {
				daily(m, db)
			}
			break
			case 'transfer': case 'tf': {
				transfer(m, args, db)
			}
			break
			case 'buy': {
				buy(m, args, db)
			}
			break
			case 'react': {
				alya.sendMessage(m.chat, { react: { text: args[0], key: m.quoted ? m.quoted.key : m.key }})
			}
			break
			case 'tagme': {
				m.reply(`@${m.sender.split('@')[0]}`, { mentions: [m.sender] })
			}
			break
			case 'runtime': case 'tes': case 'bot': {
				switch(args[0]) {
					case 'mode': case 'public': case 'self':
					if (!isCreator) return m.reply(mess.owner)
					if (args[1] == 'public' || args[1] == 'all') {
						if (alya.public && set.grouponly && set.privateonly) return m.reply('*Sudah Aktif Sebelumnya*')
						alya.public = set.public = true
						set.grouponly = true
						set.privateonly = true
						m.reply('*Sukse Change To Public Usage*')
					} else if (args[1] == 'self') {
						set.grouponly = false
						set.privateonly = false
						alya.public = set.public = false
						m.reply('*Sukse Change To Self Usage*')
					} else if (args[1] == 'group') {
						set.grouponly = true
						set.privateonly = false
						m.reply('*Sukse Change To Group Only*')
					} else if (args[1] == 'private') {
						set.grouponly = false
						set.privateonly = true
						m.reply('*Sukse Change To Private Only*')
					} else m.reply('Mode self/public/group/private/all')
					break
					case 'anticall': case 'autobio': case 'autoread': case 'autotyping': case 'readsw': case 'multiprefix': case 'antispam':
					if (!isCreator) return m.reply(mess.owner)
					if (args[1] == 'on') {
						if (set[args[0]]) return m.reply('*Sudah Aktif Sebelumnya*')
						set[args[0]] = true
						m.reply('*Sukse Change To On*')
					} else if (args[1] == 'off') {
						set[args[0]] = false
						m.reply('*Sukse Change To Off*')
					} else m.reply(`${args[0].charAt(0).toUpperCase() + args[0].slice(1)} on/off`)
					break
					case 'set': case 'settings':
					let settingsBot = Object.entries(set).map(([key, value]) => {
						let list = key == 'status' ? new Date(value).toLocaleString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) : (typeof value === 'boolean') ? (value ? 'on🟢' : 'off🔴') : value;
						return `- ${key.charAt(0).toUpperCase() + key.slice(1)} : ${list}`;
					}).join('\n');
					m.reply(`Settings Bot @${botNumber.split('@')[0]}\n${settingsBot}\n\nExample: ${prefix + command} mode`);
					break
					default:
					if (args[0] || args[1]) m.reply(`*Please Sellect Settings :*\n- Mode : *${prefix + command} mode self/public*\n- Anti Call : *${prefix + command} anticall on/off*\n- Auto Bio : *${prefix + command} autobio on/off*\n- Auto Read : *${prefix + command} autoread on/off*\n- Auto Typing : *${prefix + command} autotyping on/off*\n- Read Sw : *${prefix + command} readsw on/off*\n- Multi Prefix : *${prefix + command} multiprefix on/off*`)
				}
				if (!args[0] && !args[1]) return m.reply(`*Bot Telah Online Selama*\n*${runtime(process.uptime())}*`)
			}
			break
			case 'ping': case 'botstatus': case 'statusbot': {
				const used = process.memoryUsage()
				const cpus = os.cpus().map(cpu => {
					cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
					return cpu
				})
				const cpu = cpus.reduce((last, cpu, _, { length }) => {
					last.total += cpu.total
					last.speed += cpu.speed / length
					last.times.user += cpu.times.user
					last.times.nice += cpu.times.nice
					last.times.sys += cpu.times.sys
					last.times.idle += cpu.times.idle
					last.times.irq += cpu.times.irq
					return last
				}, {
					speed: 0,
					total: 0,
					times: {
						user: 0,
						nice: 0,
						sys: 0,
						idle: 0,
						irq: 0
					}
				})
				let timestamp = speed()
				let latensi = speed() - timestamp
				neww = performance.now()
				oldd = performance.now()
				respon = `Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}\n\n💻 Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\n_NodeJS Memory Usaage_\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `_Total CPU Usage_\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\n_CPU Core(s) Usage (${cpus.length} Core CPU)_\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
				m.reply(respon)
			}
			break
			case 'speedtest': case 'speed': {
				m.reply('Testing Speed...')
				let cp = require('child_process')
				let { promisify } = require('util')
				let exec = promisify(cp.exec).bind(cp)
				let o
				try {
					o = await exec('python3 speed.py --share')
				} catch (e) {
					o = e
				} finally {
					let { stdout, stderr } = o
					if (stdout.trim()) m.reply(stdout)
					if (stderr.trim()) m.reply(stderr)
				}
			}
			break
			case 'afk': {
				let user = db.users[m.sender]
				user.afkTime = + new Date
				user.afkReason = text
				m.reply(`@${m.sender.split('@')[0]} Telah Afk${text ? ': ' + text : ''}`)
			}
			break
			case 'readviewonce': case 'readviewone': case 'rvo': {
				if (!m.quoted) return m.reply(`Reply view once message\nExample: ${prefix + command}`)
				try {
					if (m.quoted.msg.viewOnce) {
						delete m.quoted.chat
						m.quoted.msg.viewOnce = false
						await m.reply({ forward: m.quoted })
					} else m.reply(`Reply view once message\nExample: ${prefix + command}`)
				} catch (e) {
					m.reply('Media Tidak Valid!')
				}
			}
			break
			case 'inspect': {
				if (!text) return m.reply('Masukkan Link Grup atau Saluran!')
				let _grup = /chat.whatsapp.com\/([\w\d]*)/;
				let _saluran = /whatsapp\.com\/channel\/([\w\d]*)/;
				if (_grup.test(text)) {
					await alya.groupGetInviteInfo(text.match(_grup)[1]).then((_g) => {
						let teks = `*[ INFORMATION GROUP ]*\n\nName Group: ${_g.subject}\nGroup ID: ${_g.id}\nCreate At: ${new Date(_g.creation * 1000).toLocaleString()}${_g.owner ? ('\nCreate By: ' + _g.owner) : '' }\nLinked Parent: ${_g.linkedParent}\nRestrict: ${_g.restrict}\nAnnounce: ${_g.announce}\nIs Community: ${_g.isCommunity}\nCommunity Announce:${_g.isCommunityAnnounce}\nJoin Approval: ${_g.joinApprovalMode}\nMember Add Mode: ${_g.memberAddMode}\nDescription ID: ${'`' + _g.descId + '`'}\nDescription: ${_g.desc}\nParticipants:\n`
						_g.participants.forEach((a) => {
							teks += a.admin ? `- Admin: @${a.id.split('@')[0]} [${a.admin}]\n` : ''
						})
						m.reply(teks)
					}).catch((e) => {
						if ([400, 406].includes(e.data)) return m.reply('Grup Tidak Di Temukan❗');
						if (e.data == 401) return m.reply('Bot Di Kick Dari Grup Tersebut❗');
						if (e.data == 410) return m.reply('Url Grup Telah Di Setel Ulang❗');
					});
				} else if (_saluran.test(text) || text.endsWith('@newsletter') || !isNaN(text)) {
					await alya.newsletterMsg(text.match(_saluran)[1]).then((n) => {
						m.reply(`*[ INFORMATION CHANNEL ]*\n\nID: ${n.id}\nState: ${n.state.type}\nName: ${n.thread_metadata.name.text}\nCreate At: ${new Date(n.thread_metadata.creation_time * 1000).toLocaleString()}\nSubscriber: ${n.thread_metadata.subscribers_count}\nVerification: ${n.thread_metadata.verification}\nDescription: ${n.thread_metadata.description.text}\n`)
					}).catch((e) => m.reply('Saluran Tidak Di Temukan❗'))
				} else m.reply('Hanya Support Url Grup atau Saluran!')
			}
			break
			case 'addmsg': {
				if (!m.quoted) return m.reply('Reply Pesan Yang Ingin Disave Di Database')
				if (!text) return m.reply(`Example : ${prefix + command} file name`)
				let msgs = db.database
				if (text.toLowerCase() in msgs) return m.reply(`'${text}' telah terdaftar di list pesan`)
				msgs[text.toLowerCase()] = m.quoted
				delete msgs[text.toLowerCase()].chat
				m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'\nAkses dengan ${prefix}getmsg ${text}\nLihat list Pesan Dengan ${prefix}listmsg`)
			}
			break
			case 'delmsg': case 'deletemsg': {
				if (!text) return m.reply('Nama msg yg mau di delete?')
				let msgs = db.database
				if (text == 'allmsg') {
					db.database = {}
					m.reply('Berhasil menghapus seluruh msg dari list pesan')
				} else {
					if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
					delete msgs[text.toLowerCase()]
					m.reply(`Berhasil menghapus '${text}' dari list pesan`)
				}
			}
			break
			case 'getmsg': {
				if (!text) return m.reply(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
				let msgs = db.database
				if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar di list pesan`)
				await alya.relayMessage(m.chat, msgs[text.toLowerCase()], {})
			}
			break
			case 'listmsg': {
				let seplit = Object.entries(db.database).map(([nama, isi]) => { return { nama, message: getContentType(isi) }})
				let teks = '「 LIST DATABASE 」\n\n'
				for (let i of seplit) {
					teks += `${setv} *Name :* ${i.nama}\n${setv} *Type :* ${i.message?.replace(/Message/i, '')}\n───────────────\n`
				}
				m.reply(teks)
			}
			break
			case 'setcmd': case 'addcmd': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing!')
				if (!text) return m.reply(`Example : ${prefix + command} CMD Name`)
				let hash = m.quoted.fileSha256.toString('base64')
				if (global.db.cmd[hash] && global.db.cmd[hash].locked) return m.reply('You have no permission to change this sticker command')
				global.db.cmd[hash] = {
					creator: m.sender,
					locked: false,
					at: + new Date,
					text
				}
				m.reply('Done!')
			}
			break
			case 'delcmd': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing!')
				let hash = m.quoted.fileSha256.toString('base64')
				if (global.db.cmd[hash] && global.db.cmd[hash].locked) return m.reply('You have no permission to change this sticker command')
				delete global.db.cmd[hash];
				m.reply('Done')
			}
			break
			case 'listcmd': {
				let teks = `*List Hash*\nInfo: *bold* hash is Locked\n${Object.entries(global.db.cmd).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}`.trim()
				alya.sendText(m.chat, teks, m);
			}
			break
			case 'lockcmd': case 'unlockcmd': {
				if (!isCreator) return m.reply(mess.owner)
				if (!m.quoted) return m.reply('Reply Pesannya!')
				if (!m.quoted.fileSha256) return m.reply('SHA256 Hash Missing!')
				let hash = m.quoted.fileSha256.toString('base64')
				if (!(hash in global.db.cmd)) return m.reply('You have no permission to change this sticker command')
				global.db.cmd[hash].locked = !/^un/i.test(command)
			}
			break
			case 'q': case 'quoted': {
				if (!m.quoted) return m.reply('Reply Pesannya!')
				if (text) {
					delete m.quoted.chat
					await m.reply({ forward: m.quoted })
				} else {
					const anu = await m.getQuotedObj()
					if (!anu) return m.reply('Format Tidak Tersedia!')
					if (!anu.quoted) return m.reply('Pesan Yang Anda Reply Tidak Mengandung Reply')
					await alya.relayMessage(m.chat, { [anu.quoted.type]: anu.quoted.msg }, {})
				}
			}
			break
			case 'confes': case 'confess': case 'menfes': case 'menfess': {
				if (!isLimit) return m.reply(mess.limit)
				if (m.isGroup) return m.reply(mess.private)
				if (menfes[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return m.reply(`Example : ${prefix + command} 62xxxx|Nama Samaran`)
				let [teks1, teks2] = text.split`|`
				if (teks1) {
					const tujuan = teks1.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
					const onWa = await alya.onWhatsApp(tujuan)
					if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
					menfes[m.sender] = {
						tujuan: tujuan,
						nama: teks2 ? teks2 : 'Orang'
					};
					menfes[tujuan] = {
						tujuan: m.sender,
						nama: 'Penerima',
					};
					const timeout = setTimeout(() => {
						if (menfes[m.sender]) {
							m.reply(`_Waktu ${command} habis_`);
							delete menfes[m.sender];
						}
						if (menfes[tujuan]) {
							alya.sendMessage(tujuan, { text: `_Waktu ${command} habis_` });
							delete menfes[tujuan];
						}
						menfesTimeouts.delete(m.sender);
						menfesTimeouts.delete(tujuan);
					}, 600000);
					menfesTimeouts.set(m.sender, timeout);
					menfesTimeouts.set(tujuan, timeout);
					alya.sendMessage(tujuan, { text: `_${command} connected_\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_` });
					m.reply(`_Memulai ${command}..._\n*Silahkan Mulai kirim pesan/media*\n*Durasi ${command} hanya selama 10 menit*\n*Note :* jika ingin mengakhiri ketik _*${prefix}del${command}*_`)
					setLimit(m, db)
				} else m.reply(`Masukkan Nomernya!\nExample : ${prefix + command} 62xxxx|Nama Samaran`)
			}
			break
			case 'delconfes': case 'delconfess': case 'delmenfes': case 'delmenfess': {
				if (!menfes[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				let anu = menfes[m.sender]
				if (menfesTimeouts.has(m.sender)) {
					clearTimeout(menfesTimeouts.get(m.sender));
					menfesTimeouts.delete(m.sender);
				}
				if (menfesTimeouts.has(anu.tujuan)) {
					clearTimeout(menfesTimeouts.get(anu.tujuan));
					menfesTimeouts.delete(anu.tujuan);
				}
				alya.sendMessage(anu.tujuan, { text: `Chat Di Akhiri Oleh ${anu.nama ? anu.nama : 'Seseorang'}` })
				m.reply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete menfes[anu.tujuan];
				delete menfes[m.sender];
			}
			break
			case 'cai': case 'roomai': case 'chatai': case 'autoai': {
				if (m.isGroup) return m.reply(mess.private)
				if (chat_ai[m.sender]) return m.reply(`Kamu Sedang Berada Di Sesi ${command}!`)
				if (!text) return m.reply(`Example: ${prefix + command} halo ngab\nWith Prompt: ${prefix + command} halo ngab|Kamu adalah assisten yang siap membantu dalam hal apapun yang ku minta.\n\nUntuk Menghapus room: ${prefix + 'del' + command}`)
				let [teks1, teks2] = text.split`|`
				chat_ai[m.sender] = [{ role: 'system', content: teks2 || '' }, { role: 'user', content: text.split`|` ? teks1 : text || '' }]
				let hasil;
				try {
					hasil = await gptLogic(chat_ai[m.sender], budy)
				} catch (e) {
					hasil = await yanzGpt(chat_ai[m.sender])
				}
				const response = hasil?.choices?.[0]?.message?.content || hasil || 'Maaf, saya tidak mengerti.';
				chat_ai[m.sender].push({ role: 'assistant', content: response });
				await m.reply(response)
			}
			break
			case 'delcai': case 'delroomai': case 'delchatai': case 'delautoai': {
				if (!chat_ai[m.sender]) return m.reply(`Kamu Tidak Sedang Berada Di Sesi ${command.split('del')[1]}!`)
				m.reply(`Sukses Mengakhiri Sesi ${command.split('del')[1]}!`)
				delete chat_ai[m.sender];
			}
			break
			case 'jadibot': {
				if (!isPremium) return m.reply(mess.prem)
				if (!isLimit) return m.reply(mess.limit)
				const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
				const onWa = await alya.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				await JadiBot(alya, nmrnya, m, store)
				m.reply(`Gunakan ${prefix}stopjadibot\nUntuk Berhenti`)
				setLimit(m, db)
			}
			break
			case 'stopjadibot': case 'deljadibot': {
				const nmrnya = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.sender
				const onWa = await alya.onWhatsApp(nmrnya)
				if (!onWa.length > 0) return m.reply('Nomer Tersebut Tidak Terdaftar Di Whatsapp!')
				await StopJadiBot(alya, nmrnya, m)
			}
			break
			case 'listjadibot': {
				ListJadiBot(alya, m)
			}
			break
			
			// Tools Menu
			case 'fetch': case 'get': {
				if (!isPremium) return m.reply(mess.prem)
				if (!isLimit) return m.reply(mess.limit)
				if (!/^https?:\/\//.test(text)) return m.reply('Awali dengan http:// atau https://');
				try {
					const res = await axios.get(isUrl(text) ? isUrl(text)[0] : text)
					if (!/text|json|html|plain/.test(res.headers['content-type'])) {
						await m.reply(text)
					} else m.reply(util.format(res.data))
					setLimit(m, db)
				} catch (e) {
					m.reply(String(e))
				}
			}
			break
			case 'toaud': case 'toaudio': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await m.reply({ audio: audio, mimetype: 'audio/mpeg'})
			}
			break
			case 'tomp3': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toAudio(media, 'mp4')
				await m.reply({ document: audio, mimetype: 'audio/mpeg', fileName: `Convert By Alya-Chan Bot.mp3`})
			}
			break
			case 'tovn': case 'toptt': case 'tovoice': {
				if (!/video|audio/.test(mime)) return m.reply(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
				m.reply(mess.wait)
				let media = await quoted.download()
				let audio = await toPTT(media, 'mp4')
				await m.reply({ audio: audio, mimetype: 'audio/ogg; codecs=opus', ptt: true })
			}
			break
			case 'togif': {
				if (!/webp|video/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await alya.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.gif')}`;
				exec(`convert ${media} ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					m.reply({ video: buffer, gifPlayback: true })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toimage': case 'toimg': {
				if (!/webp|video|image/.test(mime)) return m.reply(`Reply Video/Stiker dengan caption *${prefix + command}*`)
				m.reply(mess.wait)
				let media = await alya.downloadAndSaveMediaMessage(qmsg)
				let ran = `./database/sampah/${getRandom('.png')}`;
				exec(`convert ${media}[0] ${ran}`, (err) => {
					fs.unlinkSync(media)
					if (err) return m.reply('Gagal❗')
					let buffer = fs.readFileSync(ran)
					m.reply({ image: buffer })
					fs.unlinkSync(ran)
				})
			}
			break
			case 'toptv': {
				if (!/video/.test(mime)) return m.reply(`Kirim/Reply Video Yang Ingin Dijadikan PTV Message Dengan Caption ${prefix + command}`)
				if ((m.quoted ? m.quoted.type : m.type) === 'videoMessage') {
					const anu = await quoted.download()
					const message = await generateWAMessageContent({ video: anu }, { upload: alya.waUploadToServer })
					await alya.relayMessage(m.chat, { ptvMessage: message.videoMessage }, {})
				} else m.reply('Reply Video Yang Mau Di Ubah Ke PTV Message!')
			}
			break
			case 'tourl': {
    let q = m.quoted ? m.quoted : m;
    let mime = q.mimetype || q?.msg?.mimetype || '';

    let fileBuffer, fileName;

    if (q?.fileSha256 || q?.isMedia || mime) {
        await m.reply('📥 Mengunduh file...');

        try {
            fileBuffer = await q.download?.() || await alya.downloadMediaMessage?.(q);
        } catch (e) {
            return m.reply('❌ Gagal mendownload media.');
        }

        // Gunakan "datenow.jpg" jika mime adalah gambar
        if (/image\/(jpeg|png|jpg|webp)/.test(mime)) {
            fileName = 'datenow.jpg';
        } else {
            const ext = mime ? mime.split('/')[1].split(';')[0] : 'bin';
            fileName = `upload-${Date.now()}.${ext}`;
        }
    } else if (q?.text && q.text !== m.text) {
        fileBuffer = Buffer.from(q.text, 'utf-8');
        fileName = `text-${Date.now()}.txt`;
    } else {
        return m.reply('📎 Balas media (gambar, dokumen, dsb) atau teks. Jangan hanya ketik *tourl* tanpa media.');
    }

    const tmpDir = path.resolve('./tmp');
    if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

    const filepath = path.join(tmpDir, fileName);
    fs.writeFileSync(filepath, fileBuffer);

    try {
        const form = new FormData();
        form.append('file', fs.createReadStream(filepath));

        const res = await axios.post('https://upload-github.vercel.app/api/upload', form, {
            headers: form.getHeaders(),
        });

        const { url, raw_url } = res.data;

        if (!url || !raw_url) throw new Error('❌ Gagal mendapatkan URL dari server.');

        await m.reply(`✅ *Upload Berhasil!*
📁 *Nama:* ${fileName}
🔗 *URL:* ${raw_url}
🌐 *Host:* githubusercontent.com`);
    } catch (err) {
        await m.reply(`❌ Gagal upload:\n${err.message}`);
    } finally {
        if (fs.existsSync(filepath)) fs.unlinkSync(filepath);
    }
}
break
			case 'texttospech': case 'tts': case 'tospech': {
				if (!text) return m.reply('Mana text yg mau diubah menjadi audio?')
				let { tts } = require('./lib/tts')
				let anu = await tts(text)
				m.reply({ audio: anu, ptt: true, mimetype: 'audio/mpeg' })
			}
			break
			case 'translate': case 'tr': {
				if (text && text == 'list') {
					let list_tr = `╭──❍「 *Kode Bahasa* 」❍\n│• af : Afrikaans\n│• ar : Arab\n│• zh : Chinese\n│• en : English\n│• en-us : English (United States)\n│• fr : French\n│• de : German\n│• hi : Hindi\n│• hu : Hungarian\n│• is : Icelandic\n│• id : Indonesian\n│• it : Italian\n│• ja : Japanese\n│• ko : Korean\n│• la : Latin\n│• no : Norwegian\n│• pt : Portuguese\n│• pt : Portuguese\n│• pt-br : Portuguese (Brazil)\n│• ro : Romanian\n│• ru : Russian\n│• sr : Serbian\n│• es : Spanish\n│• sv : Swedish\n│• ta : Tamil\n│• th : Thai\n│• tr : Turkish\n│• vi : Vietnamese\n╰──────❍`;
					m.reply(list_tr)
				} else {
					if (!m.quoted && (!text|| !args[1])) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
					let lang = args[0] ? args[0] : 'id'
					let teks = args[1] ? args.slice(1).join(' ') : m.quoted.text
					try {
						let hasil = await translate(teks, { to: lang, autoCorrect: true })
						m.reply(`To : ${lang}\n${hasil[0]}`)
					} catch (e) {
						m.reply(`Lang *${lang}* Tidak Di temukan!\nSilahkan lihat list, ${prefix + command} list`)
					}
				}
			}
			break
			case 'toqr': case 'qr': {
				if (!text) return m.reply(`Ubah Text ke Qr dengan *${prefix + command}* textnya`)
				m.reply(mess.wait)
				await m.reply({ image: { url: 'https://api.qrserver.com/v1/create-qr-code/?size=1000x1000&data=' + text }, caption: 'Nih Bro' })
			}
			break
			case 'tohd': case 'remini': case 'hd': {
				if (!isLimit) return m.reply(mess.limit)
				if (/image/.test(mime)) {
					try {
						let media = await quoted.download()
						let hasil = await remini(media, 'enhance')
						m.reply({ image: hasil, caption: 'Done' })
						setLimit(m, db)
					} catch (e) {
						let media = await alya.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.jpg')}`;
						const scaleFactor = isNaN(parseInt(text)) ? 4 : parseInt(text) < 10 ? parseInt(text) : 4;
						exec(`ffmpeg -i "${media}" -vf "scale=iw*${scaleFactor}:ih*${scaleFactor}:flags=lanczos" -q:v 1 "${ran}"`, async (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(String(err))
							let buff = fs.readFileSync(ran)
							await alya.sendMedia(m.chat, buff, '', 'Done', m);
							fs.unlinkSync(ran)
							setLimit(m, db)
						});
					}
				} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
			}
			break
			case 'dehaze': case 'colorize': case 'colorfull': {
				if (!isLimit) return m.reply(mess.limit)
				if (/image/.test(mime)) {
					let media = await quoted.download()
					remini(media, 'dehaze').then(a => {
						m.reply({ image: a, caption: 'Done' })
						setLimit(m, db)
					}).catch(e => m.reply('Server sedang offline!'));
				} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
			}
			break
			case 'hitamkan': case 'toblack': {
				if (!isLimit) return m.reply(mess.limit)
				if (/image/.test(mime)) {
					let media = await quoted.download()
					hitamkan(media, 'hitam').then(a => {
						m.reply({ image: a, caption: 'Done' })
						setLimit(m, db)
					}).catch(e => m.reply('Server sedang offline!'));
				} else m.reply(`Kirim/Reply Gambar dengan format\nExample: ${prefix + command}`)
			}
			break
			case 'ssweb': {
				if (!isPremium) return m.reply(mess.prem)
				if (!text) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/alya-md`)
				try {
					let anu = 'https://' + text.replace(/^https?:\/\//, '')
					await m.reply({ image: { url: 'https://image.thum.io/get/width/1900/crop/1000/fullpage/' + anu }, caption: 'Done' })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server SS web Sedang Offline!')
				}
			}
			break
			case 'readmore': {
				let teks1 = text.split`|`[0] ? text.split`|`[0] : ''
				let teks2 = text.split`|`[1] ? text.split`|`[1] : ''
				m.reply(teks1 + readmore + teks2)
			}
			break
			case 'getexif': {
				if (!m.quoted) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`)
				if (!/sticker|webp/.test(quoted.type)) return m.reply(`Reply sticker\nDengan caption ${prefix + command}`)
				const img = new webp.Image()
				await img.load(await m.quoted.download())
				m.reply(util.format(JSON.parse(img.exif.slice(22).toString())))
			}
			break
			case 'cuaca': case 'weather': {
				if (!text) return m.reply(`Example: ${prefix + command} jakarta`)
				try {
					let data = await fetchJson(`https://api.openweathermap.org/data/2.5/weather?q=${text}&units=metric&appid=060a6bcfa19809c2cd4d97a212b19273&language=en`)
					m.reply(`*🏙 Cuaca Kota ${data.name}*\n\n*🌤️ Cuaca :* ${data.weather[0].main}\n*📝 Deskripsi :* ${data.weather[0].description}\n*🌡️ Suhu Rata-rata :* ${data.main.temp} °C\n*🤔 Terasa Seperti :* ${data.main.feels_like} °C\n*🌬️ Tekanan :* ${data.main.pressure} hPa\n*💧 Kelembapan :* ${data.main.humidity}%\n*🌪️ Kecepatan Angin :* ${data.wind.speed} Km/h\n*📍Lokasi :*\n- *Bujur :* ${data.coord.lat}\n- *Lintang :* ${data.coord.lon}\n*🌏 Negara :* ${data.sys.country}`)
				} catch (e) {
					m.reply('Kota Tidak Di Temukan!')
				}
			}
			break
			case 'sticker': case 'stiker': case 's': case 'stickergif': case 'stikergif': case 'sgif': case 'stickerwm': case 'swm': case 'curi': case 'colong': case 'take': case 'stickergifwm': case 'sgifwm': {
				if (!/image|video|sticker/.test(quoted.type)) return m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Image/Video/Gif 1-9 Detik`)
				let media = await quoted.download()
				let teks1 = text.split`|`[0] ? text.split`|`[0] : packname
				let teks2 = text.split`|`[1] ? text.split`|`[1] : author
				if (/image|webp/.test(mime)) {
					m.reply(mess.wait)
					await alya.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else if (/video/.test(mime)) {
					if ((qmsg).seconds > 11) return m.reply('Maksimal 10 detik!')
					m.reply(mess.wait)
					await alya.sendAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
				} else m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
			}
			break
			case 'smeme': case 'stickmeme': case 'stikmeme': case 'stickermeme': case 'stikermeme': {
				try {
					//if (!isPremium) return m.reply(mess.prem)
					if (!isLimit) return m.reply(mess.limit)
					if (!/image|webp/.test(mime)) return m.reply(`Kirim/reply image/sticker\nDengan caption ${prefix + command} atas|bawah`)
					if (!text) return m.reply(`Kirim/reply image/sticker dengan caption ${prefix + command} atas|bawah`)
					m.reply(mess.wait)
					let atas = text.split`|`[0] ? text.split`|`[0] : '-'
					let bawah = text.split`|`[1] ? text.split`|`[1] : '-'
					let media = await quoted.download()
					let mem = await UguuSe(media)
					let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${mem.url}`
					await alya.sendAsSticker(m.chat, smeme, m, { packname, author })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Meme Sedang Offline!')
				}
			}
			break
			case 'emojimix': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} 😅+🤔`)
				let [emoji1, emoji2] = text.split`+`
				if (!emoji1 && !emoji2) return m.reply(`Example: ${prefix + command} 😅+🤔`)
				try {
					let anu = await axios.get(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
					if (anu.data.results.length < 1) return m.reply(`Mix Emoji ${text} Tidak Ditemukan!`)
					for (let res of anu.data.results) {
						await alya.sendAsSticker(m.chat, res.url, m, { packname, author })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal Mix Emoji!')
				}
			}
			break
			case 'qc': case 'quote': case 'fakechat': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && !m.quoted) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					let ppnya = await alya.profilePictureUrl(m.sender, 'image').catch(() => 'https://i.pinimg.com/564x/8a/e9/e9/8ae9e92fa4e69967aa61bf2bda967b7b.jpg');
					let res = await quotedLyo(text, m.pushName, ppnya);
					await alya.sendAsSticker(m.chat, Buffer.from(res.result.image, 'base64'), m, { packname, author })
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Create Sedang Offline!')
				}
			}
			break
			case 'brat': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				try {
					await alya.sendAsSticker(m.chat, 'https://aqul-brat.hf.space/?text=' + encodeURIComponent(text || m.quoted.text), m)
					setLimit(m, db)
				} catch (e) {
					m.reply('Server Brat Sedang Offline!')
				}
			}
			break
			case 'bratvid': case 'bratvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text && (!m.quoted || !m.quoted.text)) return m.reply(`Kirim/reply pesan *${prefix + command}* Teksnya`)
				const teks = (m.quoted ? m.quoted.text : text).split(' ');
				const tempDir = path.join(process.cwd(), 'database/sampah');
				try {
					const framePaths = [];
					for (let i = 0; i < teks.length; i++) {
						const currentText = teks.slice(0, i + 1).join(' ');
						let res = await getBuffer('https://aqul-brat.hf.space/?text=' + encodeURIComponent(currentText));
						const framePath = path.join(tempDir, `${m.sender + i}.mp4`);
						fs.writeFileSync(framePath, res);
						framePaths.push(framePath);
					}
					const fileListPath = path.join(tempDir, `${m.sender}.txt`);
					let fileListContent = '';
					for (let i = 0; i < framePaths.length; i++) {
						fileListContent += `file '${framePaths[i]}'\n`;
						fileListContent += `duration 0.5\n`;
					}
					fileListContent += `file '${framePaths[framePaths.length - 1]}'\n`;
					fileListContent += `duration 3\n`;
					fs.writeFileSync(fileListPath, fileListContent);
					const outputVideoPath = path.join(tempDir, `${m.sender}-output.mp4`);
					execSync(`ffmpeg -y -f concat -safe 0 -i ${fileListPath} -vf 'fps=30' -c:v libx264 -preset veryfast -pix_fmt yuv420p -t 00:00:10 ${outputVideoPath}`);
					alya.sendAsSticker(m.chat, outputVideoPath, m, { packname, author })
					framePaths.forEach((filePath) => fs.unlinkSync(filePath));
					fs.unlinkSync(fileListPath);
					fs.unlinkSync(outputVideoPath);
					setLimit(m, db)
				} catch (e) {
					m.reply('Terjadi Kesalahan Saat Memproses Permintaan!')
				}
			}
			break
			case 'wasted': {
				if (!isLimit) return m.reply(mess.limit)
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await alya.sendFileUrl(m.chat, 'https://some-random-api.com/canvas/wasted?avatar=' + anu.url, 'Nih Bro', m)
						setLimit(m, db)
					} else m.reply('Send Media yg ingin di Upload!')
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'trigger': case 'triggered': {
				if (!isLimit) return m.reply(mess.limit)
				try {
					if (/jpg|jpeg|png/.test(mime)) {
						m.reply(mess.wait)
						let media = await quoted.download()
						let anu = await UguuSe(media)
						await m.reply({ document: { url: 'https://some-random-api.com/canvas/triggered?avatar=' + anu.url }, fileName: 'triggered.gif', mimetype: 'image/gif' })
						setLimit(m, db)
					} else m.reply('Send Media yg ingin di Upload!')
				} catch (e) {
					m.reply('Server Canvas Sedang Offline!')
				}
			}
			break
			case 'nulis': {
				m.reply(`*Example*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)
			}
			break
			case 'nuliskiri': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+140+153',
					fixHeight,
					'./src/nulis/images/buku/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					m.reply({ image: fs.readFileSync('./src/nulis/images/buku/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
					setLimit(m, db)
				})
			}
			break
			case 'nuliskanan': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 31).join('\n')
				spawn('convert', [
					'./src/nulis/images/buku/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'960x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'2',
					'-annotate',
					'+128+129',
					fixHeight,
					'./src/nulis/images/buku/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					m.reply({ image: fs.readFileSync('./src/nulis/images/buku/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
					setLimit(m, db)
				})
			}
			break
			case 'foliokiri': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkiri.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+48+185',
					fixHeight,
					'./src/nulis/images/folio/setelahkiri.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					m.reply({ image: fs.readFileSync('./src/nulis/images/folio/setelahkiri.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
					setLimit(m, db)
				})
			}
			break
			case 'foliokanan': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Kirim perintah *${prefix + command}* Teksnya`)
				m.reply(mess.wait)
				const splitText = text.replace(/(\S+\s*){1,9}/g, '$&\n')
				const fixHeight = splitText.split('\n').slice(0, 38).join('\n')
				spawn('convert', [
					'./src/nulis/images/folio/sebelumkanan.jpg',
					'-font',
					'./src/nulis/font/Indie-Flower.ttf',
					'-size',
					'1720x1280',
					'-pointsize',
					'23',
					'-interline-spacing',
					'4',
					'-annotate',
					'+89+190',
					fixHeight,
					'./src/nulis/images/folio/setelahkanan.jpg'
				])
				.on('error', () => m.reply(mess.error))
				.on('exit', () => {
					m.reply({ image: fs.readFileSync('./src/nulis/images/folio/setelahkanan.jpg'), caption: 'Jangan Malas Lord. Jadilah siswa yang rajin ರ_ರ' })
					setLimit(m, db)
				})
			}
			break
			case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai': {
				try {
					let set;
					if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
					if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
					if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
					if (/earrape/.test(command)) set = '-af volume=12'
					if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
					if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
					if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
					if (/reverse/.test(command)) set = '-filter_complex "areverse"'
					if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
					if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
					if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
					if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
					if (/audio/.test(mime)) {
						m.reply(mess.wait)
						let media = await alya.downloadAndSaveMediaMessage(qmsg)
						let ran = `./database/sampah/${getRandom('.mp3')}`;
						exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
							fs.unlinkSync(media)
							if (err) return m.reply(err)
							let buff = fs.readFileSync(ran)
							m.reply({ audio: buff, mimetype: 'audio/mpeg' })
							fs.unlinkSync(ran)
						});
					} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'tinyurl': case 'shorturl': case 'shortlink': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text || !isUrl(text)) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/hitori`)
				try {
					let anu = await axios.get('https://tinyurl.com/api-create.php?url=' + text)
					m.reply('Url : ' + anu.data)
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			case 'git': case 'gitclone': {
				if (!isLimit) return m.reply(mess.limit)
				if (!args[0]) return m.reply(`Example: ${prefix + command} https://github.com/nazedev/hitori`)
				if (!isUrl(args[0]) && !args[0].includes('github.com')) return m.reply('Gunakan Url Github!')
				let [, user, repo] = args[0].match(/(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i) || []
				try {
					m.reply({ document: { url: `https://api.github.com/repos/${user}/${repo}/zipball` }, fileName: repo + '.zip', mimetype: 'application/zip' }).catch((e) => m.reply(mess.error))
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal!')
				}
			}
			break
			
			// Ai Menu
			case 'ai': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
					const res = await gptScrape(text);
    return m.reply(res);
    }
			break
			case 'simi': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					const hasil = await simi(text)
					m.reply(hasil.success)
				} catch (e) {
					m.reply('Server simi sedang offline!')
				}
			}
			break
			case 'bard': case 'gemini': case 'aiedit': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} tanggal berapa sekarang?`)
				if (!(APIKeys.geminiApikey?.length > 0 && APIKeys.geminiApikey?.some(a => a.trim() !== ''))) return m.reply('Silahkan Ambil Apikey Terlebih dahulu di\nhttps://aistudio.google.com/app/apikey')
				try {
					let apinya = pickRandom(APIKeys.geminiApikey)
					geminiAi(text, apinya, quoted.isMedia ? { mime: quoted.mime, media: await quoted.download() } : {}).then(a => {
						if (a.media) alya.sendMedia(m.chat, a.media, '', a.text || '', m)
						else if (a.text) m.reply(a.text)
					}).catch(e => {
						if (e.status === 503) m.reply('Model Gemini sedang sibuk, coba beberapa saat lagi...')
						else if (e.status === 400) m.reply('API key not valid. Please pass a valid API key.')
						else m.reply('Apikeymu limit atau terjadi error lain!')
					})
					setLimit(m, db)
				} catch (e) {
					m.reply('Apikeymu limit!\nSilahkan Ganti dengan apikey lain!')
				}
			}
			break
			
			// Search Menu
			case 'google': {
    if (!text) return m.reply('🔍 Masukkan *kata kunci* yang ingin dicari.');

    try {
        const response = await axios.post('https://google.serper.dev/search', {
            q: text
        }, {
            headers: {
                'X-API-KEY': 'd246d57cfe2f11f6c25146732ad853b982048ce3', // Ganti dengan API key kamu
                'Content-Type': 'application/json'
            }
        });

        const results = response.data.results;
        if (!results || results.length === 0) return m.reply('❌ Tidak ada hasil ditemukan.');

        let teks = `🔎 *Hasil Google untuk:* ${text}\n\n`;
        for (let i = 0; i < Math.min(results.length, 5); i++) {
            const item = results[i];
            teks += `*${i + 1}. ${item.title}*\n${item.link}\n${item.snippet || ''}\n\n`;
        }

        await m.reply(teks.trim());
    } catch (e) {
        console.error(e);
        await m.reply('❌ Gagal melakukan pencarian Google. Coba lagi nanti.');
    }
}
break
			case 'gimage': case 'bingimg': {
				if (!text) return m.reply(`Example: ${prefix + command} query`)
				try {
					let anu = await fetchApi('/search/bing', { query: text });
					let una = pickRandom(anu.result)
					await m.reply({ image: { url: una }, caption: 'Hasil Pencarian ' + text })
					setLimit(m, db)
				} catch (e) {
					m.reply('Pencarian Tidak Ditemukan!')
				}
			}
			break
			case 'yts': case 'ytsearch': case 'youtubesearch': {
				if (!text) return m.reply(`Example: ${prefix + command} dj komang`)
				m.reply(mess.wait)
				try {
					const res = await yts.search(text);
					const hasil = pickRandom(res.all)
					const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author?.name || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.seconds || 'Tidak tersedia'} second (${hasil.timestamp || 'Tidak tersedia'})\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
					await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya })
				} catch (e) {
					try {
						const nvl = new NvlGroup();
						let anu = await nvl.search(text);
						let hasil = pickRandom(anu.videos)
						let teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Upload At:* ${hasil.uploaded || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.author || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.duration || 'Tidak tersedia'}\n*🔎Source:* ${hasil.url || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
						await m.reply({ image: { url: hasil.thumbnail }, caption: teksnya })
					} catch (e) {
						try {
							const res = await fetchApi('/search/youtube', { query: text });
							const hasil = pickRandom(res.data)
							const teksnya = `*📍Title:* ${hasil.title || 'Tidak tersedia'}\n*✏Description:* ${hasil.description || 'Tidak tersedia'}\n*🌟Channel:* ${hasil.channelTitle || 'Tidak tersedia'}\n*⏳Duration:* ${hasil.duration || 'Tidak tersedia'}\n*🔎Source:* https://youtu.be/${hasil.id || 'Tidak tersedia'}\n\n_note : jika ingin mendownload silahkan_\n_pilih ${prefix}ytmp3 url_video atau ${prefix}ytmp4 url_video_`;
							await m.reply({ image: { url: hasil.thumbMedium }, caption: teksnya })
						} catch (e) {
							m.reply('Post not available!')
						}
					}
				}
			}
			break
			case 'play': case 'ytplay': {
			if (!text) return m.reply(`Masukkan judul video!\n\nContoh:\n.${command} lathi`);
const youtube = google.youtube({
            version: 'v3',
            auth: 'AIzaSyA6rcAS8Nu5NK3Oqxk2biiWVjT0TMfmPwk',
        });
        const res = await youtube.search.list({
            part: 'snippet',
            q: text,
            type: 'video',
            maxResults: 1,
            order: 'relevance',
        });

        if (!res.data.items || res.data.items.length === 0) {
            return m.reply('❌ Tidak ada hasil yang ditemukan.');
        }

        const video = res.data.items[0];
        const videoId = video.id.videoId;
        const title = video.snippet.title;
        const channel = video.snippet.channelTitle;
        const publishedAt = new Date(video.snippet.publishedAt).toLocaleDateString();
        const thumbnail = video.snippet.thumbnails.high.url;
        const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;

        const caption = `
🌟✨ *YOUTUBE MAGIC PLAYER* ✨🌟

📣 *JUDUL KONTEN:* _${title}_
🏷️ *CHANNEL KEREN:* _${channel}_
🗓️ *TANGGAL RILIS:* _${publishedAt}_

🎉 Pilih mode unduhan yang kamu suka:
🔊 *Audio Only* 🎧
🎥 *Full Video* 🎞️

👇 Klik formatnya, jangan malu-malu 👇
`.trim();

        const buttons = [{
                buttonId: `.ytmp3 ${videoUrl}`,
                buttonText: {
                    displayText: 'Audio 🎧'
                },
                type: 1
            },
            {
                buttonId: `.ytmp4 ${videoUrl}`,
                buttonText: {
                    displayText: 'Video 🎞️'
                },
                type: 1
            }
        ];

        await alya.sendMessage(m.chat, {
            image: {
                url: thumbnail
            },
            caption,
            footer: botname,
            buttons,
            headerType: 4
        }, {
            quoted: m
        });
        }
			case 'pixiv': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let { pixivdl } = require('./lib/pixiv')
					let res = await pixivdl(text)
					m.reply(mess.wait)
					for (let i = 0; i < res.media.length; i++) {
						let caption = i == 0 ? `${res.caption}\n\n*By:* ${res.artist}\n*Tags:* ${res.tags.join(', ')}` : ''
						let mime = (await FileType.fromBuffer(res.media[i])).mime 
						await m.reply({ [mime.split('/')[0]]: res.media[i], caption, mimetype: mime })
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Post not available!')
				}
			}
			break
			case 'pinterest': case 'pint': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await pinterest(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await m.reply({ image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` })
						setLimit(m, db)
					}
				} catch (e) {
					try {
						const res = await fetchApi('/search/pinterest', { query: text });
						const hasil = pickRandom(res.data.result.pins)
						await m.reply({ image: { url: hasil.media.images.orig.url }, caption: `*Media Url :* ${hasil.media.images.orig.url}${hasil.pin_url ? '\n*Source :* ' + hasil.pin_url : ''}` })
						setLimit(m, db)
					} catch (e) {
						m.reply('Pencarian tidak ditemukan!');
					}
				}
			}
			break
			case 'wallpaper': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} hu tao`)
				try {
					let anu = await wallpaper(text)
					let result = pickRandom(anu)
					if (anu.length < 1) {
						m.reply('Post not available!');
					} else {
						await m.reply({ image: { url: result.image[0] }, caption: `⭔ title : ${q}\n⭔ category : ${result.type}\n⭔ media url : ${result.image[2] || result.image[1] || result.image[0]}`})
						setLimit(m, db)
					}
				} catch (e) {
					try {
						let anu = await pinterest('wallpaper ' + text)
						let result = pickRandom(anu)
						if (anu.length < 1) {
							m.reply('Post not available!');
						} else {
							await m.reply({ image: { url: result.images_url }, caption: `*Media Url :* ${result.pin}${result.link ? '\n*Source :* ' + result.link : ''}` })
							setLimit(m, db)
						}
					} catch (e) {
						m.reply('Server wallpaper sedang offline!')
					}
				}
			}
			break
			case 'ringtone': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} black rover`)
				try {
					let anu = await ringtone(text)
					let result = pickRandom(anu)
					await m.reply({ audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' })
					setLimit(m, db)
				} catch (e) {
					m.reply('Audio tidak ditemukan!')
				}
			}
			break
			case 'npm': case 'npmjs': {
				if (!text) return m.reply(`Example: ${prefix + command} axios`)
				try {
					let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
					let { objects } = await res.json()
					if (!objects.length) return m.reply('Pencarian Tidak di temukan')
					let txt = objects.map(({ package: pkg }) => {
						return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Pencarian Tidak di temukan')
				}
			}
			break
			case 'style': {
				if (!text) return m.reply(`Example: ${prefix + command} AlyaChan`)
				let anu = await styletext(text)
				let txt = anu.map(a => `*${a.name}*\n${a.result}`).join`\n\n`
				m.reply(txt)
			}
			break
			case 'spotify': case 'spotifysearch': {
				if (!text) return m.reply(`Example: ${prefix + command} alan walker alone`)
				try {
					let hasil = await fetchJson('https://www.bhandarimilan.info.np/spotisearch?query=' + encodeURIComponent(text));
					let txt = hasil.map(a => {
						return `*Name : ${a.name}*\n- Artist : ${a.artist}\n- Url : ${a.link}`
					}).join`\n\n`
					m.reply(txt)
				} catch (e) {
					m.reply('Server Search Offline!')
				}
			}
			break
			case 'tenor': {
				if (!text) return m.reply(`Example: ${prefix + command} alone`)
				try {
					const anu = await fetchJson('https://g.tenor.com/v1/search?q=' + text + '&key=LIVDSRZULELA')
					const hasil = pickRandom(anu.results)
					await m.reply({ video: { url: hasil.media[0].mp4.url }, caption: `👀 *Media:* ${hasil.url}\n📋 *Description:* ${hasil.content_description}\n🔛 *Url:* ${hasil.itemurl}`, gifPlayback: true, gifAttribution: 2 })
				} catch (e) {
					m.reply('Hasil Tidak Ditemukan!')
				}
			}
			break
			case 'urban': {
				if (!text) return m.reply(`Example: ${prefix + command} alone`)
				try {
					const anu = await fetchJson('https://api.urbandictionary.com/v0/define?term=' + text)
					const hasil = pickRandom(anu.list)
					await m.reply(`${hasil.definition}\n\nSumber: ${hasil.permalink}`)
				} catch (e) {
					m.reply('Hasil Tidak Ditemukan!')
				}
			}
			break
			
			// Stalker Menu
			case 'igstalk': case 'instagramstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					let anu = await instaStalk(text)
					m.reply({ image: { url: anu.avatar }, caption: `*Username :* ${anu.username}\n*Nickname :* ${anu.nickname}\n*Bio :* ${anu.description}\n*Posts :* ${anu.posts}\n*Followers :* ${anu.followers}\n*Following :* ${anu.following}\n*List Post :* ${anu.list_post.map(a => `\n*Url :* ${a.imageUrl}\n*Description :* ${a.description}\n*Detail :* ${a.detailUrl}`).join('\n')}` })
				} catch (e) {
					try {
						let res = await fetchApi('/stalk/instagram', { username: text });
						m.reply({ image: { url: res.data.profile_picture_url }, caption: `*Username :*${res.data?.username || 'Tidak Ada'}\n*Nickname :*${res.data?.full_name || 'Tidak Ada'}\n*ID :*${res.data?.instagram_id}\n*Followers :*${res.data?.followers || '0'}\n*Following :*${res.data?.following || '0'}\n*Description :*${res.data?.description || 'Tidak Ada'}\n*Website :*${res.data?.website || 'Tidak Ada'}\n*Add At :*${res.data?.added_date}\n*Uploads :*${res.data?.uploads}\n*Verified :*${res.data?.is_verified}\n*Private :*${res.data.is_private}\n` })
					} catch (e) {
						m.reply('Username Tidak ditemukan!')
					}
				}
			}
			break
			case 'wastalk': case 'whatsappstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} @tag / 628xxx`)
				try {
					let num = m.quoted?.sender || m.mentionedJid?.[0] || text
					if (!num) return m.reply(`Example : ${prefix + command} @tag / 628xxx`)
					num = num.replace(/\D/g, '') + '@s.whatsapp.net'
					if (!(await alya.onWhatsApp(num))[0]?.exists) return m.reply('Nomer tidak terdaftar di WhatsApp!')
					let img = await alya.profilePictureUrl(num, 'image').catch(_ => 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60')
					let bio = await alya.fetchStatus(num).catch(_ => { })
					let name = await alya.getName(num)
					let business = await alya.getBusinessProfile(num)
					let format = PhoneNum(`+${num.split('@')[0]}`)
					let regionNames = new Intl.DisplayNames(['en'], { type: 'region' });
					let country = regionNames.of(format.getRegionCode('international'));
					let wea = `WhatsApp Stalk\n\n*° Country :* ${country.toUpperCase()}\n*° Name :* ${name ? name : '-'}\n*° Format Number :* ${format.getNumber('international')}\n*° Url Api :* wa.me/${num.split('@')[0]}\n*° Mentions :* @${num.split('@')[0]}\n*° Status :* ${bio?.status || '-'}\n*° Date Status :* ${bio?.setAt ? moment(bio.setAt.toDateString()).locale('id').format('LL') : '-'}\n\n${business ? `*WhatsApp Business Stalk*\n\n*° BusinessId :* ${business.wid}\n*° Website :* ${business.website ? business.website : '-'}\n*° Email :* ${business.email ? business.email : '-'}\n*° Category :* ${business.category}\n*° Address :* ${business.address ? business.address : '-'}\n*° Timeone :* ${business.business_hours.timezone ? business.business_hours.timezone : '-'}\n*° Description* : ${business.description ? business.description : '-'}` : '*Standard WhatsApp Account*'}`
					img ? await alya.sendMessage(m.chat, { image: { url: img }, caption: wea, mentions: [num] }, { quoted: m }) : m.reply(wea)
				} catch (e) {
					m.reply('Nomer Tidak ditemukan!')
				}
			}
			break
			case 'telestalk': case 'telegramstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await telegramStalk(text)
					if (!res.description || res.title.startsWith('Telegram: Contact')) throw 'Error'
					m.reply({ image: { url: res.image_url }, caption: `*Username :* ${text}\n*Nickname :* ${res.title || 'Tidak ada'}\n*Desc :* ${res.description || 'Tidak ada'}\n*Url :* ${res.url}`})
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			case 'tiktokstalk': case 'ttstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await tiktokStalk(text)
					m.reply({ image: { url: res.avatarThumb }, caption: `*Username :* ${text}\n*Nickname :* ${res.nickname}\n*Followers :* ${res.followerCount}\n*Following :* ${res.followingCount}\n*Bio :* ${res.signature}\n*Verified :* ${res.verified}\n*Video Count :* ${res.videoCount}\n*Heart Count :* ${res.heartCount}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			case 'genshinstalk': case 'gistalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} idnya`)
				try {
					const res = await genshinStalk(text)
					m.reply({ image: { url: res.image }, caption: `*Genshin profile*\n- *ID :* ${res.uid}\n- *Nickname :* ${res.nickname}\n- *Signature :* ${res.signature}\n- *Level :* ${res.level}\n- *World Level :* ${res.world_level}\n- *Achivement :* ${res.achivement}\n- *Spiral Abyss :* ${res.spiral_abyss}\n- *Ttl :* ${res.ttl}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			case 'ghstalk': case 'githubstalk': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const res = await fetchJson('https://api.github.com/users/' + text)
					m.reply({ image: { url: res.avatar_url }, caption: `*Username :* ${res.login}\n*Nickname :* ${res.name || 'Tidak ada'}\n*Bio :* ${res.bio || 'Tidak ada'}\n*ID :* ${res.id}\n*Node ID :* ${res.node_id}\n*Type :* ${res.type}\n*Admin :* ${res.admin ? 'Ya' : 'Tidak'}\n*Company :* ${res.company || 'Tidak ada'}\n*Blog :* ${res.blog || 'Tidak ada'}\n*Location :* ${res.location || 'Tidak ada'}\n*Email :* ${res.email || 'Tidak ada'}\n*Public Repo :* ${res.public_repos}\n*Public Gists :* ${res.public_gists}\n*Followers :* ${res.followers}\n*Following :* ${res.following}\n*Created At :* ${res.created_at} *Updated At :* ${res.updated_at}` })
				} catch (e) {
					m.reply('Username Tidak ditemukan!')
				}
			}
			break
			
			// Downloader Menu
			case 'ytmp3': case 'ytaudio': case 'ytplayaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const api = `https://ndikz-api.vercel.app/download/ytmp3?url=${encodeURIComponent(text)}`;
        const {
            data
        } = await axios.get(api);

        if (!data?.status || !data?.download) {
            return m.reply("❌ Gagal mendapatkan data dari API.");
        }

        const title = data.title || "audio";
        const downloadURL = data.download;

        // 2. Setup path
        const tmpDir = path.resolve('./tmp');
        if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir);

        const inputPath = path.join(tmpDir, `yt-${Date.now()}.raw`);
        const outputPath = path.join(tmpDir, `yt-${Date.now()}.mp3`);

        // 3. Download stream dari API ke file mentah
        const writer = fs.createWriteStream(inputPath);
        const response = await axios.get(downloadURL, {
            responseType: 'stream'
        });
        await new Promise((resolve, reject) => {
            response.data.pipe(writer);
            writer.on("finish", resolve);
            writer.on("error", reject);
        });

        // 4. Convert dengan ffmpeg
        await new Promise((resolve, reject) => {
            spawn("ffmpeg", ["-i", inputPath, "-vn", "-acodec", "libmp3lame", outputPath])
                .on("error", reject)
                .on("close", resolve);
        });

        // 5. Kirim hasilnya
        const buffer = fs.readFileSync(outputPath);
        await alya.sendMessage(m.chat, {
            audio: buffer,
            mimetype: "audio/mpeg",
            fileName: `${title}.mp3`
        }, {
            quoted: m
        });

        // 6. Cleanup
        fs.unlinkSync(inputPath);
        fs.unlinkSync(outputPath);
				} catch (e) {
					m.reply("SorryMang eror")
					}
				}
			break
			case 'ytmp4': case 'ytvideo': case 'ytplayvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_youtube`)
				if (!text.includes('youtu')) return m.reply('Url Tidak Mengandung Result Dari Youtube!')
				m.reply(mess.wait)
				try {
					const api = `https://ndikz-api.vercel.app/download/ytmp4?url=${encodeURIComponent(text)}`;
        const {
            data
        } = await axios.get(api);

        if (!data.status || !data.download) return m.reply("❌ Gagal mengambil video.");

        const videoUrl = data.download;
        const tmpDir = path.resolve('./tmp');
        if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, {
            recursive: true
        });

        const outputPath = path.join(tmpDir, `yt-${Date.now()}.mp4`);
        const response = await axios.get(videoUrl, {
            responseType: 'stream'
        });
        const writer = fs.createWriteStream(outputPath);

        await new Promise((resolve, reject) => {
            response.data.pipe(writer);
            writer.on("finish", resolve);
            writer.on("error", reject);
        });

        const buffer = fs.readFileSync(outputPath);

        await alya.sendMessage(m.chat, {
            video: buffer,
            caption: `🎬 *${data.title}*`,
            fileName: `${data.title}.mp4`,
            mimetype: "video/mp4"
        }, {
            quoted: m
        });

        fs.unlinkSync(outputPath);
				} catch (e) {
				   m.reply("MaafMang eror")
				}
			}
			break
			case 'ig': case 'instagram': case 'instadl': case 'igdown': case 'igdl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_instagram`)
				if (!text.includes('instagram.com')) return m.reply('Url Tidak Mengandung Result Dari Instagram!')
				m.reply(mess.wait)
				try {
					const hasil = await instagramDl(text);
					if(hasil.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
					for (let i = 0; i < hasil.length; i++) {
						await alya.sendFileUrl(m.chat, hasil[i].url, 'Done', m)
					}
					setLimit(m, db)
				} catch (e) {
					try {
						let hasil = await fetchApi('/download/instagram', { url: text })
						if(hasil.result.url.length < 0) return m.reply('Postingan Tidak Tersedia atau Privat!')
						for (let i = 0; i < hasil.result.url.length; i++) {
							await alya.sendFileUrl(m.chat, hasil.result.url[i], 'Done', m)
						}
						setLimit(m, db)
					} catch (e) {
						m.reply('Postingan Tidak Tersedia atau Privat!')
					}
				}
			}
			break
			case 'igstory': case 'instagramstory': case 'instastory': case 'storyig': {
				if (!text) return m.reply(`Example: ${prefix + command} usernamenya`)
				try {
					const hasil = await instaStory(text);
					m.reply(mess.wait)
					for (let i = 0; i < hasil.results.length; i++) {
						await alya.sendFileUrl(m.chat, hasil.results[i].url, 'Done', m)
					}
				} catch (e) {
					m.reply('Username tidak ditemukan atau Privat!');
				}
			}
			break
			case 'tiktok': case 'tiktokdown': case 'ttdown': case 'ttdl': case 'tt': case 'ttmp4': case 'ttvideo': case 'tiktokmp4': case 'tiktokvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					if (hasil && hasil.size_nowm) {
						await alya.sendFileUrl(m.chat, hasil.data[1].url, `*📍Title:* ${hasil.title}\n*⏳Duration:* ${hasil.duration}\n*🎃Author:* ${hasil.author.nickname} (@${hasil.author.fullname})`, m)
					} else {
						for (let i = 0; i < hasil.data.length; i++) {
							await alya.sendFileUrl(m.chat, hasil.data[i].url, `*🚀Image:* ${i+1}`, m)
						}
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'ttmp3': case 'tiktokmp3': case 'ttaudio': case 'tiktokaudio': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_tiktok`)
				if (!text.includes('tiktok.com')) return m.reply('Url Tidak Mengandung Result Dari Tiktok!')
				try {
					const hasil = await tiktokDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.music_info.url },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: 'TikTok • ' + hasil.author.nickname,
								body: hasil.stats.likes + ' suka, ' + hasil.stats.comment + ' komentar. ' + hasil.title,
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					m.reply('Gagal/Url tidak valid!')
				}
			}
			break
			case 'fb': case 'fbdl': case 'fbdown': case 'facebook': case 'facebookdl': case 'facebookdown': case 'fbdownload': case 'fbmp4': case 'fbvideo': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} url_facebook`)
				if (!text.includes('facebook.com')) return m.reply('Url Tidak Mengandung Result Dari Facebook!')
				try {
					const hasil = await facebookDl(text);
					if (hasil.results.length < 1) {
						m.reply('Video Tidak ditemukan!')
					} else {
						m.reply(mess.wait)
						await alya.sendFileUrl(m.chat, hasil.results[0].url, `*🎐Title:* ${hasil.caption}`, m);
					}
					setLimit(m, db)
				} catch (e) {
					m.reply('Server downloader facebook sedang offline!')
				}
			}
			break
			case 'mf':
case 'mediafire': {
    if (!text) return m.reply('🔗 Kirim link Mediafire!\nContoh:\n.mf https://www.mediafire.com/file/xxxx');

    if (!text.includes('mediafire.com')) return m.reply('❌ Itu bukan link Mediafire yang valid.');

    try {
        const res = await axios.get(`https://api.ryzumi.vip/api/downloader/mediafire`, {
            params: { url: text }
        });

        const anu = res.data;

        if (!anu.status || !anu.data?.downloadUrl) {
            return m.reply('❌ Gagal mendapatkan informasi file dari Mediafire.');
        }

        // Variabel tambahan untuk label dekoratif
        const setv = '🔹';

        await alya.sendMedia(
            m.chat,
            anu.data.downloadUrl,
            anu.data.filename,
            `*MEDIAFIRE DOWNLOADER*\n\n*${setv} Name* : ${anu.data.filename}\n*${setv} Size* : ${anu.data.filesize}`,
            m
        );
    } catch (e) {
        console.error(e);
        m.reply('❌ Terjadi kesalahan saat mengambil data Mediafire.');
    }
    }
    break
			case 'spotifydl': {
				if (!isLimit) return m.reply(mess.limit)
				if (!text) return m.reply(`Example: ${prefix + command} https://open.spotify.com/track/0JiVRyTJcJnmlwCZ854K4p`)
				if (!isUrl(args[0]) && !args[0].includes('open.spotify.com/track')) return m.reply('Url Invalid!')
				try {
					const hasil = await spotifyDl(text);
					m.reply(mess.wait)
					await m.reply({
						audio: { url: hasil.download },
						mimetype: 'audio/mpeg',
						contextInfo: {
							externalAdReply: {
								title: hasil.title,
								body: clockString(hasil.duration),
								previewType: 'PHOTO',
								thumbnailUrl: hasil.cover,
								mediaType: 1,
								renderLargerThumbnail: true,
								sourceUrl: text
							}
						}
					})
					setLimit(m, db)
				} catch (e) {
					console.log(e)
					m.reply('Server download sedang offline!')
				}
			}
			break
			
			// Quotes Menu
			case 'motivasi': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/motivasi.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'bijak': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bijak.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'dare': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/dare.json');
				m.reply(pickRandom(hasil))
			}
			break
			case 'quotes': {
				const res = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/quotes.json');
				const hasil = pickRandom(res);
				m.reply(`_${hasil.quotes}_\n\n*- ${hasil.author}*`)
			}
			break
			case 'truth': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/truth.json');
				m.reply(`_${pickRandom(hasil)}_`)
			}
			break
			case 'renungan': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/renungan.json');
				m.reply('', {
					contextInfo: {
						forwardingScore: 10,
						isForwarded: true,
						externalAdReply: {
							title: (m.pushName || 'Anonim'),
							thumbnailUrl: pickRandom(hasil),
							mediaType: 1,
							previewType: 'PHOTO',
							renderLargerThumbnail: true,
						}
					}
				});
			}
			break
			case 'bucin': {
				const hasil = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/kata-kata/bucin.json');
				m.reply(pickRandom(hasil))
			}
			break
			
			// Random Menu
			case 'coffe': case 'kopi': {
				try {
					await alya.sendFileUrl(m.chat, 'https://coffee.alexflipnote.dev/random', '☕ Random Coffe', m)
				} catch (e) {
					try {
						const anu = await fetchJson('https://api.sampleapis.com/coffee/hot')
						await alya.sendFileUrl(m.chat, pickRandom(anu).image, '☕ Random Coffe', m)
					} catch (e) {
						m.reply('Server Sedang Offline!')
					}
				}
			}
			break
			
			// Anime Menu
			case 'waifu': case 'neko': {
			const jumlahGambar = 8;
    const picked = [];
				try {
					for (let i = 0; i < jumlahGambar; i++) {
        try {
            const res = await fetch(`https://ndikz-api.vercel.app/random/${command}`);
            const buffer = await res.buffer();
            picked.push({
                buffer,
                directLink: 'https://bluearchive.jp'
            });
        } catch (e) {
            console.error('Gagal fetch:', e.message);
        }
    }

    const carouselCards = await Promise.all(picked.map(async (item, index) => ({
        header: {
            title: `🎀 ${command} #${index + 1}`,
            hasMediaAttachment: true,
            imageMessage: (await generateWAMessageContent({
                image: item.buffer
            }, {
                upload: alya.waUploadToServer
            })).imageMessage
        },
        body: {
            text: `🖼️ Gambar ${command} ke-${index + 1}`
        },
        footer: {
            text: 'Geser untuk melihat lainnya'
        },
        nativeFlowMessage: {
            buttons: [{
                name: 'cta_url',
                buttonParamsJson: JSON.stringify({
                    display_text: '🌐 Kunjungi Situs',
                    url: item.directLink
                })
            }]
        }
    })));

    const carousel = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                interactiveMessage: proto.Message.InteractiveMessage.fromObject({
                    body: {
                        text: `💠 Berikut adalah ${command} yang kamu minta~`
                    },
                    footer: {
                        text: `📷 Total: ${jumlahGambar} gambar`
                    },
                    carouselMessage: {
                        cards: carouselCards
                    }
                })
            }
        }
    }, {
        quoted: m
    });

    await alya.relayMessage(m.chat, carousel.message, {
        messageId: carousel.key.id
    });
					setLimit(m, db)
				} catch (e) {
					m.reply('Server sedang offline!')
				}
			}
			break
			
			// Fun Menu
			case 'dadu': {
				let ddsa = [{ url: 'https://telegra.ph/file/9f60e4cdbeb79fc6aff7a.png', no: 1 },{ url: 'https://telegra.ph/file/797f86e444755282374ef.png', no: 2 },{ url: 'https://telegra.ph/file/970d2a7656ada7c579b69.png', no: 3 },{ url: 'https://telegra.ph/file/0470d295e00ebe789fb4d.png', no: 4 },{ url: 'https://telegra.ph/file/a9d7332e7ba1d1d26a2be.png', no: 5 },{ url: 'https://telegra.ph/file/99dcd999991a79f9ba0c0.png', no: 6 }]
				let media = pickRandom(ddsa)
				try {
					await alya.sendAsSticker(m.chat, media.url, m, { packname, author, isAvatar: 1 })
				} catch (e) {
					let anu = await fetch(media.url)
					let una = await anu.buffer()
					await alya.sendAsSticker(m.chat, una, m, { packname, author, isAvatar: 1 })
				}
			}
			break
			case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
				if (!m.quoted && !text) return m.reply(`Kirim/reply text dengan caption ${prefix + command}`)
				ter = command[1].toLowerCase()
				tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
				m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
			}
			break
			case 'bisakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let bisa = ['Bisa','Coba Saja','Pasti Bisa','Mungkin Saja','Tidak Bisa','Tidak Mungkin','Coba Ulangi','Ngimpi kah?','yakin bisa?']
				let keh = bisa[Math.floor(Math.random() * bisa.length)]
				m.reply(`*Bisakah ${text}*\nJawab : ${keh}`)
			}
			break
			case 'apakah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya bisa menang?`)
				let apa = ['Iya','Tidak','Bisa Jadi','Coba Ulangi','Mungkin Saja','Mungkin Tidak','Mungkin Iya','Ntahlah']
				let kah = apa[Math.floor(Math.random() * apa.length)]
				m.reply(`*${command} ${text}*\nJawab : ${kah}`)
			}
			break
			case 'kapan': case 'kapankah': {
				if (!text) return m.reply(`Example : ${prefix + command} saya menang?`)
				let kapan = ['Besok','Lusa','Nanti','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi','Bulan Depan','Ntahlah','Tidak Akan Pernah']
				let koh = kapan[Math.floor(Math.random() * kapan.length)]
				m.reply(`*${command} ${text}*\nJawab : ${koh}`)
			}
			break
			case 'siapa': case 'siapakah': {
				if (!m.isGroup) return m.reply(mess.group)
				if (!text) return m.reply(`Example : ${prefix + command} jawa?`)
				let member = (store.groupMetadata[m.chat] ? store.groupMetadata[m.chat].participants : m.metadata.participants).map(a => a.id)
				let siapakh = pickRandom(member)
				m.reply(`@${siapakh.split('@')[0]}`);
			}
			break
			case 'tanyakerang': case 'kerangajaib': case 'kerang': {
				if (!text) return m.reply(`Example : ${prefix + command} boleh pinjam 100?`)
				let krng = ['Mungkin suatu hari', 'Tidak juga', 'Tidak keduanya', 'Kurasa tidak', 'Ya', 'Tidak', 'Coba tanya lagi', 'Tidak ada']
				let jwb = pickRandom(krng)
				m.reply(`*Pertanyaan : ${text}*\n*Jawab : ${jwb}*`)
			}
			break
			case 'cekmati': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				let teksnya = text.replace(/@|[\uD800-\uDBFF][\uDC00-\uDFFF]/g, '').replace(/\d/g, '');
				let data = await axios.get(`https://api.agify.io/?name=${teksnya ? teksnya : 'bot'}`).then(res => res.data).catch(e => ({ age: Math.floor(Math.random() * 90) + 20 }));
				m.reply(`Nama : ${text}\n*Mati Pada Umur :* ${data.age == null ? (Math.floor(Math.random() * 90) + 20) : data.age} Tahun.\n\n_Cepet Cepet Tobat Bro_\n_Soalnya Mati ga ada yang tau_`)
			}
			break
			case 'ceksifat': {
				let sifat_a = ['Bijak','Sabar','Kreatif','Humoris','Mudah bergaul','Mandiri','Setia','Jujur','Dermawan','Idealis','Adil','Sopan','Tekun','Rajin','Pemaaf','Murah hati','Ceria','Percaya diri','Penyayang','Disiplin','Optimis','Berani','Bersyukur','Bertanggung jawab','Bisa diandalkan','Tenang','Kalem','Logis']
				let sifat_b = ['Sombong','Minder','Pendendam','Sensitif','Perfeksionis','Caper','Pelit','Egois','Pesimis','Penyendiri','Manipulatif','Labil','Penakut','Vulgar','Tidak setia','Pemalas','Kasar','Rumit','Boros','Keras kepala','Tidak bijak','Pembelot','Serakah','Tamak','Penggosip','Rasis','Ceroboh','Intoleran']
				let teks = `╭──❍「 *Cek Sifat* 」❍\n│• Sifat ${text && m.mentionedJid ? text : '@' + m.sender.split('@')[0]}${(text && m.mentionedJid ? '' : (`\n│• Nama : *${text ? text : m.pushName}*` || '\n│• Nama : *Tanpa Nama*'))}\n│• Orang yang : *${pickRandom(sifat_a)}*\n│• Kekurangan : *${pickRandom(sifat_b)}*\n│• Keberanian : *${Math.floor(Math.random() * 100)}%*\n│• Kepedulian : *${Math.floor(Math.random() * 100)}%*\n│• Kecemasan : *${Math.floor(Math.random() * 100)}%*\n│• Ketakutan : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Baik : *${Math.floor(Math.random() * 100)}%*\n│• Akhlak Buruk : *${Math.floor(Math.random() * 100)}%*\n╰──────❍`
				m.reply(teks)
			}
			break
			case 'cekkhodam': {
				if (!text) return m.reply(`Example : ${prefix + command} nama lu`)
				try {
					const res = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/cekkhodam.json');
					const hasil = pickRandom(res);
					m.reply(`Khodam dari *${text}* adalah *${hasil.nama}*\n_${hasil.deskripsi}_`)
				} catch (e) {
					m.reply(pickRandom(['Dokter Indosiar','Sigit Rendang','Ustadz Sinetron','Bocil epep']))
				}
			}
			break
			case 'rate': case 'nilai': {
				m.reply(`Rate Bot : *${Math.floor(Math.random() * 100)}%*`)
			}
			break
			case 'jodohku': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata?.[m.chat]?.participants || m.metadata?.participants || []).map(a => a.id)
				let jodoh = pickRandom(member)
				m.reply(`👫Jodoh mu adalah\n@${m.sender.split('@')[0]} ❤ @${jodoh ? jodoh.split('@')[0] : '0'}`);
			}
			break
			case 'jadian': {
				if (!m.isGroup) return m.reply(mess.group)
				let member = (store.groupMetadata?.[m.chat]?.participants || m.metadata?.participants || []).map(a => a.id)
				let jadian1 = pickRandom(member)
				let jadian2 = pickRandom(member)
				m.reply(`Ciee yang Jadian💖 Jangan lupa Donasi🗿\n@${jadian1.split('@')[0]} ❤ @${jadian2.split('@')[0]}`);
			}
			break
			case 'fitnah': {
				let [teks1, teks2, teks3] = text.split`|`
				if (!teks1 || !teks2 || !teks3) return m.reply(`Example : ${prefix + command} pesan target|pesan mu|nomer/tag target`)
				let ftelo = { key: { fromMe: false, participant: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net', ...(m.isGroup ? { remoteJid: m.chat } : { remoteJid: teks3.replace(/[^0-9]/g, '') + '@s.whatsapp.net'})}, message: { conversation: teks1 }}
				alya.sendMessage(m.chat, { text: teks2 }, { quoted: ftelo });
			}
			break
			case 'coba': {
				let anu = ['Aku Monyet','Aku Kera','Aku Tolol','Aku Kaya','Aku Dewa','Aku Anjing','Aku Dongo','Aku Raja','Aku Sultan','Aku Baik','Aku Hitam','Aku Suki']
				await alya.sendButtonMsg(m.chat, {
					text: 'Semoga Hoki😹',
					buttons: [{
						buttonId: 'teshoki',
						buttonText: { displayText: '\n' + pickRandom(anu)},
						type: 1
					},{
						buttonId: 'cobacoba',
						buttonText: { displayText: '\n' + pickRandom(anu)},
						type: 1
					}]
				})
			}
			break
			
			// Game Menu
			case 'slot': {
				await gameSlot(alya, m, db)
			}
			break
			case 'casino': {
				await gameCasinoSolo(alya, m, prefix, db)
			}
			break
			case 'samgong': case 'kartu': {
				await gameSamgongSolo(alya, m, db)
			}
			break
			case 'rampok': case 'merampok': {
				await gameMerampok(m, db)
			}
			break
			case 'begal': {
				await gameBegal(alya, m, db)
			}
			break
			case 'suitpvp': case 'suit': {
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return m.reply(`Selesaikan suit mu yang sebelumnya`)
				if (m.mentionedJid[0] === m.sender) return m.reply(`Tidak bisa bermain dengan diri sendiri !`)
				if (!m.mentionedJid[0]) return m.reply(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${ownerNumber[0]}`, m.chat, { mentions: [ownerNumber[1] + '@s.whatsapp.net'] })
				if (Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) return m.reply(`Orang yang kamu tantang sedang bermain suit bersama orang lain :(`)
				let caption = `_*SUIT PvP*_\n\n@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit\n\nSilahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
				let id = 'suit_' + Date.now();
				suit[id] = {
					chat: caption,
					id: id,
					p: m.sender,
					p2: m.mentionedJid[0],
					status: 'wait',
					poin: 10,
					poin_lose: 10,
					timeout: 3 * 60 * 1000
				}
				m.reply(caption)
				await sleep(3 * 60 * 1000)
				if (suit[id]) {
					m.reply(`_Waktu suit habis_`)
					delete suit[id]
				}
			}
			break
			case 'delsuit': case 'deletesuit': {
				let roomnya = Object.values(suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))
				if (!roomnya) return m.reply(`Kamu sedang tidak berada di room suit !`)
				delete suit[roomnya.id]
				m.reply(`Berhasil delete session room suit !`)
			}
			break
			case 'ttc': case 'ttt': case 'tictactoe': {
				if (Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return m.reply(`Kamu masih didalam game!\nKetik *${prefix}del${command}* Jika Ingin Mengakhiri sesi`);
				let room = Object.values(tictactoe).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
				if (room) {
					m.reply('Partner ditemukan!')
					room.o = m.chat
					room.game.playerO = m.sender
					room.state = 'PLAYING'
					if (!(room.game instanceof TicTacToe)) {
						room.game = Object.assign(new TicTacToe(room.game.playerX, room.game.playerO), room.game)
					}
					let arr = room.game.render().map(v => {
						return {X: '❌',O: '⭕',1: '1️⃣',2: '2️⃣',3: '3️⃣',4: '4️⃣',5: '5️⃣',6: '6️⃣',7: '7️⃣',8: '8️⃣',9: '9️⃣'}[v]
					})
					let str = `Room ID: ${room.id}\n\n${arr.slice(0, 3).join('')}\n${arr.slice(3, 6).join('')}\n${arr.slice(6).join('')}\n\nMenunggu @${room.game.currentTurn.split('@')[0]}\n\nKetik *nyerah* untuk menyerah dan mengakui kekalahan`
					if (room.x !== room.o) await alya.sendMessage(room.x, { texr: str, mentions: parseMention(str) }, { quoted: m })
					await alya.sendMessage(room.o, { text: str, mentions: parseMention(str) }, { quoted: m })
				} else {
					room = {
						id: 'tictactoe-' + (+new Date),
						x: m.chat,
						o: '',
						game: new TicTacToe(m.sender, 'o'),
						state: 'WAITING',
					}
					if (text) room.name = text
					alya.sendMessage(m.chat, { text: 'Menunggu partner' + (text ? ` mengetik command dibawah ini ${prefix}${command} ${text}` : ''), mentions: m.mentionedJid }, { quoted: m })
					tictactoe[room.id] = room
					await sleep(300000)
					if (tictactoe[room.id]) {
						m.reply(`_Waktu ${command} habis_`)
						delete tictactoe[room.id]
					}
				}
			}
			break
			case 'delttc': case 'delttt': {
				let roomnya = Object.values(tictactoe).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
				if (!roomnya) return m.reply(`Kamu sedang tidak berada di room tictactoe !`)
				delete tictactoe[roomnya.id]
				m.reply(`Berhasil delete session room tictactoe !`)
			}
			break
			case 'akinator': {
				if (text == 'start') {
					if (akinator[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
					akinator[m.sender] = new Akinator({ region: 'id', childMode: false });
					try {
						await akinator[m.sender].start()
					} catch (e) {
						delete akinator[m.sender];
						return m.reply('Server Akinator Sedang Gangguan\nSilahkan coba lagi nanti!')
					}
					let { key } = await m.reply(`🎮 Akinator Game :\n\n@${m.sender.split('@')[0]}\n${akinator[m.sender].question}\n\n- 0 - Ya\n- 1 - Tidak\n- 2 - Tidak Tau\n- 3 - Mungkin\n- 4 - Mungkin Tidak\n\n${prefix + command} end (Untuk Keluar dari sesi)`)
					akinator[m.sender].key = key.id
					await sleep(3600000)
					if (akinator[m.sender]) {
						m.reply(`_Waktu ${command} habis_`)
						delete akinator[m.sender];
					}
				} else if (text == 'end') {
					if (!akinator[m.sender]) return m.reply('Kamu tidak Sedang bermain Akinator!')
					delete akinator[m.sender];
					m.reply('Sukses Mengakhiri sessi Akinator')
				} else m.reply(`Example : ${prefix + command} start/end`)
			}
			break
			case 'tebakbom': {
				if (tebakbom[m.sender]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				tebakbom[m.sender] = {
					petak: [0, 0, 0, 2, 0, 2, 0, 2, 0, 0].sort(() => Math.random() - 0.5),
					board: ['1️⃣', '2️⃣', '3️⃣', '4️⃣', '5️⃣', '6️⃣', '7️⃣', '8️⃣', '9️⃣', '🔟'],
					bomb: 3,
					lolos: 7,
					pick: 0,
					nyawa: ['❤️', '❤️', '❤️'],
				}
				await m.reply(`*TEBAK BOM*\n\n${tebakbom[m.sender].board.join("")}\n\nPilih lah nomor tersebut! dan jangan sampai terkena Bom!\nBomb : ${tebakbom[m.sender].bomb}\nNyawa : ${tebakbom[m.sender].nyawa.join("")}`);
				await sleep(120000)
				if (tebakbom[m.sender]) {
					m.reply(`_Waktu ${command} habis_`)
					delete tebakbom[m.sender];
				}
			}
			break
			case 'tekateki': {
				if (iGame(tekateki, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tekateki.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Teka Teki Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tekateki[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tekateki, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tekateki[m.chat + key.id].jawaban)
					delete tekateki[m.chat + key.id]
				}
			}
			break
			case 'tebaklirik': {
				if (iGame(tebaklirik, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaklirik.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Lirik Berikut :\n\n${hasil.soal}\n\nWaktu : 90s\nHadiah *+4299*`)
				tebaklirik[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(90000)
				if (rdGame(tebaklirik, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaklirik[m.chat + key.id].jawaban)
					delete tebaklirik[m.chat + key.id]
				}
			}
			break
			case 'tebakkata': {
				if (iGame(tebakkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkata.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkata[m.chat + key.id].jawaban)
					delete tebakkata[m.chat + key.id]
				}
			}
			break
			case 'family100': {
				if (family100.hasOwnProperty(m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/family100.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kata Berikut :\n\n${hasil.soal}\n\nWaktu : 5m\nHadiah *+3499*`)
				family100[m.chat] = {
					soal: hasil.soal,
					jawaban: hasil.jawaban,
					terjawab: Array.from(hasil.jawaban, () => false),
					id: key.id
				}
				await sleep(300000)
				if (family100.hasOwnProperty(m.chat)) {
					m.reply('Waktu Habis\nJawaban:\n- ' + family100[m.chat].jawaban.join('\n- '))
					delete family100[m.chat]
				}
			}
			break
			case 'susunkata': {
				if (iGame(susunkata, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/susunkata.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Susun Kata Berikut :\n\n${hasil.soal}\nTipe : ${hasil.tipe}\n\nWaktu : 60s\nHadiah *+2989*`)
				susunkata[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(susunkata, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + susunkata[m.chat + key.id].jawaban)
					delete susunkata[m.chat + key.id]
				}
			}
			break
			case 'tebakkimia': {
				if (iGame(tebakkimia, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakkimia.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Kimia Berikut :\n\n${hasil.unsur}\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakkimia[m.chat + key.id] = {
					jawaban: hasil.lambang.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakkimia, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakkimia[m.chat + key.id].jawaban)
					delete tebakkimia[m.chat + key.id]
				}
			}
			break
			case 'caklontong': {
				if (iGame(caklontong, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/caklontong.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Jawab Pertanyaan Berikut :\n\n${hasil.soal}\n\nWaktu : 60s\nHadiah *+9999*`)
				caklontong[m.chat + key.id] = {
					...hasil,
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(caklontong, m.chat, key.id)) {
					m.reply(`Waktu Habis\nJawaban: ${caklontong[m.chat + key.id].jawaban}\n"${caklontong[m.chat + key.id].deskripsi}"`)
					delete caklontong[m.chat + key.id]
				}
			}
			break
			case 'tebaknegara': {
				if (iGame(tebaknegara, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebaknegara.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Negara Dari Tempat Berikut :\n\n*Tempat : ${hasil.tempat}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebaknegara[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebaknegara, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebaknegara[m.chat + key.id].jawaban)
					delete tebaknegara[m.chat + key.id]
				}
			}
			break
			case 'tebakgambar': {
				if (iGame(tebakgambar, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakgambar.json');
				const hasil = pickRandom(soal);
				let { key } = await alya.sendFileUrl(m.chat, hasil.img, `🎮 Tebak Gambar Berikut :\n\n${hasil.deskripsi}\n\nWaktu : 60s\nHadiah *+3499*`, m)
				tebakgambar[m.chat + key.id] = {
					jawaban: hasil.jawaban.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakgambar, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakgambar[m.chat + key.id].jawaban)
					delete tebakgambar[m.chat + key.id]
				}
			}
			break
			case 'tebakbendera': {
				if (iGame(tebakbendera, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/games/tebakbendera.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply(`🎮 Tebak Bendera Berikut :\n\n*Bendera : ${hasil.bendera}*\n\nWaktu : 60s\nHadiah *+3499*`)
				tebakbendera[m.chat + key.id] = {
					jawaban: hasil.negara.toLowerCase(),
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakbendera, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakbendera[m.chat + key.id].jawaban)
					delete tebakbendera[m.chat + key.id]
				}
			}
			break
			case 'tebakangka': case 'butawarna': case 'colorblind': {
				if (iGame(tebakangka, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				const soal = await fetchJson('https://raw.githubusercontent.com/nazedev/database/refs/heads/master/random/color_blind.json');
				const hasil = pickRandom(soal);
				let { key } = await m.reply({
					text: `Pilih Jawaban Yang Benar!\nPilihan: ${[hasil.number, ...hasil.similar].sort(() => Math.random() - 0.5).join(', ')}`,
					contextInfo: {
						externalAdReply: {
							renderLargerThumbnail: true,
							thumbnailUrl: hasil.color_blind[0],
							body: `Level : ${hasil.lv}`,
							previewType: 0,
							mediaType: 1,
						}
					}
				});
				tebakangka[m.chat + key.id] = {
					jawaban: hasil.number,
					id: key.id
				}
				await sleep(60000)
				if (rdGame(tebakangka, m.chat, key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + tebakangka[m.chat + key.id].jawaban)
					delete tebakangka[m.chat + key.id]
				}
			}
			break
			case 'kuismath': case 'math': {
				const { genMath, modes } = require('./lib/math');
				const inputMode = ['noob', 'easy', 'medium', 'hard','extreme','impossible','impossible2'];
				if (iGame(kuismath, m.chat)) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
				if (!text) return m.reply(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
				if (!inputMode.includes(text.toLowerCase())) return m.reply('Mode tidak ditemukan!')
				let result = await genMath(text.toLowerCase())
				let { key } = await m.reply(`*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu : ${(result.waktu / 1000).toFixed(2)} detik`)
				kuismath[m.chat + key.id] = {
					jawaban: result.jawaban,
					mode: text.toLowerCase(),
					id: key.id
				}
				await sleep(kuismath, result.waktu)
				if (rdGame(m.chat + key.id)) {
					m.reply('Waktu Habis\nJawaban: ' + kuismath[m.chat + key.id].jawaban)
					delete kuismath[m.chat + key.id]
				}
			}
			break
			case 'ulartangga': case 'snakeladder': case 'ut': {
				if (!m.isGroup) return m.reply(mess.group)
				if (ulartangga[m.chat] && !(ulartangga[m.chat] instanceof SnakeLadder)) {
					ulartangga[m.chat] = Object.assign(new SnakeLadder(ulartangga[m.chat]), ulartangga[m.chat]);
				}
				switch(args[0]) {
					case 'create': case 'join':
					if (ulartangga[m.chat]) {
						if (Object.keys(ulartangga[m.chat].players).length > 8) return m.reply(`Jumlah Pemain Sudah Maksimal\nSilahkan Memulai Permainan\n${prefix + command} start`);
						if (ulartangga[m.chat].players.some(a => a.id == m.sender)) return m.reply('Kamu Sudah Bergabung!')
						ulartangga[m.chat].players.push({ id: m.sender, move: 0 });
						m.reply('Sukses Join Sesi Game')
					} else {
						ulartangga[m.chat] = new SnakeLadder({ id: m.chat, host: m.sender });
						ulartangga[m.chat].players.push({ id: m.sender, move: 0 });
						ulartangga[m.chat].time = Date.now();
						m.reply('Sukses Membuat Sesi Game')
					}
					break
					case 'start':
					if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					if (ulartangga[m.chat].players.length < 2) return m.reply('Jumlah Pemain Kurang!\nMinimal 2 Pemain!')
					if (ulartangga[m.chat].start) return m.reply('Sesi Sudah dimulai Sejak Awal!')
					if (ulartangga[m.chat].host !== m.sender) return m.reply(`Hanya Pembuat Room @${ulartangga[m.chat].host.split('@')[0]} yang bisa Memulai Sessi!`)
					let { key } = await m.reply({ image: { url: ulartangga[m.chat].map.url }, caption: `🐍🪜GAME ULAR TANGGA\n\n${ulartangga[m.chat].players.map((p, i) => `- @${p.id.split('@')[0]} (Pion ${['Merah', 'Biru Muda', 'Kuning', 'Hijau', 'Ungu', 'Jingga', 'Biru Tua', 'Putih'][i]})`).join('\n')}\n\nGiliran: @${m.sender.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: roll/kocok`, mentions: ulartangga[m.chat].players.map(p => p.id)});
					ulartangga[m.chat].id = key.id
					ulartangga[m.chat].start = true
					break
					case 'leave':
					if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					if (!ulartangga[m.chat].players.some(a => a.id == m.sender)) return m.reply('Kamu Bukan Pemain!')
					const player = ulartangga[m.chat].players.findIndex(a => a.id == m.sender)
					if (ulartangga[m.chat].start) return m.reply('Game Sudah dimulai!\nTidak Bisa Keluar Sekarang')
					if (ulartangga[m.chat].players.length < 1 || ulartangga[m.chat].host === m.sender) {
						m.reply(ulartangga[m.chat].host === m.sender ? 'Host Meninggalkan Permainan\nPermainan dihentikan!' : 'Pemain Kurang Dari 1, Permainan dihentikan!');
						delete ulartangga[m.chat];
						break;
					}
					ulartangga[m.chat].players.splice(player, 1);
					m.reply('Sukses Meninggalkan Permainan');
					break
					case 'end':
					if (!ulartangga[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					if (ulartangga[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${ulartangga[m.chat].host.split('@')[0]} yang bisa Menghapus Sessi!`)
					delete ulartangga[m.chat]
					m.reply('Berhasil Menghapus Sesi Game')
					break
					default:
					m.reply(`🐍🪜GAME ULARTANGGA\nCommand: ${prefix + command} <command>\n- create\n- join\n- start\n- leave\n- end`)
				}
			}
			break
			case 'chess': case 'catur': case 'ct': {
				const { DEFAUT_POSITION } = require('chess.js');
				if (!m.isGroup) return m.reply(mess.group)
				if (chess[m.chat] && !(chess[m.chat] instanceof Chess)) {
					chess[m.chat] = Object.assign(new Chess(chess[m.chat].fen), chess[m.chat]);
				}
				switch(args[0]) {
					case 'start':
					if (!chess[m.chat]) return m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					if (!chess[m.chat].acc) return m.reply('Pemain Tidak Lengkap!')
					if (chess[m.chat].player1 !== m.sender) return m.reply('Hanya Pemain Utama Yang bisa Memulai!')
					if (chess[m.chat].turn !== m.sender && !chess[m.chat].start) {
						const encodedFen = encodeURI(chess[m.chat]._fen);
						let boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,`https://chessboardimage.com/${encodedFen}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}`,`https://fen2image.chessvision.ai/${encodedFen}`];
						for (let url of boardUrls) {
							try {
								const { data } = await axios.get(url, { responseType: 'arraybuffer' });
								let { key } = await m.reply({ image: data, caption: `♟️${command.toUpperCase()} GAME\n\nGiliran: @${m.sender.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [m.sender] });
								chess[m.chat].start = true
								chess[m.chat].turn = m.sender
								chess[m.chat].id = key.id;
								return;
							} catch (e) {}
						}
						if (!chess[m.chat].key) {
							m.reply(`Gagal Memulai Permainan!\nGagal Mengirim Papan Permainan!`)
						}
					} else if ([chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) {
						const isPlayer2 = chess[m.chat].player2 === m.sender
						const nextPlayer = isPlayer2 ? chess[m.chat].player1 : chess[m.chat].player2;
						const encodedFen = encodeURI(chess[m.chat]._fen);
						const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${!isPlayer2 ? '&flip=true' : ''}`,`https://chessboardimage.com/${encodedFen}${!isPlayer2 ? '-flip' : ''}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765${!isPlayer2 ? '&orientation=black' : ''}`,`https://fen2image.chessvision.ai/${encodedFen}/${!isPlayer2 ? '?pov=black' : ''}`];
						for (let url of boardUrls) {
							try {
								chess[m.chat].turn = chess[m.chat].turn === m.sender ? m.sender : nextPlayer;
								const { data } = await axios.get(url, { responseType: 'arraybuffer' });
								let { key } = await m.reply({ image: data, caption: `♟️CHESS GAME\n\nGiliran: @${chess[m.chat].turn.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [chess[m.chat].turn] });
								chess[m.chat].id = key.id;
								break;
							} catch (e) {}
						}
					}
					break
					case 'join':
					if (chess[m.chat]) {
						if (chess[m.chat].player1 !== m.sender) {
							if (chess[m.chat].acc) return m.reply(`Pemain Sudah Terisi\nSilahkan Coba Lagi Nanti`)
							let teks = chess[m.chat].player2 === m.sender ? 'TerimaKasih Sudah Mau Bergabung' : `Karena @${chess[m.chat].player2.split('@')[0]} Tidak Merespon\nAkan digantikan Oleh @${m.sender.split('@')[0]}`
							chess[m.chat].player2 = m.sender
							chess[m.chat].acc = true
							m.reply(`${teks}\nSilahkan @${chess[m.chat].player1.split('@')[0]} Untuk Memulai Game (${prefix + command} start)`)
						} else m.reply(`Kamu Sudah Bergabung\nBiarkan Orang Lain Menjadi Lawanmu!`)
					} else m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					break
					case 'end': case 'leave':
					if (chess[m.chat]) {
						if (![chess[m.chat].player1, chess[m.chat].player2].includes(m.sender)) return m.reply('Hanya Pemain yang Bisa Menghentikan Permainan!')
						delete chess[m.chat]
						m.reply('Sukses Menghapus Sesi Game')
					} else m.reply('Tidak Ada Sesi Yang Sedang Berlangsung!')
					break
					case 'bot': case 'computer':
					if (chess[m.sender]) {
						delete chess[m.sender];
						return m.reply('Sukses Menghapus Sesi vs BOT')
					} else {
						chess[m.sender] = new Chess(DEFAUT_POSITION);
						chess[m.sender]._fen = chess[m.sender].fen();
						chess[m.sender].turn = m.sender;
						chess[m.sender].botMode = true;
						chess[m.sender].time = Date.now();
						const encodedFen = encodeURI(chess[m.sender]._fen);
						const boardUrls = [`https://www.chess.com/dynboard?fen=${encodedFen}&size=3&coordinates=inside`,`https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside`,`https://chessboardimage.com/${encodedFen}.png`,`https://backscattering.de/web-boardimage/board.png?fen=${encodedFen}&coordinates=true&size=765`,`https://fen2image.chessvision.ai/${encodedFen}/`];
						for (let url of boardUrls) {
							try {
								const { data } = await axios.get(url, { responseType: 'arraybuffer' });
								let { key } = await m.reply({ image: data, caption: `♟️CHESS GAME\n\nGiliran: @${chess[m.sender].turn.split('@')[0]}\n\nReply Pesan Ini untuk lanjut bermain!\nExample: from to -> b1 c3`, mentions: [chess[m.sender].turn] });
								chess[m.sender].id = key.id;
								break;
							} catch (e) {}
						}
					}
					break
					default:
					if (/^@?\d+$/.test(args[0])) {
						if (chess[m.chat]) return m.reply('Masih Ada Sesi Yang Belum Diselesaikan!')
						if (m.mentionedJid.length < 1) return m.reply('Tag Orang yang Mau diajak Bermain!')
						chess[m.chat] = new Chess(DEFAUT_POSITION);
						chess[m.chat]._fen = chess[m.chat].fen();
						chess[m.chat].player1 = m.sender
						chess[m.chat].player2 = m.mentionedJid ? m.mentionedJid[0] : null
						chess[m.chat].time = Date.now();
						chess[m.chat].turn = null
						chess[m.chat].acc = false
						m.reply(`♟️${command.toUpperCase()} GAME\n\n@${m.sender.split('@')[0]} Menantang @${m.mentionedJid[0].split('@')[0]}\nUntuk Bergabung ${prefix + command} join`)
					} else {
						m.reply(`♟️${command.toUpperCase()} GAME\n\nExample: ${prefix + command} @tag/number\n- start\n- leave\n- join\n- computer\n- end`)
					}
				}
				
			}
			break
			case 'blackjack': case 'bj': {
				let session = null;
				for (let id in blackjack) {
					if (blackjack[id].players.find(p => p.id === m.sender)) {
						session = blackjack[id];
						break;
					}
				}
				if (session && !(session instanceof Blackjack)) {
					session = Object.assign(new Blackjack(session), session)
				}
				if (blackjack[m.chat] && !(blackjack[m.chat] instanceof Blackjack)) {
					blackjack[m.chat] = Object.assign(new Blackjack(blackjack[m.chat]), blackjack[m.chat])
				}
				switch(args[0]) {
					case 'create': case 'join':
					if (!m.isGroup) return m.reply(mess.group)
					if (blackjack[m.chat] || session) {
						if (blackjack[m.chat]?.players?.some(a => a.id === m.sender)) return m.reply('Kamu Sudah Bergabung!')
						if (session) return m.reply('Kamu sudah bergabung di sesi Grup lain! Keluar dulu sebelum bergabung di sesi baru.');
						if (blackjack[m.chat].players.length > 10) return m.reply(`Jumlah Pemain Sudah Maksimal\nSilahkan Memulai Permainan\n${prefix + command} start`);
						blackjack[m.chat].players.push({ id: m.sender, cards: [] });
						m.reply('Sukses Join Game Blackjack')
					} else {
						blackjack[m.chat] = new Blackjack({ id: m.chat, host: m.sender });
						blackjack[m.chat].players.push({ id: m.sender, cards: [] });
						m.reply('Sukses Create Game Blackjack')
					}
					break
					case 'start':
					if (!m.isGroup) return m.reply(mess.group)
					if (!blackjack[m.chat]) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
					if (blackjack[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${blackjack[m.chat].host.split('@')[0]} yang bisa Memulai Sessi!`)
					if (blackjack[m.chat].players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
					if (blackjack[m.chat].started) return m.reply('Game Sudah Dimulai Sejak Awal!')
					blackjack[m.chat].distributeCards();
					m.reply(`🃏GAME BLACKJACK♦️\nStart Card: ${blackjack[m.chat].startCard.rank + blackjack[m.chat].startCard.suit}\nDeck Count: ${blackjack[m.chat].deck.length}\n${blackjack[m.chat].players.map(a => `- @${a.id.split('@')[0]} : (${a.cards.length} kartu)`).join('\n')}\n\nCek Private Chat\nwa.me/${botNumber.split('@')[0]}`);
					for (let p of blackjack[m.chat].players) {
						const startCard = blackjack[m.chat].startCard;
						let buttons = p.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` })}));
						if (!blackjack[m.chat].hasMatching(p.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
						await alya.sendListMsg(p.id, { text: `Start Card: ${startCard.rank + startCard.suit}`, footer: `${p.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
					}
					break
					case 'hit': case 'minum': {
						if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (!session.started) return m.reply('Game Belum Di Mulai!')
						if (session.players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
						if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
						if (!args[0]) return m.reply(`Gunakan format:\n${prefix + command} play <kartu>\nContoh: ${prefix + command} hit`);
						const player = session.players.find(p => p.id === m.sender);
						const hitIndex = player.cards.findIndex(c => (c.rank + c.suit) === (session.startCard.rank + session.startCard.suit));
						if (session.submitCard.some(s => s.id === m.sender) || session.skip.includes(m.sender)) {
							return m.reply('Kamu sudah bermain di ronde ini!');
						}
						if (!session.hasMatching(m.sender)) {
							if (session.deck.length) {
								const newCard = session.deck.shift();
								player.cards.push(newCard);
								await sleep(1000);
								let buttons = player.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` })}));
								if (!session.hasMatching(player.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
								await alya.sendListMsg(player.id, { text: `Start Card: ${session.startCard.rank + session.startCard.suit}`, footer: `${player.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
							} else {
								let reuse = session.reuseSubmitCardsForDrinking()
								await m.reply(reuse.msg)
								if (!session.skip.find(a => a.id === player.id)) session.skip.push({ id: player.id });
								await m.reply('Deck sudah habis, kamu tidak bisa mengambil kartu. Dilewati.');
								await alya.sendText(session.id, `@${m.sender.split('@')[0]} dilewati karena deck habis.`, m);
								if ((session.submitCard.length + session.skip.length) === session.players.length) {
									const result = session.resolveRound();
									if (result) {
										await alya.sendText(session.id, result, m);
										if (session.players.length === 1) {
											await alya.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
											delete blackjack[session.id];
											return;
										}
										const leaderCards = session.players.find(a => a.id === session.leader);
										let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` })}));
										await alya.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
									}
								}
							}
						} else m.reply(`Kamu masih punya kartu dengan suit ${session.startCard.suit}, mainkan dulu sebelum minum!`);
						if ((session.submitCard.length + session.skip.length) === session.players.length) {
							const result = session.resolveRound();
							if (result) {
								await alya.sendText(session.id, result, m);
								if (session.players.length === 1) {
									await alya.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
									delete blackjack[session.id];
									return;
								}
								const leaderCards = session.players.find(a => a.id === session.leader);
								let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` })}));
								await alya.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
							}
						}
					}
					break
					case 'play': {
						if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
						if (!session.started) return m.reply('Game Belum Di Mulai!')
						if (session.players.length < 2) return m.reply('Minimal 2 Pemain Untuk Memulai Permainan!');
						if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
						if (!args[1]) return m.reply(`Gunakan format:\n${prefix + command} play <kartu>\nContoh: ${prefix + command} play 3♥️`);
						const player = session.players.find(p => p.id === m.sender);
						const idx = player.cards.findIndex(c => normalize(c.rank + c.suit) === normalize(args[1]));
						if (idx === -1) return m.reply('Kartu tidak valid!');
						if (session.submitCard.some(s => s.id === m.sender) || session.skip.includes(m.sender)) return m.reply('Kamu sudah bermain di ronde ini!');
						const card = player.cards[idx];
						if (Object.keys(session.startCard).length) {
							if (card.suit !== session.startCard.suit) return m.reply(`Kartu tidak sesuai! Harus suit ${session.startCard.suit}`);
						} else if (m.sender !== session.leader) return m.reply('Hanya pemimpin ronde yang boleh memulai!');
						player.cards.splice(idx, 1);
						session.secondDeck.push(card);
						session.submitCard.push({ id: m.sender, card: card });
						await sleep(1000);
						if (player.cards.length === 0) {
							session.winner.push({ id: player.id });
							session.leader = '';
							session.submitCard = [];
							session.players = session.players.filter(p => p.id !== player.id);
							await alya.sendText(session.id, `@${m.sender.split('@')[0]} memenangkan permainan!\nSisa Kartu: 0`, m);
							if (session.players.length === 1) {
								await alya.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
								delete blackjack[session.id];
								return;
							}
						}
						if (Object.keys(session.startCard).length === 0) {
							session.startCard = card;
							await alya.sendText(session.id, `@${m.sender.split('@')[0]} memulai putaran dengan ${card.rank}${card.suit}`, m);
							for (let s of session.players) {
								if (s.id === session.leader) continue;
								const startCard = session.startCard;
								let buttons = s.cards.map(a => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${a.rank}${a.suit}`, id: `.${command} play ${a.rank}${a.suit}` })}));
								if (!session.hasMatching(s.id)) buttons.push({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: 'Minum', id: `.${command} minum` }) });
								await alya.sendListMsg(s.id, { text: `Start Card: ${startCard.rank + startCard.suit}`, footer: `${s.cards.map(c => c.rank + c.suit).join(', ')}`, buttons }, { quoted: m });
							}
							return;
						}
						if ((session.submitCard.length + session.skip.length) === session.players.length) {
							const result = session.resolveRound();
							if (result) {
								await alya.sendText(session.id, result, m);
								if (session.players.length === 1) {
									await alya.sendText(session.id, `Pemain Tersisa 1 (@${session.players[0].id.split('@')[0]}), sesi Blackjack selesai.`, m);
									delete blackjack[session.id];
									return;
								}
								const leaderCards = session.players.find(a => a.id === session.leader);
								let buttons = leaderCards.cards.map(c => ({ name: 'quick_reply', buttonParamsJson: JSON.stringify({ display_text: `${c.rank}${c.suit}`, id: `.${command} play ${c.rank}${c.suit}` })}));
								await alya.sendListMsg(session.leader, { text: 'Pilih kartu untuk memulai ronde baru', footer: leaderCards.cards.map(c => c.rank + c.suit).join(', '), buttons }, { quoted: m });
							}
						}
						await m.reply(`Kamu memainkan ${card.rank}${card.suit}`);
						await alya.sendText(session.id, `@${m.sender.split('@')[0]} memainkan ${card.rank}${card.suit}`, m);
					}
					break
					case 'info':
					if (!session) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
					if (!session.players?.some(a => a.id === m.sender)) return m.reply('Kamu belum bergabung!');
					const players = session.players.map((p, i) => `${i + 1}. @${p.id.split('@')[0]} ${p.id === session.host ? '(HOST) ' : p.id === session.leader ? '(Leader)' : ''}`).join('\n');
					if (m.isGroup) {
						m.reply(`🃏INFO GAME BLACKJACK ♦️\n*Jumlah Pemain:* ${session.players.length}\n*Host:* @${session.host.split('@')[0]}\n*Status:* ${session.started ? 'Dimulai' : 'Belum Mulai'}${Object.keys(session.startCard).length > 1 ? `\n*Start Card:* ${session.startCard.rank + session.startCard.suit}` : ''}\n*Sisa Kartu Deck:* ${session.deck.length}\n\n*Daftar Pemain:*\n${players}${session.secondDeck.length ? `\n\n*Riwayat Kartu:* ${session.secondDeck.map(c => `${c.rank}${c.suit}`).join(', ')}` : ''}`)
					} else {
						const player = session.players.find(p => p.id === m.sender);
						const cards = player.cards?.map(c => `${c.rank}${c.suit}`).join(', ') || 'Belum ada kartu';
						m.reply(`🃏INFO GAME BLACKJACK ♦️\n*Jumlah Pemain:* ${session.players.length}\n*Host:* @${session.host.split('@')[0]}\n*Status:* ${session.started ? 'Dimulai' : 'Belum Mulai'}${Object.keys(session.startCard).length > 1 ? `\n*Start Card:* ${session.startCard.rank + session.startCard.suit}` : ''}\n*Sisa Kartu Deck:* ${session.deck.length}\n\n*Daftar Pemain:*\n${players}\n\n*Kartu Kamu:*\n${cards}${session.secondDeck.length ? `\n\n*Riwayat Kartu:* ${session.secondDeck.map(c => `${c.rank}${c.suit}`).join(', ')}` : ''}`)
					}
					break
					case 'end':
					if (!m.isGroup) return m.reply(mess.group)
					if (!blackjack[m.chat]) return m.reply('Tidak Ada Sesi Game Blackjack yang Sedang Berjalan!')
					if (blackjack[m.chat]?.host !== m.sender) return m.reply(`Hanya Pembuat Room @${blackjack[m.chat].host.split('@')[0]} yang bisa Menghapus Sessi!`)
					delete blackjack[m.chat]
					m.reply('Berhasil Menghapus Sesi Game Blackjack')
					break
					default:
					m.reply(`🃏GAME BLACKJACK♦️\nCommand: ${prefix + command} <command>\n- create\n- join\n- start\n- info\n- hit\n- deck\n- end`)
				}
			}
			break
			
			// Menu
			case 'menu': {
				const hari = moment.tz('Asia/Jakarta').locale('id').format('dddd');
	const tanggal = moment.tz('Asia/Jakarta').locale('id').format('DD/MM/YYYY');
	const jam = moment.tz('Asia/Jakarta').locale('id').format('HH:mm:ss');
	const ucapanWaktu = jam < '05:00:00' ? 'Selamat Pagi 🌉' : jam < '11:00:00' ? 'Selamat Pagi 🌄' : jam < '15:00:00' ? 'Selamat Siang 🏙' : jam < '18:00:00' ? 'Selamat Sore 🌅' : jam < '19:00:00' ? 'Selamat Sore 🌃' : jam < '23:59:00' ? 'Selamat Malam 🌌' : 'Selamat Malam 🌌';
	
	let total = Object.entries(db.hit).sort((a, b) => b[1] - a[1]).slice(0, Math.min(7, Object.keys(db.hit).length)).filter(([command]) => command !== 'totalcmd' && command !== 'todaycmd').slice(0, 5);
	
	let text = `╭──❍「 *TOP MENU* 」❍\n`
	
	if (total && total.length >= 5) {
		total.forEach(([command, hit], index) => {
			text += `│${setv} ${prefix}${command}: ${hit} hits\n`
		})
		text += '╰──────❍'
	} else text += `│${setv} ${prefix}ai
│${setv} ${prefix}brat
│${setv} ${prefix}tiktok
│${setv} ${prefix}cekmati
│${setv} ${prefix}susunkata
╰──────❍`
const info = `╔═══ ❖ 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾 ❖ ═══╗
║ 🤖 𝙽𝚊𝚖𝚊       : 𝙰𝚕𝚢𝚊𝙲𝚑𝚊𝚗
║ 👑 𝙾𝚠𝚗𝚎𝚛      : @${owner[0].split('@')[0]}
║ 🔧 𝙼𝚘𝚍𝚎       : ${alya.public ? '𝙿𝚞𝚋𝚕𝚒𝚌' : '𝚂𝚎𝚕𝚏'}
║ ☕ 𝙿𝚛𝚎𝚏𝚒𝚡     : ${set.multiprefix ? '「 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 」' : ' *'+prefix+'*' }
║ 🌟 𝙵𝚒𝚝𝚞𝚛 𝙿𝚛𝚎𝚖 : 🔸
╚═══════════════════╝\n`
alya.sendMessage(m.chat, {
  footer: global.packname,
  buttons: [
    {
      buttonId: 'action',
      buttonText: { displayText: 'ini pesan interactiveMeta' },
      type: 4,
      nativeFlowInfo: {
        name: 'single_select',
        paramsJson: JSON.stringify({
          title: 'Click To List',
          sections: [
            {
              title: 'INFORMATION',
              rows: [
                {
                  title: 'Script 📥',
                  description: 'Display Script Alya-Chan',
                  id: '.sc'
                },
                {
                  title: 'Donasi 💳',
                  description: 'Mendukung Perkembangan',
                  id: '.donasi'
                }
              ]
            },
            {
              title: 'LIST MENU',
              highlight_label: 'Recomend',
              rows: [
                {
                  title: 'AllMenu ⚡',
                  description: 'Menampilkan Allmenu',
                  id: '.allmenu'
                },
                {
                  title: 'BotMenu 🤖',
                  description: 'Menampilkan Bot Menu',
                  id: '.botmenu'
                },
                {
                  title: 'GroupMenu 🗝',
                  description: 'Menampilkan Group Menu',
                  id: '.groupmenu'
                }, 
                {
                  title: 'SearchMenu 📡',
                  description: 'Menampilkan Search Menu',
                  id: '.searchmenu'
                }, 
                {
                  title: 'DownloadMenu 📥',
                  description: 'Menampilkan Download Menu',
                  id: '.downloadmenu'
                }, 
                {
                  title: 'QuotesMenu 🩷',
                  description: 'Menampilkan Quotes Menu',
                  id: '.quotesmenu'
                }, 
                {
                  title: 'ToolsMenu 🛠',
                  description: 'Menampilkan Download Menu',
                  id: '.toolsmenu'
                }, 
                {
                  title: 'AiMenu 🤖',
                  description: 'Menampilkan Ai Menu',
                  id: '.aimenu'
                }, 
                {
                  title: 'PanelMenu 🕹',
                  description: 'Menampilkan Panel Menu',
                  id: '.panelmenu'
                }, 
                {
                  title: 'StalkerMenu 👁',
                  description: 'Menampilkan Rpg Menu',
                  id: '.stalkermenu'
                },
                {
                  title: 'RandomMenu 🛬',
                  description: 'Menampilkan Random Menu',
                  id: '.randommenu'
                },
                {
                  title: 'FunMenu 📽',
                  description: 'Menampilkan Fun Menu',
                  id: '.funmenu'
                },
                {
                  title: 'GameMenu 🎮',
                  description: 'Menampilkan Menu Menu',
                  id: '.gamemenu'     
                }, 
                {
                  title: 'AnimeMenu 😍',
                  description: 'Menampilkan Anime Menu',
                  id: '.animemenu'
                },
                {
                  title: 'OwnerMenu 👑',
                  description: 'Menampilkan Owner Menu',
                  id: '.ownermenu'
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
  image: { url: globalpp },
  caption: info + text,
  contextInfo: {
    forwardingScore: 999,
    isForwarded: true,
    mentionedJid: [m.sender],
    forwardedNewsletterMessageInfo: {
      newsletterName: '— Alya Chan',
      newsletterJid: '1203729782992@newsletter'
    },
    externalAdReply: {
      title: 'Alya-Chan',
      body: 'By Nd',
      thumbnailUrl: globalpp,
      sourceUrl: 'https://ndikz-api.vercel.app',
      mediaType: 1,
      renderLargerThumbnail: false
    }
  }
}, { quoted: m });
			}
			break
			case 'allmenu': {
				const menunya = `
╔═══ ❖ 𝚄𝚂𝙴𝚁 𝙸𝙽𝙵𝙾 ❖ ═══╗
║ 👤 𝙽𝚊𝚖𝚊     : ${m.pushName ? m.pushName : '𝚃𝚊𝚗𝚙𝚊 𝙽𝚊𝚖𝚊'}
║ 🆔 𝙸𝙳       : @${m.sender.split('@')[0]}
║ 💎 𝚄𝚜𝚎𝚛    : ${isVip ? '𝚅𝙸𝙿' : isPremium ? '𝙿𝚁𝙴𝙼𝙸𝚄𝙼' : '𝙵𝚁𝙴𝙴'}
║ 📉 𝙻𝚒𝚖𝚒𝚝   : ${isVip ? '𝚅𝙸𝙿' : db.users[m.sender].limit }
║ 💰 𝚄𝚊𝚗𝚐    : ${db.users[m.sender] ? db.users[m.sender].money.toLocaleString('id-ID') : '0'}
╚═══════════════════════╝

╔═══ ❖ 𝙱𝙾𝚃 𝙸𝙽𝙵𝙾 ❖ ═══╗
║ 🤖 𝙽𝚊𝚖𝚊       : 𝙰𝚕𝚢𝚊𝙲𝚑𝚊𝚗
║ ⚡ 𝙿𝚘𝚠𝚎𝚛𝚎𝚍    : @${'0@s.whatsapp.net'.split('@')[0]}
║ 👑 𝙾𝚠𝚗𝚎𝚛      : @${ownerNumber[0].split('@')[0]}
║ 🔧 𝙼𝚘𝚍𝚎       : ${alya.public ? '𝙿𝚞𝚋𝚕𝚒𝚌' : '𝚂𝚎𝚕𝚏'}
║ ☕ 𝙿𝚛𝚎𝚏𝚒𝚡     : ${set.multiprefix ? '「 𝙼𝚄𝙻𝚃𝙸-𝙿𝚁𝙴𝙵𝙸𝚇 」' : ' *'+prefix+'*' }
║ 🌟 𝙵𝚒𝚝𝚞𝚛 𝙿𝚛𝚎𝚖 : 🔸
╚═══════════════════════╝

╔═══ ❖ 𝙰𝙱𝙾𝚄𝚃 ❖ ═══╗
║ 📅 𝚃𝚊𝚗𝚐𝚐𝚊𝚕 : ${tanggal}
║ 📆 𝙷𝚊𝚛𝚒     : ${hari}
║ ⏰ 𝙹𝚊𝚖      : ${jam} 𝚆𝙸𝙱
╚═══════════════════╝
╔═══ ❖ 𝙱𝙾𝚃 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚙𝚛𝚘𝚏𝚒𝚕𝚎
║ ${setv} ${prefix}𝚌𝚕𝚊𝚒𝚖
║ ${setv} ${prefix}𝚋𝚞𝚢 [item] (nominal)
║ ${setv} ${prefix}𝚝𝚛𝚊𝚗𝚜𝚏𝚎𝚛
║ ${setv} ${prefix}𝚕𝚎𝚊𝚍𝚎𝚛𝚋𝚘𝚊𝚛𝚍
║ ${setv} ${prefix}𝚛𝚎𝚚𝚞𝚎𝚜𝚝 (text)
║ ${setv} ${prefix}𝚛𝚎𝚊𝚌𝚝 (emoji)
║ ${setv} ${prefix}𝚝𝚊𝚐𝚖𝚎
║ ${setv} ${prefix}𝚛𝚞𝚗𝚝𝚒𝚖𝚎
║ ${setv} ${prefix}𝚝𝚘𝚝𝚊𝚕𝚏𝚒𝚝𝚞𝚛
║ ${setv} ${prefix}𝚜𝚙𝚎𝚎𝚍
║ ${setv} ${prefix}𝚙𝚒𝚗𝚐
║ ${setv} ${prefix}𝚊𝚏𝚔
║ ${setv} ${prefix}𝚛𝚟𝚘
║ ${setv} ${prefix}𝚒𝚗𝚜𝚙𝚎𝚌𝚝 (url gc)
║ ${setv} ${prefix}𝚊𝚍𝚍𝚖𝚜𝚐
║ ${setv} ${prefix}𝚍𝚎𝚕𝚖𝚜𝚐
║ ${setv} ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚖𝚜𝚐
║ ${setv} ${prefix}𝚜𝚎𝚝𝚌𝚖𝚍
║ ${setv} ${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
║ ${setv} ${prefix}𝚕𝚘𝚌𝚔𝚌𝚖𝚍
║ ${setv} ${prefix}𝚚
║ ${setv} ${prefix}𝚖𝚎𝚗𝚏𝚎𝚜 (62xxx|nama palsu)
║ ${setv} ${prefix}𝚌𝚘𝚗𝚏𝚎𝚜 (62xxx|nama palsu)
║ ${setv} ${prefix}𝚛𝚘𝚘𝚖𝚊𝚒
║ ${setv} ${prefix}𝚓𝚊𝚍𝚒𝚋𝚘𝚝 🔸
║ ${setv} ${prefix}𝚜𝚝𝚘𝚙𝚓𝚊𝚍𝚒𝚋𝚘𝚝
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚓𝚊𝚍𝚒𝚋𝚘𝚝
║ ${setv} ${prefix}𝚍𝚘𝚗𝚊𝚜𝚒
║ ${setv} ${prefix}𝚊𝚍𝚍𝚜𝚎𝚠𝚊
║ ${setv} ${prefix}𝚍𝚎𝚕𝚜𝚎𝚠𝚊
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚜𝚎𝚠𝚊
╚═══════════════════════╝
╔═══ ❖ 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚊𝚍𝚍 (62xxx)
║ ${setv} ${prefix}𝚔𝚒𝚌𝚔 (@tag/62xxx)
║ ${setv} ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎 (@tag/62xxx)
║ ${setv} ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎 (@tag/62xxx)
║ ${setv} ${prefix}𝚠𝚊𝚛𝚗 (@tag/62xxx)
║ ${setv} ${prefix}𝚞𝚗𝚠𝚊𝚛𝚗 (@tag/62xxx)
║ ${setv} ${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎 (nama baru gc)
║ ${setv} ${prefix}𝚜𝚎𝚝𝚍𝚎𝚜𝚌 (desk)
║ ${setv} ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚌 (reply imgnya)
║ ${setv} ${prefix}𝚍𝚎𝚕𝚎𝚝𝚎 (reply pesan)
║ ${setv} ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚞𝚙
║ ${setv} ${prefix}𝚛𝚎𝚟𝚘𝚔𝚎
║ ${setv} ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕
║ ${setv} ${prefix}𝚙𝚒𝚗
║ ${setv} ${prefix}𝚞𝚗𝚙𝚒𝚗
║ ${setv} ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐
║ ${setv} ${prefix}𝚝𝚘𝚝𝚊𝚐 (reply pesan)
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
║ ${setv} ${prefix}𝚐𝚛𝚘𝚞𝚙 𝚜𝚎𝚝
║ ${setv} ${prefix}𝚐𝚛𝚘𝚞𝚙 (khusus admin)
╚═══════════════════════╝
╔═══ ❖ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑 (query)
║ ${setv} ${prefix}𝚜𝚙𝚘𝚝𝚒𝚏𝚢 (query)
║ ${setv} ${prefix}𝚙𝚒𝚡𝚒𝚟 (query)
║ ${setv} ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 (query)
║ ${setv} ${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 (query)
║ ${setv} ${prefix}𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎 (query)
║ ${setv} ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎 (query)
║ ${setv} ${prefix}𝚐𝚒𝚖𝚊𝚐𝚎 (query)
║ ${setv} ${prefix}𝚗𝚙𝚖 (query)
║ ${setv} ${prefix}𝚜𝚝𝚢𝚕𝚎 (query)
║ ${setv} ${prefix}𝚌𝚞𝚊𝚌𝚊 (kota)
║ ${setv} ${prefix}𝚝𝚎𝚗𝚘𝚛 (query)
║ ${setv} ${prefix}𝚞𝚛𝚋𝚊𝚗 (query)
╚═══════════════════════╝
╔═══ ❖ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚢𝚝𝚖𝚙𝟹 (url)
║ ${setv} ${prefix}𝚢𝚝𝚖𝚙𝟺 (url)
║ ${setv} ${prefix}𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 (url)
║ ${setv} ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔 (url)
║ ${setv} ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙𝟹 (url)
║ ${setv} ${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 (url)
║ ${setv} ${prefix}𝚜𝚙𝚘𝚝𝚒𝚏𝚢𝚍𝚕 (url)
║ ${setv} ${prefix}𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎 (url)
╚═══════════════════════╝
╔═══ ❖ 𝚀𝚄𝙾𝚃𝙴𝚂 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒
║ ${setv} ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜
║ ${setv} ${prefix}𝚝𝚛𝚞𝚝𝚑
║ ${setv} ${prefix}𝚋𝚒𝚓𝚊𝚔
║ ${setv} ${prefix}𝚍𝚊𝚛𝚎
║ ${setv} ${prefix}𝚋𝚞𝚌𝚒𝚗
║ ${setv} ${prefix}𝚛𝚎𝚗𝚞𝚗𝚐𝚊𝚗
╚═══════════════════════╝
╔═══ ❖ 𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚐𝚎𝚝 (url) 🔸️
║ ${setv} ${prefix}𝚑𝚍 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚊𝚞𝚍𝚒𝚘 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚖𝚙𝟹 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚟𝚗 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚒𝚖𝚊𝚐𝚎 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚙𝚝𝚟 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚞𝚛𝚕 (reply pesan)
║ ${setv} ${prefix}𝚝𝚝𝚜 (textnya)
║ ${setv} ${prefix}𝚝𝚘𝚚𝚛 (textnya)
║ ${setv} ${prefix}𝚋𝚛𝚊𝚝 (textnya)
║ ${setv} ${prefix}𝚋𝚛𝚊𝚝𝚟𝚒𝚍 (textnya)
║ ${setv} ${prefix}𝚜𝚜𝚠𝚎𝚋 (url) 🔸️
║ ${setv} ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛 (img)
║ ${setv} ${prefix}𝚌𝚘𝚕𝚘𝚗𝚐 (reply sticker)
║ ${setv} ${prefix}𝚜𝚖𝚎𝚖𝚎 (img)
║ ${setv} ${prefix}𝚍𝚎𝚑𝚊𝚣𝚎 (img)
║ ${setv} ${prefix}𝚌𝚘𝚕𝚘𝚛𝚒𝚣𝚎 (img)
║ ${setv} ${prefix}𝚑𝚒𝚝𝚊𝚖𝚔𝚊𝚗 (img)
║ ${setv} ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡 🙃+💀
║ ${setv} ${prefix}𝚗𝚞𝚕𝚒𝚜
║ ${setv} ${prefix}𝚛𝚎𝚊𝚍𝚖𝚘𝚛𝚎 text1|text2
║ ${setv} ${prefix}𝚚𝚌 (pesannya)
║ ${setv} ${prefix}𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎
║ ${setv} ${prefix}𝚠𝚊𝚜𝚝𝚎𝚍 (img)
║ ${setv} ${prefix}𝚝𝚛𝚒𝚐𝚐𝚎𝚛𝚎𝚍 (img)
║ ${setv} ${prefix}𝚜𝚑𝚘𝚛𝚝𝚞𝚛𝚕 (url)
║ ${setv} ${prefix}𝚐𝚒𝚝𝚌𝚕𝚘𝚗𝚎 (url)
║ ${setv} ${prefix}𝚏𝚊𝚝 (audio)
║ ${setv} ${prefix}𝚏𝚊𝚜𝚝 (audio)
║ ${setv} ${prefix}𝚋𝚊𝚜𝚜 (audio)
║ ${setv} ${prefix}𝚜𝚕𝚘𝚠 (audio)
║ ${setv} ${prefix}𝚝𝚞𝚙𝚊𝚒 (audio)
║ ${setv} ${prefix}𝚍𝚎𝚎𝚙 (audio)
║ ${setv} ${prefix}𝚛𝚘𝚋𝚘𝚝 (audio)
║ ${setv} ${prefix}𝚋𝚕𝚘𝚠𝚗 (audio)
║ ${setv} ${prefix}𝚛𝚎𝚟𝚎𝚛𝚜𝚎 (audio)
║ ${setv} ${prefix}𝚜𝚖𝚘𝚘𝚝𝚑 (audio)
║ ${setv} ${prefix}𝚎𝚊𝚛𝚛𝚊𝚙𝚎 (audio)
║ ${setv} ${prefix}𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎 (audio)
║ ${setv} ${prefix}𝚐𝚎𝚝𝚎𝚡𝚒𝚏 (sticker)
╚═══════════════════════╝
╔═══ ❖ 𝙰𝙸 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚊𝚒 (query)
║ ${setv} ${prefix}𝚜𝚒𝚖𝚒 (query)
║ ${setv} ${prefix}𝚐𝚎𝚖𝚒𝚗𝚒 (query)
║ ${setv} ${prefix}𝚝𝚡𝚝𝟸𝚒𝚖𝚐 (query)
╚═══════════════════════╝
╔═══ ❖ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚠𝚊𝚒𝚏𝚞
║ ${setv} ${prefix}𝚗𝚎𝚔𝚘
╚═══════════════════════╝
╔═══ ❖ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
║ ${setv} ${prefix}𝚊𝚔𝚒𝚗𝚊𝚝𝚘𝚛
║ ${setv} ${prefix}𝚜𝚞𝚒𝚝
║ ${setv} ${prefix}𝚜𝚕𝚘𝚝
║ ${setv} ${prefix}𝚖𝚊𝚝𝚑 (level)
║ ${setv} ${prefix}𝚋𝚎𝚐𝚊𝚕
║ ${setv} ${prefix}𝚞𝚕𝚊𝚛𝚝𝚊𝚗𝚐𝚐𝚊
║ ${setv} ${prefix}𝚋𝚕𝚊𝚌𝚔𝚓𝚊𝚌𝚔
║ ${setv} ${prefix}𝚌𝚊𝚝𝚞𝚛
║ ${setv} ${prefix}𝚌𝚊𝚜𝚒𝚗𝚘 (nominal)
║ ${setv} ${prefix}𝚜𝚊𝚖𝚐𝚘𝚗𝚐 (nominal)
║ ${setv} ${prefix}𝚛𝚊𝚖𝚙𝚘𝚔 (@tag)
║ ${setv} ${prefix}𝚝𝚎𝚔𝚊𝚝𝚎𝚔𝚒
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚕𝚒𝚛𝚒𝚔
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚔𝚊𝚝𝚊
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚋𝚘𝚖
║ ${setv} ${prefix}𝚜𝚞𝚜𝚞𝚗𝚔𝚊𝚝𝚊
║ ${setv} ${prefix}𝚌𝚘𝚕𝚘𝚛𝚋𝚕𝚒𝚗𝚍
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚔𝚒𝚖𝚒𝚊
║ ${setv} ${prefix}𝚌𝚊𝚔𝚕𝚘𝚗𝚝𝚘𝚗𝚐
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚊𝚗𝚐𝚔𝚊
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚗𝚎𝚐𝚊𝚛𝚊
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚐𝚊𝚖𝚋𝚊𝚛
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚋𝚎𝚗𝚍𝚎𝚛𝚊
╚═══════════════════════╝
╔═══ ❖ 𝙿𝙰𝙽𝙴𝙻 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}1𝚐𝚋
║ ${setv} ${prefix}2𝚐𝚋
║ ${setv} ${prefix}3𝚐𝚋
║ ${setv} ${prefix}4𝚐𝚋
║ ${setv} ${prefix}5𝚐𝚋
║ ${setv} ${prefix}6𝚐𝚋
║ ${setv} ${prefix}7𝚐𝚋
║ ${setv} ${prefix}8𝚐𝚋
║ ${setv} ${prefix}9𝚐𝚋
║ ${setv} ${prefix}10𝚐𝚋
║ ${setv} ${prefix}𝚞𝚗𝚕𝚒
║ ${setv} ${prefix}𝚌𝚛𝚎𝚊𝚝𝚎𝚊𝚍𝚖𝚒𝚗
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚞𝚜𝚛
║ ${setv} ${prefix}𝚍𝚎𝚕𝚞𝚜𝚛
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚜𝚛𝚟
║ ${setv} ${prefix}𝚍𝚎𝚕𝚜𝚛𝚟
╚═══════════════════════╝
╔═══ ❖ 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚌𝚘𝚋𝚊
║ ${setv} ${prefix}𝚍𝚊𝚍𝚞
║ ${setv} ${prefix}𝚋𝚒𝚜𝚊𝚔𝚊𝚑 (text)
║ ${setv} ${prefix}𝚊𝚙𝚊𝚔𝚊𝚑 (text)
║ ${setv} ${prefix}𝚔𝚊𝚙𝚊𝚗 (text)
║ ${setv} ${prefix}𝚜𝚒𝚊𝚙𝚊 (text)
║ ${setv} ${prefix}𝚔𝚎𝚛𝚊𝚗𝚐𝚊𝚓𝚊𝚒𝚋 (text)
║ ${setv} ${prefix}𝚌𝚎𝚔𝚖𝚊𝚝𝚒 (nama lu)
║ ${setv} ${prefix}𝚌𝚎𝚔𝚜𝚒𝚏𝚊𝚝
║ ${setv} ${prefix}𝚌𝚎𝚔𝚔𝚑𝚘𝚍𝚊𝚖 (nama lu)
║ ${setv} ${prefix}𝚛𝚊𝚝𝚎 (reply pesan)
║ ${setv} ${prefix}𝚓𝚘𝚍𝚘𝚑𝚔𝚞
║ ${setv} ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗
║ ${setv} ${prefix}𝚏𝚒𝚝𝚗𝚊𝚑
║ ${setv} ${prefix}𝚑𝚊𝚕𝚊𝚑 (text)
║ ${setv} ${prefix}𝚑𝚒𝚕𝚒𝚑 (text)
║ ${setv} ${prefix}𝚑𝚞𝚕𝚞𝚑 (text)
║ ${setv} ${prefix}𝚑𝚎𝚕𝚎𝚑 (text)
║ ${setv} ${prefix}𝚑𝚘𝚕𝚘𝚑 (text)
╚═══════════════════════╝
╔═══ ❖ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚌𝚘𝚏𝚏𝚎
╚═══════════════════════╝
╔═══ ❖ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚠𝚊𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚝𝚎𝚕𝚎𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚒𝚐𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚐𝚒𝚝𝚑𝚞𝚋𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚐𝚎𝚗𝚜𝚑𝚒𝚗𝚜𝚝𝚊𝚕𝚔
╚═══════════════════════╝
╔═══ ❖ 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚋𝚘𝚝 [𝚜𝚎𝚝]
║ ${setv} ${prefix}𝚜𝚎𝚝𝚋𝚒𝚘
║ ${setv} ${prefix}𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝
║ ${setv} ${prefix}𝚓𝚘𝚒𝚗
║ ${setv} ${prefix}𝚕𝚎𝚊𝚟𝚎
║ ${setv} ${prefix}𝚋𝚕𝚘𝚌𝚔
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚋𝚕𝚘𝚌𝚔
║ ${setv} ${prefix}𝚘𝚙𝚎𝚗𝚋𝚕𝚘𝚌𝚔
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
║ ${setv} ${prefix}𝚋𝚊𝚗
║ ${setv} ${prefix}𝚞𝚗𝚋𝚊𝚗
║ ${setv} ${prefix}𝚖𝚞𝚝𝚎
║ ${setv} ${prefix}𝚞𝚗𝚖𝚞𝚝𝚎
║ ${setv} ${prefix}𝚌𝚛𝚎𝚊𝚝𝚎𝚐𝚌
║ ${setv} ${prefix}𝚌𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝
║ ${setv} ${prefix}𝚊𝚍𝚍𝚙𝚛𝚎𝚖
║ ${setv} ${prefix}𝚍𝚎𝚕𝚙𝚛𝚎𝚖
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚙𝚛𝚎𝚖
║ ${setv} ${prefix}𝚊𝚍𝚍𝚕𝚒𝚖𝚒𝚝
║ ${setv} ${prefix}𝚊𝚍𝚍𝚞𝚊𝚗𝚐
║ ${setv} ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚊𝚞𝚝𝚑𝚘𝚛
║ ${setv} ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚗𝚊𝚖𝚎
║ ${setv} ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚙𝚊𝚌𝚔𝚗𝚊𝚖𝚎
║ ${setv} ${prefix}𝚊𝚍𝚍𝚘𝚠𝚗𝚎𝚛
║ ${setv} ${prefix}𝚍𝚎𝚕𝚘𝚠𝚗𝚎𝚛
║ ${setv} ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐𝚜𝚝𝚘𝚛𝚎
║ ${setv} ${prefix}𝚋𝚘𝚝 --𝚜𝚎𝚝𝚝𝚒𝚗𝚐𝚜
║ ${setv} ${prefix}𝚋𝚘𝚝 𝚜𝚎𝚝𝚝𝚒𝚗𝚐𝚜
║ ${setv} ${prefix}𝚐𝚎𝚝𝚜𝚎𝚜𝚜𝚒𝚘𝚗
║ ${setv} ${prefix}𝚍𝚎𝚕𝚜𝚎𝚜𝚜𝚒𝚘𝚗
║ ${setv} ${prefix}𝚍𝚎𝚕𝚜𝚊𝚖𝚙𝚊𝚑
║ ${setv} ${prefix}𝚞𝚙𝚜𝚠
║ ${setv} ${prefix}𝚋𝚊𝚌𝚔𝚞𝚙
║ ${setv} ${prefix}$
║ ${setv} ${prefix}>
║ ${setv} ${prefix}<
╚═══════════════════════╝`
				await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'botmenu': {
				const menunya = `
╔═══ ❖ 𝙱𝙾𝚃 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚙𝚛𝚘𝚏𝚒𝚕𝚎
║ ${setv} ${prefix}𝚌𝚕𝚊𝚒𝚖
║ ${setv} ${prefix}𝚋𝚞𝚢 [item] (nominal)
║ ${setv} ${prefix}𝚝𝚛𝚊𝚗𝚜𝚏𝚎𝚛
║ ${setv} ${prefix}𝚕𝚎𝚊𝚍𝚎𝚛𝚋𝚘𝚊𝚛𝚍
║ ${setv} ${prefix}𝚛𝚎𝚚𝚞𝚎𝚜𝚝 (text)
║ ${setv} ${prefix}𝚛𝚎𝚊𝚌𝚝 (emoji)
║ ${setv} ${prefix}𝚝𝚊𝚐𝚖𝚎
║ ${setv} ${prefix}𝚛𝚞𝚗𝚝𝚒𝚖𝚎
║ ${setv} ${prefix}𝚝𝚘𝚝𝚊𝚕𝚏𝚒𝚝𝚞𝚛
║ ${setv} ${prefix}𝚜𝚙𝚎𝚎𝚍
║ ${setv} ${prefix}𝚙𝚒𝚗𝚐
║ ${setv} ${prefix}𝚊𝚏𝚔
║ ${setv} ${prefix}𝚛𝚟𝚘
║ ${setv} ${prefix}𝚒𝚗𝚜𝚙𝚎𝚌𝚝 (url gc)
║ ${setv} ${prefix}𝚊𝚍𝚍𝚖𝚜𝚐
║ ${setv} ${prefix}𝚍𝚎𝚕𝚖𝚜𝚐
║ ${setv} ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚖𝚜𝚐
║ ${setv} ${prefix}𝚜𝚎𝚝𝚌𝚖𝚍
║ ${setv} ${prefix}𝚍𝚎𝚕𝚌𝚖𝚍
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚌𝚖𝚍
║ ${setv} ${prefix}𝚕𝚘𝚌𝚔𝚌𝚖𝚍
║ ${setv} ${prefix}𝚚
║ ${setv} ${prefix}𝚖𝚎𝚗𝚏𝚎𝚜 (62xxx|nama palsu)
║ ${setv} ${prefix}𝚌𝚘𝚗𝚏𝚎𝚜 (62xxx|nama palsu)
║ ${setv} ${prefix}𝚛𝚘𝚘𝚖𝚊𝚒
║ ${setv} ${prefix}𝚓𝚊𝚍𝚒𝚋𝚘𝚝 🔸
║ ${setv} ${prefix}𝚜𝚝𝚘𝚙𝚓𝚊𝚍𝚒𝚋𝚘𝚝
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚓𝚊𝚍𝚒𝚋𝚘𝚝
║ ${setv} ${prefix}𝚍𝚘𝚗𝚊𝚜𝚒
║ ${setv} ${prefix}𝚊𝚍𝚍𝚜𝚎𝚠𝚊
║ ${setv} ${prefix}𝚍𝚎𝚕𝚜𝚎𝚠𝚊
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚜𝚎𝚠𝚊
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'groupmenu': {
				const menunya = `
╔═══ ❖ 𝙶𝚁𝙾𝚄𝙿 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚊𝚍𝚍 (62xxx)
║ ${setv} ${prefix}𝚔𝚒𝚌𝚔 (@tag/62xxx)
║ ${setv} ${prefix}𝚙𝚛𝚘𝚖𝚘𝚝𝚎 (@tag/62xxx)
║ ${setv} ${prefix}𝚍𝚎𝚖𝚘𝚝𝚎 (@tag/62xxx)
║ ${setv} ${prefix}𝚠𝚊𝚛𝚗 (@tag/62xxx)
║ ${setv} ${prefix}𝚞𝚗𝚠𝚊𝚛𝚗 (@tag/62xxx)
║ ${setv} ${prefix}𝚜𝚎𝚝𝚗𝚊𝚖𝚎 (nama baru gc)
║ ${setv} ${prefix}𝚜𝚎𝚝𝚍𝚎𝚜𝚌 (desk)
║ ${setv} ${prefix}𝚜𝚎𝚝𝚙𝚙𝚐𝚌 (reply imgnya)
║ ${setv} ${prefix}𝚍𝚎𝚕𝚎𝚝𝚎 (reply pesan)
║ ${setv} ${prefix}𝚕𝚒𝚗𝚔𝚐𝚛𝚞𝚙
║ ${setv} ${prefix}𝚛𝚎𝚟𝚘𝚔𝚎
║ ${setv} ${prefix}𝚝𝚊𝚐𝚊𝚕𝚕
║ ${setv} ${prefix}𝚙𝚒𝚗
║ ${setv} ${prefix}𝚞𝚗𝚙𝚒𝚗
║ ${setv} ${prefix}𝚑𝚒𝚍𝚎𝚝𝚊𝚐
║ ${setv} ${prefix}𝚝𝚘𝚝𝚊𝚐 (reply pesan)
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚘𝚗𝚕𝚒𝚗𝚎
║ ${setv} ${prefix}𝚐𝚛𝚘𝚞𝚙 𝚜𝚎𝚝
║ ${setv} ${prefix}𝚐𝚛𝚘𝚞𝚙 (khusus admin)
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'searchmenu': {
				const menunya = `
╔═══ ❖ 𝚂𝙴𝙰𝚁𝙲𝙷 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚢𝚝𝚜𝚎𝚊𝚛𝚌𝚑 (query)
║ ${setv} ${prefix}𝚜𝚙𝚘𝚝𝚒𝚏𝚢 (query)
║ ${setv} ${prefix}𝚙𝚒𝚡𝚒𝚟 (query)
║ ${setv} ${prefix}𝚙𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝 (query)
║ ${setv} ${prefix}𝚠𝚊𝚕𝚕𝚙𝚊𝚙𝚎𝚛 (query)
║ ${setv} ${prefix}𝚛𝚒𝚗𝚐𝚝𝚘𝚗𝚎 (query)
║ ${setv} ${prefix}𝚐𝚘𝚘𝚐𝚕𝚎 (query)
║ ${setv} ${prefix}𝚐𝚒𝚖𝚊𝚐𝚎 (query)
║ ${setv} ${prefix}𝚗𝚙𝚖 (query)
║ ${setv} ${prefix}𝚜𝚝𝚢𝚕𝚎 (query)
║ ${setv} ${prefix}𝚌𝚞𝚊𝚌𝚊 (kota)
║ ${setv} ${prefix}𝚝𝚎𝚗𝚘𝚛 (query)
║ ${setv} ${prefix}𝚞𝚛𝚋𝚊𝚗 (query)
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'downloadmenu': {
				const menunya = `
╔═══ ❖ 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚢𝚝𝚖𝚙𝟹 (url)
║ ${setv} ${prefix}𝚢𝚝𝚖𝚙𝟺 (url)
║ ${setv} ${prefix}𝚒𝚗𝚜𝚝𝚊𝚐𝚛𝚊𝚖 (url)
║ ${setv} ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔 (url)
║ ${setv} ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚖𝚙𝟹 (url)
║ ${setv} ${prefix}𝚏𝚊𝚌𝚎𝚋𝚘𝚘𝚔 (url)
║ ${setv} ${prefix}𝚜𝚙𝚘𝚝𝚒𝚏𝚢𝚍𝚕 (url)
║ ${setv} ${prefix}𝚖𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎 (url)
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'quotesmenu': {
				const menunya = `
╔═══ ❖ 𝚀𝚄𝙾𝚃𝙴𝚂 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚖𝚘𝚝𝚒𝚟𝚊𝚜𝚒
║ ${setv} ${prefix}𝚚𝚞𝚘𝚝𝚎𝚜
║ ${setv} ${prefix}𝚝𝚛𝚞𝚝𝚑
║ ${setv} ${prefix}𝚋𝚒𝚓𝚊𝚔
║ ${setv} ${prefix}𝚍𝚊𝚛𝚎
║ ${setv} ${prefix}𝚋𝚞𝚌𝚒𝚗
║ ${setv} ${prefix}𝚛𝚎𝚗𝚞𝚗𝚐𝚊𝚗
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'toolsmenu': {
				const menunya = `
╔═══ ❖ 𝚃𝙾𝙾𝙻𝚂 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚐𝚎𝚝 (url) 🔸️
║ ${setv} ${prefix}𝚑𝚍 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚊𝚞𝚍𝚒𝚘 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚖𝚙𝟹 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚟𝚗 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚒𝚖𝚊𝚐𝚎 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚙𝚝𝚟 (reply pesan)
║ ${setv} ${prefix}𝚝𝚘𝚞𝚛𝚕 (reply pesan)
║ ${setv} ${prefix}𝚝𝚝𝚜 (textnya)
║ ${setv} ${prefix}𝚝𝚘𝚚𝚛 (textnya)
║ ${setv} ${prefix}𝚋𝚛𝚊𝚝 (textnya)
║ ${setv} ${prefix}𝚋𝚛𝚊𝚝𝚟𝚒𝚍 (textnya)
║ ${setv} ${prefix}𝚜𝚜𝚠𝚎𝚋 (url) 🔸️
║ ${setv} ${prefix}𝚜𝚝𝚒𝚌𝚔𝚎𝚛 (img)
║ ${setv} ${prefix}𝚌𝚘𝚕𝚘𝚗𝚐 (reply sticker)
║ ${setv} ${prefix}𝚜𝚖𝚎𝚖𝚎 (img)
║ ${setv} ${prefix}𝚍𝚎𝚑𝚊𝚣𝚎 (img)
║ ${setv} ${prefix}𝚌𝚘𝚕𝚘𝚛𝚒𝚣𝚎 (img)
║ ${setv} ${prefix}𝚑𝚒𝚝𝚊𝚖𝚔𝚊𝚗 (img)
║ ${setv} ${prefix}𝚎𝚖𝚘𝚓𝚒𝚖𝚒𝚡 🙃+💀
║ ${setv} ${prefix}𝚗𝚞𝚕𝚒𝚜
║ ${setv} ${prefix}𝚛𝚎𝚊𝚍𝚖𝚘𝚛𝚎 text1|text2
║ ${setv} ${prefix}𝚚𝚌 (pesannya)
║ ${setv} ${prefix}𝚝𝚛𝚊𝚗𝚜𝚕𝚊𝚝𝚎
║ ${setv} ${prefix}𝚠𝚊𝚜𝚝𝚎𝚍 (img)
║ ${setv} ${prefix}𝚝𝚛𝚒𝚐𝚐𝚎𝚛𝚎𝚍 (img)
║ ${setv} ${prefix}𝚜𝚑𝚘𝚛𝚝𝚞𝚛𝚕 (url)
║ ${setv} ${prefix}𝚐𝚒𝚝𝚌𝚕𝚘𝚗𝚎 (url)
║ ${setv} ${prefix}𝚏𝚊𝚝 (audio)
║ ${setv} ${prefix}𝚏𝚊𝚜𝚝 (audio)
║ ${setv} ${prefix}𝚋𝚊𝚜𝚜 (audio)
║ ${setv} ${prefix}𝚜𝚕𝚘𝚠 (audio)
║ ${setv} ${prefix}𝚝𝚞𝚙𝚊𝚒 (audio)
║ ${setv} ${prefix}𝚍𝚎𝚎𝚙 (audio)
║ ${setv} ${prefix}𝚛𝚘𝚋𝚘𝚝 (audio)
║ ${setv} ${prefix}𝚋𝚕𝚘𝚠𝚗 (audio)
║ ${setv} ${prefix}𝚛𝚎𝚟𝚎𝚛𝚜𝚎 (audio)
║ ${setv} ${prefix}𝚜𝚖𝚘𝚘𝚝𝚑 (audio)
║ ${setv} ${prefix}𝚎𝚊𝚛𝚛𝚊𝚙𝚎 (audio)
║ ${setv} ${prefix}𝚗𝚒𝚐𝚑𝚝𝚌𝚘𝚛𝚎 (audio)
║ ${setv} ${prefix}𝚐𝚎𝚝𝚎𝚡𝚒𝚏 (sticker)
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'aimenu': {
				const menunya = `
╔═══ ❖ 𝙰𝙸 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚊𝚒 (query)
║ ${setv} ${prefix}𝚜𝚒𝚖𝚒 (query)
║ ${setv} ${prefix}𝚐𝚎𝚖𝚒𝚗𝚒 (query)
║ ${setv} ${prefix}𝚝𝚡𝚝𝟸𝚒𝚖𝚐 (query)
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'randommenu': {
				const menunya = `
╔═══ ❖ 𝚁𝙰𝙽𝙳𝙾𝙼 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚌𝚘𝚏𝚏𝚎
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'stalkermenu': {
				const menunya = `
╔═══ ❖ 𝚂𝚃𝙰𝙻𝙺𝙴𝚁 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚠𝚊𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚝𝚎𝚕𝚎𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚒𝚐𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚝𝚒𝚔𝚝𝚘𝚔𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚐𝚒𝚝𝚑𝚞𝚋𝚜𝚝𝚊𝚕𝚔
║ ${setv} ${prefix}𝚐𝚎𝚗𝚜𝚑𝚒𝚗𝚜𝚝𝚊𝚕𝚔
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'panelmenu': {
				const menunya = `
╔═══ ❖ 𝙿𝙰𝙽𝙴𝙻 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}1𝚐𝚋
║ ${setv} ${prefix}2𝚐𝚋
║ ${setv} ${prefix}3𝚐𝚋
║ ${setv} ${prefix}4𝚐𝚋
║ ${setv} ${prefix}5𝚐𝚋
║ ${setv} ${prefix}6𝚐𝚋
║ ${setv} ${prefix}7𝚐𝚋
║ ${setv} ${prefix}8𝚐𝚋
║ ${setv} ${prefix}9𝚐𝚋
║ ${setv} ${prefix}10𝚐𝚋
║ ${setv} ${prefix}𝚞𝚗𝚕𝚒
║ ${setv} ${prefix}𝚌𝚛𝚎𝚊𝚝𝚎𝚊𝚍𝚖𝚒𝚗
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚞𝚜𝚛
║ ${setv} ${prefix}𝚍𝚎𝚕𝚞𝚜𝚛
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚜𝚛𝚟
║ ${setv} ${prefix}𝚍𝚎𝚕𝚜𝚛𝚟
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'animemenu': {
				const menunya = `
╔═══ ❖ 𝙰𝙽𝙸𝙼𝙴 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚠𝚊𝚒𝚏𝚞
║ ${setv} ${prefix}𝚗𝚎𝚔𝚘
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'gamemenu': {
				const menunya = `
╔═══ ❖ 𝙶𝙰𝙼𝙴 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚝𝚒𝚌𝚝𝚊𝚌𝚝𝚘𝚎
║ ${setv} ${prefix}𝚊𝚔𝚒𝚗𝚊𝚝𝚘𝚛
║ ${setv} ${prefix}𝚜𝚞𝚒𝚝
║ ${setv} ${prefix}𝚜𝚕𝚘𝚝
║ ${setv} ${prefix}𝚖𝚊𝚝𝚑 (level)
║ ${setv} ${prefix}𝚋𝚎𝚐𝚊𝚕
║ ${setv} ${prefix}𝚞𝚕𝚊𝚛𝚝𝚊𝚗𝚐𝚐𝚊
║ ${setv} ${prefix}𝚋𝚕𝚊𝚌𝚔𝚓𝚊𝚌𝚔
║ ${setv} ${prefix}𝚌𝚊𝚝𝚞𝚛
║ ${setv} ${prefix}𝚌𝚊𝚜𝚒𝚗𝚘 (nominal)
║ ${setv} ${prefix}𝚜𝚊𝚖𝚐𝚘𝚗𝚐 (nominal)
║ ${setv} ${prefix}𝚛𝚊𝚖𝚙𝚘𝚔 (@tag)
║ ${setv} ${prefix}𝚝𝚎𝚔𝚊𝚝𝚎𝚔𝚒
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚕𝚒𝚛𝚒𝚔
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚔𝚊𝚝𝚊
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚋𝚘𝚖
║ ${setv} ${prefix}𝚜𝚞𝚜𝚞𝚗𝚔𝚊𝚝𝚊
║ ${setv} ${prefix}𝚌𝚘𝚕𝚘𝚛𝚋𝚕𝚒𝚗𝚍
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚔𝚒𝚖𝚒𝚊
║ ${setv} ${prefix}𝚌𝚊𝚔𝚕𝚘𝚗𝚝𝚘𝚗𝚐
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚊𝚗𝚐𝚔𝚊
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚗𝚎𝚐𝚊𝚛𝚊
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚐𝚊𝚖𝚋𝚊𝚛
║ ${setv} ${prefix}𝚝𝚎𝚋𝚊𝚔𝚋𝚎𝚗𝚍𝚎𝚛𝚊
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case 'funmenu': {
				const menunya = `
╔═══ ❖ 𝙵𝚄𝙽 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚌𝚘𝚋𝚊
║ ${setv} ${prefix}𝚍𝚊𝚍𝚞
║ ${setv} ${prefix}𝚋𝚒𝚜𝚊𝚔𝚊𝚑 (text)
║ ${setv} ${prefix}𝚊𝚙𝚊𝚔𝚊𝚑 (text)
║ ${setv} ${prefix}𝚔𝚊𝚙𝚊𝚗 (text)
║ ${setv} ${prefix}𝚜𝚒𝚊𝚙𝚊 (text)
║ ${setv} ${prefix}𝚔𝚎𝚛𝚊𝚗𝚐𝚊𝚓𝚊𝚒𝚋 (text)
║ ${setv} ${prefix}𝚌𝚎𝚔𝚖𝚊𝚝𝚒 (nama lu)
║ ${setv} ${prefix}𝚌𝚎𝚔𝚜𝚒𝚏𝚊𝚝
║ ${setv} ${prefix}𝚌𝚎𝚔𝚔𝚑𝚘𝚍𝚊𝚖 (nama lu)
║ ${setv} ${prefix}𝚛𝚊𝚝𝚎 (reply pesan)
║ ${setv} ${prefix}𝚓𝚘𝚍𝚘𝚑𝚔𝚞
║ ${setv} ${prefix}𝚓𝚊𝚍𝚒𝚊𝚗
║ ${setv} ${prefix}𝚏𝚒𝚝𝚗𝚊𝚑
║ ${setv} ${prefix}𝚑𝚊𝚕𝚊𝚑 (text)
║ ${setv} ${prefix}𝚑𝚒𝚕𝚒𝚑 (text)
║ ${setv} ${prefix}𝚑𝚞𝚕𝚞𝚑 (text)
║ ${setv} ${prefix}𝚑𝚎𝚕𝚎𝚑 (text)
║ ${setv} ${prefix}𝚑𝚘𝚕𝚘𝚑 (text)
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break
			case "1gb": case "2gb": case "3gb": case "4gb": case "5gb": 
case "6gb": case "7gb": case "8gb": case "9gb": case "10gb": 
case "unlimited": case "unli": {
    if (!isCreator && !isPremium) {
        return m.reply(`Cih`);
    }
    if (!text) return m.reply(`.${command} username,628XXX`);

    let nomor, usernem;
    let tek = text.split(",");
    if (tek.length > 1) {
        let [users, nom] = tek.map(t => t.trim());
        if (!users || !nom) return m.reply(`.${command} username,628XXX`);
        nomor = nom.replace(/[^0-9]/g, "") + "@s.whatsapp.net";
        usernem = users.toLowerCase();
    } else {
        usernem = text.toLowerCase();
        nomor = m.isGroup ? m.sender : m.chat
    }

    try {
        var onWa = await alya.onWhatsApp(nomor.split("@")[0]);
        if (onWa.length < 1) return m.reply("Nomor target tidak terdaftar di WhatsApp!");
    } catch (err) {
        return m.reply("Terjadi kesalahan saat mengecek nomor WhatsApp: " + err.message);
    }

    // Mapping RAM, Disk, dan CPU
    const resourceMap = {
        "1gb": { ram: "1000", disk: "1000", cpu: "40" },
        "2gb": { ram: "2000", disk: "1000", cpu: "60" },
        "3gb": { ram: "3000", disk: "2000", cpu: "80" },
        "4gb": { ram: "4000", disk: "2000", cpu: "100" },
        "5gb": { ram: "5000", disk: "3000", cpu: "120" },
        "6gb": { ram: "6000", disk: "3000", cpu: "140" },
        "7gb": { ram: "7000", disk: "4000", cpu: "160" },
        "8gb": { ram: "8000", disk: "4000", cpu: "180" },
        "9gb": { ram: "9000", disk: "5000", cpu: "200" },
        "10gb": { ram: "10000", disk: "5000", cpu: "220" },
        "unlimited": { ram: "0", disk: "0", cpu: "0" }
    };
    
    let { ram, disk, cpu } = resourceMap[command] || { ram: "0", disk: "0", cpu: "0" };

    let username = usernem.toLowerCase();
    let email = username + "@gmail.com";
    let name = username + " Server";
    let password = username + "001";

    try {
        let f = await fetch(domain + "/api/application/users", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({ email, username, first_name: name, last_name: "Server", language: "en", password })
        });
        let data = await f.json();
        if (data.errors) return m.reply("Error: " + JSON.stringify(data.errors[0], null, 2));
        let user = data.attributes;

        let f1 = await fetch(domain + `/api/application/nests/${nestid}/eggs/` + egg, {
            method: "GET",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey }
        });
        let data2 = await f1.json();
        let startup_cmd = data2.attributes.startup;

        let f2 = await fetch(domain + "/api/application/servers", {
            method: "POST",
            headers: { "Accept": "application/json", "Content-Type": "application/json", "Authorization": "Bearer " + apikey },
            body: JSON.stringify({
                name,
                description: tanggal(Date.now()),
                user: user.id,
                egg: parseInt(egg),
                docker_image: "ghcr.io/parkervcp/yolks:nodejs_20",
                startup: startup_cmd,
                environment: { INST: "npm", USER_UPLOAD: "0", AUTO_UPDATE: "0", CMD_RUN: "npm start" },
                limits: { memory: ram, swap: 0, disk, io: 500, cpu },
                feature_limits: { databases: 5, backups: 5, allocations: 5 },
                deploy: { locations: [parseInt(loc)], dedicated_ip: false, port_range: [] },
            })
        });
        let result = await f2.json();
        if (result.errors) return m.reply("Error: " + JSON.stringify(result.errors[0], null, 2));
        
        let server = result.attributes;
        var orang = nomor
        if (m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor == m.sender ? "private chat" : nomor.split("@")[0]}`)
        }        
        if (nomor !== m.sender && !m.isGroup) {
        await m.reply(`Berhasil membuat akun panel ✅\ndata akun sudah di kirim ke ${nomor.split("@")[0]}`)
        }
        
        let teks = `
*Berikut Detail Akun Panel Kamu 📦*

*📡 ID Server (${server.id})* 
*👤 Username :* ${user.username}
*🔐 Password :* ${password}
*🗓️ ${tanggal(Date.now())}*

*🌐 Spesifikasi Server*
* Ram : *${ram == "0" ? "Unlimited" : ram / 1000 + "GB"}*
* Disk : *${disk == "0" ? "Unlimited" : disk / 1000 + "GB"}*
* CPU : *${cpu == "0" ? "Unlimited" : cpu + "%"}*
* ${global.domain}

*Syarat & Ketentuan :*
* Expired panel 1 bulan
* Simpan data ini sebaik mungkin
* Garansi pembelian 15 hari (1x replace)
* Claim garansi wajib membawa bukti chat pembelian
`;

        await alya.sendMessage(orang, { text: teks }, { quoted: m });
    } catch (err) {
        return m.reply("Terjadi kesalahan: " + err.message);
    }
}
break
case 'listusr': {
  if (!isCreator) return m.reply(mess.owner)
  let page = args[0] ? args[0] : '1';
  let f = await fetch(domain + "/api/application/users?page=" + page, {
    "method": "GET",
    "headers": {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + apikey
    }
  });
  let res = await f.json();
  let users = res.data;
  let messageText = "Berikut list user:\n\n";
  
  for (let user of users) {
    let u = user.attributes;
    messageText += `ID: ${u.id} - Status: ${u.attributes?.user?.server_limit === null ? 'Inactive' : 'Active'}\n`;
    messageText += `${u.username}\n`;
    messageText += `${u.first_name} ${u.last_name}\n\n`;
  }
  
  messageText += `Page: ${res.meta.pagination.current_page}/${res.meta.pagination.total_pages}\n`;
  messageText += `Total Users: ${res.meta.pagination.count}`;
  
  await alya.sendMessage(m.chat, { text: messageText }, { quoted: m });
  
  if (res.meta.pagination.current_page < res.meta.pagination.total_pages) {
    m.reply(`Gunakan perintah ${prefix}listusr ${res.meta.pagination.current_page + 1} untuk melihat halaman selanjutnya.`);
  }
}
break
case 'delsrv': {
      if (!isCreator) return m.reply(`Khusus ${global.botname} Aja`)

let srv = args[0]
if (!srv) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/servers/" + srv, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey,
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*SERVER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE SERVER*')
}
        break
        case 'createadmin': {
if (!isCreator) return m.reply(mess.owner)
let s = q.split(',')
let email = s[0];
let username = s[0]
let nomor = s[1]
if (s.length < 2) return m.reply(`*Format salah!*
Penggunaan:
${prefix + command} user,nomer`)
if (!username) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
if (!nomor) return m.reply(`Ex : ${prefix+command} Username,@tag/nomor\n\nContoh :\n${prefix+command} example,@user`)
let password = username + "46093"
let nomornya = nomor.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
let f = await fetch(domain + "/api/application/users", {
"method": "POST",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
},
"body": JSON.stringify({
"email": username + "@gmail.com",
"username": username,
"first_name": username,
"last_name": "Memb",
"language": "en",
 "root_admin" : true,  
"password": password.toString()
})

})

let data = await f.json();

if (data.errors) return m.reply(JSON.stringify(data.errors[0], null, 2));

let user = data.attributes

let tks = `
TYPE: user

📡ID: ${user.id}
🌷UUID: ${user.uuid}
👤USERNAME: ${user.username}
📬EMAIL: ${user.email}
🦖NAME: ${user.first_name} ${user.last_name}
🔥LANGUAGE: ${user.language}
📊ADMIN: ${user.root_admin}
☢️CREATED AT: ${user.created_at}

🖥️LOGIN: ${domain}
`
    const listMessage = {

        text: tks,

    }

	

    await alya.sendMessage(m.chat, listMessage)

    await alya.sendMessage(nomornya, {

        text: `*BERIKUT DETAIL AKUN ADMIN  PANEL ANDA*\n
USERNAME :  ${username}
PASSWORD: ${password}
LOGIN: ${domain}


*NOTE : OWNER HANYA MENGIRIM 1X DATA AKUN ANDA MOHON DI SIMPAN BAIK BAIK KALAU DATA AKUN ANDA HILANG OWNER TIDAK DAPAT MENGIRIM AKUN ANDA LAGI*


`,

    })
}
break
case 'delusr': {
  if (!isCreator) return m.reply(`Khusus ${global.botname} Aja`)
let usr = args[0]
if (!usr) return m.reply('ID nya mana?')
let f = await fetch(domain + "/api/application/users/" + usr, {
"method": "DELETE",
"headers": {
"Accept": "application/json",
"Content-Type": "application/json",
"Authorization": "Bearer " + apikey
}
})
let res = f.ok ? {
errors: null
} : await f.json()
if (res.errors) return m.reply('*USER NOT FOUND*')
m.reply('*SUCCESSFULLY DELETE THE USER*')
}
        break
			case 'ownermenu': {
				const menunya = `
╔═══ ❖ 𝙾𝚆𝙽𝙴𝚁 𝙼𝙴𝙽𝚄 ❖ ═══╗
║ ${setv} ${prefix}𝚋𝚘𝚝 [𝚜𝚎𝚝]
║ ${setv} ${prefix}𝚜𝚎𝚝𝚋𝚒𝚘
║ ${setv} ${prefix}𝚜𝚎𝚝𝚙𝚙𝚋𝚘𝚝
║ ${setv} ${prefix}𝚓𝚘𝚒𝚗
║ ${setv} ${prefix}𝚕𝚎𝚊𝚟𝚎
║ ${setv} ${prefix}𝚋𝚕𝚘𝚌𝚔
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚋𝚕𝚘𝚌𝚔
║ ${setv} ${prefix}𝚘𝚙𝚎𝚗𝚋𝚕𝚘𝚌𝚔
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚙𝚌
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚐𝚌
║ ${setv} ${prefix}𝚋𝚊𝚗
║ ${setv} ${prefix}𝚞𝚗𝚋𝚊𝚗
║ ${setv} ${prefix}𝚖𝚞𝚝𝚎
║ ${setv} ${prefix}𝚞𝚗𝚖𝚞𝚝𝚎
║ ${setv} ${prefix}𝚌𝚛𝚎𝚊𝚝𝚎𝚐𝚌
║ ${setv} ${prefix}𝚌𝚕𝚎𝚊𝚛𝚌𝚑𝚊𝚝
║ ${setv} ${prefix}𝚊𝚍𝚍𝚙𝚛𝚎𝚖
║ ${setv} ${prefix}𝚍𝚎𝚕𝚙𝚛𝚎𝚖
║ ${setv} ${prefix}𝚕𝚒𝚜𝚝𝚙𝚛𝚎𝚖
║ ${setv} ${prefix}𝚊𝚍𝚍𝚕𝚒𝚖𝚒𝚝
║ ${setv} ${prefix}𝚊𝚍𝚍𝚞𝚊𝚗𝚐
║ ${setv} ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚊𝚞𝚝𝚑𝚘𝚛
║ ${setv} ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚗𝚊𝚖𝚎
║ ${setv} ${prefix}𝚜𝚎𝚝𝚋𝚘𝚝𝚙𝚊𝚌𝚔𝚗𝚊𝚖𝚎
║ ${setv} ${prefix}𝚊𝚍𝚍𝚘𝚠𝚗𝚎𝚛
║ ${setv} ${prefix}𝚍𝚎𝚕𝚘𝚠𝚗𝚎𝚛
║ ${setv} ${prefix}𝚐𝚎𝚝𝚖𝚜𝚐𝚜𝚝𝚘𝚛𝚎
║ ${setv} ${prefix}𝚋𝚘𝚝 --𝚜𝚎𝚝𝚝𝚒𝚗𝚐𝚜
║ ${setv} ${prefix}𝚋𝚘𝚝 𝚜𝚎𝚝𝚝𝚒𝚗𝚐𝚜
║ ${setv} ${prefix}𝚐𝚎𝚝𝚜𝚎𝚜𝚜𝚒𝚘𝚗
║ ${setv} ${prefix}𝚍𝚎𝚕𝚜𝚎𝚜𝚜𝚒𝚘𝚗
║ ${setv} ${prefix}𝚍𝚎𝚕𝚜𝚊𝚖𝚙𝚊𝚑
║ ${setv} ${prefix}𝚞𝚙𝚜𝚠
║ ${setv} ${prefix}𝚋𝚊𝚌𝚔𝚞𝚙
║ ${setv} ${prefix}$
║ ${setv} ${prefix}>
║ ${setv} ${prefix}<
╚═══════════════════════╝`
await alya.sendMessage(m.chat, {
        text: menunya,
        contextInfo: {
            externalAdReply: {
                title: `${botname} | ${moment().tz('Asia/Jakarta').format('HH:mm')}`,
                body: packname,
                thumbnailUrl: globalpp,
                sourceUrl: my.gh,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, {
        quoted: m
    });
			}
			break

			default:
			if (budy.startsWith('>')) {
				if (!isCreator) return
				try {
					let evaled = await eval(budy.slice(2))
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('<')) {
				if (!isCreator) return
				try {
					let evaled = await eval(`(async () => { ${budy.slice(2)} })()`)
					if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
					await m.reply(evaled)
				} catch (err) {
					await m.reply(String(err))
				}
			}
			if (budy.startsWith('$')) {
				if (!isCreator) return
				if (!text) return
				exec(budy.slice(2), (err, stdout) => {
					if (err) return m.reply(`${err}`)
					if (stdout) return m.reply(stdout)
				})
			}
			if ((!isCmd || isCreator) && budy.toLowerCase() != undefined) {
				if (m.chat.endsWith('broadcast')) return
				if (!(budy.toLowerCase() in db.database)) return
				await alya.relayMessage(m.chat, db.database[budy.toLowerCase()], {})
			}
		}
	} catch (e) {
		console.log(e);
		const errorKey = e?.code || e?.name || e?.message?.slice(0, 100) || 'unknown_error';
		const now = Date.now();
		if (!errorCache[errorKey]) errorCache[errorKey] = [];
		errorCache[errorKey] = errorCache[errorKey].filter(ts => now - ts < 600000);
		if (errorCache[errorKey].length >= 3) return;
		errorCache[errorKey].push(now);
		m.reply('Error: ' + (e?.name || e?.code || e?.output?.statusCode || e?.status || 'Tidak diketahui') + '\nLog Error Telah dikirim ke Owner\n\n')
		return alya.sendFromOwner(ownerNumber, `Halo sayang, sepertinya ada yang error nih, jangan lupa diperbaiki ya\n\nVersion : *${require('./package.json').version}*\n\n*Log error:*\n\n` + util.format(e), m, { contextInfo: { isForwarded: true }})
	}
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
});
