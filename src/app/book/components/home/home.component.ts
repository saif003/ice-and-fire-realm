import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  searchTerm: string;

  constructor() {}

  filterResults(searchTerm: string) {
    this.searchTerm = searchTerm;
  }
}
