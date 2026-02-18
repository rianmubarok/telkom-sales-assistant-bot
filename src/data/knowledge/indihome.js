const path = require('path');

const indihome = {
    keywords: ["indihome", "wifi rumah", "indihome residensial"],
    image: path.join(__dirname, "../../assets/images/indihome.jpg"),
    answer: `
*IndiHome (Residensial/Rumah)*

Layanan internet ultra-cepat menggunakan teknologi fiber optik dari Telkomsel untuk kebutuhan keluarga. Menawarkan paket terintegrasi Internet (WiFi), Telepon Rumah, dan IndiHome TV.

*Kenapa pilih IndiHome?*
• Jaringan terluas di seluruh Indonesia.
• Koneksi stabil & cepat dengan Fiber Optik.
• Pilihan paket hiburan lengkap (Netflix, Disney+, dll).
• Dukungan layanan pelanggan 24/7 melalui 188.
`,
    contact: `
*Kontak Bantuan & Layanan Resmi IndiHome:*

📞 *Call Center:* 188 (24/7)
📱 *WhatsApp (Veronika):* [0811-1111-1111](https://wa.me/6281111111111)
📱 *WhatsApp (Layanan):* [0811-6147-147](https://wa.me/628116147147)
📧 *Email:* cs@telkomsel.com
🌐 *Social Media:* @IndiHome / @IndiHomeCare
`,
    package_intro: `
*Pilihan Jenis Paket IndiHome*

1️⃣ *Paket Internet Only (1P)*
Solusi hemat khusus internet tanpa layanan TV/Telepon.

2️⃣ *Paket IndiHome Netflix (2P)*
Bundling internet cepat + langganan Netflix resmi. Lebih hemat & praktis!

3️⃣ *Paket IndiHome Dynamic (2P/3P)*
Bundling Internet WiFi + Kuota Keluarga Telkomsel dalam satu tagihan.
`,
    terms: `
*Syarat & Ketentuan*

1. Harga belum termasuk PPN 11%.
2. Promo Biaya Pasang Baru (PSB) Rp150.000 dibayarkan setelah pemasangan selesai.
3. Harga dapat berbeda sesuai dengan area dan lokasi pemasangan.
4. Kontrak berlangganan minimal 12 bulan. Pengakhiran sebelum masa kontrak dikenakan denda Rp1.000.000.
5. Pembayaran tagihan dilakukan setiap tanggal 5-20 setiap bulannya (Pascabayar).
`,
    packages: {
        internet_only: {
            name: "Paket Internet Only",
            slug: "ih_internet_only",
            detail: `
*Daftar Harga Paket Internet Only (1P)*

• *20 Mbps:* Rp170.000/bulan
• *50 Mbps:* Rp230.000/bulan
• *75 Mbps:* Rp250.000/bulan
• *150 Mbps:* Rp325.000/bulan
• *200 Mbps:* Rp490.000/bulan

_Harga belum termasuk PPN 11% & biaya pemasangan._
`
        },
        netflix: {
            name: "Paket IndiHome Netflix",
            slug: "ih_netflix",
            detail: `
*Daftar Harga Paket IndiHome Netflix*

• *30 Mbps:* Rp365.000/bulan
• *50 Mbps:* Rp460.000/bulan
• *100 Mbps:* Rp555.000/bulan

_Harga belum termasuk PPN 11% & biaya pemasangan._
`
        },
        dynamic: {
            name: "Paket IndiHome Dynamic",
            slug: "ih_dynamic",
            detail: `
*Daftar Harga Paket IndiHome Dynamic*

• *50 Mbps + 15GB:* Rp270.000/bulan
• *75 Mbps + 15GB:* Rp285.000/bulan
• *150 Mbps + 15GB:* Rp355.000/bulan

_Harga belum termasuk PPN 11% & biaya pemasangan._
`
        },
    },
};

module.exports = indihome;
