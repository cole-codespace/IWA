const rent = 400;
const tax = 8;
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line

let taxAsDecimal = 0;
let startingAfterTax = 0;
let balance = 0;

if (
  hourOfDay !== null &&
  minuteOfDay !== null &&
  hourOfDay == 00 &&
  minuteOfDay == 00
) {
  taxAsDecimal = tax / 100;
  startingAfterTax = salary * (1 - taxAsDecimal);
  balance = startingAfterTax - transport - food - rent;
}

console.log("R", balance.toFixed(2));
