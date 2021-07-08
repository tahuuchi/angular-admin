import localeVi from '@angular/common/locales/vi';
import localeViExtra from '@angular/common/locales/extra/vi';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './components/app.component';
import { PageModule } from './pages/page.module';
import { IconsProviderModule } from './modules/utility/icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { HttpClientModule } from '@angular/common/http';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import { UserLayoutComponent } from './layouts/user/user-layout.component';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AppRoutingModule } from './app-routing.module';
import { httpInterceptorProviders } from './interceptors';

registerLocaleData(localeVi, 'vi-VN', localeViExtra);

@NgModule({
  declarations: [AppComponent, AdminLayoutComponent, UserLayoutComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    PageModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule {}
