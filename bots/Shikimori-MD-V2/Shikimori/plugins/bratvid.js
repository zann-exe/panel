import axios from 'axios'
import { Sticker, StickerTypes } from 'wa-sticker-formatter'
import { tmpdir } from 'os'
import { join } from 'path'
import { writeFile, unlink } from 'fs/promises'

let handler = async (m, { conn, args, command }) => {
  if (!args[0]) throw `Contoh: .${command} halo hilman`
  
  let text = encodeURIComponent(args.join(" "))
  let url = `https://www.sankavollerei.com/imagecreator/bratvideo?apikey=planaai&text=${text}`

  try {
    let res = await axios.get(url, { responseType: 'arraybuffer' })
    let buffer = Buffer.from(res.data)

    let tmpPath = join(tmpdir(), `${Date.now()}.mp4`)
    await writeFile(tmpPath, buffer)

    let sticker = new Sticker(tmpPath, {
      type: StickerTypes.FULL,
      pack: 'Shikimori - MD',
      author: 'By Mane',
      categories: ['🎥'],
      id: 'bratvid',
      quality: 70
    })

    let stickerBuffer = await sticker.toBuffer()

    await conn.sendMessage(m.chat, { sticker: stickerBuffer }, { quoted: m })

    await unlink(tmpPath)

  } catch (err) {
    console.error(err)
    throw '❌ Gagal membuat stiker bratvid.'
  }
}

handler.help = ['bratvid <teks>']
handler.tags = ['sticker']
handler.command = /^bratvid$/i
handler.limit = true
handler.register = true
handler.group = false

export default handler