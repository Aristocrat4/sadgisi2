import { Component } from '@angular/core';
import { HeroImagesComponent } from '../../components/hero-images/hero-images.component';
import { RatingsComponent } from '../../shared/ratings/ratings.component';

@Component({
  selector: 'app-homepage',
  imports: [HeroImagesComponent, RatingsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
