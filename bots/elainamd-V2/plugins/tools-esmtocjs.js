const fetch = require('node-fetch');

let handler = async (m, { conn, text, command }) => {
  if (!text) return m.reply(
    'Kirim kode ESM-nya!\nContoh:\n.esm2cjs export default function hello() { console.log("Hi") }'
  );

  try {
    let res = await fetch(`https://api.nekorinn.my.id/tools/esm2cjs?code=${encodeURIComponent(text)}`);
    let json = await res.json();

    if (!json.status || !json.result) return m.reply('Gagal mengonversi kode.');

    let code = json.result;

    if (code.length > 4000) {
      await conn.sendMessage(m.chat, {
        document: Buffer.from(code),
        fileName: 'converted.js',
        mimetype: 'application/javascript',
        caption: '✅ Hasil Convert ESM ke CJS'
      }, { quoted: m });
    } else {
      m.reply('✅ *Hasil Convert ESM ke CJS:*\n\n```js\n' + code + '\n```');
    }
  } catch (err) {
    m.reply('Terjadi kesalahan saat mengakses API.\n' + err.message);
  }
};

handler.help = ['esmtocjs'];
handler.tags = ['tools'];
handler.command = ['esm2cjs', 'esmtocjs'];

module.exports = handler;
