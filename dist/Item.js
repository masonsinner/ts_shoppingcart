import { v4 as uuidv4 } from 'uuid';
var Item = /** @class */ (function () {
    function Item(name, price, description, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.id = uuidv4();
        this.name = name;
        this.price = price;
        this.description = description;
        this.quantity = quantity;
    }
    Item.prototype.getId = function () {
        return this.id;
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getPrice = function () {
        return this.price;
    };
    Item.prototype.getDescription = function () {
        return this.description;
    };
    Item.prototype.getQuantity = function () {
        return this.quantity;
    };
    Item.prototype.setQuantity = function (quantity) {
        this.quantity = quantity;
    };
    Item.prototype.itemElement = function () {
        var itemDiv = document.createElement('div');
        itemDiv.innerHTML = "\n      <p>Name: ".concat(this.getName(), "</p>\n      <p>Price: $").concat(this.getPrice(), "</p>\n      <p>Description: ").concat(this.getDescription(), "</p>\n      <p>Quantity: ").concat(this.getQuantity(), "</p>\n    ");
        return itemDiv;
    };
    return Item;
}());
export { Item };
