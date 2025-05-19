import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  private mobileMenuOpenSubject = new BehaviorSubject<boolean>(false);
  mobileMenuOpen$ = this.mobileMenuOpenSubject.asObservable();

  toggleMobileMenu() {
    const currentState = this.mobileMenuOpenSubject.value;
    this.mobileMenuOpenSubject.next(!currentState);

    if (!currentState) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }

  closeMobileMenu() {
    this.mobileMenuOpenSubject.next(false);
    document.body.classList.remove('overflow-hidden');
  }
}
