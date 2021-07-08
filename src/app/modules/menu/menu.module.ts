import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MenuListComponent } from './components/menu-list/menu-list.component';
import { MenuEditComponent } from './components/menu-edit/menu-edit.component';
import { SharedModule } from '../../shared/shared.module';
import { UtilityModule } from '../utility/utility.module';

const routes: Routes = [
  { path: '', component: MenuListComponent },
  { path: 'add', component: MenuEditComponent },
  { path: 'edit/:id', component: MenuEditComponent },
];

@NgModule({
  declarations: [MenuEditComponent, MenuListComponent],
  imports: [
    CommonModule,
    SharedModule,
    UtilityModule,
    RouterModule.forChild(routes),
  ],
  exports: [MenuListComponent, MenuEditComponent],
})
export class MenuModule {}
