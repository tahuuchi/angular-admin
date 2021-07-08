import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FieldBase } from 'src/app/models/form/FieldBase';
import { TextBox } from 'src/app/models/form/TextBox';
import { SelectBox } from 'src/app/models/form/SelectBox';
import { MenuModel } from '../../models/menu.model';
import { MenuService } from '../../services/menu.service';
import { TranslateService } from '@ngx-translate/core';
import { QueryModel } from 'src/app/models/query.model';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';
import { StateManageService } from 'src/app/services/state-manage.service';

@Component({
  selector: 'app-menu-edit',
  templateUrl: './menu-edit.component.html',
})
export class MenuEditComponent implements OnInit, OnDestroy {
  menuId: string = '';
  menu: MenuModel;
  menuParent: any[];
  sub$ = new Subscription();
  fields: FieldBase<string>[] = [];
  constructor(
    private service: MenuService,
    private stateManageService: StateManageService,
    private routeActive: ActivatedRoute,
    private router: Router,
    private message: NzMessageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.menuId = this.routeActive.snapshot.paramMap.get('id');

    this.fields = [
      new TextBox({
        key: 'title',
        label: 'app.Title',
        value: '',
        required: true,
        order: 1,
      }),
      new TextBox({
        key: 'path',
        label: 'Link',
        value: '',
        required: false,
        order: 2,
      }),
      new TextBox({
        key: 'icon',
        label: 'Icon',
        value: '',
        required: false,
        order: 3,
      }),
      new SelectBox({
        key: 'parent',
        label: 'Parent',
        options: [],
        order: 4,
      }),
      new SelectBox({
        key: 'status',
        label: 'app.Status',
        options: [
          { value: 1, label: 'status.1' },
          { value: 0, label: 'status.0' },
        ],
        order: 5,
        value: 1,
      }),
    ];
    setTimeout(() => {
      this.loadData();
    }, 0);
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  loadData() {
    this.sub$.add(
      this.service
        .filters(new QueryModel({ parent: null }))
        .subscribe((res) => {
          this.menuParent = (res.data && res.data.data) || [];
          for (let item of this.fields) {
            if (item.key === 'parent')
              item.options = _.map(this.menuParent, (item) => {
                return {
                  value: item._id,
                  label: item.title,
                };
              });
          }
        })
    );
    if (this.menuId) {
      this.sub$.add(
        this.service.getMenu(this.menuId).subscribe((res) => {
          this.menu = res.data;
          for (let item of this.fields) {
            item.value = this.menu[item.key];
          }
        })
      );
    }
  }

  submitForm(data) {
    if (this.menuId) {
      this.sub$.add(
        this.service.updateMenu(this.menuId, data).subscribe((res) => {
          if (res && res.error === 0) {
            this.message.success(this.translate.instant('app.UpdateSuccess'));
            this.loadMenu();
          } else {
            this.message.error(res.message);
          }
        })
      );
    } else {
      this.sub$.add(
        this.service.addMenu(data).subscribe((res) => {
          if (res && res.error === 0) {
            this.message.success(this.translate.instant('app.AddSuccess'));
            this.loadMenu();
          } else {
            this.message.error(res.message);
          }
        })
      );
    }
  }

  loadMenu() {
    this.sub$.add(
      this.service
        .filters(new QueryModel({ status: 1, limit: 1000 }))
        .subscribe((res) => {
          if (res.data && res.data.data) {
            this.stateManageService.setMenu(res.data.data);
            this.router.navigateByUrl('menus');
          }
        })
    );
  }

  gotoList() {
    this.router.navigateByUrl('menus');
  }
}
