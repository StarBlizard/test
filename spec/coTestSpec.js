const expect = require('chai').expect;

const { Product, CarInsurance } = require('../src/coTest');

describe('Co Test', function() {
  it('should be able to not update \'Mega Coverage products\'', function() {
    const sellIn = 12;
    const price  = 80;

    const insurance = new CarInsurance([ new Product('Mega Coverage', sellIn, price) ]);

    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(price );
    expect(insurance.products[0].sellIn).equal(sellIn);

    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(price );
    expect(insurance.products[0].sellIn).equal(sellIn);
  });

  it('should be able to correctly update \'Full Coverage products\'', function() {
    const sellIn = 2;
    const price  = 0;

    const insurance = new CarInsurance([ 'Full Coverage', sellIn, price ]);

    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(1);
    expect(insurance.products[0].sellIn).equal(1);

    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(2);
    expect(insurance.products[0].sellIn).equal(0);

    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(4);
    expect(insurance.products[0].sellIn).equal(-1);

    insurance.updateProductPrices();

    expect(insurance.products[0].price ).equal(6);
    expect(insurance.products[0].sellIn).equal(-2);
  });
});
