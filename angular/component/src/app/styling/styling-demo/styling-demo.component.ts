import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-styling-demo',
  templateUrl: './styling-demo.component.html',
  styleUrls: ['./styling-demo.component.scss']
})
export class StylingDemoComponent implements OnInit {

  isActive: boolean;

  constructor(
    private el: ElementRef
  ) { }

  ngOnInit() {
  }

  toggleClass(): void {
    this.isActive = !this.isActive;
  }

}
