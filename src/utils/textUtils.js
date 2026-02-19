// Helper function to sanitize Markdown for Telegram
// Telegram's MarkdownV2 is very strict. We need to escape characters carefully.
// However, the user is using "Markdown" (legacy) which is less strict but still prone to errors with unclosed tags.
// Alternatively, we can switch to "MarkdownV2" and escape everything, or just strip invalid chars.

function sanitizeMarkdown(text) {
    if (!text) return "";

    // 1. Convert double asterisks (**) to single asterisk (*) for bold
    let clean = text.replace(/\*\*/g, '*');

    // 2. Format lists: replace "* " or "- " at start of lines with "• " for better compatibility
    // clean = clean.replace(/^[\*\\-] /gm, '• ');

    // 3. Handle underscores:
    // Underscores are the main cause of "Can't find end of entity" errors in Legacy Markdown.
    // We will escape them to be safe, unless specifically wanting italics (which we sacrifice for stability).
    // Note: This might break URLs containing underscores if not handled carefully, 
    // but usually Telegram auto-link detection works on plain text, and Markdown links [text](url) are parsed differently.
    // For safety, we replace all `_` with ` ` (space) or escaped `\_`.
    // Replacing with space is safest for "product_name" -> "product name".
    clean = clean.replace(/_/g, ' ');

    return clean;
}

module.exports = { sanitizeMarkdown };
