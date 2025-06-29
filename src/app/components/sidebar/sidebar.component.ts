import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Subscription } from 'rxjs';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, OnDestroy {
  isOpen = false;
  isLoggedIn = false;
  private sidebarSubscription!: Subscription;
  private authSubscription!: Subscription;

  constructor(
    private sidebarService: SidebarService,
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.sidebarSubscription = this.sidebarService.sidebarOpen$.subscribe(
      (isOpen) => {
        this.isOpen = isOpen;
      },
    );

    this.authSubscription = this.authService.isAuthenticated$.subscribe(
      (isAuthenticated) => {
        this.isLoggedIn = isAuthenticated;
      },
    );
  }

  ngOnDestroy() {
    if (this.sidebarSubscription) {
      this.sidebarSubscription.unsubscribe();
    }
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  closeSidebar() {
    this.sidebarService.closeSidebar();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
    this.closeSidebar();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/auth/sign-in']);
    this.closeSidebar();
  }
}
