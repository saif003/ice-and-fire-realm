import { BookService } from 'app/book/services';
import { of } from 'rxjs';

const bookService = jasmine.createSpyObj('BookService', [
  'getBooks',
  'getCharacters',
  'getApiResponse',
  'getCharacter',
]);
bookService.getCharacter.and.returnValue(of({}));
bookService.getApiResponse.and.returnValue(of({}));
bookService.getBooks.and.returnValue(of([]));
bookService.getCharacter.and.returnValue(of({}));

export const bookMockService = {
  provide: BookService,
  useValue: bookService,
};
