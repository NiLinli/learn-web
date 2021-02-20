import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: '[app-message]',
  template: `
  <h3 class="header">
    {{ header }}
  </h3>
  <p>
      <ng-content></ng-content>
  </p>
  `
})
export class MessageComponent implements OnInit {

  @Input() header: string;

  @HostBinding('attr.class') cssClass = 'bg-success'; // cssClass to be kept in sync with the host’s attribute class

  constructor() { }

  ngOnInit() {
    console.log('header', this.header);
  }

}
