const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist)
let primbon = `${global.primbon}`

        conn.sendMessage(m.chat, {
        text: primbon,
        contextInfo: {
            externalAdReply: {
                thumbnailUrl: global.thumblist,
                sourceUrl: global.yt,
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    }, { quoted: qtext })
};

handler.help = ['menuprimbon', 'primbonmenu', 'mprimbon'];
handler.tags = ['menu'];
handler.command = ['menuprimbon', 'primbonmenu', 'mprimbon'];

module.exports = handler;
