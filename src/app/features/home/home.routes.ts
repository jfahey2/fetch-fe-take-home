import { provideHttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { authGuard } from 'src/app/core/guards/auth.guard';

export default [
  {
    path: '',
    pathMatch: 'full',
    providers: [provideHttpClient()]
  }
] as Route[];
