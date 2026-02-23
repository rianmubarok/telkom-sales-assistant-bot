const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const eazyData = require("../../../data/knowledge/eazy");

const showEazyMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Lihat Pilihan Paket", "btn_eazy_packages")],
        [Markup.button.callback("Informasi Harga", "btn_eazy_terms")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        eazyData.answer,
        buttons,
        eazyData.image
    );
};

const showEazyPackageTypes = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Beli Perangkat", "btn_eazy_purchase")],
        [Markup.button.callback("Langganan Cloud", "btn_eazy_cloud")],
        [Markup.button.callback("Bundling IndiBiz", "btn_eazy_bundling")],
        [Markup.button.callback("⬅ Kembali", "btn_eazy")],
    ];

    await replyWithMediaOrText(
        ctx,
        eazyData.package_intro,
        buttons,
        null
    );
};

const showEazyTerms = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_eazy")],
    ];
    await replyWithMediaOrText(ctx, eazyData.terms, buttons, null);
};

const showEazyPackageDetail = async (ctx, key) => {
    const pkg = eazyData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Pilihan Paket", "btn_eazy_packages")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];

    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

module.exports = {
    showEazyMenu,
    showEazyPackageTypes,
    showEazyTerms,
    showEazyPackageDetail
};
