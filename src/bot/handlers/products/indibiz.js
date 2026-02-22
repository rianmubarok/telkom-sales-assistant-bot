const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const indibizData = require("../../../data/knowledge/indibiz");

const showIndibizMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(indibizData.packages.basic.name, "btn_ib_basic")],
        [Markup.button.callback(indibizData.packages.business.name, "btn_ib_business")],
        [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        indibizData.answer,
        buttons,
        indibizData.image
    );
};

const showIndibizPackageDetail = async (ctx, key) => {
    const pkg = indibizData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke IndiBiz", "btn_indibiz")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];
    await replyWithMediaOrText(ctx, pkg.detail, buttons, pkg.image);
};

module.exports = {
    showIndibizMenu,
    showIndibizPackageDetail
};
