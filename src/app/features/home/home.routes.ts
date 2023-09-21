import { provideHttpClient, withInterceptors, withRequestsMadeViaParent } from '@angular/common/http';
import { Routes } from '@angular/router';
import { LoginComponent } from '../../core/auth/login/login.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { AuthInterceptor } from 'src/app/core/interceptors/auth.interceptor';

export const HomeRoutes: Routes = [
  {
    path: '',
    providers: [
      provideHttpClient(
        withRequestsMadeViaParent(),
      ),
    ],
    pathMatch: 'full',
    loadComponent: () =>
      import('./components/home.component').then((x) => x.HomeComponent),

  },

];
