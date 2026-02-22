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
• Bundling solusi digital (CCTV).

*Pilihan Paket IndiBiz*

1. *Paket Basic*: Solusi internet hemat tanpa FUP untuk usaha rintisan/SME.
Rasio Kecepatan 1:2 (Upload:Download)

2. *Paket Bisnis*: Internet dengan performa lebih tinggi dan stabil untuk kebutuhan operasional intensif.
Rasio Kecepatan 1:1 (Upload:Download)
`,

    packages: {
        basic: {
            name: "Paket Basic",
            slug: "ib_basic",
            image: path.join(__dirname, "../../assets/images/basic.jpg"),
            detail: `
*Daftar Harga Paket Basic*

• *50 Mbps:* Rp 320.000/bulan
• *75 Mbps:* Rp 365.000/bulan
• *100 Mbps:* Rp 440.000/bulan
• *150 Mbps:* Rp 540.000/bulan
• *200 Mbps:* Rp 675.000/bulan
• *300 Mbps:* Rp 950.000/bulan

*Syarat & Ketentuan*
1. Harga belum termasuk PPN 11%.
2. Biaya Pasang Baru (PSB) Rp150.000 dibayarkan di awal saat instalasi.
3. Layanan khusus untuk segmen bisnis/badan usaha.
4. Mendapatkan akses ke dashboard Indibiz untuk monitoring layanan.
`
        },
        business: {
            name: "Paket Bisnis",
            slug: "ib_business",
            image: path.join(__dirname, "../../assets/images/bisnis.jpg"),
            detail: `
*Daftar Harga Paket Bisnis*

• *50 Mbps:* Rp355.000/bulan
• *75 Mbps:* Rp415.000/bulan
• *100 Mbps:* Rp535.000/bulan
• *150 Mbps:* Rp620.000/bulan
• *200 Mbps:* Rp790.000/bulan
• *300 Mbps:* Rp1.130.000/bulan

*Syarat & Ketentuan*
1. Harga belum termasuk PPN 11%.
2. Biaya Pasang Baru (PSB) Rp150.000 dibayarkan di awal saat instalasi.
3. Layanan khusus untuk segmen bisnis/badan usaha.
4. Mendapatkan akses ke dashboard Indibiz untuk monitoring layanan.
`
        }
    }
};

module.exports = indibiz;
