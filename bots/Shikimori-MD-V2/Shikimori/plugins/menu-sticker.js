let handler = async (m) => {
  m.reply(`
╭─────『 Menu Sticker 』
ᯓ .brat  Ⓛ
ᯓ .bratvid  Ⓛ
ᯓ .gifsticker <query>,<jumlah>
ᯓ .qc2 <warna>  Ⓛ
ᯓ .stickerlysearch <keyword>  Ⓛ
ᯓ .animebrat <teks>  Ⓛ
ᯓ .animebrat2  Ⓛ
ᯓ .ttp
ᯓ .attp
ᯓ .brat2  Ⓛ
ᯓ .brat3  Ⓛ
ᯓ .bratcolor <teks>|<warna>  Ⓛ
ᯓ .bratvid2 <text>  Ⓛ
ᯓ .emojimix  Ⓛ
ᯓ .smeme <teks atas>|<teks bawah>  Ⓛ
ᯓ .qc  Ⓛ
ᯓ .ryo
ᯓ .stickersearch <query>  Ⓛ
ᯓ .sticker [packname|author]
ᯓ .telestick <url> Ⓟ
ᯓ .toimg (reply)  Ⓛ
ᯓ .tovideo  Ⓛ
ᯓ .wm <packname>|<author> Ⓟ
ᯓ .stikerly <query>  Ⓛ
ᯓ .stickerly2 <url> Ⓟ
ᯓ .smug
ᯓ .woof
ᯓ .gasm
ᯓ .8ball
ᯓ .goose
ᯓ .cuddle
ᯓ .avatar
ᯓ .slap
ᯓ .v3
ᯓ .pat
ᯓ .gecg
ᯓ .feed
ᯓ .fox_girl
ᯓ .lizard
ᯓ .neko
ᯓ .hug
ᯓ .meow
ᯓ .kiss
ᯓ .wallpaper
ᯓ .tickle
ᯓ .spank
ᯓ .waifu
ᯓ .lewd
ᯓ .ngif
╰–––––––––––––––༓
  `.trim())
}
handler.command = /^menusticker$/i
handler.help = ["menusticker"]
handler.tags = ["main"]
export default handler