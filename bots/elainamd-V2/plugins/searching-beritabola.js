const axios = require('axios');

const handler = async (m, { conn, command }) => {
  try {
    const { data } = await axios.get('https://zenz.biz.id/tools/berita-bola');

    if (!data.status || !Array.isArray(data.result) || data.result.length === 0) {
      return m.reply('❌ Tidak ada berita bola ditemukan.');
    }

    let teks = `⚽ *Berita Bola Terbaru:*\n\n`;
    for (let i = 0; i < Math.min(data.result.length, 10); i++) {
      let item = data.result[i];
      teks += `📌 *${item.title}*\n🗓️ ${item.published}\n🔗 ${item.link}\n\n`;
    }

    await conn.sendMessage(m.chat, {
      text: teks.trim(),
      contextInfo: {
        externalAdReply: {
          title: 'Berita Bola Hari Ini',
          body: 'Sumber: vivagoal.com',
          thumbnailUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/FIFA_World_Cup_2022_Logo.svg/1200px-FIFA_World_Cup_2022_Logo.svg.png',
          sourceUrl: 'https://vivagoal.com/',
          mediaType: 1,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('❌ Gagal mengambil berita bola.');
  }
};

handler.help = ['beritabola'];
handler.tags = ['searching'];
handler.command = ['beritabola', 'newsbola'];

module.exports = handler;