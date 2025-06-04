# Starlight Letter - Dokumentasi Fungsi

## Deskripsi Umum
Starlight Letter adalah aplikasi web interaktif untuk menampilkan pesan-pesan ulang tahun dalam bentuk kartu yang dapat diklik. Aplikasi ini memiliki tiga kategori utama: Guest Star, Pingstar, dan Moderator. Setiap kartu dapat berisi teks, gambar, dan file audio.

## Struktur Data

### `categoryData`
Objek utama yang berisi semua data untuk setiap kategori pesan.

**Struktur:**
```javascript
{
  guestStar: {
    messages: Array<string>,
    usernames: Array<string>, 
    images: Array<string|null>,
    voices: Array<string|null>
  },
  pingstar: { /* struktur sama */ },
  moderator: { /* struktur sama */ }
}
```

### `categoryCounters`
Objek untuk melacak indeks saat ini untuk setiap kategori.

## Fungsi Utilitas

### `cleanupFullscreenListeners()`
**Tujuan:** Membersihkan semua event listener yang terkait dengan mode fullscreen.

**Detail:**
- Menghapus event listener keyboard untuk fullscreen
- Membersihkan map listener overlay
- Mencegah memory leak

**Penggunaan:**
```javascript
cleanupFullscreenListeners();
```

### `getDataForCategory(category, dataType)`
**Tujuan:** Mengambil data berdasarkan kategori dan tipe data dengan sistem rotasi.

**Parameter:**
- `category` (string): Kategori data ('guestStar', 'pingstar', 'moderator')
- `dataType` (string): Tipe data ('messages', 'usernames', 'images', 'voices')

**Return:** Data yang diminta atau null jika tidak ditemukan

**Detail:**
- Menggunakan counter untuk rotasi data
- Menggunakan modulo untuk cycling data
- Menampilkan warning jika data tidak ditemukan

### `incrementCategoryCounter(category)`
**Tujuan:** Menambah counter untuk kategori tertentu.

**Parameter:**
- `category` (string): Nama kategori

### `resetCategoryCounters()`
**Tujuan:** Mereset semua counter kategori ke 0.

### `getDataInfo()`
**Tujuan:** Mendapatkan informasi statistik tentang data.

**Return:** Objek berisi jumlah total messages, usernames, images, dan voices untuk setiap kategori.

## Fungsi Pembuatan Kartu

### `generateCategoryCards(containerId, category, iconClass, title)`
**Tujuan:** Membuat dan menampilkan kartu-kartu untuk kategori tertentu.

**Parameter:**
- `containerId` (string): ID container HTML
- `category` (string): Nama kategori
- `iconClass` (string): CSS class untuk ikon
- `title` (string): Judul yang ditampilkan

**Detail:**
- Asynchronous function untuk handling gambar
- Membuat maksimal 100 kartu per kategori
- Menambahkan animasi hover dan klik
- Memvalidasi keberadaan gambar sebelum menampilkan

**Fitur:**
- Truncate teks panjang (>100 karakter)
- Media indicators untuk gambar dan audio
- Animasi GSAP (jika tersedia)
- Event handling untuk modal

## Fungsi Media dan Gambar

### `checkImageExists(imagePath)`
**Tujuan:** Memvalidasi keberadaan file gambar.

**Parameter:**
- `imagePath` (string): Path ke file gambar

**Return:** Promise<boolean> - true jika gambar ada

### `handleImageError(imgElement, imagePath)`
**Tujuan:** Menangani error saat loading gambar.

**Parameter:**
- `imgElement` (HTMLElement): Element img yang error
- `imagePath` (string): Path gambar yang gagal dimuat

**Detail:**
- Mencoba beberapa alternative path
- Menampilkan pesan error jika semua gagal
- Menggunakan dataset untuk tracking retry

### `createMediaElement(imagePath, voicePath)`
**Tujuan:** Membuat HTML element untuk media (gambar dan audio).

**Parameter:**
- `imagePath` (string|null): Path ke gambar
- `voicePath` (string|null): Path ke file audio

**Return:** String HTML untuk media elements

**Fitur:**
- Image overlay dengan expand icon
- Audio player dengan multiple format support
- Error handling untuk loading

## Fungsi Fullscreen Image

### `openFullscreenImage(imageSrc)`
**Tujuan:** Membuka gambar dalam mode fullscreen.

**Parameter:**
- `imageSrc` (string): URL gambar

**Detail:**
- Membuat overlay fullscreen jika belum ada
- Preload gambar sebelum menampilkan
- Setup event listeners untuk kontrol
- Kategorisasi ukuran gambar
- Smooth transitions

### `closeFullscreenImage()`
**Tujuan:** Menutup mode fullscreen image.

**Detail:**
- Cleanup event listeners
- Fade out animation
- Reset body overflow
- Clear image source

### `setupFullscreenListeners(overlay)`
**Tujuan:** Setup event listeners untuk fullscreen mode.

**Parameter:**
- `overlay` (HTMLElement): Fullscreen overlay element

**Fitur Kontrol:**
- ESC: Tutup fullscreen
- +/=: Perbesar gambar
- -/_: Perkecil gambar  
- 0: Reset ukuran
- Click overlay: Tutup fullscreen
- Click close button: Tutup fullscreen

### `adjustImageSize(scale)`
**Tujuan:** Mengubah ukuran gambar dalam fullscreen.

**Parameter:**
- `scale` (number): Faktor perkalian ukuran (default: 0.8)

**Batas:**
- Minimum: 30vw x 30vh
- Maximum: 95vw x 95vh

### `resetImageSize()`
**Tujuan:** Mereset ukuran gambar ke default (90vw x 90vh).

### `categorizeImageSize(naturalWidth, naturalHeight)`
**Tujuan:** Mengkategorikan ukuran gambar.

**Parameter:**
- `naturalWidth` (number): Lebar asli gambar
- `naturalHeight` (number): Tinggi asli gambar

**Return:** String kategori ('small', 'medium', 'large')

### `showImageControls()`
**Tujuan:** Menampilkan info kontrol keyboard sementara.

**Detail:**
- Menampilkan tooltips kontrol
- Auto-hide setelah 3 detik
- Hanya muncul sekali per session

## Fungsi Modal

### `showModal(type, title, user, text, imagePath, voicePath)`
**Tujuan:** Menampilkan modal dengan detail pesan.

**Parameter:**
- `type` (string): Tipe kategori
- `title` (string): Judul modal
- `user` (string): Nama pengguna
- `text` (string): Isi pesan
- `imagePath` (string|null): Path gambar (opsional)
- `voicePath` (string|null): Path audio (opsional)

**Fitur:**
- Icon mapping berdasarkan kategori
- HTML formatting untuk line breaks
- Media element creation
- GSAP animations (staggered)
- Body scroll lock

### `hideModal()`
**Tujuan:** Menyembunyikan modal dengan animasi.

**Detail:**
- GSAP exit animations
- Cleanup media elements
- Restore body scroll
- Reset modal state

## Fungsi Navigasi dan Setup

### `goBack()`
**Tujuan:** Navigasi kembali ke halaman sebelumnya dengan animasi.

**Target:** `mending-scroll-pesnuk.html`

### `setupEventListeners()`
**Tujuan:** Setup semua event listeners untuk aplikasi.

**Events:**
- Modal close (click, escape)
- Back button navigation
- Image click handlers

### `setupFullscreenImage()`
**Tujuan:** Setup event delegation untuk image clicks.

**Detail:**
- Menggunakan event delegation
- Handle click pada modal images
- Handle click pada image containers

### `handleImageClick(e)`
**Tujuan:** Handle klik pada gambar untuk membuka fullscreen.

**Parameter:**
- `e` (Event): Click event

**Target Elements:**
- `.modal-image`
- `.modal-image-container`

## Fungsi Animasi

### `initPageAnimations()`
**Tujuan:** Inisialisasi animasi loading dan entrance.

**Animasi:**
- Loading overlay fade out (3s delay)
- Header slide down
- Title section slide right
- Star icon rotation loop
- Cards grid fade in
- Section dividers scale animation

### `animateCards()`
**Tujuan:** Animasi entrance untuk kartu-kartu.

**Detail:**
- Staggered animation dengan delay 1.5s
- Back ease untuk bounce effect
- Opacity, position, dan scale transitions

### `addParallaxEffect()`
**Tujuan:** Menambahkan efek parallax pada background.

**Detail:**
- Mouse tracking untuk gradient position
- Smooth color transitions
- Real-time background updates

## Fungsi Inisialisasi

### `initializePage()`
**Tujuan:** Inisialisasi utama aplikasi.

**Proses:**
1. Log data information
2. Reset category counters
3. Generate cards untuk semua kategori
4. Setup event listeners
5. Setup fullscreen image handlers
6. Initialize animations (delayed)
7. Add parallax effects

### Event Listeners Global

#### `DOMContentLoaded`
- Menjalankan `initializePage()`
- Setup fullscreen image handlers
- Setup first-time controls display

#### `window.load`  
- Menjalankan floating animations (jika tersedia)
- Delay 2 detik untuk smooth loading

## Fungsi Debug (Tersedia tapi tidak digunakan)

### `debugImagePaths()`
**Tujuan:** Debug informasi gambar untuk development.

### `testFullscreenClose()`
**Tujuan:** Test otomatis fungsi fullscreen.

### `createImageContainer(imageSrc)`
**Tujuan:** Helper untuk membuat container gambar.

## Fitur Keamanan dan Performa

### Memory Management
- Cleanup listeners saat tidak diperlukan
- Reset counters untuk mencegah overflow
- Image preloading untuk smooth experience

### Error Handling
- Graceful fallback untuk missing images
- Multiple audio format support
- Console logging untuk debugging

### Accessibility
- Keyboard navigation support
- Screen reader friendly alt texts
- High contrast overlay backgrounds

## Dependencies

### Required
- Modern browser dengan ES6+ support
- DOM API

### Optional
- GSAP (GreenSock) untuk advanced animations
- Fallback ke CSS transitions jika GSAP tidak tersedia