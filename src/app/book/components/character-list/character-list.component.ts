import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { finalize } from 'rxjs/operators';

import { BookService } from 'app/book/services';
import { CharacterLinkModel, CharacterModel } from '@models';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss'],
})
export class CharacterListComponent implements OnInit, OnChanges {
  @Input() links: CharacterLinkModel[];
  @Input() searchTerm: string;

  characters: CharacterModel[];

  private filteredCharacterSource: Subject<CharacterModel[]>;
  filteredCharacters$: Observable<CharacterModel[]>;

  isLoading: boolean;
  page: number;
  limit: number;
  isFilterView: boolean;

  constructor(private bookService: BookService) {
    this.page = 0;
    this.limit = 8;
    this.characters = [];
  }

  ngOnInit() {
    this.initFilterSource();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.searchTerm && !changes.searchTerm.firstChange) {
      if (!this.searchTerm && this.isFilterView) {
        this.filteredCharacterSource.next(this.characters);
        this.isFilterView = false;
      } else if (this.searchTerm) {
        this.isFilterView = true;
        this.filterCharacters();
      }
    }
  }

  private initFilterSource() {
    this.filteredCharacterSource = new Subject<CharacterModel[]>();
    this.filteredCharacters$ = this.filteredCharacterSource.asObservable();
  }

  /**
   * Performing Front end filtering because "/characters" end point
   * doesn't support filtering by book name
   * also not incorporating filter by allegiance in order to avoid complex API tree invocation
   */
  private filterCharacters() {
    const term = this.searchTerm.toLowerCase();
    const result = this.characters.filter(({ name, born, gender }) => {
      return [name, born, gender].some((value) => {
        return value.toLowerCase().indexOf(term) > -1;
      });
    });
    this.filteredCharacterSource.next(result);
  }

  getNextPage() {
    if (
      !this.isFilterView &&
      this.page <= Math.ceil(this.links.length / this.limit)
    ) {
      this.isLoading = true;
      const start = this.page * this.limit;
      const end = start + this.limit;
      const targetLinks = this.links.slice(start, end);
      this.bookService
        .getCharacters(targetLinks)
        .pipe(finalize(() => (this.isLoading = false)))
        .subscribe((newCharacters) => {
          this.characters = this.characters.concat(newCharacters);
          this.filteredCharacterSource.next(this.characters);
        });
      this.page++;
    }
  }

  trackByFunction(index: number, item: CharacterModel) {
    if (!item) {
      return null;
    }
    return item.url;
  }
}
