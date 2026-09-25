const handler = async (m, { conn, isRegistered, qtext, daftar }) => {
  if (!isRegistered) return daftar(mess.notregist);

  let caption = `${global.allmenu}`;

    conn.sendMessage(m.chat, {
        text: caption,
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                thumbnailUrl: `${global.ftallmenu}`,
                sourceUrl: 'https://www.youtube.com/@KyyXdz',
                mediaType: 1,
                renderLargerThumbnail: true,
            }
        }
    }, { quoted: qtext })
    }

handler.help = ['allmenu', 'allcmd', 'menuall'];
handler.tags = ['main'];
handler.command = ['allmenu', 'allcmd', 'menuall'];
module.exports = handler;
