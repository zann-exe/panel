const axios = require('axios');
 
const handler = async (m, { text }) => {
  if (!text) return m.reply('Masukkan pertanyaan.');
 
  try {
    let { data } = await axios.get('https://www.abella.icu/claude4-sonnet?message=' + encodeURIComponent(text));
    m.reply(data.data.trim());
  } catch {
    m.reply('Internal Server Error');
  }
};
 
handler.command = ['claude4']
handler.help = ['claude4'];
handler.tags = ['ai'];

module.exports = handler