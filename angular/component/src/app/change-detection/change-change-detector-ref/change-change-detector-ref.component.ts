import { Component, OnInit, Input, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-change-change-detector-ref',
  templateUrl: './change-change-detector-ref.component.html',
  styleUrls: ['./change-change-detector-ref.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeChangeDetectorRefComponent implements OnInit {

  @Input() items: Observable<number>;

  counter = 0;

  constructor(
    private changeDetector: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    this.items.subscribe((v) => {
      console.log('got value', v);
      this.counter++;
      if (this.counter % 5 === 0) {
        // this.changeDetector.markForCheck();
        this.changeDetector.detectChanges();

      }
    },
      null,
      () => {
        this.changeDetector.detectChanges();
        // this.changeDetector.markForCheck();
      });
  }
}
