import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from '../../shared/questions/questions.component';
import { RatingsComponent } from '../../shared/ratings/ratings.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RatingsComponent],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  email = 'sadgisileather@gmail.com';
}
