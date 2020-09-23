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
    if (window.pageYOffset || el.scrollTop || el.scrollTop > 30) {
      this.windowScrolled = true;
    } else if (
      (this.windowScrolled && window.pageYOffset) ||
      el.scrollTop ||
      el.scrollTop < 10
    ) {
      this.windowScrolled = false;
    }
  }

  scrollToTop() {
    if (this.element) {
      this.windowScrolled = false;
      this.element.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}
