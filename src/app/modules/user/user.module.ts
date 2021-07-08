import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserEditComponent } from './components/user-edit/user-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { UtilityModule } from '../utility/utility.module';

const routes: Routes = [
  { path: '', component: UserListComponent },
  { path: 'add', component: UserEditComponent },
  { path: 'edit/:id', component: UserEditComponent }
];


@NgModule({
  declarations: [UserEditComponent, UserListComponent],
  imports: [
    CommonModule,
    SharedModule,
    UtilityModule,
    RouterModule.forChild(routes)
  ],
  exports: [UserListComponent, UserEditComponent]
})
export class UserModule { }
