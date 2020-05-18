import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgZoneDemoComponent } from './ng-zone-demo/ng-zone-demo.component';
import { Child111Component } from './child111/child111.component';


const zoneRoutes: Routes = [
  { path: 'zone-demo', component: NgZoneDemoComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(zoneRoutes)
  ],
  declarations: [NgZoneDemoComponent, Child111Component]
})
export class ZoneModule { }
