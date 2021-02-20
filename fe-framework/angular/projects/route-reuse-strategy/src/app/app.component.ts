import { Component } from '@angular/core';
import { Router, NavigationEnd, ActivationEnd, ResolveEnd } from '@angular/router';
import { } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { GlobalCommunicationService } from './global-communication.service';
import { ExampleDef } from './example.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  items: ExampleDef[];

  constructor(
    private router: Router,
    private globalCommunicationService: GlobalCommunicationService
  ) {
    this.items = [
      {
        path: 'tab1',
        label: 'Tab1'
      },
      {
        path: 'tab2',
        label: 'Tab2'
      },
      {
        path: 'tab3',
        label: 'Tab3'
      }
    ];


    this.router.events
      .pipe(
        filter((event) => event instanceof ResolveEnd),
        map(() => this.router.routerState.root.url),
      // map(() => this.router),
    ).subscribe((event) => {
      // setTimeout(() => {
      // this.globalCommunicationService.addTab1Child('ResolveEnd');
      // }, 0);
    });

  }

  onActivate(component) {
    console.log('12312312321');
    console.log(component);
  }
  onDeactivate(component) {
    // you have access to the component instance
    console.log(component);
  }
}

