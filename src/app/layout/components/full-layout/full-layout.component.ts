import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  // AnimationsService,
  TitleService,
  routeAnimations,
} from '@core/services';

import { Settings } from '@models';

@Component({
  selector: 'app-full-layout',
  templateUrl: './full-layout.component.html',
  styleUrls: ['./full-layout.component.scss'],
  animations: [routeAnimations],
})
export class FullLayoutComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<void> = new Subject<void>();

  settingsState: Settings = {
    pageAnimations: true,
    elementsAnimations: true,
  };

  constructor(
    private router: Router,
    // private animationService: AnimationsService,
    private titleService: TitleService
  ) {}

  ngOnInit() {
    this.applySettings();
    this.subscribeToRouterEvents();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private applySettings() {
    // this.animationService.updateRouteAnimationType(
    //   this.settingsState.pageAnimations,
    //   this.settingsState.elementsAnimations
    // );
  }

  private subscribeToRouterEvents() {
    this.router.events.pipe(takeUntil(this.unsubscribe$)).subscribe((event) => {
      if (event instanceof ActivationEnd) {
        this.titleService.setTitle(event.snapshot);
      }
    });
  }
}
