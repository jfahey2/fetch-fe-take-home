import { inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandlerFn,
  HttpInterceptorFn,
} from '@angular/common/http';
import { finalize } from 'rxjs';
import { LoadingService } from '../services/loading.service';

export const LoadingInterceptor: HttpInterceptorFn = (
  request: HttpRequest<unknown>,
  next: HttpHandlerFn
) => {
  let totalRequests = 0;
  const loadingService = inject(LoadingService);

  console.log('caught');
  totalRequests++;

  loadingService.setLoading(true);
  return next(request).pipe(
    finalize(() => {
      totalRequests--;
      if (totalRequests == 0) {
        loadingService.setLoading(false);
      }
    })
  );
};
