import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { HeroReuseComponentComponent } from './hero-reuse-component/hero-reuse-component.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
  ],
  declarations: [
    HeroListComponent,
    HeroDetailComponent,
    HeroReuseComponentComponent
  ],
  providers: [HeroService]
})
export class HeroesModule { }
