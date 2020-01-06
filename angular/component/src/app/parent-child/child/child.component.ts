import { Component, OnInit, AfterViewInit, ViewChildren, QueryList, ViewChild, ElementRef, AfterContentInit, Input } from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
  exportAs: 'app-child-point'
})
export class ChildComponent implements OnInit, AfterViewInit, AfterContentInit {

  @ViewChildren(GrandChildComponent) grandChildren: QueryList<GrandChildComponent>;

  // 1. DOM
  // 2. component / directive
  @ViewChild('myDiv') myDiv: ElementRef;

  title: string;

  @Input() typeObj: any;
  @Input() type: string;
  @Input() obj: any;


  constructor() {
    this.title = 'child title';
    console.log('ChildComponent constructor');
  }

  ngOnInit() {
    console.log('ChildComponent ngOnInit');
    console.log(this.obj);
  }


  ngAfterContentInit() {
    console.log('ChildComponent ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ChildComponent ngAfterViewInit');
    console.log(this.grandChildren);
    console.log(this.myDiv);
  }

}
