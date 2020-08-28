/*  Soal 1
    Tulis code function di sini
*/
console.log('======== Jawaban Soal 1 =========')
function halo() {
  return "Halo Sanbers!";
}
console.log(halo()) // "Halo Sanbers!" 

/*  Soal 2
Tulis code function di sini
*/
console.log('======== Jawaban Soal 2 =========')

function kalikan(n, m) {
  return n * m;
}

var num1 = 12
var num2 = 4

var hasilKali = kalikan(num1, num2)
console.log(hasilKali) // 48

/*  Soal 3
Tulis kode function di sini
*/
console.log('======== Jawaban Soal 3 =========')
function introduce(nama, umur, alamat, hobi) {
  var output = "Nama saya " + nama + ", umur saya " + umur + " tahun, alamat saya di " + alamat + ", dan saya punya hobby yaitu " + hobi+ "!";
  
  return output;
}

var name = "John"
var age = 30
var address = "Jalan belum jadi"
var hobby = "Gaming"

var perkenalan = introduce(name, age, address, hobby)
console.log(perkenalan) // Menampilkan "Nama saya John, umur saya 30 tahun, alamat saya di jalan belum jadi, dan saya punya hobby yaitu Gaming!" 

// Soal 4
console.log('======== Jawaban Soal 4 =========')
var arrayDaftarPeserta = ["Asep", "laki-laki", "baca buku" , 1992];
var daftarPeserta = ["nama", "jenisKelamin", "hobi", "tahun"];
var objectDaftarPeserta = {}

for (i = 0; i < arrayDaftarPeserta.length; i++) {
  var data = daftarPeserta[i];
  objectDaftarPeserta[data] = arrayDaftarPeserta[i];
}

console.log(objectDaftarPeserta);

/* Soal 5
1.nama: strawberry
warna: merah
ada bijinya: tidak
harga: 9000 
2.nama: jeruk
warna: oranye
ada bijinya: ada
harga: 8000
3.nama: Semangka
warna: Hijau & Merah
ada bijinya: ada
harga: 10000
4.nama: Pisang
warna: Kuning
ada bijinya: tidak
harga: 5000
uraikan data tersebut menjadi array of object dan munculkan data pertama
*/
console.log('======== Jawaban Soal 5 =========')
var fruits = [
  {
    nama : 'strawberry',
    warna : 'merah',
    adaBijinya : 'tidak',
    harga : 9000,
  },
  {
    nama : 'Jeruk',
    warna : 'orange',
    adaBijinya : 'ada',
    harga : 8000,
  },
  {
    nama: 'Semangka',
    warna: 'Hijau & Merah',
    adaBijinya: 'ada',
    harga: 10000
  },
  {
    nama: 'Pisang',
    warna: 'Kuning',
    adaBijinya: 'tidak',
    harga: 5000
  }
];
console.log(fruits[0]);

// Soal 6
// buatlah fungsi untuk menambahkan dataFilm tersebut yang itemnya object adalah object dengan property nama, durasi , genre, tahun
console.log('======== Jawaban Soal 6 =========')
var dataFilm = [];

function tambahFilm(nama, durasi, genre, tahun) {
  // dataFilm.nama = nama;
  // dataFilm.durasi = durasi;
  // dataFilm.genre = genre;
  // dataFilm.tahun = tahun;

  dataFilm.push({nama : nama, durasi : durasi, genre : genre, tahun : tahun})
  return dataFilm;
}

var tambah = tambahFilm("Nggak ngapa ngapain", "240 menit", "blank", 2020);

console.log(dataFilm);