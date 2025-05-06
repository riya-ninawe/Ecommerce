// // Select all buttons with 'add-to-cart' class
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// // Add click event on each button
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     alert('Item added to cart!🛒🫶🩷 ');
//   });
// });


// Select all buttons with 'add-to-cart' class
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Create notification div
const notification = document.createElement('div');
notification.id = 'notification';
document.body.appendChild(notification);

// Create an empty cart array
const cart = [];

// Add click event on each button
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productCard = button.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;

        // Save product to cart
        cart.push({
            name: productName,
            price: productPrice
        });

        showNotification(`${productName} added to cart! 🛒💗🎀`);
        console.log(cart); // to check in console
    });
});

// Function to show notification
function showNotification(message) {
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, 2000);
}







