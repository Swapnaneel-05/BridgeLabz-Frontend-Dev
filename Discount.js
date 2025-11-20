const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedCart = [];
let total = 0;

// Apply category-based discounts
for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 10;
    } else if (product.category === "fashion") {
        discount = 5;
    }

    // Final price after discount
    let finalPrice = product.price - (product.price * discount / 100);

    discountedCart.push({
        item: product.item,
        originalPrice: product.price,
        discountPercent: discount,
        finalPrice: finalPrice
    });

    total += finalPrice;
}

// Apply extra 5% discount if cart value > 50000
let extraDiscount = 0;
if (total > 50000) {
    extraDiscount = 5;
    total -= (total * 5) / 100;
}

// Summary using reduce (optional for final total)
let finalTotal = discountedCart
    .reduce((sum, p) => sum + p.finalPrice, 0);

if (extraDiscount > 0) {
    finalTotal = Math.round(finalTotal - (finalTotal * extraDiscount / 100));
}

console.log("Cart With Discounts:", discountedCart);
console.log("Extra Overall Discount Applied:", extraDiscount + "%");
console.log("Final Total:", finalTotal);
