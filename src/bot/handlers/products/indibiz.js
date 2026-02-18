const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const indibizData = require("../../../data/knowledge/indibiz");

const showIndibizMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Lihat Pilihan Paket", "btn_ib_packages")],
        [Markup.button.callback("Syarat & Ketentuan", "btn_ib_terms")],
        [Markup.button.callback("Kontak Bantuan & Layanan", "btn_ib_contact")],
        [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        indibizData.answer,
        buttons,
        indibizData.image
    );
};

const showIndibizPackageTypes = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(indibizData.packages.basic.name, "btn_ib_basic")],
        [Markup.button.callback(indibizData.packages.business.name, "btn_ib_business")],
        [Markup.button.callback("⬅ Kembali ke IndiBiz", "btn_indibiz")],
    ];

    await replyWithMediaOrText(
        ctx,
        indibizData.package_intro,
        buttons,
        null
    );
};

const showIndibizTerms = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke IndiBiz", "btn_indibiz")],
    ];
    await replyWithMediaOrText(ctx, indibizData.terms, buttons, null);
};

const showIndibizPackageDetail = async (ctx, key) => {
    const pkg = indibizData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Pilihan Paket", "btn_ib_packages")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];
    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

const showIndibizContact = async (ctx) => {
    await ctx.answerCbQuery();
    const contactInfo = indibizData.contact;
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke IndiBiz", "btn_indibiz")],
    ];
    await replyWithMediaOrText(ctx, contactInfo, buttons, null);
}

module.exports = {
    showIndibizMenu,
    showIndibizPackageTypes,
    showIndibizTerms,
    showIndibizPackageDetail,
    showIndibizContact
};
