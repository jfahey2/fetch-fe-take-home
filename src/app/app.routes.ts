import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { provideHttpClient, withRequestsMadeViaParent, withInterceptors } from '@angular/common/http';

export const AppRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    canActivate: [authGuard],
    providers: [
      provideHttpClient(
        withRequestsMadeViaParent(),
        // withInterceptors([
        //   (req, next) => {
        //     console.log('h Interceptors');
        //     return next(req);
        //   },
        // ])
      ),
    ],
    loadChildren: () => import('./features/home/home.routes').then((x) => x.HomeRoutes)
  },

  {
    path: 'dogs',
    providers: [
      provideHttpClient(
        withRequestsMadeViaParent(),
      ),
    ],
    canActivate: [authGuard],

    loadChildren: () => import('./features/dogs/dogs.routes').then((x) => x.DogsRoutes),
  },
  {
    path: 'login',
    providers: [
      provideHttpClient(
        withRequestsMadeViaParent(),
      ),
    ],
    loadComponent: () => import('./core/auth/login/login.component').then((x) => x.LoginComponent)
  }

];
