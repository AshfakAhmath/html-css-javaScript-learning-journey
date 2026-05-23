class Product {
  constructor(name, price) {
    ((this.name = name), (this.price = price));
  }
  display() {
    console.log(`Product: ${this.name}`);
    console.log(`Price: ${this.price.toFixed(2)}`);
  }
  totalPrice(tax){
    console.log(`Total price(with tax): ${((this.price) + (this.price * tax)).toFixed(2)}`);
  }
}

const tax = 0.15;

const product1 = new Product("iPhone", 150000.0);
const product2 = new Product("Samsung", 120000.0);
const product3 = new Product("Redmi", 50000.0);

product1.display();
product1.totalPrice(tax);
product2.display();
product2.totalPrice(tax);
product3.display();
product3.totalPrice(tax);

