# 📋 Laporan Audit & Struktur Folder Bot WhatsApp

Dokumen ini berisi hasil ekstraksi, analisis mendalam, audit keamanan, pengujian sintaks JavaScript, pembersihan berkas duplikat, standardisasi nama owner menjadi **`Epann`**, serta penambahan nomor **`628118189945`** sebagai **Global Owner** dan **User Premium** di seluruh bot.

---

## 🗂️ 1. Struktur & Lokasi Bersih (Clean Output)

Seluruh bot yang telah diekstraksi, diaudit, dibersihkan dari file duplikat, dan dirapikan ditempatkan pada direktori:
📂 **[`panel/bots/`](file:///d:/Nevnev/Panpan/panel/bots)**

| Nama Folder Bot | Versi Asal | Main Entry | Start Command | Node.js Engine | Status Sintaks | Nama Owner | Nomor Owner & Premium |
| :--- | :--- | :--- | :--- | :--- | :---: | :---: | :---: |
| [`AlyaChan-V2`](file:///d:/Nevnev/Panpan/panel/bots/AlyaChan-V2) | V2 (Akhir) | `start.js` | `node start.js` | `>= 20.0.0` | ✅ PASS | `Epann` | `628118189945` |
| [`ArisuMD-V2`](file:///d:/Nevnev/Panpan/panel/bots/ArisuMD-V2) | V2 (Akhir) | `index.js` | `node index.js` | `any` | ✅ PASS | `Epann` | `628118189945` |
| [`ChiiMD-V2`](file:///d:/Nevnev/Panpan/panel/bots/ChiiMD-V2) | V2 (Akhir) | `index.js` | `node index.js` | `any` | ✅ PASS | `Epann` | `628118189945` |
| [`Forscieno-V6`](file:///d:/Nevnev/Panpan/panel/bots/Forscieno-V6) | V6 (Latest) | `index.js` | `node index.js` | `>= 20.0.0` | ✅ PASS | `Epann` | `628118189945` |
| [`Gojo-Satoru-MD`](file:///d:/Nevnev/Panpan/panel/bots/Gojo-Satoru-MD) | v3.2.1 | `index.js` | `node index.js` | `>= 20.0.0` | ✅ PASS | `Epann` | `628118189945` |
| [`Shikimori-MD-V2`](file:///d:/Nevnev/Panpan/panel/bots/Shikimori-MD-V2) | V2 (Akhir) | `index.js` | `node index.js` | `any` | ✅ PASS | `Epann` | `628118189945` |
| [`Waguri-Ai-V2`](file:///d:/Nevnev/Panpan/panel/bots/Waguri-Ai-V2) | V2 (Akhir) | `index.js` | `node index.js` | `any` | ✅ PASS | `Epann` | `628118189945` |
| [`bjir-2.0-V2`](file:///d:/Nevnev/Panpan/panel/bots/bjir-2.0-V2) | V2 (Akhir) | `start.js` | `node start.js` | `any` | ✅ PASS | `Epann` | `628118189945` |
| [`elainamd-V2`](file:///d:/Nevnev/Panpan/panel/bots/elainamd-V2) | V2 (Akhir) | `index.js` | `node index.js` | `any` | ✅ PASS | `Epann` | `628118189945` |
| [`furina-V2`](file:///d:/Nevnev/Panpan/panel/bots/furina-V2) | V2 (Akhir) | `index.js` | `node index.js` | `any` | ✅ PASS | `Epann` | `628118189945` |
| [`kennzy-V2`](file:///d:/Nevnev/Panpan/panel/bots/kennzy-V2) | V2 (Akhir) | `start.js` | `node start.js` | `>= 20.0.0` | ✅ PASS | `Epann` | `628118189945` |

> **Total JS Files Diuji:** **1.115 file JavaScript** — **100% Lulus Uji Sintaks (`node --check`)**.

---

## 💎 2. Penambahan User Premium & Nama Owner

1. **Standardisasi Nama Owner (`Epann`)**:
   - Seluruh variabel nama owner (`global.ownername`, `global.namaowner`, `global.namaOwner`, `ownerName`, `global.nameCreator`) telah diseragamkan menjadi **`Epann`**.
2. **Penambahan Nomor Premium (`628118189945`)**:
   - Berkas database premium (`lib/database/premium.json`, `database/premium.json`, `library/database/premium.json`) telah diupdate dengan nomor `628118189945@s.whatsapp.net`.
   - Konfigurasi array premium (`global.prems`, `premiumNumbers`) pada `Shikimori`, `Forscieno`, dan `Gojo` telah diupdate dengan nomor `628118189945`.

---

## 🗑️ 3. File Duplikat yang Telah Dihapus (Deleted Duplicates)

Sebanyak **33 file duplikat internal** telah dibersihkan:
1. **File Backup Redundan (`.bak`)**:
   - `AlyaChan-V2/database/baileys_store.json.bak`
   - `AlyaChan-V2/database/database.json.bak`
2. **Plugin Duplikat / Identik**:
   - `Shikimori-MD-V2/Shikimori/plugins/game-tebaktebakan_ans.js`
   - `Shikimori-MD-V2/Shikimori/plugins/game-tebaktebakan_hint.js`
   - `Shikimori-MD-V2/Shikimori/plugins/game-tebaktebakan.js`
3. **Font Duplikat (`src/` vs `src/font/`)**:
   - `Shikimori-MD-V2/Shikimori/src/level_c.otf`, `texts.otf`
   - `furina-V2/furina/src/level_c.otf`, `texts.otf`, `Zahraaa.ttf`
   - `furina-V2/furina/data/DinzIDMedia/font/nulis.ttf`
4. **Media & Temp Duplikat**:
   - `furina-V2/furina/data/media/thumb.jpg` *(Duplikat dari `data/image/thumb.jpg`)*
   - `Shikimori-MD-V2/Shikimori/tmp/ryo.tmp`
5. **Placeholder Dummy Junk (`xeon.js` & placeholder txt)**:
   - 17 file dummy `xeon.js` dan 5 file placeholder `ᴊᴀɴɢᴀɴ ʟᴜᴘᴀ ʙᴀᴄᴀ ɪɴɪ` di dalam subdirektori `furina-V2`.

---

## 🚀 4. Panduan Deploy ke Pterodactyl / Docker Panel

1. **Pilih Bot:** Masuk ke folder bot yang diinginkan di `panel/bots/<nama-bot>`.
2. **Instalasi Dependensi:**
   ```bash
   npm install
   ```
3. **Jalankan Bot:**
   - Untuk bot dengan entry `index.js`: `npm start` atau `node index.js`
   - Untuk bot dengan entry `start.js` (AlyaChan, bjir, kennzy): `node start.js`
