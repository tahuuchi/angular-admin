import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { QueryModel } from 'src/app/models/query.model';
import { AccountService } from 'src/app/modules/account/services/account.service';
import { User } from 'src/app/modules/auth/models/user';
import { SessionService } from 'src/app/modules/auth/services/session.service';
import { StateManageService } from 'src/app/services/state-manage.service';

@Component({
  selector: 'c-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less'],
})
export class HeaderComponent implements OnInit {
  isCollapsed: boolean = false;
  @Output() collapsed: EventEmitter<any> = new EventEmitter();
  constructor(private sessionService: SessionService) {}
  user: User;
  ngOnInit() {
    const session = this.sessionService.getCurrentUser();
    if (session.user) {
      this.user = session.user;
    }
  }

  toggle() {
    this.isCollapsed = !this.isCollapsed;
    this.collapsed.emit(this.isCollapsed);
  }

  logout() {
    this.sessionService.logout();
  }
}
