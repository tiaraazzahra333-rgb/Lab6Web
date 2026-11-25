// LATIHAN 1 — Mengubah teks dengan DOM
const judul = document.getElementById('judul');
const pesan = document.getElementById('pesan');
judul.textContent = 'Belajar JavaScript DOM';
pesan.textContent = 'Konten berhasil diubah oleh JavaScript.';
document.getElementById('tombolAksi').addEventListener('click', function () {
  pesan.textContent = 'Tombol aksi berhasil dijalankan. DOM telah diperbarui.';
});

// LATIHAN 2 — Event click dan waktu
const tombolWaktu = document.getElementById('tombolWaktu');
const pesanWaktu = document.getElementById('pesanWaktu');
tombolWaktu.addEventListener('click', function () {
  pesanWaktu.textContent = 'Tombol diklik pada ' + new Date().toLocaleTimeString('id-ID');
});

// LATIHAN 3 — Mengubah kelas dan gaya CSS
const tombolGaya = document.getElementById('tombolGaya');
const teksGaya = document.getElementById('teksGaya');
tombolGaya.addEventListener('click', function () {
  teksGaya.classList.toggle('highlight');
  teksGaya.classList.toggle('teks-besar');
});

// LATIHAN 4 — Event input dan penghitung karakter
const namaInput = document.getElementById('namaInput');
const jumlahKarakter = document.getElementById('jumlahKarakter');
namaInput.addEventListener('input', function () {
  jumlahKarakter.textContent = namaInput.value.length;
});

// LATIHAN 5 — Validasi form pendaftaran
const form = document.getElementById('formPendaftaran');
const pesanForm = document.getElementById('pesanForm');
const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
form.addEventListener('submit', function (event) {
  event.preventDefault();
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const usiaInput = document.getElementById('usia').value;
  const usia = Number(usiaInput);
  pesanForm.className = 'feedback';
  if (nama === '') {
    pesanForm.textContent = 'Nama wajib diisi.';
    pesanForm.classList.add('error');
  } else if (!polaEmail.test(email)) {
    pesanForm.textContent = 'Masukkan email yang valid.';
    pesanForm.classList.add('error');
  } else if (usiaInput === '' || !Number.isInteger(usia) || usia < 17 || usia > 100) {
    pesanForm.textContent = 'Usia harus berupa bilangan bulat 17–100.';
    pesanForm.classList.add('error');
  } else {
    // Reset nilai input terlebih dahulu, lalu tampilkan pesan sukses.
    // Jika pesan ditampilkan sebelum reset(), event reset akan menghapusnya.
    form.reset();
    pesanForm.textContent = 'Validasi berhasil. Form siap diproses.';
    pesanForm.className = 'feedback success';
  }
});
form.addEventListener('reset', function () {
  pesanForm.textContent = '';
  pesanForm.className = 'feedback';
});

// LATIHAN 6 — To-do List (tambah, tandai selesai, dan hapus)
const inputTugas = document.getElementById('inputTugas');
const tambahTugas = document.getElementById('tambahTugas');
const daftarTugas = document.getElementById('daftarTugas');
const pesanTugas = document.getElementById('pesanTugas');
function buatTugas() {
  const teks = inputTugas.value.trim();
  if (teks === '') {
    pesanTugas.textContent = 'Tulis tugas terlebih dahulu.';
    pesanTugas.className = 'feedback error';
    return;
  }
  const item = document.createElement('li');
  const label = document.createElement('span');
  const selesai = document.createElement('button');
  const hapus = document.createElement('button');
  label.textContent = teks;
  selesai.type = 'button';
  selesai.textContent = 'Tandai selesai';
  selesai.addEventListener('click', function () {
    item.classList.toggle('selesai');
    selesai.textContent = item.classList.contains('selesai') ? 'Batalkan selesai' : 'Tandai selesai';
  });
  hapus.type = 'button';
  hapus.textContent = 'Hapus';
  hapus.className = 'delete-task';
  hapus.addEventListener('click', function () {
    item.remove();
    pesanTugas.textContent = 'Tugas berhasil dihapus.';
    pesanTugas.className = 'feedback success';
  });
  item.append(label, selesai, hapus);
  daftarTugas.appendChild(item);
  inputTugas.value = '';
  pesanTugas.textContent = 'Tugas berhasil ditambahkan.';
  pesanTugas.className = 'feedback success';
  inputTugas.focus();
}
tambahTugas.addEventListener('click', buatTugas);
inputTugas.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') buatTugas();
});

// MINI PROJECT — Form Pendaftaran Workshop
const formWorkshop = document.getElementById('formWorkshop');
const workshopNama = document.getElementById('workshopNama');
const workshopEmail = document.getElementById('workshopEmail');
const sesiWorkshop = document.getElementById('sesiWorkshop');
const jumlahNamaWorkshop = document.getElementById('jumlahNamaWorkshop');
const ringkasanSesi = document.getElementById('ringkasanSesi');
const pesanWorkshop = document.getElementById('pesanWorkshop');
workshopNama.addEventListener('input', function () {
  jumlahNamaWorkshop.textContent = workshopNama.value.length;
});
sesiWorkshop.addEventListener('change', function () {
  ringkasanSesi.textContent = sesiWorkshop.value || 'Belum dipilih';
});
formWorkshop.addEventListener('submit', function (event) {
  event.preventDefault();
  const nama = workshopNama.value.trim();
  const email = workshopEmail.value.trim();
  const sesi = sesiWorkshop.value;
  pesanWorkshop.className = 'feedback';
  if (nama.length < 3) {
    pesanWorkshop.textContent = 'Nama wajib diisi minimal tiga karakter.';
    pesanWorkshop.classList.add('error');
  } else if (!polaEmail.test(email)) {
    pesanWorkshop.textContent = 'Masukkan alamat email dengan format yang benar.';
    pesanWorkshop.classList.add('error');
  } else if (sesi === '') {
    pesanWorkshop.textContent = 'Silakan pilih sesi workshop terlebih dahulu.';
    pesanWorkshop.classList.add('error');
  } else {
    pesanWorkshop.textContent = `Pendaftaran berhasil! Terima kasih, ${nama}. Sesi pilihan: ${sesi}.`;
    pesanWorkshop.classList.add('success');
  }
});
formWorkshop.addEventListener('reset', function () {
  pesanWorkshop.textContent = '';
  pesanWorkshop.className = 'feedback';
  jumlahNamaWorkshop.textContent = '0';
  ringkasanSesi.textContent = 'Belum dipilih';
});

// EKSPERIMEN MANDIRI 4 — Sembunyikan/tampilkan paragraf
const toggleParagraf = document.getElementById('toggleParagraf');
const paragrafEksperimen = document.getElementById('paragrafEksperimen');
toggleParagraf.addEventListener('click', function () {
  paragrafEksperimen.classList.toggle('hidden');
  toggleParagraf.textContent = paragrafEksperimen.classList.contains('hidden') ? 'Tampilkan paragraf' : 'Sembunyikan paragraf';
});
