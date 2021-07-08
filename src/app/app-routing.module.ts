import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { USER_ROUTES } from './routes/user-layout-routes';
import { ADMIN_ROUTES } from './routes/admin-layout-routes';
import { UserLayoutComponent } from './layouts/user/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';

const routes: Routes = [
  { path: 'auth', component: UserLayoutComponent, children: USER_ROUTES},
  { path: '', component: AdminLayoutComponent, children: ADMIN_ROUTES},
  { path: '**', redirectTo: 'error-404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
