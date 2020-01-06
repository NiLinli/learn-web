import { Component, OnInit, AfterViewInit, ViewChild, AfterContentInit, Input } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit, AfterViewInit, AfterContentInit {

  type: string;
  typeObj: any;

  @Input() obj: any;

  @ViewChild(ChildComponent) child: ChildComponent;

  constructor() {
    console.log('ParentComponent constructor');
    this.type = 'parent';
    this.typeObj = {
      name: '',
      age: 18
    };
  }

  ngOnInit() {
    console.log('ParentComponent ngOnInit');
    console.log(this.obj);
    this.obj.data = '123';
  }


  ngAfterContentInit() {
    console.log('ParentComponent ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ParentComponent ngAfterViewInit');
    console.log(this.child.title);
  }

}
