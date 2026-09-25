// Base © Kyaimi Silence
// Dev © Zion dev
//Recode © Kenn Official

require("./Mane")
const fs = require('fs')
const { version } = require("./package.json")
//~~~~~~~~~SETTING BOT~~~~~~~~~~//

// set prefix
global.setprefix = "."

// Bebas Ubah
global.owner = "628118189945"
global.nobot = "62"
global.namaowner = "Epann"
global.namaBot = "Waguri🍃"
global.title = "Waguri🍃"

// Jangan Di ubah
global.creator = `${global.owner}@s.whatsapp.net` 
global.foother = `© ${namaBot}`
global.versi = version
global.nama = namaBot 
global.namach = nama 
global.namafile = foother 
global.author = namaowner

// Bebas Ubah
// True = on || False = Off 
global.autoread = false
global.autotyping = false
global.Antilinkgc = false
global.Antilinkch = false
global.antispam = false
global.onlygc = false
global.autobio = false

// [ THEME URL & URL ] ========//
global.thumbnail = "https://files.catbox.moe/dk1rcu.jpg"

// Set Payment
global.qris = ""
global.dana = "08xxx"
global.gopay = "08xxx"

// ===={ Set Link }
global.ch = 'https://whatsapp.com/channel/0029Vb6pEVXLCoX2PARoRH3m'
global.idch = '120363421364755506@newsletter'
global.linkgc = 'https://chat.whatsapp.com/BwZfj2SjeY3EEf6fxQVRIq?mode=ems_copy_t'
global.yt = 'https://youtube.com/@Kenvxy'
global.nekorin = "https://api.nekorinn.my.id"
global.idgc = "120363421785682791@g.us"

// User Sosmed
global.tt = "@whousdisz"
global.yt = "@amaneofc"
global.ig = "@amaneofc"

// Setting Api cVPS
global.doToken = "APIKEY"
global.linodeToken = "APIKEY"

// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https"
global.apikey = "ptla" //ptla
global.capikey = "ptlc" //ptlc

// Isi Api Gemini Lu
global.api = "AIzaSyDE7R-5gnjgeqYGSMGiZVjA5VkSrQvile8"

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
