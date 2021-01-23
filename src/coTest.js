class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    return (this.updaters[this.name] || this.updaters.default)();
  }

  updaters = {
    default: function() {
      if (this.price < 0 || isNaN(this.price)) { this.price = 0; }
      if (!this.price || !this.sellIn) { return this; }

      --this.price;

      this.sellIn && --this.sellIn;
      this.sellIn || --price;

      return this;
    },

    'Full Coverage': function() {
      if (this.price < 0 || isNaN(this.price)) { this.price = 0; }
      if (!this.sellIn) { return this; }

      this.sellIn && --this.sellIn;

      if (this.price > 50) { return this; }

      ++this.price;

      return this;
    }
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
