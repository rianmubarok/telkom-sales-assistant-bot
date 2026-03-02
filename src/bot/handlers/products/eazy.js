const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const path = require("path");
const eazyData = require("../../../data/knowledge/eazy");
const db = require("../../../db/database");

const showEazyMenu = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("Harga", "btn_eazy_pricing")],
        [Markup.button.callback("Cloud Recording", "btn_eazy_cloud")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        eazyData.answer,
        buttons,
        eazyData.image
    );
};

const showEazyPricing = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_eazy")],
    ];
    const dbData = await db.getContent('eazy_cam_pricing');
    const pricingData = dbData ? dbData.text : eazyData.pricing;
    const imageData = (dbData && dbData.image_path) ? path.join(__dirname, '../../../public' + dbData.image_path) : eazyData.image;

    await replyWithMediaOrText(
        ctx,
        pricingData,
        buttons,
        imageData
    );
};


const showEazyCloudPricing = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_eazy")],
    ];
    const dbData = await db.getContent('eazy_cam_cloud_pricing');
    const cloudData = dbData ? dbData.text : eazyData.cloud_pricing;
    const imageData = (dbData && dbData.image_path) ? path.join(__dirname, '../../../public' + dbData.image_path) : eazyData.image;

    await replyWithMediaOrText(
        ctx,
        cloudData,
        buttons,
        imageData
    );
};

module.exports = {
    showEazyMenu,
    showEazyPricing,
    showEazyCloudPricing
};
