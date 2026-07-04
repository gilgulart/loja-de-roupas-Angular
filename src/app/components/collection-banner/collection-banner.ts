import { Component, input} from '@angular/core';

@Component({
  selector: 'app-collection-banner',
  imports: [],
  templateUrl: './collection-banner.html',
  styleUrl: './collection-banner.css',
})

export class CollectionBanner {
  collection = input.required<Collection>();
  
}

export interface Collection {
  farLeft: string;
  left: string;
  center: string;
  right: string;
  farRight: string;
}