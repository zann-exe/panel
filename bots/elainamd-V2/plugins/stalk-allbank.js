const axios = require('axios');

const handler = async (m, { text, args, command }) => {
  if (!text.includes('|')) {
    return m.reply(`Contoh:\n.${command} 6288286624778|dana`);
  }

  const [number, bank] = text.split('|').map(v => v.trim());
  if (!number || !bank) return m.reply(`Format salah!\nContoh:\n.${command} 6288286624778|dana`);

  try {
    const api = `https://fastrestapis.fasturl.cloud/stalk/bank?number=${encodeURIComponent(number)}&bank=${encodeURIComponent(bank)}`;
    const { data } = await axios.get(api);

    if (!data?.result?.status) return m.reply('❌ Data tidak ditemukan.');

    const info = data.result.data;
    const msg = `✅ *Data Rekening ${bank.toUpperCase()}*\n\n👤 *Nama:* ${info.name}\n🔢 *No Rekening:* ${info.account_number}\n🏦 *Bank:* ${info.bank_code.toUpperCase()}`;
    m.reply(msg);

  } catch (e) {
    console.error(e);
    m.reply('❌ Terjadi kesalahan saat memeriksa data rekening.');
  }
};

handler.help = ['cekrekening <nomor|bank>'];
handler.tags = ['stalker'];
handler.command = ['cekrekening']

module.exports = handler;