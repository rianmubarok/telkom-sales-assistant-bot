const path = require('path');

const oca = {
    keywords: [
        "oca",
        "omni communication assistant",
        "oca interaction lite",
        "oca blast lite",
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

2. *OCA Blast Lite*
Kirim pesan massal (broadcast) promosi atau notifikasi ke ribuan kontak sekaligus via WhatsApp, SMS, dan Email.

3. *OCA Breaker (Breach Checker)*
Layanan keamanan data untuk mendeteksi dan mencegah kebocoran informasi perusahaan/pelanggan di internet.
`,
    packages: {
        interaction: {
            name: "OCA Interaction Lite",
            slug: "oca_interaction",
            image: path.join(__dirname, "../../assets/images/oca_interaction_lite.png"),
            pricing_image: path.join(__dirname, "../../assets/images/oca_interaction_lite_price.png"),
            comparison_image: path.join(__dirname, "../../assets/images/oca_interaction_lite_paket.jpg"),
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
_Biaya Pasang Baru (PSB) untuk Layanan Indibiz add-on sebesar Rp 0._

*Syarat & Ketentuan*
1. Biaya belum termasuk PPN.
2. Paket aktif / dapat diorder untuk seluruh Regional.
3. Registrasi paket dilakukan melalui SC One, NCX EBIS, Landing Page Creator EBIS, web myIndibiz.co.id, myIndibiz Partner, dan LPC (IFB) EBIS.
4. Setiap komponen paket (kecuali perangkat) tidak dapat dilakukan order terpisah (ala carte), hanya berlaku dalam penawaran paket bundling.
5. NDE: Strategi Go To Market (GTM) Layanan Indibiz 2S (Netmonk atau OCA) dan Layanan Indibiz add-on. C. Tel. 152/UM 000/COP-G0200000/2023. 14 Juli 2023.
`,
            comparison: `
*Perbandingan Paket OCA Interaction*

*1. Interaction Lite*
Untuk UMKM dengan kebutuhan dasar CS.
• *Harga:* Mulai Rp 108.000,-
• *Agen:* 1 lisensi
• *Beli:* Bundling Indibiz
• *Channel:* FB, IG, TikTok Seller
• *AI Assistant:* Termasuk
• *Ticketing:* Add-on
• *Label:* 5 label (bisa add-on)

*2. Interaction Lite+*
Untuk bisnis menengah yang butuh channel lebih luas.
• *Harga:* Mulai Rp 600.000,-
• *Agen:* Unlimited +1
• *Beli:* NCX
• *Channel:* Termasuk WhatsApp & Telegram
• *AI Assistant:* Termasuk
• *Ticketing:* Add-on
• *Label:* Unlimited

*3. Interaction (Standar)*
Untuk perusahaan besar & instansi.
• *Harga:* Mulai Rp 1.399.000,-
• *Agen:* Unlimited +1
• *Beli:* NCX
• *Channel:* Lengkap (Call & Email)
• *AI Assistant:* Termasuk
• *Ticketing:* Termasuk
• *Label:* Unlimited

*Catatan Penting*
• Lite hanya bisa dibeli bundling Indibiz  
• Lite punya laporan terbatas  
• Lite bisa upgrade fitur via add-on (Rp 91.000 – Rp 353.000/bulan)
`
        },
        blast: {
            name: "OCA Blast Lite",
            slug: "oca_blast",
            image: path.join(__dirname, "../../assets/images/oca_blast_lite.jpg"),
            pricing_image: path.join(__dirname, "../../assets/images/oca_blast_lite_price.png"),
            comparison_image: path.join(__dirname, "../../assets/images/oca_blast_lite_paket.jpg"),
            detail: `
*OCA Blast Lite*

Layanan untuk mengirimkan pesan massal (broadcast) ke berbagai saluran komunikasi hanya dari satu dashboard. Dirancang bagi bisnis skala kecil agar dapat menjangkau pelanggan secara cepat dan efisien untuk kebutuhan promosi hingga notifikasi penting.

*Target:* Bisnis skala kecil (UMKM) seperti online shop, bimbingan belajar, restoran rumahan, dan koperasi.

*Ketentuan:* Hanya dapat dibeli melalui paket Bundling Indibiz (tidak dijual terpisah).
`,
            features: `
*Fitur OCA Blast Lite:*

• Multi-Channel Blast: Kirim pesan massal sekaligus melalui saluran WhatsApp, SMS, dan Email.

• Dashboard Overview: Pantau sisa kuota setiap channel, persentase keberhasilan pengiriman, dan riwayat aktivitas blast secara real-time.

• Contact Management: Atur data konsumen secara efektif dan gunakan fitur Group Contact untuk mengirim promo ke kelompok pelanggan tertentu.

• File Management: Atur dan simpan file media kebutuhan broadcast dalam satu folder penyimpanan yang terintegrasi.

• Instant Broadcast: Fitur untuk menyebarkan pesan ke ribuan kontak dalam hitungan detik kapan saja dan di mana saja.
`,
            pricing: `
*Harga Paket Bundling IndiBiz x OCA Blast Lite*

• *50 Mbps:* Rp 623.900/bulan (HSI Bisnis Basic) | Rp 668.900/bulan (HSI Bisnis)
• *75 Mbps:* Rp 676.900/bulan (HSI Bisnis Basic) | Rp 746.900/bulan (HSI Bisnis)
• *100 Mbps:* Rp 781.900/bulan (HSI Bisnis Basic) | Rp 891.900/bulan (HSI Bisnis)
• *150 Mbps:* Rp 916.900/bulan (HSI Bisnis Basic) | Rp 1.036.900/bulan (HSI Bisnis)

_Add-on OCA Blast Lite Rp 263.000. Melalui order di SC-ONE and My Indibiz._

*Fitur Basic (Sudah Termasuk):*
50 Kuota & 5 Template (WhatsApp, SMS, Email), 1 Contact Group, dan 50MB Storage.

*Syarat & Ketentuan*
1. Biaya belum termasuk PPN.
2. Paket aktif / dapat diorder untuk seluruh Regional.
3. Registrasi dilakukan melalui SC One, NCX EBIS, Landing Page Creator EBIS, atau myIndibiz.
4. Komponen paket tidak dapat diorder terpisah (ala carte), hanya berlaku dalam penawaran bundling.
`,
            comparison: `
*Perbandingan Paket OCA Blast*

*1. Blast Lite*
Untuk UMKM dan broadcast sederhana.
• *Harga:* Mulai Rp 263.000,-
• *Channel:* SMS & WhatsApp
• *Quota:* 50 / channel
• *Template:* 5 (bisa add-on)
• *Beli:* Bundling Indibiz

*2. Blast Lite+*
Untuk bisnis menengah dengan satu channel utama.
• *Harga:* Mulai Rp 900.000,-
• *Channel:* Pilih 1 (WA / SMS / Email)
• *Quota:* Sesuai pemakaian
• *Template:* Unlimited
• *Beli:* NCX

*3. Blast (Standar)*
Untuk perusahaan besar & instansi.
• *Harga:* Mulai Rp 1.800.000,-
• *Channel:* Omnichannel lengkap (termasuk Call & Email)
• *Quota:* Sesuai pemakaian
• *Template:* Unlimited
• *Beli:* NCX

*Add-On (Lite)*
• Tambah quota  
• Unlimited template  
• Scheduler, API, & storage
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