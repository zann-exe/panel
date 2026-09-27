// ═══════════════════════════════════════════════════════════════════
//  YTDLPBINARY.JS — Resolve & auto-download binary `yt-dlp` standalone
//
//  KENAPA PINDAH DARI @distube/ytdl-core KE yt-dlp:
//  Repository @distube/ytdl-core (dan semua fork ytdl-core lainnya)
//  SUDAH DI-ARCHIVE oleh pemiliknya (16 Agustus 2025) — artinya tidak
//  ada lagi update untuk mengikuti perubahan signature/cipher YouTube.
//  Itu sebabnya .play selalu gagal dengan "Status code: 403" — bukan
//  bug di kode bot ini, tapi library-nya sendiri yang sudah ditinggalkan
//  dan YouTube terus mengubah mekanisme anti-bot mereka.
//
//  yt-dlp (project Python, BUKAN library Node.js) jauh lebih sering
//  di-update (kadang beberapa kali per bulan) untuk mengikuti perubahan
//  YouTube, dan punya rilis "standalone binary" yang SUDAH MEMBUNDEL
//  Python di dalamnya — jadi TIDAK perlu install Python di server sama
//  sekali, aman dipakai di Pterodactyl (yang biasanya cuma egg Node.js
//  polos, tanpa python3 ter-install).
//
//  Modul ini auto-download binary tersebut SEKALI ke folder bin/ pada
//  saat pertama kali fitur .play dipanggil (bukan saat npm install,
//  supaya tidak menggagalkan instalasi bot kalau jaringan saat itu
//  tidak stabil) — lalu cache path-nya untuk pemanggilan berikutnya.
//  Konsisten dengan gaya defensif videoGen.js (resolveFfmpegPath):
//  kalau gagal, fungsi pemanggil akan menerima error yang jelas, BUKAN
//  bikin bot crash.
// ═══════════════════════════════════════════════════════════════════

import fs from 'fs';
import path from 'path';
import https from 'https';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const BIN_DIR   = path.join(__dirname, '..', 'bin');
const BIN_PATH  = path.join(BIN_DIR, 'yt-dlp');

// URL rilis binary standalone Linux (sudah membundel Python, tidak ada
// dependency python3 di OS). Lihat dokumentasi resmi yt-dlp — bagian
// "Linux standalone x64 binary" di halaman Releases.
const DOWNLOAD_URL = 'https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp';

let downloadPromise = null; // dipakai supaya download cuma jalan SEKALI walau dipanggil bersamaan

function fileLooksValid(p) {
    try {
        const stat = fs.statSync(p);
        // Binary asli minimal beberapa MB — kalau jauh lebih kecil dari itu,
        // kemungkinan file korup/gagal download (misal cuma berisi halaman
        // error HTML yang ke-save sebagai file biner).
        return stat.isFile() && stat.size > 1_000_000;
    } catch {
        return false;
    }
}

function downloadFile(url, destPath) {
    return new Promise((resolve, reject) => {
        const tmpPath = destPath + '.download';
        const file = fs.createWriteStream(tmpPath);

        const req = https.get(url, (res) => {
            // GitHub releases/latest/download selalu redirect (302) ke URL
            // asset asli — ikuti redirect-nya secara manual.
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                file.close();
                fs.unlink(tmpPath, () => {});
                downloadFile(res.headers.location, destPath).then(resolve, reject);
                return;
            }
            if (res.statusCode !== 200) {
                file.close();
                fs.unlink(tmpPath, () => {});
                reject(new Error(`Gagal download yt-dlp (HTTP ${res.statusCode}).`));
                return;
            }
            res.pipe(file);
            file.on('finish', () => {
                file.close(() => {
                    try {
                        fs.renameSync(tmpPath, destPath);
                        fs.chmodSync(destPath, 0o755); // wajib executable di Linux
                        resolve();
                    } catch (err) {
                        reject(err);
                    }
                });
            });
        });
        req.on('error', (err) => {
            file.close();
            fs.unlink(tmpPath, () => {});
            reject(err);
        });
    });
}

/**
 * Pastikan binary yt-dlp ada & executable di bin/yt-dlp. Download otomatis
 * kalau belum ada (atau file sebelumnya korup). Return path binary-nya.
 * Melempar Error dengan pesan yang jelas kalau gagal (mis. tidak ada
 * koneksi internet ke GitHub dari server).
 */
export async function ensureYtDlp() {
    if (fileLooksValid(BIN_PATH)) return BIN_PATH;

    // Cegah race condition kalau beberapa command .play dipanggil
    // bersamaan persis saat binary belum ada — semua nunggu download
    // yang SAMA, bukan masing-masing download sendiri-sendiri.
    if (!downloadPromise) {
        downloadPromise = (async () => {
            if (!fs.existsSync(BIN_DIR)) fs.mkdirSync(BIN_DIR, { recursive: true });
            await downloadFile(DOWNLOAD_URL, BIN_PATH);
            if (!fileLooksValid(BIN_PATH)) {
                throw new Error('File yt-dlp yang terdownload tidak valid/korup.');
            }
        })().finally(() => { downloadPromise = null; });
    }

    try {
        await downloadPromise;
    } catch (err) {
        throw new Error(
            `Gagal menyiapkan yt-dlp: ${err.message}\n` +
            'Pastikan server punya akses internet ke github.com, atau unduh manual ' +
            `binary "yt-dlp" Linux dari https://github.com/yt-dlp/yt-dlp/releases/latest dan letakkan di "${BIN_PATH}" (lalu chmod +x).`
        );
    }
    return BIN_PATH;
}

/**
 * Jalankan yt-dlp dengan argumen tertentu, return { stdout, stderr }.
 * Melempar Error (dengan stderr terlampir) kalau exit code != 0.
 */
export function runYtDlp(binPath, args, { timeoutMs = 120_000 } = {}) {
    return new Promise((resolve, reject) => {
        const proc = spawn(binPath, args, { windowsHide: true });
        let stdout = '';
        let stderr = '';
        const chunks = [];
        let timedOut = false;

        const timer = setTimeout(() => {
            timedOut = true;
            proc.kill('SIGKILL');
        }, timeoutMs);

        // Dipakai untuk mode download biner (audio) — kumpulkan stdout
        // sebagai Buffer mentah, bukan string, supaya tidak korup data
        // audio biner.
        proc.stdout.on('data', (chunk) => { chunks.push(chunk); stdout += ''; });
        proc.stderr.on('data', (d) => { stderr += d.toString(); });
        proc.on('error', (err) => { clearTimeout(timer); reject(err); });
        proc.on('close', (code) => {
            clearTimeout(timer);
            if (timedOut) {
                reject(new Error(`yt-dlp timeout setelah ${timeoutMs}ms.`));
                return;
            }
            if (code !== 0) {
                reject(new Error(`yt-dlp keluar dengan kode ${code}: ${stderr.slice(-800) || '(tidak ada output error)'}`));
                return;
            }
            resolve({ stdout: Buffer.concat(chunks), stderr });
        });
    });
}
