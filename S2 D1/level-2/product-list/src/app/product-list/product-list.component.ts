import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = 'E-commerce Product Listing';
  products: any[] = [];
  cart: Product[] = [];


  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any[]>('assets/products.json')
      .subscribe(data => {
        this.products = data;
      });
  }

  addToCart(product: Product): void {
    // Implement your add to cart logic here
    // For example, you can store selected products in an array
    const cartItems: Product[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Show an alert to indicate the product has been added to the cart
    alert(`${product.title} added to cart!`);
  }
  
  
  removeFromCart(index: number): void {
    this.cart.splice(index, 1);
  }

  getTotalPrice(): number {
    return this.cart.reduce((total, product) => total + product.price, 0);
  }
}
