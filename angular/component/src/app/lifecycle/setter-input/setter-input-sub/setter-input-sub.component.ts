import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: '[app-setter-input-sub]',
  templateUrl: './setter-input-sub.component.html',
  styleUrls: ['./setter-input-sub.component.css']
})
export class SetterInputSubComponent implements OnInit, OnChanges {


  _name: string;


  @Input()
  set name(name: string) {
    this._name = (name || name.trim());
    console.log('SetterInputSubComponent set');
  }
  get name(): string {
    return this._name;
  }

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(): void {
    console.log(this.name + 'SetterInputSubComponent onchanges');

  }

}
