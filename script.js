//if,else,nested if
var nilai = 75;

if (nilai >= 80) {
  console.log("Anda mendapatkan nilai A");
} else if (nilai >= 70) {
  console.log("Anda mendapatkan nilai B");
} else if (nilai >= 60) {
  console.log("Anda mendapatkan nilai C");
} else {
  console.log("Anda mendapatkan nilai D");
}

//switch case
var program = "Sarjana";

switch (program) {
  case "Sarjana":
    console.log("Waktu program Anda adalah 4 tahun.");
    break;
  case "Diploma":
    console.log("Waktu program Anda adalah 2 tahun.");
    break;
  case "Doktoral":
    console.log("Waktu program Anda adalah 3 tahun.");
    break;
  default:
    console.log("Input tidak valid.");
}

//for statement
console.log(
  "Bu Guru menyuruh saya untuk menulis 'Aku tidak akan telat lagi' sebanyak 100 kali. Dia pikir aku akan kewalahan. Maaf bu, saya adalah programmer, biarkan saya memasak."
);
for (var i = 1; i <= 100; i++) {
  console.log("Aku tidak akan telat lagi. Yang ke " + i);
}

//while, do while

// Menggunakan while loop
var countWhile = 0;
while (countWhile < 5) {
  console.log("Ini Menggunakan While Loop" + countWhile);
  countWhile++;
}

// Menggunakan do-while loop
var countDoWhile = 0;
do {
  console.log("Ini Menggunakan Do While Loop" + countDoWhile);
  countDoWhile++;
} while (countDoWhile < 5);

//function
function tambah(angka1, angka2) {
  var hasil = angka1 + angka2;
  return hasil;
}

var hasilPenambahan = tambah(22, 15);
console.log("Hasil Penjumlahan: " + hasilPenambahan);
