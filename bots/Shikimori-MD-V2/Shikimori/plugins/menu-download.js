let handler = async (m) => {
  m.reply(`
*╭─────『 Menu Downloader 』
ᯓ .twitter  Ⓛ
ᯓ .x  Ⓛ
ᯓ .xhs  Ⓛ
ᯓ .yt5so <Url Ig/Facebook>  Ⓛ
ᯓ .aio <url>  Ⓛ
ᯓ .capcut
ᯓ .fb  Ⓛ
ᯓ .facebook  Ⓛ
ᯓ .gdrive <url>  Ⓛ
ᯓ .gdrive <url>
ᯓ .igdl
ᯓ .instaaudio  Ⓛ
ᯓ .igaudio  Ⓛ
ᯓ .igst  Ⓛ
ᯓ .igstory  Ⓛ
ᯓ .dlit <platform> <url>  Ⓛ
ᯓ .mediafire <link>
ᯓ .pinterest  Ⓛ
ᯓ .play <judul>  Ⓛ
ᯓ .sfile  Ⓛ
ᯓ .spotify <lagu>
ᯓ .threads
ᯓ .tiktokimg / ttimg <url>  Ⓛ
ᯓ .tiktok <url>
ᯓ .tiktok2 <url>  Ⓛ
ᯓ .tiktokdl3 <url>  Ⓛ
ᯓ .ttmusic <url>  Ⓛ
ᯓ .videy <url> Ⓟ
ᯓ .videydl <url> Ⓟ
ᯓ .wallpaper <query>
ᯓ .pindl   Ⓛ
ᯓ .pindl2  Ⓛ
ᯓ .soundcloud  Ⓛ
ᯓ .play3 <judul>  Ⓛ
ᯓ .yta <url> [128]  Ⓛ
ᯓ .ytmp3 <url> [128]  Ⓛ
ᯓ .audioyt <url> [128]  Ⓛ
ᯓ .ytmp3-2 <link youtube>  Ⓛ
ᯓ .ytmp3-3  Ⓛ
ᯓ .play2  Ⓛ
ᯓ .ytpost <link post YouTube>  Ⓛ
ᯓ .ytv <url> [360]  Ⓛ
ᯓ .ytmp4 <url> [360]  Ⓛ
ᯓ .videoyt <url> [360]  Ⓛ
╰–––––––––––––––༓*
`.trim())
}
handler.command = /^menudownload$/i
handler.help = ["menudownload"]
handler.tags = ["main"]
export default handler