import { Component, OnInit, AfterContentInit, ContentChildren, QueryList, ContentChild } from '@angular/core';
import { ContentTabComponent } from '../content-tab/content-tab.component';

@Component({
  selector: 'app-content-tabsest',
  templateUrl: './content-tabsest.component.html',
  styleUrls: ['./content-tabsest.component.scss']
})
export class ContentTabsestComponent implements OnInit, AfterContentInit {

  @ContentChildren(ContentTabComponent) tabs: QueryList<ContentTabComponent>;
  @ContentChild(ContentTabComponent) tabfirst: ContentTabComponent;

  constructor() { }

  ngOnInit() {
  }

  // Called after ngOnInit when the component's or directive's content has been initialized.
  ngAfterContentInit(): void {
    console.log('tabset ngAfterContentInit');
    console.log(this.tabs.toArray());
    console.log(this.tabfirst === this.tabs.toArray()[0]);
    this.tabs.toArray()[0].active = true;

    // changes
    this.tabs.changes.subscribe((changes: QueryList<ContentTabComponent>) => {
      console.log(changes);
    });
  }

  setActive(tab: ContentTabComponent): void {
    this.tabs.toArray().forEach(t => t.active = false);
    tab.active = true;
  }

  logContentChildren() {
    console.log(this.tabs);
    console.log(this.tabfirst);
  }

}
