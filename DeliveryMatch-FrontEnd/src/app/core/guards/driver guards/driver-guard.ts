import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth';

export const driverGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.getRole();

  if (role === 'DRIVER') {
    return true;
  } else {
    alert('Access denied: Drivers only');
    router.navigate(['/']);
    return false;
  }
};
