const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let convert = `${global.convert}`

  await conn.sendMessage(m.chat, {
    text: convert,
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

handler.help = ['menuconvert', 'convertmenu', 'mcnvrt']
handler.tags = ['convert']
handler.command = ['mcnvrt', 'menuconvert', 'convertmenu']

module.exports = handler
