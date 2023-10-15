const priceInJPY = 5000;

let currency = new Map([
  ["USD", 14000],
  ["JPY", 131],
  ["SGD", 11000],
  ["MYR", 3500],
]);

let priceInIDR = priceInJPY * currency.get("JPY");
console.log(priceInIDR);

// - key "USD", value 14000
//  *   - key "JPY", value 131
//  *   - key "SGD", value 11000
//  *   - key "MYR", value 3500
