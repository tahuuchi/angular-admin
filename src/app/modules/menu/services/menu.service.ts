import { Injectable } from '@angular/core';
import { QueryModel } from 'src/app/models/query.model';
import { environment } from 'src/environments/environment';
import { HttpServiceObservable } from '../../http/services/http.service.observable';
import { MenuModel } from '../models/menu.model';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  apiUrl = environment.userUrl;

  constructor(private api: HttpServiceObservable) {}

  filters(query: QueryModel) {
    return this.api.get(`${this.apiUrl}/menu`, { params: query });
  }

  getMenu(id: string) {
    return this.api.get(`${this.apiUrl}/menu/${id}`);
  }

  addMenu(menu: MenuModel) {
    return this.api.post(`${this.apiUrl}/menu/add`, menu);
  }

  updateMenu(id: string, menu: MenuModel) {
    return this.api.put(`${this.apiUrl}/menu/${id}`, menu);
  }

  updateStatus(id: string, status: Number | Boolean) {
    return this.api.put(`${this.apiUrl}/menu/updateStaus`, {
      _id: id,
      status,
    });
  }

  delete(id: string) {
    return this.api.delete(`${this.apiUrl}/menu/${id}`);
  }
}
