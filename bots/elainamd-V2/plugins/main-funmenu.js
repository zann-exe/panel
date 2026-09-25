const handler = async (m, { conn, qtext, isRegistered, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist);
  
  let fun = `${global.funmnu}`;
  await conn.sendMessage(m.chat, {
    text: fun,
    contextInfo: {
      externalAdReply: {
        thumbnailUrl: global.thumblist,
        sourceUrl: global.yt,
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: qtext });
};

handler.help = ['menufun', 'funmenu', 'mfun'];
handler.tags = ['menu'];
handler.command = ['menufun', 'funmenu', 'mfun'];

module.exports = handler;
