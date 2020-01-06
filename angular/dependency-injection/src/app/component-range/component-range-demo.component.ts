import { Component, OnInit } from '@angular/core';
import { ComponentRangeDemoService } from './component-range-demo.service';
import { ComponentService } from './component-range/component.service';


@Component({
  selector: 'app-component-range-demo',
  templateUrl: './component-range-demo.component.html',
  styleUrls: ['./component-range-demo.component.scss'],
  providers: [ComponentRangeDemoService]
})
export class ComponentRangeDemoComponent implements OnInit {

  constructor(
    private crds: ComponentRangeDemoService,
    // private cs: ComponentService //  不能访问
  ) {
    // console.log(this.cs);
  }

  ngOnInit() {

  }

}
