import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { filter, map } from 'rxjs';

export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  authService.updateLoginStatus();

  return authService.isLoggedIn$.pipe(
    map((isLoggedIn) => {
      if (isLoggedIn) {
        console.log("auth true")
        return true;
      }
      console.log("auth false")

      return router.createUrlTree(['login']);

    })
  );
};

// return authService.currentUser$.pipe(
//   map((user) =>  user),
//   map((isLoggedIn) => isLoggedIn ||
//   router.createUrlTree(['login']))

//   filter((currentUser) => currentUser !== undefined),

//   map((currentUser => {
//     if (!currentUser) {
//       router.navigateByUrl('');
//       console.log('guard !currentuser ')
//       return false;
//     }
//     console.log('guard true ')

//     return true;
//   }))
