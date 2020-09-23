import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilityService {
  constructor() {}

  cloneObject(obj: any): any {
    return JSON.parse(JSON.stringify(obj));
  }

  numberFormat(
    value: number,
    maxFractionDigits: number,
    minFractionDigits: number = 0
  ): string {
    return new Intl.NumberFormat(['en-US'], {
      maximumFractionDigits: maxFractionDigits,
      minimumFractionDigits: minFractionDigits,
    }).format(value);
  }

  isNullOrUndefined(value) {
    return value === null || value === undefined;
  }

  serializeQueryParams(obj = {}) {
    let result = '';
    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const val = encodeURIComponent(obj[key] ?? '');
        if (!this.isNullOrUndefined(val) && val !== '') {
          const prefix = result ? '&' : '?';
          result += `${prefix}${key}=${val}`;
        }
      }
    }
    return result;
  }
}
