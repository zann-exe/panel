import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const launcherPath = path.join(__dirname, 'bots', 'index.js');

const child = spawn("node", [launcherPath, ...process.argv.slice(2)], {
    cwd: path.join(__dirname, 'bots'),
    stdio: "inherit",
    env: process.env
});

child.on("exit", (code) => {
    process.exit(code ?? 0);
});
