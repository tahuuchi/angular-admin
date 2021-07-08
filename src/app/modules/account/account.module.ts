import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AccountListComponent } from './components/account-list/account-list.component';
import { AccountEditComponent } from './components/account-edit/account-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { UtilityModule } from '../utility/utility.module';

const routes: Routes = [
  { path: '', component: AccountListComponent },
  { path: 'add', component: AccountEditComponent },
  { path: 'edit/:id', component: AccountEditComponent },
];

@NgModule({
  declarations: [AccountEditComponent, AccountListComponent],
  imports: [
    CommonModule,
    SharedModule,
    UtilityModule,
    RouterModule.forChild(routes),
  ],
  exports: [AccountListComponent, AccountEditComponent],
})
export class AccountModule {}
