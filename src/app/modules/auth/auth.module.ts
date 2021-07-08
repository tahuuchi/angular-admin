import { NgModule } from '@angular/core';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { UtilityModule } from '../utility/utility.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    AuthRoutingModule,
    UtilityModule,
  ]
})
export class AuthModule { }
