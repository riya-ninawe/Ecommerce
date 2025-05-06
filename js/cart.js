// Read cart array from localStorage
const cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsContainer = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');

let total = 0;

// Check if cart is empty
if (cart.length === 0) {
    cartItemsContainer.innerHTML = `<p style="text-align:center; font-size:18px;">🛒 Your cart is empty! Let's go shopping! 🛍️</p>`;
    totalPriceElement.style.display = 'none'; // hide total if cart empty
} else {
    // Loop through cart and show each product
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');
        itemDiv.innerHTML = `
            <p><strong>${item.name}</strong> - ${item.price}</p>
        `;
        cartItemsContainer.appendChild(itemDiv);

        // Extract price number correctly (remove ₹ and text)
        const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
        total += priceNumber;
    });

    // Show total price
    totalPriceElement.textContent = `Total: ₹${total.toFixed(2)}`;
}
function checkout() {
    alert("Thank you for shopping with ShopEase! 💗");
    // Clear the cart after checkout
    localStorage.removeItem('cart');
    // Redirect to home or products
    window.location.href = 'index.html';
}


