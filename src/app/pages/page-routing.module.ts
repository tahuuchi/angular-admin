import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PermissionGuard } from '../guards/permission.guard';
import { Error404Component } from './errors/error404/error404.component';
import { ExampleComponent } from './example/example.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: WelcomeComponent },
  { path: 'example', component: ExampleComponent },
  { path: 'error-404', component: Error404Component },
  {
    path: 'users',
    loadChildren: () =>
      import('../modules/user/user.module').then((m) => m.UserModule),
    canActivate: [PermissionGuard],
    // canActivateChild: [PermissionGuard],
  },
  {
    path: 'accounts',
    loadChildren: () =>
      import('../modules/account/account.module').then((m) => m.AccountModule),
    canActivate: [PermissionGuard],
  },
  {
    path: 'roles',
    loadChildren: () =>
      import('../modules/role/role.module').then((m) => m.RoleModule),
    canActivate: [PermissionGuard],
  },
  {
    path: 'menus',
    loadChildren: () =>
      import('../modules/menu/menu.module').then((m) => m.MenuModule),
    canActivate: [PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
