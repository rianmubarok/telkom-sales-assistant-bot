# Telkom Bot Telegram

A simple Telegram Bot designed to provide information about Telkom Group services such as IndiHome, IndiBiz, and Pijar Sekolah.

## Features

- Answers inquiries about Telkom products.
- Auto-response based on keywords.
- Interactive menus and product details.
- Logging of user interactions.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or newer)
- Telegram Account and Bot Token from [@BotFather](https://t.me/BotFather)

## Installation

1.  Clone this repository or download the source code.
2.  Navigate to the project directory:
    ```bash
    cd telkom-bot-tele
    ```
3.  Install dependencies:
    ```bash
    npm install
    ```

## Configuration

1.  Create a `.env` file in the root folder of the project.
2.  Add your Telegram Bot Token to the `.env` file:
    ```env
    BOT_TOKEN=your_telegram_bot_token_here
    ADMIN_ID=your_telegram_user_id_here
    ```
    *Note: Replace `your_telegram_bot_token_here` with the actual token you received from BotFather.*

## Running the Bot

### Development Mode
Runs the bot using `nodemon` (auto-restarts on file changes, ignores log files):
```bash
npm run dev
```

### Production Mode
Runs the bot normally:
```bash
npm start
```

## Project Structure

- `src/app.js`: Application entry point.
- `src/bot/handlers/`: Bot message handling logic.
- `src/data/knowledge/`: Bot knowledge data (IndiHome, IndiBiz, Pijar).
- `src/data/logs.json`: Activity logs (ignored by git).
