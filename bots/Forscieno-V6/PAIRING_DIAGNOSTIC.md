# Pairing Diagnostic v2

Perubahan:
- Default timeout pairing code 90 detik (`PAIRING_TIMEOUT_MS` dapat diubah).
- Timeout tidak menghapus `session/`.
- Tidak auto-restart loop saat pairing gagal.
- Error Baileys/HTTP/WS dicetak dengan statusCode, name, message, payload/data, stack ringkas, dan konteks.
- Saat koneksi close sebelum pairing, diagnostic dicetak sebelum bot berhenti.
- Kode 500 tidak lagi dianggap sebagai penyebab akhir; detail error harus dilihat pada `PAIRING DIAGNOSTIC`.

Environment opsional:
`PAIRING_TIMEOUT_MS=120000`

Target sukses:
1. `WhatsApp mengeluarkan pairing code`
2. Masukkan kode di WhatsApp.
3. `Pairing diterima WhatsApp`
4. `WhatsApp TERHUBUNG`
