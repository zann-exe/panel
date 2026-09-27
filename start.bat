@echo off
setlocal enabledelayedexpansion
title Pterodactyl Panel Localhost

:: Pindah ke direktori tempat start.bat berada (dinamis untuk perangkat apapun)
cd /d "%~dp0"

echo ========================================================
echo   Pterodactyl Panel Localhost Launcher
echo ========================================================
echo.

:: 1. Cek apakah Docker Desktop Native (Windows) sedang berjalan
docker info >nul 2>&1
if !errorlevel! equ 0 (
    echo [INFO] Menggunakan Docker Desktop Native (Windows)...
    echo.
    echo Menjalankan Container Pterodactyl Panel...
    docker compose up -d
    if !errorlevel! equ 0 goto :SUCCESS
)

:: 2. Jika Docker Windows tidak aktif, cek WSL (Windows Subsystem for Linux)
where wsl >nul 2>&1
if !errorlevel! equ 0 (
    echo [INFO] Menyalakan Docker Service ^& Wings Daemon di WSL...
    wsl -u root service docker start >nul 2>&1
    wsl -u root systemctl start wings >nul 2>&1
    
    echo Menjalankan Container Pterodactyl Panel di WSL...
    wsl -u root docker compose up -d
    if !errorlevel! equ 0 goto :SUCCESS_WSL
)

echo.
echo [ERROR] Docker Desktop maupun WSL tidak dapat diakses!
echo Pastikan Docker Desktop atau WSL (Ubuntu) sudah terinstall dan berjalan.
echo.
pause
exit /b 1

:SUCCESS
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


