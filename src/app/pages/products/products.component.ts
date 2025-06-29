import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { QuestionsComponent } from '../../shared/questions/questions.component';
import { ProductListingComponent } from './components/product-listing/product-listing.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    QuestionsComponent,
    ProductListingComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  showFilters = false;
  selectedColorIndex: number | null = null;

  // some dumb data for colors
  colors = ['#C4977C', '#8B4513', '#654321', '#8B7355', '#696969', 'black'];

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
