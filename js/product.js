// // Select all the "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// // Add click event to each button
// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const productCard = button.parentElement;
//         const title = productCard.querySelector('h3').innerText;
//         const price = productCard.querySelector('p').innerText;
//         const image = productCard.querySelector('img').src;

//         const product = { title, price, image };

//         // Get cart items from localStorage or create empty array
//         let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//         // Add new product to cart
//         cartItems.push(product);

//         // Save updated cart back to localStorage
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));

//         alert(`${title} added to cart! 🛒`);
//     });
// });


// // Select all add to cart buttons
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// addToCartButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const productCard = button.parentElement;
//         const name = productCard.querySelector('h3').innerText;
//         const price = productCard.querySelector('p').innerText;

//         const cart = JSON.parse(localStorage.getItem('cart')) || [];

//         // Push selected product into cart array
//         cart.push({ name, price });

//         // Save updated cart back to localStorage
//         localStorage.setItem('cart', JSON.stringify(cart));

//         alert(`${name} added to cart! 🛒`);
//     });
// });


// import { useCart } from '../context/CartContext'; // adjust path

// const Product = ({ product }) => {
//   const { addToCart } = useCart();

//   return (
//     <div className="product-card">
//       <img src={product.image} alt={product.name} />
//       <h2>{product.name}</h2>
//       <p>{product.price} ₹</p>
//       <button onClick={() => addToCart(product)}>Add to Cart</button>
//     </div>
//   );
// };










// Select all add to cart buttons
const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    const productCard = button.parentElement;
    const name = productCard.querySelector('h3').innerText;
    const price = productCard.querySelector('p').innerText.replace('$', ''); // Remove $ symbol
    const image = productCard.querySelector('img').src;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Check if product already exists in cart
    const existingProduct = cart.find(product => product.name === name);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.push({ name, price, image, quantity: 1 });
    }

    // Save updated cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${name} added to cart!`);
  });
});



// // Get the "Add to Cart" buttons
// const addToCartButtons = document.querySelectorAll('.add-to-cart');

// // Initialize an empty cart array
// let cart = JSON.parse(localStorage.getItem('cart')) || [];

// // Add event listeners to the "Add to Cart" buttons
// addToCartButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     // Get the product details
//     const productCard = button.parentElement;
//     const name = productCard.querySelector('h2').innerText;
//     const price = productCard.querySelector('p').innerText;

//     // Add the product to the cart array
//     cart.push({ name, price });

//     // Store the cart data in local storage
//     localStorage.setItem('cart', JSON.stringify(cart));

//     // Display a confirmation message
//     alert(`${name} added to cart!`);
//   });
// });