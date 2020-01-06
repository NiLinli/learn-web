import { Component, OnInit, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-parent-child-demo',
  templateUrl: './parent-child-demo.component.html',
  styleUrls: ['./parent-child-demo.component.scss']
})
export class ParentChildDemoComponent implements OnInit, AfterViewInit, AfterContentInit {

  obj: any;

  constructor() {
    console.log('ParentChildDemoComponent constructor');
    this.obj = {
      name: 'nixixi',
      age: 18
    };
  }

  ngOnInit() {
    console.log('ParentChildDemoComponent ngOnInit');
    this.obj.age = 30;
  }

  ngAfterContentInit() {
    console.log('ParentChildDemoComponent ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ParentChildDemoComponent ngAfterViewInit');
  }
}
