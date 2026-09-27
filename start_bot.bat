@echo off
title Panpan Bot Selector Launcher
echo ========================================================
echo   PANPAN MULTI-BOT LAUNCHER SELECTOR
echo ========================================================
echo.
cd /d "%~dp0bots"
node index.js %*
pause
