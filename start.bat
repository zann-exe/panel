@echo off
setlocal enabledelayedexpansion
title Pterodactyl Panel Localhost

:: Pindah ke direktori tempat start.bat berada
cd /d "%~dp0"

echo ========================================================
echo   Pterodactyl Panel Localhost Launcher
echo ========================================================
echo.

:: 1. Cek Docker Windows Native
docker info >nul 2>&1
if %errorlevel%==0 goto :USE_NATIVE

:: 2. Cek WSL
where wsl >nul 2>&1
if %errorlevel%==0 goto :USE_WSL

echo [ERROR] Docker Desktop maupun WSL tidak dapat diakses.
echo Pastikan Docker Desktop atau WSL (Ubuntu) sudah terinstall dan berjalan.
echo.
pause
exit /b 1

:USE_NATIVE
echo [INFO] Menggunakan Docker Desktop Native (Windows)...
echo Menjalankan Container Pterodactyl Panel...
docker compose up -d
if %errorlevel%==0 goto :SUCCESS_NATIVE
echo [ERROR] Gagal menjalankan docker compose up -d.
pause
exit /b 1

:USE_WSL
echo [INFO] Menyalakan Docker Service di WSL...
wsl -u root service docker start >nul 2>&1
wsl -u root systemctl start wings >nul 2>&1

echo Menjalankan Container Pterodactyl Panel di WSL...
wsl -u root docker compose up -d
if %errorlevel%==0 goto :SUCCESS_WSL
echo [ERROR] Gagal menjalankan docker compose via WSL.
pause
exit /b 1

:SUCCESS_NATIVE
echo.
echo Menunggu web server Pterodactyl siap...
:WAIT_NATIVE
curl.exe -s -o nul -w "%%{http_code}" http://localhost:8085 | findstr "200 302" >nul 2>&1
if %errorlevel% neq 0 (
    timeout /t 2 /nobreak >nul
    goto :WAIT_NATIVE
)
echo.
echo ========================================================
echo   Panel aktif di: http://localhost:8085
echo   [PERINGATAN] JANGAN TUTUP jendela ini agar server tetap aktif!
echo ========================================================
echo.
start http://localhost:8085

echo Menampilkan log container secara realtime (Tekan Ctrl+C untuk keluar)...
echo.
docker compose logs -f
pause
exit /b 0

:SUCCESS_WSL
echo.
echo Menunggu web server Pterodactyl siap...
:WAIT_WSL
curl.exe -s -o nul -w "%%{http_code}" http://localhost:8085 | findstr "200 302" >nul 2>&1
if %errorlevel% neq 0 (
    timeout /t 2 /nobreak >nul
    goto :WAIT_WSL
)
echo.
echo ========================================================
echo   Panel aktif di: http://localhost:8085
echo   [PERINGATAN] JANGAN TUTUP jendela ini agar server tetap aktif!
echo ========================================================
echo.
start http://localhost:8085

echo Menampilkan log container secara realtime (Tekan Ctrl+C untuk keluar)...
echo.
wsl -u root docker compose logs -f
pause
exit /b 0


