import { Component, input } from '@angular/core';
import { Product  } from '../../services/product';
import { Form } from '../form/form';

@Component({
  selector: 'app-product-image',
  imports: [Form],
  templateUrl: './product-image.html',
  styleUrl: './product-image.css',
})
export class ProductImage {
  product = input.required<Product>();
}
