import { Component, input } from '@angular/core';
import { Header } from '../../header/header';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-product-page',
  imports: [Header, Footer],
  templateUrl: './product-page.html',
  styleUrl: './product-page.css',
})
export class ProductPage {
}
