import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroListComponent } from '../pages/heroes/hero-list/hero-list.component';
import { HeroDetailComponent } from '../pages/heroes/hero-detail/hero-detail.component';

const heroesRoutes: Routes = [
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'hero-muti/:id', component: HeroListComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }
