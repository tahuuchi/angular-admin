import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { RoleListComponent } from './components/role-list/role-list.component';
import { RoleEditComponent } from './components/role-edit/role-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { UtilityModule } from '../utility/utility.module';

const routes: Routes = [
  { path: '', component: RoleListComponent },
  { path: 'add', component: RoleEditComponent },
  { path: 'edit/:id', component: RoleEditComponent },
];

@NgModule({
  declarations: [RoleEditComponent, RoleListComponent],
  imports: [
    CommonModule,
    SharedModule,
    UtilityModule,
    RouterModule.forChild(routes),
  ],
  exports: [RoleListComponent, RoleEditComponent],
})
export class RoleModule {}
