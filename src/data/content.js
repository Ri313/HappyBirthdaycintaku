
const content = {
  // Nama yang dipakai di beberapa tempat (sapaan singkat)
  namaPanggilan: 'Sayangku',
  namaPengirim: 'Mas',

  // ---------------------------------------------------------------
  // HALAMAN 1: Teks di sampul amplop sebelum dibuka
  // ---------------------------------------------------------------
  amplop: {
    label: 'Untuk Sayangku yang mas cinta tak terhingga.',
    instruksi: 'Ketuk amplopnya, ya',
  },

  // ---------------------------------------------------------------
  // HALAMAN 1: Isi surat (boleh tambah/kurang paragraf sesuka hati)
  // ---------------------------------------------------------------
  surat: {
    judul: 'Selamat Ulang Tahun, Sayangku 🎂',
    paragraf: [
      'Hari ini hari yang spesial, karena hari ini jadi penanda kalau sayangku level up menjadi 21.',
      'mas cuma mau bilang, makasih ya udah jadi sayang yang selalu sabar, yang selalu bikin hari-hari mas lebih hangat, dan yang selalu punya tempat paling nyaman buat mas pulang.',
      'Semoga di umur yang baru ini, semua yang sayang perjuangkan pelan-pelan sampai ke tujuannya. Semoga sayang makin sehat, makin bahagia, dan makin sayang sama diri sayangku sendiri.',
      'Dan kalau boleh sedikit egois, semoga di setiap babak baru hidup sayang, masih ada mas di sana, jadi tempat cerita, tempat pulang, dan tempat sayang bisa jadi diri sendiri.',
      'Selamat ulang tahun, cintaku.',
    ],
    tombolLanjut: 'Lihat Kilas Balik',
  },

  // ---------------------------------------------------------------
  // MUSIK — putar otomatis saat amplop dibuka
  // Ganti "src" dengan path lagu kamu di folder public/music/
  // Contoh: taruh file di public/music/lagu-kita.mp3 lalu ganti
  // src menjadi '/music/lagu-kita.mp3'
  // ---------------------------------------------------------------
  lagu: {
    judul: 'Lesung Pipi',
    penyanyi: 'Raim Laode',
    src: '/music/song.mp3',
    // Kalimat yang mendeskripsikan kenapa lagu ini relevan
    deskripsiHalamanLagu:
      'Lagu ini selalu mengingatkan mas sama kamu — tiap liriknya kayak lagi cerita soal kita.',
  },

  // ---------------------------------------------------------------
  // HALAMAN 2: Kilas Balik — 9 foto + deskripsi
  // Ganti "src" ke path foto kamu (taruh di public/images/ lalu
  // tulis path-nya, misal '/images/foto-1.jpg'). Selama belum
  // diganti, akan tampil foto placeholder berwarna senada tema.
  // ---------------------------------------------------------------
  kilasBalik: {
    judul: 'Kilas Balik Kita',
    subjudul: 'Beberapa momen yang mas simpan baik-baik',
    foto: [
      { src: 'public/images/foto-1.jpg', deskripsi: 'First Date.' },
      { src: 'public/images/foto-2.jpg', deskripsi: 'Motoran Berduaaa' },
      { src: 'public/images/foto-3.jpg', deskripsi: 'Waktu kamu ketawa sampai lupa difoto candid.' },
      { src: 'public/images/foto-4.jpg', deskripsi: 'Liburan kecil-kecilan yang berasa besar banget.' },
      { src: 'public/images/foto-5.jpg', deskripsi: 'Malam kita begadang cerita sampai lupa waktu.' },
      { src: 'public/images/foto-6.jpg', deskripsi: 'Waktu kamu masakin mas walau agak gosong.' },
      { src: 'public/images/foto-7.jpg', deskripsi: 'Perayaan kecil yang jadi kenangan besar.' },
      { src: 'public/images/foto-8.jpg', deskripsi: 'Hari biasa yang jadi istimewa karena ada kamu.' },
      { src: 'public/images/foto-9.jpg', deskripsi: 'Dan masih banyak lagi cerita yang akan kita tulis.' },
    ],
    tombolLagu: 'Lagu yang mencerminkan sayangku',
  },

  // ---------------------------------------------------------------
  // HALAMAN 4: Penutup
  // ---------------------------------------------------------------
  penutup: {
    teks: 'Happy birthday sayangku, mas selalu sayang dan cinta tak terhingga sama cintaku.',
    foto: [
      'https://placehold.co/500x650/1B1523/F2C9C0?text=Kita+%231',
      'https://placehold.co/500x650/1B1523/F2C9C0?text=Kita+%232',
    ],
  },
}

export default content
