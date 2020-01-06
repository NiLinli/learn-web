import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateRefDemoComponent } from './template-ref-demo/template-ref-demo.component';
import { DomAbstractionsComponent } from './dom-abstractions.component';
import { HostViewDemoComponent } from './host-view-demo/host-view-demo.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TemplateRefDemoComponent,
    DomAbstractionsComponent,
    HostViewDemoComponent,
  ],
  entryComponents: [
    HostViewDemoComponent
  ]
})
export class DomAbstractionsModule { }
