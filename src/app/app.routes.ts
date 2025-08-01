import { Routes } from '@angular/router';
import { AUTH_ROUTES } from './domains/auth/auth.router';
import { PRODUCTS_ROUTES } from './domains/products/products.router';
import { GENERAL_PAGES_ROUTES } from './domains/general-pages/general-pages.router';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    ...AUTH_ROUTES,
    ...PRODUCTS_ROUTES,
    ...GENERAL_PAGES_ROUTES,
];