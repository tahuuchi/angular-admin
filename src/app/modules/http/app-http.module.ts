import { ApiHttpService } from './services/api-http.service';
import { ApiHttpServiceObservable } from './services/api-http.service.observable';
import { HttpService } from './services/http.service';
import { HttpServiceObservable } from './services/http.service.observable';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [],
    providers: [
        ApiHttpService,
        ApiHttpServiceObservable,
        HttpService,
        HttpServiceObservable,
    ]
})
export class AppHttpModule { }
