const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let panel = `${global.pnl}`

  await conn.sendMessage(m.chat, {
    text: panel,
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

handler.help = ['menupanel', 'panelmenu', 'mpanel']
handler.tags = ['menu']
handler.command = ['menupanel', 'panelmenu', 'mpanel']

module.exports = handler
