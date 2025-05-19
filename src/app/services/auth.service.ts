import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticatedSubject = new BehaviorSubject<boolean>(true); // Set to true for testing

  isAuthenticated$ = this.isAuthenticatedSubject.asObservable();

  get isAuthenticated(): boolean {
    return this.isAuthenticatedSubject.value;
  }

  login() {
    // In a real app, this would make an API call
    this.isAuthenticatedSubject.next(true);
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    this.isAuthenticatedSubject.next(false);
    localStorage.removeItem('isAuthenticated');
  }

  checkAuthStatus() {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    this.isAuthenticatedSubject.next(isAuthenticated);
    return isAuthenticated;
  }
}
