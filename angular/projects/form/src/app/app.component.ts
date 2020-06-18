import { Component, Inject } from '@angular/core';
import { ExampleDef } from './components/sidebar/example.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    @Inject('ExampleDefs') public examples: ExampleDef[]) {
  }
}
