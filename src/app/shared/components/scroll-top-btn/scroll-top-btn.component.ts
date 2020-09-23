import { Component, OnInit } from '@angular/core';
import { CdkScrollable, ScrollDispatcher } from '@angular/cdk/overlay';

@Component({
  selector: 'app-scroll-top-btn',
  templateUrl: './scroll-top-btn.component.html',
  styleUrls: ['./scroll-top-btn.component.scss'],
})
export class ScrollTopBtnComponent implements OnInit {
  windowScrolled: boolean;
  element: CdkScrollable;

  get fabClasses() {
    return { 'show-floating-container': this.windowScrolled };
  }

  constructor(private dispatcher: ScrollDispatcher) {}

  ngOnInit() {
    this.initScrollListener();
  }

  private initScrollListener() {
    this.dispatcher.scrolled().subscribe((el) => {
      this.element = el as CdkScrollable;
      this.onScrollHost();
    });
  }

  private onScrollHost() {
    const el = this.element.getElementRef()?.nativeElement;
    if (el.scrollTop || el.scrollTop > 100) {
      this.windowScrolled = true;
      console.log('display fab');
    } else if (this.windowScrolled || el.scrollTop || el.scrollTop < 10) {
      this.windowScrolled = false;
      console.log('hide fab');
    }
  }

  scrollToTop() {
    if (this.element) {
      this.windowScrolled = false;
      this.element.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
