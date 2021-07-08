import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ColumnsModel } from 'src/app/models/columns.model';
import { TableActionsModel } from 'src/app/models/table-actions.model';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.less']
})
export class TableListComponent implements OnInit {

  @Input() listOfData: any;
  @Input() columns: ColumnsModel[] = [];
  @Input() actions: TableActionsModel;
  @Output() onCheckItem: EventEmitter<any> = new EventEmitter();

  checked = false;
  setOfCheckedId = new Set<number>();
  path: string = '/';
  params = {};
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.path = window.location.pathname;
    this.params = this.route.snapshot.queryParams;
  }

  updateCheckedSet(id: number, checked: boolean): void {
    if (checked) {
      this.setOfCheckedId.add(id);
    } else {
      this.setOfCheckedId.delete(id);
    }
    this.onCheckItem.emit(this.setOfCheckedId);
  }

  onAllChecked(checked: boolean): void {
    if (this.listOfData.data) {
      this.listOfData.data.forEach(item => this.updateCheckedSet(item._id, checked));
    }
  }

  onItemChecked(id: number, checked: boolean): void {
    this.updateCheckedSet(id, checked);
  }

  getValue(fieldName: string, item: any, type: string = 'text'): any {
    return item[fieldName] || null;
  }

  callBack(e, action, data): void {
    action(e, data);
  }

  nzPageIndexChange(e) {
    this.params = { ...this.params, page: e };
    this.router.navigate([this.path], { queryParams: this.params });
  }

  nzPageSizeChange(e) {
    this.params = { ...this.params, limit: e, page: 1 };
    this.router.navigate([this.path], { queryParams: this.params });
  }

}
