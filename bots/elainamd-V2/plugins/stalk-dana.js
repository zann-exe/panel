const axios = require('axios');

const handler = async (m, { text, command }) => {
  if (!text) return m.reply(`Contoh:\n.${command} 62895329839690`);

  const number = text.trim();

  try {
    const api = `https://fastrestapis.fasturl.cloud/stalk/bank?number=${encodeURIComponent(number)}&bank=dana`;
    const { data } = await axios.get(api);

    if (!data?.result?.status) return m.reply('❌ Data tidak ditemukan.');

    const info = data.result.data;
    const msg = `✅ *Data Rekening DANA*\n\n👤 *Nama:* ${info.name}\n🔢 *No Rekening:* ${info.account_number}\n🏦 *Bank:* ${info.bank_code.toUpperCase()}`;
    m.reply(msg);

  } catch (e) {
    console.error(e);
    m.reply('❌ Terjadi kesalahan saat memeriksa data rekening.');
  }
};

handler.help = ['stalkdana <nomor>'];
handler.tags = ['stalker'];
handler.command = ['stalkdana']

module.exports = handler;
