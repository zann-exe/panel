const axios = require('axios')
const fetch = require('node-fetch')
let handler = async (m, { args, Mane, text, prefix, command, ManeReact, fetchJson }) => {
ManeReact()
      try {
        if (!text) return m.reply(`Contoh: ${command} linknya`)
        if (!text.includes('mediafire.com')) return m.reply('Harus berupa link mediafire!')

        let api = await fetchJson(`https://api.vreden.web.id/api/mediafiredl?url=${text}`)
        let data = api.result?.[0]

        let fileNama = decodeURIComponent(data.nama || 'file.zip')
        let extension = fileNama.split('.').pop().toLowerCase()

        let res = await axios.get(data.link, {
          responseType: 'arraybuffer'
        })
        let media = Buffer.from(res.data)

        let mimetype = ''
        if (extension === 'mp4') mimetype = 'video/mp4'
        else if (extension === 'mp3') mimetype = 'audio/mp3'
        else mimetype = `application/${extension}`

        Mane.sendMessage(m.chat, {
          document: media,
          fileName: fileNama,
          mimetype: mimetype
        }, {
          quoted: m
        })

      } catch (err) {
        m.reply('Terjadi kesalahan: ' + err)
      }
    }
    
handler.help = ['mediafire']
handler.tags = ['dowload']
handler.command = ['mediafire']
module.exports = handler