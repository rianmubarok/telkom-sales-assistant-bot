const { GoogleGenAI } = require("@google/genai");
const { GEMINI_API_KEY } = require("../config");
const knowledgeData = require("../data/knowledge.js");

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
const getRelevantContext = (query) => {
    const lowerQuery = query.toLowerCase();

    // Find items where at least one keyword is mentioned in the query
    const relevantItems = knowledgeData.filter(item => {
        return item.keywords.some(keyword => lowerQuery.includes(keyword.toLowerCase()));
    });

    // If matches found, return only those. 
    // If no specific matches, return ALL knowledge (fallback context).
    const itemsToUse = relevantItems.length > 0 ? relevantItems : knowledgeData;

    return itemsToUse.map(formatKnowledgeItem).join("\n---\n");
};

const generateAnswer = async (userQuery) => {
    try {
        // Dynamic Context Construction
        const relevantContext = getRelevantContext(userQuery);

        const SYSTEM_PROMPT = `
Anda adalah asisten virtual cerdas untuk Telkom Jepara bernama "Telkom Bot".
Tugas Anda adalah menjawab pertanyaan pelanggan mengenai layanan Telkom (IndiHome, IndiBiz, Pijar, dll) dengan ramah, informatif, dan akurat.

RINGKASAN PRODUK TERSEDIA:
1. INDIHOME: Internet WiFi fiber optik & TV interaktif untuk rumah/keluarga.
2. INDIBIZ: Solusi digital & internet untuk bisnis/UMKM.
3. PIJAR SEKOLAH: Platform manajemen sekolah & belajar digital siswa.
4. OCA INDONESIA: Layanan komunikasi pelanggan (WhatsApp Blast, SMS Masking, Email).
5. NETMONK: Aplikasi monitoring jaringan & infrastruktur IT.
6. ANTARES EAZY: Layanan Smart Home & IP Camera (CCTV) yang aman.

DATA PENGETAHUAN PRODUK (Detail Relevan):
${relevantContext}

INSTRUKSI:
1. Jawablah pertanyaan user dengan bahasa Indonesia yang sopan dan natural.
2. Gunakan emoji yang relevan untuk membuat percakapan lebih hidup.
3. JIKA informasi tidak ada dalam data di atas, arahkan user untuk menghubungi Call Center atau datang ke **Telkom Daerah Jepara** (Jl. Pemuda No.3, Potroyudan XI, Jepara. Telp: 0800 1835566). JANGAN MENGARANG informasi harga atau paket.
4. Jika user bertanya "apa itu [produk]", jelaskan sesingkat dan sejelas mungkin dari data.
5. Jika user bertanya rekomendasi, berikan saran berdasarkan kebutuhan mereka (misal: "untuk keluarga" -> IndiHome, "untuk bisnis" -> IndiBiz).
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
        return null; // Fallback to standard response if AI fails
    }
};

module.exports = { generateAnswer };
