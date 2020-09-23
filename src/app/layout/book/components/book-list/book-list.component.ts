import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { BookModel } from '@models';
import { BookService } from 'app/layout/book/services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss'],
})
export class BookListComponent implements OnChanges {
  @Input() searchTerm: string;
  books: BookModel[];

  isLoading: boolean;
  page: number;
  pageSize: number;
  isEnd: boolean;

  constructor(private bookService: BookService) {
    this.page = 1;
    this.pageSize = 4;
    this.books = [];
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchTerm && !changes.searchTerm.firstChange) {
      this.page = 1;
      this.isEnd = false;
      const oldLength = this.books.length;
      this.books = [];
      if (!oldLength) {
        this.getNextPage();
      }
    }
  }

  getNextPage() {
    if (!this.isEnd) {
      this.isLoading = true;
      this.bookService
        .getBooks(this.page, this.pageSize, this.searchTerm)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe((newBooks) => {
          this.books = this.books.concat(newBooks);
          if (newBooks.length < this.pageSize) {
            this.isEnd = true;
          }
        });
      this.page++;
    }
  }
}
