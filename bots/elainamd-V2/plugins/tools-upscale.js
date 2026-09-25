const axios = require('axios');
const FormData = require('form-data');
const path = require('path');

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

const handler = async (m, { conn, command }) => {
  if (!m.quoted || !m.quoted.mimetype || !/image/.test(m.quoted.mimetype)) {
    return m.reply(`Balas gambar dengan perintah .${command} untuk melakukan upscale.`);
  }

  try {
    const media = await m.quoted.download();
    const filename = `./tmp/image_${Date.now()}.png`;

    // Upload ke Uguu
    const uploadedUrl = await Uguu(media, filename);

    // Kirim ke API upscale
    const api = `https://flowfalcon.dpdns.org/imagecreator/upscale?url=${encodeURIComponent(uploadedUrl)}`;
    const { data } = await axios.get(api);

    if (!data?.status || !data?.result) {
      return m.reply('❌ Gagal upscale gambar.');
    }

    // Kirim hasil
    await conn.sendMessage(m.chat, {
      image: { url: data.result },
      caption: '✅ Gambar berhasil di-upscale.'
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('❌ Terjadi kesalahan saat memproses gambar.');
  }
};

handler.help = ['upscale'];
handler.tags = ['tools'];
handler.command = ['upscale']

module.exports = handler;
