import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CharacterModel } from '@models';
import { BookService } from 'app/layout/book/services';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss'],
})
export class CharacterDetailComponent implements OnInit {
  character: CharacterModel;
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
        .getCharacter(decodeURIComponent(params.uri))
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe(
          (response: CharacterModel) => {
            if (response) {
              this.character = response;
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

  joinList(list: string[]) {
    return list && list.length ? list.join(', ') : 'N/A';
  }
}
