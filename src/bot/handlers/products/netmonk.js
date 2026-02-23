const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const netmonkData = require("../../../data/knowledge/netmonk");

const showNetmonkMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Lihat Produk", "btn_netmonk_packages")],
        [Markup.button.callback("Informasi Berlangganan", "btn_netmonk_terms")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        netmonkData.answer,
        buttons,
        netmonkData.image
    );
};

const showNetmonkPackageTypes = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(netmonkData.packages.prime.name, "btn_netmonk_prime")],
        [Markup.button.callback(netmonkData.packages.hi.name, "btn_netmonk_hi")],
        [Markup.button.callback(netmonkData.packages.enterprise.name, "btn_netmonk_enterprise")],
        [Markup.button.callback("⬅ Kembali", "btn_netmonk")],
    ];

    await replyWithMediaOrText(
        ctx,
        netmonkData.package_intro,
        buttons,
        null
    );
};

const showNetmonkTerms = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_netmonk")],
    ];
    await replyWithMediaOrText(ctx, netmonkData.terms, buttons, null);
};

const showNetmonkPackageDetail = async (ctx, key) => {
    const pkg = netmonkData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Pilihan Produk", "btn_netmonk_packages")],
        [Markup.button.callback("Menu Utama", "btn_back")],
    ];
    await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
};

module.exports = {
    showNetmonkMenu,
    showNetmonkPackageTypes,
    showNetmonkTerms,
    showNetmonkPackageDetail
};
