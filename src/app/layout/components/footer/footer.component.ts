import { Component } from '@angular/core';
import { environment } from '@env';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  orgName: string = environment.orgName;
}
