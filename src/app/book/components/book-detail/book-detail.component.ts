import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { BookModel, CharacterLinkModel } from '@models';
import { BookService } from 'app/book/services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.scss'],
})
export class BookDetailComponent implements OnInit {
  bookModel: BookModel;
  characterLinks: CharacterLinkModel[];
  searchTerm: string;
  isLoading: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService
  ) {}

  ngOnInit() {
    this.initSubscriptions();
  }

  private initSubscriptions() {
    this.route.params.subscribe((params) => {
      this.isLoading = true;
      this.bookService
        .getApiResponse<BookModel>(decodeURIComponent(params.uri))
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(
          (response: BookModel) => {
            if (response) {
              this.bookModel = response;
              this.initLinks();
            } else {
              this.router.navigateByUrl('/handle/not-found');
            }
          },
          (error) => {
            this.router.navigateByUrl('/handle/not-found');
          }
        );
    });
  }

  private initLinks() {
    const povLinks = (this.bookModel.povCharacters || []).map((url) => ({
      url,
      isPov: true,
    }));
    const otherLinks = (this.bookModel.characters || []).map((url) => ({
      url,
      isPov: false,
    }));
    this.characterLinks = povLinks.concat(otherLinks);
  }

  filterResults(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
