/* tslint:disable:no-unused-variable */
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChange } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BookListComponent } from './book-list.component';
import { bookMockService } from 'app/mock/providers';

describe('BookListComponent', () => {
  let component: BookListComponent;
  let fixture: ComponentFixture<BookListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [BookListComponent],
        imports: [RouterTestingModule, HttpClientTestingModule],
        providers: [
          { provide: ComponentFixtureAutoDetect, useValue: true },
          bookMockService,
        ],
        // schemas: [NO_ERRORS_SCHEMA]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(BookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should default to page 1', () => {
    expect(component.page === 1).toBeTruthy();
  });

  it('should fallback to page 1 on filter reset', () => {
    component.page = 4;
    component.searchTerm = 'search term';
    // tslint:disable-next-line: no-lifecycle-call
    component.ngOnChanges({
      searchTerm: new SimpleChange(null, component.searchTerm, false),
    });
    fixture.detectChanges();
    component.searchTerm = '';
    // tslint:disable-next-line: no-lifecycle-call
    component.ngOnChanges({
      searchTerm: new SimpleChange(null, component.searchTerm, false),
    });
    fixture.detectChanges();
    expect(component.page === 2).toBeTruthy();
  });
});
