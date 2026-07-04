import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";
import { Product} from '../../services/product';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
  product = input.required<Product>();
}
