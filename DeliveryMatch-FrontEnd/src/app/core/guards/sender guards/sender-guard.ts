import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {AuthService} from '../../services/auth';

export const senderGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const role = authService.getRole();

  if (role === 'SENDER') {
    return true;
  } else {
    alert('Access denied: Senders only');
    router.navigate(['/']);
    return false;
  }
};
