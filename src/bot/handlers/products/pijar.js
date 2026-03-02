const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../../utils/replyHelper");
const path = require("path");
const pijarData = require("../../../data/knowledge/pijar");
const db = require("../../../db/database");

const showPijarMenu = async (ctx) => {
    await ctx.answerCbQuery();

    const buttons = [
        [Markup.button.callback("Keunggulan Utama", "btn_pijar_keunggulan")],
        [Markup.button.callback("Tahap Implementasi", "btn_pijar_implementasi")],
        [Markup.button.callback("Jejak Sukses", "btn_pijar_sukses")],
        [Markup.button.callback("Harga", "btn_pijar_pricing")],
        [Markup.button.callback("⬅ Kembali", "btn_back")],
    ];

    await replyWithMediaOrText(
        ctx,
        pijarData.answer,
        buttons,
        pijarData.image
    );
};

const showPijarDetail = async (ctx, key) => {
    const text = pijarData[key];
    if (!text) return ctx.answerCbQuery("Detail tidak ditemukan");

    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_pijar")],
        [Markup.button.callback("Menu Awal", "btn_back")],
    ];

    await replyWithMediaOrText(ctx, text, buttons, pijarData[`${key}_image`] || null);
};

const showPijarPricing = async (ctx) => {
    await ctx.answerCbQuery();
    const buttons = [
        [Markup.button.callback("⬅ Kembali", "btn_pijar")],
    ];
    const dbData = await db.getContent('pijar_pricing');
    const pricingData = dbData ? dbData.text : "*Harga PIJAR*\nHarga akan segera diupdate/menyusul.";
    const imageData = (dbData && dbData.image_path) ? path.join(__dirname, '../../../public' + dbData.image_path) : (pijarData.image || null);

    await replyWithMediaOrText(
        ctx,
        pricingData,
        buttons,
        imageData
    );
};

module.exports = {
    showPijarMenu,
    showPijarDetail,
    showPijarPricing
};
