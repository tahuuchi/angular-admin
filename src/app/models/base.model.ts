import * as _ from 'lodash';

export abstract class BaseModel {
  _id?: string;
  createdAt?: number;
  updatedAt?: number;

  constructor(item = null) {
    this.mapFields(item);
  }

  omitFields() {
    return [];
  }

  public mapFields(item) {
    if (item) {
      for (const key in item) {
        if (item.hasOwnProperty(key)) {
          let val = item[key];
          if (['page', 'limit', 'status'].includes(key)) {
            val = parseInt(val);
          }
          this[key] = val;
        }
      }
    }
  }
}
