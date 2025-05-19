import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet],
  templateUrl: './profile.component.html',
})
export class ProfileComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    // Any initialization code
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  navLinks = [
    { path: 'info', label: 'პროფილი', icon: 'fa-regular fa-user' },
    {
      path: 'orders',
      label: 'შეკვეთის ისტორია',
      icon: 'fa-solid fa-cart-shopping',
    },
    {
      path: 'favorites',
      label: 'ფავორიტი პროდუქცია',
      icon: 'fa-regular fa-heart',
    },
    {
      path: 'notifications',
      label: 'შეტყობინებები',
      icon: 'fa-regular fa-bell',
    },
    {
      path: 'logout',
      label: 'ანგარიშიდან გასვლა',
      icon: 'fa-solid fa-arrow-right-to-bracket',
    },
  ];

  onNavLinkClick(path: string) {
    if (path === 'logout') {
      this.authService.logout();
      this.router.navigate(['/auth/sign-in']);
    }
  }
}
