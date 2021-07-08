import { BaseModel } from 'src/app/models/base.model';

export interface RoleModel extends BaseModel {
  title: String;
  slug: String;
  permission: Object;
}
