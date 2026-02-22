const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const ocaData = require("../../../data/knowledge/oca");

const showOcaMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(ocaData.packages.interaction.name, "btn_oca_interaction")],
        [Markup.button.callback(ocaData.packages.blast.name, "btn_oca_blast")],
        [Markup.button.callback(ocaData.packages.breach_checker.name, "btn_oca_breach")],
        [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
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
        [Markup.button.callback("⬅ Kembali ke OCA", "btn_oca")],
    ];
    await replyWithMediaOrText(ctx, ocaData.terms, buttons, null);
};

const showOcaPackageDetail = async (ctx, key) => {
    const pkg = ocaData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [];
    if (pkg.features) {
        buttons.push([Markup.button.callback(`💡 Lihat Fitur ${pkg.name}`, `btn_oca_feat_${key}`)]);
    }
    buttons.push([
        Markup.button.callback("⬅ Kembali ke OCA", "btn_oca"),
        Markup.button.callback("Menu Utama", "btn_back")
    ]);
    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

const showOcaPackageFeatures = async (ctx, key) => {
    const pkg = ocaData.packages[key];
    if (!pkg || !pkg.features) return ctx.answerCbQuery("Fitur tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke Produk", `btn_oca_${key}`)],
        [Markup.button.callback("⬅ Kembali ke OCA", "btn_oca")],
    ];
    await replyWithMediaOrText(ctx, pkg.features, buttons, null);
};

module.exports = {
    showOcaMenu,

    showOcaTerms,
    showOcaPackageDetail,
    showOcaPackageFeatures
};
