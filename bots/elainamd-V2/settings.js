/* 

 * Created : Epann
 * Base Ori : ᴢᴜʀᴇ
 * NoWa : 628118189945
 * Myt : @azure sensei
 
 * Hargai Pengembang Dengan Cara Tidak Menghapue Credit Untuk Yang Upload Di Tambahan Tag Yt Atas Dan Rename Juga Untuk Menghargai Pengembang Dengan Cara Tidak Menghapus Credit

*/

const fs = require('fs')
const chalk = require('chalk')

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS OWNER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.owner = ["628118189945"] // Ganti No Owner Ada Di Database/owner.json
global.ownername = "Epann"
global.fother = "ᴇʟᴀɪɴᴀ - ᴀɪ"
global.website = "https://kenn-mu.vercel.app"
global.idch = ['120363403261361342@newsletter'] 
global.idch2 = ['120363404156199945@newsletter']
global.ceha = "https://whatsapp.com/channel/0029Vb5eutw5fM5epF3U0X20"
global.linkgc = "https://chat.whatsapp.com/JiSRWEVhHeP6Q7nS15QwfF?mode=ac_t"
global.yt = "https://www.youtube.com/@Kennvxy"
global.dana = "085135729853"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS BOT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
global.typemenu = 'v1'
global.namabot = "ᴇʟᴀɪɴᴀ - ᴍᴅ"
global.botkapital = "ELAINA - AI"
global.baileys = "@ᴡʜɪsᴋᴇʏsᴏᴄᴋᴇᴛs"
global.autoread = false
global.autotyping = false
global.nomorbot = "628118189945"
global.version = "1.0.0"
global.packname = 'Stick By'
global.author = 'Epann\nElaina'
global.foother = 'Created By Epann'
global.wlcm = []
global.wlcmm = []
global.warn = "https://cloudkuimages.guru/uploads/images/6829f8a9a74ec.jpg"
global.qris = "https://files.catbox.moe/gtdn99.jpeg"
global.thumblist = "https://files.catbox.moe/r5npzc.jpg"
global.ftallmenu = "https://files.catbox.moe/r5npzc.jpg"
global.thumnreply = "https://files.catbox.moe/v0lp20.jpg"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS LINODE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.apilinode = ''
global.apiDigitalOcean = "-"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS API ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.qriscode = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214338273803986920303UMI51440014ID.CO.QRIS.WWW0215ID20253892893930303UMI5204541153033605802ID5919DAY STORE OK23513226013JAKARTA PUSAT61051011062070703A0163041B93"
global.kyyapi = ""
global.merchan = "OK2351322"
global.keyorkut = "490760117430820372351322OKCT803EB0B9D5AD4B7AEBE8C67B5A503A14"

global.merchantIdOrderKuota = "OK2351322"
global.apiOrderKuota = "490760117430820372351322OKCT803EB0B9D5AD4B7AEBE8C67B5A503A14"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214338273803986920303UMI51440014ID.CO.QRIS.WWW0215ID20253892893930303UMI5204541153033605802ID5919DAY STORE OK23513226013JAKARTA PUSAT61051011062070703A0163041B93"

global.nekorin = "https://api.nekorinn.my.id"
global.velyn = "https://velyn.biz.id"
global.fastres = "https://fastrestapis.fasturl.cloud"
global.vreden = "https://api.vreden.web.id"

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS RPG ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ \\
global.rpg = {
emoticon(string) {
string = string.toLowerCase()
let emot = {
level: '📊',
limit: '🎫',
health: '❤️',
exp: '✨',
atm: '💳',
money: '💰',
bank: '🏦',
potion: '🥤',
diamond: '💎',
common: '📦',
uncommon: '🛍️',
mythic: '🎁',
legendary: '🗃️',
superior: '💼',
pet: '🔖',
trash: '🗑',
armor: '🥼',
sword: '⚔️',
pickaxe: '⛏️',
fishingrod: '🎣',
wood: '🪵',
rock: '🪨',
string: '🕸️',
horse: '🐴',
cat: '🐱',
dog: '🐶',
fox: '🦊',
robo: '🤖',
petfood: '🍖',
iron: '⛓️',
gold: '🪙',
emerald: '❇️',
upgrader: '🧰',
bibitanggur: '🌱',
bibitjeruk: '🌿',
bibitapel: '☘️',
bibitmangga: '🍀',
bibitpisang: '🌴',
anggur: '🍇',
jeruk: '🍊',
apel: '🍎',
mangga: '🥭',
pisang: '🍌',
botol: '🍾',
kardus: '📦',
kaleng: '🏮',
plastik: '📜',
gelas: '🧋',
chip: '♋',
umpan: '🪱',
skata: '🧩'
}
let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
if (!results.length) return ''
else return emot[results[0][0]]
}
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS LIMITZ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ //
global.limitawal = {
    premium: "Infinity",
    free: 30
}

// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ SETTINGS GAME ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━ //
global.gamewaktu = 60 // Game waktu
global.suit = {};
global.tictactoe = {};
global.petakbom = {};
global.kuis = {};
global.siapakahaku = {};
global.asahotak = {};
global.susunkata = {};
global.caklontong = {};
global.family100 = {};
global.tebaklirik = {};
global.tebaklagu = {};
global.tebakgambar2 = {};
global.tebakkimia = {};
global.tebakkata = {};
global.tebakkalimat = {};
global.tebakbendera = {};
global.tebakanime = {};
global.kuismath = {};

global.mess = {
    success: 'sᴜᴄᴄᴇssғᴜʟʏ',
    admin: '[ !! ] *sʏsᴛᴇᴍ*\nᴋʜᴜsᴜs ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',
    botAdmin: '[ !! ] *sʏsᴛᴇᴍ*\nᴀᴋᴀᴍᴇ ʙᴇʟᴜᴍ ᴊᴀᴅɪ ᴀᴅᴍɪɴ',
    creator: '[ !! ] *sʏsᴛᴇᴍ*\nғᴇᴀᴛᴜʀᴇ ɪɴɪ ᴋʜᴜsᴜs ᴏᴡɴᴇʀ',
    group: '[ !! ] *sʏsᴛᴇᴍ*\nғᴇᴀᴛᴜʀᴇ ɪɴɪ ᴋʜᴜsᴜs ɢʀᴏᴜᴘ ᴀᴊᴀ',
    private: '[ !! ] *sʏsᴛᴇᴍ*\nғᴇᴀᴛᴜʀᴇ ᴋʜᴜsᴜs ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ ᴇʟᴀɪɴᴀ',
    wait: '[ !! ] *sʏsᴛᴇᴍ*\nᴡᴀɪᴛ ᴀᴋᴀᴍᴇ ᴘʀᴏsᴇs ᴅᴜʟᴜ',
    notregist: 'ᴋᴀᴍᴜ ʙᴇʟᴜᴍ ᴛᴇʀᴅᴀғᴛᴀʀ ᴅɪ ᴅᴀᴛᴀʙᴀsᴇ ᴇʟᴀɪɴᴀ sɪʟᴀʜᴋᴀɴ ᴅᴀғᴛᴀʀ ᴅᴇɴɢᴀɴ ᴄᴀʀᴀ\n\n*[ ᴅᴀғᴛᴀʀ ᴍᴀɴᴜᴀʟ ]*\n.ᴅᴀғᴛᴀʀ ɴᴀᴍᴀ,ᴜᴍᴜʀ',
    premium: '[ !! ] *sʏsᴛᴇᴍ*\nғᴇᴀᴛᴜʀᴇ ᴋʜᴜsᴜs ᴘʀᴇᴍɪᴜᴍ ᴇʟᴀɪɴᴀ',
    endLimit: '[ !! ] *sʏsᴛᴇᴍ*\nʟɪᴍɪᴛ ᴀɴᴅᴀ ʜᴀʙɪs ,, ᴀᴋᴀɴ ᴅɪ ʀᴇsᴇᴛ sᴇᴛᴇʟᴀʜ sᴇʜᴀʀɪ',
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})