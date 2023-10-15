// Immutable berarti sebuah objek tidak boleh diubah setelah objek tersebut dibuat.
// Dibawah ini adalah contoh Immutable yang diubah menjadi mutable(isi objeknya bisa diubah)
const user = {
  firstname: "Harry",
  lastName: "Protter", // ups, typo!
};

const createUserWithNewLastName = (newLastName, user) => {
  return { ...user, lastName: newLastName };
};

const newUser = createUserWithNewLastName("Potter", user);

console.log(newUser);

/**
 * output:
 * { firstname: 'Harry', lastName: 'Potter' }
 *
 */
