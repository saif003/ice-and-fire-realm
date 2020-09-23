import { Injectable } from '@angular/core';

import { SwUpdate } from '@angular/service-worker';
import { ToasterService } from '@core/services/toaster.service';

@Injectable({
  providedIn: 'root'
})
export class SwUpdateService {

  constructor(private swUpdate: SwUpdate, private toasterService: ToasterService) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(evt => {
        this.toasterService.openSnackBar('There is a new version available.', 'Click to Reload', () => window.location.reload());
      });

      this.swUpdate.activated.subscribe(evt => {
        this.toasterService.openSnackBar('Successfully Updated app to the latest version.');
      });
    }
  }
}
