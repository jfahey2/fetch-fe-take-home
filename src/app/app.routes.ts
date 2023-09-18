import { Routes } from '@angular/router';

export const ROUTES: Routes = [
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
