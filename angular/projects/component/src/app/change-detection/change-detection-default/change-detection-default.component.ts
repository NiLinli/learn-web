import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import { Profile } from './profile.model';

@Component({
  selector: 'app-change-detection-default',
  templateUrl: './change-detection-default.component.html',
  styleUrls: ['./change-detection-default.component.scss']
})
export class ChangeDetectionDefaultComponent {

  @Input() profile: Profile;
  @Output() demoEvent: EventEmitter<any> = new EventEmitter();

  constructor(
    private cdRef: ChangeDetectorRef
  ) { }


  getFirstChange(firstname: string) {
    if (firstname === 'detach') {
      console.log('detach');  // 拆掉
      this.cdRef.detach();
    } else if (firstname === 'reattach') {
      console.log('reattach'); // 重新装上
      this.cdRef.reattach();
    }
  }
  getLastChange(lastname: string) {
    if (lastname === 'detectChanges') {
      console.log('detectChanges');
      this.cdRef.detectChanges();
      // Checks the change detector and its children. （detach了之后依然有效）
      //  1 The change detector is detached from the view ( see detach )
      // 2 An update has happened but it hasn't been inside the Angular Zone hence Angular doesn't know about it.
    }
  }

  defaultClick() {
    this.demoEvent.emit(true);

  }

}


