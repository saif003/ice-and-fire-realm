import { LibsModule } from '@shared/libs/libs.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentPipe } from '@shared/pipes';
import {
  HeroImgComponent,
  InfiniteScrollComponent,
  ScrollTopBtnComponent,
} from '@shared/components';

export const SHARED_COMPONENTS = [
  MomentPipe,
  ScrollTopBtnComponent,
  InfiniteScrollComponent,
  HeroImgComponent,
];
export const SHARED_ENTRY_COMPONENTS = [];

export const SHARED_PROVIDERS = [MomentPipe];

export const SHARED_IMPORTS = [FormsModule, ReactiveFormsModule, LibsModule];
