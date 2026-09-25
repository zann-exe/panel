const axios = require('axios')

let dbmail = []
const tamnel = 'https://tmpfiles.org/dl/863701/1749111386853.jpg'

let handler = async (m, {
    conn,
    args,
    prefix,
    command
}) => {
    if (!args[0]) {
        return conn.sendMessage(m.chat, {
            text: `◌○▧  *FITUR TEMPMAIL*  ◌○▧

Cara pakai dek:
${prefix}${command} buat password - Buat email baru
${prefix}${command} list password - Lihat daftar email
${prefix}${command} cek email - Cek isi email
${prefix}${command} hapus email - Hapus email

Contoh:
${prefix}${command} buat rahasia123
${prefix}${command} cek contoh@domain.com`,
            contextInfo: {
                externalAdReply: {
                    title: "TEMPMAIL 🔥",
                    body: "Buat emailmu dengan instan",
                    thumbnailUrl: tamnel
                }
            }
        }, {
            quoted: m
        })
    }

    const act = args[0].toLowerCase()
    const param = args[1]

    try {
        switch (act) {
            case 'buat':
                if (!param) throw 'Masukkin password untuk email baru'

                const { data } = await axios.post('https://api.tempmail.lol/v2/inbox/create', {
                    domain: null,
                    captcha: null
                }, {
                    headers: {
                        'Content-Type': 'application/json',
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                })

                dbmail.push({
                    email: data.address,
                    token: data.token,
                    password: param,
                    dibuat: new Date().toLocaleString('id-ID')
                })

                await conn.sendMessage(m.chat, {
                    text: `○▧  EMAIL BARU DIBUAT  ◌\n\n▧ Alamat: ${data.address}\n○ Token: ${data.token}\n▧ Dibuat: ${new Date().toLocaleString('id-ID')}\n\nGunakan: .tempemail cek ${data.address}`,
                    contextInfo: {
                        externalAdReply: {
                            title: "EMAIL BARU",
                            body: "Email Fresh tuk Digunakan",
                            thumbnailUrl: tamnel
                        }
                    }
                }, {
                    quoted: m
                })
                break

            case 'list':
                if (!param) throw 'mana password untuk melihat isi'

                const mailUser = dbmail.filter(e => e.password === param)
                if (mailUser.length === 0) throw 'gadak email denga pw itu'

                let listmail = '◌○▧  DAFTAR EMAIL  ◌○▧\n\n'
                mailUser.forEach((mail, i) => {
                    listmail += `${i + 1}. ${mail.email}\n○ Dibuat: ${mail.dibuat}\n\n`
                })

                conn.sendMessage(m.chat, {
                    text: listmail
                }, {
                    quoted: m
                })
                break

            case 'cek':
                if (!param) throw 'Masukkan alamat emailmu yang mau dicek'

                const mailD = dbmail.find(e => e.email === param)
                if (!mailD) throw 'Email tak ada'

                const { data: inbox } = await axios.get(`https://api.tempmail.lol/v2/inbox?token=${mailD.token}`, {
                    headers: {
                        'User-Agent': 'Mozilla/5.0 (Linux; Android 10) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Mobile Safari/537.36'
                    }
                })

                let result = `◌○▧  MAIEL MASUK  ◌○▧\n\n`
                result += `▧ Email: ${param}\n`
                result += `○ Status: ${inbox.expired ? 'Tidak aktif' : 'Aktif'}\n`
                result += `▧ Pesan: ${inbox.emails?.length || 0}\n\n`

                if (inbox.emails?.length > 0) {
                    inbox.emails.forEach((msg, i) => {
                        result += `○ Pesan ${i + 1}\n`
                        result += `▧ Pengirim: ${msg.from}\n`
                        result += `○ Subjek: ${msg.subject}\n`
                        result += `▧ Isi: ${msg.body?.substring(0, 100) || 'tak da isi'}...\n`
                        result += `────────────────\n\n`
                    })
                } else {
                    result += 'Tak ada/Belum ada pesan masuk'
                }

                conn.sendMessage(m.chat, {
                    text: result
                }, {
                    quoted: m
                })
                break

            case 'hapus':
                if (!param) throw 'masukkan emailnya bang, yang pen dihapus'

                const awal = dbmail.length
                dbmail = dbmail.filter(e => e.email !== param)

                if (dbmail.length === awal) {
                    throw 'Email tak ditemukan'
                }

                conn.sendMessage(m.chat, {
                    text: `○ Email ${param} done dihapus`
                }, {
                    quoted: m
                })
                break

            default:
                throw 'Perintah tak ada'
        }
    } catch (error) {
        console.log('Error:', error)
        conn.sendMessage(m.chat, {
            text: `○▧  GAGAL  ◌\n\n${error.message || error}`
        }, {
            quoted: m
        })
    }
}

handler.help = ['tempemail buat/list/cek/hapus']
handler.tags = ['tools']
handler.command = ['tempmail']

module.exports = handler
