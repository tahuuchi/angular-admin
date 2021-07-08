import { HttpServiceObservable } from './http.service.observable';
import { Injectable } from '@angular/core';

@Injectable()
export class ApiHttpServiceObservable {
    constructor(private httpService: HttpServiceObservable) { }

    public get(apiUrl: string, options?) {
        return this.httpService.get(apiUrl, options);
    }

    public post(apiUrl, body: any, options?) {
        return this.httpService.post(
            apiUrl,
            body,
            options
        );
    }

    public put(apiUrl, body: any, options?: any) {
        return this.httpService.put(
            apiUrl,
            body,
            options
        );
    }

    public delete(apiUrl) {
        return this.httpService.delete(apiUrl);
    }
}
