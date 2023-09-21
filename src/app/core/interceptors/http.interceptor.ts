import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";

// @Injectable()
// export class AuthInterceptor implements HttpInterceptor {
//   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

//     const clonedRequest = req.clone({
//       headers: req.headers.set('Authorization', 'Bearer YOUR_AUTH_TOKEN')
//     });

//     return next.handle(clonedRequest);
//   }
// }