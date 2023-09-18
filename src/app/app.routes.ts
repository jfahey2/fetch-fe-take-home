import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./features/home/home.routes')
  },

  {
    path: 'dogs',
    pathMatch: 'full',
    loadChildren: () => import('./features/dogs/dogs.routes')
  }
];
