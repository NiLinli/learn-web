import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedIntroComponent } from './shared-intro/shared-intro.component';
import { SharedIntroRoutingModule } from './shared-intro.routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    SharedIntroRoutingModule
  ],
  declarations: [
    SharedIntroComponent
  ]
})
export class SharedIntroFeatureModule { }
