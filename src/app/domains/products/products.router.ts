import { Routes } from '@angular/router';
import { roleGuard } from '../auth/infrastructure/guards/role-guard-guard';

export const PRODUCTS_ROUTES: Routes = [
    {
        path: 'product-showcase',
        canActivate: [roleGuard],
        data: { roles: ['admin', 'user'] },
        loadComponent: () => import('./presentation/product-showcase/product-showcase').then(m => m.ProductShowcase),
    },
];