import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tab1Component } from './tab1/tab1.component';
import { Tab2Component } from './tab2/tab2.component';
import { Tab3Component } from './tab3/tab3.component';
import { Tab1ChildComponent } from './tab1-child/tab1-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    Tab1Component,
    Tab2Component,
    Tab3Component,
    Tab1ChildComponent
  ],
  exports: [
    Tab1Component,
    Tab2Component,
    Tab3Component
  ]
})
export class ReuseModule { }
