import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceCommunicationDemoService } from '../service-communication-demo.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnDestroy {

  constructor(
    private communication: ServiceCommunicationDemoService
  ) {
     this.communication.childSub = this.communication.child$.subscribe(value => void console.log(value));
   }

  ngOnInit() {
  }


  callGrandChild() {
    this.communication.addGrandChild('omg2');
  }

  ngOnDestroy(): void {
    this.communication.childSub.unsubscribe();
  }
}
