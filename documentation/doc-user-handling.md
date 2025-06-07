# User Handling - Dokumentasi Fungsi

## Deskripsi Umum

`user-handling.js` adalah modul JavaScript untuk menangani tampilan galeri gambar, kartu bintang, dan elemen interaktif lain yang berkaitan dengan user interaction pada halaman bertema artistik. Skrip ini menampilkan gambar, menangani navigasi galeri dengan animasi GSAP, dan mendukung elemen-elemen seperti kartu artis, kartu momen spesial, serta efek paralaks dan transisi.

## Struktur Data

### `photoData`

Objek berisi data untuk grup foto dan artis.

```javascript
{
  'photo-group-1': {
    title: 'Fan Art Gallery',
    description: '...',
    images: [...],
    artists: [...]
  },
  // dst...
}
```

### `starData`

Data masing-masing bintang, berisi judul, gambar, dan deskripsi.

## Fungsi Utama

### `createImageViewer()`

**Tujuan:** Membuat dan menambahkan elemen DOM untuk tampilan gambar penuh (fullscreen viewer).

### `initializeButtonAnimations()`

**Tujuan:** Menambahkan animasi GSAP untuk tombol navigasi (Next/Prev) di viewer.

### `animateImageTransition(direction, callback)`

**Tujuan:** Memberi efek transisi saat berpindah gambar.

### `animateButtonClick(button, callback)`

**Tujuan:** Memberi umpan visual saat tombol diklik dengan efek scale dan glow.

### `updateImageTitle()`

**Tujuan:** Menampilkan judul gambar yang sedang ditampilkan, termasuk nama artis jika ada.

### `updateNavigationButtons()`

**Tujuan:** Mengaktifkan atau menonaktifkan tombol navigasi berdasarkan posisi indeks saat ini.

### `showNextImage()` / `showPrevImage()`

**Tujuan:** Menampilkan gambar selanjutnya/sebelumnya dalam viewer dengan animasi transisi.

### `showImageViewer(images, index, title, artists)`

**Tujuan:** Menampilkan viewer gambar dengan data yang ditentukan.

### `hideImageViewer()`

**Tujuan:** Menutup viewer gambar.

### `showStarCard(starId)` / `hideStarCard()`

**Tujuan:** Menampilkan atau menyembunyikan kartu informasi spesial dari bintang tertentu.

## Interaksi Elemen

### Polaroid Stack (`.polaroid-stack`)

* Hover: Efek zoom dan drop shadow.
* Click: Memunculkan viewer berdasarkan grup gambar.

### Polaroid (`.polaroid`)

* Click: Menampilkan gambar spesifik dari grup.
* Hover: Rotasi berdasarkan posisi.

### Artist Card (`.artist-card`)

* Click: Menampilkan karya artis dalam viewer.

### Star Card (`.main-star`)

* Click: Menampilkan detail momen penting.
* Hover: Animasi scale GSAP.

## Section 3 - Surat Spesial

### `section3Observer`

**Tujuan:** Mengamati kemunculan section dan memicu animasi fade-in.

### Hover Amplop

**Tujuan:** Memberikan efek hovering dan interaksi klik ke halaman surat.

### Scroll Parallax

**Efek:** Menggerakkan gambar amplop secara vertikal sesuai scroll untuk menciptakan kesan kedalaman.

## Event Listener Penting

* `DOMContentLoaded`: Inisialisasi viewer dan animasi tombol.
* `keydown`: Navigasi viewer via keyboard (panah, Escape).
* `click`: Navigasi viewer dan kartu.
* `scroll`: Efek paralaks dan visibilitas animasi.

## Optimasi dan Performa

### `throttle(func, limit)`

**Tujuan:** Menghindari eksekusi berlebih pada fungsi scroll dengan menerapkan pembatasan waktu.