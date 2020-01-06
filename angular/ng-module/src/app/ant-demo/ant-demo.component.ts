import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ant-demo',
  templateUrl: './ant-demo.component.html',
  styleUrls: ['./ant-demo.component.css']
})
export class AntDemoComponent implements OnInit {

  testInputNumber = '123';

  constructor() { }

  ngOnInit() {
  }

  onInputNumberChange(value) {
    console.log(value);
    console.log(typeof value);
    

  }

}
