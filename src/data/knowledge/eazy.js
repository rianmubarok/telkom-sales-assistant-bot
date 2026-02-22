const path = require('path');

const eazy_cam = {
    keywords: [
        "eazy cam",
        "antares eazy",
        "eazy telkom",
        "cctv cloud",
        "ip camera indibiz",
        "smart security",
        "eazycam",
        "eazy store"
    ],
    image: path.join(__dirname, "../../assets/images/eazy.jpg"),
    answer: `
*Antares Eazy (Eazy Cam)*

Solusi cerdas keamanan berbasis AIoT dari Telkom Indonesia. Eazy Cam mengintegrasikan perangkat IP Camera dengan penyimpanan Cloud Recording di server lokal (Indonesia) untuk menjamin keamanan data tanpa risiko kehilangan rekaman akibat kerusakan perangkat.

*Fitur Unggulan Eazy Cam:*
• *Cloud Recording:* Penyimpanan aman di Data Center Telkom Indonesia.
• *AI Vision:* Deteksi gerakan pintar, deteksi suara, dan notifikasi real-time.
• *Dual Connection:* Varian tertentu mendukung koneksi LAN Port untuk stabilitas tanpa Wi-Fi.
• *Two-Way Audio:* Komunikasi dua arah langsung melalui Eazy App.
`,

    package_intro: `
*Pilihan Layanan Eazy Cam*

Dapatkan layanan melalui pembelian perangkat putus atau paket bundling internet bisnis:
`,
    terms: `
*Informasi Harga & Berlangganan*

1. Harga yang tertera belum termasuk PPN 11%.
2. Pembelian unit baru umumnya sudah termasuk gratis 1 bulan Cloud Recording.
3. Layanan Cloud bersifat perpanjangan otomatis atau menggunakan voucher.
`,
    packages: {
        purchase: {
            name: "Pembelian Perangkat (One Time)",
            slug: "eazy_buy",
            detail: `
*Harga Perangkat Eazy Cam (Official Store)*

• *EazyCam IP Camera Indoor:* ± Rp 448.400
• *EazyCam Duolink (Indoor + LAN Port):* ± Rp 435.000
• *EazyCam Outdoor PRO:* ± Rp 815.000
• *T3 Smart IP Camera Indoor:* ± Rp 385.440

_Harga dapat berubah sewaktu-waktu sesuai promo di Antares Eazy Store._
`
        },
        cloud_subscription: {
            name: "Voucher Cloud Recording",
            slug: "eazy_cloud",
            detail: `
*Paket Penyimpanan Cloud (Voucher)*

• *Basic (7 Hari):* ± Rp 45.510 / bulan
• *Plus (14 Hari):* ± Rp 64.380 / bulan
• *Protect (30 Hari):* ± Rp 137.300 / bulan

_Voucher tersedia untuk durasi 1 bulan, 6 bulan, hingga 12 bulan._
`
        },
        bundling_indibiz: {
            name: "Bundling Paket Indibiz",
            slug: "eazy_bundling",
            detail: `
*Paket HSI Bisnis + Eazy Cam*

Solusi internet bisnis sekaligus pemantauan keamanan:
• *Bundling Eazy 50 Mbps:* ± Rp 422.000 / bulan
• *Bundling Eazy 100 Mbps:* ± Rp 535.000 / bulan

_Sudah termasuk 1 unit IP Camera dan platform monitoring Eazy._
`
        }
    }
};

module.exports = eazy_cam;