import { Component, OnInit, Input } from '@angular/core';
import { GlobalCommunicationService } from '../../global-communication.service';
import { Tab1Service } from '../tab1/tab1.service';


export class ShopItem {

  constructor(
    public name: string,
    public num: number
  ) {
  }

  clear() {
    this.num = 0;
  }
}

@Component({
  selector: 'app-tab1-child',
  templateUrl: './tab1-child.component.html',
  styleUrls: ['./tab1-child.component.css']
})
export class Tab1ChildComponent implements OnInit {

  @Input() tab1Message: any;

  list: ShopItem[];

  constructor(
    private globalCommunicationService: GlobalCommunicationService,
    private tab1Service: Tab1Service
  ) {
    console.log('tab1-child ----- contructor');
    this.list = [];
    this.globalCommunicationService.tab1Child$.subscribe(value => {
      this.print();
    });
  }

  ngOnInit() {
    console.log('tab1-child ----- ngOnInit');
  }

  print() {
    console.log('tab1 print!!!');
    this.tab1Message.where = 'hehe';
    console.log(this.tab1Message);
    console.log(JSON.stringify(this.list));
    this.tab1Service.handleList(this.list, this).forEach(element => {
      element.clear();
    });
    console.log(JSON.stringify(this.list));
  }

  addItem() {
    this.list.push(new ShopItem('Item' + Math.random(), 123));
  }
}
