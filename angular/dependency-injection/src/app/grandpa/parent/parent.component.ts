import { Component, OnInit, forwardRef, Optional, SkipSelf } from '@angular/core';
import { Parent } from '../parent.model';
import { GrandpaComponent } from '../grandpa.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
  providers: [{
    provide: Parent, useExisting: forwardRef(() => GrandpaComponent)
  }]
})
export class ParentComponent implements OnInit, Parent {
  name: string;
  constructor(
    @SkipSelf()  @Optional() public parent: Parent
  ) { }

  ngOnInit() {
    this.name = 'nixixi';
    console.log(this.parent);
  }

}
