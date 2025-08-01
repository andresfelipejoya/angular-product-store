import { Routes } from '@angular/router';

export const AUTH_ROUTES: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./presentation/login/login').then(m => m.Login)
  },
  {
    path: 'register',
    loadComponent: () => import('./presentation/register/register').then(m => m.Register)
  }
];