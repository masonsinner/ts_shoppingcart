import { User } from './User';
import { Shop } from './Shop';
import { Item } from './Item';
// Get the necessary elements from the DOM
var nameInput = document.getElementById('name');
var ageInput = document.getElementById('age');
var shopDiv = document.getElementById('shop-items');
var cartItemsDiv = document.getElementById('cart-items');
var cartTotalAmount = document.getElementById('cart-total-amount');
var loginBanner = document.getElementById('login-banner');
// Create the Shop and Cart instances
var shop = new Shop();
var cart = document.createElement('div');
cart.id = 'cartItems';
cartItemsDiv.appendChild(cart);
// Function to update the cart contents in the HTML
function updateCart(user) {
    cart.innerHTML = '';
    var totalCoins = 0;
    var cartItems = user.getCart();
    if (cartItems.length === 0) {
        cartItemsDiv.innerHTML = '<p>Cart is empty</p>';
    }
    else {
        for (var _i = 0, cartItems_1 = cartItems; _i < cartItems_1.length; _i++) {
            var item = cartItems_1[_i];
            var itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = "\n        <p>".concat(item.getName(), " - ").concat(item.getPrice(), " Coins (").concat(item.getQuantity(), ")</p>\n      ");
            cart.appendChild(itemDiv);
            totalCoins += item.getPrice() * item.getQuantity();
        }
    }
    cartTotalAmount.textContent = totalCoins.toString();
}
// Event listener for the login/create user button
function loginUser(event) {
    event.preventDefault();
    var name = nameInput.value;
    var age = parseInt(ageInput.value);
    if (name && age) {
        var user = new User(name, age);
        Shop.myUser = user;
        updateCart(user);
        shop.showItems();
        loginBanner.style.display = 'none'; // Hide the login banner
    }
    else {
        loginBanner.style.display = 'block'; // Show the login banner
    }
}
// Attach the event listener to the login button
var loginButton = document.getElementById('loginButton');
if (loginButton) {
    loginButton.addEventListener('click', loginUser);
}
// Event listener for the "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll('.btn.btn-bottom-left');
addToCartButtons.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault();
        var target = event.target;
        var itemTitle = target.parentElement.querySelector('.card-title').textContent;
        var itemPrice = parseInt(itemTitle.match(/\d+/)[0]);
        var user = Shop.myUser;
        if (user) {
            user.addToCart(new Item(itemTitle, itemPrice, '')); // Create a new Item instance
            updateCart(user);
        }
        else {
            loginBanner.style.display = 'block'; // Show the login banner
        }
    });
});
