import {
  BookCardComponent,
  BookDetailComponent,
  BookListComponent,
  CharacterCardComponent,
  CharacterDetailComponent,
  CharacterListComponent,
  HomeComponent,
  SearchInputComponent,
} from './components';
import { BookService } from './services';

export const BOOK_COMPONENTS = [
  HomeComponent,
  SearchInputComponent,
  BookCardComponent,
  BookListComponent,
  BookDetailComponent,
  CharacterListComponent,
  CharacterCardComponent,
  CharacterDetailComponent,
];
export const BOOK_PROVIDERS = [BookService];
export const BOOK_ENTRY_COMPONENTS = [];
