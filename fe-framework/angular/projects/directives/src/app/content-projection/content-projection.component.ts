import { Component, OnInit, ViewChild } from '@angular/core';
import { ContentTabsestComponent } from './content-tabsest/content-tabsest.component';

@Component({
  selector: 'app-content-projection',
  templateUrl: './content-projection.component.html',
  styleUrls: ['./content-projection.component.scss']
})
export class ContentProjectionComponent implements OnInit {

  tabs: any[];

  firstContent: boolean;
  @ViewChild(ContentTabsestComponent) tabset: ContentTabsestComponent;

  constructor() {
    this.firstContent = true;
  }

  ngOnInit() {
    this.tabs = [
      { title: 'About', content: 'This is the About tab' },
      { title: 'Blog', content: 'This is our blog' },
      { title: 'Contact us', content: 'Contact us here' },
    ];
  }

  toggle() {
    this.firstContent = !this.firstContent;
    setTimeout(() => {
      this.tabset.logContentChildren();
    }, 0);
  }

}
