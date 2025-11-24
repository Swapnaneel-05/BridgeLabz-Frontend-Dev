class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  applyDiscount(percent) {
    this.price = this.price - (this.price * percent / 100);
  }

  display() {
    return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
  }
}

// Create products
const products = [
  new Product(1, "Laptop", 55000, "Electronics"),
  new Product(2, "Shoes", 1200, "Fashion"),
  new Product(3, "Book", 300, "Education"),
  new Product(4, "Phone", 15000, "Electronics"),
];

// Apply discount to all products
products.forEach(p => p.applyDiscount(10));  // 10% discount

// Filter products with price > 1000
const premiumProducts = products.filter(p => p.price > 1000);

// Display
console.log("Premium Products (>1000):");
premiumProducts.forEach(p => console.log(p.display()));
