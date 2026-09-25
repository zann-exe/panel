const axios = require('axios');

let handler = async (m, { text, command, prefix }) => {
  if (!text) return m.reply(`Tambahkan link yang ingin dipendekkan!\nContoh:\n${prefix + command} https://example.com`);

  try {
    const res = await axios.get(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(text)}`);
    if (!res.data || !res.data.startsWith('http')) throw 'Gagal memperpendek URL.';
    
    m.reply(`✅ *Shortened Successfully!*\n\n🔗 *TinyURL:* ${res.data}`);
  } catch (err) {
    console.error('Error shortening URL:', err);
    m.reply('❌ Gagal memendekkan URL. Coba lagi nanti.');
  }
};

handler.help = ['shorturl <link>', 'shorten <link>', 'shortlink <link>', 'shortenlink <link>'];
handler.tags = ['tools'];
handler.command = ['shorturl', 'shorten', 'shortlink', 'shortenlink'];

module.exports = handler;
