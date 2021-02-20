import { Component, OnInit, Input } from '@angular/core';
import { ExampleDef } from '../example.model';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  @Input('items') items: ExampleDef[];

  constructor(
    private location: Location
  ) { }

  ngOnInit() {
  }

  // Checks if this current example is the selected one
  isActive(item): boolean {
    return `/${item.path}` === this.location.path();
  }

}