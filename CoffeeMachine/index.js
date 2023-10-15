const coffeeStock = require("./exportSingle");
const { coffees, isCoffeeMachineReady } = require("./exportDouble"); // import lebih dari satu module dengan

const makeCoffee = (type, miligrams) => {
  if (coffeeStock[type] >= miligrams) {
    console.log(`Kopi ${type} berhasil dibuat!`);
  } else {
    console.log("Biji kopi habis!");
  }
};

makeCoffee("robusta", 80);
