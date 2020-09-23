import { BookModel } from 'app/models/book.model';

export interface CharacterModel {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  father: string;
  mother: string;
  spouse: string;
  relations: CharacterModel[];
  titles: string[];
  aliases: string[];
  allegiances: string[];
  books: string[];
  povBooks: string[];
  tvSeries: string[];
  playedBy: string[];
  isPov: boolean;

  _books: BookModel[];
}

export interface CharacterLinkModel {
  url: string;
  isPov: boolean;
}
