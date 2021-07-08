import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { QueryModel } from 'src/app/models/query.model';
import { MenuModel } from 'src/app/modules/menu/models/menu.model';
import { LoaderService } from 'src/app/services/loader.service';
import { StateManageService } from 'src/app/services/state-manage.service';
import * as _ from 'lodash';

@Component({
  selector: 'admin-layout',
  templateUrl: './admin-layout.component.html',
  styleUrls: ['./admin-layout.component.less'],
})
export class AdminLayoutComponent implements OnInit, OnDestroy {
  constructor(
    private loaderService: LoaderService,
    private stateManageService: StateManageService
  ) {
    this.stateManageService.loadMenu();
    this.stateManageService.loadPermission();
    this.menusState$ = this.stateManageService.getMenus.subscribe((res) => {
      this.menus = this.converToTree(res);
    });
    this.roleState$ = this.stateManageService.getRole.subscribe((res) => {
      this.permission = res.permission || {};
    });
  }
  isCollapsed = false;
  menus: MenuModel[];
  permission = {};
  menusState$ = new Subscription();
  roleState$ = new Subscription();

  ngOnInit(): void {}

  ngOnDestroy() {
    this.menusState$.unsubscribe();
  }

  toggle(collapsed) {
    this.isCollapsed = collapsed;
  }

  converToTree(list) {
    const menuList = _.filter(list, (item) => _.isEmpty(item.parent));
    if (menuList) {
      for (let item of menuList) {
        item.children = _.filter(
          list,
          (children) => children.parent === item._id
        );
      }
    }
    return menuList;
  }

  isViewMenus(id) {
    if (this.permission[id]) {
      if (_.includes(this.permission[id], 'view')) {
        return true;
      }
    }
    return false;
  }

  get loader() {
    return this.loaderService.showLoader;
  }
}
