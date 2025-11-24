class Cart {
  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(name, price, qty) {
    this.items.push({ name, price, qty });
  }

  getTotal() {
    return this.items.reduce((sum, item) => sum + item.price * item.qty, 0);
  }

  applyCoupon(code) {
    // Coupon patterns: SAVE20, DISC10
    const pattern = /^(SAVE|DISC)(\d{2})$/;

    if (!pattern.test(code)) {
      return "Invalid coupon format!";
    }

    const percent = Number(code.match(/\d{2}/)[0]); // extract number
    this.discount = percent;

    return `Coupon applied: ${percent}% off`;
  }

  getFinalTotal() {
    const total = this.getTotal();
    return total - (total * this.discount / 100);
  }
}

const cart = new Cart();

// DOM handlers
function addItem() {
  const name = document.getElementById("itemName").value;
  const price = Number(document.getElementById("itemPrice").value);
  const qty = Number(document.getElementById("itemQty").value);

  cart.addItem(name, price, qty);
  displayCart();
}

function applyCoupon() {
  const code = document.getElementById("coupon").value.trim();
  alert(cart.applyCoupon(code));
  displayCart();
}

function displayCart() {
  document.getElementById("cartOutput").textContent = JSON.stringify({
    items: cart.items,
    subtotal: cart.getTotal(),
    discountApplied: cart.discount + "%",
    finalTotal: cart.getFinalTotal()
  }, null, 2);
}
