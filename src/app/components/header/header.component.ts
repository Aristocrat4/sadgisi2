import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  // This would normally come from an auth service
  isLoggedIn = false;

  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private sidebarService: SidebarService
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
    });

    // Check if user is already authenticated
    this.authService.checkAuthStatus();
  }

  get profileLink(): string {
    return this.isLoggedIn ? '/profile' : '/auth/sign-in';
  }

  toggleProfileMenu() {
    this.profileService.toggleMobileMenu();
  }

  toggleSidebar() {
    this.sidebarService.toggleSidebar();
  }
}
