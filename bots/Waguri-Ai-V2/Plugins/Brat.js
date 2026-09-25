const fetch = require('node-fetch')
let handler = async (m, { args, Mane, text, prefix, command, ManeReact }) => {
ManeReact()
try {
      if (!text) return m.reply(`Contoh: ${command} hai`)
      if (text.length > 250) return m.reply(`Karakter terbatas, max 250!`)
      let res = await fetch(`https://aqul-brat.hf.space/?text=${encodeURIComponent(text)}`)
      let buffer = await res.buffer()
      await Mane.sendImageAsSticker(m.chat, buffer, m, {
        packname: "Karaouko Waguri",
        author: "Kenn Official",
      })
} catch (err) {
  m.reply('Terjadi kesalahan ;' + err)
}
}

handler.help = ['brat']
handler.tags = ['other']
handler.command = ['brat']
module.exports = handler