const { Markup } = require("telegraf");
const {
  findAnswer,
  getProductList,
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
            [Markup.button.callback("OCA Indonesia", "btn_oca")],
            [Markup.button.callback("Pijar Sekolah", "btn_pijar")],
            [Markup.button.callback("Netmonk", "btn_netmonk")],
            [Markup.button.callback("Antares Eazy", "btn_eazy")],
          ]),
        }
      );

    case "📞 kontak admin":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "📞 *Kontak Layanan Telkom Group*\n\nSilakan hubungi layanan resmi kami:\n\n☎️ *Call Center 24 Jam:*\n• 147 (Telkom Indonesia)\n• 188 (IndiHome / Telkomsel)\n• 1500-250 (Indibiz)\n\n📍 *Kunjungan Langsung:*\nSilakan datang ke Plasa Telkom terdekat untuk layanan tatap muka.",
        {
          parse_mode: "Markdown",
        }
      );

    case "❓ bantuan":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "💡 *Panduan Penggunaan Bot*\n\n1. Tekan tombol *📦 Daftar Produk* untuk melihat layanan yang tersedia.\n2. Pilih produk (IndiHome, Indibiz, dll) untuk melihat detail paket.\n3. Tekan *Syarat & Ketentuan* untuk info berlangganan.\n4. Tekan *Kontak Bantuan & Layanan* di menu produk jika butuh bantuan spesifik.",
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
