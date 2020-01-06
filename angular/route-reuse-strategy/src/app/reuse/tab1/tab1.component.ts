import { Component, OnInit } from '@angular/core';
import { GlobalCommunicationService } from '../../global-communication.service';
import { Tab1Service } from './tab1.service';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.component.html',
  styleUrls: ['./tab1.component.css'],
  providers: [Tab1Service]
})
export class Tab1Component implements OnInit {

  obj: any;
  num: number;
  tab1Message: any;

  constructor(
    private globalCommunicationService: GlobalCommunicationService
  ) {
    console.log('tab1 ----- contructor');
    this.num = 0;
    this.obj = {
      name: 'nixixi',
      age: 18
    };
    this.tab1Message = {
      message: 'nixixi tab1 to tab1 child',
      where: 'tab1'
    };
  }

  ngOnInit() {
    console.log('tab1 ----- ngOnInit');
    this.globalCommunicationService.tab1$.subscribe((value) => {
      if (value === 'detach') {
        this.print();
      }
    });

  }

  print() {
    console.log('tab1 ----- ' + JSON.stringify(this.obj));
    for (let i = 0; i < 1000; i++) {
      this.num++;
    }

    console.log('this.num = ' + this.num);
  }

  changeTab1Message() {
    this.tab1Message.message = 'message have been changed!!!';
  }

}
