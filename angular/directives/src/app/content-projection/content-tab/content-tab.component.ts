import { Component, OnInit, Input, AfterViewInit, AfterContentInit } from '@angular/core';

@Component({
  selector: 'app-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.scss']
})
export class ContentTabComponent implements OnInit, AfterContentInit, AfterViewInit {

  @Input() title: string;
  active = false;
  name: string;

  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    console.log(this.title + 'ngAfterContentInit');
  }


  ngAfterViewInit() {
    console.log(this.title + 'ngAfterViewInit');

  }

}
