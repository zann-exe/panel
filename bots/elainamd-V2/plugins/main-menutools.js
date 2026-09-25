const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let tols = `${global.tools}`

  await conn.sendMessage(m.chat, {
    text: tols,
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

handler.help = ['menutols', 'tolsmenu', 'mtols']
handler.tags = ['tools']
handler.command = ['menutols', 'tolsmenu', 'mtols']

module.exports = handler
