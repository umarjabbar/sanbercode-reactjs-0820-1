// Soal 1

console.log('Looping Pertama');
var maju = 2;
while(maju <= 20){
  console.log(maju + ' - I Love Coding');
  maju += 2;
}

console.log('Looping Kedua');
var mundur = 20;
while(mundur >= 2){
  console.log(mundur + ' - I will become a front-end developer');
  mundur -= 2;
}

// Soal 2
console.log("=================")
for(var i = 1; i <= 20; i++){
  if(i % 3 == 0){
    console.log(i + " - I Love Coding");
  } else if (i % 2 == 0){
    console.log(i + " - Berkualitas");
  } else {
    console.log(i + " - Santai");
  }
}

// Soal 3
console.log("=================")
var baris;
var hasil = "";

for( baris = 0; baris < 7; baris++){
  hasil = hasil + "#";
  console.log(hasil);
}

// Soal 4
console.log("=================")
var kalimat = "saya sangat senang belajar javascript";
var h;
var kata = "";
var hasil = [];
for(h = 0; h < kalimat.length; h++){
  var cari = kalimat.substring(h, h+1);
  if( cari == " "){
    hasil.push(kata);
    kata = "";
  } else {
    kata += cari;
  }
}
hasil.push(kata);
console.log(hasil)

// Soal 5
console.log('=================');
var daftarBuah = [ '2. Apel', '5. Jeruk', '3. Anggur', '4. Semangka', '1. Mangga'];
console.log(daftarBuah.sort());