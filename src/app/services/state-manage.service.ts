import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { QueryModel } from '../models/query.model';
import { AccountService } from '../modules/account/services/account.service';
import { SessionService } from '../modules/auth/services/session.service';
import { MenuModel } from '../modules/menu/models/menu.model';
import { MenuService } from '../modules/menu/services/menu.service';

@Injectable({
  providedIn: 'root',
})
export class StateManageService {
  private menusSubject: BehaviorSubject<MenuModel[]>;
  public menus$: Observable<MenuModel[]>;
  private roleSubject: BehaviorSubject<any>;
  public role$: Observable<any>;
  constructor(
    private sessionService: SessionService,
    private accountService: AccountService,
    private menuService: MenuService
  ) {
    this.menusSubject = new BehaviorSubject([]);
    this.roleSubject = new BehaviorSubject({});

    this.menus$ = this.menusSubject.asObservable();
    this.role$ = this.roleSubject.asObservable();
  }

  get getMenus() {
    return this.menus$;
  }

  get getRole() {
    return this.role$;
  }

  setMenu(menus) {
    this.menusSubject.next(menus);
  }

  setRole(role) {
    this.roleSubject.next(role);
  }

  loadPermission() {
    const session = this.sessionService.getCurrentUser();
    if (session.user) {
      this.accountService
        .findOne(new QueryModel({ _id: session.user._id, populate: 'role' }))
        .subscribe((res) => {
          if (res && res.data && res.data.role) {
            this.setRole(res.data.role);
          }
        });
    }
  }

  loadMenu() {
    console.log('load menu');
    this.menuService
      .filters(new QueryModel({ status: 1, limit: 1000 }))
      .subscribe((res) => {
        console.log('load menu data', res);

        if (res.data && res.data.data) {
          this.setMenu(res.data.data);
        }
      });
  }
}
