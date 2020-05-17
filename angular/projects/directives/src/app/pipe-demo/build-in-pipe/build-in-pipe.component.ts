import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-in-pipe',
  templateUrl: './build-in-pipe.component.html',
  styleUrls: ['./build-in-pipe.component.scss']
})
export class BuildInPipeComponent implements OnInit {

  birthday: Date;

  toggle: boolean;

  a: number;
  b: number;
  pi: number;
  e: number;

  arr: string[];
  str: string;


  get format() {
    return this.toggle ? 'shortDate' : 'fullDate';
  }

  constructor() {
    this.birthday = new Date();
    // currency
    this.a = 0.259;
    this.b = 1.3495;
    // number
    this.pi = 3.14;
    this.e = 2.718281828459045;
    // slice
    this.arr = ['a', 'b', 'c', 'd'];
    this.str = 'abcd';
  }

  ngOnInit() {
  }

  toggleFormat(): void {
    this.toggle = !this.toggle;
  }

}
