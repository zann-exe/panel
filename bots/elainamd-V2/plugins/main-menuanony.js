const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let ano = `${global.anomali}`
  await conn.sendMessage(m.chat, {
    text: ano,
    contextInfo: {
      externalAdReply: {
        thumbnailUrl: global.thumblist,
        sourceUrl: global.yt,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: qtext })
}

handler.help = ['mano', 'anonymousmenu', 'menuanonim']
handler.tags = ['main']
handler.command = ['mano', 'anonymousmenu', 'menuanonim']

module.exports = handler
