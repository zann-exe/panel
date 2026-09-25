const fetch = require('node-fetch');
const moment = require('moment-timezone');
const FormData = require('form-data');
const axios = require('axios');

async function Uguu(buffer, filename) {
  const form = new FormData();
  form.append('files[]', buffer, { filename });

  const { data } = await axios.post('https://uguu.se/upload.php', form, {
    headers: form.getHeaders(),
  });

  if (data.files && data.files[0]) {
    return data.files[0].url;
  } else {
    throw new Error('Upload gagal.');
  }
}

let handler = async (m, { conn }) => {
  let q = m.quoted ? m.quoted : m;
  let mime = (q.msg || q).mimetype || '';

  if (!mime.startsWith('image/')) return m.reply('Kirim gambar atau balas gambar dengan caption *.removewm*');

  try {
    m.reply('⏳ Sedang menghapus watermark...');
    let media = await q.download();
    let uploadedUrl = await Uguu(media, 'image.png');

    let apiUrl = `https://arincy.vercel.app/api/removewm?url=${encodeURIComponent(uploadedUrl)}`;
    let res = await fetch(apiUrl);
    let json = await res.json();

    if (!json.status) return m.reply('Gagal memproses gambar.');

    let {
      input,
      output,
      urls,
      retention,
      createdAt,
      consumedCredits
    } = json.data;

    let formattedTime = moment(createdAt).tz('Asia/Jakarta').format('dddd, DD MMMM YYYY HH:mm:ss');

    let caption = `
🧹 *Watermark Removed*
🔗 *Original:* ${input.image}
🕒 *Created At:* ${formattedTime} WIB
📦 *Retensi:* ${retention}
💳 *Kredit Terpakai:* ${consumedCredits}
📎 *URL API:* ${urls.get}
`.trim();

    for (let out of output) {
      await conn.sendMessage(m.chat, { image: { url: out }, caption }, { quoted: m });
    }

  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat memproses gambar.');
  }
};

handler.help = ['removewm'];
handler.tags = ['tools'];
handler.command = ['removewm'];

module.exports = handler;
