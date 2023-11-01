// favorite.component.ts

import { Component, OnInit } from '@angular/core';
import { Product } from '../products/product.model';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoriteComponent implements OnInit {
  favoriteProducts: Product[] = [];

  ngOnInit(): void {
    // Retrieve favorite products from localStorage
    this.favoriteProducts = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');
  }

  removeFromFavorites(product: Product): void {
    // Implement your remove from favorites logic here
    const index = this.favoriteProducts.indexOf(product);
    if (index !== -1) {
      this.favoriteProducts.splice(index, 1);
      // Update localStorage after removing the product from favorites
      localStorage.setItem('favoriteProducts', JSON.stringify(this.favoriteProducts));
    }
  }
}
