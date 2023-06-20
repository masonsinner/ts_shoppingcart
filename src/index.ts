import { User } from './User';
import { Shop } from './Shop';
import { Item } from './Item';

// Get the necessary elements from the DOM
const nameInput = document.getElementById('name') as HTMLInputElement;
const ageInput = document.getElementById('age') as HTMLInputElement;
const shopDiv = document.getElementById('shop-items') as HTMLDivElement;
const cartItemsDiv = document.getElementById('cart-items') as HTMLDivElement;
const cartTotalAmount = document.getElementById('cart-total-amount') as HTMLSpanElement;
const loginBanner = document.getElementById('login-banner') as HTMLDivElement;

// Create the Shop and Cart instances
const shop = new Shop();
const cart = document.createElement('div');
cart.id = 'cartItems';
cartItemsDiv.appendChild(cart);

// Function to update the cart contents in the HTML
function updateCart(user: User): void {
  cart.innerHTML = '';
  let totalCoins = 0;

  const cartItems = user.getCart();
  if (cartItems.length === 0) {
    cartItemsDiv.innerHTML = '<p>Cart is empty</p>';
  } else {
    for (const item of cartItems) {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('cart-item');
      itemDiv.innerHTML = `
        <p>${item.getName()} - ${item.getPrice()} Coins (${item.getQuantity()})</p>
      `;
      cart.appendChild(itemDiv);
      totalCoins += item.getPrice() * item.getQuantity();
    }
  }

  cartTotalAmount.textContent = totalCoins.toString();
}

// Event listener for the login/create user button
function loginUser(event: Event): void {
  event.preventDefault();

  const name = nameInput.value;
  const age = parseInt(ageInput.value);

  if (name && age) {
    const user = new User(name, age);
    Shop.myUser = user;
    updateCart(user);
    shop.showItems();
    loginBanner.style.display = 'none'; // Hide the login banner
  } else {
    loginBanner.style.display = 'block'; // Show the login banner
  }
}

// Attach the event listener to the login button
const loginButton = document.getElementById('loginButton');
if (loginButton) {
  loginButton.addEventListener('click', loginUser);
}

// Event listener for the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.btn.btn-bottom-left');
addToCartButtons.forEach((button) => {
  button.addEventListener('click', (event: Event) => {
    event.preventDefault();
    const target = event.target as HTMLElement;
    const itemTitle = target.parentElement.querySelector('.card-title').textContent;
    const itemPrice = parseInt(itemTitle.match(/\d+/)[0]);
    const user = Shop.myUser;
    if (user) {
      user.addToCart(new Item(itemTitle, itemPrice, '')); // Create a new Item instance
      updateCart(user);
    } else {
      loginBanner.style.display = 'block'; // Show the login banner
    }
  });
});
