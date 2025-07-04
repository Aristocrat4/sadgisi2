import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-orders-history',
  imports: [],
  standalone: true,
  templateUrl: './orders-history.component.html',
  styleUrl: './orders-history.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrdersHistoryComponent {
  openOrderId: number | null = null;

  mockOrders = [
    {
      orderId: 9,
      number: '212121212132',
      date: '26 თებ, 2024, 19:42',
      total: 75,
      products: [
        {
          id: 1,
          name: 'მამაკაცის იტალიური საფულე',
          description: 'იტალიური ტყავით შექმნილი საფულე',
          price: 75,
          rating: 4.9,
          description_long: 'იტევს 8-მდე ბარათს',
          additional_info: 'განკუთვნილია კაკიერებისთვის',
          quantity_in_stock: 5,
          images: ['https://placehold.co/600x400'],
          colors: ['#C4977C', '#8B4513'],
          quanitity: 4,
        },
        {
          id: 2,
          name: 'მამაკაცის ქართული საფულე',
          description: 'ქართული ტყავით შექმნილი საფულე',
          price: 70,
          rating: 4.7,
          description_long: 'იტევს 6 ბარათს და ქეშს',
          additional_info: 'იდეალურია ყოველდღიური გამოყენებისთვის',
          quantity_in_stock: 4,
          images: ['https://placehold.co/600x400'],
          colors: ['black', '#696969'],
          quanitity: 4,
        },
        {
          id: 3,
          name: 'მამაკაცის იტალიური ქამარი',
          description: 'იტალიური ტყავით დამზადებული კლასიკური ქამარი',
          price: 88,
          rating: 4.6,
          description_long: 'სიმძლავრე და ელეგანტურობა ერთ პროდუქში',
          additional_info: 'ოფიციალური სტილის მოყვარულთათვის',
          quantity_in_stock: 3,
          images: ['https://placehold.co/600x400'],
          colors: ['#654321', '#8B7355'],
          quanitity: 4,
        },
      ],
    },
  ];

  toggle(orderId: number): void {
    this.openOrderId = this.openOrderId === orderId ? null : orderId;
  }

  deleteProduct() {}
}
