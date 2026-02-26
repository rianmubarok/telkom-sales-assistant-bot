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
    case "🌐 lihat layanan":
    case "🌐 layanan":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "*Silakan pilih kategori layanan yang Anda inginkan:*",
        {
          parse_mode: "Markdown",
          ...Markup.inlineKeyboard([
            [Markup.button.callback("Internet (Basic, Bisnis)", "btn_indibiz")],
            [Markup.button.callback("PRODIGI", "btn_cat_prodigi")],
          ]),
        }
      );

    case "📞 kontak admin":
      await ctx.sendChatAction("typing");
      const db = require("../../db/database");
      const kontakItem = await db.getContent('kontak_admin');
      return ctx.reply(kontakItem ? kontakItem.text : "Data kontak belum tersedia.", {
        parse_mode: "Markdown",
        disable_web_page_preview: true
      });

    case "📄 proposal prodigi":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "*Proposal Produk PRODIGI Telkom*\n\n" +
        "Pilih dokumen proposal atau presentasi layanan PRODIGI yang ingin Anda unduh:",
        {
          parse_mode: "Markdown",
          ...Markup.inlineKeyboard([
            [Markup.button.callback("OCA Interaction Lite", "doc_oca_interaction_lite")],
            [Markup.button.callback("OCA Blast Lite", "doc_oca_blast_lite")],
            [Markup.button.callback("OCA Breaker", "doc_oca_breaker")],
            [Markup.button.callback("PIJAR Sekolah", "doc_pijar_sekolah")],
            [Markup.button.callback("Netmonk Monitoring", "doc_netmonk")],
            [Markup.button.callback("Antares Eazy Cam", "doc_antares_eazy")]
          ])
        }
      );

    case "🌟 testimoni prodigi":
    case "testimoni prodigi":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "*Testimoni Layanan PRODIGI*\n\n" +
        "Silakan pilih layanan:",
        {
          parse_mode: "Markdown",
          ...Markup.inlineKeyboard([
            [Markup.button.callback("PIJAR Sekolah", "testi_pijar")],
            [Markup.button.callback("Netmonk", "testi_netmonk")],
            [Markup.button.callback("OCA", "testi_oca")],
            [Markup.button.callback("Antares Eazy", "testi_eazy")]
          ])
        }
      );

    case "❓ faq":
    case "💬 faq": // handle typo or alternative
      await ctx.sendChatAction("typing");
      const { showFaqMenu } = require("../handlers/faqHandler");
      return showFaqMenu(ctx, 0);

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

  // KNOWLEDGE SEARCH (DISABLED - Handled by AI)
  // const answer = findAnswer(message);
  // if (answer) {
  //   await ctx.sendChatAction("typing");
  //   return ctx.reply(answer, {
  //     parse_mode: "Markdown",
  //   });
  // }

  // AI INTELLIGENT RESPONSE (GEMINI)
  try {
    await ctx.sendChatAction("typing");
    const { generateAnswer } = require("../../services/geminiService");
    const { sanitizeMarkdown } = require("../../utils/textUtils");
    const aiResponse = await generateAnswer(message);

    if (aiResponse) {
      // Sanitize response for Telegram Markdown
      const cleanResponse = sanitizeMarkdown(aiResponse);

      // Split message smartly by newlines to avoid breaking Markdown entities
      const MAX_LENGTH = 3900; // Telegram limit is 4096, keeping buffer for footer
      const messages = [];

      if (cleanResponse.length > MAX_LENGTH) {
        const lines = cleanResponse.split('\n');
        let currentChunk = "";

        for (const line of lines) {
          if ((currentChunk + line).length < MAX_LENGTH) {
            currentChunk += line + "\n";
          } else {
            messages.push(currentChunk);
            currentChunk = line + "\n";
          }
        }
        if (currentChunk) messages.push(currentChunk);
      } else {
        messages.push(cleanResponse);
      }

      for (const msg of messages) {
        try {
          await ctx.reply(msg + "\n\n_(Dijawab oleh AI Asisten)_", {
            parse_mode: "Markdown"
          });
        } catch (err) {
          console.error(`Telegram Markdown Error (falling back to plain text): ${err.description || err.message}`);
          // Fallback to plain text if Markdown fails
          await ctx.reply(msg + "\n\n(Dijawab oleh AI Asisten)");
        }
      }
      return;
    }
  } catch (error) {
    console.error("AI Generation Error:", error);
    // Proceed to fallback
  }

  // FALLBACK

  return ctx.reply(
    "Maaf, informasi belum tersedia atau saya kurang mengerti.\n\n💡 *Solusi Cepat:* Gunakan menu *🌐 Lihat Layanan* untuk cek paket resmi tanpa AI.",
    { parse_mode: "Markdown" }
  );
};
