import { Item } from './Item';
var Shop = /** @class */ (function () {
    function Shop() {
        this.items = [];
        this.initializeItems();
    }
    Shop.prototype.getItems = function () {
        return this.items;
    };
    Shop.prototype.initializeItems = function () {
        var item1 = new Item('Bullet Bill', 25, 'Like being on autopilot, except on a dangerous giant bullet!');
        var item2 = new Item('Banana Peel', 15, 'Slippery! Look out!');
        var item3 = new Item('Blue Shell', 40, "No one likes second place, or twelfth, we don't judge here. Almost like cheating, throw this mystical Blue Shell to hit the leader and anyone near!");
        var item4 = new Item('Star Power', 35, "Literally just a cheat code, just don't go falling off the map");
        this.items.push(item1, item2, item3, item4);
    };
    Shop.prototype.showItems = function () {
        var _this = this;
        var items = this.getItems();
        var shopDiv = document.getElementById('shopDiv');
        if (shopDiv) {
            var _loop_1 = function (item) {
                var itemDiv = item.itemElement();
                var addButton = document.createElement('button');
                addButton.textContent = 'Add to Cart';
                addButton.addEventListener('click', function () {
                    _this.addToCart(item);
                });
                itemDiv.appendChild(addButton);
                shopDiv.appendChild(itemDiv);
            };
            for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
                var item = items_1[_i];
                _loop_1(item);
            }
        }
    };
    Shop.prototype.addToCart = function (item) {
        var cartDiv = document.getElementById('cartItems');
        if (cartDiv) {
            var cartItemDiv = document.createElement('div');
            cartItemDiv.innerHTML = "\n        <p>Name: ".concat(item.getName(), "</p>\n        <p>Price: $").concat(item.getPrice(), "</p>\n        <p>Description: ").concat(item.getDescription(), "</p>\n        <p>Quantity: ").concat(item.getQuantity(), "</p>\n      ");
            cartDiv.appendChild(cartItemDiv);
        }
    };
    return Shop;
}());
export { Shop };
