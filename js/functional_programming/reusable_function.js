// array.map() Fungsi ini dapat dipanggil dari sebuah data bertipe array dan menerima satu buah callback function.
const newArray = ["Harry", "Ron", "Jeff", "Thomas"].map((name) => {
  return `${name}!`;
});
console.log(newArray);

// array.filter() fungsi ini sangat berguna untuk melakukan proses penyaringan (filtering) terhadap nilai array yang ada.
const students = [
  {
    name: "Harry",
    score: 60,
  },
  {
    name: "James",
    score: 88,
  },
  {
    name: "Ron",
    score: 90,
  },
  {
    name: "Bethy",
    score: 75,
  },
];

const eligibleForScholarshipStudents = students.filter(
  (student) => student.score > 85
);
console.log(eligibleForScholarshipStudents);

// array.some() merupakan fungsi bawaan dari array yang cukup sering digunakan. Fungsi ini akan menghasilkan nilai boolean.
const array = [1, 2, 3, 4, 5];
const even = array.some((element) => element % 2 === 0);
console.log(even);

// Yang membedakan array.find() dengan array.some(), find akan menghasilkan satu nilai dari elemen yang pertama kali
//  ditemukan berdasarkan kriteria tertentu dan akan menghasilkan nilai undefine bila tidak ada kriteria yang terpenuhi
//   pada item array.
const findJames = students.find((student) => student.name === "James");
console.log(findJames);

//array.sort() merupakan fungsi bawaan dari array yang berguna untuk melakukan pengurutan nilai dari sebuah deretan nilai.
//Secara default, fungsi sort akan mengubah semua nilai dalam deretan menjadi bentuk string dan mengurutkannya secara ascending.
const months = ["March", "Jan", "Feb", "Dec"];
months.sort();
console.log(months);
// output: [ 'Dec', 'Feb', 'Jan', 'March' ]

const array1 = [1, 30, 4, 1000, 101, 121];
array1.sort();
console.log(array1);
// output: [ 1, 1000, 101, 121, 30, 4 ]

// array.every() merupakan fungsi bawaan dari array yang digunakan untuk mengecheck apakah semua nilai dari
// sebuah array sesuai dengan kriteria yang didefinisikan. Kembalian dari array.every() adalah nilai Boolean.
const scores = [70, 85, 90];
const minimumScore = 65;

// array.forEach merupakan fungsi bawaan dari array yang berfungsi untuk memanggil fungsi callback pada setiap iterasi index array.
const examPassed = scores.every((score) => score >= minimumScore);
console.log(examPassed);

const names = ["Harry", "Ron", "Jeff", "Thomas"];

names.forEach((name) => {
  console.log(`Hello, ${name}!`);
});
