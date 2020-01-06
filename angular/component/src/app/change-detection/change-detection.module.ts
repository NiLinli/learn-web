import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChangeDetectionDemoComponent } from './change-detection-demo/change-detection-demo.component';
import { ChangeDetectionDefaultComponent } from './change-detection-default/change-detection-default.component';
import { ChangeDetectionOnpushComponent } from './change-detection-onpush/change-detection-onpush.component';
import { ChangeChangeDetectorRefComponent } from './change-change-detector-ref/change-change-detector-ref.component';

const CdRoutes: Routes = [
  { path: 'change-detection', component: ChangeDetectionDemoComponent }
];


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(CdRoutes)
  ],
  declarations: [
    ChangeDetectionDemoComponent,
    ChangeDetectionDefaultComponent,
    ChangeDetectionOnpushComponent,
    ChangeChangeDetectorRefComponent
  ]
})
export class ChangeDetectionModule { }
