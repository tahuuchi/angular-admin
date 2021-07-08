import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subscription } from 'rxjs';
import { FieldBase } from 'src/app/models/form/FieldBase';
import { SelectBox } from 'src/app/models/form/SelectBox';
import { TextBox } from 'src/app/models/form/TextBox';
import { QueryModel } from 'src/app/models/query.model';
import { TableActionsModel } from 'src/app/models/table-actions.model';
import { PagingModel } from 'src/app/models/paging.model';
import { ColumnsModel } from '../../../../models/columns.model';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
})
export class UserListComponent implements OnInit, OnDestroy {
  tableList = new PagingModel<UserModel>();
  collumns: ColumnsModel[] = [
    new ColumnsModel({
      name: 'app.Email',
      field: 'email',
    }),
    new ColumnsModel({
      name: 'app.FullName',
      field: 'fullName',
    }),
    new ColumnsModel({
      name: 'app.Phone',
      field: 'phone',
    }),
    new ColumnsModel({
      name: 'app.Status',
      field: 'status',
      type: 'check',
      action: this.updateStatus.bind(this),
    }),
  ];

  fields: FieldBase<string>[] = [
    new TextBox({
      key: 'email',
      label: 'app.Email',
      value: '',
      order: 2,
    }),
    new TextBox({
      key: 'fullName',
      label: 'app.FullName',
      value: '',
      order: 3,
    }),
    new TextBox({
      key: 'phone',
      label: 'app.Phone',
      value: '',
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
    }),
  ];

  actions: TableActionsModel[] = [
    new TableActionsModel({
      name: 'edit',
      icon: 'edit',
      action: this.edit.bind(this),
    }),
    new TableActionsModel({
      name: 'delete',
      icon: 'delete',
      action: this.deltete.bind(this),
      danger: true,
    }),
  ];
  checked: string[] = [];

  sub$ = new Subscription();
  constructor(
    public service: UserService,
    public router: Router,
    public route: ActivatedRoute,
    private message: NzMessageService,
    private translate: TranslateService
  ) {
    this.sub$.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.getData();
        }
      })
    );
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    this.sub$.unsubscribe();
  }

  getData() {
    const params = { ...this.route.snapshot.queryParams };
    this.sub$.add(
      this.service.filters(new QueryModel(params)).subscribe((res) => {
        this.tableList = { ...this.tableList, ...res.data };
      })
    );
  }

  deltete(item: any) {
    this.sub$.add(
      this.service.delete(item._id).subscribe((res) => {
        if (res.error === 0) {
          this.message.success(this.translate.instant('app.DeleteSuccess'));
          this.getData();
        } else {
          this.message.success(res.message);
        }
      })
    );
  }

  edit(item: any) {
    this.router.navigate([`/users/edit/${item._id}`]);
  }

  updateStatus(value: any, rowData: any) {
    this.sub$.add(this.service.updateStatus(rowData._id, value).subscribe());
  }

  setChecked(item) {
    this.checked = item;
  }

  submitFormSearch(data) {
    this.router.navigate(['users'], { queryParams: data });
  }

  resetFormSearch() {
    this.router.navigate(['users']);
  }
}
