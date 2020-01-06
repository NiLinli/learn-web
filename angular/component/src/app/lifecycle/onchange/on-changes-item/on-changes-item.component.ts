import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Person } from '../onchange.component';

@Component({
  selector: 'app-on-changes-item',
  templateUrl: './on-changes-item.component.html',
  styleUrls: ['./on-changes-item.component.css']
})
export class OnChangesItemComponent implements OnInit, OnChanges {

  @Input() comment: string;
  @Input() person: Person;

  constructor() {
    console.log('OnChangesItemComponent constructor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChangesItemComponent ngOnChanges', changes);
  }

  ngOnInit() {
    console.log('OnChangesItemComponent ngOnInit');
  }

  changeComment() {
    this.comment = '子元素修改的 comment';
  }

  changeObj() {
    this.person = {
      name: 'new nixixi',
      age: 16
    };
  }

  changeObjProp() {
    this.person.name = '子组件更改 mutable 属性';
  }


}
