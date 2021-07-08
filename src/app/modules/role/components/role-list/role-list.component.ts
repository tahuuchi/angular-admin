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
import { RoleModel } from '../../models/role.model';
import { RoleService } from '../../services/role.service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-role-list',
  templateUrl: './role-list.component.html',
})
export class RoleListComponent implements OnInit, OnDestroy {
  tableList = new PagingModel<RoleModel>();
  collumns: ColumnsModel[] = [
    new ColumnsModel({
      name: 'app.Title',
      field: 'title',
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
      key: 'title',
      label: 'app.Title',
      value: '',
      order: 2,
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
    public service: RoleService,
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

  updateStatus(value: Boolean, rowData: any) {
    this.sub$.add(this.service.updateStatus(rowData._id, value).subscribe());
  }

  edit(item: any) {
    this.router.navigate([`/roles/edit/${item._id}`]);
  }

  setChecked(item) {
    this.checked = item;
  }

  submitFormSearch(data) {
    this.router.navigate(['roles'], { queryParams: data });
  }

  resetFormSearch() {
    this.router.navigate(['roles']);
  }
}
