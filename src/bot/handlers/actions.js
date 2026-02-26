const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../utils/replyHelper");

const {
    showIndibizMenu,
    showIndibizPackageDetail
} = require("./products/indibiz");

const {
    showOcaMenu,
    showOcaTerms,
    showOcaPackageDetail,
    showOcaPackageFeatures,
    showOcaPackagePricing,
    showOcaPackageComparison
} = require("./products/oca");

const {
    showPijarMenu,
    showPijarDetail
} = require("./products/pijar");

const {
    showNetmonkMenu,
    showNetmonkPackageDetail,
    showNetmonkPackageFeatures
} = require("./products/netmonk");

const {
    showEazyMenu,
    showEazyPricing,
    showEazyCloudPricing
} = require("./products/eazy");

module.exports = (bot) => {
    // Action Handlers (Main Menu)

    bot.action("btn_indibiz", (ctx) => showIndibizMenu(ctx));
    bot.action("btn_oca", (ctx) => showOcaMenu(ctx));
    bot.action("btn_pijar", (ctx) => showPijarMenu(ctx));
    bot.action("btn_netmonk", (ctx) => showNetmonkMenu(ctx));
    bot.action("btn_eazy", (ctx) => showEazyMenu(ctx));

    // IndiBiz Package Details
    bot.action("btn_ib_basic", (ctx) =>
        showIndibizPackageDetail(ctx, "basic")
    );
    bot.action("btn_ib_business", (ctx) =>
        showIndibizPackageDetail(ctx, "business")
    );

    // OCA Actions
    bot.action("btn_oca_terms", (ctx) => showOcaTerms(ctx));

    bot.action(/^btn_oca_(interaction|blast|breach|breach_checker)$/, (ctx) => {
        const product = (ctx.match[1] === 'breach' || ctx.match[1] === 'breach_checker') ? 'breach_checker' : ctx.match[1];
        return showOcaPackageDetail(ctx, product);
    });
    bot.action(/^btn_oca_feat_(.+)$/, (ctx) => showOcaPackageFeatures(ctx, ctx.match[1]));
    bot.action(/^btn_oca_price_(.+)$/, (ctx) => showOcaPackagePricing(ctx, ctx.match[1]));
    bot.action(/^btn_oca_compare_(.+)$/, (ctx) => showOcaPackageComparison(ctx, ctx.match[1]));

    // Pijar Actions
    bot.action(/^btn_pijar_(keunggulan|implementasi|sukses)$/, (ctx) => showPijarDetail(ctx, ctx.match[1]));

    // Netmonk Actions

    bot.action(/^btn_netmonk_(prime|hi)$/, (ctx) => showNetmonkPackageDetail(ctx, ctx.match[1]));
    bot.action(/^btn_netmonk_feat_(.+)$/, (ctx) => showNetmonkPackageFeatures(ctx, ctx.match[1]));

    // Eazy Cam Actions
    bot.action("btn_eazy_pricing", (ctx) => showEazyPricing(ctx));
    bot.action("btn_eazy_cloud", (ctx) => showEazyCloudPricing(ctx));

    bot.action("btn_cat_prodigi", async (ctx) => {
        const buttons = [
            [Markup.button.callback("OCA (Interaction, Blast, Breaker)", "btn_oca")],
            [Markup.button.callback("PIJAR Sekolah", "btn_pijar")],
            [Markup.button.callback("Netmonk", "btn_netmonk")],
            [Markup.button.callback("Antares Eazy", "btn_eazy")],
            [Markup.button.callback("⬅ Kembali", "btn_back")]
        ];
        await replyWithMediaOrText(
            ctx,
            "*Layanan PRODIGI*\nSilakan pilih layanan yang ingin Anda ketahui:",
            buttons
        );
    });

    // Back Button (Main Menu / Categories)
    bot.action("btn_back", async (ctx) => {
        const buttons = [
            [Markup.button.callback("Internet (Basic, Bisnis)", "btn_indibiz")],
            [Markup.button.callback("PRODIGI", "btn_cat_prodigi")],
        ];
        await replyWithMediaOrText(
            ctx,
            "*Silakan pilih kategori layanan yang Anda inginkan:*",
            buttons
        );
    });

    // PDF Document Actions
    bot.action(/^doc_(.+)$/, async (ctx) => {
        const docName = ctx.match[1];
        const path = require('path');
        const fs = require('fs');
        const filePath = path.join(__dirname, `../../assets/proposal/${docName}.pdf`);

        try {
            await ctx.answerCbQuery("Mengirim dokumen proposal...");

            if (fs.existsSync(filePath)) {
                await ctx.replyWithDocument({ source: filePath });
            } else {
                await ctx.reply("Maaf, dokumen proposal belum tersedia untuk saat ini.");
            }
        } catch (error) {
            console.error("Error sending document:", error);
            await ctx.reply("Terjadi kesalahan saat mencoba mengirim dokumen.");
        }
    });

    // Testimoni Actions
    bot.action(/^testi_(pijar|netmonk|oca|eazy)$/, async (ctx) => {
        await ctx.answerCbQuery();
        const product = ctx.match[1];
        const db = require("../../db/database");
        const testimoniItem = await db.getContent(`testimoni_${product}`);

        let text = testimoniItem ? testimoniItem.text : "Maaf, testimoni belum tersedia.";

        const buttons = [[Markup.button.callback("⬅ Kembali ke Testimoni", "btn_testimoni_menu")]];

        await replyWithMediaOrText(ctx, text, buttons);
    });

    bot.action("btn_testimoni_menu", async (ctx) => {
        await ctx.answerCbQuery();
        const text = "🌟 *Testimoni Layanan PRODIGI*\n\nBanyak perusahaan dan instansi yang telah mempercayakan perbaikan proses bisnis mereka menggunakan ekosistem digital *PRODIGI Telkom*.\nSilakan pilih layanan untuk melihat testimoninya:";
        const buttons = [
            [Markup.button.callback("PIJAR Sekolah", "testi_pijar")],
            [Markup.button.callback("Netmonk Monitoring", "testi_netmonk")],
            [Markup.button.callback("OCA Indonesia", "testi_oca")],
            [Markup.button.callback("Antares Eazy Cam", "testi_eazy")]
        ];
        await replyWithMediaOrText(ctx, text, buttons);
    });

    // FAQ Actions
    const { showFaqMenu, showFaqAnswer } = require("./faqHandler");

    bot.action(/^faq_page_(\d+)$/, (ctx) => {
        const page = parseInt(ctx.match[1]);
        showFaqMenu(ctx, page);
    });

    bot.action(/^faq_ans_(\d+)$/, (ctx) => {
        const index = parseInt(ctx.match[1]);
        showFaqAnswer(ctx, index);
    });

    bot.action("delete_msg", async (ctx) => {
        try {
            await ctx.deleteMessage();
        } catch (e) { }
    });
};
