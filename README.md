# Telkom Jepara Bot Telegram & CMS

A comprehensive Telegram Bot system designed for Telkom Jepara, featuring an AI-powered assistant and a dedicated Admin CMS for real-time content management.

## Key Features

- **AI Assistant (Gemini AI)**: Intelligent responses tailored for Telkom sales teams.
- **Admin CMS**: Web-based dashboard to manage product pricing, descriptions, and images.
- **Direct Service Menu**: Interactive buttons for Internet (IndiBiz) and PRODIGI services.
- **Dynamic Content**: Product info in the bot updates instantly when edited via the CMS.
- **Smart Validation**: CMS prevents invalid Markdown that could crash the Telegram Bot.
- **PM2 Support**: Production-ready process management for 24/7 uptime.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 18 or newer recommended)
- Telegram Bot Token [@BotFather](https://t.me/BotFather)
- [Google Gemini API Key](https://aistudio.google.com/)

## Installation & Setup

1. **Clone/Download** the repository to your local PC or Server.
2. **Install Dependencies**:
   ```bash
   npm install
   ```
3. **Configure Environment**:
   Create a `.env` file in the root directory:
   ```env
   BOT_TOKEN=your_telegram_bot_token
   ADMIN_ID=your_telegram_numeric_id
   GEMINI_API_KEY=your_google_gemini_api_key
   PORT=3000
   ```

## Management & Operation

### 1. Running with PM2 (Recommended for Production)
The app is pre-configured with PM2 to ensure it stays online and auto-restarts on errors.

#### **A. Cara Cepat (Windows Shortcut)**
Jika Anda menggunakan Windows, cukup gunakan file yang sudah disediakan:
- **`JALANKAN_BOT.bat`**: Double-klik untuk menyalakan Bot & CMS.
- **`HENTIKAN_BOT.bat`**: Double-klik untuk mematikan layanan.

#### **B. Via Terminal**
- **Start Bot & CMS**:
  ```bash
  npm start
  ```
- **Stop Service**:
  ```bash
  npm run stop
  ```
- **Restart Service**:
  ```bash
  npm run restart
  ```
- **View Real-time Logs**:
  ```bash
  npx pm2 logs telkom-bot
  ```

### 2. Admin CMS Access
Once the application is running, open your browser and go to:
`http://localhost:3000`

From here, you can:
- Update pricing for IndiBiz & PRODIGI.
- Change product descriptions (Markdown supported).
- Upload/Replace product images.
- Preview how the message will look in Telegram.

## Project Structure

- `src/app.js`: Entry point for both Bot and CMS.
- `src/bot/`: Telegram Bot logic and handlers.
- `src/server.js`: Express server for Admin CMS.
- `src/db/`: SQLite database management.
- `src/views/`: CMS frontend templates (EJS).
- `public/uploads/`: Storage for product images.
- `bot.db`: Main database file (contains your edits).

## Best Practices for Telkom PC Server
- **Auto-start**: It is recommended to use `pm2 startup` and `pm2 save` to ensure the bot restarts if the PC or Server is rebooted.
- **Internet**: Ensure the PC has stable internet access to reach Telegram API and Gemini AI API.
- **Backup**: Regularly back up the `bot.db` file to secure your content updates.

