import { Component, inject } from '@angular/core';
import { BasketService } from '../../../../services/basket.service';

@Component({
  selector: 'app-basket-total',
  imports: [],
  standalone: true,
  templateUrl: './basket-total.component.html',
  styleUrl: './basket-total.component.css',
})
export class BasketTotalComponent {
  readonly #basketService = inject(BasketService);
  readonly deliveryFeee: number = 0;

  getBasketLenght(): number {
    return this.#basketService.basketSize;
  }

  getTotalPrice(): number {
    return this.#basketService.totalPrice + this.deliveryFeee;
  }
}
