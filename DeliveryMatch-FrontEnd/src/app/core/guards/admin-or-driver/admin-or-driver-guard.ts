import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth/auth';

export const adminOrDriverGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const userRole = authService.getRole();
  if (userRole === 'ADMIN' || userRole === 'DRIVER') {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
};
