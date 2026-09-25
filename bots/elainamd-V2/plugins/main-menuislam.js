const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let islami = `${global.islami}`
  await conn.sendMessage(m.chat, {
    text: islami,
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

handler.help = ['menuislam', 'menuislami', 'mislam']
handler.tags = ['main']
handler.command = ['islammenh', 'menuislam', 'mislam']

module.exports = handler
