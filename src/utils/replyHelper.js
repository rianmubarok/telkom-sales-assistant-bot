const { Markup } = require("telegraf");

// Helper: Send text or photo (clearing previous message if needed)
const replyWithMediaOrText = async (ctx, content, buttons, image = null) => {
    try {
        // If image is provided, delete previous message and send new photo message
        if (image) {
            await ctx.deleteMessage().catch(() => { }); // Delete previous text menu
            const media = image.startsWith("http") ? { url: image } : { source: image };
            await ctx.replyWithPhoto(
                media,
                {
                    caption: content,
                    parse_mode: "Markdown",
                    ...Markup.inlineKeyboard(buttons),
                }
            );
        } else {
            // If no image, try to edit existing message
            try {
                // Check if current message has photo, if so, delete and send text
                if (ctx.callbackQuery.message.photo) {
                    await ctx.deleteMessage();
                    throw new Error("Switching from photo to text");
                }
                await ctx.editMessageText(content, {
                    parse_mode: "Markdown",
                    disable_web_page_preview: true,
                    ...Markup.inlineKeyboard(buttons),
                });
            } catch (err) {
                // Fallback: Send new text message
                await ctx.reply(content, {
                    parse_mode: "Markdown",
                    disable_web_page_preview: true,
                    ...Markup.inlineKeyboard(buttons),
                });
            }
        }
    } catch (error) {
        console.error("Error in replyWithMediaOrText:", error);
        // Ultimate fallback
        await ctx.reply(content, {
            parse_mode: "Markdown",
            disable_web_page_preview: true,
            ...Markup.inlineKeyboard(buttons),
        });
    }
};

module.exports = {
    replyWithMediaOrText,
};
