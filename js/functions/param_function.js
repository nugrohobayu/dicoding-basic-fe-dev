function multiply(a, b) {
  return a * b;
}

console.log(multiply(2, 4));

// Jika parameter dari fungsi adalah sebuah object,
//  kita juga bisa memanfaatkan destructuring object untuk mendapatkan nilainya. Contohnya seperti berikut:
const user = {
  id: 24,
  displayName: "kren",
  fullName: "Kylo Ren",
};

function introduce({ displayName, fullName }) {
  console.log(`${displayName} is ${fullName}`);
}

introduce(user);
/* output
  kren is Kylo Ren
  */

//   Rest parameter juga dituliskan menggunakan three consecutive dots (...). Dengan rest parameter,
// kita dapat menggabungkan beberapa elemen menjadi satu array. Tentu teknik ini sangat bermanfaat
// ketika kita hendak membuat sebuah fungsi dengan parameter yang tidak pasti.
function sum(...numbers) {
  let result = 0;
  for (let number of numbers) {
    result += number;
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

function minimal(a, b) {
  if (a < b) {
    return a;
  } else if (a > b) {
    return b;
  } else if (a == b) {
    return a;
  }
}

function findIndex(array = [], number) {
  return array.indexOf(number);
}

console.log(findIndex([1, 2, 3, 4], 3));

const sayHello = function () {
  console.log("kkk");
};
sayHello();
