import { v4 as uuidv4 } from 'uuid';
import { Item } from './Item';

export class User {
  private id: string;
  private name: string;
  private age: number;
  private cart: Item[];

  constructor(name: string, age: number) {
    this.id = uuidv4();
    this.name = name;
    this.age = age;
    this.cart = [];
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getAge(): number {
    return this.age;
  }

  getCart(): Item[] {
    return this.cart;
  }

  addToCart(item: Item): void {
    this.cart.push(item);
  }

  removeFromCart(item: Item): void {
    this.cart = this.cart.filter((cartItem) => cartItem.getId() !== item.getId());
  }

  removeQuantityFromCart(item: Item, quantity: number): void {
    const existingItem = this.cart.find((cartItem) => cartItem.getId() === item.getId());
    if (existingItem) {
      if (existingItem.getQuantity() <= quantity) {
        this.removeFromCart(existingItem);
      } else {
        existingItem.setQuantity(existingItem.getQuantity() - quantity);
      }
    }
  }

  cartTotal(): number {
    return this.cart.reduce((total, item) => total + item.getPrice(), 0);
  }

  printCart(): void {
    console.log('Cart Contents:');
    for (const item of this.cart) {
      console.log(`- ${item.getName()}: $${item.getPrice()}`);
    }
  }
}
