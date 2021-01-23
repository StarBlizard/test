const expect = require('chai').expect;

const { Product, CarInsurance } = require('../src/coTest');

describe('Co Test', function() {
  it('should be able to not update \'Mega Coverage products\'', function() {
    const sellIn = 12;
    const price  = 80;

    const insurance = new CarInsurance([ new Product('Mega Coverage', sellIn, price) ]);

    // day 1
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(price );
    expect(insurance.products[0].sellIn).equal(sellIn);

    // day 2
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(price );
    expect(insurance.products[0].sellIn).equal(sellIn);
  });

  it('should be able to correctly update \'Full Coverage products\'', function() {
    const sellIn = 2;
    const price  = 0;

    const insurance = new CarInsurance([ new Product('Full Coverage', sellIn, price) ]);

    // day 1
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(1);
    expect(insurance.products[0].sellIn).equal(1);

    // day 2
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(2);
    expect(insurance.products[0].sellIn).equal(0);

    // day 3
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(4);
    expect(insurance.products[0].sellIn).equal(-1);

    // day 4
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(6);
    expect(insurance.products[0].sellIn).equal(-2);
  });

  it('should be able to correctly update \'Special Full Coverage products\'', function() {
    const insuranceA = new CarInsurance([ new Product('Special Full Coverage', 15, 20) ]);
    const insuranceB = new CarInsurance([ new Product('Special Full Coverage', 10, 49) ]);
    const insuranceC = new CarInsurance([ new Product('Special Full Coverage',  5, 49) ]);

    // day 1
    insuranceA.updateProductPrices();
    insuranceB.updateProductPrices();
    insuranceC.updateProductPrices();

    expect(insuranceA.products[0].price ).equal(21);
    expect(insuranceA.products[0].sellIn).equal(14);

    expect(insuranceB.products[0].price ).equal(50);
    expect(insuranceB.products[0].sellIn).equal(9);

    expect(insuranceC.products[0].price ).equal(50);
    expect(insuranceC.products[0].sellIn).equal(4);

    // day 2
    insuranceA.updateProductPrices();
    insuranceB.updateProductPrices();
    insuranceC.updateProductPrices();

    expect(insuranceA.products[0].price ).equal(22);
    expect(insuranceA.products[0].sellIn).equal(13);

    expect(insuranceB.products[0].price ).equal(50);
    expect(insuranceB.products[0].sellIn).equal(8);

    expect(insuranceC.products[0].price ).equal(50);
    expect(insuranceC.products[0].sellIn).equal(3);

    // day 3
    insuranceA.updateProductPrices();
    insuranceB.updateProductPrices();
    insuranceC.updateProductPrices();

    expect(insuranceA.products[0].price ).equal(23);
    expect(insuranceA.products[0].sellIn).equal(12);

    expect(insuranceB.products[0].price ).equal(50);
    expect(insuranceB.products[0].sellIn).equal(7);

    expect(insuranceC.products[0].price ).equal(50);
    expect(insuranceC.products[0].sellIn).equal(2);

    // day 4
    insuranceA.updateProductPrices();
    insuranceB.updateProductPrices();
    insuranceC.updateProductPrices();

    // day 5
    insuranceA.updateProductPrices();
    insuranceB.updateProductPrices();
    insuranceC.updateProductPrices();

    // day 6
    insuranceA.updateProductPrices();
    insuranceB.updateProductPrices();
    insuranceC.updateProductPrices();

    // day 7
    insuranceA.updateProductPrices();
    insuranceB.updateProductPrices();
    insuranceC.updateProductPrices();


    expect(insuranceA.products[0].price ).equal(29);
    expect(insuranceA.products[0].sellIn).equal(8);

    expect(insuranceB.products[0].price ).equal(50);
    expect(insuranceB.products[0].sellIn).equal(3);

    expect(insuranceC.products[0].price ).equal(0);
    expect(insuranceC.products[0].sellIn).equal(-2);
  });

  it('should be able to correctly update \'Super Sale products\'', function() {
    const price  = 40;
    const sellIn = 3;

    const insurance = new CarInsurance([ new Product('Super Sale', sellIn, price) ]);

    // day 1
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(38);
    expect(insurance.products[0].sellIn).equal(2);

    // day 2
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(36);
    expect(insurance.products[0].sellIn).equal(1);

    // day 3
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(34);
    expect(insurance.products[0].sellIn).equal(0);

    // day 4
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(30);
    expect(insurance.products[0].sellIn).equal(-1);

    // day 5
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(26);
    expect(insurance.products[0].sellIn).equal(-2);

    // day 6
    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(22);
    expect(insurance.products[0].sellIn).equal(-3);
  });
});
