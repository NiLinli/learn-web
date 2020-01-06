import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent, interval } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  @ViewChild('new') new: ElementRef;

  constructor() { }

  ngOnInit() {
    fromEvent(this.new.nativeElement, 'click').pipe(
      switchMap(ev => interval(1000))
    ).subscribe(value => {
      console.log(value)
    })
  }

}
