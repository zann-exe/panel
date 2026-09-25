const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist);

  let owner = `${global.ownermenu}`;
  await conn.sendMessage(m.chat, {
    text: owner,
    contextInfo: {
      externalAdReply: {
        thumbnailUrl: global.thumblist, // pastikan ini adalah URL
        sourceUrl: global.yt, // URL tujuan saat thumbnail diklik
        mediaType: 1,
        renderLargerThumbnail: true
      }
    }
  }, { quoted: qtext });
};

handler.help = ['menuowner', 'ownermenu', 'mown'];
handler.tags = ['main'];
handler.command = ['menuowner', 'ownermenu', 'mown'];

module.exports = handler;
