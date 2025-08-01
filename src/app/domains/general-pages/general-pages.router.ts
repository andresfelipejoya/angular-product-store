import { Routes } from '@angular/router';

export const GENERAL_PAGES_ROUTES: Routes = [
    {
        path: 'unauthorized',
        loadComponent: () => import('./presentation/unauthorized/unauthorized').then(m => m.Unauthorized)
    }
];