import { Injectable } from '@angular/core';
import { QueryModel } from 'src/app/models/query.model';
import { environment } from 'src/environments/environment';
import { HttpServiceObservable } from '../../http/services/http.service.observable';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  apiUrl = environment.userUrl;

  constructor(private api: HttpServiceObservable) {}

  filters(query: QueryModel) {
    return this.api.get(`${this.apiUrl}/user`, { params: query });
  }

  getUser(id: string) {
    return this.api.get(`${this.apiUrl}/user/${id}`);
  }

  addUser(user: UserModel) {
    return this.api.post(`${this.apiUrl}/user/add`, user);
  }

  updateUser(id: string, user: UserModel) {
    return this.api.put(`${this.apiUrl}/user/${id}`, user);
  }

  updateStatus(id: string, status: Number | Boolean) {
    return this.api.put(`${this.apiUrl}/user/updateStaus`, {
      _id: id,
      status,
    });
  }

  delete(id: string) {
    return this.api.delete(`${this.apiUrl}/user/${id}`);
  }
}
