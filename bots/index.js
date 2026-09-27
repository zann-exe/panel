import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import readline from 'readline';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Helper function to resolve bot entry file and root directory
function findBotEntry(dir) {
    if (!fs.existsSync(dir)) return null;
    const files = fs.readdirSync(dir);

    // 1. Check package.json main property
    if (files.includes('package.json')) {
        try {
            const pkg = JSON.parse(fs.readFileSync(path.join(dir, 'package.json'), 'utf8'));
            if (pkg.main && fs.existsSync(path.join(dir, pkg.main))) {
                return { root: dir, entry: pkg.main };
            }
        } catch {}
    }

    // 2. Direct entry files in root
    if (files.includes('start.js')) return { root: dir, entry: 'start.js' };
    if (files.includes('index.js')) return { root: dir, entry: 'index.js' };
    if (files.includes('main.js'))  return { root: dir, entry: 'main.js' };

    // 3. Check inner subdirectories (e.g., ChiiMD-main, furina, Forscieno, Shikimori)
    for (const f of files) {
        const sub = path.join(dir, f);
        if (fs.statSync(sub).isDirectory() && !['node_modules', '.git', 'database', 'media', 'lib', 'src', 'data'].includes(f)) {
            const res = findBotEntry(sub);
            if (res) return res;
        }
    }
    return null;
}

// Load and group all available bots in panel/bots directory
function loadBotCatalog() {
    const mainBots = [];
    const forscienoBots = [];

    const dirs = fs.readdirSync(__dirname).filter(f => fs.statSync(path.join(__dirname, f)).isDirectory() && f !== 'node_modules' && !f.startsWith('.'));

    dirs.forEach(folder => {
        const fullDir = path.join(__dirname, folder);
        const entryInfo = findBotEntry(fullDir);
        if (!entryInfo) return;

        const isForscieno = folder.toLowerCase().includes('forscieno');
        const botObj = {
            name: folder,
            folder: folder,
            fullPath: entryInfo.root,
            entry: entryInfo.entry,
            entryPath: path.join(entryInfo.root, entryInfo.entry)
        };

        if (isForscieno) {
            forscienoBots.push(botObj);
        } else {
            mainBots.push(botObj);
        }
    });

    // Sort main bots alphabetically
    mainBots.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

    // Sort Forscieno bots by version number (e.g. Forscieno-V6, Forscieno-v7)
    forscienoBots.sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true, sensitivity: 'base' }));

    return { mainBots, forscienoBots };
}

function displayMainMenu(mainBots, forscienoCount) {
    console.log("\n========================================================");
    console.log("       🤖 PANPAN MULTI-BOT LAUNCHER SELECTOR            ");
    console.log("========================================================");
    console.log("Pilih bot WhatsApp yang ingin Anda aktifkan:");
    console.log("--------------------------------------------------------");
    
    mainBots.forEach((bot, index) => {
        const numStr = `[${index + 1}]`.padEnd(5);
        console.log(` ${numStr} ${bot.name.padEnd(22)} (Entry: ${bot.entry})`);
    });

    const forscienoIdx = mainBots.length + 1;
    const forscienoNumStr = `[${forscienoIdx}]`.padEnd(5);
    console.log(` ${forscienoNumStr} 📁 Forscieno Files      (${forscienoCount} Versi Tersedia)`);
    
    console.log("--------------------------------------------------------");
    console.log("Tips: Anda juga bisa isi ENV BOT_CHOICE di Pterodactyl");
    console.log("========================================================\n");
}

function displayForscienoMenu(forscienoBots) {
    console.log("\n========================================================");
    console.log("       📁 FORSCIENO FILES — PILIH VERSI BOT             ");
    console.log("========================================================");
    console.log("Pilih versi bot Forscieno yang ingin Anda aktifkan:");
    console.log("--------------------------------------------------------");
    forscienoBots.forEach((bot, index) => {
        const numStr = `[${index + 1}]`.padEnd(5);
        console.log(` ${numStr} ${bot.name.padEnd(22)} (Entry: ${bot.entry})`);
    });
    console.log("--------------------------------------------------------");
    console.log(" [0]   🔙 Kembali ke Menu Utama");
    console.log("========================================================\n");
}

function promptInput(rl, query) {
    return new Promise(resolve => rl.question(query, resolve));
}

async function getSelection(mainBots, forscienoBots, rl) {
    const totalMainOption = mainBots.length + 1; // Last option is "Forscieno Files" category
    const cliArg = process.argv[2];
    const envChoice = process.env.BOT_CHOICE || process.env.BOT_INDEX;
    const inputVal = (cliArg || envChoice || '').trim();

    if (inputVal) {
        // Direct match by name across all bots
        const allBots = [...mainBots, ...forscienoBots];
        const matchByName = allBots.find(b => b.name.toLowerCase() === inputVal.toLowerCase());
        if (matchByName) {
            console.log(`📌 Terdeteksi pilihan langsung: (${matchByName.name})`);
            return matchByName;
        }

        // Sub-index match, e.g. 11.1 or 11-1 or 11.2
        if (inputVal.startsWith(`${totalMainOption}.`) || inputVal.startsWith(`${totalMainOption}-`)) {
            const subNum = parseInt(inputVal.slice(String(totalMainOption).length + 1), 10) - 1;
            if (forscienoBots[subNum]) {
                console.log(`📌 Terdeteksi pilihan Forscieno: (${forscienoBots[subNum].name})`);
                return forscienoBots[subNum];
            }
        }

        const numVal = parseInt(inputVal, 10);
        if (!isNaN(numVal)) {
            if (numVal >= 1 && numVal <= mainBots.length) {
                console.log(`📌 Terdeteksi pilihan nomor [${numVal}]: (${mainBots[numVal - 1].name})`);
                return mainBots[numVal - 1];
            }
        }
    }

    let currentMenu = 'main'; // 'main' or 'forscieno'

        while (true) {
            if (currentMenu === 'main') {
                displayMainMenu(mainBots, forscienoBots.length);
                const answer = await promptInput(rl, `👉 Masukkan nomor urut bot yang ingin diaktifkan (1-${totalMainOption}): `);
                const choiceNum = parseInt(answer.trim(), 10);

                if (choiceNum === totalMainOption || answer.trim().toLowerCase().includes('forscieno')) {
                    currentMenu = 'forscieno';
                    continue;
                }

                if (!isNaN(choiceNum) && choiceNum >= 1 && choiceNum <= mainBots.length) {
                    return mainBots[choiceNum - 1];
                }

                const byName = mainBots.find(b => b.name.toLowerCase() === answer.trim().toLowerCase());
                if (byName) {
                    return byName;
                }

                console.log(`❌ Pilihan "${answer}" tidak valid. Harap ketik nomor 1 sampai ${totalMainOption}.\n`);
            } else if (currentMenu === 'forscieno') {
                displayForscienoMenu(forscienoBots);
                const answer = await promptInput(rl, `👉 Masukkan nomor versi Forscieno (1-${forscienoBots.length}) atau 0 untuk kembali: `);
                const choiceNum = parseInt(answer.trim(), 10);

                if (choiceNum === 0 || answer.trim().toLowerCase() === 'kembali' || answer.trim().toLowerCase() === 'back') {
                    currentMenu = 'main';
                    continue;
                }

                if (!isNaN(choiceNum) && choiceNum >= 1 && choiceNum <= forscienoBots.length) {
                    return forscienoBots[choiceNum - 1];
                }

                const byName = forscienoBots.find(b => b.name.toLowerCase() === answer.trim().toLowerCase());
                if (byName) {
                    return byName;
                }

                console.log(`❌ Pilihan "${answer}" tidak valid. Harap ketik nomor 1 sampai ${forscienoBots.length}.\n`);
            }
        }
}

async function promptPairingMode(rl) {
    const envMode = process.env.MODE_PAIRING || process.env.PAIRING_MODE;
    const envQr = process.env.USE_QR;

    if (process.argv.includes('--qr') || envQr === 'true' || envMode === 'qr') {
        return { useQr: true, flags: ['--qr'], env: { USE_QR: 'true', MODE_PAIRING: 'qr' } };
    }
    if (process.argv.includes('--pairing-code') || envQr === 'false' || envMode === 'code' || envMode === 'pairing') {
        return { useQr: false, flags: ['--pairing-code'], env: { USE_QR: 'false', MODE_PAIRING: 'code' } };
    }

    console.log("\n========================================================");
    console.log("       🔑 PILIH SISTEM PAIRING WHATSAPP                 ");
    console.log("========================================================");
    console.log("Pilih sistem login/pairing untuk menghubungkan WhatsApp:");
    console.log("--------------------------------------------------------");
    console.log(" [1] 📲 Pairing Code (OTP Kode 8-digit ke Nomor WA)");
    console.log(" [2] 📷 QR Code Terminal (Scan QR Code di Console)");
    console.log("========================================================\n");

    const choice = await promptInput(rl, "👉 Pilih metode pairing (1/2) [Default: 1]: ");
    const trimmed = choice.trim();

    if (trimmed === '2' || trimmed.toLowerCase() === 'qr') {
        console.log("\n📌 Mode Dipilih: [2] 📷 Scan QR Code Terminal\n");
        return { useQr: true, flags: ['--qr'], env: { USE_QR: 'true', MODE_PAIRING: 'qr' } };
    } else {
        console.log("\n📌 Mode Dipilih: [1] 📲 Pairing Code 8-Digit");
        const numInput = await promptInput(rl, "👉 Masukkan Nomor WA (contoh: 628xxxx) [Tekan Enter jika pakai setting.js]: ");
        const cleanNum = numInput.replace(/[^0-9]/g, '');
        const envVars = { USE_QR: 'false', MODE_PAIRING: 'code' };
        const flags = ['--pairing-code'];

        if (cleanNum) {
            envVars.NOMOR_HP = cleanNum;
            envVars.PAIRING_NUMBER = cleanNum;
            flags.push(cleanNum);
            console.log(`📱 Nomor WA diset ke: +${cleanNum}`);
        }
        console.log("");
        return { useQr: false, flags, env: envVars };
    }
}

async function main() {
    const { mainBots, forscienoBots } = loadBotCatalog();

    if (mainBots.length === 0 && forscienoBots.length === 0) {
        console.error("❌ Tidak ada bot yang ditemukan di direktori!");
        process.exit(1);
    }

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    let selected;
    let pairingConfig;

    try {
        selected = await getSelection(mainBots, forscienoBots, rl);
        pairingConfig = await promptPairingMode(rl);
    } finally {
        try { rl.close(); } catch {}
    }

    // Resume stdin for child process inheritance
    if (process.stdin.isPaused()) {
        process.stdin.resume();
    }

    console.log("========================================================");
    console.log(`🚀 MENGAKTIFKAN BOT: ${selected.name}`);
    console.log(`📂 Folder: ${selected.fullPath}`);
    console.log(`🔑 Sistem Pairing: ${pairingConfig.useQr ? '📷 QR Code Terminal' : '📲 Pairing Code 8-Digit'}`);
    console.log(`▶️ Executing: node ${selected.entry} ${pairingConfig.flags.join(' ')}`);
    console.log("========================================================\n");

    process.chdir(selected.fullPath);

    const child = spawn("node", [selected.entry, ...pairingConfig.flags], {
        cwd: selected.fullPath,
        stdio: "inherit",
        env: { ...process.env, ...pairingConfig.env }
    });

    const forwardSignal = (sig) => {
        if (child && !child.killed) {
            child.kill(sig);
        }
    };

    process.on("SIGINT", () => forwardSignal("SIGINT"));
    process.on("SIGTERM", () => forwardSignal("SIGTERM"));

    child.on("exit", async (code, signal) => {
        if (signal) {
            console.log(`\n🛑 Bot ${selected.name} dihentikan oleh sinyal: ${signal}`);
        } else {
            console.log(`\n🏁 Bot ${selected.name} keluar dengan kode: ${code}`);
        }
        
        console.log("\n========================================================");
        console.log("Tekan Enter untuk menutup jendela terminal ini...");
        console.log("========================================================");
        
        const endRl = readline.createInterface({ input: process.stdin, output: process.stdout });
        await new Promise(r => endRl.question('', r));
        try { endRl.close(); } catch {}
        process.exit(code ?? 0);
    });

    child.on("error", async (err) => {
        console.error(`❌ Gagal menjalankan bot ${selected.name}:`, err.message);
        console.log("\nTekan Enter untuk menutup jendela terminal ini...");
        const endRl = readline.createInterface({ input: process.stdin, output: process.stdout });
        await new Promise(r => endRl.question('', r));
        try { endRl.close(); } catch {}
        process.exit(1);
    });
}

main().catch(async err => {
    console.error("❌ Fatal Error Launcher:", err);
    console.log("\nTekan Enter untuk menutup jendela terminal ini...");
    const endRl = readline.createInterface({ input: process.stdin, output: process.stdout });
    await new Promise(r => endRl.question('', r));
    try { endRl.close(); } catch {}
    process.exit(1);
});
