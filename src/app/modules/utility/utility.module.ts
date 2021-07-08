import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppHttpModule } from '../http/app-http.module';
import { AppTranslationModule } from '../app-translation/app-translation.module';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzRadioModule } from 'ng-zorro-antd/radio';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { NzAutocompleteModule } from 'ng-zorro-antd/auto-complete';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzPageHeaderModule } from 'ng-zorro-antd/page-header';
import { NzSpinModule } from 'ng-zorro-antd/spin';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppTranslationModule,
    AppHttpModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzGridModule,
    NzMessageModule,
    NzNotificationModule,

    NzCheckboxModule,
    NzSelectModule,
    NzRadioModule,
    NzDropDownModule,
    NzPaginationModule,
    NzAutocompleteModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzTableModule,
    NzTagModule,
    NzModalModule,
    NzIconModule,
    NzDividerModule,
    NzSwitchModule,
    NzPageHeaderModule,
    NzSpinModule
  ],
  exports: [
    AppTranslationModule,
    AppHttpModule,
    FormsModule,
    ReactiveFormsModule,
    NzButtonModule,
    NzFormModule,
    NzInputModule,
    NzLayoutModule,
    NzGridModule,
    NzMessageModule,
    NzNotificationModule,

    NzCheckboxModule,
    NzSelectModule,
    NzRadioModule,
    NzDropDownModule,
    NzPaginationModule,
    NzAutocompleteModule,
    NzDatePickerModule,
    NzInputNumberModule,
    NzTableModule,
    NzTagModule,
    NzModalModule,
    NzIconModule,
    NzDividerModule,
    NzSwitchModule,
    NzPageHeaderModule,
    NzSpinModule
  ]
})
export class UtilityModule { }
