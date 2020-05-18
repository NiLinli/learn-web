import { Component, NgZone } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-ng-zone-demo',
  templateUrl: './ng-zone-demo.component.html'
})
export class NgZoneDemoComponent {
  progress: number = 0;
  label: string;

  obj: any;

  constructor(private ngZone: NgZone) {
    this.obj = {};
    this.obj.name = 'nixixi';
  }

  // Loop inside the Angular zone
  // so the UI DOES refresh after each setTimeout cycle
  processWithinAngularZone() {
    this.label = 'inside';
    this.progress = 0;
    this.increaseProgress(() => console.log('Inside Done!'));
  }

  // Loop outside of the Angular zone
  // so the UI DOES NOT refresh after each setTimeout cycle
  processOutsideOfAngularZone() {

    this.progress = 0;

    // 移出 ngZone, 视图不刷新
    this.ngZone.runOutsideAngular(() => {
      this.label = 'outside';
      this.increaseProgress(() => {
        // 执行完了再放入 ngZone ，视图刷新
        this.ngZone.run(() => { console.log('Outside Done!'); });
      });
    });
  }

  onChangeObj() {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.obj = {
          name: 'new nixixi'
        };
      }, 0);
    });
  }

  private increaseProgress(doneCallback: () => void) {
    this.progress += 1;
    console.log(`Current progress: ${this.progress}%`);

    if (this.progress < 100) {
      setTimeout(() => this.increaseProgress(doneCallback), 10); // 这个在ngZone里面
    } else {
      doneCallback();
    }
  }

}
