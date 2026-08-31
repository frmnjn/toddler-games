# Games — frmnjn.my.id

Kumpulan game web sederhana (static, vanilla HTML/CSS/JS) yang dibuat untuk anak kecil (toddler). Semua game berjalan penuh di browser — tanpa framework, tanpa build step. Tinggal di-deploy ke static host apa pun.

## Struktur

```
games/
├── index.html        # Halaman utama / launcher — render kartu game dari games.json
├── games.json        # Registry game (id, title, description, icon, url)
├── manifest.json     # PWA manifest untuk launcher ("Alana's Games")
├── sw.js             # Service worker launcher (offline / cache)
├── ant-smasher/      # "Alana's Ant Garden"
│   ├── index.html    # Game: tap semut yang bergerak di taman (pilih bahasa)
│   ├── manifest.json # PWA manifest
│   ├── sw.js         # Service worker (offline / cache)
│   ├── icon-192.png
│   └── icon-512.png
├── shape-sorter/     # "Alana's Shape Garden"
│   ├── index.html    # Game: tap bentuk, muncul nama bentuknya (ID/EN)
│   ├── manifest.json # PWA manifest
│   ├── sw.js         # Service worker (offline / cache)
│   ├── icon-192.png
│   └── icon-512.png
├── rain-garden/      # "Alana's Rain Garden"
│   ├── index.html    # Game: tap tetesan hujan yang jatuh (pilih bahasa, tanpa TTS)
│   ├── manifest.json # PWA manifest
│   ├── sw.js         # Service worker (offline / cache)
│   ├── icon-192.png
│   ├── icon-512.png
│   └── assets/       # SFX raindrop (CC0 — lihat SOURCES.txt)
├── animal-garden/    # "Alana's Animal Garden"
│   ├── index.html    # Game: tap hewan asli, dengar suaranya (pilih bahasa, tanpa TTS)
    ├── manifest.json # PWA manifest
    ├── sw.js         # Service worker (offline / cache)
    ├── icon-192.png
    ├── icon-512.png
    └── assets/       # 9 suara binatang CC0 + 9 gambar (lihat SOURCES.txt)
└── color-garden/     # "Alana's Color Garden"
    ├── index.html    # Game: tap warna, muncul & ucap nama warnanya (ID/EN)
    ├── manifest.json # PWA manifest
    ├── sw.js         # Service worker (offline / cache)
    ├── icon-192.png
    └── icon-512.png
```

## Cara deploy

Project ini 100% static. Cukup upload seluruh isi folder ke static host apa pun (GitHub Pages, Netlify, Vercel, Nginx, dll).

Tidak ada build step — file langsung bisa di-serve.

## Game

### Alana's Ant Garden (`ant-smasher/`)

Game tap santai tanpa skor. Semut berjalan & memantul di dalam area; tap untuk "pop" dengan efek suara *chime*. Setiap beberapa tap muncul *sticker* emoji di atas.

- Ada semut **golden** langka (~7%) dengan suara spesial.
- **Musik latar** digenerate di browser via Web Audio (tanpa file/sample → bebas lisensi).
- **Pilih bahasa** di awal (🇮🇩/🇺🇸) untuk teks hint; tanpa TTS.
- Tombol **fullscreen / kiosk** agar anak tidak sengaja keluar dari app.
- Tombol **suara** untuk on/off musik & efek.
- **Parent lock 🔒** (long-press gembok untuk buka) menyembunyikan tombol kontrol agar anak tak keluar app.

### Alana's Shape Garden (`shape-sorter/`)

Tap bentuk ramah (lingkaran, kotak, segitiga, bintang, hati) yang muncul berwarna-warni; bentuk "pop" dan **mengucapkan nama bentuknya** (via Web Speech API).

- **Pilih bahasa dulu** di awal: 🇮🇩 Bahasa Indonesia atau 🇺🇸 English.
  - Nama bentuk yang diucapkan & ditampilkan ikut bahasa yang dipilih (`id-ID` untuk ID, `en-US` untuk EN).
  - Tombol **🌐** di dalam game untuk ganti bahasa kapan saja.
- Tidak ada skor / angka agar fokus ke sebab-akibat untuk anak.
- Musik latar & efek suara digenerate di browser (bebas lisensi).
- **Parent lock 🔒** (long-press gembok untuk buka).

### Alana's Rain Garden (`rain-garden/`)

Suasana hujan yang tenang. Tetesan hujan jatuh lurus dari atas; tap tetesan → percikan 💧 + suara splash asli. Ada tetesan **besar** (langka) dan **kecil**.

- Tidak ada skor / angka — fokus sensori visual + suara.
- Suara percikan tetesan pakai **SFX asli** (CC0, lisensi bebas komersial, sumber BigSoundBank — lihat `rain-garden/assets/SOURCES.txt`), diputar via Web Audio; fallback ke sintesis jika gagal dimuat.
- Musik latar digenerate di browser (bebas lisensi).
- **Pilih bahasa** di awal (🇮🇩/🇺🇸) untuk teks hint; tanpa TTS.
- **Parent lock 🔒** (long-press gembok untuk buka).

### Alana's Animal Garden (`animal-garden/`)

Taman hewan yang ramai: 9 hewan asli (kucing, anjing, ayam jago, sapi, bebek, kuda, domba, burung hantu, burung) berkeliaran & memantul pelan di taman; tap → **suara aslinya** terputar asli.

- Gambar **asli** (bukan kotak teks): kucing/anjing/burung hantu sebagai *cutout* transparan; sisanya foto asli dalam **stiker bulat** putih.
- Suara pakai **SFX asli** (CC0, BigSoundBank — lihat `animal-garden/assets/SOURCES.txt`), diputar realtime via Web Audio; fallback ke suara sintesis per hewan jika file gagal dimuat.
- **Tanpa TTS** — fokus sebab-akibat suara-gambar; anime pas ditambah *chime* + sticker emoji di atas. Ada **pilih bahasa** (🇮🇩/🇺🇸) untuk teks hint.
- Ada hewan ukuran **besar** (langka) dengan suara lebih keras.
- Musik latar digenerate di browser (bebas lisensi).
- **Parent lock 🔒** (long-press gembok untuk buka).

### Alana's Color Garden (`color-garden/`)

Taman warna-warni: 8 balon warna (merah, biru, hijau, kuning, oren, ungu, pink, coklat) mengambang pelan; tap → balon "pop" dan **mengucapkan nama warnanya**.

- **Pilih bahasa dulu** di awal: 🇮🇩 Bahasa Indonesia atau 🇺🇸 English.
  - Nama warna yang diucapkan & ditampilkan ikut bahasa (`id-ID`/`en-US`). Tombol **🌐** untuk ganti kapan saja.
- Tanpa skor / angka — fokus sebab-akibat + pengenalan warna untuk anak.
- Musik latar & efek digenerate di browser (bebas lisensi).
- **Parent lock 🔒** (long-press gembok untuk buka).

## Parent lock

Semua game punya **tombol gembok 🔓/🔒** di pojok atas. Saat dikunci (🔒), tombol kontrol (🏠, 🌐, ⛶, 🔊, dan link home) disembunyikan sehingga anak tidak mudah keluar app atau mengubah setting. Untuk **membuka kunci**: tekan & tahan gembok ±1,5 detik. Status lock tersimpan di `localStorage` (tetap terkunci setelah reload).

## PWA & offline

Tiap game punya `manifest.json` (standalone, icons maskable) dan `sw.js` berstrategi **network-first untuk HTML + stale-while-revalidate untuk aset** dengan versi cache terpisah (`ant-garden-v2`, `shape-garden-v2`, `rain-garden-v3`, `animal-garden-v2`, `color-garden-v1`), jadi game bisa dipasang ke home screen dan tetap jalan saat offline.

Halaman launcher (`index.html`) juga punya `manifest.json` + `sw.js` sendiri ("Alana's Games") sehingga halaman utama bisa di-install & offline. Konsep tetap **1 game = 1 app**.

## Teknis

- Bahasa UI halaman utama & hint sebagian besar dalam **Bahasa Indonesia** (`lang="id"`).
- Audio efek & musik disintesis dengan Web Audio API, plus **SFX asli** (CC0) untuk rain-garden & animal-garden — semua file lokal, tanpa dependensi eksternal.
- Game state ringan (DOM + `requestAnimationFrame`), cocok untuk perangkat mobile.

Icons & title disesuaikan untuk anak; project ini bersifat pribadi/keluarga.
