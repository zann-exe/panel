let handler = async (m) => {
  m.reply(`
*╭─────『 Menu AI 』
ᯓ .ai3d <teks>  Ⓛ
ᯓ .askai <model> <pertanyaan>  Ⓛ
ᯓ .listmodel  Ⓛ
ᯓ .blackbox  Ⓛ
ᯓ .bocchiai <teks>
ᯓ .claudeai <text>  Ⓛ
ᯓ .aicode <prompt>|<bahasa>|<model>  Ⓛ
ᯓ .codegen <lang> <model> <prompt>  Ⓛ
ᯓ .colorify [anime/ghibli] [prompt]  Ⓛ
ᯓ .dopple  Ⓛ
ᯓ .editfoto <prompt>  Ⓛ
ᯓ .elainaai <pesan>
ᯓ .ghibli
ᯓ .gptonline <teks>  Ⓛ
ᯓ .gpt <teks>  Ⓛ
ᯓ .img2promt  Ⓛ
ᯓ .kitaai <pesan>
ᯓ .nijikaai <pesan>
ᯓ .prabowo  Ⓛ
ᯓ .ryoai <pesan>
ᯓ .t2v  Ⓛ
ᯓ .texttovideo  Ⓛ
ᯓ .text2img <prompt>  Ⓛ
ᯓ .wuguri <pesan>
ᯓ .ai <pertanyaan>  Ⓛ
ᯓ .ai set <model> | <prompt>  Ⓛ
ᯓ .toanime  Ⓛ
ᯓ .simi  Ⓛ
ᯓ .hoshino <teks>  Ⓛ
ᯓ .hutaoai <teks>  Ⓛ
ᯓ .openai <teks>  Ⓛ
╰–––––––––––––––༓
`.trim())
}
handler.command = /^menuai$/i
handler.help = ["menuai"]
handler.tags = ["main"]
export default handler