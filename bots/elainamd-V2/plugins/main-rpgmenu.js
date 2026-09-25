const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)

  let rpg = `${global.rpgmenu}`

  await conn.sendMessage(m.chat, {
    text: rpg,
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

handler.help = ['menurpg', 'rpgmenu', 'mrpg']
handler.tags = ['menu']
handler.command = ['menurpg', 'rpgmenu', 'mrpg']

module.exports = handler
