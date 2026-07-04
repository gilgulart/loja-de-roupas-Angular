import { Component, input } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-banner',
  imports: [RouterLink],
  templateUrl: './banner.html',
  styleUrl: './banner.css',
})
export class Banner {
  bannerImg = input.required<string>();
  showContent = input(true);
}
