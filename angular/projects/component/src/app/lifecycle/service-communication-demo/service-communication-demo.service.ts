import { Injectable } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Injectable()
export class ServiceCommunicationDemoService {


  private demoSource = new Subject<string>();
  private childSource = new Subject<string>();
  private grandChildSource = new Subject<string>();

  demo$ = this.demoSource.asObservable();
  child$ = this.childSource.asObservable();
  grandChild$ = this.grandChildSource.asObservable();

  demoSub: Subscription;
  childSub: Subscription;
  grandChildSub: Subscription;

  constructor() { }


  addDemo(e: string) {
    this.demoSource.next(e);
  }
  addChild(e: string) {
    this.childSource.next(e);
  }
  addGrandChild(e: string) {
    this.grandChildSource.next(e);
  }

}
