import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-custom-count',
  templateUrl: './custom-count.component.html',
  styleUrls: ['./custom-count.component.css']
})
export class CustomCountComponent implements OnInit {

  private counterValue = 0;

  @Input()
  get count() {
    return this.counterValue;
  }

  set count(value) {
    this.counterValue = value;
    this.countChange.emit(this.counterValue);
  }

  @Output()
  countChange: EventEmitter<number>;

  constructor() {
    this.countChange = new EventEmitter();
  }

  ngOnInit() {
  }

  decrement() {
    this.count--;
  }

  increment() {
    this.count++;
  }

}


// Introduce a property binding (e.g. [foo])
// Introduce a event binding with the same name, plus a Change suffix (e.g. (fooChange))
// Make sure the event binding takes care of property extraction (if needed)

// Angular doesn’t come with built-in two-way data binding anymore
// but with APIs that allow to implement this type of binding using property and event bindings
