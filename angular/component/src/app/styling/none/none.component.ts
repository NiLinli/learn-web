import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-none',
  templateUrl: './none.component.html',
  styleUrls: ['./none.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NoneComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
