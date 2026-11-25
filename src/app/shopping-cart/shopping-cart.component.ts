import { DecimalPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

export interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.css',
})
export class ShoppingCartComponent {
  @Input() item: CartItem | null = null;
}
