# Forscieno v6 — Pterodactyl Deployment Checklist

## Requirements
- Node.js 20+ (Node 20 LTS recommended)
- Linux Pterodactyl container
- Persistent storage for `session/`, `session-backup/`, `data/`, and `bin/`
- Internet access for WhatsApp/Baileys and first-time yt-dlp download

## Startup
Install command:

```bash
npm install --omit=dev
```

Startup command:

```bash
npm start
```

Equivalent direct command:

```bash
node index.js
```

## Recommended environment variables

```text
NOMOR_HP=628xxxxxxxxxx
PREFIX=.
PAIRING_TIMEOUT_MS=90000
WA_VERSION=
FFMPEG_BIN=
PUTER_AUTH_TOKEN=
NSFW_API_KEY=
```

`NOMOR_HP` is the important variable for unattended Pterodactyl startup. If omitted, the bot may fall back to its console prompt, which is inconvenient in a panel.

## First boot
1. Upload the project to the server.
2. Set the environment variables above.
3. Run `npm install --omit=dev`.
4. Start the server.
5. Copy the pairing code from the console.
6. On WhatsApp: Linked Devices -> Link a Device -> Link with phone number instead.
7. Enter the pairing code.
8. Wait until the connection reports `open`/connected.
9. Restart once and verify that the existing `session/` reconnects without asking for a new pairing code.

## Persistent folders
Do NOT delete these during normal restarts:

- `session/`
- `session-backup/`
- `data/`
- `bin/`

`session/` contains the WhatsApp authentication state.

## Restart policy
Prefer Pterodactyl **Restart** over force-killing the process while the bot is active. Only remove `session/` when deliberately resetting WhatsApp authentication or after confirming the session is unrecoverable.

## FFmpeg
The project prefers:
1. `FFMPEG_BIN`, if configured;
2. system `ffmpeg` on PATH;
3. `ffmpeg-static` fallback on Linux/Pterodactyl.

For maximum reliability, install/provide system FFmpeg in the Pterodactyl image and leave `FFMPEG_BIN` empty unless a custom path is needed.

## yt-dlp
The bot can download its own Linux `yt-dlp` binary into `bin/` when needed. The first downloader command therefore requires outbound internet access. Keep `bin/yt-dlp` persistent after it is downloaded.

## Production notes
- Do not commit or share `.env` with real credentials.
- Rotate any credential that was previously hardcoded/shared.
- Add `package-lock.json` from a network-enabled machine before production deployment, then use `npm ci` for reproducible installs.
- Do not run two bot processes against the same `session/` directory.

## Smoke test
After startup, test:

```text
.ping
.menu
.groupinfo        (inside a group)
.sticker          (reply to an image, if desired)
.play <query>     (requires outbound internet)
```

Then restart the Pterodactyl server and confirm the bot reconnects without pairing again.
