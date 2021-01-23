class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    if (this.price < 0 || isNaN(this.price)) { this.price = 0; }
    if (!this.price) { return this; }
    --this.price;
    this.sellIn && --this.sellIn;
    this.sellIn || --price;
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updatePrice() {
    this.products = this.products.map( product => product.updatePrice() );
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
};
