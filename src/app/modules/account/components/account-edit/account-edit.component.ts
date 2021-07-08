import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FieldBase } from 'src/app/models/form/FieldBase';
import { TextBox } from 'src/app/models/form/TextBox';
import { SelectBox } from 'src/app/models/form/SelectBox';
import { AccountModel } from '../../models/account.model';
import { AccountService } from '../../services/account.service';
import { TranslateService } from '@ngx-translate/core';
import { RoleService } from 'src/app/modules/role/services/role.service';
import { QueryModel } from 'src/app/models/query.model';
import { RoleModel } from 'src/app/modules/role/models/role.model';
import * as _ from 'lodash';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-account-edit',
  templateUrl: './account-edit.component.html',
})
export class AccountEditComponent implements OnInit, OnDestroy {
  accountId: string = '';
  account: AccountModel;
  roles: RoleModel[];
  fields: FieldBase<string>[] = [];
  sub$ = new Subscription();

  constructor(
    private accountService: AccountService,
    private roleService: RoleService,
    private routeActive: ActivatedRoute,
    private router: Router,
    private message: NzMessageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.accountId = this.routeActive.snapshot.paramMap.get('id');
    this.fields = [
      new TextBox({
        key: 'email',
        label: 'app.Email',
        value: '',
        required: true,
        order: 1,
      }),
      new TextBox({
        key: 'fullName',
        label: 'app.FullName',
        value: '',
        required: true,
        order: 2,
      }),
      new TextBox({
        key: 'password',
        type: 'password',
        label: 'app.Password',
        value: '',
        required: true,
        order: 3,
      }),
      new TextBox({
        key: 'phone',
        label: 'app.Phone',
        value: '',
        required: true,
        order: 4,
      }),
      new SelectBox({
        key: 'role',
        label: 'app.Role',
        required: true,
        options: [],
        order: 5,
      }),
      new SelectBox({
        key: 'status',
        label: 'app.Status',
        options: [
          { value: 1, label: 'status.1' },
          { value: 0, label: 'status.0' },
        ],
        order: 6,
        value: 1,
      }),
    ];
    if (this.accountId) {
      for (let item of this.fields) {
        if (item.type === 'password') {
          item.required = false;
        }
      }
    }
    setTimeout(() => {
      this.loadData();
    }, 0);
  }

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  loadData() {
    this.sub$.add(
      this.roleService
        .filters(new QueryModel({ status: 1 }))
        .subscribe((res) => {
          this.roles = (res.data && res.data.data) || [];
          for (let item of this.fields) {
            if (item.key === 'role')
              item.options = _.map(this.roles, (item) => {
                return {
                  value: item._id,
                  label: item.title,
                };
              });
          }
        })
    );
    if (this.accountId) {
      this.sub$.add(
        this.accountService.getAccount(this.accountId).subscribe((res) => {
          this.account = res.data;
          for (let item of this.fields) {
            if (this.account[item.key] && item.type !== 'password') {
              item.value = this.account[item.key];
            }
          }
        })
      );
    }
  }

  submitForm(data) {
    if (this.accountId) {
      this.sub$.add(
        this.accountService
          .updateAccount(this.accountId, data)
          .subscribe((res) => {
            if (res && res.error === 0) {
              this.message.success(this.translate.instant('app.UpdateSuccess'));
              this.router.navigateByUrl('accounts');
            } else {
              this.message.error(res.message);
            }
          })
      );
    } else {
      this.sub$.add(
        this.accountService.addAccount(data).subscribe((res) => {
          if (res && res.error === 0) {
            this.message.success(this.translate.instant('app.AddSuccess'));
            this.router.navigateByUrl('accounts');
          } else {
            this.message.error(res.message);
          }
        })
      );
    }
  }

  gotoList() {
    this.router.navigateByUrl('accounts');
  }
}
