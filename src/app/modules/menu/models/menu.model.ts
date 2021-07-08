import { BaseModel } from 'src/app/models/base.model';

export interface MenuModel extends BaseModel {
  title: String;
  parent: String;
  slug: String;
  children?: MenuModel[];
  checkOptions?: any[];
}
