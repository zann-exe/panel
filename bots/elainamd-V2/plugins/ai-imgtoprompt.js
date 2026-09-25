const axios = require("axios")
 
let handler = async (m, { conn, args, reply}) => {
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!mime) return reply(`Reply/send image with caption *.img2prompt*`)
    if (!/image\/(jpe?g|png)/.test(mime)) return reply(` 'Only JPEG/PNG images are supportedsupported`)
    
    let imgBuffer = await q.download()
    let base64Img = imgBuffer.toString('base64')
    let base64Url = `data:${mime};base64,${base64Img}`
    
    let { data } = await axios.post('https://imageprompt.org/api/ai/prompts/image', 
      { base64Url }, 
      { headers: { 'accept': '/', 'content-type': 'application/json' } }
    )
    
    let prompt = data?.prompt || data
    if (!prompt) return reply(`No prompt generated`)
    
    await m.reply(`${prompt}`)
  } catch (e) {
    m.reply(e.message)
  }
}
 
handler.help = ['img2prompt']
handler.command = ['img2prompt']
handler.tags = ['ai']
 
module.exports = handler