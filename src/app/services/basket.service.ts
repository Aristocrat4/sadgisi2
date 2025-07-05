import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../interfaces/product.interface';

export interface BasketProduct extends Product {
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class BasketService {
  readonly #basket: BasketProduct[] = [];
  readonly #basketSubject = new BehaviorSubject<BasketProduct[]>([]);

  basket$ = this.#basketSubject.asObservable();

  addToBasket(product: BasketProduct) {
    const existing = this.#basket.find((p) => p.id === product.id);
    if (existing) {
      existing.quantity += product.quantity;
    } else {
      this.#basket.push({ ...product });
    }
    this.#basketSubject.next(this.#basket);
  }

  get basketSize(): number {
    return this.#basket.reduce((sum, item) => sum + item.quantity, 0);
  }

  get totalPrice(): number {
    return this.#basket.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }
}
