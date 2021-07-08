import { Injectable } from '@angular/core';
import { QueryModel } from 'src/app/models/query.model';
import { environment } from 'src/environments/environment';
import { HttpServiceObservable } from '../../http/services/http.service.observable';
import { AccountModel } from '../models/account.model';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  apiUrl = environment.userUrl;

  constructor(private api: HttpServiceObservable) {}

  filters(query: QueryModel) {
    return this.api.get(`${this.apiUrl}/account`, { params: query });
  }

  getAccount(id: string) {
    return this.api.get(`${this.apiUrl}/account/${id}`);
  }

  findOne(query: QueryModel) {
    return this.api.get(`${this.apiUrl}/account/findOne`, { params: query });
  }

  addAccount(account: AccountModel) {
    return this.api.post(`${this.apiUrl}/account/add`, account);
  }

  updateAccount(id: string, account: AccountModel) {
    return this.api.put(`${this.apiUrl}/account/${id}`, account);
  }

  updateStatus(id: string, status: Number | Boolean) {
    return this.api.put(`${this.apiUrl}/account/updateStaus`, {
      _id: id,
      status,
    });
  }

  delete(id: string) {
    return this.api.delete(`${this.apiUrl}/account/${id}`);
  }
}
