import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildVvvComponent } from './child-vvv/child-vvv.component';

@Component({
  selector: 'app-viewchild-demo',
  templateUrl: './viewchild-demo.component.html',
  styleUrls: ['./viewchild-demo.component.scss']
})
export class ViewchildDemoComponent implements OnInit {

  // 1 没有的话 为undefined
  // 2 childVvv 是动态的
  @ViewChild(ChildVvvComponent) childVvv: ChildVvvComponent;

  childShow: boolean;
  constructor() {
    this.childShow = true;
  }

  ngOnInit() {
  }

  toggleChild() {
    this.childShow = !this.childShow;
  }

  callChild() {
    console.log(this.childVvv);
    this.childVvv.sayHello();
  }
}
