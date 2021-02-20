import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child111',
  templateUrl: './child111.component.html',
  styleUrls: ['./child111.component.scss']
})
export class Child111Component implements OnInit, OnChanges {

  @Input() obj: any;

  constructor() {

  }

  ngOnChanges() {

    console.log('Child111Component onchange');

  }

  ngOnInit() {
  }

}
