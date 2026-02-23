const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const ocaData = require("../../../data/knowledge/oca");

const showOcaMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(ocaData.packages.interaction.name, "btn_oca_interaction")],
        [Markup.button.callback(ocaData.packages.blast.name, "btn_oca_blast")],
        [Markup.button.callback(ocaData.packages.breach_checker.name, "btn_oca_breach")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        ocaData.answer,
        buttons,
        ocaData.image
    );
};


const showOcaTerms = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_oca")],
    ];
    await replyWithMediaOrText(ctx, ocaData.terms, buttons, null);
};

const showOcaPackageDetail = async (ctx, key) => {
    const pkg = ocaData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [];
    if (pkg.features) {
        buttons.push([Markup.button.callback(`Detail Fitur`, `btn_oca_feat_${key}`)]);
    }
    if (pkg.pricing) {
        buttons.push([Markup.button.callback(`Harga Paket IndiBiz x OCA`, `btn_oca_price_${key}`)]);
    }
    if (pkg.comparison) {
        const compareText = key === 'blast' ? 'Perbandingan Paket Blast' : 'Perbandingan Paket Interaction';
        buttons.push([Markup.button.callback(compareText, `btn_oca_compare_${key}`)]);
    }
    buttons.push([
        Markup.button.callback("⬅ Kembali", "btn_oca"),
    ]);
    await replyWithMediaOrText(ctx, pkg.detail, buttons, pkg.image);
};

const showOcaPackageFeatures = async (ctx, key) => {
    const pkg = ocaData.packages[key];
    if (!pkg || !pkg.features) return ctx.answerCbQuery("Fitur tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", `btn_oca_${key}`)],
        [Markup.button.callback("Kembali ke OCA", "btn_oca")],
    ];
    await replyWithMediaOrText(ctx, pkg.features, buttons, pkg.image);
};

const showOcaPackagePricing = async (ctx, key) => {
    const pkg = ocaData.packages[key];
    if (!pkg || !pkg.pricing) return ctx.answerCbQuery("Informasi harga tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", `btn_oca_${key}`)],
        [Markup.button.callback("Kembali ke OCA", "btn_oca")],
    ];
    await replyWithMediaOrText(ctx, pkg.pricing, buttons, pkg.pricing_image || pkg.image);
};

const showOcaPackageComparison = async (ctx, key) => {
    const pkg = ocaData.packages[key];
    if (!pkg || !pkg.comparison) return ctx.answerCbQuery("Informasi perbandingan tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", `btn_oca_${key}`)],
        [Markup.button.callback("Kembali ke OCA", "btn_oca")],
    ];
    await replyWithMediaOrText(ctx, pkg.comparison, buttons, pkg.comparison_image || pkg.image);
};

module.exports = {
    showOcaMenu,

    showOcaTerms,
    showOcaPackageDetail,
    showOcaPackageFeatures,
    showOcaPackagePricing,
    showOcaPackageComparison
};
