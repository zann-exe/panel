const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let search = `${global.mse}`

  await conn.sendMessage(m.chat, {
    text: search,
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

handler.help = ['menusearch', 'searchmenu', 'mse']
handler.tags = ['menu']
handler.command = ['menusearch', 'searchmenu', 'mse']

module.exports = handler
