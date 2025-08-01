// auth.interceptor.ts
import {
  HttpInterceptorFn, HttpRequest, HttpHandlerFn
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthStorageService } from '../auth-storage.service';
import { SKIP_TOKEN } from './auth-context';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authStorage = inject(AuthStorageService);
  const skip = req.context.get(SKIP_TOKEN);

  if (skip) {
    return next(req);
  }

  const token = authStorage.getToken();
  if (token) {
    const cloned = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`
      }
    });
    return next(cloned);
  }

  return next(req);
};
