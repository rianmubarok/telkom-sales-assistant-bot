const { Markup } = require("telegraf");
const { replyWithMediaOrText } = require("../../utils/replyHelper");

const {
    showIndihomeMenu,
    showIndihomePackageTypes,
    showIndihomeTerms,
    showIndihomePackageDetail,
    showIndihomeContact
} = require("./products/indihome");

const {
    showIndibizMenu,
    showIndibizPackageTypes,
    showIndibizTerms,
    showIndibizPackageDetail,
    showIndibizContact
} = require("./products/indibiz");

const {
    showOcaMenu,
    showOcaPackageTypes,
    showOcaTerms,
    showOcaPackageDetail,
    showOcaContact
} = require("./products/oca");

const {
    showPijarMenu,
    showPijarPackageTypes,
    showPijarTerms,
    showPijarPackageDetail,
    showPijarContact
} = require("./products/pijar");

const {
    showNetmonkMenu,
    showNetmonkPackageTypes,
    showNetmonkTerms,
    showNetmonkPackageDetail,
    showNetmonkContact
} = require("./products/netmonk");

const {
    showEazyMenu,
    showEazyPackageTypes,
    showEazyTerms,
    showEazyPackageDetail,
    showEazyContact
} = require("./products/eazy");

module.exports = (bot) => {
    // Action Handlers (Main Menu)
    bot.action("btn_indihome", (ctx) => showIndihomeMenu(ctx));
    bot.action("btn_indibiz", (ctx) => showIndibizMenu(ctx));
    bot.action("btn_oca", (ctx) => showOcaMenu(ctx));
    bot.action("btn_pijar", (ctx) => showPijarMenu(ctx));
    bot.action("btn_netmonk", (ctx) => showNetmonkMenu(ctx));
    bot.action("btn_eazy", (ctx) => showEazyMenu(ctx));

    // IndiHome Submenus
    bot.action("btn_ih_packages", (ctx) => showIndihomePackageTypes(ctx));
    bot.action("btn_ih_terms", (ctx) => showIndihomeTerms(ctx));
    bot.action("btn_ih_contact", (ctx) => showIndihomeContact(ctx));

    // IndiHome Package Details
    bot.action("btn_ih_internet_only", (ctx) =>
        showIndihomePackageDetail(ctx, "internet_only")
    );
    bot.action("btn_ih_netflix", (ctx) =>
        showIndihomePackageDetail(ctx, "netflix")
    );
    bot.action("btn_ih_dynamic", (ctx) =>
        showIndihomePackageDetail(ctx, "dynamic")
    );

    // IndiBiz Submenus
    bot.action("btn_ib_packages", (ctx) => showIndibizPackageTypes(ctx));
    bot.action("btn_ib_terms", (ctx) => showIndibizTerms(ctx));
    bot.action("btn_ib_contact", (ctx) => showIndibizContact(ctx));

    // IndiBiz Package Details
    bot.action("btn_ib_basic", (ctx) =>
        showIndibizPackageDetail(ctx, "basic")
    );
    bot.action("btn_ib_business", (ctx) =>
        showIndibizPackageDetail(ctx, "business")
    );

    // OCA Actions
    bot.action("btn_oca_packages", (ctx) => showOcaPackageTypes(ctx));
    bot.action("btn_oca_terms", (ctx) => showOcaTerms(ctx));
    bot.action("btn_oca_contact", (ctx) => showOcaContact(ctx));

    bot.action("btn_oca_interaction", (ctx) => showOcaPackageDetail(ctx, "interaction"));
    bot.action("btn_oca_blast", (ctx) => showOcaPackageDetail(ctx, "blast"));
    bot.action("btn_oca_ai", (ctx) => showOcaPackageDetail(ctx, "ai"));
    bot.action("btn_oca_breach", (ctx) => showOcaPackageDetail(ctx, "breach_checker"));

    // Pijar Actions
    bot.action("btn_pijar_packages", (ctx) => showPijarPackageTypes(ctx));
    bot.action("btn_pijar_terms", (ctx) => showPijarTerms(ctx));
    bot.action("btn_pijar_contact", (ctx) => showPijarContact(ctx));
    bot.action("btn_pijar_single", (ctx) => showPijarPackageDetail(ctx, "basic_platform"));
    bot.action("btn_pijar_bundling", (ctx) => showPijarPackageDetail(ctx, "connectivity_bundle"));

    // Netmonk Actions
    bot.action("btn_netmonk_packages", (ctx) => showNetmonkPackageTypes(ctx));
    bot.action("btn_netmonk_terms", (ctx) => showNetmonkTerms(ctx));
    bot.action("btn_netmonk_contact", (ctx) => showNetmonkContact(ctx));

    bot.action("btn_netmonk_prime", (ctx) => showNetmonkPackageDetail(ctx, "prime"));
    bot.action("btn_netmonk_hi", (ctx) => showNetmonkPackageDetail(ctx, "hi"));
    bot.action("btn_netmonk_enterprise", (ctx) => showNetmonkPackageDetail(ctx, "enterprise"));

    // Eazy Cam Actions
    bot.action("btn_eazy_packages", (ctx) => showEazyPackageTypes(ctx));
    bot.action("btn_eazy_terms", (ctx) => showEazyTerms(ctx));
    bot.action("btn_eazy_contact", (ctx) => showEazyContact(ctx));

    bot.action("btn_eazy_purchase", (ctx) => showEazyPackageDetail(ctx, "purchase"));
    bot.action("btn_eazy_cloud", (ctx) => showEazyPackageDetail(ctx, "cloud_subscription"));
    bot.action("btn_eazy_bundling", (ctx) => showEazyPackageDetail(ctx, "bundling_indibiz"));

    // Back Button (Main Menu)
    bot.action("btn_back", async (ctx) => {
        const buttons = [
            [Markup.button.callback("IndiHome", "btn_indihome")],
            [Markup.button.callback("IndiBiz", "btn_indibiz")],
            [Markup.button.callback("OCA Indonesia", "btn_oca")],
            [Markup.button.callback("Pijar Sekolah", "btn_pijar")],
            [Markup.button.callback("Netmonk", "btn_netmonk")],
            [Markup.button.callback("Antares Eazy", "btn_eazy")],
        ];
        await replyWithMediaOrText(
            ctx,
            "📦 *Silakan pilih layanan yang ingin Anda ketahui:*",
            buttons
        );
    });
};
