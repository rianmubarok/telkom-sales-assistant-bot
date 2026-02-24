@echo off
TITLE Telkom Jepara Bot - Stopper
SETLOCAL

:: Pastikan file ini berada di folder root project
cd /d "%~dp0"

echo ==========================================
echo    TELKOM JEPARA BOT - STOPPING SERVICE
echo ==========================================
echo.
echo Sedang menghentikan layanan...
echo.

call npm run stop

echo.
echo ------------------------------------------
echo STATUS: BERHASIL DIHENTIKAN
echo ------------------------------------------
echo.
pause
