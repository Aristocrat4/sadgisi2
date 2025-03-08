import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuestionsComponent } from '../../shared/questions/questions.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink, QuestionsComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  showFilters = false;

  toggleFilters() {
    this.showFilters = !this.showFilters;

    // Prevent body scroll when filters are shown on mobile
    if (this.showFilters) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  // Clean up when component is destroyed
  ngOnDestroy() {
    document.body.style.overflow = '';
  }
}
