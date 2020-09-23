import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  CORE_IMPORTS,
  CORE_PROVIDERS,
  CORE_COMPONENTS,
} from '@core/core.module.barrel';

@NgModule({
  imports: [CommonModule],
  declarations: CORE_COMPONENTS,
  providers: CORE_PROVIDERS,
  exports: CORE_IMPORTS,
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}
