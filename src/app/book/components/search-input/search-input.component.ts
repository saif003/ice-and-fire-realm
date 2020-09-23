import { Component, Output, EventEmitter, Input } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss'],
})
export class SearchInputComponent {
  @Input() placeholder: string;
  @Output() readonly filterApply: EventEmitter<string>;

  hasFocus: boolean;
  searchTerm: string;
  termApplied: boolean;

  constructor(protected router: Router) {
    this.hasFocus = false;
    this.filterApply = new EventEmitter<string>();
  }

  formSubmitted(isClear: boolean = false) {
    if (isClear) {
      this.searchTerm = '';
    }
    this.termApplied = !isClear;
    this.filterApply.emit(this.searchTerm);
  }

  onBlurEvent(): void {
    this.hasFocus = false;
  }

  onFocusEvent(): void {
    // Adds box shadow across search form
    this.hasFocus = true;
  }
}
