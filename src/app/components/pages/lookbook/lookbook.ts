import { Component } from '@angular/core';
import { Banner } from '../../banner/banner';
import { LookbookArticle } from '../../lookbook-article/lookbook';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-lookbook',
  imports: [Banner, LookbookArticle, Footer],
  templateUrl: './lookbook.html',
  styleUrl: './lookbook.css',
})
export class Lookbook {}
