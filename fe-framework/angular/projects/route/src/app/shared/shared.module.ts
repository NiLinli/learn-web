import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,     // 该模块需要 declare 的模块也需要一些常用的指令
  ],
  declarations: [
    // 组件等等...
  ],
  entryComponents: [],
  exports: [
    CommonModule,
    RouterModule
  ]
})

export class SharedModule { }
