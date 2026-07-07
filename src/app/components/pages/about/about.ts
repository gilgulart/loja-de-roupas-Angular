import { Component } from '@angular/core';
import { AboutArticle } from '../../about-article/about-article';
import { Banner } from '../../banner/banner';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-about',
  imports: [Banner, AboutArticle, Footer],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {}
