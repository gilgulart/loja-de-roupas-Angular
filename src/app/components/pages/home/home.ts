import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Banner } from '../../banner/banner';
import { Products } from '../../products/products';

@Component({
  selector: 'app-home',
  imports: [Header, Banner, Products],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
