import { Routes } from '@angular/router';
import { ProductsComponent } from './pages/products/products.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { AboutComponent } from './pages/about/about.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { OrderComponent } from './pages/order/order.component';
import { SignInComponent } from './pages/auth/sign-in/sign-in.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ProfileInfoComponent } from './pages/profile/profile-info/profile-info.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ProfileNotificationsComponent } from './pages/profile/profile-notifications/profile-notifications.component';
import { OrdersHistoryComponent } from './pages/profile/orders-history/orders-history.component';
import { FavoritesComponent } from './pages/profile/favorites/favorites.component';

export const routes: Routes = [
  {
    path: 'products',
    component: ProductsComponent,
  },
  {
    path: 'products/:id',
    component: ProductDetailsComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: '',
    component: HomepageComponent,
    pathMatch: 'full',
  },
  {
    path: 'order',
    component: OrderComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  {
    path: 'auth',
    children: [
      { path: '', redirectTo: 'sign-in', pathMatch: 'full' },
      { path: 'sign-in', component: SignInComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: '', redirectTo: 'info', pathMatch: 'full' },
      { path: 'info', component: ProfileInfoComponent },
      { path: 'orders', component: OrdersHistoryComponent },
      { path: 'favorites', component: FavoritesComponent },
      { path: 'notifications', component: ProfileNotificationsComponent },
    ],
  },
];
