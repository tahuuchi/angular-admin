import { BaseModel } from 'src/app/models/base.model';

export interface UserModel extends BaseModel {
  userName?: String;
  password?: String;
  email?: String;
  name?: String;
  level?: number;
  phone?: String;
  address?: String;
  status?: Boolean | Number;
}

export enum UserLevel {
  'VIP0' = 0,
  'VIP1' = 1,
  'VIP2' = 2,
  'VIP3' = 3,
  'VIP4' = 4,
}
