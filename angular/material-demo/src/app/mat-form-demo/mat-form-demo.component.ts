import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSliderChange, MatSlideToggleChange, MatSlideToggle } from '@angular/material';

@Component({
  selector: 'mat-form-demo',
  templateUrl: './mat-form-demo.component.html',
  styleUrls: ['./mat-form-demo.component.css']
})
export class MatFormDemoComponent implements OnInit {

  sliderValue: boolean;
  @ViewChild(MatSlideToggle) slideToggle: MatSlideToggle;

  constructor() {
    this.sliderValue = true;
  }

  ngOnInit() {
  }

  // slider toggle
  // 先触发 判断是 click 还是 drag
  onSliderDragChange(e) {
    console.log('dragChange' + e);
  }

  onSliderToggleChange(e) {
    console.log('toggleChange' + e);
  }

  // 值改变完成后触发
  onSliderChange(e: MatSlideToggleChange) {
    console.log(e);
    this.sliderValue = e.checked;
  }

  onChangeSilderValue(): void {
    this.sliderValue = false;   // 不会触发任何事件, 必须 sidervalue 引用发生变化才可以
  }

  onToggleSilderValue(): void {
    this.slideToggle.toggle();
  }


}
