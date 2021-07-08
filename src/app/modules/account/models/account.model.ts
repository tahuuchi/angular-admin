import { BaseModel } from 'src/app/models/base.model';

export interface AccountModel extends BaseModel {
  userName?: String;
  password?: String;
  email?: String;
  name?: String;
  role?: String | Object;
  phone?: String;
  address?: String;
  status?: Boolean | Number | any;
}
