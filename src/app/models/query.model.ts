import * as _ from 'lodash';
import { BaseModel } from './base.model';
import { DateTimeService } from './../modules/utility/services/datetime.service';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

export class QueryModel extends BaseModel {
  [index: string]: any;
  page: number = 1;
  limit: number = 20;
  startTime?: NgbDateStruct | Date | number;
  endTime?: NgbDateStruct | Date | number;
  status?: number | string;
  populate?: String | Array<any>;
  constructor(item = null) {
    super();
    this.mapFields(item);
  }

  parseQueries(params) {
    const data = _.pickBy(
      params,
      (item) => item !== '' && item !== null && item !== undefined
    );
    _.each(data, (val, key) => {
      if (['page', 'limit', 'status'].includes(key)) {
        data[key] = parseInt(val);
      }
    });
    return data;
  }
}
