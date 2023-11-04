/* 
   Filename: SophisticatedCode.js

   Description: 
   This code demonstrates a sophisticated and elaborate example of a web application that simulates an online shopping experience. 
   It includes user authentication, product browsing, shopping cart handling, and order processing. 

   Author: Your Name
   Date: dd/mm/yyyy
*/

// User authentication module
const users = [
  { username: "john123", password: "pass123", role: "customer" },
  { username: "admin", password: "adminpass", role: "admin" },
  // more user data...
];

function authenticateUser(username, password) {
  return users.find((user) => user.username === username && user.password === password);
}

// Product browsing module
const products = [
  { id: 1, name: "Shirt", price: 19.99, quantity: 10 },
  { id: 2, name: "Pants", price: 29.99, quantity: 5 },
  // more product data...
];

function browseProducts() {
  return products.map((product) => {
    return `${product.id}: ${product.name}, $${product.price}, Quantity: ${product.quantity}`;
  });
}

// Shopping cart handling module
let cart = [];

function addToCart(productId, quantity) {
  const product = products.find((p) => p.id === productId);

  if (product && product.quantity >= quantity) {
    const existingItem = cart.find((item) => item.product.id === productId);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ product, quantity });
    }

    product.quantity -= quantity;
    return true;
  }

  return false;
}

function viewCart() {
  return cart.map((item) => {
    return `${item.product.name} - Quantity: ${item.quantity}`;
  });
}

function checkout() {
  // Process the payment and create an order
  // ...

  // Empty the cart
  cart = [];
}

// Order processing module
const orders = [];

function createOrder() {
  const order = { products: cart.map((item) => item.product), date: new Date() };
  orders.push(order);
  // ...
}

// Usage examples
const user = authenticateUser("john123", "pass123");
if (user) {
  console.log(`Welcome, ${user.username}!`);

  const products = browseProducts();
  products.forEach((product) => console.log(product));

  addToCart(1, 2);
  addToCart(2, 1);

  const cartItems = viewCart();
  cartItems.forEach((item) => console.log(item));

  checkout();
  createOrder();

  console.log("Thank you for shopping!");
} else {
  console.log("Invalid credentials. Please try again.");
}