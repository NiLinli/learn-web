import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';
import { throttleTime } from 'rxjs/operators'

@Component({
  selector: 'app-flow-demo',
  templateUrl: './flow-demo.component.html',
  styleUrls: ['./flow-demo.component.scss']
})
export class FlowDemoComponent implements OnInit {

  count1: number;
  lastClick: number;
  rate: number;

  @ViewChild('Add2') add2: ElementRef;
  count2: number;

  constructor() {
    this.count1 = 0;
    this.rate = 1000;
    this.lastClick = Date.now() - this.rate;

    this.count2 = 0;
  }

  ngOnInit() {
    fromEvent(this.add2.nativeElement, 'click').pipe(
      throttleTime(1000)
    ).subscribe(value => console.log(`Clicked 2 ${++this.count2} times`))
  }

  onClick1() {
    if (Date.now() - this.lastClick >= this.rate) {
      console.log(`Clicked 1 ${++this.count1} times`);
      this.lastClick = Date.now();
    }
  }


}
