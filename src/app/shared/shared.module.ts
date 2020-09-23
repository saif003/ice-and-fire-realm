import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  SHARED_COMPONENTS,
  SHARED_ENTRY_COMPONENTS,
  SHARED_IMPORTS,
  SHARED_PROVIDERS
} from '@shared/shared.module.barrel';

@NgModule({
  imports: [
    CommonModule,
    ...SHARED_IMPORTS
  ],
  declarations: SHARED_COMPONENTS,
  entryComponents: SHARED_ENTRY_COMPONENTS,
  providers: SHARED_PROVIDERS,
  exports: [
    ...SHARED_IMPORTS,
    ...SHARED_COMPONENTS,
    ...SHARED_ENTRY_COMPONENTS,
  ]
})
export class SharedModule { }
