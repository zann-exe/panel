const axios = require('axios');

let handler = async (m, { text, args, command }) => {
  if (!text) {
    return m.reply(`📌 Masukkan kode JavaScript yang ingin di-obfuscate.\n\nContoh pemakaian:\n.enc const handler = async (m, { conn }) => { conn.reply(m.chat, "ok", m) }`);
  }

  try {
    const api = `https://fastrestapis.fasturl.cloud/tool/jsobfuscate`;
    const inputCode = encodeURIComponent(text.trim());

    const fullUrl = `${api}?inputCode=${inputCode}&encOptions=NORMAL&specialCharacters=on&fastDecode=off`;

    const res = await axios.get(fullUrl);
    const { status, result } = res.data;

    if (status !== 200 || !result) {
      return m.reply('❌ Gagal meng-encode kode.');
    }

    const output = `*Succes Encode*\n\n.enc(\`${result}\`)`;
    if (output.length > 4096) {
      return m.reply('❌ Hasil terlalu panjang untuk dikirim. Silakan kirim kode lebih pendek.');
    }

    m.reply(output);
  } catch (e) {
    console.error(e);
    m.reply('❌ Terjadi kesalahan saat menghubungi API.');
  }
};

handler.help = ['enc <code js>'];
handler.tags = ['tools'];
handler.command = ['enc', 'encode']

module.exports = handler;
