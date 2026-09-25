const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let random = `${global.randomm}`
  await conn.sendMessage(m.chat, {
    text: random,
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

handler.help = ['mrandom', 'randommenu', 'menurandom']
handler.tags = ['main']
handler.command = ['mrandom', 'randommenu', 'menurandom']

module.exports = handler
