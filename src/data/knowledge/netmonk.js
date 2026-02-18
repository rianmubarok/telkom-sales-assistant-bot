const path = require('path');

const netmonk = {
    keywords: [
        "netmonk",
        "netmonk prime",
        "netmonk hi",
        "monitoring jaringan",
        "network monitoring",
        "monitoring server",
        "web monitoring"
    ],
    image: path.join(__dirname, "../../assets/images/netmonk.jpg"),
    answer: `
*Netmonk*

Solusi monitoring infrastruktur IT berbasis di Indonesia yang membantu bisnis memantau kesehatan jaringan, server, dan aplikasi secara real-time melalui satu dashboard terintegrasi.

Netmonk memberikan notifikasi proaktif sebelum gangguan terjadi, sehingga tim IT dapat melakukan penanganan lebih cepat untuk menjaga kelangsungan operasional bisnis.
`,
    contact: `
*Kontak Bantuan Netmonk:*

📱 *WhatsApp Support:* [+62 811-1720-237](https://wa.me/628111720237)
🌐 *Help Center:* [netmonk.id/helpcenter/contact-us](https://netmonk.id/helpcenter/contact-us)
`,
    package_intro: `
*Produk Utama Netmonk*

Berikut adalah varian produk monitoring dari Netmonk:

1️⃣ *Netmonk Prime*
Solusi monitoring all-in-one untuk jaringan (SNMP), server, dan API/Web dalam satu platform.

2️⃣ *Netmonk Hi*
Monitoring koneksi internet broadband yang dikhususkan untuk pengguna layanan internet bisnis (seperti Indibiz).

3️⃣ *Netmonk Service*
Layanan kustomisasi dan managed service untuk kebutuhan monitoring skala enterprise yang kompleks.
`,
    terms: `
*Informasi Harga & Berlangganan Netmonk*

Harga Netmonk menggunakan skema berlangganan (subscription) berdasarkan jumlah perangkat/node yang dimonitor. Tersedia uji coba gratis (Free Trial) selama 14 hari.
`,
    packages: {
        prime: {
            name: "Netmonk Prime",
            slug: "netmonk_prime",
            detail: `
*Netmonk Prime*

Platform monitoring komprehensif untuk infrastruktur IT perusahaan.

*Manfaat:*
• Monitoring Router, Switch, & Server (CPU, RAM, Storage)
• Monitoring ketersediaan Website/API
• Notifikasi via WhatsApp, Telegram, & Email
• Laporan PDF otomatis sekali klik

*Estimasi Harga:*
• Mulai dari *Rp 156.000 / bulan* (tergantung jumlah perangkat/node)
`
        },
        hi: {
            name: "Netmonk Hi",
            slug: "netmonk_hi",
            detail: `
*Netmonk Hi*

Solusi monitoring instan yang difokuskan pada pemantauan kualitas link internet broadband.

*Manfaat:*
• Pantau trafik internet secara real-time
• Analisis penggunaan bandwidth
• Dashboard yang sangat user-friendly untuk UKM

*Estimasi Harga:*
• Umumnya tersedia sebagai *add-on* atau *bundling* paket Indibiz
• Hubungi sales untuk harga spesifik paket bundling
`
        },
        enterprise: {
            name: "Netmonk Enterprise",
            slug: "netmonk_enterprise",
            detail: `
*Netmonk Enterprise / Custom*

Solusi monitoring skala besar yang disesuaikan dengan kebutuhan spesifik infrastruktur IT korporasi.

*Manfaat:*
• Monitoring ribuan perangkat/node
• Deployment on-premise atau cloud
• Dukungan teknis prioritas & kustomisasi fitur

*Estimasi Harga:*
• *Harga Custom* (Berdasarkan jumlah node & modul yang dipilih)
`
        }
    }
};

module.exports = netmonk;
