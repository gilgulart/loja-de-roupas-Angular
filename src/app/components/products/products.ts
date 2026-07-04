import { Component } from '@angular/core';
import { Card } from '../card/card';
import {Product, ProductService } from '../../services/product';

@Component({
  selector: 'app-products',
  imports: [Card],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products : Product[] = [];

  constructor(private productService: ProductService){
    this.products = this.productService.getProducts();
  }
}
