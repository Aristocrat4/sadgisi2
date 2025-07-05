import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { ProfileService } from '../../services/profile.service';
import { SidebarService } from '../../services/sidebar.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    CommonModule,
    RouterModule,
    SidebarComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  // This would normally come from an auth service
  isLoggedIn = false;
  isSidebarOpen = false;
  constructor(
    private authService: AuthService,
    private profileService: ProfileService,
    private sidebarService: SidebarService,
  ) {}

  ngOnInit() {
    this.authService.isAuthenticated$.subscribe((isAuthenticated) => {
      this.isLoggedIn = isAuthenticated;
    });
    this.sidebarService.sidebarOpen$.subscribe((open) => {
      this.isSidebarOpen = open;
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
