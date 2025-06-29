import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListService } from '../../../../services/product-services/productsList.service';
import { Product } from '../../../../interfaces/product.interface';
import { RouterLink } from '@angular/router';
import { BasketService } from '../../../../services/basket.service';
import { FavoritesService } from '../../../../services/product-services/favoritesList.service';

@Component({
  selector: 'app-product-listing',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-listing.component.html',
  styleUrl: './product-listing.component.css',
})
export class ProductListingComponent implements OnInit {
  products: Product[] = [];
  paginatedProducts: Product[] = [];
  currentPage = 1;
  itemsPerPage = 6;
  totalPages: number[] = [];

  readonly #productListService = inject(ProductListService);
  readonly #basketService = inject(BasketService);
  readonly #favoritesService = inject(FavoritesService);

  ngOnInit(): void {
    this.#productListService.getAllProducts().subscribe((data) => {
      this.products = data;
      const total = Math.ceil(this.products.length / this.itemsPerPage);
      this.totalPages = Array.from({ length: total }, (_, i) => i + 1);
      this.updatePaginatedProducts();
    });
  }

  updatePaginatedProducts(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedProducts = this.products.slice(start, end);
  }

  goToPage(page: number): void {
    this.currentPage = page;
    this.updatePaginatedProducts();
  }

  toggleFavorite(product: Product) {
    this.#favoritesService.toggleFavorite(product.id);
  }

  isFavorite(product: Product): boolean {
    return this.#favoritesService.isFavorite(product.id);
  }

  addToBasket(product: Product) {
    this.#basketService.addToBasket({ ...product, quantity: 1 });
  }
}
