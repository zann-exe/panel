const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let store = `${global.nsfw}`
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

handler.help = ['mnsfw', 'menunsfw']
handler.tags = ['main']
handler.command = ['mnsfw', 'menu nsfw']

module.exports = handler
