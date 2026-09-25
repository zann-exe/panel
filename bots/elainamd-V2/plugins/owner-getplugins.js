const fs = require("fs")

let handler = async (m, { conn, isCreator, reply, text, example }) => {
if (!isCreator) return reply(mess.creator)
if (!text) return reply(example("namafile plugins nya"))
if (!text.endsWith(".js")) return reply("Nama file harus berformat .js")
if (!fs.existsSync("./plugins/" + text.toLowerCase())) return reply("File plugins tidak ditemukan!")
let res = await fs.readFileSync("./plugins/" + text.toLowerCase())
return reply(`${res.toString()}`)
}

handler.command = ["getp", "gp", "getplugins", "getplugin"]

module.exports = handler