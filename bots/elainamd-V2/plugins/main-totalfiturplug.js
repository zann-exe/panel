const fs = require("fs");
const path = require("path");

let handler = async (m, { reply }) => {
  try {
    const pluginDir = path.join(__dirname, "../plugins");
    const files = fs.readdirSync(pluginDir).filter(file => file.endsWith(".js"));

    if (files.length === 0) {
      return reply("📦 Tidak ada file plugin di folder.");
    }

    reply(`📦 Total Fitur plugin saat ini: *${files.length}*`);
  } catch (err) {
    console.error(err);
    reply("❌ Gagal membaca folder plugin.");
  }
};

handler.command = ["totalfiturplugin", "totalfiturplug"];
module.exports = handler;