const fetch = require('node-fetch');

const handler = async (m, { conn, text, command, reply}) => {
  if (!text) return reply(`Masukkan judul lagu.\nContoh:\n.${command} where we are`);
  
  try {
    reply('Mencari lagu...');

    const search = await fetch(`https://zenz.biz.id/search/SoundCloud?query=${encodeURIComponent(text)}`);
    const result = await search.json();

    if (!result.status || !result.result || !result.result[0]) {
      return reply('Lagu tidak ditemukan.');
    }

    const url = result.result[0].url;

    const res = await fetch(`https://zenz.biz.id/downloader/SoundCloud?url=${encodeURIComponent(url)}`);
    const json = await res.json();

    if (!json.status || !json.audio_url) {
      return reply('Gagal mengunduh lagu.');
    }

    await conn.sendMessage(m.chat, {
      audio: { url: json.audio_url },
      mimetype: 'audio/mpeg',
      ptt: false,
      fileName: `${json.title}.mp3`,
      caption: `🎵 Judul: ${json.title}\n👤 Author: ${json.author}\n⏱️ Durasi: ${json.duration}`,
      contextInfo: {
        externalAdReply: {
          title: json.title,
          body: json.author,
          thumbnailUrl: json.thumbnail,
          mediaType: 2,
          mediaUrl: json.source_url,
          sourceUrl: json.source_url,
          renderLargerThumbnail: true,
        },
      },
    }, { quoted: m });

  } catch (err) {
    console.error(err);
    reply('Terjadi kesalahan.');
  }
};

handler.help = ['playsoundcloud <judul>'];
handler.tags = ['play'];
handler.command = ['playsoundcloud']

module.exports = handler;
