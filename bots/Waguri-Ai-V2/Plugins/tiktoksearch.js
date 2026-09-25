const axios = require('axios')
let handler = async (m, { args, Mane, text, prefix, command, ManeReact }) => {
ManeReact()
      if (!text) return m.reply(`⚠️ Eits, kakak lupa kasih kata kunci! 😗 Coba ketik kayak gini ya: *.${command} jj epep* biar Mora bisa bantu cari yang kakak mau! 🔍💬`);
      try {
        let search = await tiktokSearchVideo(text);
        let teks = `🎥 *${search.videos[0].title}*\n\n` +
          `*ᴠɪᴅᴇᴏɪ ɪᴅ* : ${search.videos[0].video_id}\n` +
          `*ᴜsᴇʀɴᴀᴍᴇ* : ${search.videos[0].author.unique_id}\n` +
          `*ɴɪᴄᴋɴᴀᴍᴇ* : ${search.videos[0].author.nickname}\n` +
          `*ᴅᴜʀᴀᴛɪᴏɴ* : ${search.videos[0].duration} detik\n` +
          `*ʟɪᴋᴇ* : ${search.videos[0].digg_count}\n` +
          `*ᴄᴏᴍᴍᴇɴᴛ* : ${search.videos[0].comment_count}\n` +
          `*sʜᴀʀᴇ* : ${search.videos[0].share_count}\n\n` +
          `*ʟɪɴᴋ*: https://www.tiktok.com/@${search.videos[0].author.unique_id}/video/${search.videos[0].video_id}`;

        let list = '';
        let no = 1;
        for (let i of search.videos) {
          list += `\n${no++}. 🎵 *${i.title}*\n` +
            `ᴅᴜʀᴀsɪ: ${i.duration} ᴅᴇᴛɪᴋ\n` +
            `ʟɪᴋᴇ: ${i.digg_count}\n` +
            `ᴄᴏᴍᴍᴇɴᴛs: ${i.comment_count}\n` +
            `sʜᴀʀᴇs: ${i.share_count}\n` +
            ` ʟɪɴᴋ: https://www.tiktok.com/@${i.author.unique_id}/video/${i.video_id}\n`;
        }

        await Mane.sendMessage(
          m.chat, {
            video: {
              url: `https://tikwm.com${search.videos[0].play}`
            },
            caption: teks
          }, {
            quoted: m
          }
        );

        if (search.videos.length > 1) {
          await Mane.sendMessage(
            m.chat, {
              text: `📚 *ᴅᴀғᴛᴀʀ ᴠɪᴅᴇᴏ ʟᴀɪɴɴʏᴀ:*\n${list}`
            }, {
              quoted: m
            }
          );
        }
      } catch (error) {
        console.log(error);
      }
    }

handler.help = ['tiktoksearch']
handler.tags = ['other']
handler.command = ['tiktoksearch']
module.exports = handler

async function tiktokSearchVideo(query) {
	return new Promise(async (resolve, reject) => {
		axios("https://tikwm.com/api/feed/search", {
			headers: {
				"content-type": "application/x-www-form-urlencoded; charset=UTF-8",
				cookie: "current_language=en",
				"User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36",
			},
			data: {
				keywords: query,
				count: 12,
				cursor: 0,
				web: 1,
				hd: 1,
			},
			method: "POST",
		}).then((res) => {
			resolve(res.data.data);
		});
	});
}