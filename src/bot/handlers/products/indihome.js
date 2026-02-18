const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const indihomeData = require("../../../data/knowledge/indihome");

const showIndihomeMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Lihat Pilihan Paket", "btn_ih_packages")],
        [Markup.button.callback("Syarat & Ketentuan", "btn_ih_terms")],
        [Markup.button.callback("Kontak Bantuan & Layanan", "btn_ih_contact")],
        [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        indihomeData.answer,
        buttons,
        indihomeData.image
    );
};

const showIndihomePackageTypes = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(indihomeData.packages.internet_only.name, "btn_ih_internet_only")],
        [Markup.button.callback(indihomeData.packages.netflix.name, "btn_ih_netflix")],
        [Markup.button.callback(indihomeData.packages.dynamic.name, "btn_ih_dynamic")],
        [Markup.button.callback("⬅ Kembali ke IndiHome", "btn_indihome")],
    ];

    await replyWithMediaOrText(
        ctx,
        indihomeData.package_intro,
        buttons,
        null
    );
};

const showIndihomeTerms = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke IndiHome", "btn_indihome")],
    ];
    await replyWithMediaOrText(ctx, indihomeData.terms, buttons, null);
};

const showIndihomePackageDetail = async (ctx, key) => {
    const pkg = indihomeData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Pilihan Paket", "btn_ih_packages")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];
    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

const showIndihomeContact = async (ctx) => {
    await ctx.answerCbQuery();
    const contactInfo = indihomeData.contact;
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke IndiHome", "btn_indihome")],
    ];
    await replyWithMediaOrText(ctx, contactInfo, buttons, null);
}

module.exports = {
    showIndihomeMenu,
    showIndihomePackageTypes,
    showIndihomeTerms,
    showIndihomePackageDetail,
    showIndihomeContact
};
