const indihome = {
    keywords: ["indihome", "wifi rumah", "indihome residensial"],
    image: "https://assets.telkomsel.com/public/2025-08/IH-Cara-Cepat-Pasang-Wi-Fi-IndiHome-dari-MyTelkomsel.jpg?VersionId=mUlRjRNsZgCFkrVrjzTHyZyoazSZYyMm",
    // Konten Menu Utama (Pengertian Umum)
    answer: `
*IndiHome (Residensial/Rumah)*

Layanan internet ultra-cepat menggunakan teknologi fiber optik untuk kebutuhan keluarga. Menawarkan pilihan layanan *Triple Play* yang terdiri dari Internet (WiFi), Telepon Rumah, dan TV Interaktif (UseeTV).

*Kenapa pilih IndiHome?*
• Jaringan terluas di seluruh Indonesia
• Koneksi stabil & cepat dengan Fiber Optik
• Pilihan paket fleksibel sesuai kebutuhan
• Akses hiburan lengkap (Streaming, Games, TV)
`,
    // Konten Menu "Lihat Paket" (Penjelasan Jenis Paket)
    package_intro: `
*Pilihan Jenis Paket IndiHome*

1️⃣ *Paket Internet Only (1P)*
Solusi hemat khusus internet tanpa layanan TV/Telepon.

2️⃣ *Paket IndiHome Netflix (2P)*
Bundling internet cepat + langganan Netflix resmi. Lebih hemat & praktis!

3️⃣ *Paket IndiHome Dynamic (2P/3P)*
Bundling Internet WiFi + Kuota Keluarga Telkomsel dalam satu tagihan.
`,
    // Konten Syarat & Ketentuan
    terms: `
*Syarat & Ketentuan*

1. Harga yang tercantum untuk pembayaran setiap bulannya.

2. Harga belum termasuk PPN sesuai dengan ketentuan yang berlaku.

3. Harga paket IndiHome dapat berbeda sesuai dengan area dan lokasi pemasangan.

4. Promo Biaya Pasang Baru (PSB) IndiHome sebesar 70% menjadi Rp150.000 dibayarkan setelah proses pemasangan perangkat layanan Wifi IndiHome selesai.

5. Pembayaran tagihan bulanan Wifi IndiHome dilakukan setiap tanggal 5-20 di setiap bulannya. Untuk bulan pertama pemakaian, pembayaran dilakukan di bulan selanjutnya. Pembayaran Paket IndiHome menggunakan skema Pasca bayar (Pakai layanan dulu, baru bayar)

6. Kontrak berlangganan Wifi IndiHome berlaku selama minimal 12 (dua belas) bulan setelah layanan Wifi IndiHome berstatus aktif. Apabila pelanggan memutuskan untuk berhenti berlangganan sebelum masa berlaku kontrak berakhir, maka akan dikenakan denda sebesar Rp1.000.000.

7. Khusus Promo Paket Eznet Telkomsel hanya tersedia di kota-kota tertentu. Harga Paket Eznet dapat berbeda sesuai dengan area dan lokasi pemasangan.

8. Pelanggan dilarang menjual kembali, baik sebagian atau seluruh layanan Wifi IndiHome dan dilarang mengalihkan, mengubah, atau menyalahgunakan setiap jaringan IndiHome dan layanan Wifi IndiHome.
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
