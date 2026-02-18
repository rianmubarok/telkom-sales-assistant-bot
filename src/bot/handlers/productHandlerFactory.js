const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../utils/replyHelper");

const createProductHandlers = (productData, productKey) => {

    const showMenu = async (ctx) => {
        await ctx.answerCbQuery();
        const buttons = [
            [Markup.button.callback("Lihat Pilihan Paket", `btn_${productKey}_packages`)],
            [Markup.button.callback("Syarat & Ketentuan", `btn_${productKey}_terms`)],
            [Markup.button.callback("⬅ Kembali ke Menu", "btn_back")],
        ];
        // Custom button labels if needed, or stick to generic structure
        // If productData has specific button config, use it. For now, assuming generic structure or manual override

        await replyWithMediaOrText(
            ctx,
            productData.answer,
            buttons,
            productData.image
        );
    };

    const showPackageTypes = async (ctx) => {
        await ctx.answerCbQuery();
        const buttons = Object.keys(productData.packages).map(key => {
            return [Markup.button.callback(productData.packages[key].name, `btn_${productKey}_${key}`)]
        });
        buttons.push([Markup.button.callback(`⬅ Kembali ke ${productData.keywords[0]}`, `btn_${productKey}`)]);

        await replyWithMediaOrText(
            ctx,
            productData.package_intro,
            buttons,
            null
        );
    };

    const showTerms = async (ctx) => {
        await ctx.answerCbQuery();
        const buttons = [
            [Markup.button.callback(`⬅ Kembali ke ${productData.keywords[0]}`, `btn_${productKey}`)],
        ];
        await replyWithMediaOrText(ctx, productData.terms, buttons, null);
    };

    const showPackageDetail = async (ctx, key) => {
        const pkg = productData.packages[key];
        if (!pkg) return ctx.answerCbQuery("Paket tidak ditemukan");

        await ctx.answerCbQuery();
        const buttons = [
            [Markup.button.callback("⬅ Pilihan Paket", `btn_${productKey}_packages`)],
            [Markup.button.callback("Menu Utama", "btn_back")],
        ];

        await replyWithMediaOrText(ctx, pkg.detail, buttons, null);
    };

    return {
        showMenu,
        showPackageTypes,
        showTerms,
        showPackageDetail
    }

}

module.exports = { createProductHandlers };
