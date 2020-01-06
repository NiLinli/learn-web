import { Component, OnInit } from '@angular/core';
import { Parent } from './parent.model';

@Component({
  selector: 'app-grandpa',
  templateUrl: './grandpa.component.html',
  styleUrls: ['./grandpa.component.css']
})
export class GrandpaComponent implements OnInit, Parent {

  name: string;

  constructor() {
    this.name = 'nilinli';
  }

  ngOnInit() {
  }

}
