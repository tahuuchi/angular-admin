import { NgModule } from '@angular/core';
import { PageRoutingModule } from './page-routing.module';
import { WelcomeComponent } from './welcome/welcome.component';
import { Error404Component } from './errors/error404/error404.component';
import { UtilityModule } from '../modules/utility/utility.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from "@angular/common";
import { ExampleComponent } from './example/example.component';

@NgModule({
  imports: [CommonModule, PageRoutingModule, SharedModule, UtilityModule],
  exports: [SharedModule, UtilityModule],
  declarations: [WelcomeComponent, Error404Component, ExampleComponent],
})
export class PageModule { }
