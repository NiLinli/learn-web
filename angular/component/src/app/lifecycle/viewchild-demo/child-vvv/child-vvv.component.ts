import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-vvv',
  templateUrl: './child-vvv.component.html',
  styleUrls: ['./child-vvv.component.scss']
})
export class ChildVvvComponent implements OnInit {


  title: string;
  constructor() {
    this.title = 'child vvv';
  }

  ngOnInit() {
  }

  sayHello() {
    console.log(`${this.title} sayHello`);
  }

}
