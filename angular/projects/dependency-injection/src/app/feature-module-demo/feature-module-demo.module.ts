import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FeatureRangeComponent } from './feature-range/feature-range.component';
import { FeatureRangeService } from './feature-range.service';

const featureRoutes: Routes = [
  { path: 'feature-module-di', component: FeatureRangeComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featureRoutes)
  ],
  declarations: [
    FeatureRangeComponent
  ],
  providers: [FeatureRangeService]
})
export class FeatureModuleDemoModule { }
