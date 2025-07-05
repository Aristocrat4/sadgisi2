import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { ProductListService } from '../../../services/product-services/productsList.service';
import { FavoritesService } from '../../../services/product-services/favoritesList.service';
import { Product } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { BasketProduct, BasketService } from '../../../services/basket.service';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorites.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FavoritesComponent implements OnInit {
  favoritesList: Product[] = [];

  readonly #productService = inject(ProductListService);
  readonly #favoritesService = inject(FavoritesService);
  readonly #basketService = inject(BasketService);

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

  removeFromFavorites(productId: number) {
    this.#favoritesService.toggleFavorite(productId);
    this.favoritesList = this.favoritesList.filter(
      (fav) => fav.id !== productId,
    );
  }

  addIntoBasket(product: Product) {
    const basketItem: BasketProduct = {
      ...product,
      quantity: 1,
    };

    this.#basketService.addToBasket(basketItem);
    this.#favoritesService.toggleFavorite(product.id);
    this.favoritesList = this.favoritesList.filter(
      (fav) => fav.id !== product.id,
    );
  }
}
