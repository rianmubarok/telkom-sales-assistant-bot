const { Markup } = require("telegraf");
const faqList = require("../../data/knowledge/faqList");

const ITEMS_PER_PAGE = 5;

// Helper to generate FAQ menu
const generateFaqMenu = (page = 0) => {
    const totalPages = Math.ceil(faqList.length / ITEMS_PER_PAGE);
    const start = page * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    const currentItems = faqList.slice(start, end);

    const buttons = currentItems.map((item, index) => {
        return [Markup.button.callback(`${item.question}`, `faq_ans_${start + index}`)];
    });

    // Navigation buttons
    const navButtons = [];
    if (page > 0) {
        navButtons.push(Markup.button.callback("⬅ Sebelumnya", `faq_page_${page - 1}`));
    }
    if (page < totalPages - 1) {
        navButtons.push(Markup.button.callback("Selanjutnya ➡", `faq_page_${page + 1}`));
    }

    if (navButtons.length > 0) buttons.push(navButtons);
    buttons.push([Markup.button.callback("❌ Tutup FAQ", "delete_msg")]);

    return {
        text: `*❓ Frequently Asked Questions*\nSilakan pilih pertanyaan di bawah ini:`,
        keyboard: Markup.inlineKeyboard(buttons)
    };
};

const showFaqMenu = async (ctx, page = 0) => {
    const menu = generateFaqMenu(page);
    try {
        if (ctx.callbackQuery) {
            await ctx.editMessageText(menu.text, {
                parse_mode: "Markdown",
                ...menu.keyboard
            });
            await ctx.answerCbQuery();
        } else {
            await ctx.reply(menu.text, {
                parse_mode: "Markdown",
                ...menu.keyboard
            });
        }
    } catch (e) {
        // Fallback if edit fails (e.g. message too old or content same)
        await ctx.reply(menu.text, {
            parse_mode: "Markdown",
            ...menu.keyboard
        });
    }
};

const showFaqAnswer = async (ctx, index) => {
    const item = faqList[index];
    if (!item) return ctx.answerCbQuery("Data tidak ditemukan.");

    const page = Math.floor(index / ITEMS_PER_PAGE);

    try {
        await ctx.editMessageText(
            `*❓ Tanya:* ${item.question}\n\n*💡 Jawab:* ${item.answer}`,
            {
                parse_mode: "Markdown",
                ...Markup.inlineKeyboard([
                    [Markup.button.callback("⬅ Kembali ke Daftar FAQ", `faq_page_${page}`)]
                ])
            }
        );
    } catch (e) {
        // Fallback if edit fails
        await ctx.reply(
            `*❓ Tanya:* ${item.question}\n\n*💡 Jawab:* ${item.answer}`,
            {
                parse_mode: "Markdown",
                ...Markup.inlineKeyboard([
                    [Markup.button.callback("⬅ Kembali ke Daftar FAQ", `faq_page_${page}`)]
                ])
            }
        );
    }
    await ctx.answerCbQuery();
};

module.exports = {
    showFaqMenu,
    showFaqAnswer
};
