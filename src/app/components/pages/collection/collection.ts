import { Component } from '@angular/core';
import { Header } from '../../header/header';
import { Banner } from '../../banner/banner';
import { CollectionBanner } from '../../collection-banner/collection-banner';
import { Footer } from '../../footer/footer';

@Component({
  selector: 'app-collection',
  imports: [Header, Banner, CollectionBanner, Footer],
  templateUrl: './collection.html',
  styleUrl: './collection.css',
})
export class Collection {
  collections = [
  {
    farLeft: '/sueterCogumelo.png',
    left: '/calcaCogumelo.png',
    center: '/bannerCogumelo.png',
    right: '/camisaCogumelo.png',
    farRight: '/shortsCogumelo.png',
  },
  {
    farLeft: '/calcaCaveira.png',
    left: '/camisaBotaoCaveira.png',
    center: '/bannerCaveira.png',
    right: '/camisaCaveira.png',
    farRight: '/calcaCaveira2.png',
  },
  {
    farLeft: '/shortsEclipse.png',
    left: '/calcaEclipse.png',
    center: '/bannerEclipse.png',
    right: '/camisaEclipse.png',
    farRight: '/camisaEclipse.png',
  }
];
}
