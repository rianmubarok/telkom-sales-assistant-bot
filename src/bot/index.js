const { Telegraf } = require("telegraf");
const { BOT_TOKEN } = require("../config");

const startHandler = require("./handlers/start");
const messageHandler = require("./handlers/message");
const registerActions = require("./handlers/actions");

function createBot() {
  const bot = new Telegraf(BOT_TOKEN);

  bot.use((ctx, next) => {
    ctx.replyWithMarkdown = (text) =>
      ctx.reply(text, { parse_mode: "Markdown" });
    return next();
  });

  bot.start(startHandler);

  // Register Actions
  registerActions(bot);

  bot.on("text", messageHandler);

  return bot;
}

module.exports = createBot;
