// Closure memungkinkan kita membuat fungsi dan variabel seolah menjadi private.
// Seperti inilah contoh program counter yang dibuat dengan closure:
const add = () => {
  let counter = 0;
  return () => {
    return ++counter;
  };
};

const addCounter = add();

console.log(addCounter());
console.log(addCounter());
console.log(addCounter());
