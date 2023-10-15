// Di sini kita akan membahas 4 konsep besar yang ada di FP.
// Yakni Pure Function, Immutability, Recursive, dan High-Order Function.

// Agar lebih mudah dalam mengetahui apakah fungsi yang Anda buat sudah pure atau belum, pastikan 3 konsep ini ada pada fungsi yang Anda buat.
// 1. Mengembalikan nilai yang sama bila inputannya (nilai parameter) sama.
// 2. Hanya bergantung pada argumen yang diberikan.
// 3. Tidak menimbulkan efek samping.

const createPersonWithAge = (age, person) => {
  person.age = age;
  return person;
};

const person = {
  name: "Bobo",
};

const newPerson = createPersonWithAge(18, person);

console.log({
  person,
  newPerson,
});
/**
   * Output:
   *  {
        person: { name: 'Bobo', age: 18 },
        newPerson: { name: 'Bobo', age: 18 }
      }
  */
