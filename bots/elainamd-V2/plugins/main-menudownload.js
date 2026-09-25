const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let down = `${global.download}`

  await conn.sendMessage(m.chat, {
    text: down,
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

handler.help = ['menudownload', 'downloadmenu', 'mdown']
handler.tags = ['menu']
handler.command = ['menudownload', 'downloadmenu', 'mdown']

module.exports = handler
