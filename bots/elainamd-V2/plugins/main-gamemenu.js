const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let game = `${global.gamem}`
  await conn.sendMessage(m.chat, {
    text: game,
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

handler.help = ['menugame', 'gamemenu', 'mgame']
handler.tags = ['main']
handler.command = ['menugame', 'gamemenu', 'mgame']

module.exports = handler
