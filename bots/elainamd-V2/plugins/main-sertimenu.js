const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let store = `${global.serti}`
  await conn.sendMessage(m.chat, {
    text: store,
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

handler.help = ['menusertifikat']
handler.tags = ['main']
handler.command = ['menusertifikat']

module.exports = handler
