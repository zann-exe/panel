// Script By Zion Dev
// Jika Ingin Repost/recode/rename jangan lupa tag gw

require('./config');
require('./Mane');
const fs = require('fs')
const chalk = require('chalk')

global.menu = `
╔──☉︎ *List Menu*
│ .menuall
│ .menuowner
│ .menugroup
│ .menupanel
│ .menuai
│ .menudownload
│ .menuconvert
│ .menurandom
│ .menufun
│ .menuother
│ .menunsfw
│ .menuprimbon
│ .menuquotes
│ .menucecan
│ .menupush
│ .menuislam
│ .menuanime
│ .menumaker
│ .menugenshin
│ .menuberita
│ .menurandomvid
│ .menulinode
│ .menumenfess
│ .menugame
│ .menustore
│ .menusearch
│ .menustalk
╚─────────────☉
`

global.allmenu = `
╔──☉︎ *O W N E R* 
│ .listowner
│ .addowner
│ .delowner
│ .listgc
│ .onlygc
│ .listprem
│ .delprem
│ .public
│ .self
│ .setppbot
│ .delppbot
│ .tojs
│ .join
│ .rvo
│ .autoread
│ .autotyping
│ .autosholat
│ .clearchat
│ .reactch
│ .addplugin
│ .delplugin
│ .listplugin
│ .getplugin
│ .on
│ .off
│ .upswtag
│ .nglspam
│ .setbotname
│ .setbotbio
│ .autobio
│ .addcase
│ .delcase
│ .listcase
│ .getcase
│ .creategc
│ .restart
│ .sendchat
╚─────────────☉
╔──☉︎ *G R O U P* 
│ .kick
│ .tagall
│ .hidetag
│ .totag
│ .setppgc
│ .delppgc
│ .promote
│ .demote
│ .open
│ .close
│ .opentime
│ .closetime
│ .linkgc
│ .resetlinkgc
│ .antilinkgc
│ .antilinkch
│ .antiwame
│ .antilinkig
│ .antilinkall
│ .delete
╚─────────────☉
╔──☉︎ *P A N E L* 
│ .1gb
│ .2gb
│ .3gb
│ .4gb
│ .5gb
│ .6gb
│ .7gb
│ .8gb
│ .9gb
│ .10gb
│ .unli
│ .listpanel
│ .delpanel
│ .cadmin
│ .deladmin
│ .listadmin
╚─────────────☉
╔──☉︎ *A I - G E M I N I* 
│ .autoai
│ .ai
│ .openai
│ .gpt
│ .luminai
│ .gemini
│ .google
│ .putihkan
│ .hitamkan
│ .pretty
│ .ugly
│ .sedih
│ .senyum
│ .night
│ .ocr
│ .bingimg
│ .toanime
│ .toreal
│ .faceblur
│ .botakin
│ .removal
│ .tofigure 
│ .aivideo
│ .aiimage
╚─────────────☉
╔──☉︎ *D O W N L O A D* 
│ .TikTok
│ .Instagram
│ .facebook
│ .Capcut
│ .Snackvideo
│ .Mediafire
│ .Gdrive
│ .Gitclone
│ .ytmp4
│ .ytmp3
│ .play
│ .yts
│ .pindl
│ .tiktokaudio
│ .twitter 
╚─────────────☉
╔──☉︎ *C O N V E R T* 
│ .bass
│ .blown
│ .deep
│ .earrape
│ .fast
│ .fat
│ .night
│ .ocrcore
│ .reverse
│ .robot
│ .slow
│ .smooth
│ .tupai
╚─────────────☉
╔──☉︎ *R A N D O M* 
│ .akiyama
│ .ana
│ .art
│ .asuna
│ .ayuzawa
│ .boruto
│ .bts
│ .cartoon
│ .chiho
│ .chitoge
│ .cosplay
│ .cosplayloli
│ .cosplaysagiri
│ .cyber
│ .deidara
│ .doraemon
│ .elaina
│ .emilia
│ .erza
│ .exo
│ .gamewallpaper
│ .gremory
│ .hacker
│ .hestia
│ .hinata
│ .husbu
│ .inori
│ .islamic
│ .isuzu
│ .itachi
│ .itori
│ .jennie
│ .jiso
│ .justina
│ .kaga
│ .kagura
│ .kakasih
│ .kaori
│ .keneki
│ .kotori
│ .kurumi
│ .lisa
│ .madara
│ .megumin
│ .mikasa
│ .mikey
│ .miku
│ .minato
│ .mountain
│ .naruto
│ .neko2
│ .nekonime
│ .nezuko
│ .onepiece
│ .pentol
│ .pokemon
│ .programming
│ .randomnime
│ .randomnime2
│ .rize
│ .rose
│ .sagiri
│ .sakura
│ .sasuke
│ .satanic
│ .shina
│ .shinka
│ .shinomiya
│ .shizuka
│ .shota
│ .shortquote
│ .space
│ .technology
│ .tejina
│ .toukachan
│ .tsunade
│ .yotsuba
│ .yuki
│ .yulibocil
│ .yumeko
╚─────────────☉
╔──☉︎ *F U N* 
│ .gantengcek
│ .cantikcek
│ .sangecek
│ .cekkhodam
│ .jodoh
│ .couple
│ .kapankah
│ .gay
│ .goblok
│ .janda
│ .perawan
│ .babi
│ .tolol
│ .pekok
│ .jancok
│ .pinter
│ .asu
│ .bodoh
│ .lesbi
│ .bajingan
│ .anjing
│ .anjg
│ .anjj
│ .anj
│ .ngentod
│ .ngentot
│ .monyet
│ .mastah
│ .newbie
│ .bangsat
│ .ʙangke
│ .sange
│ .sangean
│ .dakjal
│ .horny
│ .wibu
│ .puki
│ .puqi
│ .peak
│ .pantex
│ .pantek
│ .setan
│ .iblis
│ .cacat
│ .yatim
│ .piatu
╚─────────────☉
╔──☉︎ *O T H E R* 
│ .sound1 - 250
│ .sad1 - 55
│ .brat
│ .bratvid
│ .attp
│ .sticker
│ .smeme
│ .swm
│ .tourl
│ .tourl2
│ .hd
│ .tohd
│ .hdvid
│ .superhd
│ .qc
│ .tovn
│ .toaudio
│ .toimg
│ .getpp
│ .readmore
│ .iqc
│ .tts
│ .owner
│ .enc
│ .ssweb
│ .pastebin
│ .gardenstock 
│ .decrypt 
╚─────────────☉
╔──☉︎ *N S F W* 
│ .waifu
│ .neko
│ .shinobu
│ .megumin
│ .bully
│ .cuddle
│ .cry
│ .hug
│ .awoo
│ .kiss
│ .lick
│ .pat
│ .smug
│ .bonk
│ .yeet
│ .blush
│ .smile
│ .wave
│ .highfive
│ .handhold
│ .nom
│ .bite
│ .glomp
│ .slap
│ .kill
│ .happy
│ .wink
│ .poke
│ .dance
│ .cringe
│ .trap
│ .blowjob
│ .hentai
│ .boobs
│ .ass
│ .pussy
│ .thighs
│ .lesbian
│ .lewdneko
│ .cum
╚─────────────☉
╔──☉︎ *P R I M B O N* 
│ .artinama
│ .artimimpi
│ .ramaljodoh
│ .ramaljodohbali
│ .ramalcinta
│ .cocoknama
│ .pasangan
│ .suamiistri
│ .jadiannikah
│ .sifatusaha
│ .rezeki
│ .pekerjaan
│ .nasib
│ .penyakit
│ .tarot
│ .fengshui
│ .haribaik
│ .harisangar
│ .harisial
│ .nagahari
│ .arahrezeki
│ .peruntungan
│ .weton
│ .karakter
│ .keberuntungan
│ .memancing
│ .masabubur
│ .zodiak
│ .shio
╚─────────────☉
╔──☉︎ *Q U O T E S* 
│ .faktaunik
│ .katailham
│ .katasenja
│ .motivasi
│ .pantun
│ .puisi
│ .quotes
│ .quotesanime
│ .quotesbucin
│ .quotesdilan
│ .quotesislamic
╚─────────────☉
╔──☉︎ *C E C A N* 
│ .hijaber
│ .jeni
│ .jiso
│ .justina
│ .rose
│ .ryujin
╚─────────────☉
╔──☉︎ *P U S H* 
│ .pushkontak
│ .pushkontak2
│ .savekontak
│ .savekontak2
╚─────────────☉
╔──☉︎ *I S L A M* 
│ .jadwalsholat
│ .alquran
│ .asmaulhusna
│ .niatsholat
│ .surah
│ .berdoa
│ .ayatkursi
│ .gislam
│ .kataislam
│ .pantunislam
╚─────────────☉
╔──☉︎ *A N I M E* 
│ .akiyama
│ .ana
│ .art
│ .asuna
│ .ayuzawa
│ .boruto
│ .bts
│ .cartoon
│ .chiho
│ .chitoge
│ .cosplay
│ .cosplayloli
│ .cosplaysagiri
│ .cyber
│ .deidara
│ .doraemon
│ .elaina
│ .emilia
│ .erza
│ .exo
│ .gamewallpaper
│ .gremory
│ .hacker
│ .hestia
│ .hinata
│ .husbu
│ .inori
│ .islamic
│ .isuzu
│ .itachi
│ .itori
│ .jennie
│ .jiso
│ .justina
│ .kaga
│ .kagura
│ .kakasih
│ .kaori
│ .keneki
│ .kotori
│ .kurumi
│ .lisa
│ .madara
│ .megumin
│ .mikasa
│ .mikey
│ .miku
│ .minato
│ .mountain
│ .naruto
│ .neko2
│ .nekonime
│ .nezuko
│ .onepiece
│ .pentol
│ .pokemon
│ .programming
│ .randomnime
│ .randomnime2
│ .rize
│ .rose
│ .sagiri
│ .sakura
│ .sasuke
│ .satanic
│ .shina
│ .shinka
│ .shinomiya
│ .shizuka
│ .shota
│ .shortquote
│ .space
│ .technology
│ .tejina
│ .toukachan
│ .tsunade
│ .yotsuba
│ .yuki
│ .yulibocil
│ .yumeko
╚─────────────☉
╔──☉︎ *M A K E R* 
│ .txt2img
│ .txt2imgv2
│ .txt2imgv3
│ .txt2imgv4
│ .txt2imgv5
│ .txt2imgv6
│ .bratgenerator
│ .pak-ustad
│ .pak-ustad2
│ .ngl
╚─────────────☉
╔──☉︎ *G E N S H I N* 
│ .build_gi
│ .gens-wildlife
│ .gens-weapons
│ .gens-voiceovers
│ .gens-viewpoint
│ .gens-talents
│ .gens-potion
│ .gens-outfit
│ .gens-nation
│ .gens-namacard
│ .gens-materials
│ .gens-food
│ .gens-enemy
│ .gens-emoji
│ .gens-domain
│ .gens-craft
│ .gens-constellation
│ .gens-artifact
│ .gens-area
│ .gens-animals
│ .gens-advrank
│ .gens-achievement
│ .gens-characters
╚─────────────☉
╔──☉︎ *B E R I T A* 
│ .fajar
│ .cnn
│ .layarkaca
│ .cnbc
│ .tribun
│ .indozone
│ .kompas
│ .detiknews
│ .dailynews
│ .inews
│ .okezone
│ .sindo
│ .tempo
│ .antara
│ .kontan
│ .merdeka
│ .jalantikus
╚─────────────☉
╔──☉︎ *R A N D O M - V I D* 
│ .tiktokgirl
│ .tiktoknukthy
│ .tiktokkayes
│ .tiktokpanrika
│ .tiktoknotnot
│ .tiktokghea
│ .tiktoksantuy
│ .tiktokbocil
╚─────────────☉
╔──☉︎ *L I N O D E* 
│ .linode2gb
│ .linode4gb
│ .linode8gb
│ .linode16gb
│ .listlinode
│ .onlinode
│ .offlinode
│ .rebootlinode
│ .rebuildlinode
│ .delinode
│ .saldolinode
│ .sisalinode
│ .cekvpslinode
╚─────────────☉
╔──☉︎ *M E N F E S S* 
│ .anonymous
│ .start
│ .mulai
│ .leave
│ .keluar
│ .next
│ .lanjut
│ .confess
│ .menfess
╚─────────────☉
╔──☉︎ *G A M E* 
│ .tebakkata
│ .asahotak
│ .susunkata
│ .tebakgambar
│ .tebakbendera
│ .tebakkimia
│ .family100
╚─────────────☉
╔──☉︎ *S T O R E* 
│ .cekidch
│ .upch
│ .sendgc
│ .proses
│ .done
│ .list
│ .addlist
│ .dellist
│ .updatelist
│ .payment
╚─────────────☉
╔──☉︎ *S E A R C H* 
│ .playstore
│ .playstation
│ .google
│ .yts
│ .soundcloud
│ .play
│ .pin
│ .tiktoksearch 
╚─────────────☉
╔──☉︎ *S T A L K E R* 
│ .stalkff
│ .stalkml
│ .stalkgmail
│ .stalkgc
│ .stalktt
╚─────────────☉
`

global.menuowner = `
╔──☉︎ *O W N E R* 
│ .listowner
│ .addowner
│ .delowner
│ .listgc
│ .onlygc
│ .listprem
│ .delprem
│ .public
│ .self
│ .setppbot
│ .delppbot
│ .tojs
│ .join
│ .rvo
│ .autoread
│ .autotyping
│ .autosholat
│ .clearchat
│ .reactch
│ .addplugin
│ .delplugin
│ .listplugin
│ .getplugin
│ .on
│ .off
│ .upswtag
│ .nglspam
│ .setbotname
│ .setbotbio
│ .autobio
│ .addcase
│ .delcase
│ .listcase
│ .getcase
│ .creategc
│ .restart
│ .sendchat
╚─────────────☉
`

global.menugroup = `
╔──☉︎ *G R O U P* 
│ .addlist
│ .dellist
│ .updatelist
│ .list
│ .kick
│ .tagall
│ .hidetag
│ .totag
│ .setppgc
│ .delppgc
│ .promote
│ .demote
│ .open
│ .close
│ .opentime
│ .closetime
│ .linkgc
│ .resetlinkgc
│ .antilinkgc
│ .antilinkch
│ .antiwame
│ .antilinkig
│ .antilinkall
│ .delete
╚─────────────☉
`

global.menupanel = `
╔──☉︎ *P A N E L* 
│ .1gb
│ .2gb
│ .3gb
│ .4gb
│ .5gb
│ .6gb
│ .7gb
│ .8gb
│ .9gb
│ .10gb
│ .unli
│ .listpanel
│ .delpanel
│ .cadmin
│ .deladmin
│ .listadmin
╚─────────────☉
`
global.menuai = `
╔──☉︎ *A I - G E M I N I* 
│ .autoai
│ .ai
│ .openai
│ .gpt
│ .luminai
│ .gemini
│ .google
│ .putihkan
│ .hitamkan
│ .pretty
│ .ugly
│ .sedih
│ .senyum
│ .night
│ .ocr
│ .bingimg
│ .toanime
│ .toreal
│ .faceblur
│ .botakin
│ .removal
│ .tofigure 
│ .aivideo
│ .aiimage
╚─────────────☉
`
global.menudownload = `
╔──☉︎ *D O W N L O A D* 
│ .TikTok
│ .Instagram
│ .facebook
│ .Capcut
│ .Snackvideo
│ .Mediafire
│ .Gdrive
│ .Gitclone
│ .ytmp4
│ .ytmp3
│ .play
│ .yts
│ .pindl
│ .tiktokaudio
│ .twitter 
╚─────────────☉
`
global.menuconvert = `
╔──☉︎ *C O N V E R T* 
│ .bass
│ .blown
│ .deep
│ .earrape
│ .fast
│ .fat
│ .nightcore
│ .reverse
│ .robot
│ .slow
│ .smooth
│ .tupai
╚─────────────☉
`
global.menurandom = `
╔──☉︎ *R A N D O M* 
│ .akiyama
│ .ana
│ .art
│ .asuna
│ .ayuzawa
│ .boruto
│ .bts
│ .cartoon
│ .chiho
│ .chitoge
│ .cosplay
│ .cosplayloli
│ .cosplaysagiri
│ .cyber
│ .deidara
│ .doraemon
│ .elaina
│ .emilia
│ .erza
│ .exo
│ .gamewallpaper
│ .gremory
│ .hacker
│ .hestia
│ .hinata
│ .husbu
│ .inori
│ .islamic
│ .isuzu
│ .itachi
│ .itori
│ .jennie
│ .jiso
│ .justina
│ .kaga
│ .kagura
│ .kakasih
│ .kaori
│ .keneki
│ .kotori
│ .kurumi
│ .lisa
│ .madara
│ .megumin
│ .mikasa
│ .mikey
│ .miku
│ .minato
│ .mountain
│ .naruto
│ .neko2
│ .nekonime
│ .nezuko
│ .onepiece
│ .pentol
│ .pokemon
│ .programming
│ .randomnime
│ .randomnime2
│ .rize
│ .rose
│ .sagiri
│ .sakura
│ .sasuke
│ .satanic
│ .shina
│ .shinka
│ .shinomiya
│ .shizuka
│ .shota
│ .shortquote
│ .space
│ .technology
│ .tejina
│ .toukachan
│ .tsunade
│ .yotsuba
│ .yuki
│ .yulibocil
│ .yumeko
╚─────────────☉
`
global.menufun = `
╔──☉︎ *F U N* 
│ .gantengcek
│ .cantikcek
│ .sangecek
│ .cekkhodam
│ .jodoh
│ .couple
│ .kapankah
│ .gay
│ .goblok
│ .janda
│ .perawan
│ .babi
│ .tolol
│ .pekok
│ .jancok
│ .pinter
│ .asu
│ .bodoh
│ .lesbi
│ .bajingan
│ .anjing
│ .anjg
│ .anjj
│ .anj
│ .ngentod
│ .ngentot
│ .monyet
│ .mastah
│ .newbie
│ .bangsat
│ .ʙangke
│ .sange
│ .sangean
│ .dakjal
│ .horny
│ .wibu
│ .puki
│ .puqi
│ .peak
│ .pantex
│ .pantek
│ .setan
│ .iblis
│ .cacat
│ .yatim
│ .piatu
╚─────────────☉
`
global.menuother = `
╔──☉︎ *O T H E R* 
│ .brat
│ .bratvid
│ .attp
│ .sticker
│ .smeme
│ .swm
│ .tourl
│ .tourl2
│ .hd
│ .tohd
│ .hdvid
│ .superhd
│ .qc
│ .tovn
│ .toaudio
│ .toimg
│ .getpp
│ .readmore
│ .iqc
│ .tts
│ .owner
│ .enc
│ .ssweb
│ .pastebin
│ .gardenstock 
│ .decrypt 
╚─────────────☉
`
global.menunsfw = `
╔──☉︎ *N S F W* 
│ .waifu
│ .neko
│ .shinobu
│ .megumin
│ .bully
│ .cuddle
│ .cry
│ .hug
│ .awoo
│ .kiss
│ .lick
│ .pat
│ .smug
│ .bonk
│ .yeet
│ .blush
│ .smile
│ .wave
│ .highfive
│ .handhold
│ .nom
│ .bite
│ .glomp
│ .slap
│ .kill
│ .happy
│ .wink
│ .poke
│ .dance
│ .cringe
│ .trap
│ .blowjob
│ .hentai
│ .boobs
│ .ass
│ .pussy
│ .thighs
│ .lesbian
│ .lewdneko
│ .cum
╚─────────────☉
`
global.menuprimbon = `
╔──☉︎ *P R I M B O N* 
│ .artinama
│ .artimimpi
│ .ramaljodoh
│ .ramaljodohbali
│ .ramalcinta
│ .cocoknama
│ .pasangan
│ .suamiistri
│ .jadiannikah
│ .sifatusaha
│ .rezeki
│ .pekerjaan
│ .nasib
│ .penyakit
│ .tarot
│ .fengshui
│ .haribaik
│ .harisangar
│ .harisial
│ .nagahari
│ .arahrezeki
│ .peruntungan
│ .weton
│ .karakter
│ .keberuntungan
│ .memancing
│ .masabubur
│ .zodiak
│ .shio
╚─────────────☉
`
global.menuquotes = `
╔──☉︎ *Q U O T E S* 
│ .faktaunik
│ .katailham
│ .katasenja
│ .motivasi
│ .pantun
│ .puisi
│ .quotes
│ .quotesanime
│ .quotesbucin
│ .quotesdilan
│ .quotesislamic
╚─────────────☉
`
global.menucecan = `
╔──☉︎ *C E C A N* 
│ .hijaber
│ .jeni
│ .jiso
│ .justina
│ .rose
│ .ryujin
╚─────────────☉
`
global.menupush = `
╔──☉︎ *P U S H* 
│ .pushkontak
│ .pushkontak2
│ .savekontak
│ .savekontak2
╚─────────────☉
`
global.menuislam = `
╔──☉︎ *I S L A M* 
│ .jadwalsholat
│ .alquran
│ .asmaulhusna
│ .niatsholat
│ .surah
│ .berdoa
│ .ayatkursi
│ .gislam
│ .kataislam
│ .pantunislam
╚─────────────☉
`
global.menuanime = `
╔──☉︎ *A N I M E* 
│ .akiyama
│ .ana
│ .art
│ .asuna
│ .ayuzawa
│ .boruto
│ .bts
│ .cartoon
│ .chiho
│ .chitoge
│ .cosplay
│ .cosplayloli
│ .cosplaysagiri
│ .cyber
│ .deidara
│ .doraemon
│ .elaina
│ .emilia
│ .erza
│ .exo
│ .gamewallpaper
│ .gremory
│ .hacker
│ .hestia
│ .hinata
│ .husbu
│ .inori
│ .islamic
│ .isuzu
│ .itachi
│ .itori
│ .jennie
│ .jiso
│ .justina
│ .kaga
│ .kagura
│ .kakasih
│ .kaori
│ .keneki
│ .kotori
│ .kurumi
│ .lisa
│ .madara
│ .megumin
│ .mikasa
│ .mikey
│ .miku
│ .minato
│ .mountain
│ .naruto
│ .neko2
│ .nekonime
│ .nezuko
│ .onepiece
│ .pentol
│ .pokemon
│ .programming
│ .randomnime
│ .randomnime2
│ .rize
│ .rose
│ .sagiri
│ .sakura
│ .sasuke
│ .satanic
│ .shina
│ .shinka
│ .shinomiya
│ .shizuka
│ .shota
│ .shortquote
│ .space
│ .technology
│ .tejina
│ .toukachan
│ .tsunade
│ .yotsuba
│ .yuki
│ .yulibocil
│ .yumeko
╚─────────────☉
`
global.menumaker = `
╔──☉︎ *M A K E R* 
│ .txt2img
│ .txt2imgv2
│ .txt2imgv3
│ .txt2imgv4
│ .txt2imgv5
│ .txt2imgv6
│ .bratgenerator
│ .pak-ustad
│ .pak-ustad2
│ .ngl
╚─────────────☉
`
global.menugenshin = `
╔──☉︎ *G E N S H I N* 
│ .build_gi
│ .gens-wildlife
│ .gens-weapons
│ .gens-voiceovers
│ .gens-viewpoint
│ .gens-talents
│ .gens-potion
│ .gens-outfit
│ .gens-nation
│ .gens-namacard
│ .gens-materials
│ .gens-food
│ .gens-enemy
│ .gens-emoji
│ .gens-domain
│ .gens-craft
│ .gens-constellation
│ .gens-artifact
│ .gens-area
│ .gens-animals
│ .gens-advrank
│ .gens-achievement
│ .gens-characters
╚─────────────☉
`
global.menuberita = `
╔──☉︎ *B E R I T A* 
│ .fajar
│ .cnn
│ .layarkaca
│ .cnbc
│ .tribun
│ .indozone
│ .kompas
│ .detiknews
│ .dailynews
│ .inews
│ .okezone
│ .sindo
│ .tempo
│ .antara
│ .kontan
│ .merdeka
│ .jalantikus
╚─────────────☉
`
global.menurandomvid = `
╔──☉︎ *R A N D O M - V I D* 
│ .tiktokgirl
│ .tiktoknukthy
│ .tiktokkayes
│ .tiktokpanrika
│ .tiktoknotnot
│ .tiktokghea
│ .tiktoksantuy
│ .tiktokbocil
╚─────────────☉
`
global.menulinode = `╚─────────────☉
╔──☉︎ *L I N O D E* 
│ .linode2gb
│ .linode4gb
│ .linode8gb
│ .linode16gb
│ .listlinode
│ .onlinode
│ .offlinode
│ .rebootlinode
│ .rebuildlinode
│ .delinode
│ .saldolinode
│ .sisalinode
│ .cekvpslinode
╚─────────────☉
`
global.menumenfess = `
╔──☉︎ *M E N F E S S* 
│ .anonymous
│ .start
│ .mulai
│ .leave
│ .keluar
│ .next
│ .lanjut
│ .confess
│ .menfess
╚─────────────☉
`
global.menugame = `
╔──☉︎ *G A M E* 
│ .tebakkata
│ .asahotak
│ .susunkata
│ .tebakgambar
│ .tebakbendera
│ .tebakkimia
│ .family100
╚─────────────☉
`
global.menustore = `
╔──☉︎ *S T O R E* 
│ .cekidch
│ .upch
│ .sendgc
│ .proses
│ .done
│ .list
│ .addlist
│ .dellist
│ .updatelist
│ .payment
╚─────────────☉
`
global.menuse = `
╔──☉︎ *S E A R C H* 
│ .playstore
│ .playstation
│ .google
│ .yts
│ .soundcloud
│ .play
│ .pin
│ .tiktoksearch 
╚─────────────☉
`
global.menubug = `
╔──☉︎ *B U G* 
│ .fclose
│ .forceclose
│ .fc-invis
│ .delaymaker
│ .delayinvis
│ .crash
│ .delayip
╚─────────────☉
`
global.stalkmenu = `
╔──☉︎ *S T A L K E R* 
│ .stalkff
│ .stalkml
│ .stalkgmail
│ .stalkgc
│ .stalktt
╚─────────────☉
`
//============{ Import } =============