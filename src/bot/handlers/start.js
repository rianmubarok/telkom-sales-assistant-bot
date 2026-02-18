const { Markup } = require("telegraf");

module.exports = async (ctx) => {
  const username = ctx.from.first_name || "Kak";

  await ctx.reply(
    `Halo ${username}! 👋\n\nSelamat datang di *Bot Layanan Telkom Jepara*.\nSaya siap membantu memberikan informasi seputar layanan kami.\n\n*Silakan pilih menu di bawah ini:*`,
    {
      parse_mode: "Markdown",
      ...Markup.keyboard([
        ["📦 Daftar Produk"],
        ["📞 Kontak Admin", "❓ Bantuan"],
      ])
        .resize()
        .oneTime(false)
    }
  );
};
