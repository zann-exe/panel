const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let group = `${global.grmenu}`

  await conn.sendMessage(m.chat, {
    text: group,
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

handler.help = ['menugroup', 'groupmenu', 'mgr']
handler.tags = ['menu']
handler.command = ['menugroup', 'groupmenu', 'mgr']

module.exports = handler
