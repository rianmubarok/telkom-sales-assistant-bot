const path = require('path');

const indibiz = {
    keywords: ["indibiz", "wifi bisnis", "internet bisnis", "umkm"],
    image: path.join(__dirname, "../../assets/images/indibiz.jpg"),
    answer: `
*IndiBiz (Solusi Bisnis)*

Ekosistem solusi digital dari Telkom Indonesia yang dirancang khusus untuk mendukung operasional bisnis UMKM hingga korporasi.

*Keunggulan IndiBiz:*
• Internet High Speed **Tanpa FUP** (Tanpa batasan kuota).
• Koneksi prioritas yang lebih stabil untuk bisnis.
• Support teknis prioritas melalui channel khusus.
• Bundling solusi digital (CCTV, Kasir digital, Cloud, dll).
`,
    contact: `
*Kontak Bantuan & Layanan Resmi IndiBiz:*

📞 *Call Center:* 1500-250 / 0800-1-835566
📱 *WhatsApp:* [0812-5888-1915](https://wa.me/6281258881915) / [0812-8323-5566](https://wa.me/6281283235566)
📧 *Email:* indibizID.care@telkom.co.id
`,
    package_intro: `
*Pilihan Paket IndiBiz*

1️⃣ *Paket Basic*
Solusi internet hemat tanpa FUP untuk usaha rintisan/SME.

2️⃣ *Paket Bisnis*
Internet dengan performa lebih tinggi dan stabil untuk kebutuhan operasional intensif.
`,
    terms: `
*Syarat & Ketentuan IndiBiz*

1. Harga belum termasuk PPN 11%.
2. Biaya Pasang Baru (PSB) Rp150.000 dibayarkan di awal saat instalasi.
3. Layanan khusus untuk segmen bisnis/badan usaha.
4. Mendapatkan akses ke dashboard Indibiz untuk monitoring layanan.
`,
    packages: {
        basic: {
            name: "Lihat Paket Basic",
            slug: "ib_basic",
            detail: `
*Daftar Harga Paket Basic*

• *50 Mbps:* Rp320.000/bulan
• *75 Mbps:* Rp365.000/bulan
• *100 Mbps:* Rp440.000/bulan
• *150 Mbps:* Rp540.000/bulan
• *200 Mbps:* Rp675.000/bulan
• *300 Mbps:* Rp950.000/bulan

_Harga belum termasuk PPN 11% & biaya pemasangan._
`
        },
        business: {
            name: "Lihat Paket Bisnis",
            slug: "ib_business",
            detail: `
*Daftar Harga Paket Bisnis*

• *50 Mbps:* Rp355.000/bulan
• *75 Mbps:* Rp415.000/bulan
• *100 Mbps:* Rp535.000/bulan
• *150 Mbps:* Rp620.000/bulan
• *200 Mbps:* Rp790.000/bulan
• *300 Mbps:* Rp1.130.000/bulan

_Harga belum termasuk PPN 11% & biaya pemasangan._
`
        }
    }
};

module.exports = indibiz;
