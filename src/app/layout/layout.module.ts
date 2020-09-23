import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import {
  LAYOUT_ENTRY_COMPONENTS,
  LAYOUT_COMPONENTS,
  LAYOUT_PROVIDERS,
} from './layout.module.barrel';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, LayoutRoutingModule, SharedModule],
  declarations: LAYOUT_COMPONENTS,
  entryComponents: LAYOUT_ENTRY_COMPONENTS,
  providers: LAYOUT_PROVIDERS,
})
export class LayoutModule {}
