# Audit Pairing WhatsApp — Forscieno

## Status

Workflow pairing sudah diperkuat dan syntax JavaScript lolos `node --check`.

## Alur setelah patch

1. Bot membaca `NOMOR_HP` dari environment, lalu `setting.js`, atau meminta nomor dari stdin bila placeholder.
2. Nomor dinormalisasi ke format internasional angka saja (`628...`).
3. Auth state dibuat dengan `useMultiFileAuthState('./session')`.
4. Baileys 6.7.22 dipakai secara fixed version.
5. Versi WA diambil lewat `fetchLatestBaileysVersion()` dengan timeout 15 detik; `WA_VERSION` dapat override.
6. Socket dibuat dengan `printQRInTerminal: false` dan browser canonical `Browsers.ubuntu('Chrome')`.
7. Bot menunggu WebSocket benar-benar OPEN sebelum memanggil `requestPairingCode()`.
8. Pairing code ditampilkan.
9. Saat WhatsApp menerima pairing, event `creds.update` menyimpan credential dan menampilkan konfirmasi bahwa pairing diterima.
10. Setelah `connection === 'open'`, bot menandai socket aktif, membuat backup session, dan mulai service utama.
11. `creds.update` terus disimpan untuk menjaga session tetap persisten.
12. SIGTERM/SIGINT menunggu `saveCreds()` sebelum proses dihentikan.
13. Setelah restart normal, jika `session/creds.json` masih terdaftar, bot tidak meminta pairing code lagi.

## Perubahan yang dibuat

- `creds.update` sekarang menggunakan handler eksplisit yang menjalankan `saveCreds()` dan memberi log saat `registered === true`.
- Sebelum `requestPairingCode()`, socket dicek agar `sock.ws.readyState === 1`.
- Polling pairing dipercepat menjadi interval 1 detik setelah socket siap, dengan batas 30 detik.
- Instruksi console membedakan dua tahap sukses: `Pairing diterima WhatsApp` lalu `WhatsApp TERHUBUNG`.

## Catatan penting

Kode pairing yang tampil belum membuktikan akun sudah terhubung. Bukti sukses yang benar adalah credential menjadi registered dan kemudian event `connection === 'open'`.

Pairing tetap bergantung pada WhatsApp/Baileys dan jaringan server. Tidak ada source code yang dapat menjamin 100% jika WhatsApp sedang menolak pairing atau jaringan server bermasalah.

Baileys 6.7.22 dipertahankan karena merupakan patched v6 release untuk advisory keamanan yang memengaruhi versi sebelum 6.7.22.

## Deployment Pterodactyl

Disarankan:

- Node.js >= 20.
- Set `NOMOR_HP=628xxxxxxxxxx` sebagai Startup Variable agar tidak bergantung pada stdin console.
- Pastikan hanya satu instance bot memakai folder `session/` yang sama.
- Jangan hapus `session/` setelah pairing berhasil.
- Restart normal menggunakan SIGTERM agar graceful shutdown dapat menyimpan credential.
- Jangan gunakan `kill -9`/SIGKILL jika tidak diperlukan.
- Jika pairing gagal dengan error WhatsApp seperti 515/408, itu dapat berasal dari sisi protokol/WhatsApp dan bukan sekadar kesalahan format nomor; cek versi Baileys/WA dan log `connection.update`.
