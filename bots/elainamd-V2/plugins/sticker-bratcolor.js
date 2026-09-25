const axios = require('axios');

const handler = async (m, { conn, isRegistered, text, daftar, prefix, command }) => {
  if (!isRegistered) return daftar(mess.notregist);

  if (!text || !text.includes('|')) {
    return m.reply(`Gunakan format:\n${prefix + command} teks|warna\nContoh:\n${prefix + command} kyy sok|merah`);
  }

  const [teks, warna] = text.split('|').map(v => v.trim());

  try {
    const url = `https://www.velyn.biz.id/api/maker/bratcolor?text=${encodeURIComponent(teks)}&color=${encodeURIComponent(warna)}`;
    const { data } = await axios.get(url, { responseType: 'arraybuffer' });

    await conn.sendImageAsSticker(m.chat, data, m, {
      packname: "Brat Color Generated",
      author: "Akame"
    });

  } catch (err) {
    if (err.response?.data?.error?.includes("Color not found")) {
      return m.reply(`❌ Warna tidak ditemukan.\n\nWarna tersedia:\n${err.response.data.available_colors.join(', ')}`);
    }
    console.error(err);
    m.reply('❌ Gagal membuat stiker.');
  }
};

handler.help = ['bratcolor <text>|<warna>'];
handler.tags = ['sticker'];
handler.command = ['bratcolor'];

module.exports = handler;