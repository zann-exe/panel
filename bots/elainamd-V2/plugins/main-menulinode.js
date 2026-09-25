const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let store = `${global.londere}`
  await conn.sendMessage(m.chat, {
    text: store,
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

handler.help = ['mlinode', 'menulinode']
handler.tags = ['main']
handler.command = ['mlinode', 'menulinode']

module.exports = handler
