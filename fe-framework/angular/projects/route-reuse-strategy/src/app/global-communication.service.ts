import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable()
export class GlobalCommunicationService {

  tab1Subject: Subject<any>;
  tab1$: Observable<any>;

  tab1ChildSubject: Subject<any>;
  tab1Child$: Observable<any>;

  constructor(

  ) {
    this.tab1Subject = new Subject();
    this.tab1$ = this.tab1Subject.asObservable();

    this.tab1ChildSubject = new Subject();
    this.tab1Child$ = this.tab1ChildSubject.asObservable();
  }

  addTab1(str: string) {
    this.tab1Subject.next(str);
  }

  addTab1Child(str: string) {
    this.tab1ChildSubject.next(str);
  }

}
