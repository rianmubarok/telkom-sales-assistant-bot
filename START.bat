@echo off
TITLE Telkom Jepara Bot - Starter
SETLOCAL

:: Pastikan file ini berada di folder root project
cd /d "%~dp0"

echo ==========================================
echo    TELKOM JEPARA BOT - STARTING SERVICE
echo ==========================================
echo.

:: Cek apakah folder node_modules ada
if not exist "node_modules" (
    echo [INFO] node_modules tidak ditemukan.
    echo [INFO] Menjalankan npm install, harap tunggu...
    echo.
    call npm install
    echo.
)

echo Sedang menjalankan bot dan CMS via PM2...
echo.

call npm start

echo.
echo ------------------------------------------
echo STATUS: BERHASIL DIJALANKAN
echo ------------------------------------------
echo.
echo - Bot Telegram sudah Aktif.
echo - Admin CMS: http://localhost:3000
echo.
echo Jendela ini bisa ditutup, bot tetap berjalan di background.
echo.
pause
