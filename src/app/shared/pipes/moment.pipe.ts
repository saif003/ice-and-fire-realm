import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

import { DateFormats } from '@constants';

@Pipe({
  name: 'moment',
})
export class MomentPipe implements PipeTransform {
  transform(value: any, format: string): string {
    format = format || DateFormats.default;
    return moment(value).format(format);
  }
}
