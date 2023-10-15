// Regular function dapat berupa function declaration dan function expression.
// function declaration adalah function biasa yang hanya menjalankan function
// function expression adalah function yang mengembalikan sebuah nilai dengan keyword 'return'

// function declaration
function sayHello(greet) {
  console.log(`${greet}!`);
}

// function expression
const sayHello = (greet) => {
  console.log(`${greet}!`);
};
// Namun, jika kita sama sekali tidak membutuhkan parameter,
//  maka kita tetap menuliskan tanda kurung namun kosong seperti ini:

const helloWord = () => {
  console.log("Hello");
};
helloWord();

//ketika body dari function hanya terdiri dari satu baris, kita bisa menghapus tanda kurung kurawal.spt dibawah ini:
const sayHello = () => console.log("Selamat pagi semuanya!");
sayHello();
