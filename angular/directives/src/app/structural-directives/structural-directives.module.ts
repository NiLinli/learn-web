import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UnlessDirective } from './directives/unless.directive';
import { MyForDirective } from './directives/ng-book-for.directive';
import { StructuralDemoComponent } from './structural-demo/structural-demo.component';

const structralDemoRoutes: Routes = [
  { path: 'structural-demo', component: StructuralDemoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(structralDemoRoutes)
  ],
  declarations: [
    UnlessDirective,
    StructuralDemoComponent,
    MyForDirective
  ]
})
export class StructuralDirectivesModule { }
