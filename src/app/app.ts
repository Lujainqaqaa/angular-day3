import { Component, signal } from '@angular/core';
import type { CartItem } from './shopping-cart/shopping-cart.component';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  // Create signals for the data shared with the child components.
  productName = signal('Laptop');
  productDescription = signal('Dell Laptop, Core i7, 16GB RAM');
  productPrice = signal(850);
  isAvailable = signal(true);
  cartItem = signal<CartItem | null>(null);

  showProduct(name: string, description: string, price: number, available: boolean) {
    // set() replaces the current value.
    this.productName.set(name);
    this.productDescription.set(description);
    this.productPrice.set(price);
    this.isAvailable.set(available);
  }

  // Receive the event from ProductDetails and update the cart signal.
  onAddToCart(selection: { name: string; quantity: number }) {
    this.cartItem.set({
      name: selection.name,
      price: this.productPrice(),
      quantity: selection.quantity,
    });
  }
}
