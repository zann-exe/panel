import { spawn, execSync } from 'child_process';
import fs from 'fs';
import os from 'os';
import path from 'path';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
let bundledFfmpegPath = null;
try {
    bundledFfmpegPath = require('ffmpeg-static');
} catch {}

let cachedFfmpegPath; // null = checked and unavailable; undefined = not checked yet

export function resolveFfmpegPath() {
    if (cachedFfmpegPath !== undefined) return cachedFfmpegPath;

    // Cross-platform resolver:
    // 1) FFMPEG_BIN explicitly configured by the user/server.
    // 2) ffmpeg sistem/PATH (wajib diprioritaskan untuk Termux).
    // 3) ffmpeg-static dari npm sebagai fallback Linux/Pterodactyl.
    const configured = process.env.FFMPEG_BIN?.trim();
    if (configured) {
        try {
            if (fs.existsSync(configured)) {
                cachedFfmpegPath = configured;
                return cachedFfmpegPath;
            }
        } catch {}

        try {
            const resolved = execSync(
                process.platform === 'win32'
                    ? `where ${configured}`
                    : `command -v ${configured}`,
                { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }
            ).split(/\r?\n/)[0].trim();

            if (resolved && fs.existsSync(resolved)) {
                cachedFfmpegPath = resolved;
                return cachedFfmpegPath;
            }
        } catch {}
    }

    // 2) FFmpeg sistem/PATH. Ini HARUS diprioritaskan agar Termux/Android
    //    memakai binary hasil `pkg install ffmpeg` (Bionic), bukan binary
    //    Linux glibc dari ffmpeg-static.
    try {
        const command = process.platform === 'win32'
            ? 'where ffmpeg'
            : 'command -v ffmpeg';

        const systemPath = execSync(command, {
            encoding: 'utf8',
            stdio: ['ignore', 'pipe', 'ignore']
        }).split(/\r?\n/)[0].trim();

        if (systemPath && fs.existsSync(systemPath)) {
            cachedFfmpegPath = systemPath;
            return cachedFfmpegPath;
        }
    } catch {}

    // 3) Bundled FFmpeg dari npm. Ini membuat deployment Pterodactyl/Linux
    //    tetap punya fallback tanpa meminta admin memasang paket OS.
    //    JANGAN dipakai di Termux: ffmpeg-static membawa binary Linux glibc,
    //    sedangkan Android/Termux memakai Bionic libc.
    const isTermux = Boolean(
        process.env.TERMUX_VERSION ||
        process.env.PREFIX?.includes('/com.termux/') ||
        process.env.PREFIX?.includes('/data/data/com.termux') ||
        process.env.HOME?.includes('/com.termux/')
    );

    if (!isTermux && bundledFfmpegPath) {
        try {
            if (fs.existsSync(bundledFfmpegPath)) {
                cachedFfmpegPath = bundledFfmpegPath;
                return cachedFfmpegPath;
            }
        } catch {}
    }

    cachedFfmpegPath = null;
    return cachedFfmpegPath;
}

export function runFfmpeg(args) {
    const ffmpegPath = resolveFfmpegPath();
    if (!ffmpegPath) {
        return Promise.reject(new Error(
            "FFmpeg tidak ditemukan. Termux/Android: jalankan `pkg install ffmpeg`. " +
            "Pterodactyl/Linux: pastikan paket `ffmpeg` tersedia pada image/server, " +
            "atau set `FFMPEG_BIN` ke binary FFmpeg. Setelah itu restart bot."
        ));
    }
    return new Promise((resolve, reject) => {
        const proc = spawn(ffmpegPath, args);
        let stderr = '';
        proc.stderr.on('data', (d) => { stderr += d.toString(); });
        proc.on('error', reject);
        proc.on('close', (code) => {
            if (code === 0) resolve();
            else reject(new Error(`ffmpeg keluar dengan kode ${code}: ${stderr.slice(-500)}`));
        });
    });
}

/**
 * Konversi SATU gambar (buffer PNG/JPEG apapun, mis. hasil fetch dari API
 * brat eksternal) jadi sticker WebP statis 512x512 — dipakai bratCommands.js
 * supaya tidak perlu dependency `sharp`/`canvas` untuk konversi format,
 * cukup ffmpeg yang sudah ada.
 * @param {Buffer} imageBuffer
 * @returns {Promise<Buffer>} buffer WebP siap kirim sebagai sticker
 */
export async function imageToWebpSticker(imageBuffer) {
    const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'brat-img-'));
    try {
        const inputPath = path.join(tmpDir, 'input.img');
        const outputPath = path.join(tmpDir, 'output.webp');
        fs.writeFileSync(inputPath, imageBuffer);

        await runFfmpeg([
            '-y',
            '-i', inputPath,
            '-vf', 'scale=512:512:force_original_aspect_ratio=decrease,pad=512:512:(ow-iw)/2:(oh-ih)/2:color=white@0.0',
            outputPath,
        ]);

        return fs.readFileSync(outputPath);
    } finally {
        try { fs.rmSync(tmpDir, { recursive: true, force: true }); } catch { /* ignore */ }
    }
}

// CATATAN (2026-07-07): concatClipsToAnimatedWebp(), isVideoGenAvailable(),
// dan framesToMp4() sudah DIHAPUS dari sini — ketiganya cuma dipakai oleh
// .bratvid (variant video/animasi brat), yang sudah dihapus. imageToWebpSticker()
// di atas (dipakai .brat/.bratgreen/.bratwhite) tidak terpengaruh — dia
// tetap butuh resolveFfmpegPath()/runFfmpeg() di atas, jadi keduanya tetap ada.
