const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let ai = `${global.eai}`
  await conn.sendMessage(m.chat, {
    text: ai,
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

handler.help = ['mai', 'menuai', 'aimenu']
handler.tags = ['main']
handler.command = ['mai', 'menuai', 'aimenu']

module.exports = handler
