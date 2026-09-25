const axios = require('axios');

const handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply(`Masukkan judul lagu!\nContoh:\n.${command} masa lalu`);

  try {
    m.reply('🔎 Sedang mencari lagu...');

    const res = await axios.get(`https://api.nekorinn.my.id/downloader/spotifyplay?q=${encodeURIComponent(text)}`);
    const data = res.data;

    if (!data.status || !data.result || !data.result.downloadUrl) {
      return m.reply('❌ Lagu tidak ditemukan.');
    }

    const { metadata, downloadUrl } = data.result;

    await conn.sendMessage(m.chat, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${metadata.title}.mp3`,
      caption: `🎵 *Title:* ${metadata.title}\n🎤 *Artist:* ${metadata.artist}\n⏱ *Duration:* ${metadata.duration}\n🔗 *URL:* ${metadata.url}`,
      contextInfo: {
        externalAdReply: {
          title: metadata.title,
          body: metadata.artist,
          thumbnailUrl: metadata.cover,
          mediaType: 2,
          mediaUrl: metadata.url,
          sourceUrl: metadata.url,
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    m.reply('❌ Terjadi kesalahan saat mengambil lagu.');
  }
};

handler.help = ['splay', 'plays', 'spotifyplay'].map(v => v + ' <judul>')
handler.tags = ['play'];
handler.command = ['plays', 'playspotify'];

module.exports = handler;
