const axios = require('axios');

let handler = async (m, { text, args, conn, command }) => {
  if (!text) {
    return m.reply(`Contoh:\n.${command} https://ngl.link/kyygntng|woi`);
  }

  const [link, ...msgParts] = text.split('|');
  const message = msgParts.join('|').trim();

  if (!link || !message) {
    return m.reply(`Format salah.\nContoh:\n.${command} https://ngl.link/asuma.multi.device|woi`);
  }

  try {
    const api = `https://fastrestapis.fasturl.cloud/tool/sendngl?link=${encodeURIComponent(link.trim())}&message=${encodeURIComponent(message)}&type=anonymous`;

    const { data } = await axios.get(api);
    if (data?.status !== 200) {
      return m.reply('❌ Gagal mengirim pesan.');
    }

    const res = data.result;
    const msg = `✅ *Pesan berhasil dikirim!*\n\n📩 *Pesan:* ${res.message}\n🔗 *Ke:* ${res.sentTo}\n👤 *Tipe:* ${res.type}`;
    m.reply(msg);

  } catch (err) {
    console.error(err);
    m.reply('❌ Terjadi kesalahan saat mengirim pesan.');
  }
};

handler.help = ['sendngl <link>|<pesan>'];
handler.tags = ['tools'];
handler.command = ['sendngl']

module.exports = handler;