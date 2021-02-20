import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-hooks-demo',
  templateUrl: './all-hooks-demo.component.html',
  styles: []
})
export class AllHooksDemoComponent implements OnInit {
  displayAfters = false;

  someInputObj: any;
  constructor() {
    this.someInputObj = {
    };
  }

  ngOnInit() {

  }

  toggleAfters(): void {
    this.displayAfters = !this.displayAfters;
  }
}
