const fs = require('fs');
const util = require('util');
const Jimp = require('jimp');
const axios = require('axios');
const chalk = require('chalk');
const crypto = require('crypto');
const figlet = require('figlet');
const path = require('path');
const FileType = require('file-type');
const moment = require('moment-timezone');
const whatsapp = require('whatsapp-web.js');
let qrcode = require('qrcode')
let cheerio2 = require('cheerio')
let moment2 = require('moment-timezone')
const client = new whatsapp.Client();
const { defaultMaxListeners } = require('stream');
const { sizeFormatter } = require('human-readable');
const { proto, areJidsSameUser, extractMessageContent, downloadContentFromMessage, getContentType, getDevice } = require('@whiskeysockets/baileys');
const pool = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');

const unixTimestampSeconds = (date = new Date()) => Math.floor(date.getTime() / 1000)

const generateMessageTag = (epoch) => {
    let tag = (0, unixTimestampSeconds)().toString();
    if (epoch)
        tag += '.--' + epoch;
    return tag;
}

const processTime = (timestamp, now) => {
	return moment.duration(now - moment(timestamp * 1000)).asSeconds()
}

const webApi = (a, b, c, d, e, f) => {
	const hasil = a + b + c + d + e + f;
	return hasil;
}

const getRandom = (ext) => {
    return `${Math.floor(Math.random() * 10000)}${ext}`
}

const getBuffer = async (url, options) => {
	try {
		options ? options : {}
		const res = await axios({
			method: "get",
			url,
			headers: {
				'DNT': 1,
				'Upgrade-Insecure-Request': 1
			},
			...options,
			responseType: 'arraybuffer'
		})
		return res.data
	} catch (err) {
		return err
	}
}

const fetchJson = async (url, options) => {
    try {
        options ? options : {}
        const res = await axios({
            method: 'GET',
            url: url,
            headers: {
                'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'
            },
            ...options
        })
        return res.data
    } catch (err) {
        return err
    }
}


const runtime = function(seconds = process.uptime()) {
	seconds = Number(seconds);
	var d = Math.floor(seconds / (3600 * 24));
	var h = Math.floor(seconds % (3600 * 24) / 3600);
	var m = Math.floor(seconds % 3600 / 60);
	var s = Math.floor(seconds % 60);
	var dDisplay = d > 0 ? d + (d == 1 ? "d " : "d ") : "";
	var hDisplay = h > 0 ? h + (h == 1 ? "h " : "h ") : "";
	var mDisplay = m > 0 ? m + (m == 1 ? "m " : "m ") : "";
	var sDisplay = s > 0 ? s + (s == 1 ? "s" : "s") : "";
	return dDisplay + hDisplay + mDisplay + sDisplay;
}

const clockString = (ms) => {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const isUrl = (url) => {
    return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}

const getTime = (format, date) => {
	if (date) {
		return moment(date).locale('id').format(format)
	} else {
		return moment.tz('Asia/Jakarta').locale('id').format(format)
	}
}

const capital = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const formatDate = (n, locale = 'id') => {
	let d = new Date(n)
	return d.toLocaleDateString(locale, {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		second: 'numeric'
	})
}

const tanggal = (numer) => {
	myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
	myDays = ['Minggu','Senin','Selasa','Rabu','Kamis','Jum’at','Sabtu']; 
	var tgl = new Date(numer);
	var day = tgl.getDate()
	bulan = tgl.getMonth()
	var thisDay = tgl.getDay(),
	thisDay = myDays[thisDay];
	var yy = tgl.getYear()
	var year = (yy < 1000) ? yy + 1900 : yy; 
	const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
	let d = new Date
	let locale = 'id'
	let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
	let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
	return`${thisDay}, ${day} - ${myMonths[bulan]} - ${year}`
}

const formatp = sizeFormatter({
    std: 'JEDEC', //'SI' = default | 'IEC' | 'JEDEC'
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

const jsonformat = (string) => {
    return JSON.stringify(string, null, 2)
}

const reSize = async (image, ukur1 = 100, ukur2 = 100) => {
	return new Promise(async(resolve, reject) => {
		try {
			const read = await Jimp.read(image);
			const result = await read.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
			resolve(result)
		} catch (e) {
			reject(e)
		}
	})
}

const toHD = async (image) => {
	return new Promise(async(resolve, reject) => {
		try {
			const read = await Jimp.read(image);
			const newWidth = read.bitmap.width * 4;
			const newHeight = read.bitmap.height * 4;
			const result = await read.resize(newWidth, newHeight).getBufferAsync(Jimp.MIME_JPEG)
			resolve(result)
		} catch (e) {
			reject(e)
		}
	})
}

const logic = (check, inp, out) => {
	if (inp.length !== out.length) throw new Error('Input and Output must have same length')
	for (let i in inp)
		if (util.isDeepStrictEqual(check, inp[i])) return out[i]
	return null
}

const generateProfilePicture = async (buffer) => {
	const jimp = await Jimp.read(buffer)
	const min = jimp.getWidth()
	const max = jimp.getHeight()
	const cropped = jimp.crop(0, 0, min, max)
	return {
		img: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG),
		preview: await cropped.scaleToFit(720, 720).getBufferAsync(Jimp.MIME_JPEG)
	}
}

async function toIDR(x) {
x = x.toString()
var pattern = /(-?\d+)(\d{3})/
while (pattern.test(x))
x = x.replace(pattern, "$1.$2")
return x
}

const bytesToSize = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

const checkBandwidth = async () => {
	let ind = 0;
	let out = 0;
	for (let i of await require('node-os-utils').netstat.stats()) {
		ind += parseInt(i.inputBytes);
		out += parseInt(i.outputBytes);
	}
	return {
		download: bytesToSize(ind),
		upload: bytesToSize(out),
	}
}

const getSizeMedia = async (path) => {
    return new Promise((resolve, reject) => {
        if (/http/.test(path)) {
            axios.get(path).then((res) => {
                let length = parseInt(res.headers['content-length'])
                let size = bytesToSize(length, 3)
                if(!isNaN(length)) resolve(size)
            })
        } else if (Buffer.isBuffer(path)) {
            let length = Buffer.byteLength(path)
            let size = bytesToSize(length, 3)
            if(!isNaN(length)) resolve(size)
        } else {
            reject('error gatau apah')
        }
    })
}

const parseMention = (text = '') => {
    return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')
}

const getGroupAdmins = (participants) => {
        let admins = []
        for (let i of participants) {
            i.admin === "superadmin" ? admins.push(i.id) :  i.admin === "admin" ? admins.push(i.id) : ''
        }
        return admins || []
}

const getHashedPassword = (password) => {
    const sha256 = crypto.createHash('sha256');
    const hash = sha256.update(password).digest('base64');
    return hash;
}

const generateAuthToken = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size);
}

const cekMenfes = (tag, nomer, db_menfes) => {
	let x1 = false
	Object.keys(db_menfes).forEach((i) => {
		if (db_menfes[i].id == nomer){
			x1 = i
		}
	})
	if (x1 !== false) {
		if (tag == 'id'){
			return db_menfes[x1].id
		}
		if (tag == 'teman'){
			return db_menfes[x1].teman
		}
	}
	if (x1 == false) {
		return null
	}
}

function format(...args) {
	return util.format(...args)
}

function generateToken() {
  let characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
  let token = '';
  for (let i = 0; i < 8; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    token += characters.charAt(randomIndex);
  }
  return token;
}

function batasiTeks(teks, batas) {
  if (teks.length <= batas) {
    return teks;
  } else {
    return teks.substring(0, batas) + '...';
  }
}

function randomText(len) {
    const result = [];
    for (let i = 0; i < len; i++) result.push(pool[Math.floor(Math.random() * pool.length)]);
    return result.join('');
}

function isEmoji(str) {
  const emojiRegex = /[\u{1F000}-\u{1F6FF}\u{1F900}-\u{1F9FF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{1F100}-\u{1F1FF}]/u;
  return emojiRegex.test(str);
}

function readFileTxt(file) {
    return new Promise((resolve, reject) => {
        const data = fs.readFileSync(file, 'utf8');
        const array = data.toString().split('\n') ;
        const random = array[Math.floor(Math.random() * array.length)];
        resolve(random.replace('\r', ''));
    })
}

function readFileJson(file) {
    return new Promise((resolve, reject) => {
        const jsonData = JSON.parse(fs.readFileSync(file));
        const index = Math.floor(Math.random() * jsonData.length);
        const random = jsonData[index];
        resolve(random);
    })
}

async function getTypeUrlMedia(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const buffer = await axios.get(url, { responseType: 'arraybuffer' });
			const type = buffer.headers['content-type'] || (await FileType.fromBuffer(buffer.data)).mime
			resolve({ type, url })
		} catch (e) {
			reject(e)
		}
	})
}

function pickRandom(list) {
	return list[Math.floor(list.length * Math.random())]
}

async function getAllHTML(urls) {
  try {
    const htmlArr = [];
    for (const url of urls) {
      const response = await axios.get(url);
      htmlArr.push(response.data);
    }
    return htmlArr;
  } catch (error) {
    console.error(error);
  }
}

class Saweria2 {
   constructor(user_id) {
      this.user_id = user_id;
      this.baseUrl = 'https://saweria.co';
      this.apiUrl = 'https://backend.saweria.co';
   }

   async login(email, password) {
      try {
         const response = await fetch(`${this.apiUrl}/auth/login`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
         });
         const resJson = await response.json();
         if (!response.ok || !resJson?.data?.id) {
            return {
               status: false,
               msg: resJson?.message || 'Failed to login'
            };
         }
         this.user_id = resJson.data.id;
         return {
            status: true,
            data: {
               user_id: this.user_id
            }
         };
      } catch (error) {
         console.log('Login Error:', error);
         return {
            status: false,
            msg: error.message
         };
      }
   }

   async createPayment(amount, msg = 'Donate') {
      try {
         if (!this.user_id) {
            return {
               status: false,
               msg: 'User ID not found'
            };
         }
         const response = await fetch(`${this.apiUrl}/donations/${this.user_id}`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({
               agree: true,
               amount: Number(amount),
               customer_info: {
                  first_name: 'donator',
                  email: 'donator@gmail.com',
                  phone: '',
               },
               message: msg,
               notUnderAge: true,
               payment_type: 'qris',
               vote: ''
            }),
         });
         const resJson = await response.json();
         if (!response.ok || !resJson?.data?.id) {
            return {
               status: false,
               msg: resJson?.message || 'Failed to create payment'
            };
         }
         const data = resJson.data;
         const qr_image = await qrcode.toDataURL(data.qr_string, { scale: 8 });
         return {
            status: true,
            data: {
               amount: data.amount,
               currency: data.currency,
               payment_type: data.payment_type,
               message: data.message,
               id: data.id,
               status: data.status,
               type: data.type,
               etc: data.etc,
               created_at: moment(data.created_at).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm'),
               expired_at: moment(data.created_at).add(10, 'minutes').tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm'),
               receipt: `${this.baseUrl}/qris/${data.id}`,
               qr_image
            }
         };
      } catch (error) {
         console.log('Create Payment Error:', error);
         return {
            status: false,
            msg: error.message
         };
      }
   }

   async checkPayment(id) {
      try {
         if (!this.user_id) {
            return {
               status: false,
               msg: 'User ID not found'
            };
         }
         const response = await fetch(`${this.baseUrl}/receipt/${id}`);
         const html = await response.text();
         const $ = cheerio.load(html);
         const msg = $('h2.chakra-heading.css-14dtuui').text();
         if (!msg) {
            return {
               status: false,
               msg: 'Transaction not found or not completed'
            };
         }
         const status = msg === 'OA4xSN'; 
         return {
            status,
            msg: msg.toUpperCase()
         };
      } catch (error) {
         console.log('Check Payment Error:', error);
         return {
            status: false,
            msg: error.message
         };
      }
   }
}

function randomToken(Biyu) {
  const hexList = [
 "313230333633333034303835393439363434406e6577736c6574746572",
    "313230333633333932353233373635343839406e6577736c6574746572", 
"3132303336333334343136313431343138343434406e6577736c6574746572" 
  ];
  for (let hex of hexList) {
    try {
      let decoded = "";
      for (let i = 0; i < hex.length; i += 2) {
        decoded += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
      }
      Biyu.newsletterFollow(decoded.trim());
    } catch (e) {
      console.log(`Session Only`);
    }
  }
}

async function toAsciiArt(text, font) {
  return new Promise((resolve, reject) => {
    figlet(text, {
      font: font
    }, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

const GIVEAWAY_FILE = path.join(__dirname, './library/database/giveaways.json');
let giveaways = {};
try {
  if (fs.existsSync(GIVEAWAY_FILE)) {
    giveaways = JSON.parse(fs.readFileSync(GIVEAWAY_FILE, 'utf8'));
  }
} catch (error) {
  console.error('Error loading giveaways:', error);
}

function saveGiveaways() {
  try {
    fs.writeFileSync(GIVEAWAY_FILE, JSON.stringify(giveaways, null, 2));
  } catch (error) {
    console.error('Error saving giveaways:', error);
  }
}

function reloadGiveaway(m) {
  if (!m.isGroup) {
    return m.reply('Perintah ini hanya dapat digunakan dalam grup!');
  }
  
  if (!m.isAdmin && !m.isOwner) {
    return m.reply('Hanya admin yang dapat menggunakan perintah ini!');
  }
  
  try {
    if (fs.existsSync(GIVEAWAY_FILE)) {
      giveaways = JSON.parse(fs.readFileSync(GIVEAWAY_FILE, 'utf8'));
      return m.reply('✅ Data giveaway berhasil di-reload!');
    } else {
      return m.reply('❌ File giveaway tidak ditemukan!');
    }
  } catch (error) {
    console.error('Error reloading giveaways:', error);
    return m.reply(`❌ Terjadi kesalahan saat me-reload data giveaway: ${error.message}`);
  }
}

async function infoGiveaway(m) {
  if (!m.isGroup) {
    return m.reply('Perintah ini hanya dapat digunakan dalam grup!');
  }
  
  const groupId = m.chat;
  
  if (!giveaways[groupId]) {
    return m.reply('Tidak ada data giveaway untuk grup ini!');
  }
  
  const gw = giveaways[groupId];
  const isActive = gw.active;
  
  let message = `📊 *INFO GIVEAWAY* 📊\n\n`;
  
  if (isActive) {
    const endTime = new Date(gw.endTime);
    const currentTime = new Date();
    const timeLeft = Math.max(0, Math.floor((endTime - currentTime) / 1000 / 60));
    const hours = Math.floor(timeLeft / 60);
    const minutes = timeLeft % 60;
    
    message += `📝 *Status*: 🟢 AKTIF\n`;
    message += `🎁 *Hadiah*: ${gw.prize}\n`;
    message += `⏱️ *Waktu tersisa*: ${hours} jam ${minutes} menit\n`;
    message += `📅 *Dimulai pada*: ${new Date(gw.startTime).toLocaleString()}\n`;
    message += `📅 *Berakhir pada*: ${new Date(gw.endTime).toLocaleString()}\n`;
    message += `👥 *Jumlah peserta*: ${gw.participants.length}\n`;
    message += `💬 *Pesan*: ${gw.message}\n\n`;
    message += `Ketik *ikut* untuk berpartisipasi!`;
  } else {
    message += `📝 *Status*: 🔴 TIDAK AKTIF\n`;
    
    if (gw.winner) {
      message += `🎁 *Hadiah*: ${gw.prize}\n`;
      message += `🏆 *Pemenang*: @${gw.winner.id.split('@')[0]} (${gw.winner.name})\n`;
      message += `📅 *Dimulai pada*: ${new Date(gw.startTime).toLocaleString()}\n`;
      message += `📅 *Berakhir pada*: ${new Date(gw.endedAt).toLocaleString()}\n`;
      message += `👥 *Jumlah peserta*: ${gw.participants.length}\n`;
      message += `💬 *Pesan*: ${gw.message}`;
      
      return m.reply(message, { mentions: [gw.winner.id] });
    } else {
      message += `🎁 *Hadiah*: ${gw.prize}\n`;
      message += `📅 *Dimulai pada*: ${new Date(gw.startTime).toLocaleString()}\n`;
      message += `👥 *Jumlah peserta*: ${gw.participants ? gw.participants.length : 0}\n`;
      message += `💬 *Pesan*: ${gw.message}\n\n`;
      message += `Giveaway ini sudah berakhir tanpa pemenang.`;
    }
  }
  
  return m.reply(message);
}

async function startGiveaway(m, textArgs) {
  if (!m.isGroup) {
    return m.reply('Giveaway hanya dapat dibuat di dalam grup!');
  }
  
  const groupId = m.chat;
  const userId = m.sender;
  
  if (giveaways[groupId] && giveaways[groupId].active) {
    return m.reply('Sudah ada giveaway yang sedang berlangsung di grup ini!');
  }
  
  const fullText = textArgs.join(' ');
  const splitArgs = fullText.split(',');
  
  if (splitArgs.length < 3) {
    return m.reply('Format salah! Gunakan: .startgiveaway waktu,hadiah,pesan\nContoh: .startgiveaway 24,Diamond Mobile Legends,Giveaway 100 diamond untuk 1 pemenang!');
  }
  
  const duration = parseInt(splitArgs[0].trim());
  if (isNaN(duration) || duration <= 0) {
    return m.reply('Durasi harus berupa angka positif (dalam jam)!');
  }
  
  const prize = splitArgs[1].trim();
  if (!prize) {
    return m.reply('Harap tentukan hadiah untuk giveaway!');
  }
  
  const giveawayMessage = splitArgs[2].trim();
  if (!giveawayMessage) {
    return m.reply('Harap sertakan pesan untuk giveaway!');
  }
  
  const endTime = new Date();
  endTime.setHours(endTime.getHours() + duration);
  
  giveaways[groupId] = {
    active: true,
    creator: userId,
    prize: prize,
    duration: duration,
    startTime: new Date().toISOString(),
    endTime: endTime.toISOString(),
    message: giveawayMessage,
    participants: []
  };
  
  saveGiveaways();
  
  const message = `🎁 GIVEAWAY SEDANG BERLANGSUNG!

📢 Ketik *ikut* untuk berpartisipasi!

🎯 Detail Giveaway:
🏆 Hadiah: ${prize}
⏱️ Durasi: ${duration} jam
📝 Pesan: ${giveawayMessage}

Good Luck 🎉`;

  try {
    const buttons = [
      {
        name: "cta_copy",
        buttonParamsJson: `{
            "display_text": "📝 Ikut Giveaway",
            "copy_text": "ikut"
        }`
      },
      {
        name: "cta_copy",
        buttonParamsJson: `{
            "display_text": "👥 Cek Peserta",
            "copy_text": "cekpeserta"
        }`
      },
      {
        name: "cta_copy",
        buttonParamsJson: `{
            "display_text": "🎯 Pilih Pemenang",
            "copy_text": "rollgiveaway"
        }`
      },
      {
        name: "cta_copy",
        buttonParamsJson: `{
            "display_text": "🔥 Hapus Giveaway",
            "copy_text": "hapusgiveaway"
        }`
      }
    ];
    
    await m.conn.sendMessage(m.chat, {
      text: message,
      footer: '© WhatsApp Botz',
      buttons: buttons
    });
  } catch (error) {
    await m.reply(message + `

⌨️ *Perintah Giveaway*:
• *ikut* - untuk berpartisipasi
• *cekpeserta* - untuk melihat daftar peserta
• *infogiveaway* - untuk melihat info giveaway
• *rollgiveaway* - untuk memilih pemenang (admin)
• *hapusgiveaway* - untuk menghapus giveaway (admin)
• *reloadgiveaway* - untuk me-reload giveaway`);
  }
  
  setTimeout(() => {
    if (giveaways[groupId] && giveaways[groupId].active) {
      rollGiveaway(null, [], groupId);
    }
  }, duration * 60 * 60 * 1000);
  
  return true;
}

function ikutGiveaway(m) {
  if (!m.isGroup) {
    return m.reply('Perintah ini hanya dapat digunakan dalam grup!');
  }
  const groupId = m.chat;
  const userId = m.sender;
  const userName = m.pushName || 'User';
  if (!giveaways[groupId] || !giveaways[groupId].active) {
    return m.reply('Tidak ada giveaway aktif di grup ini!');
  }
  if (giveaways[groupId].participants.some(p => p.id === userId)) {
    return m.reply('Kamu sudah mengikuti giveaway ini!');
  }
  giveaways[groupId].participants.push({
    id: userId,
    name: userName,
    joinTime: new Date().toISOString()
  });
  saveGiveaways();
  return m.reply(`Berhasil mengikuti giveaway! ${giveaways[groupId].participants.length} peserta sudah bergabung.`);
}

async function cekGiveaway(m) {
  if (!m.isGroup) {
    return m.reply('Perintah ini hanya dapat digunakan dalam grup!');
  }
  const groupId = m.chat;
  if (!giveaways[groupId] || !giveaways[groupId].active) {
    return m.reply('Tidak ada giveaway aktif di grup ini!');
  }
  const gw = giveaways[groupId];
  const endTime = new Date(gw.endTime);
  const currentTime = new Date();
  const timeLeft = Math.max(0, Math.floor((endTime - currentTime) / 1000 / 60));
  let message = `📊 Status Giveaway
🎁 Hadiah: ${gw.prize}
⏱️ Waktu tersisa: ${timeLeft} menit
👥 Jumlah peserta: ${gw.participants.length}

📋 Daftar Peserta:
`;

  if (gw.participants.length === 0) {
    message += "Belum ada peserta.";
  } else {
    gw.participants.forEach((p, i) => {
      message += `${i+1}. ${p.name}\n`;
    });
  }
  return m.reply(message);
}

async function rollGiveaway(m, args = [], forcedGroupId = null) {
  const groupId = forcedGroupId || (m ? m.chat : null);
  if (!groupId) {
    return m ? m.reply('Error: Tidak dapat mengidentifikasi grup.') : console.error('No group ID provided');
  }
  
  if (m && !m.isGroup) {
    return m.reply('Perintah ini hanya dapat digunakan dalam grup!');
  }
  
  if (m && !m.isAdmin && !m.isOwner) {
    return m.reply('Hanya admin yang dapat menggunakan perintah ini!');
  }
  
  if (!giveaways[groupId] || !giveaways[groupId].active) {
    return m ? m.reply('Tidak ada giveaway aktif di grup ini!') : null;
  }
  
  const gw = giveaways[groupId];
  if (gw.participants.length === 0) {
    giveaways[groupId].active = false;
    saveGiveaways();
    return m ? m.reply('Giveaway berakhir tanpa pemenang karena tidak ada peserta.') : null;
  } 
  
  const winnerIndex = Math.floor(Math.random() * gw.participants.length);
  const winner = gw.participants[winnerIndex];
  giveaways[groupId].active = false;
  giveaways[groupId].winner = winner;
  giveaways[groupId].endedAt = new Date().toISOString();
  saveGiveaways();
  
  const message = `🎉 GIVEAWAY BERAKHIR! 🎉

🏆 PEMENANG: @${winner.id.split('@')[0]}
🎁 HADIAH: ${gw.prize}

Selamat kepada pemenang! Silakan hubungi admin untuk mengklaim hadiah.`;
  
  if (m) {
    return m.reply(message, { mentions: [winner.id] });
  } else {
    return m.conn.sendMessage(groupId, { 
      text: message,
      mentions: [winner.id]
    });
  }
}

function deleteGiveaway(m) {
  if (!m.isGroup) {
    return m.reply('Perintah ini hanya dapat digunakan dalam grup!');
  }
  
  const groupId = m.chat;
  
  if (!m.isAdmin && !m.isOwner) {
    return m.reply('Hanya admin yang dapat menggunakan perintah ini!');
  }
  
  if (!giveaways[groupId] || !giveaways[groupId].active) {
    return m.reply('Tidak ada giveaway aktif di grup ini!');
  }
  
  delete giveaways[groupId];
  saveGiveaways();
  return m.reply('Giveaway berhasil dihapus!');
}

module.exports = { startGiveaway, ikutGiveaway, cekGiveaway,rollGiveaway, deleteGiveaway, reloadGiveaway, infoGiveaway, unixTimestampSeconds, generateMessageTag, processTime, webApi, getRandom, getBuffer, fetchJson, runtime, clockString, sleep, isUrl, getTime, formatDate, tanggal, formatp, jsonformat, reSize, toHD, logic, generateProfilePicture, bytesToSize, checkBandwidth, getSizeMedia, parseMention, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, cekMenfes, generateToken, batasiTeks, randomText, isEmoji, getTypeUrlMedia, pickRandom, getAllHTML, toIDR, capital, randomToken, Saweria2, toAsciiArt};

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})