import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: any[] = [];
  loading: boolean = true;
  error: string = '';
  selectedProduct: any = null;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProducts()
      .subscribe(
        (data: any[]) => {
          this.products = data;
          this.loading = false;
        },
        error => {
          this.error = 'Error fetching data from the API';
          this.loading = false;
        }
      );
  }

  showProductDetails(product: any) {
    this.selectedProduct = product;
  }

  closeModal() {
    this.selectedProduct = null;
  }
}
