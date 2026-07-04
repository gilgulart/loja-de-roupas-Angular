import { Injectable } from '@angular/core';

export interface Product{
  id: number;
  title: string;
  price: number;
  image: string;
  hoverImage: string;
  description: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    {
      id: 1,
      title: 'Camisa D E W Y',
      price: 150,
      image: "/camisa.jpeg",
      hoverImage: "/camisaHover.jpeg",
      description: "Descrição da camisa"
    },
    
    {
      id: 2,
      title: 'Corta-vento D E W Y',
      price: 250,
      image: "/cortavento.jpeg",
      hoverImage: "/cortaventoHover.jpeg",
      description: "Descrição da camisa"
    },
    
    {
      id: 3,
      title: 'Camisa D E W Y',
      price: 150,
      image: "/blackTshirt.jpeg",
      hoverImage: "/blackTshirtModel.png",
      description: "Descrição da camisa"
    },

    {
      id: 4,
      title: 'Camisa D E W Y',
      price: 150,
      image: "/DewyRed.jpeg",
      hoverImage: "/redModelo.png",
      description: "Descrição da camisa"
    },
    
    {
      id: 5,
      title: 'Boné D E W Y',
      price: 100,
      image: "/bone.jpeg",
      hoverImage: "/boneModelo.jpeg",
      description: "Descrição da camisa"
    },

    {
      id: 6,
      title: 'Calça D E W Y',
      price: 100,
      image: "/calça.jpg",
      hoverImage: "/modelocalça.jpeg",
      description: "Descrição da camisa"
    },
    
    
    {
      id: 7,
      title: 'Bermuda D E W Y',
      price: 130,
      image: "/bermuda.jpeg",
      hoverImage: "/modeloberma.jpeg",
      description: "Descrição da camisa"
    },
    
    {
      id: 8,
      title: 'Boné D E W Y',
      price: 100,
      image: "/moletom.jpeg",
      hoverImage: "/modelomoletom.png",
      description: "Descrição da camisa"
    },
    

  ];

   getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}

