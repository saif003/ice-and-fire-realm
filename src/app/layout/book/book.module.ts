import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BOOK_COMPONENTS,
  BOOK_PROVIDERS,
  BOOK_ENTRY_COMPONENTS,
} from './book.module.barrel';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule, BookRoutingModule],
  declarations: BOOK_COMPONENTS,
  providers: BOOK_PROVIDERS,
  entryComponents: BOOK_ENTRY_COMPONENTS,
})
export class BookModule {}
