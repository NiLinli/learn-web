import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-setter-input-sub2',
  templateUrl: './setter-input-sub2.component.html',
  styleUrls: ['./setter-input-sub2.component.css']
})
export class SetterInputSub2Component implements OnInit {

  _name1: string;
  _obj1: any;


  @Input()
  set name1(name1: string) {
    this._name1 = (name1 || name1.trim());
    console.log('name1 set');
  }
  get name1(): string {
    return this._name1;
  }

  @Input()
  set obj1(obj1: any) {
    console.log('obj1 set');
    this._obj1 = obj1;
  }

  get obj1() {
    return this._obj1;
  }


  constructor() { }

  ngOnInit() {
  }

}
