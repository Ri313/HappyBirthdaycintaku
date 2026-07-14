Taruh foto kamu di folder ini (misalnya foto-1.jpg, foto-2.jpg, dst).

Lalu buka: src/data/content.js
Cari bagian "kilasBalik.foto" dan "penutup.foto", ganti nilai "src"
dari link placeholder menjadi path lokal, contoh:

  src: '/images/foto-1.jpg'

File placeholder ini boleh dihapus setelah foto asli ditambahkan.
