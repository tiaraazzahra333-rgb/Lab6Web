# Praktikum 6 — JavaScript DOM & Event Handling

Dokumentasi dan source code project **Lab6Web** untuk Praktikum 6 mata kuliah Pemrograman Web, topik JavaScript DOM dan Event Handling.

> Repository ini berisi source code, modul referensi, dokumentasi langkah penggunaan, jawaban evaluasi, serta bukti screenshot yang dipisahkan per bagian. Beberapa screenshot dokumentasi awal merupakan crop dari tangkapan layar halaman penuh; screenshot pengujian interaksi yang dikirim terpisah ditambahkan pada bagian akhir folder `screenshots`.

## Daftar Isi

- [Deskripsi Project](#deskripsi-project)
- [Tujuan Praktikum](#tujuan-praktikum)
- [Teknologi](#teknologi)
- [Struktur Folder](#struktur-folder)
- [Cara Menjalankan](#cara-menjalankan)
- [Rincian Fitur dan Implementasi](#rincian-fitur-dan-implementasi)
- [Skenario Pengujian](#skenario-pengujian)
- [Eksperimen Mandiri](#eksperimen-mandiri)
- [Jawaban Evaluasi](#jawaban-evaluasi)
- [Dokumentasi Screenshot](#dokumentasi-screenshot)
- [Kesimpulan](#kesimpulan)
- [Cara Upload ke GitHub](#cara-upload-ke-github)

## Deskripsi Project

Lab6Web adalah website pembelajaran interaktif yang menerapkan konsep Document Object Model (DOM) dan event handling menggunakan HTML, CSS, dan JavaScript murni. Pengguna dapat mencoba pemilihan elemen HTML, mengubah konten, mengubah class CSS, merespons event, menghitung karakter, memvalidasi formulir, mengelola daftar tugas, dan melakukan simulasi pendaftaran workshop.

Project tidak menggunakan framework JavaScript atau dependensi eksternal. File utama dapat dijalankan langsung melalui browser.

## Tujuan Praktikum

1. Memahami DOM sebagai representasi dokumen HTML yang dapat diakses melalui JavaScript.
2. Menggunakan `id`, `class`, dan selector CSS untuk memilih elemen HTML.
3. Mengubah teks, atribut, kelas CSS, dan gaya elemen melalui JavaScript.
4. Menangani event pengguna menggunakan `addEventListener()`.
5. Membuat validasi form dan menampilkan pesan sesuai kondisi input.
6. Mengembangkan halaman web interaktif dengan beberapa fungsi yang berjalan.

## Teknologi

| Teknologi | Kegunaan |
|---|---|
| HTML5 | Struktur dan elemen halaman web |
| CSS3 | Tata letak, warna, tipografi, dan tampilan responsif |
| JavaScript | Manipulasi DOM, event, validasi, dan interaksi |
| Browser modern | Menjalankan dan menguji website |
| Developer Tools | Memeriksa Console pada eksperimen tanpa `defer` |

## Struktur Folder

```text
Lab6Web/
├── index.html
├── style.css
├── script.js
├── eksperimen-5-tanpa-defer.html
├── README.md
├── CHECKLIST-SEBELUM-DIKUMPULKAN.txt
├── Modul_Praktikum_6_Referensi.pdf
└── screenshots/
    ├── 00-tampilan-utama-website.png
    ├── 00A-sumber-screenshot-full-page-asli.png
    ├── 01-latihan-1-dom.png
    ├── 02-latihan-2-event-click.png
    ├── 03-latihan-3-manipulasi-css.png
    ├── 04-latihan-4-penghitung-karakter.png
    ├── 05-latihan-5-form-tampilan-utama.png
    ├── 06-latihan-6-todo-list.png
    ├── 07-mini-project-workshop-berhasil.png
    ├── 08-eksperimen-mandiri-3-dan-4.png
    ├── 09-jawaban-evaluasi.png
    ├── 10A-validasi-semua-kolom-kosong.png
    ├── 10B-validasi-nama-kosong.png
    ├── 10C-validasi-email-tidak-valid.png
    ├── 10D-validasi-usia-16-tahun.png
    ├── 10E-validasi-data-berhasil.png
    ├── 11-mini-project-validasi-gagal.png
    ├── 12-eksperimen-5-halaman-tanpa-defer.png
    ├── 13-eksperimen-5-console-null-dan-typeerror.png
    ├── 14A-todo-tambah-tiga-tugas.png
    ├── 14B-todo-tandai-selesai.png
    ├── 14C-todo-hapus-tugas.png
    ├── 15A-mini-project-pendaftaran-berhasil.png
    ├── 15B-mini-project-validasi-gagal.png
    ├── 16A-eksperimen-3-4-paragraf-terlihat.png
    ├── 16B-eksperimen-3-4-paragraf-tersembunyi.png
    └── 17-eksperimen-5-tanpa-defer-hasil-pengamatan.png
```

### Fungsi file utama

- **`index.html`** — struktur halaman utama, bagian latihan, form, To-do List, mini project, dan eksperimen mandiri.
- **`style.css`** — desain visual, tata letak, warna, dan responsivitas.
- **`script.js`** — logika manipulasi DOM, event listener, validasi, To-do List, dan pendaftaran workshop.
- **`eksperimen-5-tanpa-defer.html`** — halaman khusus untuk menguji urutan eksekusi JavaScript tanpa atribut `defer`.
- **`README.md`** — dokumentasi project ini.
- **`Modul_Praktikum_6_Referensi.pdf`** — salinan modul praktikum sebagai referensi pengerjaan.
- **`screenshots/`** — dokumentasi visual hasil halaman dan pengujian.

## Cara Menjalankan

1. Unduh repository atau klik **Code → Download ZIP** di GitHub.
2. Ekstrak file ZIP ke komputer.
3. Buka folder `Lab6Web` menggunakan Visual Studio Code.
4. Pastikan `index.html`, `style.css`, dan `script.js` berada dalam satu folder.
5. Buka `index.html` melalui browser, atau gunakan ekstensi Live Server di Visual Studio Code.
6. Coba setiap tombol dan form pada halaman utama.
7. Untuk eksperimen nomor 5, buka `eksperimen-5-tanpa-defer.html` secara terpisah.
8. Tekan `F12`, pilih tab **Console**, atau gunakan `Ctrl + Shift + J` untuk melihat pesan `null` dan `TypeError`.

## Rincian Fitur dan Implementasi

### Latihan 1 — Mengubah teks dengan DOM

Elemen dipilih menggunakan `document.getElementById()`, kemudian kontennya diperbarui dengan `textContent`. Latihan ini menunjukkan bahwa JavaScript dapat mengakses dan mengubah teks pada elemen HTML.

### Latihan 2 — Event click

`addEventListener('click', ...)` digunakan untuk menjalankan fungsi ketika tombol ditekan. Program memperbarui pesan dan menampilkan waktu saat tombol diklik.

### Latihan 3 — Mengubah class dan gaya CSS

`classList.toggle()` digunakan untuk menambah atau menghapus class pada elemen. Perubahan class mengubah tampilan paragraf melalui aturan CSS.

### Latihan 4 — Event input dan penghitung karakter

Event `input` membaca perubahan isi kolom teks. Jumlah karakter dihitung menggunakan properti `value.length` dan ditampilkan secara langsung.

### Latihan 5 — Validasi form pendaftaran

Form memeriksa nama, format email, dan usia. Usia yang diterima adalah bilangan bulat pada rentang 17–100 tahun. Program menampilkan pesan kesalahan sesuai input atau pesan keberhasilan ketika data memenuhi ketentuan.

### Latihan 6 — To-do List

Fitur daftar tugas menyediakan fungsi:

- Menambahkan tugas baru.
- Menandai tugas sebagai selesai.
- Membatalkan status selesai.
- Menghapus tugas satu per satu.

Fitur ini menggunakan event click, pembuatan elemen DOM, dan manipulasi class.

### Mini Project — Pendaftaran Workshop

Mini project berupa formulir pendaftaran workshop yang menyediakan:

- Input nama lengkap dan email.
- Pilihan sesi workshop.
- Penghitung jumlah karakter nama.
- Informasi sesi yang dipilih.
- Validasi sebelum pendaftaran diproses.
- Pesan kesalahan atau keberhasilan.
- Tombol reset form.

Nama harus terdiri dari minimal tiga karakter, email harus menggunakan format yang benar, dan sesi workshop harus dipilih.

## Skenario Pengujian

### Validasi form latihan 5

| No. | Skenario | Hasil yang diharapkan |
|---|---|---|
| 1 | Semua kolom kosong | Pesan bahwa nama wajib diisi |
| 2 | Nama kosong | Validasi nama ditampilkan |
| 3 | Format email salah | Pesan email tidak valid |
| 4 | Usia 16 tahun | Pesan usia harus berada pada rentang yang ditentukan |
| 5 | Semua data valid | Pesan validasi berhasil |

### To-do List

| No. | Pengujian | Hasil |
|---|---|---|
| 1 | Menambahkan tiga tugas | Ketiga tugas tampil pada daftar |
| 2 | Menandai tugas selesai | Teks tugas ditampilkan tercoret |
| 3 | Menghapus satu tugas | Tugas yang dipilih hilang dari daftar |

### Mini Project

- **Pengujian berhasil:** data nama, email, dan sesi diisi dengan benar; halaman menampilkan pesan pendaftaran berhasil.
- **Pengujian gagal:** form dikirim tanpa nama yang memenuhi ketentuan; halaman menampilkan pesan validasi.

## Eksperimen Mandiri

### Eksperimen 1 — Menghapus item

Fitur hapus diterapkan pada setiap item To-do List sehingga pengguna dapat menghapus tugas tertentu dari daftar.

### Eksperimen 2 — Validasi panjang nama

Input nama pada form workshop diperiksa agar memenuhi minimal tiga karakter.

### Eksperimen 3 — Event change

Pilihan sesi workshop dipantau menggunakan event `change`. Informasi sesi yang dipilih diperbarui ketika pengguna mengganti pilihan.

### Eksperimen 4 — Menyembunyikan dan menampilkan paragraf

Tombol mengubah visibilitas paragraf melalui class CSS. Pengguna dapat menyembunyikan dan menampilkan paragraf kembali.

### Eksperimen 5 — JavaScript tanpa `defer`

Halaman terpisah menempatkan script pada bagian `<head>` tanpa atribut `defer`. Script mencoba memilih tombol sebelum browser selesai mem-parsing elemen body. Akibatnya, `document.getElementById()` menghasilkan `null`. Ketika `addEventListener()` dipanggil pada nilai `null`, browser menampilkan `TypeError`.

Salah satu perbaikannya adalah menggunakan atribut `defer` pada script eksternal:

```html
<script src="script.js" defer></script>
```

Atribut `defer` menunda eksekusi script eksternal hingga HTML selesai diparsing.

## Jawaban Evaluasi

### 1. Apa yang dimaksud dengan DOM dan apa manfaatnya?

DOM (Document Object Model) adalah representasi struktur dokumen HTML dalam bentuk objek yang dapat diakses dan dimanipulasi JavaScript. DOM bermanfaat untuk memilih elemen, mengubah konten, mengatur class CSS, dan merespons tindakan pengguna.

### 2. Apa perbedaan `getElementById()`, `querySelector()`, dan `querySelectorAll()`?

`getElementById()` memilih elemen berdasarkan id. `querySelector()` memilih elemen pertama yang cocok dengan selector CSS. `querySelectorAll()` memilih seluruh elemen yang cocok dengan selector CSS.

### 3. Apa fungsi `addEventListener()` dan sebutkan tiga contoh event?

`addEventListener()` menghubungkan event dengan fungsi yang dijalankan ketika event terjadi. Contoh event adalah `click`, `input`, dan `submit`.

### 4. Mengapa `event.preventDefault()` digunakan pada event submit form?

`event.preventDefault()` mencegah perilaku bawaan browser ketika form dikirim, seperti memuat ulang halaman, sehingga JavaScript dapat memeriksa input terlebih dahulu.

### 5. Apa perbedaan `textContent` dan `innerHTML` dari sisi penggunaan dan keamanan?

`textContent` membaca atau mengubah teks biasa. `innerHTML` membaca atau mengubah markup HTML. `textContent` lebih aman untuk menampilkan input pengguna karena tidak menafsirkan input sebagai HTML.

### 6. Bagaimana `classList.toggle()` membantu mengubah tampilan elemen?

`classList.toggle()` menambahkan class jika belum ada dan menghapusnya jika sudah ada. Dengan demikian, tampilan elemen dapat diaktifkan atau dinonaktifkan.

### 7. Sebutkan minimal tiga skenario pengujian validasi form.

Contohnya adalah semua input kosong, email tidak valid, usia di bawah 17 tahun, nama tidak diisi, dan semua input diisi dengan benar.

## Dokumentasi Screenshot

Seluruh screenshot berada di folder `screenshots/` dan diberi nama sesuai bagian yang didokumentasikan.

**Screenshot pengujian terpisah yang ditambahkan:**

- `14A`–`14C`: proses tambah tugas, tandai selesai, dan hapus tugas pada To-do List.
- `15A`–`15B`: hasil Mini Project berhasil dan hasil validasi gagal.
- `16A`–`16B`: kondisi paragraf terlihat dan tersembunyi pada Eksperimen 3 & 4.
- `17`: halaman eksperimen tanpa `defer` beserta hasil pengamatan yang tampil di halaman.
- `13`: bukti Console untuk nilai `null` dan pesan `TypeError`.

**Catatan dokumentasi:** sebagian screenshot bernomor `01`–`09` pada paket awal merupakan potongan/crop dari tangkapan layar halaman penuh yang dikirim, bukan rekaman interaksi individual. Screenshot pengujian yang dikirim terpisah kemudian ditambahkan sebagai file tersendiri. Untuk bukti klik tambahan, gunakan screenshot pengujian terpisah yang sesuai.

## Kesimpulan

Praktikum ini menerapkan DOM dan event handling untuk membangun halaman web interaktif. JavaScript digunakan untuk memilih elemen, mengubah konten, memodifikasi class CSS, merespons event, menghitung karakter, memvalidasi input, dan mengelola daftar tugas. Mini project pendaftaran workshop menggabungkan validasi dan interaksi form dalam satu halaman.

Eksperimen tanpa `defer` menunjukkan bahwa script yang dijalankan sebelum HTML selesai diparsing dapat mengakses elemen yang belum tersedia. Oleh karena itu, pengaturan waktu eksekusi script penting dalam pengembangan web.

## Cara Upload ke GitHub

1. Login ke GitHub.
2. Buat repository baru dengan nama `Lab6Web`.
3. Pilih visibilitas repository sesuai instruksi dosen (misalnya Public jika diminta dapat diakses).
4. Unggah **isi folder `Lab6Web`**, bukan folder pembungkus lain. Pastikan `index.html` terlihat di halaman utama repository.
5. Sertakan folder `screenshots`, file CSS, JavaScript, halaman eksperimen, README, dan PDF referensi.
6. Lakukan commit dengan pesan, misalnya `Upload Praktikum 6 - JavaScript DOM dan Event Handling`.
7. Buka repository dan periksa apakah README tampil serta semua file dapat dibuka.
8. Salin URL repository untuk dikirim ke platform pengumpulan.

## Referensi

1. Modul Praktikum 6 — JavaScript DOM dan Event Handling, Program Studi Teknik Informatika, Pertemuan 7.
2. MDN Web Docs — [Introduction to the DOM](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Introduction).
3. MDN Web Docs — [Event reference](https://developer.mozilla.org/en-US/docs/Web/Events).
4. MDN Web Docs — [Client-side form validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation).
