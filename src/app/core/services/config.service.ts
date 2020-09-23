import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor() { }

  getSnackBarConfig(): any {
    return {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
      duration: 2000,
    };
  }

}
