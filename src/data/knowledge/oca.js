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
    packages: {
        interaction: {
            name: "OCA Interaction",
            slug: "oca_interaction",
            image: path.join(__dirname, "../../assets/images/oca_interaction_lite.png"),
            pricing_image: path.join(__dirname, "../../assets/images/oca_interaction_lite_price.png"),
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
`,
            pricing: `
*Harga Paket Bundling IndiBiz x OCA Interaction Lite*

• *50 Mbps:* Rp 492.950/bulan
• *75 Mbps:* Rp 582.950/bulan
• *100 Mbps:* Rp 692.950/bulan
• *150 Mbps:* Rp 902.950/bulan

_Add-on OCA Interaction Lite Rp 108.000. Melalui order di SC-ONE dan My Indibiz._
_Biaya Pasang Baru (PSB) untuk Layanan Indibiz add-on sebesar Rp0._

*Syarat & Ketentuan*
1. Biaya belum termasuk PPN.
2. Paket aktif / dapat diorder untuk seluruh Regional.
3. Registrasi paket dilakukan melalui SC One, NCX EBIS, Landing Page Creator EBIS, web myIndibiz.co.id, myIndibiz Partner, dan LPC (IFB) EBIS.
4. Setiap komponen paket (kecuali perangkat) tidak dapat dilakukan order terpisah (ala carte), hanya berlaku dalam penawaran paket bundling.
5. NDE: Strategi Go To Market (GTM) Layanan Indibiz 2S (Netmonk atau OCA) dan Layanan Indibiz add-on. C. Tel. 152/UM 000/COP-G0200000/2023. 14 Juli 2023.
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