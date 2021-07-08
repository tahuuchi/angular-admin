import { Routes } from '@angular/router';
import { AuthGuard } from '../modules/auth/auth.guard';

export const ADMIN_ROUTES: Routes = [
    {
        path: '',
        loadChildren: () => import('../pages/page.module').then(m => m.PageModule),
        canLoad: [AuthGuard]
    }
]