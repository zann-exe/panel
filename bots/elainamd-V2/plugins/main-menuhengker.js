const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let ban = `${global.hengker}`
  await conn.sendMessage(m.chat, {
    text: ban,
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

handler.help = ['munban', 'unbanmenu', 'menuunban']
handler.tags = ['main']
handler.command = ['munban', 'unbanmenu', 'menuunban']

module.exports = handler
