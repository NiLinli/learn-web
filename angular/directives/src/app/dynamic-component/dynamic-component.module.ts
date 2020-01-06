import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdHostDirective } from './ad-banner/ad-host.directive';
import { AdBannerComponent } from './ad-banner/ad-banner.component';
import { HeroJobAdComponent } from './ad-banner/ad/hero-job-ad/hero-job-ad.component';
import { HeroProfileComponent } from './ad-banner/ad/hero-profile/hero-profile.component';
import { DynamicComponentComponent } from './dynamic-component.component';


const pipeDemoRoutes: Routes = [
  { path: 'dynamic-component', component: DynamicComponentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(pipeDemoRoutes)
  ],
  declarations: [
    AdBannerComponent,
    HeroJobAdComponent,
    HeroProfileComponent,
    AdHostDirective,
    DynamicComponentComponent
  ],
  entryComponents: [
    HeroJobAdComponent,
    HeroProfileComponent
  ],
})
export class DynamicComponentModule { }
