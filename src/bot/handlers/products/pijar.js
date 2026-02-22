const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const pijarData = require("../../../data/knowledge/pijar");

const showPijarMenu = async (ctx) => {
    await ctx.answerCbQuery();

    const buttons = [
        [Markup.button.callback(pijarData.packages.basic_platform.name, "btn_pijar_single")],
        [Markup.button.callback(pijarData.packages.connectivity_bundle.name, "btn_pijar_bundling")],
        [Markup.button.callback("Informasi Harga", "btn_pijar_terms")],
        [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        pijarData.answer,
        buttons,
        pijarData.image
    );
};

// No longer used directly but kept for potential future use or terms
const showPijarPackageTypes = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(pijarData.packages.basic_platform.name, "btn_pijar_single")],
        [Markup.button.callback(pijarData.packages.connectivity_bundle.name, "btn_pijar_bundling")],
        [Markup.button.callback("⬅ Kembali ke Pijar", "btn_pijar")],
    ];

    await replyWithMediaOrText(
        ctx,
        pijarData.package_intro,
        buttons,
        null
    );
};

const showPijarTerms = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke Pijar", "btn_pijar")],
    ];
    await replyWithMediaOrText(ctx, pijarData.terms, buttons, null);
};

const showPijarPackageDetail = async (ctx, key) => {
    const pkg = pijarData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke Pijar", "btn_pijar")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];

    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

module.exports = {
    showPijarMenu,
    showPijarPackageTypes,
    showPijarTerms,
    showPijarPackageDetail
};
