import { ChangeDetectionStrategy, Component } from '@angular/core';
import { OrderHistory } from '../../../interfaces/product.interface';

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

  mockOrders: OrderHistory[] = [
    {
      orderId: 9,
      number: '212121212132',
      date: '26 თებ, 2024, 19:42',
      total: 75,
      products: [
        {
          id: 1,
          name: 'ყავისფერი ტყავის ქამარი',
          description: 'მაღალი ხარისხის ნატურალი ტყავით და ბალთით.',
          price: 75,
          rating: 4.9,
          description_long: 'ხელნაკეთი',
          additional_info: 'ზომა - 110-135 სმ',
          quantity_in_stock: 5,
           colors: ['brown'],
          images: [
            'assets/products/id-2-0.jpg',
            'assets/products/id-2-1.jpg',
            'assets/products/id-2-2.jpg',
            'assets/products/id-2-3.jpg',
            'assets/products/id-2-4.jpg',
          ],
          quanitity: 4,
        },
        {
          id: 3,
          name: 'საფულე ხევსურული ნაქარგით.  ',
          description:
            'ტრადიციისა და ხარისხის სინთეზი. მაღალი ხარისხის ნატურალი ტყავით და ბალთით.',
          price: 75,
          rating: 4.9,
          description_long:
            'კომპაქტური საფულე ქალებატონებისთვის. დამზადებულია ნატურალური ტყავისგან და გაფორმებულია ტრადიციული ხევსურული ნაქარგით, რაც ნივთს განსაკუთრებულს ხდის. ვინტაჟური ჩამკეტი მოხერხებულ და სწრაფ წვდომას უზრუნველყოფს მონეტებზე. აქვს ოთხი ბარათის ჯიბე (თითოეულში თავსდება 1-2 ბარათი) და სექცია ქეშისთვის (ლარი, დოლარი, ასევე ევრო).',
          additional_info:
            'მიუხედავად პატარა ზომისა (12 x 10 სმ), სპეციალური დიზაინი საფულეს ხდის ტევადს და მოხერხებულს ყოველდღიური გამოყენებისას.',
          quantity_in_stock: 5,
           colors: ['black'],
          images: [
            'assets/products/id-3-0.jpg',
            'assets/products/id-3-1.jpg',
            'assets/products/id-3-2.jpg',
            'assets/products/id-3-3.jpg',
            'assets/products/id-3-4.jpg',
            'assets/products/id-3-5.jpg',
            'assets/products/id-3-6.jpg',
            'assets/products/id-3-7.jpg',
          ],
          quanitity: 4,
        },
        {
          id: 4,
          name: 'სამაჯური ეგზოტიკური ტყავით',
          description: 'მაღალი ხარისხის ნატურალი ტყავით და ბალთით.',
          price: 75,
          rating: 4.9,
          description_long:
            ' დამუშავებული და შეკრილი მთლიანად ხელით, ნატურალური სირაქლემას ტყავით.',
          additional_info: 'ზომა (მაჯის) - 16-18 სმ',
          quantity_in_stock: 5,
           colors: ['black'],
          images: [
            'assets/products/id-4-0.jpg',
            'assets/products/id-4-1.jpg',
            'assets/products/id-4-2.jpg',
            'assets/products/id-4-3.jpg',
            'assets/products/id-4-4.jpg',
          ],
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
