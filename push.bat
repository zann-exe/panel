@echo off
echo ==============================================
echo   Git Push ke https://github.com/zann-exe/panel
echo ==============================================
echo.

git add .
git commit -m "update project" >nul 2>&1
git push -u origin main

echo.
pause
