// Helper function to sanitize Markdown for Telegram
// Telegram's MarkdownV2 is very strict. We need to escape characters carefully.
// However, the user is using "Markdown" (legacy) which is less strict but still prone to errors with unclosed tags.
// Alternatively, we can switch to "MarkdownV2" and escape everything, or just strip invalid chars.

function sanitizeMarkdown(text) {
    if (!text) return "";

    // 1. Ensure bold/italic tags are closed (simplistic check)
    // This is hard to do perfectly with regex. 

    // 2. Escape special characters that might confuse the parser if they are not part of a tag
    // Common issue: "20 *" might be interpreted as start of bold but never closed.

    // A safer approach for AI content is to avoid Markdown formatting that is complex
    // OR, simply wrap the content in a try-catch for the sendRepy and fallback to plain text if it fails.

    return text;
}

module.exports = { sanitizeMarkdown };
