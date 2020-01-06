import { Component, OnInit, forwardRef, Optional, SkipSelf } from '@angular/core';
import { Parent } from '../../parent.model';
import { ParentComponent } from '../parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [{
    provide: Parent, useExisting: forwardRef(() => ParentComponent)
  }]
})
export class ChildComponent implements OnInit {

  constructor(@Optional() private parent: Parent) { }

  ngOnInit() {
    console.log(this.parent);
  }

}
