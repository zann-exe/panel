const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let maker = `${global.maker}`

  await conn.sendMessage(m.chat, {
    text: maker,
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

handler.help = ['menumaker', 'makermenu', 'mmker']
handler.tags = ['maker']
handler.command = ['mmker', 'menumaker', 'makermenu']

module.exports = handler
