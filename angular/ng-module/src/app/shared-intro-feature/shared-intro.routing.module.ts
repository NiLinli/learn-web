import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SharedIntroComponent } from './shared-intro/shared-intro.component';

const sharedIntroRoutes: Routes = [
  { path: 'shared-intro', component: SharedIntroComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(sharedIntroRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class SharedIntroRoutingModule { }
