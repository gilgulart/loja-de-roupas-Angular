import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Banner } from '../../banner/banner';
import { Products } from '../../products/products';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-home',
  imports: [Header, Banner, Products, Footer],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
