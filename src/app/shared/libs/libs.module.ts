import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LIBS_IMPORTS } from '@shared/libs/libs.module.barrel';

@NgModule({
  imports: [CommonModule],
  declarations: [],
  exports: [LIBS_IMPORTS],
})
export class LibsModule {}
