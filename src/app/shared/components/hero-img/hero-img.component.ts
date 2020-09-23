import { Component, Input } from '@angular/core';
import { environment as env } from '@env';

@Component({
  selector: 'app-hero-img',
  templateUrl: './hero-img.component.html',
  styleUrls: ['./hero-img.component.scss'],
})
export class HeroImgComponent {
  @Input() secondaryLabel: string;
  @Input() minimal: string;
  appName: string = env.appName;

  constructor() {}
}
