import {
  HttpErrorResponse,
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { catchError, throwError } from 'rxjs';

export const AuthInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  const authService = inject(AuthService);

  if (authService.isLoggedIn()) {
    console.log('interceptor, logged in');

    const clonedReq = req.clone({
      headers: req.headers.set(
        'Authorization',
        `Bearer ${authService.getToken()}`
      ),
      withCredentials: true
    });
    return next(clonedReq).pipe(
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          console.log('client side errror');
          errorMsg = `Error: ${error.error.message}`;
        } else {

          console.log('Server side error');
          errorMsg = `Error Code: ${error.status}, Message: ${error.message}`;
          authService.logout();
        }
        return throwError(() => errorMsg);
      })
    );
  }
  console.log('interceptor, not logged in');
  return next(req);
};
