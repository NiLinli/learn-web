import { Component, OnInit } from '@angular/core';

export interface Person {
  name: string;
  age: number;
}

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.scss']
})
export class OnchangeComponent implements OnInit {

  comment: string; // immutable
  person: Person; // mutable

  constructor() {
    this.comment = 'hehe';
    this.person = {
      name: 'nixixi',
      age: 18
    };
  }

  ngOnInit() {
  }

  changeComment() {
    this.comment = 'heheda';
  }

  changeObj() {
    this.person.name = 'nixixi2222222';
  }

}
