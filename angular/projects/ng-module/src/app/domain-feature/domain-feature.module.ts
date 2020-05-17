import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopComponent } from './top/top.component';
import { SharedModule } from '../shared/shared.module';
import { NzDemoModalServiceComponent } from './nz-demo-modal-service/nz-demo-modal-service.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [TopComponent, NzDemoModalServiceComponent],
  exports: [TopComponent]
})
export class DomainFeatureModule { }


// 导出顶级模块
