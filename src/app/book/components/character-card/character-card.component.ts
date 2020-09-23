import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterModel } from '@models';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrls: ['./character-card.component.scss'],
})
export class CharacterCardComponent {
  @Input() character: CharacterModel;

  get encodedLink() {
    return `/books/character/${encodeURIComponent(this.character.url)}`;
  }

  constructor(private router: Router, private route: ActivatedRoute) {}

  onCharacterClick(): void {
    if (this.character) {
      this.router.navigate([this.encodedLink], { relativeTo: this.route });
    }
  }

  joinList(list: string[]) {
    return list && list.length ? list.join(', ') : 'N/A';
  }
}
