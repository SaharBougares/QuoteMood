import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { FavoritesComponent } from './pages/favorites/favorites';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'favorites', component: FavoritesComponent },
  { path: '**', redirectTo: '' },
];
