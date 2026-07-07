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
      description: "    Camisa D E W Y, feita com tecido de alta qualidade e design moderno. Perfeita para quem busca estilo e conforto em uma única peça. Disponível em diversas cores e tamanhos."
    },
    
    {
      id: 2,
      title: 'Corta-vento D E W Y',
      price: 250,
      image: "/cortavento.jpeg",
      hoverImage: "/cortaventoHover.jpeg",
      description: "O corta-vento DEWY une resistência, conforto e estilo urbano. Produzido com material leve e durável, oferece proteção contra o vento com um caimento moderno e acabamento premium. Feito para quem busca presença e qualidade no dia a dia."
    },
    
    {
      id: 3,
      title: 'Camisa D E W Y',
      price: 150,
      image: "/blackTshirt.jpeg",
      hoverImage: "/blackTshirtModel.png",
      description: " Camisa D E W Y, feita com tecido de alta qualidade e design moderno. Perfeita para quem busca estilo e conforto em uma única peça. Disponível em diversas cores e tamanhos."
    },

    {
      id: 4,
      title: 'Camisa D E W Y',
      price: 150,
      image: "/DewyRed.jpeg",
      hoverImage: "/redModelo.png",
      description: "Camisa D E W Y, feita com tecido de alta qualidade e design moderno. Perfeita para quem busca estilo e conforto em uma única peça. Disponível em diversas cores e tamanhos."
    },
    
    {
      id: 5,
      title: 'Boné D E W Y',
      price: 100,
      image: "/bone.jpeg",
      hoverImage: "/boneModelo.jpeg",
      description: " O boné DEWY foi desenvolvido com materiais de alta qualidade e acabamento impecável, proporcionando conforto, durabilidade e ajuste perfeito. Seu design clean com bordado premium destaca a identidade da marca de forma moderna e autêntica. Uma peça essencial para complementar qualquer visual com atitude e sofisticação."
    },

    {
      id: 6,
      title: 'Calça D E W Y',
      price: 100,
      image: "/calça.jpg",
      hoverImage: "/modelocalça.jpeg",
      description: "  Calça D E W Y, feita com tecido de alta qualidade e design moderno. Perfeita para quem busca estilo e conforto em uma única peça. Disponível em diversas cores e tamanhos."
    },
    
    
    {
      id: 7,
      title: 'Bermuda D E W Y',
      price: 130,
      image: "/bermuda.jpeg",
      hoverImage: "/modeloberma.jpeg",
      description: "   Bermuda D E W Y, feita com tecido de alta qualidade e design moderno. Perfeita para quem busca estilo e conforto em uma única peça. Disponível em diversas cores e tamanhos."
    },
    
    {
      id: 8,
      title: 'Boné D E W Y',
      price: 100,
      image: "/moletom.jpeg",
      hoverImage: "/modelomoletom.png",
      description: " Moletom D E W Y, feita com tecido de alta qualidade e design moderno. Perfeita para quem busca estilo e conforto em uma única peça. Disponível em diversas cores e tamanhos."
    },
    

  ];

   getProducts() {
    return this.products;
  }

  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
}

