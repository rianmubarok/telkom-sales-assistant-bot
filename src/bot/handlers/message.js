const { Markup } = require("telegraf");
const {
  findAnswer,
  getProductList,
  getStats,
} = require("../../services/knowledgeService");

const { logQuestion } = require("../../utils/logger");
const { ADMIN_ID } = require("../../config");

module.exports = async (ctx) => {
  // Pastikan pesan berupa teks
  if (!ctx.message || !ctx.message.text) return;

  const message = ctx.message.text.trim().toLowerCase();
  const username = ctx.from.username || ctx.from.first_name || "unknown";

  // Log semua pertanyaan
  logQuestion(username, message);

  // MENU SECTION

  switch (message) {
    case "box daftar produk": // handling typo if any, original was emoji
    case "📦 daftar produk":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "📦 *Silakan pilih layanan yang ingin Anda ketahui:*",
        {
          parse_mode: "Markdown",
          ...Markup.inlineKeyboard([
            [Markup.button.callback("IndiHome", "btn_indihome")],
            [Markup.button.callback("IndiBiz", "btn_indibiz")],
            [Markup.button.callback("Pijar Sekolah", "btn_pijar")],
          ]),
        }
      );

    case "📊 statistik":
      await ctx.sendChatAction("typing");
      return ctx.reply(getStats());

    case "📞 kontak admin":
      await ctx.sendChatAction("typing");
      return ctx.reply("📞 *Admin Sales Telkom Jepara*\n\n0812-XXXX-XXXX", {
        parse_mode: "Markdown",
      });

    case "❓ bantuan":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "💡 *Panduan Penggunaan*\n\nKetik nama produk seperti:\n• indihome\n• indibiz\n• pijar sekolah\n\nAtau gunakan menu yang tersedia.",
        { parse_mode: "Markdown" }
      );
  }

  // ADMIN COMMAND

  if (message === "/logs") {
    if (ctx.from.id == ADMIN_ID) {
      await ctx.sendChatAction("typing");
      return ctx.reply("📁 Log tersimpan di file logs.json");
    } else {
      return ctx.reply("❌ Kamu tidak memiliki akses.");
    }
  }

  // KNOWLEDGE SEARCH

  const answer = findAnswer(message);

  if (answer) {
    await ctx.sendChatAction("typing");
    return ctx.reply(answer, {
      parse_mode: "Markdown",
    });
  }

  // FALLBACK

  await ctx.sendChatAction("typing");
  return ctx.reply(
    "Maaf, informasi belum tersedia.\n\nKetik *❓ bantuan* untuk panduan.",
    { parse_mode: "Markdown" }
  );
};
