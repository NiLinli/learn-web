import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Demo1Component } from './demo1/demo1.component';
import { Demo2Component } from './demo2/demo2.component';
import { RoutedFeatureRouting } from './routed-feature-routing.module';

@NgModule({
  imports: [
    CommonModule,
    RoutedFeatureRouting
  ],
  declarations: [Demo1Component, Demo2Component]
})
export class RoutedFeatureModule { }
