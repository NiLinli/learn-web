import { Component, OnInit, OnDestroy } from '@angular/core';
import { ServiceCommunicationDemoService } from '../../service-communication-demo.service';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.scss']
})
export class GrandchildComponent implements OnInit, OnDestroy {

  constructor(
    private communication: ServiceCommunicationDemoService
  ) {
    this.communication.grandChildSub = this.communication.grandChild$.subscribe(value => void console.log(value));
   }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.communication.grandChildSub.unsubscribe();
  }

}
