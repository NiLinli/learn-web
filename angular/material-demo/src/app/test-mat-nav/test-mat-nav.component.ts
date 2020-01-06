import { Component, Inject } from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ExampleDef } from '../example.model';

@Component({
  selector: 'app-test-mat-nav',
  templateUrl: './test-mat-nav.component.html',
  styleUrls: ['./test-mat-nav.component.css']
})
export class TestMatNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    @Inject('ExampleDefs') public examples: ExampleDef[]
  ) {

    console.log(this.examples)
  }

}
