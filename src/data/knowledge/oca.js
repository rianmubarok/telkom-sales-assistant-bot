const path = require('path');

const oca = {
    keywords: [
        "oca",
        "omni communication assistant",
        "oca interaction",
        "oca blast",
        "oca ai",
        "oca chatbot",
        "oca whatsapp api",
        "oca breach checker"
    ],
    image: path.join(__dirname, "../../assets/images/indibiz.jpg"),
    answer: `
*OCA (Omni Communication Assistant)*

Platform komunikasi Omnichannel berbasis cloud dari Telkom Indonesia yang mengintegrasikan berbagai saluran komunikasi (WhatsApp, SMS, Email, Call, Media Sosial) ke dalam satu platform terpusat.

OCA membantu bisnis skala UMKM hingga Enterprise untuk mengotomatisasi pemasaran, meningkatkan efisiensi layanan pelanggan (CS), dan menjaga keterlibatan pelanggan secara digital.
`,
    contact: `
*Kontak Bantuan OCA:*

📧 *Email Support:* cs@ocatelkom.co.id
🌐 *Helpdesk:* Live Chat melalui dashboard [ocaindonesia.co.id](https://ocaindonesia.co.id)
`,
    package_intro: `
*Layanan Unggulan Ekosistem OCA*

Berikut adalah modul-modul utama yang tersedia di OCA:

1️⃣ *OCA Interaction*
Dashboard CS terpadu untuk mengelola semua chat pelanggan (WhatsApp, IG, FB, Telegram) dalam satu pintu.

2️⃣ *OCA Blast*
Platform untuk pengiriman pesan massal (broadcast) promosi atau informasi melalui WhatsApp, SMS, dan Email.

3️⃣ *OCA Chatbot*
Otomatisasi respon pesan menggunakan bot cerdas (AI) untuk melayani pelanggan 24/7 tanpa agen manusia.

4️⃣ *OCA API*
Integrasi sistem komunikasi langsung ke dalam aplikasi atau website bisnis Anda.
`,
    terms: `
*Informasi Harga & Berlangganan*

Harga berlangganan OCA terdiri dari biaya platform (bulanan/tahunan) dan biaya penggunaan (per pesan/sesi). Untuk kebutuhan kustom skala besar, tersedia paket Enterprise.
`,
    packages: {
        interaction: {
            name: "OCA Interaction",
            slug: "oca_interaction",
            detail: `
*OCA Interaction*

Solusi CRM Omnichannel untuk manajemen Customer Service yang responsif.

*Fitur:*
• Multi-agent & Multi-channel
• Distribusi chat otomatis ke agen
• Riwayat percakapan pelanggan yang lengkap

*Estimasi Harga:*
• Lite: mulai dari *Rp 249.000 / bulan*
• Pro/Enterprise: *Harga Custom* (Berdasarkan jumlah agen & fitur tambahan)
`
        },
        blast: {
            name: "OCA Blast",
            slug: "oca_blast",
            detail: `
*OCA Blast*

Layanan pesan massal (broadcast) untuk kebutuhan marketing dan notifikasi.

*Fitur:*
• Penjadwalan pesan
• Personalisasi nama penerima
• Analitik performa (pesan terkirim/dibaca)

*Estimasi Harga:*
• Platform Fee: mulai dari *Rp 549.000 / bulan*
• *Catatan:* Belum termasuk biaya per pesan (SMS/WhatsApp) sesuai tarif yang berlaku.
`
        },
        chatbot: {
            name: "OCA Chatbot (AI)",
            slug: "oca_ai",
            detail: `
*OCA Chatbot*

Solusi bot otomatis untuk menjawab pertanyaan berulang (FAQ) secara instan.

*Fitur:*
• Drag-and-drop bot builder (Tanpa Coding)
• Integrasi dengan OCA Interaction
• Dukungan Natural Language Processing (NLP)

*Estimasi Harga:*
• Umumnya ditambahkan sebagai *add-on* pada OCA Interaction
• Harga menyesuaikan kompleksitas alur bot.
`
        }
    }
};

module.exports = oca;