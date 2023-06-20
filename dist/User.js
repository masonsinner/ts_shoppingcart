import { v4 as uuidv4 } from 'uuid';
var User = /** @class */ (function () {
    function User(name, age) {
        this.id = uuidv4();
        this.name = name;
        this.age = age;
        this.cart = [];
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.getCart = function () {
        return this.cart;
    };
    User.prototype.addToCart = function (item) {
        this.cart.push(item);
    };
    User.prototype.removeFromCart = function (item) {
        this.cart = this.cart.filter(function (cartItem) { return cartItem.getId() !== item.getId(); });
    };
    User.prototype.removeQuantityFromCart = function (item, quantity) {
        var existingItem = this.cart.find(function (cartItem) { return cartItem.getId() === item.getId(); });
        if (existingItem) {
            if (existingItem.getQuantity() <= quantity) {
                this.removeFromCart(existingItem);
            }
            else {
                existingItem.setQuantity(existingItem.getQuantity() - quantity);
            }
        }
    };
    User.prototype.cartTotal = function () {
        return this.cart.reduce(function (total, item) { return total + item.getPrice(); }, 0);
    };
    User.prototype.printCart = function () {
        console.log('Cart Contents:');
        for (var _i = 0, _a = this.cart; _i < _a.length; _i++) {
            var item = _a[_i];
            console.log("- ".concat(item.getName(), ": $").concat(item.getPrice()));
        }
    };
    return User;
}());
export { User };
