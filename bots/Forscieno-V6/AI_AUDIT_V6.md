# Forscieno V5 — AI & Workflow Audit

## Perubahan yang sengaja dibatasi

Perbaikan hanya menyentuh `lib/gojoAi.js`. Workflow command, message pipeline, role/owner system, database, dan struktur folder tidak dirombak.

### Perbaikan
1. Provider AI utama Gojo dipindahkan ke endpoint Prexzy ChatGPT yang mendokumentasikan GET tanpa API key:
   `https://prexzyapis.com/ai/chatgpt?q=...`
2. Provider Siputzx MetaAI lama tetap dipertahankan sebagai fallback.
3. Parser response dibuat lebih toleran terhadap `result`, `data`, `response`, `answer`, `message`, serta beberapa nested result fields.
4. Timeout provider diturunkan menjadi 15 detik agar fallback lebih cepat ketika provider macet.
5. Error detail provider tetap masuk log server, tetapi tidak lagi dibocorkan ke pengguna WhatsApp melalui pesan `Debug:`.
6. Batas input 500 karakter tetap dipertahankan agar request tidak terlalu besar.

## Verifikasi
- JavaScript: 66/66 file lulus `node --check`.
- `package.json`: valid JSON.
- Struktur command/message pipeline tidak diubah.
- Nama file internal ZIP tidak diubah.
- Creator tetap `Epann`.

## Batas pengujian
Runtime sandbox tidak memiliki DNS/network yang dapat digunakan untuk melakukan request API secara langsung, sehingga keberhasilan live response AI tidak dapat diklaim dari sandbox. Provider utama dipilih berdasarkan dokumentasi publik Prexzy yang menyatakan endpoint chat GET tanpa API key dan response `result`.

## Pterodactyl test yang disarankan
1. Install dependency: `npm install`.
2. Start: `npm start` / `node index.js`.
3. Pair/login WhatsApp.
4. Pastikan `.gojoai` menunjukkan ON.
5. Kirim pesan biasa di private chat.
6. Uji `.gojoai off` lalu pesan biasa harus tidak dibalas AI.
7. Uji `.gojoai on` lalu pesan biasa harus kembali dibalas.
8. Di group, uji mention/reply ke bot.
9. Jika provider utama gagal, log harus menunjukkan kegagalan provider dan bot mencoba fallback; user hanya menerima pesan fallback umum jika keduanya gagal.
