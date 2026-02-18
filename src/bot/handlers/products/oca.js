const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const ocaData = require("../../../data/knowledge/oca");

const showOcaMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Lihat Produk & Fitur", "btn_oca_packages")],
        [Markup.button.callback("Informasi Berlangganan", "btn_oca_terms")],
        [Markup.button.callback("Kontak Bantuan & Layanan", "btn_oca_contact")],
        [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        ocaData.answer,
        buttons,
        ocaData.image
    );
};

const showOcaPackageTypes = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(ocaData.packages.interaction.name, "btn_oca_interaction")],
        [Markup.button.callback(ocaData.packages.blast.name, "btn_oca_blast")],
        [Markup.button.callback(ocaData.packages.ai.name, "btn_oca_ai")],
        [Markup.button.callback(ocaData.packages.breach_checker.name, "btn_oca_breach")],
        [Markup.button.callback("⬅ Kembali ke OCA", "btn_oca")],
    ];

    await replyWithMediaOrText(
        ctx,
        ocaData.package_intro,
        buttons,
        null
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
    const buttons = [
        [Markup.button.callback("⬅ Pilihan Produk", "btn_oca_packages")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];
    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

const showOcaContact = async (ctx) => {
    await ctx.answerCbQuery();
    const contactInfo = ocaData.contact;
    const buttons = [
        [Markup.button.callback("⬅ Kembali ke OCA", "btn_oca")],
    ];
    await replyWithMediaOrText(ctx, contactInfo, buttons, null);
}

module.exports = {
    showOcaMenu,
    showOcaPackageTypes,
    showOcaTerms,
    showOcaPackageDetail,
    showOcaContact
};
