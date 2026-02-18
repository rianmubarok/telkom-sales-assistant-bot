const dotenv = require("dotenv");
dotenv.config();

if (!process.env.BOT_TOKEN) {
  throw new Error("FATAL ERROR: BOT_TOKEN is missing! Please set it in your environment variables (e.g. Railway Variables or .env file).");
}

module.exports = {
  BOT_TOKEN: process.env.BOT_TOKEN,
  ADMIN_ID: process.env.ADMIN_ID,
};
