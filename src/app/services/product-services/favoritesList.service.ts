import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private favoriteIds = new Set<number>();
  private favoritesSubject = new BehaviorSubject<Set<number>>(this.favoriteIds);

  favorites$ = this.favoritesSubject.asObservable();

  constructor() {
    const saved = localStorage.getItem('favorites');
    if (saved) {
      try {
        const parsed: number[] = JSON.parse(saved);
        this.favoriteIds = new Set(parsed);
        this.favoritesSubject.next(new Set(this.favoriteIds));
      } catch {
        console.error('whoops');
      }
    }
  }

  toggleFavorite(productId: number) {
    if (this.favoriteIds.has(productId)) {
      this.favoriteIds.delete(productId);
    } else {
      this.favoriteIds.add(productId);
    }
    this.favoritesSubject.next(new Set(this.favoriteIds));
    this.saveFavoritesToLocalStorage();
  }

  isFavorite(productId: number): boolean {
    return this.favoriteIds.has(productId);
  }

  get currentFavorites(): Set<number> {
    return new Set(this.favoriteIds);
  }

  private saveFavoritesToLocalStorage() {
    const array = Array.from(this.favoriteIds);
    localStorage.setItem('favorites', JSON.stringify(array));
  }
}
