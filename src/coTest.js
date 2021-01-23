class Product {
  constructor(name, sellIn, price) {
    this.name = name;
    this.sellIn = sellIn;
    this.price = price;
  }

  updatePrice() {
    return (this.updaters[this.name] || this.updaters.default).call(this);
  }

  updaters = {
    'Mega Coverage': function() { return this; },

    'Full Coverage': function() {
      --this.sellIn;

      if (this.price > 50)   { return this;    }
      if (isNaN(this.price)) { this.price = 0; }

      ++this.price;

      this.sellIn > 0 || ++this.price;

      return this;
    },

    default: function() {
      if (isNaN(this.price)) { this.price = 0; }

      --this.price;
      --this.sellIn;

      this.sellIn > 0 || --this.price;

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
