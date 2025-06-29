// src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { productsListData } from '../../mocks/products.mock'; // adjust path as needed
import { Product } from '../../interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class ProductListService {
  readonly #products: Product[] = productsListData;

  constructor() {}

  getAllProducts(): Observable<Product[]> {
    return of(this.#products);
  }

  getProductById(id: number): Observable<Product | undefined> {
    const product = this.#products.find((p) => p.id === id);
    return of(product);
  }
}
