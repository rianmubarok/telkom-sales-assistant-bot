const { Markup } = require("telegraf");

module.exports = async (ctx) => {
  const username = ctx.from.first_name || "Kak";

  await ctx.reply(
    `Halo ${username}! 👋\n\nSelamat datang di *Bot Layanan Telkom Jepara*.\nSaya adalah asisten virtual pintar yang siap membantu Anda 24/7.\n\n*Silakan pilih menu di bawah atau langsung ketik pertanyaan Anda:*`,
    {
      parse_mode: "Markdown",
      ...Markup.keyboard([
        ["🌐 Lihat Layanan", "💬 FAQ"],
        ["📞 Kontak Admin", "📄 Proposal PRODIGI"],
        ["🌟 Testimoni PRODIGI"]
      ])
        .resize()
        .oneTime(false)
    }
  );
};
