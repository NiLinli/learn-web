import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,     // 该模块需要 declare 的模块也需要一些常用的指令
  ],
  declarations: [
    // 组件等等...
  ],
  entryComponents: [],
  exports: [
    // 导出上面导入的
    CommonModule,
    // 不导入直接导出 module, 做共享, 做转发
  ]
})

export class SharedModule { }
