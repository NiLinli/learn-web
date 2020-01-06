import { Component, OnInit } from '@angular/core';
import { ComponentRangeDemoService } from '../component-range-demo.service';
import { ComponentService } from './component.service';

@Component({
  selector: 'app-component-range',
  templateUrl: './component-range.component.html',
  providers: [ComponentService]
  // 注册到组件中服务随着组件的生命周期而存活，子 injector 注入
})
export class ComponentRangeComponent implements OnInit {

  constructor(
    private cs: ComponentService,
    private crds: ComponentRangeDemoService
  ) { }

  ngOnInit() {
    console.log(this.crds.title);
  }

  changeTitle(): void {
    this.cs.setTitle(Math.random() + '');
  }

  logTitle(): void {
    this.cs.logTitle();
  }

}
