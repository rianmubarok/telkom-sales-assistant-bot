const path = require('path');

const pijar_sekolah = {
    keywords: [
        "pijar sekolah",
        "pijar",
        "lms sekolah",
        "cbt sekolah",
        "ujian online sekolah",
        "platform pendidikan telkom",
        "konten pendidikan"
    ],
    image: path.join(__dirname, "../../assets/images/pijar.jpg"),
    answer: `
*Pijar Sekolah*

Platform ekosistem digital pendidikan dari Telkom Indonesia yang memfasilitasi sekolah dalam digitalisasi KBM, administrasi, dan ujian. 

Pijar Sekolah tidak hanya menyediakan sistem manajemen (LMS), tetapi juga ribuan konten pendidikan berkualitas yang selaras dengan kurikulum nasional.

*Fitur Unggulan Pijar Sekolah*

1️⃣ *Content Learning Management System*
Akses ribuan video pembelajaran, buku digital, dan lab maya untuk siswa dan guru.

2️⃣ *Computer Based Test (CBT)*
Ujian sekolah/harian berbasis digital yang aman dengan bank soal lengkap dan penilaian otomatis.

3️⃣ *Manajemen Sekolah (SIS)*
Digitalisasi absen, rapor (E-Rapor), jadwal pelajaran, hingga administrasi sekolah.

4️⃣ *Dashboard Monitoring*
Laporan perkembangan belajar siswa secara real-time yang dapat diakses oleh guru dan kepala sekolah.
`,
    contact: `
*Kontak Bantuan Pijar Sekolah:*

📱 *WhatsApp (Chat Only):* [+62 812-8899-9576](https://wa.me/6281288999576)
📧 *Email:* support@pijarsekolah.id
`,
    package_intro: `
*Pilihan Paket Pijar Sekolah*

Berikut adalah kategori layanan Pijar Sekolah yang tersedia:
`,
    terms: `
*Informasi Harga & Berlangganan Pijar Sekolah*

Harga Pijar Sekolah bersifat fleksibel berdasarkan jumlah siswa di sekolah Anda. Skema berlangganan umumnya dilakukan secara tahunan (per tahun ajaran) melalui penawaran resmi Telkom.
`,
    packages: {
        basic_platform: {
            name: "Pijar Sekolah Basic (SaaS)",
            slug: "pijar_basic",
            detail: `
*Pijar Sekolah Basic (Platform Only)*

Layanan cloud platform untuk sekolah yang sudah memiliki infrastruktur internet mandiri.

*Fitur:*
• Akses Full Platform (LMS, CBT, SIS)
• Akses Konten Pendidikan Digital
• Akun Guru & Siswa sesuai jumlah lisensi

*Estimasi Harga:*
• Mulai dari *Rp 5.000 - Rp 15.000 / siswa / bulan*
• (Harga final tergantung jumlah total siswa & durasi kontrak)
`
        },
        connectivity_bundle: {
            name: "Pijar Sekolah Connectivity",
            slug: "pijar_bundling",
            detail: `
*Pijar Sekolah Connectivity (Bundling)*

Solusi terintegrasi antara platform digital pendidikan dengan koneksi internet Dedicated/Broadband Telkom.

*Fitur:*
• Layanan Pijar Sekolah Full Solution
• Konektivitas Internet (Astinet / Indibiz Sekolah)
• Dukungan On-Site Implementation

*Estimasi Harga:*
• *By Quote* (Menyesuaikan dengan kapasitas bandwidth dan lokasi sekolah)
`
        }
    }
};

module.exports = pijar_sekolah;