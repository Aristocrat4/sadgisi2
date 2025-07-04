import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeroImagesComponent } from '../../components/hero-images/hero-images.component';
import { RatingsComponent } from '../../shared/ratings/ratings.component';
import { QuestionsComponent } from '../../shared/questions/questions.component';

@Component({
  selector: 'app-homepage',
  imports: [HeroImagesComponent, RatingsComponent, QuestionsComponent],
  templateUrl: './homepage.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomepageComponent {}
