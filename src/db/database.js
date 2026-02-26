const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const dbPath = path.join(__dirname, '../../bot.db');
const db = new sqlite3.Database(dbPath);

const defaultContents = [
    {
        key: 'eazy_cam_pricing',
        title: 'Eazy Cam Pricing',
        text: `*Harga Perangkat Eazy Cam*

• *EazyCam IP Camera Indoor:* ± Rp 50.000
• *EazyCam IP Camera Outdoor:* ± Rp 85.000

_Harga dapat berubah sewaktu-waktu sesuai promo._

*Informasi Tambahan & Berlangganan:*
Harga yang tertera belum termasuk PPN 11%.`
    },
    {
        key: 'eazy_cam_cloud_pricing',
        title: 'Eazy Cam Cloud Pricing',
        text: `*Voucher Cloud Recording*

Basic
• *7 Hari 1 Bulan* ± Rp 45.510
• *7 Hari 3 Bulan* ± Rp 137.307 
• *7 Hari 6 Bulan* ± Rp 273.615 
• *7 Hari 12 Bulan* ± Rp 545.898 

Plus
• *14 Hari 1 Bulan* ± Rp 64.380
• *14 Hari 3 Bulan* ± Rp 193.140 
• *14 Hari 6 Bulan* ± Rp 386.280 
• *14 Hari 12 Bulan* ± Rp 772.560 

Protect Plus
• *30 Hari 1 Bulan* ± Rp 106.560
• *30 Hari 3 Bulan* ± Rp 319.125 
• *30 Hari 6 Bulan* ± Rp 627.150 
• *30 Hari 12 Bulan* ± Rp 1.270.950 

_Harga dapat berubah sewaktu-waktu sesuai promo._`
    },
    {
        key: 'indibiz_paket_basic',
        title: 'IndiBiz Paket Basic',
        text: `*Daftar Harga Paket Basic*

• *50 Mbps:* Rp 320.000/bulan
• *75 Mbps:* Rp 365.000/bulan
• *100 Mbps:* Rp 440.000/bulan
• *150 Mbps:* Rp 540.000/bulan
• *200 Mbps:* Rp 675.000/bulan
• *300 Mbps:* Rp 950.000/bulan

*Syarat & Ketentuan*
1. Harga belum termasuk PPN 11%.
2. Biaya Pasang Baru (PSB) Rp 150.000 dibayarkan di awal saat instalasi.
3. Layanan khusus untuk segmen bisnis/badan usaha.
4. Mendapatkan akses ke dashboard Indibiz untuk monitoring layanan.`
    },
    {
        key: 'indibiz_paket_bisnis',
        title: 'IndiBiz Paket Bisnis',
        text: `*Daftar Harga Paket Bisnis*

• *50 Mbps:* Rp 355.000/bulan
• *75 Mbps:* Rp 415.000/bulan
• *100 Mbps:* Rp 535.000/bulan
• *150 Mbps:* Rp 620.000/bulan
• *200 Mbps:* Rp 790.000/bulan
• *300 Mbps:* Rp 1.130.000/bulan

*Syarat & Ketentuan*
1. Harga belum termasuk PPN 11%.
2. Biaya Pasang Baru (PSB) Rp 150.000 dibayarkan di awal saat instalasi.
3. Layanan khusus untuk segmen bisnis/badan usaha.
4. Mendapatkan akses ke dashboard Indibiz untuk monitoring layanan.`
    },
    {
        key: 'oca_interaction_lite',
        title: 'OCA Interaction Lite Pricing',
        text: `*Harga Paket Bundling IndiBiz x OCA Interaction Lite*

• *50 Mbps:* Rp 492.950/bulan
• *75 Mbps:* Rp 582.950/bulan
• *100 Mbps:* Rp 692.950/bulan
• *150 Mbps:* Rp 902.950/bulan

_Add-on OCA Interaction Lite Rp 108.000. Melalui order di SC-ONE dan My Indibiz._
_Biaya Pasang Baru (PSB) untuk Layanan Indibiz add-on sebesar Rp 0._

*Syarat & Ketentuan*
1. Biaya belum termasuk PPN.
2. Paket aktif / dapat diorder untuk seluruh Regional.
3. Registrasi dilakukan melalui SC One, NCX EBIS, Landing Page Creator EBIS, atau myIndibiz.
4. Komponen paket tidak dapat diorder terpisah (ala carte), hanya berlaku dalam penawaran bundling.`
    },
    {
        key: 'oca_blast_lite',
        title: 'OCA Blast Lite Pricing',
        text: `*Harga Paket Bundling IndiBiz x OCA Blast Lite*

HSI Bisnis (HSIE)
• *50 Mbps:* Rp 668.900/bulan
• *75 Mbps:* Rp 746.900/bulan
• *100 Mbps:* Rp 891.900/bulan
• *150 Mbps:* Rp 1.036.900/bulan
• *200 Mbps:* Rp 1.261.900/bulan
• *300 Mbps:* Rp 1.708.900/bulan

HSI Bisnis Basic (HSIEF)
• *50 Mbps:* Rp 623.900/bulan 
• *75 Mbps:* Rp 676.900/bulan 
• *100 Mbps:* Rp 781.900/bulan 
• *150 Mbps:* Rp 916.900/bulan 
• *200 Mbps:* Rp 1.094.900/bulan 
• *300 Mbps:* Rp 1.470.900/bulan 

_Add-on OCA Blast Lite Rp 263.000. Melalui order di SC-ONE and My Indibiz._

*Fitur Basic (Sudah Termasuk):*
50 Kuota & 5 Template (WhatsApp, SMS, Email), 1 Contact Group, dan 50MB Storage.

*Syarat & Ketentuan*
1. Biaya belum termasuk PPN.
2. Paket aktif / dapat diorder untuk seluruh Regional.
3. Registrasi dilakukan melalui SC One, NCX EBIS, Landing Page Creator EBIS, atau myIndibiz.
4. Komponen paket tidak dapat diorder terpisah (ala carte), hanya berlaku dalam penawaran bundling.`
    },
    {
        key: 'oca_breaker',
        title: 'OCA Breaker Pricing',
        text: `*Harga Layanan OCA Breaker*

• *Add-on Indibiz:* Rp 35.000 /bulan
• *OCA Dashboard:* Rp 50.000 /email/bulan
  _(Harga termasuk pajak: Rp 55.500 /bulan)_

*Mekanisme Layanan:*
1. Pengecekan pertama H+1 setelah aktivasi, hasil dikirim melalui email.
2. Pengecekan rutin dilakukan selama masa berlangganan.
3. Notifikasi kebocoran baru dikirim via Email (30 hari pertama) dan WhatsApp (seterusnya).`
    },
    {
        key: 'testimoni_pijar',
        title: 'Testimoni PIJAR Sekolah',
        text: `*Testimoni PIJAR Sekolah*

[SMP N 1 Berbah](https://vt.tiktok.com/ZSmmKC7fW/)
_"Setelah menggunakan Pijar, kami mengubah seluruh ujian menggunakan Pijar. Fitur yang bermanfaat saat menggunakan Pijar yaitu remote block karena dapat mengantisipasi kecurangan dari anak-anak."_

[SMP N 1 Cangkringan](https://vt.tiktok.com/ZSmmEBKxP/)
_"Kami menggunakan Pijar dalam pelaksanaan pembelajaran. Pijar digunakan oleh kami untuk mendata kehadiran, melaksanakan assesment, dan memberikan tugas secara berkala. Dan itu membuat kemudahan bagi bapak & ibu guru di SMP N 1 Cangkringan."_

[SMP N 3 Pakem](https://vt.tiktok.com/ZSmmEjwWH/)
_"Sebelum menggunakan aplikasi Pijar, kami mengalami banyak kendala. Melalui aplikasi Pijar, SMP N 3 Pakem yang memiliki program latihan uji kompetensi di rumah masing-masing dapat diakses dengan mudah oleh anak-anak dan memudahkan guru untuk merekap nilai."_

[SMP N 1 Paguyaman Pantai](https://vt.tiktok.com/ZSmXwo1BS/)
_"Sebagai kepala sekolah saya melihat langsung dampak positif dari penggunaan aplikasi Pijar khususnya dalam sistem absensi online. Data kehadiran bisa lebih akurat dan transparan, bisa dipantau secara real time oleh kepala sekolah dan admin sehingga pengawasan terhadap kedisiplinan GTK jadi lebih efektif."_

[SMP Muhammadiyah 33 Tomang](https://vt.tiktok.com/ZSmudXPNH/)
_"Pijar kami menggunakannya untuk assesment, pembelajaran, dan lain lain. Alhamdulillah produk Telkom yang kita gunakan sangat bermanfaat dan lancar dalam kegiatan pembelajaran dan juga kegiatan ANBK."_`
    },
    {
        key: 'testimoni_netmonk',
        title: 'Testimoni Netmonk',
        text: `*Testimoni Netmonk*

[BPR Bina Langgeng Mulia, Solo](https://vt.tiktok.com/ZSmmEuUXj/)
_"Setelah menggunakan produk Telkom yang kami rasakan yaitu kecepatan dan kestabilan sehingga operasional dengan kantor-kantor cabang kami berjalan dengan bagus."_`
    },
    {
        key: 'testimoni_oca',
        title: 'Testimoni OCA',
        text: `*Testimoni OCA*

[@mirantiarn (TikTok)](https://vt.tiktok.com/ZSmud6JFr/)
_"Dengan adanya OCA semua pesan dari customer aku dan semua sosial media ada di satu dashboard. Jadi gak ada chat customer yang terlewat dan nggak kebales."_`
    },
    {
        key: 'testimoni_eazy',
        title: 'Testimoni Antares Eazy Cam',
        text: `*Testimoni Antares Eazy Cam*

[Testimoni 1](https://vt.tiktok.com/ZSmuRU3sR/) | [Testimoni 2](https://vt.tiktok.com/ZSmuRXMLT/) | [Testimoni 3](https://vt.tiktok.com/ZSmu8sFN1/)`
    },
    {
        key: 'kontak_admin',
        title: 'Kontak Admin',
        text: `📞 *Kontak Pusat Bantuan & Layanan Telkom Group*

*Layanan Publik & IndiBiz:*
• Call Center 24 Jam: 147 (Telkom / Umum)
• Call Center IndiBiz: 1500-250 / 0800-1-835566
• Twitter: @TENESA\\_TELKOM
• Telegram: Tenesa\\_Telkom\\_Bot
• WhatsApp IndiBiz: 0812-5888-1915 / 0812-8323-5566
• Email: indibizID.care@telkom.co.id

*OCA Indonesia (Omnichannel):*
• Facebook: OCA Indonesia
• Instagram: @oca.indonesia
• WhatsApp OCA Information: 0811-1069-1011
• Email Support: cs@ocatelkom.co.id
• Helpdesk: Live Chat via ocaindonesia.co.id

*PIJAR Sekolah:*
• WhatsApp Chat: 0812-8899-9576
• Email: support@pijarsekolah.id

*Netmonk (Monitoring):*
• WhatsApp Support: 0811-1720-237
• Help Center: netmonk.id/helpcenter/contact-us

*Antares Eazy / Eazy Cam:*
• Call Center Antares: 188

*Kunjungan Langsung (Telkom Jepara):*
Jl. Pemuda No.3, Potroyudan XI, Potroyudan
Kec. Jepara, Kabupaten Jepara, Jawa Tengah 59412
*Telepon:* 0800 1835566`
    },
    {
        key: 'faq_list',
        title: 'FAQ List',
        text: JSON.stringify([
            {
                q: "Bagaimana proses penginputan Pasang Baru (PSB)?",
                a: "Input data pelanggan dapat dilakukan melalui aplikasi *MyIndiBiz* atau portal internal *Starclick*. Pastikan KTP, NIB/NPWP (jika badan usaha), foto lokasi usaha, nomor HP/WA aktif, dan titik koordinat (shareloc) sudah sesuai."
            },
            {
                q: "Apa selling point utama IndiBiz ke B2B/UMKM?",
                a: "*IndiBiz* menargetkan segmen B2B/UMKM dengan keunggulan utama: Rasio upload dan download simetris (1:1), opsi IP Public, serta prioritas kecepatan penanganan gangguan dibanding layanan residensial."
            },
            {
                q: "Kapan tanggal cetak tagihan dan jatuh tempo?",
                a: "Jatuh tempo pembayaran setiap bulannya adalah tanggal 20. Jika tagihan belum dibayarkan melalui tanggal tersebut, maka status layanan akan berubah menjadi isolir otomatis."
            },
            {
                q: "Bagaimana cara memproses penjualan Add-on (Upgrade Speed, dll)?",
                a: "Penawaran Add-on (seperti Upgrade Speed, Minipack Channel TV, atau Catchplay) bisa diajukan via *MyIndiBiz* menu Add-on, atau diproses melalu TL/Sales Force."
            },
            {
                q: "Siapa target pasar (target market) untuk Pijar Sekolah?",
                a: "Target utamanya adalah sekolah dari jenjang SD, SMP, hingga SMA/SMK (Negeri maupun Swasta). Sekolah bisa berlangganan modul digital (absensi, ujian online) dan dapat dipaketkan (bundling) dengan internet."
            }
        ])
    }
];

db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS contents (
        key TEXT PRIMARY KEY,
        title TEXT,
        text TEXT,
        image_path TEXT
    )`);

    const stmt = db.prepare("INSERT OR IGNORE INTO contents (key, title, text) VALUES (?, ?, ?)");
    for (let i = 0; i < defaultContents.length; i++) {
        stmt.run(defaultContents[i].key, defaultContents[i].title, defaultContents[i].text);
    }
    stmt.finalize();
    console.log("Database checked and initialized with default values.");
});

const getContent = (key) => {
    return new Promise((resolve, reject) => {
        db.get('SELECT text, image_path FROM contents WHERE key = ?', [key], (err, row) => {
            if (err) reject(err);
            resolve(row ? row : null);
        });
    });
};

const setContent = (key, text, title) => {
    return new Promise((resolve, reject) => {
        db.run('UPDATE contents SET text = ?, title = ? WHERE key = ?', [text, title, key], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

const setImage = (key, imagePath) => {
    return new Promise((resolve, reject) => {
        db.run('UPDATE contents SET image_path = ? WHERE key = ?', [imagePath, key], function (err) {
            if (err) reject(err);
            resolve(this.changes);
        });
    });
};

const getAllContents = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM contents', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

const closeDatabase = () => {
    return new Promise((resolve, reject) => {
        db.close((err) => {
            if (err) reject(err);
            resolve();
        });
    });
};

module.exports = {
    db,
    getContent,
    setContent,
    setImage,
    getAllContents,
    closeDatabase
};
