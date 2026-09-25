# Epann V1 — Pterodactyl Audit

- Version: **V1**
- Creator/Owner label: **Epann**
- Audit status: **BLOCKED / NOT PANEL-VERIFIED**

## Runtime check
Cannot complete runtime startup in this isolated environment: dependencies are not installed; first missing module: chalk.

The test environment did not contain installed npm dependencies and npm installation could not be completed within the available execution window. Therefore this audit does **not** claim that the bot has been successfully booted on a real Pterodactyl server.

## Static workflow check
Syntax issues detected in files:
- `lib/sticker_reply/xeon.js`

## Pterodactyl deployment expectation
- Set the server startup command to the package.json `start` script / entry point.
- Use a compatible Node.js version. Projects declaring Node >=20 should use Node 20+.
- Run `npm install` (or `npm ci` when a lockfile is present) before startup.
- Configure required environment variables / tokens before starting the bot.
- Do not treat missing dependencies in this local smoke test as a source-code failure; they are an environment/dependency prerequisite.
