class Car {
  constructor(brand, color, maxSpeed) {
    this.brand = brand;
    this.color = color;
    this.maxSpeed = maxSpeed;
    this._chassisNumber = `${brand}-${Math.floor(Math.random() * 1000)}`;
  }

  get chassisNumber() {
    return this._chassisNumber;
  }

  set chassisNumber(chassisNumber) {
    console.log(`This chassis number ${chassisNumber}`);
  }

  // Methods
  drive() {
    console.log(`${this.brand} ${this.color} is driving`);
  }

  // Methods dengan arguments
  turn(a) {
    console.log(`${this.brand} ${this.color} is turn ${a}`);
  }
}

const car = new Car("Honda", "red", 100);
console.log(car.chassisNumber);
car.chassisNumber = "Toyota";
console.log(car.chassisNumber);
car.drive();
car.turn("Right");
