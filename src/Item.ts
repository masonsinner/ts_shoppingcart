import { v4 as uuidv4 } from 'uuid';

export class Item {
  private id: string;
  private name: string;
  private price: number;
  private description: string;
  private quantity: number;

  constructor(name: string, price: number, description: string, quantity: number = 1) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.description = description;
    this.quantity = quantity;
  }

  getId(): string {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getPrice(): number {
    return this.price;
  }

  getDescription(): string {
    return this.description;
  }

  getQuantity(): number {
    return this.quantity;
  }

  setQuantity(quantity: number): void {
    this.quantity = quantity;
  }

  itemElement(): HTMLElement {
    const itemDiv = document.createElement('div');
    itemDiv.innerHTML = `
      <p>Name: ${this.getName()}</p>
      <p>Price: $${this.getPrice()}</p>
      <p>Description: ${this.getDescription()}</p>
      <p>Quantity: ${this.getQuantity()}</p>
    `;
    return itemDiv;
  }
}
