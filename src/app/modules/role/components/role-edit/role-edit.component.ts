import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FieldBase } from 'src/app/models/form/FieldBase';
import { TextBox } from 'src/app/models/form/TextBox';
import { SelectBox } from 'src/app/models/form/SelectBox';
import { RoleModel } from '../../models/role.model';
import { RoleService } from '../../services/role.service';
import { TranslateService } from '@ngx-translate/core';
import { MenuService } from 'src/app/modules/menu/services/menu.service';
import { QueryModel } from 'src/app/models/query.model';
import { MenuModel } from 'src/app/modules/menu/models/menu.model';
import * as _ from 'lodash';
import { map } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { StateManageService } from 'src/app/services/state-manage.service';
@Component({
  selector: 'app-role-edit',
  templateUrl: './role-edit.component.html',
})
export class RoleEditComponent implements OnInit, OnDestroy {
  roleId: string = '';
  role: RoleModel;
  menuList: MenuModel[];
  fields: FieldBase<string>[] = [
    new TextBox({
      key: 'title',
      label: 'app.Title',
      value: '',
      required: true,
      order: 1,
    }),
    new SelectBox({
      key: 'status',
      label: 'app.Status',
      options: [
        { value: 1, label: 'status.1' },
        { value: 0, label: 'status.0' },
      ],
      order: 2,
      value: 1,
    }),
  ];

  checkOptions = [
    { label: 'View', value: 'view', checked: false },
    { label: 'Edit', value: 'edit', checked: false },
    { label: 'Delete', value: 'delete', checked: false },
  ];
  _role: Observable<RoleModel>;
  _menuList: Observable<MenuModel[]>;
  sub$ = new Subscription();

  constructor(
    private roleService: RoleService,
    private menuService: MenuService,
    private routeActive: ActivatedRoute,
    private router: Router,
    private message: NzMessageService,
    private translate: TranslateService,
    private stateManageService: StateManageService
  ) {}

  ngOnInit(): void {
    this.roleId = this.routeActive.snapshot.paramMap.get('id');
    setTimeout(() => {
      this.loadData();
    }, 0);
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  loadData() {
    this._menuList = this.menuService
      .filters(new QueryModel({ limit: 1000 }))
      .pipe(
        map((res) => {
          const list = (res.data && res.data.data) || [];
          if (list) {
            return _.map(list, (item) => {
              return {
                ...item,
                checkOptions: _.cloneDeep(this.checkOptions),
              };
            });
          }
          return [];
        })
      );

    /*  */
    if (this.roleId) {
      this._role = this.roleService
        .getRole(this.roleId)
        .pipe(map((res) => res.data));

      this.sub$.add(
        this._role.subscribe((role) => {
          this.role = role;
          for (let item of this.fields) {
            item.value = this.role[item.key];
          }
          this.sub$.add(
            this._menuList.subscribe((menus) => {
              for (let menu of menus) {
                if (
                  role.permission &&
                  role.permission[menu._id] &&
                  _.isArray(role.permission[menu._id])
                ) {
                  for (let item of menu.checkOptions) {
                    if (role.permission[menu._id].includes(item['value'])) {
                      item['checked'] = true;
                    }
                  }
                }
              }
              this.menuList = this.converToTree(menus);
            })
          );
        })
      );
    } else {
      this.sub$.add(
        this._menuList.subscribe((menus) => {
          this.menuList = this.converToTree(menus);
        })
      );
    }
  }

  submitForm(data) {
    const menuFlat = this.converToFlat(this.menuList);
    let permission = {};
    for (let menu of menuFlat) {
      permission[menu._id] = _.filter(
        menu.checkOptions,
        (item) => item.checked
      ).map((item) => item.value);
    }
    data.permission = permission;
    if (this.roleId) {
      this.sub$.add(
        this.roleService.updateRole(this.roleId, data).subscribe((res) => {
          if (res && res.error === 0) {
            this.message.success(this.translate.instant('app.UpdateSuccess'));
            this.loadPermission();
            this.router.navigateByUrl('roles');
          } else {
            this.message.error(res.message);
          }
        })
      );
    } else {
      this.sub$.add(
        this.roleService.addRole(data).subscribe((res) => {
          if (res && res.error === 0) {
            this.message.success(this.translate.instant('app.AddSuccess'));
            this.loadPermission();
            this.router.navigateByUrl('roles');
          } else {
            this.message.error(res.message);
          }
        })
      );
    }
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

  converToFlat(list) {
    let menuFlat = [];
    if (list) {
      for (let item of list) {
        menuFlat = [...menuFlat, _.omit(item, ['children'])];
        if (item.children) {
          menuFlat = [...menuFlat, ...item.children];
        }
      }
    }
    return menuFlat;
  }

  gotoList() {
    this.router.navigateByUrl('roles');
  }

  loadPermission() {
    this.stateManageService.loadPermission();
  }
}
