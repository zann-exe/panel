const axios = require('axios');

let handler = async (m, { text, conn, command }) => {
  if (!text) {
    return m.reply(`Contoh:\n.${command} woi`);
  }

  try {
    const url = `https://fastrestapis.fasturl.cloud/maker/styletext?text=${encodeURIComponent(text)}`;
    const { data } = await axios.get(url);

    if (!data || !data.result || !Array.isArray(data.result)) {
      return m.reply('❌ Gagal mendapatkan hasil dari API.');
    }

    const formatted = data.result
      .filter(v => v.value && v.value.length > 0)
      .map((v, i) => `*${i + 1}.* _${v.name}_\n${v.value}`)
      .join('\n\n');

    conn.sendMessage(m.chat, {
      text: `✨ *Hasil Gaya Teks:*\n\n${formatted}`,
      quoted: m
    });

  } catch (err) {
    console.error(err);
    m.reply('❌ Terjadi kesalahan saat mengambil data dari API.');
  }
};

handler.help = ['styletext <teks>'];
handler.tags = ['tools'];
handler.command = ['styletext']

module.exports = handler;