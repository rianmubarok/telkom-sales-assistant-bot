const express = require('express');
const path = require('path');
const multer = require('multer');
const db = require('./db/database');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 3000;

// Set EJS as templating engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/assets', express.static(path.join(__dirname, 'assets'))); // to serve local images if needed

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'public/uploads'));
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, req.body.key + '-' + uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.get('/', async (req, res) => {
    try {
        const contents = await db.getAllContents();
        res.render('index', { contents, successMessage: req.query.success });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading main page");
    }
});

app.get('/edit/:key', async (req, res) => {
    try {
        const key = req.params.key;
        const allContents = await db.getAllContents();
        const item = allContents.find(i => i.key === key);

        if (!item) {
            return res.status(404).send("Konten tidak ditemukan");
        }

        let previewText = item.text || "";

        // Escape HTML tags to prevent XSS and unwanted rendering
        previewText = previewText.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

        // Convert *bold* to <strong>bold</strong>, ignoring escaped chars
        previewText = previewText.replace(/(?<!\\)\*(.*?)(?<!\\)\*/g, "<strong>$1</strong>");
        // Convert _italic_ to <em>italic</em>, ignoring escaped chars
        previewText = previewText.replace(/(?<!\\)_(.*?)(?<!\\)_/g, "<em>$1</em>");
        // Convert `code` to <code>, ignoring escaped chars
        previewText = previewText.replace(/(?<!\\)`(.*?)(?<!\\)`/g, "<code class='bg-gray-100 text-red-600 px-1 py-0.5 rounded'>$1</code>");

        // Remove escaping backslashes from markdown symbols map (\\*, \\_, \\`)
        previewText = previewText.replace(/\\([\*_`])/g, "$1");

        // Handle newlines literally (so enters work exactly like Telegram)
        previewText = previewText.replace(/\n/g, "<br/>");

        if (key === 'faq_list') {
            try {
                item.faqArray = JSON.parse(item.text);

                // MOCK TELEGRAM PREVIEW
                let mockHtml = `<div class="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex flex-col gap-3">`;
                mockHtml += `<div class="text-xs bg-gray-200/50 text-gray-500 font-bold px-3 py-1 rounded-full self-center mb-2">Simulasi Tampilan Bot</div>`;

                item.faqArray.forEach((faq, i) => {
                    mockHtml += `
                        <div class="bg-white px-4 py-3 rounded-2xl rounded-bl-sm shadow-sm border border-gray-100 max-w-[90%] self-start relative">
                            <span class="text-xs font-bold text-blue-600 block mb-1">Pengguna (Pilih Tombol)</span>
                            <div class="text-sm font-medium text-gray-800">${faq.q}</div>
                        </div>
                        <div class="bg-blue-100 px-4 py-3 rounded-2xl rounded-br-sm shadow-sm border border-blue-200 max-w-[90%] self-end relative">
                            <span class="text-xs font-bold text-red-600 block mb-1">Telkom Bot</span>
                            <div class="text-sm text-gray-800">${faq.a}</div>
                        </div>
                    `;
                });
                mockHtml += `</div>`;
                item.htmlPreview = mockHtml;
            } catch (e) {
                item.faqArray = [];
                item.htmlPreview = `<div class="text-red-500 text-sm">Gagal memuat pratinjau daftar FAQ. Format data tidak valid (Error JSON).</div>`;
            }
        } else {
            item.htmlPreview = previewText;
        }

        // Define default images according to their keys
        let defaultImage = '';
        if (key.includes('indibiz')) {
            if (key.includes('basic')) defaultImage = '/assets/images/indibiz/basic.jpg';
            else defaultImage = '/assets/images/indibiz/bisnis.jpg';
        } else if (key.includes('eazy')) {
            defaultImage = '/assets/images/eazy/eazy.jpg';
        } else if (key.includes('oca')) {
            if (key.includes('interaction')) defaultImage = '/assets/images/oca/oca_interaction_lite_price.jpg';
            else if (key.includes('blast')) defaultImage = '/assets/images/oca/oca_blast_lite_price.jpg';
            else if (key.includes('breaker')) defaultImage = '/assets/images/oca/oca_breaker_price.jpg';
        }

        res.render('edit', { item, defaultImage });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error loading edit page");
    }
});

app.post('/update', upload.single('image'), async (req, res) => {
    try {
        const { key, title, text } = req.body;
        if (req.file) {
            const imagePath = '/uploads/' + req.file.filename;

            // Hapus gambar lama bila ada
            const currentData = await db.getContent(key);
            if (currentData && currentData.image_path) {
                const oldImagePath = path.join(__dirname, 'public', currentData.image_path);
                if (fs.existsSync(oldImagePath)) {
                    try {
                        fs.unlinkSync(oldImagePath);
                    } catch (e) {
                        console.error("Gagal menghapus gambar lama:", e);
                    }
                }
            }

            await db.setImage(key, imagePath);
        }

        if (key && text && title) {
            await db.setContent(key, text, title);
        }
        res.redirect('/?success=true');
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating content");
    }
});

// Global Error Handler Middleware
app.use((err, req, res, next) => {
    console.error("Unhandled Express Error:", err);
    res.status(500).json({
        error: "Terjadi kesalahan internal pada server.",
        message: err.message
    });
});

const startServer = () => {
    app.listen(port, () => {
        console.log(`Admin server running on http://localhost:${port}/`);
    });
};

module.exports = startServer;
