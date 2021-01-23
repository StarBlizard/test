const fs       = require('fs');
const { join } = require('path');

const { Product, CarInsurance } = require('../src/coTest');

const productsAtDayZero = [
  new Product('Medium Coverage',       10, 20),
  new Product('Full Coverage',          2,  0),
  new Product('Low Coverage',           5,  7),
  new Product('Mega Coverage',          0, 80),
  new Product('Mega Coverage',         -1, 80),
  new Product('Special Full Coverage', 15, 20),
  new Product('Special Full Coverage', 10, 49),
  new Product('Special Full Coverage',  5, 49),
  new Product('Super Sale',             3,  6)
];

const carInsurance = new CarInsurance(productsAtDayZero);

let printString = '';

for (let i = 1; i <= 30; i += 1) {
  console.log(`--------------------------- Day ${i} ------------------------------`);
  console.table(carInsurance.updateProductPrices());

  if (process.env.npm_config_print) {
    printString += `--------------------------- Day ${i} ------------------------------\n`;

    printString += JSON.stringify(
      carInsurance.products.reduce( (result, { updaters, name, ...data }) => {
        result[ name ] = data;
        return result;
      }, {}),
      null,
      2
    ) + '\n';
  }
}

if (process.env.npm_config_print) {
  const path = join(process.cwd(), 'after30DaysResult.txt');

  fs.writeFile(path, printString, (err, file) => {
    if (err) { throw err; }
    console.log('Created Result File:', path);
  });
}
