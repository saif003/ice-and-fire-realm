/* tslint:disable:no-unused-variable */
import {
  waitForAsync,
  ComponentFixture,
  TestBed,
  ComponentFixtureAutoDetect,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement, SimpleChange } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { bookMockService } from 'app/mock/providers';

import { CharacterListComponent } from './character-list.component';

describe('CharacterListComponent', () => {
  let component: CharacterListComponent;
  let fixture: ComponentFixture<CharacterListComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [CharacterListComponent],
        imports: [RouterTestingModule, HttpClientTestingModule],
        providers: [
          { provide: ComponentFixtureAutoDetect, useValue: true },
          bookMockService,
        ],
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`shouldn't block pagination requests by default`, () => {
    expect(component.isFilterView).toBeFalsy();
  });

  it('should restrict pagination callbacks on user filtration', () => {
    component.searchTerm = 'search term';
    // tslint:disable-next-line: no-lifecycle-call
    component.ngOnChanges({
      searchTerm: new SimpleChange(null, component.searchTerm, false),
    });
    fixture.detectChanges();
    expect(component.isFilterView).toBeTruthy();
  });

  it('should un restrict pagination on filter reset', () => {
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
    expect(component.isFilterView).toBeFalsy();
  });
});
