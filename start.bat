@echo off
title Pterodactyl Panel Localhost
echo ========================================================
echo   Pterodactyl Panel Localhost
echo ========================================================
echo.
echo Menyalakan Docker Service & Wings Daemon di WSL...
wsl -d Ubuntu -u root -- /bin/bash -c "service docker start > /dev/null 2>&1; systemctl start wings > /dev/null 2>&1"

echo Menjalankan Container Pterodactyl Panel...
wsl -d Ubuntu -u root -- /bin/bash -c "cd /mnt/d/Nevnev/Panpan/panel && docker compose up -d"

echo.
echo ========================================================
echo   Panel aktif di: http://localhost:8085
echo   [PERINGATAN] JANGAN TUTUP jendela ini agar server tetap aktif!
echo ========================================================
echo.
start http://localhost:8085

echo Menampilkan log container secara realtime (Tekan Ctrl+C untuk keluar)...
echo.
wsl -d Ubuntu -u root -- /bin/bash -c "cd /mnt/d/Nevnev/Panpan/panel && docker compose logs -f"
pause


