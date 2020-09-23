/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HeroImgComponent } from './hero-img.component';

describe('HeroImgComponent', () => {
  let component: HeroImgComponent;
  let fixture: ComponentFixture<HeroImgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroImgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
