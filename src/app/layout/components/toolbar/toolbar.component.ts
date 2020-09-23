import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  Input,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';
import {
  Router,
  NavigationStart,
  NavigationCancel,
  NavigationEnd,
} from '@angular/router';
import { environment as env } from '@env';

import { Subscription } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit, AfterViewInit, OnDestroy {
  logoFull = env.logo;
  appName = env.appName;
  routeLoading: boolean;
  routeLoadingSubscription$: Subscription;

  constructor(private router: Router) {
    // this.routeLoading = true;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.subscribeToProgressBarEvents();
  }

  ngOnDestroy(): void {
    if (this.routeLoadingSubscription$) {
      this.routeLoadingSubscription$.unsubscribe();
    }
  }

  subscribeToProgressBarEvents(): void {
    this.routeLoadingSubscription$ = this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.routeLoading = true;
      } else if (
        event instanceof NavigationEnd ||
        event instanceof NavigationCancel
      ) {
        this.routeLoading = false;
      }
    });
  }
}
