let handler = async (m, { conn, text, reply}) => {
  try {
    if (!text) return reply('❌ Masukkan URL TikTok-nya!\nContoh: .ttmusic https://vt.tiktok.com/ZSFxYcCdr/')
 
    await conn.sendMessage(m.chat, { react: { text: "🕒", key: m.key } })
 
    const apiKey = 'planaai'
    const url = `https://www.sankavolereii.my.id/download/tiktok?apikey=${apiKey}&url=${encodeURIComponent(text)}`
    let res = await fetch(url)
    let json = await res.json()
 
    if (!json.status) return reply('❌ Gagal mengambil data audio TikTok.')
 
    let audio = json.result.music
    let title = json.result.music_info?.title || 'tiktok-audio'
 
    await conn.sendMessage(m.chat, {
      audio: { url: audio },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`
    }, { quoted: m })
  } catch (e) {
    console.error(e)
    throw `❌ Error\nLogs error : ${e.message}`
  }
}
 
handler.command = ['ttmusic', 'tiktokmusic', 'ttmp3']
handler.help = ['ttmusic <url>']
handler.tags = ['downloader']
 
module.exports = handler