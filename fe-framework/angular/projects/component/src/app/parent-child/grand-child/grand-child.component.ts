import { Component, OnInit, AfterContentInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.scss']
})
export class GrandChildComponent implements OnInit, AfterContentInit, AfterViewInit {

  constructor() {
    console.log('GrandChildComponent constructor');
  }

  ngOnInit() {
    console.log('GrandChildComponent ngOnInit');
  }

  ngAfterContentInit() {
    console.log('GrandChildComponent ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('GrandChildComponent ngAfterViewInit');

  }

}
