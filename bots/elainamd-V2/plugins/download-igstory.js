const axios = require('axios');

let handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply(`Masukkan username IG!\nContoh:\n.${command} vantzy1_`);

  try {
    m.reply('⏳ Mengambil story...');
    const res = await axios.get(`https://api.nekorinn.my.id/downloader/instagram-story?username=${encodeURIComponent(text)}`);
    const data = res.data;

    if (!data.status || !data.result || !data.result.stories || data.result.stories.length === 0) {
      return m.reply('❌ Story tidak ditemukan atau akun private.');
    }

    const user = data.result;
    const story = user.stories[0]; // Ambil story pertama

    let caption = `📱 *Instagram Story*\n\n👤 *Username:* ${user.username}\n🧑 *Nama:* ${user.full_name}\n📌 *Bio:* ${user.bio}\n📊 *Followers:* ${user.stats.followers}\n📥 *Tipe:* ${story.type}`;

    if (story.type === 'video') {
      await conn.sendMessage(m.chat, {
        video: { url: story.download },
        caption,
        mimetype: 'video/mp4'
      }, { quoted: m });
    } else {
      await conn.sendMessage(m.chat, {
        image: { url: story.download },
        caption
      }, { quoted: m });
    }

  } catch (e) {
    console.error(e);
    m.reply('❌ Terjadi kesalahan saat mengambil story IG.');
  }
};

handler.help = ['igstory <username>'];
handler.tags = ['downloader'];
handler.command = ['igstory'];

module.exports = handler;
