import { Component, input } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';
import { ActivatedRoute } from '@angular/router';
import { Product, ProductService } from '../../../services/product';
import { ProductImage } from '../../product-image/product-image';

@Component({
  selector: 'app-product-page',
  imports: [Header, Footer, ProductImage],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {

  product?: Product;

  constructor (
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
      const id = Number(this.route.snapshot.paramMap.get('id'));
      this.product = this.productService.getProductById(id);
  }




}
