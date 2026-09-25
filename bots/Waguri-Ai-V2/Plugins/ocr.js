const axios = require('axios')
let handler = async (m, { args, Mane, text, prefix, command, ManeReact, mime, quoted }) => {
ManeReact()
      if (!/image/.test(mime)) return m.reply('Harus berupa gambar!')
      let media = await Mane.downloadAndSaveMediaMessage(quoted)
      
      try {
        let url = await CatBox(media)
        let jr = await fetchJson(`https://itzpire.com/tools/ocr?url=${url}`)
        let jw = jr.data
        m.reply(`*Overlay:* ${jw.TextOverlay.HasOverlay ? 'Yes' : 'No'}\n*Message:* ${jw.Message ? jw.Message : 'Nothing'}\n*Hasil OCR:* ${jw.ParsedText}`)
      } catch (err) {
        console.error(err)
        m.reply(err)
      }

      await fs.unlinkSync(media)
    }
    
handler.help = ['ocr']
handler.tags = ['dowload']
handler.command = ['ocr']
module.exports = handler