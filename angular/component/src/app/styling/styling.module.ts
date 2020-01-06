import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { StylingDemoComponent } from './styling-demo/styling-demo.component';
import { NativeComponent } from './native/native.component';
import { NoneComponent } from './none/none.component';
import { SpecialSelectorsComponent } from './special-selectors/special-selectors.component';

const stylingRoutes: Routes = [
  { path: 'styling', component: StylingDemoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(stylingRoutes)
  ],
  declarations: [StylingDemoComponent, NativeComponent, NoneComponent, SpecialSelectorsComponent],
  // exports: [RouterModule]
})
export class StylingModule { }
