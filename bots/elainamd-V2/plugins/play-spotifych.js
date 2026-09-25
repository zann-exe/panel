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
    const { title, artist, duration, cover, url } = metadata;

    const idChannel = '120363405649403674@newsletter'; // Ganti dengan JID channel kamu

    await conn.sendMessage(idChannel, {
      audio: { url: downloadUrl },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: true,
      contextInfo: {
        externalAdReply: {
          title: title,
          body: `${artist} • ${duration}`,
          mediaType: 2,
          thumbnailUrl: cover,
          renderLargerThumbnail: true,
          sourceUrl: url,
          showAdAttribution: true
        }
      }
    });

    m.reply('✅ Audio berhasil dikirim ke channel.');
  } catch (err) {
    console.error(err);
    m.reply('❌ Terjadi kesalahan saat mengambil atau mengirim lagu.');
  }
};

handler.help = ['playsch <judul>'];
handler.tags = ['play'];
handler.command = ['playspoch', 'playspotifych', 'playsch'];

module.exports = handler;
