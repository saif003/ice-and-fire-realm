import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from '@core/services';
import { BookModel, CharacterLinkModel, CharacterModel } from '@models';
import { forkJoin, Observable, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable()
export class BookService {
  constructor(private httpClient: HttpClient, private utils: UtilityService) {}

  getBooks(
    page: number = 1,
    pageSize: number = 10,
    name?: string
  ): Observable<Array<BookModel>> {
    const params = {
      page: `${page}`,
      pageSize: `${pageSize}`,
      name,
    };
    return this.httpClient
      .get<BookModel[]>(`books${params}`, { params })
      .pipe(map((res) => res || []));
  }

  getCharacters(links: CharacterLinkModel[]): Observable<CharacterModel[]> {
    const requests = links.map(({ url, isPov }) =>
      this.getApiResponse<CharacterModel>(url, (res) => ({ ...res, isPov }))
    );
    return forkJoin(requests);
  }

  getCharacter(uri: string): Observable<CharacterModel> {
    return this.getApiResponse<CharacterModel>(uri).pipe(
      switchMap((character: CharacterModel) => {
        const streams = ['spouse', 'father', 'mother'].reduce((result, v) => {
          if (character[v]) {
            result.push(this.getApiResponse<CharacterModel>(character[v]));
          }
          return result;
        }, []);
        if (streams.length) {
          return forkJoin(streams).pipe(
            map((response) => {
              return { ...character, relations: response } as CharacterModel;
            })
          );
        }
        return of(character);
      }),
      switchMap((character: CharacterModel) => {
        if (character.books.length || character.povBooks.length) {
          const streams = character.books
            .concat(character.povBooks)
            .map((v) => this.getApiResponse(v));
          return forkJoin(streams).pipe(
            map((response) => {
              return { ...character, _books: response } as CharacterModel;
            })
          );
        }
        return of(character);
      })
    );
  }

  getApiResponse<T>(
    uri: string,
    mapper: (r: any) => T = (response) => response
  ): Observable<T> {
    return this.httpClient.get<T>(uri).pipe(map(mapper));
  }
}
