const fs = require('fs');
const chalk = require('chalk');
const { version } = require("./package.json")

// Settings Bot 
global.owner = '628118189945'
global.versi = version
global.namaOwner = "Epann"
global.packname = 'Epann'
global.botname = 'kennzy'
global.botname2 = 'kennzy bot'

global.tempatDB = 'database.json' // Jangan ubah
global.pairing_code = true // Jangan ubah

// Settings Link / Tautan
global.linkOwner = "https://wa.me/628118189945"
global.linkGrup = "https://kennzy.vercel.app"

// Delay Jpm & Pushctc || 1000 = 1detik
global.delayJpm = 3000
global.delayPushkontak = 6000

// Settings Channel / Saluran
global.linkSaluran = "https://whatsapp.com/channel/0029Vb5eutw5fM5epF3U0X20"
global.idSaluran = "120363403261361342@newsletter"
global.namaSaluran = "𝙠𝙚𝙣𝙣𝙯𝙮 -  𝙆"

// Tutorial Ngocok Orkut :
// * Ke CS Orkut @orderkuota 
// Teks :Kak bisa tolong buatin akun H2H kak? 
// Ntar disuruh menuliskan nama dan nomer akun orkut lu
//* klau udh di ksih pencet link okeconnect.com
//* login okeconnect.com
//* klik pojok kanan atas (garis tiga) 
//* klik Payment H2H
//* klik integrasi API
//* jadi deh Api orkut mu
//* yang qris ke website : https://scanqr.org
//Kamu upload gambar qris orderkuota mu 
//Ntar ada semacam nomer/api
//Note :
//Qris orkut wajib kecetak
// Info : https://whatsapp.com/channel/0029VakRR89L7UVPwf53TB0v/2682
global.pinH2H = "-"
global.passwordH2H = "-"
global.merchantIdOrderKuota = "OK1916757"
global.apiOrderKuota = "508792517380208121916757OKCT388147E784BC65D0E9D0735EB0C39FB5"
global.qrisOrderKuota = "00020101021126670016COM.NOBUBANK.WWW01189360050300000879140214850085847188690303UMI51440014ID.CO.QRIS.WWW0215ID20243345542820303UMI5204541153033605802ID5920BIYU STORE OK19167576008MAGELANG61055611162070703A016304FB3C"

// Settings Api Digital Ocean
global.apiDigitalOcean = "-"

// Settings Api Digital Ocean
global.apiSimpelBot = "simplebotz85"


// Settings All Payment
global.shopepay = "Tidak Tersedia"
global.dana = "085135729853"
global.ovo = "Tidak Tersedia"
global.gopay = ""

// Settings Image Url
global.image = {
menu: "https://files.catbox.moe/zxnzgb.jpeg", 
reply: "https://files.catbox.moe/zxnzgb.jpeg", 
logo: "https://files.catbox.moe/zxnzgb.jpeg", 
dana: "", 
ovo: "", 
gopay: "", 
qris: "https://files.catbox.moe/i5wtss.jpg"
}

//=============================================//
// Settings Api Panel Pterodactyl
global.egg = "15" // Egg ID
global.nestid = "5" // nest ID
global.loc = "1" // Location ID
global.domain = "https://-"
global.apikey = "-" //ptla
global.capikey = "-" //ptlc

// Settings Api Panel Pterodactyl Server 2
global.eggV2 = "15" 
global.nestidV2 = "5" 
global.locV2 = "1" 
global.domainV2 = "https://-"
global.apikeyV2 = "-" 
global.capikeyV2 = "-" 

// Settings Api Panel Pterodactyl Server 3
global.eggV3 = "15"
global.nestidV3 = "5"
global.locV3 = "1"
global.domainV3 = "https://-"
global.apikeyV3 = "-"
global.capikeyV3 = "-"

// Settings Api Panel Pterodactyl Server 4
global.eggV4 = "15"
global.nestidV4 = "5"
global.locV4 = "1"
global.domainV4 = "https://-"
global.apikeyV4 = "-"
global.capikeyV4 = "-"

// Settings Api Panel Pterodactyl Server 5
global.eggV5 = "15"
global.nestidV5 = "5"
global.locV5 = "1"
global.domainV5 = "https://-"
global.apikeyV5 = "-"
global.capikeyV5 = "-"
//=============================================//

// Settings Api Subdomain
global.subdomain = {
  "": {
    "zone": "",
    "apitoken": "-"
  }
};

// Message Command 
global.mess = {
	owner: "* *Akses Ditolak*\nFitur ini hanya untuk owner bot!",
	admin: "* *Akses Ditolak*\nFitur ini hanya untuk admin grup!",
	botAdmin: "* *Akses Ditolak*\nFitur ini hanya untuk ketika bot menjadi admin!",
	group: "* *Akses Ditolak*\nFitur ini hanya untuk dalam grup!",
	private: "* *Akses Ditolak*\nFitur ini hanya untuk dalam private chat!",
	prem: "* *Akses Ditolak*\nFitur ini hanya untuk user premium!",
	wait: 'Loading...',
	error: 'Error!',
	done: 'Done'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})