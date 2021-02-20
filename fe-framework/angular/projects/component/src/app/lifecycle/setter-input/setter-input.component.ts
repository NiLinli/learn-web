import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-setter-input',
  templateUrl: './setter-input.component.html',
  styleUrls: ['./setter-input.component.scss']
})
export class SetterInputComponent implements OnInit {
  names = ['Mr. IQ', ' fsadfsd ', '  Bombasto  '];
  name1 = 'nixixi';
  obj1 = {
    name: 'nixixixixixixixi',
    age: 18
  };

  constructor() { }

  ngOnInit() {
  }


  changeObj1Name() {
    this.obj1.name = 'change obj1 name';
  }
  changeName1() {
    this.name1 = 'change name1';

  }
}
