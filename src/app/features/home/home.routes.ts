import { provideHttpClient } from '@angular/common/http';
import { Route } from '@angular/router';
import { HomeComponent } from './components/home.component';

export default [
  {
    path: '',
    pathMatch: 'prefix',
        providers: [provideHttpClient()],
    component: HomeComponent,
  }
] as Route[];
