const path = require('path');

const oca = {
    keywords: [
        "oca",
        "omni communication assistant",
        "oca interaction",
        "oca blast",
        "oca whatsapp api",
        "oca breach checker"
    ],
    image: path.join(__dirname, "../../assets/images/oca.jpg"),
    answer: `
*OCA (Omni Communication Assistant)*

Solusi Omnichannel dari Telkom Indonesia untuk mengelola pesan pelanggan (WhatsApp, SMS, Email, Call) dalam satu dashboard terintegrasi. Cocok untuk otomatisasi pemasaran dan efisiensi layanan pelanggan (CS).

*Layanan Utama*

1. *OCA Interaction Lite*
Satu dashboard untuk mengelola semua chat pelanggan (Multi-channel & Multi-agent) secara responsif.

2. *OCA Blast*
Kirim pesan massal (broadcast) promosi atau notifikasi ke ribuan kontak sekaligus via WhatsApp, SMS, dan Email.

3. *OCA Breaker (Breach Checker)*
Layanan keamanan data untuk mendeteksi dan mencegah kebocoran informasi perusahaan/pelanggan di internet.
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
*OCA Interaction Lite*

Dashboard terpadu untuk mengelola seluruh social media dalam satu pintu. Dirancang khusus bagi bisnis skala kecil (Indibiz) yang membutuhkan fitur komunikasi dua arah yang sederhana, berkualitas, dan dapat diakses kapan saja.

*Target:* Bisnis skala kecil seperti online shop, bimbel, bimbingan belajar, dan koperasi.

*Ketentuan:* Hanya dapat dibeli melalui paket Bundling Indibiz (tidak dijual terpisah).
`,
            features: `
*Fitur OCA Interaction Lite:*

• Omnichannel Inbox: Kelola semua chat pelanggan dari berbagai media sosial dalam satu dashboard.

• AI Assistant: Balas pesan lebih cepat dengan bantuan AI untuk merancang balasan, merangkum chat, dan meningkatkan kualitas pesan.

• Contact Management: Simpan data pelanggan dan berikan label prioritas melalui fitur Contact Tagging.

• Quick Reply & Knowledge Base: Gunakan template pesan seragam dan pusat informasi produk untuk respon agen yang lebih instan.

• Report & Insight: Pantau performa agen dan analisis produktivitas melalui laporan yang mudah digunakan.
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

        breach_checker: {
            name: "OCA Breaker",
            slug: "oca_breach",
            detail: `
*OCA Breaker (Breach Checker)*

Layanan keamanan untuk mendeteksi apakah data perusahaan atau pelanggan (seperti email/nomor telepon) telah bocor di internet (data breach).

*Fitur:*
• Pengecekan kebocoran data secara berkala
• Notifikasi jika ditemukan kebocoran baru
• Laporan detail sumber kebocoran

*Estimasi Harga:*
• Hubungi sales untuk penawaran harga khusus.
`
        }
    }
};

module.exports = oca;