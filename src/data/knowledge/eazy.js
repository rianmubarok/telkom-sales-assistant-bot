const path = require('path');

const eazy_cam = {
    keywords: [
        "eazy cam",
        "antares eazy",
        "eazy telkom",
        "cctv cloud",
        "ip camera indibiz",
        "smart security"
    ],
    image: path.join(__dirname, "../../assets/images/eazy.jpg"),
    answer: `
*Antares Eazy (Eazy Cam)*

Solusi cerdas keamanan berbasis IoT dari Telkom Indonesia. Eazy Cam menggunakan IP Camera yang terintegrasi dengan layanan penyimpanan Cloud Recording untuk keamanan data yang lebih terjamin.

*Fitur Unggulan Eazy Cam:*
• *Cloud Recording:* Rekaman disimpan aman di server Telkom, tidak hilang meski kamera dirusak/dicuri.
• *AI Video Analytics:* Deteksi gerakan pintar dan notifikasi instan ke smartphone.
• *Full HD & Night Vision:* Kualitas gambar tajam 1080p bahkan dalam kondisi minim cahaya.
• *Two-Way Audio:* Bisa mendengar dan berbicara melalui kamera secara langsung.
`,
    contact: `
*Kontak Bantuan & Layanan Resmi EasyCam:*

📞 *Layanan Umum:* Melalui ekosistem IndiBiz atau IndiHome
📞 *Call Center (Smart Home IndiHome):* 188
`,
    package_intro: `
*Pilihan Layanan Eazy Cam*

Anda dapat memiliki layanan ini melalui pembelian perangkat, skema sewa, atau bundling internet:
`,
    terms: `
*Informasi Harga & Berlangganan*

1. Harga belum termasuk PPN 11%.
2. Layanan Cloud Recording bersifat langganan bulanan/tahunan.
3. Untuk skema sewa, tersedia minimal kontrak tertentu sesuai kebijakan Telkom.
`,
    packages: {
        purchase: {
            name: "Pembelian Perangkat (One Time)",
            slug: "eazy_buy",
            detail: `
*Harga Perangkat Eazy Cam*

• *Indoor PTZ Camera:* ± Rp 449.000 / unit
• *Outdoor PRO Camera:* ± Rp 815.000 / unit
• *IP Camera AI Lite:* Mulai dari Rp 350.000 / unit

_Sudah termasuk gratis Cloud Recording selama 1 bulan._
`
        },
        cloud_subscription: {
            name: "Langganan Cloud Recording",
            slug: "eazy_cloud",
            detail: `
*Paket Penyimpanan Cloud (Per Kamera)*

• *Cloud Basic (7 Hari):* ± Rp 41.000 / bulan
• *Cloud Plus (14 Hari):* ± Rp 58.000 / bulan
• *Cloud Protect (30 Hari):* ± Rp 96.000 / bulan

_Rekaman akan tersimpan selama periode paket dan terhapus otomatis setelah melewati batas hari._
`
        },
        bundling_indibiz: {
            name: "Bundling IndiBiz",
            slug: "eazy_bundling",
            detail: `
*Paket Bundling Internet IndiBiz*

Dapatkan 1-2 unit IP Camera gratis dengan berlangganan paket internet bisnis:
• *Bundling Eazy 50 Mbps:* ± Rp 422.000 / bulan
• *Bundling Eazy 100 Mbps:* ± Rp 592.000 / bulan

_Harga merupakan bundling internet + layanan monitoring Eazy._
`
        }
    }
};

module.exports = eazy_cam;
