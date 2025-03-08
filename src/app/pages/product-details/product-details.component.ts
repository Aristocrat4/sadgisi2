import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from '../../shared/questions/questions.component';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, QuestionsComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  // Properties for product details
  product = {
    id: 1,
    name: 'მამაკაცის ტყავის საფულე',
    description: 'იტალიური ტყავით შექმნილი საფულე',
    price: 75,
    rating: 4.9,
    description_long: 'იტვის 8 მდე ბარტს',
    additional_info: 'განკუთვნილია კაკიერებისთვის',
    quantity_in_stock: 5,
    images: [
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
      'https://placehold.co/600x400',
    ],
    colors: ['#C4977C', '#8B4513', '#000000'],
  };
}
