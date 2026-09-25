# Audit Report — AlyaChan

Audit scope: branding/owner fields, static JavaScript syntax, JSON parsing, handler/workflow structure where discoverable, obvious configuration defects, and exposed credentials.

- Total files: 40
- JavaScript files: 20
- Detected plugin/command files: 0
- Detected `handler.command` declarations: 0

## Findings

- **PASS — Branding:** Creator/owner display branding changed to Epann; bot name Alya was preserved.
- **PASS — Static syntax:** 20 JavaScript files passed Node.js syntax check.
- **MEDIUM — Security:** Pterodactyl/API credentials are hard-coded in settings.js; rotate/revoke if exposed.

## Branding changes

- settings.js: global.author = 'kennqt.' -> global.author = 'Epann' (1x)
- settings.js: global.owner = ['628118189945'] //['628','628'] 2 owner atau lebih -> global.owner = ['628118189945'] //['628','628'] 2 owner atau lebih
global.ownername = 'Epann' (1x)

## Important limitation

This is a static audit of the supplied archives. I did not log into WhatsApp, execute bot workflows against real chats, call third-party APIs, or verify live credentials. A PASS therefore means the checked static condition passed, not that every external service is currently operational.
