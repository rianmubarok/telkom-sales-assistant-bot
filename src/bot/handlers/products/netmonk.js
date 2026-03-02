const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const path = require("path");
const netmonkData = require("../../../data/knowledge/netmonk");
const db = require("../../../db/database");

const showNetmonkMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback(netmonkData.packages.prime.name, "btn_netmonk_prime")],
        [Markup.button.callback(netmonkData.packages.hi.name, "btn_netmonk_hi")],
        [Markup.button.callback("Harga", "btn_netmonk_pricing")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        netmonkData.answer,
        buttons,
        netmonkData.image
    );
};

const showNetmonkPackageDetail = async (ctx, key) => {
    const pkg = netmonkData.packages[key];
    if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [];
    if (pkg.features) {
        buttons.push([Markup.button.callback(`Detail Fitur`, `btn_netmonk_feat_${key}`)]);
    }
    buttons.push(
        [Markup.button.callback("⬅ Kembali", "btn_netmonk")]
    );
    await replyWithMediaOrText(ctx, pkg.detail, buttons, pkg.image || null);
};

const showNetmonkPackageFeatures = async (ctx, key) => {
    const pkg = netmonkData.packages[key];
    if (!pkg || !pkg.features) return ctx.answerCbQuery("Fitur tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", `btn_netmonk_${key}`)],
        [Markup.button.callback("Kembali ke Netmonk", "btn_netmonk")],
    ];
    await replyWithMediaOrText(ctx, pkg.features, buttons, pkg.image || null);
};

const showNetmonkPricing = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_netmonk")],
    ];
    const dbData = await db.getContent('netmonk_pricing');
    const pricingData = dbData ? dbData.text : "*Harga Netmonk*\nHarga akan segera diupdate/menyusul.";
    const imageData = (dbData && dbData.image_path) ? path.join(__dirname, '../../../public' + dbData.image_path) : (netmonkData.image || null);

    await replyWithMediaOrText(
        ctx,
        pricingData,
        buttons,
        imageData
    );
};


module.exports = {
    showNetmonkMenu,
    showNetmonkPackageDetail,
    showNetmonkPackageFeatures,
    showNetmonkPricing
};
