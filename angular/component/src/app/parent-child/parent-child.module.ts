import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';
import { ParentChildDemoComponent } from './parent-child-demo/parent-child-demo.component';
import { Routes, RouterModule } from '@angular/router';

const parentRoutes: Routes = [
  { path: 'parent-child', component: ParentChildDemoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(parentRoutes)
  ],
  declarations: [ParentComponent, ChildComponent, GrandChildComponent, ParentChildDemoComponent]
})
export class ParentChildModule { }
