import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarService } from './services/sidebar.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    CommonModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isOpen = false;
  readonly title: string = 'sadgisi';

  readonly #sidebarService = inject(SidebarService);
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.#sidebarService.sidebarOpen$
      .pipe(takeUntilDestroyed(this.#destroyRef))
      .subscribe((isOpen) => {
        this.isOpen = isOpen;
      });
  }
}
