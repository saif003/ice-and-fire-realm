import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ConfigService } from './config.service';

@Injectable({
  providedIn: 'root',
})
export class ToasterService {
  constructor(
    private snackBar: MatSnackBar,
    private configService: ConfigService
  ) {}

  openSnackBar(
    message: string,
    action?: string,
    handler?: () => void,
    duration: number = 2000
  ) {
    let config = this.configService.getSnackBarConfig();
    config = { ...config, duration };
    const snack = this.snackBar.open(message, action, config);
    if (action && handler) {
      snack.onAction().subscribe(handler);
    }
    return snack;
  }

  dismissSnackBar(): void {
    this.snackBar.dismiss();
  }
}
