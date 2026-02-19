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
    case "📦 lihat daftar produk":
    case "📦 daftar produk":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "*Silakan pilih layanan yang ingin Anda ketahui:*",
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
        "📞 *Kontak Layanan Telkom Group*\n\nSilakan hubungi layanan resmi kami:\n\n☎️ *Call Center 24 Jam:*\n• 147 (Telkom Indonesia)\n• 188 (IndiHome / Telkomsel)\n• 1500-250 (Indibiz)\n\n📍 *Kunjungan Langsung (Telkom Jepara):*\nJl. Pemuda No.3, Potroyudan XI, Potroyudan\nKec. Jepara, Kabupaten Jepara, Jawa Tengah 59412\n\n📞 *Telepon:* 0800 1835566",
        {
          parse_mode: "Markdown",
        }
      );

    case "❓ bantuan":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "💡 *Panduan Penggunaan Telkom Bot*\n\nBot ini dirancang untuk membantu Anda menemukan informasi layanan Telkom dengan mudah.\n\n*1. 📦 Daftar Produk*\nTekan tombol ini untuk melihat katalog lengkap layanan kami (IndiHome, IndiBiz, Pijar, dll) beserta detail paketnya.\n\n*2. 📞 Kontak Admin*\nInformasi alamat kantor Telkom Jepara dan nomor layanan pelanggan.\n\n*3. 💬 Chat Langsung (AI)*\nAnda bisa langsung mengetik pertanyaan apa saja! Bot didukung oleh AI cerdas yang siap menjawab kebutuhan Anda.\n\n*4. ❓ Bantuan*\nMenampilkan pesan panduan ini kembali.",
        { parse_mode: "Markdown" }
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
    const aiResponse = await generateAnswer(message);

    if (aiResponse) {
      // Split message smartly by newlines to avoid breaking Markdown entities
      const MAX_LENGTH = 3000;
      const messages = [];

      if (aiResponse.length > MAX_LENGTH) {
        const lines = aiResponse.split('\n');
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
        messages.push(aiResponse);
      }

      for (const msg of messages) {
        try {
          await ctx.reply(msg + "\n\n_(Dijawab oleh AI Asisten)_", {
            parse_mode: "Markdown"
          });
        } catch (err) {
          console.error("Markdown Error, sending plain text:", err.message);
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
    "Maaf, informasi belum tersedia atau saya kurang mengerti.\n\nKetik *❓ bantuan* untuk panduan.",
    { parse_mode: "Markdown" }
  );
};
