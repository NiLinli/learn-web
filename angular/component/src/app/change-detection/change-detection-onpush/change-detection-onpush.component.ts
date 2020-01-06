import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Profile } from '../change-detection-default/profile.model';
@Component({
  selector: 'app-change-detection-onpush',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection-onpush.component.html',
  styleUrls: ['./change-detection-onpush.component.scss']
})
export class ChangeDetectionOnpushComponent implements OnInit {

  @Input() profile: Profile;

  constructor() { }

  ngOnInit() {
  }

  test() {
    console.log('test');
  }

}

// 前提是改变其他组件的时候，从top 遍历到 bottom ，忽略 @Input() 属性没有变化
// 改变自己就不考虑这个

// Input 不是真正的变化
// 1. immutable
// 2. Obeserver
// 需要调用 cdf 自己去刷新



