import { Item } from './Item';
import { User } from './User';

export class Shop {
  private items: Item[];
  static myUser: User | null;

  constructor() {
    this.items = [];
    this.initializeItems();
  }

  getItems(): Item[] {
    return this.items;
  }

  private initializeItems(): void {
    const item1 = new Item('Bullet Bill', 25, 'Like being on autopilot, except on a dangerous giant bullet!');
    const item2 = new Item('Banana Peel', 15, 'Slippery! Look out!');
    const item3 = new Item('Blue Shell', 40, "No one likes second place, or twelfth, we don't judge here. Almost like cheating, throw this mystical Blue Shell to hit the leader and anyone near!");
    const item4 = new Item('Star Power', 35, "Literally just a cheat code, just don't go falling off the map");
    this.items.push(item1, item2, item3, item4);
  }

  showItems(): void {
    const items = this.getItems();
    const shopDiv = document.getElementById('shopDiv');
    if (shopDiv) {
      for (const item of items) {
        const itemDiv = item.itemElement();
        const addButton = document.createElement('button');
        addButton.textContent = 'Add to Cart';
        addButton.addEventListener('click', () => {
          this.addToCart(item);
        });
        itemDiv.appendChild(addButton);
        shopDiv.appendChild(itemDiv);
      }
    }
  }

  addToCart(item: Item): void {
    const cartDiv = document.getElementById('cartItems');
    if (cartDiv) {
      const cartItemDiv = document.createElement('div');
      cartItemDiv.innerHTML = `
        <p>Name: ${item.getName()}</p>
        <p>Price: $${item.getPrice()}</p>
        <p>Description: ${item.getDescription()}</p>
        <p>Quantity: ${item.getQuantity()}</p>
      `;
      cartDiv.appendChild(cartItemDiv);
    }
  }
}
