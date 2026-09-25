const axios = require('axios');

const handler = async (m, { conn }) => {
  try {
    const res = await axios.get('https://flowfalcon.dpdns.org/anime/latest');
    const data = res.data.result;

    if (!data || data.length === 0) return m.reply('Tidak ada data anime terbaru.');

    let teks = '📺 *Daftar Anime Terbaru 2025:*\n\n';

    for (let i = 0; i < data.length; i++) {
      const anime = data[i];
      teks += `*${i + 1}. ${anime.title}*\n`;
      teks += `🆔 Status: ${anime.status}\n`;
      teks += `🎞️ Sub: ${anime.sub}\n`;
      teks += `🔗 Link: ${anime.link}\n\n`;
    }

    await m.reply(teks.trim());

  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat mengambil data anime.');
  }
};

handler.help = ['animnewup'];
handler.tags = ['searching'];
handler.command = ['animnewup'];

module.exports = handler;
