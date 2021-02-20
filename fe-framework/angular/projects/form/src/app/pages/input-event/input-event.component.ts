import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-event',
  templateUrl: './input-event.component.html',
  styleUrls: ['./input-event.component.css']
})
export class InputEventComponent implements OnInit {


  value1 = '';
  value2 = '';
  value3 = '';


  constructor() { }

  ngOnInit() {
  }


  onKey1(event: KeyboardEvent) {
    this.value1 += (<HTMLInputElement>event.target).value + ' | ';
  }

  onKey2(value: string) {
    this.value2 += value + ' | ';
  }

  // keyup.enter  按下回车键的事件
  onEnter(value: string) {
    console.log('keyup.enter');
    this.value3 = value;
  }

  onBlur(value: string) {
    console.log('blur');
    this.value3 = value;
  }
  onFocus(value: string) {
    console.log('focus');
    this.value3 = value;
  }


}
