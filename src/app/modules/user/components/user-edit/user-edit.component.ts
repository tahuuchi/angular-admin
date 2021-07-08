import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FieldBase } from 'src/app/models/form/FieldBase';
import { TextBox } from 'src/app/models/form/TextBox';
import { SelectBox } from 'src/app/models/form/SelectBox';
import { UserModel } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
})
export class UserEditComponent implements OnInit, OnDestroy {
  userId: string = '';
  user: UserModel;
  fields: FieldBase<string>[] = [
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

    new TextBox({
      key: 'address',
      label: 'app.Address',
      value: '',
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
  sub$ = new Subscription();

  constructor(
    private userService: UserService,
    private routeActive: ActivatedRoute,
    private router: Router,
    private message: NzMessageService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.userId = this.routeActive.snapshot.paramMap.get('id');
    if (this.userId) {
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
    if (this.userId) {
      this.sub$.add(
        this.userService.getUser(this.userId).subscribe((res) => {
          this.user = res.data;
          for (let item of this.fields) {
            if (this.user[item.key] && item.type !== 'password') {
              item.value = this.user[item.key];
            }
          }
        })
      );
    }
  }

  submitForm(data) {
    if (this.userId) {
      this.sub$.add(
        this.userService.updateUser(this.userId, data).subscribe((res) => {
          if (res && res.error === 0) {
            this.message.success(this.translate.instant('app.UpdateSuccess'));
            this.router.navigateByUrl('users');
          } else {
            this.message.error(res.message);
          }
        })
      );
    } else {
      this.sub$.add(
        this.userService.addUser(data).subscribe((res) => {
          if (res && res.error === 0) {
            this.message.success(this.translate.instant('app.AddSuccess'));
            this.router.navigateByUrl('users');
          } else {
            this.message.error(res.message);
          }
        })
      );
    }
  }

  gotoList() {
    this.router.navigateByUrl('users');
  }
}
