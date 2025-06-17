import { HttpInterceptorFn } from '@angular/common/http';
import {AuthService} from '../services/auth/auth';
import {inject} from '@angular/core';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  console.log('Interceptor Tokeeeen:', token);

  if (token) {
    const clonedReq = req.clone({
      headers: req.headers.set('Authorization', 'Bearer ' + token)
    });
    return next(clonedReq);
  }

  return next(req);
};
