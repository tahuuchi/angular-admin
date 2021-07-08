import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private router: Router) { }

  getCurrentUser() {
    if (localStorage.getItem('currentUser')) {
      return JSON.parse(localStorage.getItem('currentUser'));
    }
    return false;
  }

  getToken() {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      return currentUser.token;
    }
    return null;
  }

  isLoggedIn() {
    const currentUser = this.getCurrentUser();
    if (currentUser) {
      return true;
    }
    return false;
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigateByUrl('/admin/login');
  }
}
