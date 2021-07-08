import * as _ from 'lodash';
import { catchError, map } from 'rxjs/operators';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { HttpStatusCode } from '../types/HttpStatusCode';
import { Injectable } from '@angular/core';
import { IResponse } from '../models/IResponse';
import { NzNotificationService } from 'ng-zorro-antd/notification';
import { throwError } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';
import { SessionService } from '../../auth/services/session.service';

function checkStatus(response: IResponse) {
  if (response.error === 1) {
    if (_.isArray(response.message)) {
      throw new Error(response.message[0]);
    } else {
      throw new Error(response.message);
    }
  }
  return response;
}

@Injectable()
export class HttpServiceObservable {
  constructor(
    private http: HttpClient,
    private sessionService: SessionService,
    private notification: NzNotificationService,
    private translate: TranslateService
  ) {}

  public get(url: string, options = null) {
    return this.http.get(url, this.prepareSendRequest(options)).pipe(
      map(checkStatus),
      catchError((error: HttpErrorResponse) => this.handleError(error))
    );
  }

  public post(url: string, body: any, options = null) {
    return this.http.post(url, body, this.prepareSendRequest(options)).pipe(
      map(checkStatus),
      catchError((error: any) => this.handleError(error))
    );
  }

  public put(url: string, body: any, options?: any) {
    return this.http.put(url, body, this.prepareSendRequest(options)).pipe(
      map(checkStatus),
      catchError((error: any) => this.handleError(error))
    );
  }

  public delete(url: string, options?: {}) {
    return this.http.delete(url, this.prepareSendRequest(options)).pipe(
      map(checkStatus),
      catchError((error: any) => this.handleError(error))
    );
  }

  public prepareSendRequest(options: any): {} {
    let req = { headers: new HttpHeaders() };
    req.headers = req.headers.set(
      'Authorization',
      `Bearer ${this.sessionService.getToken()}`
    );
    req.headers = req.headers.set('Access-Control-Allow-Origin', 'true');
    req.headers = req.headers.set(
      'Access-Control-Allow-Methods',
      'DELETE,GET,HEAD,POST,PUT,OPTIONS'
    );
    req = { ...req, ...options };
    return req;
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (
      error.status &&
      (error.status === HttpStatusCode.Forbidden ||
        error.status === HttpStatusCode.Unauthorized)
    ) {
      errorMessage = this.translate.instant(`errorCodes.${error.status}`);
      this.sessionService.logout();
    }
    let mess =
      error.error && error.error.message && _.isArray(error.error.message)
        ? error.error.message[0]
        : error.error && error.error.message;
    this.notification.error(
      this.translate.instant('errorCodes.request'),
      errorMessage ? errorMessage : `${error.message} <br /> ${mess}`
    );
    return throwError({
      error: 1,
      message: errorMessage || error.message,
    });
  }
}
