const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let anime = `${global.animem}`
  await conn.sendMessage(m.chat, {
    text: anime,
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

handler.help = ['menuanime', 'animemenu', 'manim']
handler.tags = ['main']
handler.command = ['menuanime', 'animemenu', 'manim']

module.exports = handler
