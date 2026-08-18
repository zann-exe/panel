@echo off
echo ==============================================
echo   Pterodactyl Panel Localhost
echo ==============================================
echo.

wsl -d Ubuntu-22.04 -u root -- /bin/bash -c "service docker start > /dev/null 2>&1"
wsl -d Ubuntu-22.04 -- /bin/bash -c "cd /mnt/d/Nev/panpan && docker compose up -d"

echo.
echo ==============================================
echo   Panel aktif di: http://localhost:8080
echo   (Biarkan jendela ini terbuka agar service tetap aktif)
echo ==============================================
echo.
start http://localhost:8080

wsl -d Ubuntu-22.04 -- /bin/bash -c "while true; do sleep 60; done"
