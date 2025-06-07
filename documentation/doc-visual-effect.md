# Visual Effect - Dokumentasi Fungsi

## Deskripsi Umum

`visual-effect.js` adalah skrip utama untuk mengelola animasi dinamis pada halaman web bertema malam berbintang. Skrip ini menggunakan GSAP dan ScrollTrigger untuk menghasilkan animasi bintang jatuh, efek paralaks, transisi scroll, animasi hover, dan pemutar video YouTube yang ditingkatkan.

## Struktur Data

### `videoConfig`

Objek konfigurasi global untuk pengaturan pemutar video.

```javascript
{
  youtubeId: 'ib8DHcaTFag',
  customBorderImage: 'assets/video-border.png',
  starCount: 30,
  fallbackToNewTab: true,
  showEmbedWarning: true,
  customThumbnail: null,
  enablePrivacyMode: true,
  enableAutoplay: true,
  enableControls: true
}
```

## Fungsi Inisialisasi

### `initPageAnimations()`

**Tujuan:** Mengatur transisi dari overlay loading ke animasi utama.

### `initializeMainAnimations()`

**Tujuan:** Memanggil seluruh fungsi animasi utama (bintang jatuh, bintang utama, dan banner).

## Animasi Bintang

### `initializeShootingStars()`

**Tujuan:** Mengatur dan menjadwalkan animasi bintang jatuh.

#### Subfungsi:

* `createShootingStar()`: Membuat bintang jatuh dan ekor animasinya.
* `createSparkleEffect(x, y, color)`: Efek kilau di akhir lintasan.
* `scheduleNextShootingStar()`: Menjadwalkan bintang jatuh berikutnya.

### `createStarFallingAnimation()`

**Tujuan:** Animasi jatuh untuk elemen `.main-star`, termasuk efek teks dan rotasi.

### `resetStarAnimations()`

**Tujuan:** Mereset seluruh bintang utama ke kondisi awal.

## Efek Scroll dan Paralaks

### `updateScrollEffects()`

**Tujuan:** Menyesuaikan posisi dan efek visual berdasarkan scroll pengguna.

### `resetStarVisibility()`

**Tujuan:** Mengembalikan tampilan bintang saat pengguna scroll ke atas.

## Efek Hover

### Hover Event pada `.main-star`

**Tujuan:** Menambahkan animasi interaktif saat pengguna melakukan hover pada elemen bintang.

## Efek Awan dan Bulan

### Awan:

Animasi pergerakan awan kiri dan kanan saat scroll menggunakan `ScrollTrigger`.

### Bulan:

Mengatur posisi `moon-bottom` berdasarkan scrollY.

## Efek Konstelasi & Bintang Dinamis

### `createDynamicStars()`

**Tujuan:** Membuat bintang latar yang terus bergerak dan berkedip.

### `createConstellationEffect()`

**Tujuan:** Menyusun titik-titik bintang dengan garis penghubung (konstelasi).

## Efek Judul

### `enhanceAnniversaryTitle()`

**Tujuan:** Animasi masuk untuk elemen `.anniversary-title` dengan efek slide, scale, dan blur.

## Pemutar Video YouTube

### `initializeVideoSection()`

**Tujuan:** Inisialisasi pemutar video, termasuk animasi dan fallback.

### Strategi Embed Video:

* `tryDirectEmbed()`
* `tryPrivacyEnhancedEmbed()`
* `tryYouTubeAPIEmbed()`
* `handleEnhancedVideoPlay()`
* `playVideoWithAnimation()`
* `openVideoInNewTab()`

### Utility:

* `buildEnhancedEmbedUrl()`
* `testEmbedUrl()`
* `showEnhancedFallbackMessage()`
* `preloadVideoThumbnail()`

## API Global

### `window.VideoSection`

API yang dapat diakses dari luar untuk:

* Mengganti video (`changeVideo()`)
* Mengatur border video (`setBorderImage()`)
* Reinitialize video section (`reinitialize()`)

## Event Penting

### DOMContentLoaded

* Menjalankan `initPageAnimations()`
* Mendaftarkan `ScrollTrigger` dan semua animasi

### Scroll & Resize

* `window.scroll`: Memicu `updateScrollEffects()`
* `window.resize`: Me-refresh `ScrollTrigger`

## Keamanan & Performa

* Menggunakan `requestAnimationFrame` untuk optimasi scroll
* Debounce pada resize
* `visibilitychange` untuk pause/resume animasi
* Cleanup DOM setelah animasi selesai