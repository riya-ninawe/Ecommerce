// // Get cart data from local storage
// const cart = JSON.parse(localStorage.getItem('cart'));

// // Get order summary elements
// const cartItemsElement = document.getElementById('cart-items');
// const totalPriceElement = document.getElementById('total-price');

// // Calculate total price
// let totalPrice = 0;
// cart.forEach(item => {
//     totalPrice += parseFloat(item.price.replace('$', ''));
// });

// // Update order summary
// cart.forEach(item => {
//     const cartItemElement = document.createElement('li');
//     cartItemElement.textContent = `${item.name} x 1 - $${item.price}`;
//     cartItemsElement.appendChild(cartItemElement);
// });

// // Update total price
// totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;


// Get cart data from local storage
const cart = JSON.parse(localStorage.getItem('cart'));

// Get order summary elements
const cartItemsElement = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

// Calculate total price
let totalPrice = 0;
cart.forEach(item => {
  totalPrice += parseFloat(item.price.replace('$', ''));
});

// Update order summary
cart.forEach(item => {
  const cartItemElement = document.createElement('li');
  cartItemElement.textContent = `${item.name} - ${item.price}`;
  cartItemsElement.appendChild(cartItemElement);
});

// Update total price
totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;