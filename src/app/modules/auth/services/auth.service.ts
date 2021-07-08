import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { User } from '../models/user';
import { ApiHttpServiceObservable } from '../../http/services/api-http.service.observable';
import { Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.authUrl}`;

  redirectUrl: string;

  constructor(
    private api: ApiHttpServiceObservable,
    private router: Router,
    private message: NzMessageService,
  ) { }

  signup(data: User) {
    return this.api.post(`${this.apiUrl}/signup`, data,);
  }

  login(data: any) {
    return this.api.post(`${this.apiUrl}/account/login`, data).subscribe(
      res => {
        if (res.error === 0) {
          this.doLogin(res.data)
        } else {
          this.message.error(res.message);
        }
      }
    );
  }

  doLogin(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user))
    this.router.navigateByUrl('/dashboard');
  }

  checkLogin() {
    return localStorage.getItem('currentUser') || false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/account/login');
  }

}
