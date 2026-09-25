const handler = async (m, { conn, text, prefix, command }) => {
  if (!text) return m.reply(`Example :\n${prefix + command} Makan Sambil Kuyang Bisa Gak Pak Ustad`)
  
  await conn.sendMessage(m.chat, {
    image: { url: 'https://api.taka.my.id/pak-ustadv2?text=' + encodeURIComponent(text) }
  }, { quoted: m })
}

handler.command = ['pakustad']
handler.tags = ['fun']
handler.help = ['pakustad']

module.exports = handler