import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './product.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  filteredProducts: Product[] = [];
  filterForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
    this.filterForm = this.formBuilder.group({
      category: ['asc'],
      sortBy: ['dese']
    });
  }

  ngOnInit(): void {
    this.http.get<Product[]>('https://food-app-data.onrender.com/foods')
      .subscribe(products => {
        this.products = products;
        this.applyFilters();
      });

    this.filterForm.valueChanges.subscribe(() => {
      this.applyFilters();
    });
  }

  // products.component.ts

toggleFavorite(product: Product): void {
  product.isFavorite = !product.isFavorite;

  // Get favorite products from localStorage or initialize an empty array
  const favoriteProducts: Product[] = JSON.parse(localStorage.getItem('favoriteProducts') || '[]');

  // If product is favorite, add it to favoriteProducts; otherwise, remove it
  if (product.isFavorite) {
    favoriteProducts.push(product);
  } else {
    const index = favoriteProducts.findIndex(p => p.id === product.id);
    if (index !== -1) {
      favoriteProducts.splice(index, 1);
    }
  }

  // Store favorite products in localStorage
  localStorage.setItem('favoriteProducts', JSON.stringify(favoriteProducts));
  // Show an alert to indicate the product has been added to the cart
  alert(`${product.name} added to favorite!`);
}


  applyFilters(): void {
    const categoryControl = this.filterForm.get('category');
    const sortByControl = this.filterForm.get('sortBy');
  
    // Check if form controls are not null before accessing their values
    const category = categoryControl?.value ?? 'asc';
    const sortBy = sortByControl?.value ?? 'desc';
  
    this.filteredProducts = this.products.filter(product => {
      if (category === 'asc' || product.category === category) {
        return true; // Include product in filtered list
      }
      return false; // Exclude product from filtered list
    });
  
    if (sortBy === 'desc') {
      this.filteredProducts.sort((a, b) => a.price - b.price);
    } else {
      this.filteredProducts.sort((a, b) => b.price - a.price);
    }
  }
  

  viewDetails(product: Product): void {
    // Implement your view details logic here
    console.log('View details for', product);
  }

  addToCart(product: Product): void {
    // Implement your add to cart logic here
    // For example, you can store selected products in an array
    const cartItems: Product[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    
    // Show an alert to indicate the product has been added to the cart
    alert(`${product.name} added to cart!`);
  }
}
