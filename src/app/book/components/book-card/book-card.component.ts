import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BookModel } from '@models';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() bookModel: BookModel;
  @Input() suppressNavigation: boolean;

  get authors() {
    return this.bookModel ? this.bookModel.authors?.join(', ') : 'N/A';
  }

  get encodedLink() {
    return encodeURIComponent(this.bookModel?.url);
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  onBookClick(): void {
    if (this.bookModel && !this.suppressNavigation) {
      this.router.navigate([this.encodedLink], { relativeTo: this.route });
    }
  }
}
