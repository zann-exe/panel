const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let main = `${global.mainmenu}`

  await conn.sendMessage(m.chat, {
    text: main,
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

handler.help = ['menumain', 'mainmenu', 'mmain']
handler.tags = ['main']
handler.command = ['mmain', 'menumain', 'mainmenu']

module.exports = handler
