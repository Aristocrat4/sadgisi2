import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuestionsComponent } from '../../shared/questions/questions.component';
import { BasketProduct, BasketService } from '../../services/basket.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductListService } from '../../services/product-services/productsList.service';
import { Product } from '../../interfaces/product.interface';
import { FavoritesService } from '../../services/product-services/favoritesList.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule, QuestionsComponent],
  templateUrl: './product-details.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductDetailsComponent implements OnInit {
  product: Product | undefined;
  selectedColorIndex: number | null = null;
  currentImageIndex: number = 0;

  readonly #router = inject(Router);
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #productService = inject(ProductListService);
  readonly #basketService = inject(BasketService);
  readonly #favoritesService = inject(FavoritesService);

  ngOnInit(): void {
    const idParam = this.#activatedRoute.snapshot.paramMap.get('id');
    const productId = idParam ? +idParam : null;

    if (productId !== null) {
      this.#productService.getProductById(productId).subscribe((product) => {
        this.product = product;
        this.currentImageIndex = 0;
      });
    }
  }

  addIntoBasket() {
    if (!this.product) return;

    const basketItem: BasketProduct = {
      ...this.product,
      quantity: 1,
    };

    this.#basketService.addToBasket(basketItem);
  }

  toggleFavorite() {
    if (!this.product) return;
    this.#favoritesService.toggleFavorite(this.product.id);
  }

  isFavorite(): boolean {
    return this.product
      ? this.#favoritesService.isFavorite(this.product.id)
      : false;
  }

  navigateCheckout() {
    this.#router.navigate(['/checkout']);
  }

  nextImage(): void {
    if (!this.product?.images) return;
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.product.images.length;
  }

  prevImage(): void {
    if (!this.product?.images) return;
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.product.images.length) %
      this.product.images.length;
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }
}
