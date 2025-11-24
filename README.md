🚀 GS Portal - Government Service Division

"Connecting People, Delivering Excellence."

📖 Tentang Project

GS Portal adalah aplikasi berbasis web yang dikembangkan untuk mempermudah akses informasi internal Divisi Government Service (GS) Telkom Indonesia. Portal ini berfungsi sebagai One-Stop Solution untuk melihat data pegawai, panduan SOP (Flowchart), katalog produk, hingga laporan kinerja.

Project ini dibuat sebagai bagian dari Program Magang (Internship) di PT Telkom Indonesia.

⚡ Fitur Utama (Key Features)

🏠 Dashboard Modern: Tampilan landing page dengan tema "Merah Putih" khas Telkom.

👥 Team Directory: Daftar lengkap Employee & Internship Student dengan UI kartu yang interaktif.

diagram Flowchart SOP: Panduan visual (IO, MO, DO) dengan fitur tab switching dan step-by-step guide.

📦 Product Catalog: Etalase digital layanan unggulan (Indibiz, Astinet, dll).

🚧 Maintenance Page: Halaman placeholder estetis untuk fitur yang sedang dikembangkan (Report & Policy).

🛠️ Teknologi (Tech Stack)

Project ini dibangun dengan pendekatan "Clean & Lightweight", tanpa ketergantungan build tools yang berat.

Tech

Deskripsi

Struktur utama halaman.

Utility-first CSS framework (via CDN) untuk styling sat-set.

Logika interaktif (Tab switcher, Scroll animation, Sidebar load).

Ikon-ikon cantik.

📂 Struktur Folder

Agar tidak tersesat di jalan yang benar, berikut adalah peta direktori project ini:

project-gs-portal/
│
├── index.html # Halaman Utama (Dashboard)
├── README.md # Dokumentasi Project (You are here!)
│
├── pages/ # Halaman Fitur
│ ├── employee.html # Direktori Tim (Pegawai & Magang)
│ ├── flowchart.html # Panduan SOP (IO/MO/DO)
│ ├── product.html # Katalog Produk
│ ├── policy.html # Halaman Policy (Coming Soon)
│ └── report.html # Halaman Report (Under Construction)
│
└── assets/ # Aset Statis
├── css/
│ └── sidebar.css
│
├── js/
│ ├── script.js # Logic utama
│
└── images/ # Gambar & Foto
├── employee/ # Foto Profil Pegawai
├── internship/ # Foto Anak Magang
├── product/ # Logo Produk
├── flowchart/ # Diagram SOP
└── icons/ # GIF & Ikon

🚀 Cara Menjalankan (How to Run)

Karena project ini menggunakan Absolute Path (contoh: /assets/css/...), project ini TIDAK BISA dijalankan hanya dengan double click file HTML.

Wajib menggunakan Local Server:

Opsi 1: VS Code Live Server (Recommended) ⭐

Buka project ini di Visual Studio Code.

Install Extension Live Server (by Ritwick Dey).

Klik kanan pada file index.html.

Pilih "Open with Live Server".

Browser akan otomatis terbuka. Enjoy!

Opsi 2: Python Simple Server

Jika kamu anak terminal sejati:

# Buka terminal di folder project

python -m http.server 8000

# Buka browser: http://localhost:8000

👨‍💻 Author & Credits

Dibuat dengan ❤️ dan ☕ (Kopi) oleh:

Michael Babtista Pakpahan

NIM: 231712092

Role: Frontend Developer (Intern)

Kampus: Universitas Sumatera Utara (Teknik Informatika)

Special Thanks to Mentors:

Pak Asep Abdul Kodir Djaelani (Manager GS)

Kak Veberia Panjaitan (Mentor)

"Coding itu seni, error itu variasi, deadline itu motivasi."
