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

      if (this.price > 49)   { return this;    }
      if (isNaN(this.price)) { this.price = 0; }

      ++this.price;

      this.sellIn > -1 || ++this.price;

      return this;
    },

    'Special Full Coverage': function() {
      --this.sellIn;

      if (this.sellIn < 0) {
        this.price = 0;
        return this;
      }

      if (this.price >= 50)   { return this;    }
      if (isNaN(this.price)) { this.price = 0; }

      ++this.price;

      this.sellIn < 11 || ++this.price;
      this.sellIn < 6  || ++this.price;

      return this;
    },

    'Super Sale': function() {
      if (isNaN(this.price)) { this.price = 0; }

      this.price -= 2;
      --this.sellIn;

      this.sellIn > -1 || (this.price -= 2);

      return this;
    },

    default: function() {
      if (isNaN(this.price)) { this.price = 0; }

      --this.price;
      --this.sellIn;

      this.sellIn > -1 || --this.price;

      return this;
    }
  }
}

class CarInsurance {
  constructor(products = []) {
    this.products = products;
  }

  updateProductPrices() {
    this.products = this.products.map( product => product.updatePrice() );
    return this.products;
  }
}

module.exports = {
  Product,
  CarInsurance
};
