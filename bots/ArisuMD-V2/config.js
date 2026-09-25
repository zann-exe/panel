require("./Zion")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// Bebas Ubah
global.owner = "628118189945"
global.nobot = "628118189945"
global.namaowner = "Epann"
global.namaBot = "Arisu-MD"
global.title = "Arisu-MD"

// Jangan Di ubah
global.creator = `${global.owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = "New"
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner

// Bebas Ubah
// True = on || False = Off 
global.status = true
global.owneroff = true
global.autoread = false
global.autotyping = false
global.Antilinkgc = false
global.Antilinkch = false
global.antispam = true
global.onlygc = false

// Set Payment
global.qris = "https://files.catbox.moe/i5wtss.jpg"
global.dana = "085135729853"
global.gopay = ""

// ===={ Set Link }
global.ch = 'https://whatsapp.com/channel/0029Vb5eutw5fM5epF3U0X20'
global.idch = 'https://whatsapp.com/channel/0029Vb5eutw5fM5epF3U0X20@newsletter'
global.linkgc = 'https://chat.whatsapp.com/BwZfj2SjeY3EEf6fxQVRIq?mode=ems_copy_t'
global.yt = 'https://youtube.com/@xx'
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = "@g.us"
// set prefix
global.setprefix = ".", "/", "#"

// User Sosmed
global.tt = "@kennkitii"
global.yt = "@Kennvxy"
global.ig = "@kenvxy_"

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// [ THEME URL & URL ] ========//
global.thumbnail = 'https://files.catbox.moe/fqdiqa.jpg'

// Settings reply ~~~~~~~~~//
global.mess = {
    owner: "Khusus Owner",
    prem: "Khusus Premium",
    group: "Khusus di Group Chat",
    admin: "Khusus Admin",
    botadmin: "Bot Harus Jadi Admin",
    private: "Khusus di Private Chat",
    done: "Sukses"
}

global.packname = nama
global.author = namaBot

//
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

//~~~~~~~~~~~ DIEMIN ~~~~~~~~~~//

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
