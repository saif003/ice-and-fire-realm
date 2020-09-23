import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot } from '@angular/router';

import { environment as env } from '@env';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(private title: Title) {
    this.updateTitle();
  }

  setTitle(snapshot: ActivatedRouteSnapshot) {
    let lastChild = snapshot;
    while (lastChild.children.length) {
      lastChild = lastChild.children[0];
    }
    const { title } = lastChild.data;
    this.updateTitle(title);
  }

  private updateTitle(title?: string) {
    this.title.setTitle(title ? `${title} - ${env.appName}` : env.appName);
  }
}
