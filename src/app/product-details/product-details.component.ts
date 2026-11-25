import { Component, EventEmitter, Input, OnChanges, Output, signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: true,
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnChanges {
  // Inputs receive product data from App.
  @Input() productName = '';
  @Input() productDescription = '';
  @Input() productPrice = 0;
  @Input() isAvailable = false;

  // Output sends the selection back to App.
  @Output() addToCart = new EventEmitter<{ name: string; quantity: number }>();

  quantity = signal(1);

  ngOnChanges() {
    this.quantity.set(1);
  }

  changeQuantity(amount: number) {
    this.quantity.update(current => Math.max(1, current + amount));
  }

  addProduct() {
    this.addToCart.emit({ name: this.productName, quantity: this.quantity() });
  }
}
