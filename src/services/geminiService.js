const { GoogleGenAI } = require("@google/genai");
const { GEMINI_API_KEY } = require("../config");
const knowledgeData = require("../data/knowledge.js");
const db = require("../db/database");

// Initialize Gemini
const genAI = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

// Helper: Format knowledge into a string
const formatKnowledgeItem = (item) => {
    let text = `Product: ${item.keywords[0].toUpperCase()}\n`;
    text += `Description: ${item.answer}\n`;
    if (item.packages) {
        text += `Packages:\n`;
        Object.values(item.packages).forEach(pkg => {
            text += `- ${pkg.name}: ${pkg.detail}\n`;
        });
    }
    return text;
};

// Helper: Get relevant knowledge based on user query
const getRelevantContext = async (query) => {
    const lowerQuery = query.toLowerCase();

    // 1. Get static data
    const relevantItems = knowledgeData.filter(item => {
        return item.keywords.some(keyword => lowerQuery.includes(keyword.toLowerCase()));
    });
    const itemsToUse = relevantItems.length > 0 ? relevantItems : knowledgeData;
    let context = itemsToUse.map(formatKnowledgeItem).join("\n---\n");

    // 2. Append Dynamic Data from Database (Pricing focus)
    try {
        const dbContents = await db.getAllContents();
        if (dbContents && dbContents.length > 0) {
            context += "\n\n--- DYNAMIC PRICING & UPDATES FROM CMS ---\n";
            dbContents.forEach(item => {
                // If query mentions keywords related to this DB item key, put it in context
                const keyLower = item.key.toLowerCase();
                const titleLower = item.title.toLowerCase();
                if (lowerQuery.includes(keyLower.split('_')[0]) || lowerQuery.includes(titleLower.split(' ')[0].toLowerCase())) {
                    context += `DATA: ${item.title}\nCONTENT: ${item.text}\n\n`;
                }
            });
        }
    } catch (e) {
        console.error("Database read error in Gemini Service:", e);
    }

    return context;
};

const generateAnswer = async (userQuery) => {
    try {
        // Dynamic Context Construction
        const relevantContext = await getRelevantContext(userQuery);

        const SYSTEM_PROMPT = `
Anda adalah asisten AI internal khusus untuk Tim Sales Telkom Jepara.
Tugas Anda adalah membantu tim sales dalam menjawab pertanyaan seputar layanan Telkom Group. 
Berikan jawaban yang taktis, to the point, dan mendukung kelancaran pekerjaan tim sales dalam berjualan.

RINGKASAN PRODUK TERSEDIA:
1. Internet: Layanan konektivitas broadband dari Telkom, berfokus pada IndiBiz (Paket Basic & Bisnis) yang dirancang untuk B2B/UMKM dengan keunggulan internet stabil, rasio hingga 1:1 (simetris), dan layanan tanpa FUP.
2. PRODIGI (OCA, PIJAR, Netmonk, EazyCam): Ekosistem Solusi Enterprise & Layanan Digital Telkom. Meliputi solusi komunikasi Omnichannel (OCA), digitalisasi pendidikan (PIJAR Sekolah), monitoring infrastruktur IT & Jaringan (Netmonk), serta platform kamera keamanan cerdas/CCTV (Antares Eazy).

DATA PENGETAHUAN PRODUK (Detail Relevan):
${relevantContext}

INSTRUKSI KEPADA AI:
1. JIKA informasi harga atau skema komisi tidak ada di data, arahkan sales untuk selalu mengecek update info promo dari TL / grup Witel resmi. JANGAN PERNAH mengarang informasi tarif/harga/komisi.
2. Gunakan emoji secukupnya agar teks mudah dibaca.
3. RULES MARKDOWN TELEGRAM (PENTING):
   - JANGAN gunakan underscore (_) untuk apapun. Ganti dengan spasi. Underscore menyebabkan error.
   - Gunakan satu bintang (*) untuk bold (jangan dua).
   - Jangan buat list dengan tombol strip (-), gunakan bullet point (•).
`;

        const response = await genAI.models.generateContent({
            model: "gemini-3-flash-preview",
            config: {
                maxOutputTokens: 4000,
                temperature: 0.7,
            },
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: SYSTEM_PROMPT + "\n\nUser Question: " + userQuery }
                    ]
                }
            ]
        });

        return response.text;
    } catch (error) {
        console.error("Gemini API Error:", error);

        // Handle Quota Limit (429) or Server Overload (503)
        if (error.status === 429 || error.message?.includes("429")) {
            return "⚠️ *Layanan Sedang Sibuk (Limit Kuota)*\n\nMaaf, batas penggunaan AI tercapai. Mohon tunggu sekitar *1 menit*.\n\n💡 *Solusi Cepat:* Gunakan menu *🌐 Layanan* atau *❓ FAQ* untuk melihat informasi langsung.";
        }

        if (error.status === 503 || error.message?.includes("503")) {
            return "⚠️ *Server AI Sedang Penuh*\n\nMaaf, server AI sedang sibuk. Mohon coba lagi beberapa saat.\n\n💡 *Solusi Cepat:* Gunakan menu *🌐 Layanan* atau *❓ FAQ* untuk melihat informasi langsung.";
        }

        return null; // Fallback to standard response for other errors
    }
};

module.exports = { generateAnswer };
