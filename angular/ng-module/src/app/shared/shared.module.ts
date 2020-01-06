import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

import { Popular1Component } from './popular1/popular1.component';
import { ToUpperDirective } from './directives/to-upper.directive';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzModalCustomComponent } from './nz-custom-modal/nz-custom-modal.component';
import { NzCustomInputNumberComponent } from './nz-custom-input-number/nz-custom-input-number.component';


@NgModule({
  imports: [
    CommonModule,     // 该模块需要declare 的模块也需要一些常用的指令
    NgZorroAntdModule,
    FormsModule
  ],
  declarations: [
    Popular1Component,
    NzModalCustomComponent,
    ToUpperDirective,
    NzCustomInputNumberComponent
  ],
  entryComponents: [
    NzModalCustomComponent
  ],
  exports: [
    // 1. 导出常见 build-in 模块(里面的指令， 组件 其他导入共享模块的都可以使用)
    CommonModule,
    FormsModule, // 不导入直接导出

    // 2. 导出注册的组件
    Popular1Component,
    ToUpperDirective,

    // 3. 导入插件模块： 插件模块里面的组件指令都 declarations 在 插件的主模块中, 并不是声明在 AppModule 中, 所以不能全局使用。 每个需要的特性模块都要单独导入。
    TranslateModule,
    NgZorroAntdModule,
    NzModalCustomComponent,
    NzCustomInputNumberComponent

  ]
})
export class SharedModule { }
