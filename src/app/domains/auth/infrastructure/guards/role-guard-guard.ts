import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthStorageService } from '../auth-storage.service';

export const roleGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthStorageService);
  const router = inject(Router);

  const allowedRoles = route.data['roles'] as string[];
  console.log('Allowed roles:', allowedRoles);
  if (authService.getRol() && allowedRoles.includes(authService.getRol())) {
    return true;
  }

  router.navigate(['/unauthorized']);
  return false;
};
