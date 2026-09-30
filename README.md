# Website PUI Literasi dan Seni dalam Pendidikan (UNIMED)

Vite + React + React Router.

## Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # hasil di folder dist/
```

## Mengubah isi

- Semua teks ada di `src/data/content.js` (menu, sejarah, program, visi-misi, anggota, kontak).
- Menandai halaman selesai: ubah `ready: false` menjadi `ready: true` di menu, lalu buat halamannya
  di `src/pages/` dan daftarkan di `readyPages` pada `src/App.jsx`.
- Logo: ganti `public/logo.svg` dengan logo asli (nama file boleh sama).
- Warna: ubah token di bagian atas `src/styles.css`.

## Struktur

```
src/
  components/  Navbar, Hero (carousel), Footer, PageHeader, Layout
  pages/       Home, Sejarah, ProgramKerja, VisiMisi, Struktur, Anggota, ComingSoon
  data/        content.js
  styles.css
```
