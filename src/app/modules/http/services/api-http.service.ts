import * as _ from 'lodash';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { IResponse } from './../models/IResponse';

@Injectable()
export class ApiHttpService {
    constructor(private httpService: HttpService) { }

    public async get(apiUrl, options = null): Promise<IResponse> {
        return await this.httpService.get(apiUrl, options);
    }

    public async post(apiUrl, body: any, options = null): Promise<IResponse> {
        return await this.httpService.post(apiUrl, body, options);
    }

    public async put(apiUrl, body: any, options = null): Promise<IResponse> {
        return await this.httpService.put(apiUrl, body, options);
    }

    public async delete(apiUrl, options = null): Promise<IResponse> {
        return await this.httpService.delete(apiUrl, options);
    }

    public async dowload(apiUrl, options = null, fileName: string): Promise<IResponse> {
        return await this.httpService.download(apiUrl, options, fileName);
    }
}
