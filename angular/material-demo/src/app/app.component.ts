import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private iconRegistry: MatIconRegistry
  ) {
    iconRegistry.setDefaultFontSetClass('iconfont');
  }
}
