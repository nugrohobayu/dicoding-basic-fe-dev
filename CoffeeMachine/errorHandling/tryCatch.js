// Blok finally akan tetap dijalankan tanpa peduli apa pun hasil yang terjadi pada blok try-catch.
try {
  console.log("Awal blok try");
  console.log("Akhir blok try");
} catch (error) {
  console.log("Baris ini diabaikan");
} finally {
  console.log("Akan tetap dieksekusi");
}

const json = '{ "name": "Yoda", "age": 20 }';

try {
  const user = JSON.parse(json);

  console.log(user.name);
  console.log(user.age);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
}

// Untuk mengatasinya, kita bisa menggunakan throw. Operator ini akan “melemparkan” eror pada program,
//  sehingga eksekusi kode akan masuk pada blok catch.
// Berikut ini adalah contoh mengimplementasikan throw untuk menimbulkan eror kita sendiri:
try {
  const user = JSON.parse(json);

  if (!user.name) {
    throw new SyntaxError("'name' is required.");
  }

  console.log(user.name); // undefined
  console.log(user.age); // 20
} catch (error) {
  console.log(`JSON Error: ${error.message}`);
}

/* output
  JSON Error: 'name' is required.
  */
