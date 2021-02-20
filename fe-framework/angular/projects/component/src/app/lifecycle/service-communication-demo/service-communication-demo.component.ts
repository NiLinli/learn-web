import { Component, OnInit } from '@angular/core';
import { ServiceCommunicationDemoService } from './service-communication-demo.service';

@Component({
  selector: 'app-service-communication-demo',
  templateUrl: './service-communication-demo.component.html',
  styleUrls: ['./service-communication-demo.component.scss'],
  providers: [ ServiceCommunicationDemoService ]
})
export class ServiceCommunicationDemoComponent implements OnInit {



  childShow: boolean;
  constructor(
    private communication: ServiceCommunicationDemoService
  ) {
    this.childShow = true;

    this.communication.demoSub = this.communication.demo$.subscribe(value =>{
      console.log(value);
    });
  }

  ngOnInit() {
  }

  toggleChild() {
    this.childShow = !this.childShow;
  }

  callChild() {
    this.communication.addChild('omg1');
  }
}
