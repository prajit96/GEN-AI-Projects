import { Component } from '@angular/core';
import { Product } from '../product-list/product.model';
 // Import the Product model

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: Product[] = [];

  ngOnInit(): void {
    // Retrieve cart items from localStorage
    this.cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
  }

  removeFromCart(item: Product): void {
    // Implement your remove from cart logic here
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
      // Update localStorage after removing the item from the cart
      localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
    }
  }
  getTotalPrice(): number {
    return this.cartItems.reduce((total, product) => total + product.price, 0);
  }
}
