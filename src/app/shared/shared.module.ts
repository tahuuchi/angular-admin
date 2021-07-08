import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UtilityModule } from '../modules/utility/utility.module';
import { AutoFormComponent } from './auto-form/forms/auto-form/auto-form.component';
import { CommonModule } from '@angular/common';
import { AutoFieldComponent } from './auto-form/forms/auto-field/auto-field.component';
import { TableListComponent } from './table-list/table-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AutoFormComponent,
    AutoFieldComponent,
    TableListComponent,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    AutoFormComponent,
    TableListComponent,
  ],
  imports: [
    CommonModule,
    UtilityModule
  ]
})
export class SharedModule { }
