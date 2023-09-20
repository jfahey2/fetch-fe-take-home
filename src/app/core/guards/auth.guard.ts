import { ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  return inject(AuthService).canActivate(inject(AuthToken))
};
// export function authenticationGuardArrow = () => inject(AuthService).isAuthenticated()

// export function authenticationGuard(): CanActivateFn {
//   return () => {
//     const oauthService: AuthService = inject(AuthService);

//     if (oauthService.hasAccess() ) {
//       return true;
//     }
//     oauthService.login();
//     return false;
//   };
// }

