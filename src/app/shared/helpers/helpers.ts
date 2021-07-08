import * as _ from 'lodash';

export class helpers {
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
