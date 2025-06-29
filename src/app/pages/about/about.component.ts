import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { QuestionsComponent } from '../../shared/questions/questions.component';
import { RatingsComponent } from '../../shared/ratings/ratings.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RatingsComponent, NgOptimizedImage],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  email = 'sadgisileather@gmail.com';
}
