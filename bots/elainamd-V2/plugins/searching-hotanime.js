const axios = require('axios');

const handler = async (m, { conn }) => {
  try {
    const res = await axios.get('https://flowfalcon.dpdns.org/anime/hot');
    const data = res.data.result;

    if (!data || data.length === 0) return m.reply('Anime tidak ditemukan.');

    const random = data[Math.floor(Math.random() * data.length)];

    const teks = `*🎬 ${random.title}*\n\n` +
      `🏷️ *Anime:* ${random.animeName}\n` +
      `🆔 *Episode:* ${random.episode}\n` +
      `🌐 *Subtitle:* ${random.subtitle}\n` +
      `🕒 *Upload:* ${random.upload}\n` +
      `🔗 *Link Nonton:* ${random.link}`;

    await conn.sendMessage(m.chat, {
      image: { url: random.image },
      caption: teks
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    m.reply('❌ Gagal mengambil data, coba lagi nanti.');
  }
};

handler.help = ['animehot'];
handler.tags = ['searching'];
handler.command = ['animehot']

module.exports = handler;
