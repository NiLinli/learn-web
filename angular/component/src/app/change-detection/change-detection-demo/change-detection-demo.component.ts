import { Component, OnInit } from '@angular/core';
import { Profile } from '../change-detection-default/profile.model';
import { Observable, timer } from 'rxjs';
import { take } from 'rxjs/operators';


@Component({
  selector: 'app-change-detection-demo',
  templateUrl: './change-detection-demo.component.html',
  styleUrls: ['./change-detection-demo.component.scss']
})
export class ChangeDetectionDemoComponent implements OnInit {

  profile1: Profile = new Profile('Linli', 'Ni');
  profile2: Profile = new Profile('Xixi', 'Lin');

  itemObservable: Observable<number>;

  constructor() { }

  ngOnInit() {
    this.itemObservable = timer(100, 100).pipe(take(101));
  }

  demoClick() {
    console.log('demo click');
  }

  demoChange() {
    return new Date();
  }

  onDemoEvent($event) {
    // this.profile2.last = '123';
    this.profile2 = new Profile('default', 'change your input');
  }
}

// 1 每个组件，都会创建一个 change detector
// 2 出发 change detector 的话， 这个change detector 子节点都会出发
// 3 任何一个组件发生了变化 ， 出发根节点(所以是从上到下)






// Zones

// Zones will automatically tell Angular that something changed under the most common scenarios(情形):
// 1. when a DOM Event occurs(like click, change, etc.)
// 2. when an HTTP request is resolved
// 3. when a Timer is triggered(setTimeout or setInterval)

// Other scenarios(OnPush strategy can be very useful) out of the Zones control
// using a third party library that runs asynchronously
// immutable data
// Observables


// kick 踢 ， 效力
