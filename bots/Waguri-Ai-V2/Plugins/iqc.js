const fetch = require('node-fetch')
let handler = async (m, { args, Mane, text, prefix, command, ManeReact }) => {
if (!text) return m.reply(`Contoh: ${command} kenapa kenn ganteng`)
    ManeReact()
    await Mane.sendMessage(m.chat, {image: {url: `https://brat.siputzx.my.id/iphone-quoted?time=12.00&batteryPercentage=90&carrierName=AXIS&messageText=${text}&emojiStyle=apple` }, caption: foother }, {quoted: m})
}

handler.help = ['iqc']
handler.tags = ['iqc']
handler.command = ['iqc']
module.exports = handler