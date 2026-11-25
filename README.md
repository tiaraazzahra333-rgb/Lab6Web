
# PRAKTIKUM 6 – JAVASCRIPT DOM & EVENT HANDLING

**Mata Kuliah:** Pemrograman Web  
**Nama:** Tiara Az Zahra  
**Program Studi:** Teknik Informatika  
**Universitas:** Universitas Pelita Bangsa  
**Project:** Lab6Web

---

## 1. Deskripsi Project

Project Lab6Web merupakan implementasi Praktikum 6 yang membahas penggunaan JavaScript DOM (Document Object Model) dan Event Handling pada halaman web.

Melalui project ini, dibuat beberapa fitur interaktif untuk memahami bagaimana JavaScript dapat digunakan untuk mengakses, mengubah, menambahkan, dan menghapus elemen HTML serta menangani berbagai interaksi pengguna.

## 2. Tujuan Praktikum

1. Memahami konsep DOM pada JavaScript.
2. Mengakses elemen HTML menggunakan JavaScript.
3. Mengubah isi dan atribut elemen HTML.
4. Memahami penggunaan Event Handling.
5. Membuat validasi form menggunakan JavaScript.
6. Membuat aplikasi sederhana yang interaktif.

## 3. Teknologi yang Digunakan

- HTML5
- CSS3
- JavaScript
- Visual Studio Code
- Web Browser
- GitHub

## 4. Struktur Folder Project

```text
Lab6Web/
│
├── index.html
├── style.css
├── script.js
├── eksperimen-5-tanpa-defer.html
├── README.md
├── Modul_Praktikum_6_Referensi.pdf
├── CHECKLIST-SEBELUM-DIKUMPULKAN.txt
│
└── screenshots/
    ├── 06A-tambah-tugas.png
    ├── 06B-tugas-selesai.png
    ├── 06C-hapus-tugas.png
    ├── 07A-mini-project-valid.png
    ├── 07B-mini-project-invalid.png
    ├── 08A-eksperimen-3-4-tampil.png
    ├── 08B-eksperimen-3-4-sembunyi.png
    └── screenshot lainnya
```

## 5. Fitur yang Diimplementasikan

### A. Manipulasi DOM

JavaScript digunakan untuk memilih dan memanipulasi elemen HTML, seperti mengubah teks, mengatur tampilan, dan memperbarui elemen halaman.

### B. Event Handling

Menggunakan event untuk menangani interaksi pengguna, seperti klik tombol, perubahan pilihan, dan pengiriman form.

### C. Validasi Form

Form diperiksa menggunakan JavaScript untuk memastikan data yang dimasukkan sesuai dengan ketentuan.

### D. To-Do List

Fitur daftar tugas sederhana yang memungkinkan pengguna:
- Menambahkan tugas baru.
- Menandai tugas sebagai selesai.
- Menghapus tugas satu per satu.

### E. Mini Project – Workshop Registration

Form pendaftaran workshop dengan fitur:
- Input nama lengkap.
- Input email.
- Memilih sesi workshop.
- Menghitung jumlah karakter nama.
- Menampilkan informasi sesi yang dipilih.
- Validasi data dan pesan keberhasilan pendaftaran.

## 6. Dokumentasi Screenshot

Screenshot berikut merupakan dokumentasi hasil pengerjaan dan pengujian project.

### A. To-Do List

**1. Menambahkan tugas**

![Menambahkan tugas](screenshots/06A-tambah-tugas.png)

**2. Menandai tugas selesai**

![Tugas selesai](screenshots/06B-tugas-selesai.png)

**3. Menghapus tugas**

![Menghapus tugas](screenshots/06C-hapus-tugas.png)

### B. Mini Project – Form Workshop

**1. Kondisi valid**

![Form valid](screenshots/07A-mini-project-valid.png)

**2. Kondisi tidak valid**

![Form tidak valid](screenshots/07B-mini-project-invalid.png)

### C. Eksperimen Mandiri 3 dan 4

**1. Paragraf ditampilkan**

![Paragraf tampil](screenshots/08A-eksperimen-3-4-tampil.png)

**2. Paragraf disembunyikan**

![Paragraf disembunyikan](screenshots/08B-eksperimen-3-4-sembunyi.png)

### D. Eksperimen Mandiri 5

Pengujian dilakukan dengan menjalankan JavaScript tanpa atribut `defer` untuk mengamati kondisi ketika elemen HTML belum selesai dimuat.

Dokumentasi hasil pengujian dapat dilihat pada halaman `eksperimen-5-tanpa-defer.html` dan screenshot Console yang tersedia di folder `screenshots`.

## 7. Eksperimen Mandiri

### Eksperimen 1 – Menghapus Item

Menerapkan fungsi untuk menghapus item dari daftar menggunakan JavaScript DOM.

### Eksperimen 2 – Validasi Minimal Tiga Karakter

Menerapkan validasi agar nama yang dimasukkan memiliki minimal tiga karakter.

### Eksperimen 3 – Event Change

Menggunakan event `change` untuk mendeteksi perubahan pilihan sesi workshop.

### Eksperimen 4 – Menyembunyikan dan Menampilkan Paragraf

Menggunakan JavaScript untuk mengubah tampilan paragraf melalui class CSS.

### Eksperimen 5 – JavaScript Tanpa Defer

Menguji perbedaan waktu eksekusi JavaScript ketika script dijalankan tanpa atribut `defer`.

Hasil pengujian menunjukkan bahwa elemen dapat bernilai `null` apabila script dijalankan sebelum elemen HTML tersedia.

## 8. Cara Menjalankan Project

1. Download atau clone repository ini.
2. Ekstrak folder project jika menggunakan ZIP.
3. Buka folder `Lab6Web` menggunakan Visual Studio Code.
4. Pastikan file HTML, CSS, dan JavaScript berada dalam struktur folder yang benar.
5. Jalankan `index.html` menggunakan browser.
6. Coba seluruh fitur yang tersedia pada halaman.

## 9. Kesimpulan

Berdasarkan Praktikum 6 yang telah dikerjakan, dapat dipahami bahwa JavaScript DOM dan Event Handling memiliki peran penting dalam membangun halaman web yang interaktif.

Melalui latihan manipulasi DOM, validasi form, To-Do List, Mini Project, dan eksperimen mandiri, pemahaman mengenai hubungan antara HTML, CSS, dan JavaScript menjadi lebih baik.

Project ini juga memberikan pengalaman dalam membuat, menguji, mendokumentasikan, dan mengunggah hasil pekerjaan ke GitHub.

---

**Praktikum 6 – JavaScript DOM & Event Handling**  
**Universitas Pelita Bangsa**  
**Teknik Informatika**
