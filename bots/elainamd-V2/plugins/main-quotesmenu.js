const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let quotes = `${global.quotes}`
  await conn.sendMessage(m.chat, {
    text: quotes,
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

handler.help = ['menuquotes', 'quotesmenu', 'mquo']
handler.tags = ['main']
handler.command = ['menuquotes', 'quotesmenu', 'mquo']

module.exports = handler
