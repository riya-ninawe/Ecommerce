// Select all buttons with 'add-to-cart' class
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add click event on each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    alert('Item added to cart! 🛒💖');
  });
});


