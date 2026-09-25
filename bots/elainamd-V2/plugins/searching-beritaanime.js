const axios = require('axios');

const handler = async (m) => {
  try {
    const res = await axios.get('https://flowfalcon.dpdns.org/anime/beritaanime');
    const data = res.data.result;

    if (!data || data.length === 0) return m.reply('Tidak ada berita anime terbaru.');

    let teks = '📰 *Berita Anime Terbaru:*\n\n';

    for (let i = 0; i < data.length; i++) {
      const berita = data[i];
      teks += `*${i + 1}. ${berita.judul}*\n`;
      teks += `🔗 ${berita.link}\n\n`;
    }

    await m.reply(teks.trim());

  } catch (e) {
    console.error(e);
    m.reply('Gagal mengambil berita anime. Silakan coba lagi nanti.');
  }
};

handler.help = ['beritaanime'];
handler.tags = ['searching'];
handler.command = ['beritaanime'];

module.exports = handler;
