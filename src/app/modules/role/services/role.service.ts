import { Injectable } from '@angular/core';
import { QueryModel } from 'src/app/models/query.model';
import { environment } from 'src/environments/environment';
import { HttpServiceObservable } from '../../http/services/http.service.observable';
import { RoleModel } from '../models/role.model';

@Injectable({
  providedIn: 'root',
})
export class RoleService {
  apiUrl = environment.userUrl;

  constructor(private api: HttpServiceObservable) {}

  filters(query: QueryModel) {
    return this.api.get(`${this.apiUrl}/role`, { params: query });
  }

  getRole(id: string) {
    return this.api.get(`${this.apiUrl}/role/${id}`);
  }

  addRole(role: RoleModel) {
    return this.api.post(`${this.apiUrl}/role/add`, role);
  }

  updateRole(id: string, role: RoleModel) {
    return this.api.put(`${this.apiUrl}/role/${id}`, role);
  }

  updateStatus(id: string, status: Number | Boolean) {
    return this.api.put(`${this.apiUrl}/role/updateStaus`, {
      _id: id,
      status,
    });
  }

  delete(id: string) {
    return this.api.delete(`${this.apiUrl}/role/${id}`);
  }
}
