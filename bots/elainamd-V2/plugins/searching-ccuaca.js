const axios = require('axios');

const handler = async (m, { text, command }) => {
  if (!text) return m.reply(`Masukkan nama kota!\nContoh:\n.${command} Palembang`);

  try {
    const url = `https://api.diioffc.web.id/api/tools/cekcuaca?query=${encodeURIComponent(text)}`;
    const { data } = await axios.get(url);

    if (!data.status || !data.result) return m.reply('Cuaca tidak ditemukan.');

    const res = data.result;
    const weather = res.weather[0];

    const msg = `⛅ *Cuaca Saat Ini di ${res.name}*\n\n` +
      `🌤️ Cuaca : ${weather.main} (${weather.description})\n` +
      `🌡️ Suhu : ${res.main.temp}°C\n` +
      `🤒 Terasa Seperti : ${res.main.feels_like}°C\n` +
      `💧 Kelembaban : ${res.main.humidity}%\n` +
      `🌬️ Angin : ${res.wind.speed} m/s\n` +
      `☁️ Awan : ${res.clouds.all}%\n` +
      `👁️ Visibilitas : ${res.visibility} meter\n` +
      `📍 Lokasi : ${res.coord.lat}, ${res.coord.lon}`;

    m.reply(msg);
  } catch (e) {
    console.error(e);
    m.reply('Terjadi kesalahan saat mengambil data cuaca.');
  }
};

handler.help = ['cekcuaca <kota>'];
handler.tags = ['searching'];
handler.command = ['cekcuaca'];

module.exports = handler;