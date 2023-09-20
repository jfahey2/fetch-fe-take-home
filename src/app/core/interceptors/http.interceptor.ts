import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Your auth interceptor logic here, e.g., adding an auth token to headers

    const clonedRequest = req.clone({
      headers: req.headers.set('Authorization', 'Bearer YOUR_AUTH_TOKEN')
    });

    return next.handle(clonedRequest);
  }
}