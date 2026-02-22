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
            [Markup.button.callback("Internet (IndiBiz)", "btn_indibiz")],
            [Markup.button.callback("PRODIGI (OCA, Pijar, Netmonk, Eazy)", "btn_cat_prodigi")],
          ]),
        }
      );

    case "📞 kontak admin":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "📞 *Kontak Pusat Bantuan & Layanan Telkom Group*\n\n" +
        "*Layanan Publik & IndiBiz:*\n" +
        "• Call Center 24 Jam: 147 (Telkom / Umum)\n" +
        "• Call Center IndiBiz: 1500-250 / 0800-1-835566\n" +
        "• WhatsApp IndiBiz: 0812-5888-1915 / 0812-8323-5566\n" +
        "• Email: indibizID.care@telkom.co.id\n\n" +
        "*OCA Indonesia (Omnichannel):*\n" +
        "• Email Support: cs@ocatelkom.co.id\n" +
        "• Helpdesk: Live Chat via ocaindonesia.co.id\n\n" +
        "*Pijar Sekolah:*\n" +
        "• WhatsApp Chat: +62 812-8899-9576\n" +
        "• Email: support@pijarsekolah.id\n\n" +
        "*Netmonk (Monitoring):*\n" +
        "• WhatsApp Support: +62 811-1720-237\n" +
        "• Help Center: netmonk.id/helpcenter/contact-us\n\n" +
        "*Antares Eazy / Eazy Cam:*\n" +
        "• Call Center Antares: 188\n\n" +
        "*Kunjungan Langsung (Telkom Jepara):*\n" +
        "Jl. Pemuda No.3, Potroyudan XI, Potroyudan\n" +
        "Kec. Jepara, Kabupaten Jepara, Jawa Tengah 59412\n" +
        "*Telepon:* 0800 1835566",
        {
          parse_mode: "Markdown",
          disable_web_page_preview: true
        }
      );

    case "❓ bantuan":
      await ctx.sendChatAction("typing");
      return ctx.reply(
        "💡 *Panduan Penggunaan Telkom Bot*\n\nBot ini dirancang untuk membantu Anda menemukan informasi layanan Telkom dengan mudah.\n\n*1. 🌐 Lihat Layanan*\nTekan tombol ini untuk melihat katalog lengkap layanan kami beserta detail paketnya.\n\n*2. 📞 Kontak Admin*\nInformasi alamat kantor Telkom Jepara dan nomor layanan pelanggan.\n\n*3. 💬 Chat Langsung (AI)*\nAnda bisa langsung mengetik pertanyaan apa saja! Bot didukung oleh AI cerdas yang siap menjawab kebutuhan Anda.\n\n*4. ❓ Bantuan*\nMenampilkan pesan panduan ini kembali.",
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
    "Maaf, informasi belum tersedia atau saya kurang mengerti.\n\n💡 *Solusi Cepat:* Gunakan menu *🌐 Lihat Layanan* untuk cek paket resmi tanpa AI.\n\nKetik *❓ bantuan* untuk panduan lengkap.",
    { parse_mode: "Markdown" }
  );
};
