import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-pipe-demo',
  templateUrl: './custom-pipe-demo.component.html',
  styleUrls: ['./custom-pipe-demo.component.scss']
})
export class CustomPipeDemoComponent implements OnInit {

  power: any;
  factor: any;

  constructor() {
    this.power = 5;
    this.factor = 1;
  }

  ngOnInit() {
  }

}
