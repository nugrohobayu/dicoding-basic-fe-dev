let arrayNames = ["Dian", "Bayu", "Nugroho", 26, "Brebes"];

// for (listName of arrayNames) {
//   console.log(listName);
// }

arrayNames.splice(1,2)  // Menghapus dari index 2 sebanyak 1 elemen
console.log(arrayNames);
arrayNames.splice(1,0,"Dewa");  // splice() juga dapat digunakan untuk menambahkan elemen pada array tersebut. Caranya dengan memberikan argumen ke-3 
console.log(`Setelah ditambahkan : ${arrayNames}`);

const favorites = ["Seafood", "Salad", "Nugget", "Soup"];
console.log(favorites);
console.log(...favorites);

// Spread operator dapat digunakan untuk menggabungkan dua buah array ke dalam array baru. 
const foods = ["Seafood", "Salad", "Nugget", "Soup"];
const others = ["Cake", "Pie", "Donut"];

const allFavorites = [...foods, ...others];

console.log(allFavorites);

// Selain array, spread operator juga bisa digunakan untuk object literals.
const obj1 = { firstName: 'Obi-Wan', age: 30 };
const obj2 = { lastName: 'Kenobi', gender: 'M' };

const newObj = { ...obj1, ...obj2 };

console.log(newObj);

// Map adalah tipe data yang menyimpan koleksi data dengan format key-value layaknya Object.
//  Yang membedakan adalah Map memperbolehkan key dengan tipe data apa pun, 
// dibandingkan Object yang hanya mengizinkan key bertipe String
/*
Ketika sudah membuat objek Map, kita bisa mendapatkan nilainya berdasarkan key tertentu dengan metode get(). 
Lalu, untuk menambahkan pasangan key-value baru gunakan metode set().
*/ 

const capital = new Map([
    ["Jakarta", "Indonesia"],
    ["London", "England"],
    ["Tokyo", "Japan"]
  ]);
  
  console.log(capital.size);
  console.log(capital.get("London"));
  capital.set("New Delhi", "India");
  console.log(capital.size);
  console.log(capital.get("New Delhi"));

/*
Set sederhananya merupakan kumpulan nilai (set of values). Hal yang membedakan Set dengan struktur data yang lain adalah 
data pada Set tidak berurutan dan juga tidak diindeks. 
Selain itu, data di dalam Set juga bersifat unik dan tidak ada duplikasi. 
*/   
const numberSet = new Set([1, 4, 6, 4, 1,2]);

console.log(numberSet);
/* output
Set(3) { 1, 4, 6 }
*/

/*
Fungsi add() hanya menerima satu argumen. Jika Anda memasukkan array, 
maka array tersebut akan dianggap sebagai satu elemen sendiri. Nilai yang duplikat akan diabaikan.
*/ 


