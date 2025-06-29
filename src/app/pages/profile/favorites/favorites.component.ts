import { Component, OnInit, inject } from '@angular/core';
import { ProductListService } from '../../../services/product-services/productsList.service';
import { FavoritesService } from '../../../services/product-services/favoritesList.service';
import { Product } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css'],
})
export class FavoritesComponent implements OnInit {
  favoritesList: Product[] = [];

  readonly #productService = inject(ProductListService);
  readonly #favoritesService = inject(FavoritesService);

  ngOnInit() {
    this.#productService.getAllProducts().subscribe((products) => {
      const favIds = new Set(this.#favoritesService.currentFavorites);
      this.favoritesList = products.filter((product) => favIds.has(product.id));
    });

    this.#favoritesService.favorites$.subscribe((favIdsSet) => {
      this.#productService.getAllProducts().subscribe((products) => {
        this.favoritesList = products.filter((product) =>
          favIdsSet.has(product.id),
        );
      });
    });
  }
}
