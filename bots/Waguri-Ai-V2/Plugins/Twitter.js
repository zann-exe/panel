const axios = require('axios')
let handler = async (m, { args, Mane, text, prefix, command, ManeReact }) => {
ManeReact()
try {
        if (!text) return m.reply(`Contoh: ${command} linknya`)

        const response = await fetchJson(`https://api.agatz.xyz/api/twitter?url=${text}`)

        const videoUrl = response.data.video_sd || response.data.video_hd || response.data.audio

        await Mane.sendMessage(m.chat, {
          video: {
            url: videoUrl
          },
          caption: ` `,
        }, {
          quoted: m
        })
      } catch (err) {
        m.reply(`Terjadi kesalahan: ${err}`)
      }
    }
    
handler.help = ['twitter']
handler.tags = ['other']
handler.command = ['twitter']
module.exports = handler