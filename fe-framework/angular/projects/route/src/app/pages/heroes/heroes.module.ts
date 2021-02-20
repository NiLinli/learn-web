import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroService } from './hero.service';
import { HeroReuseComponentComponent } from './hero-reuse-component/hero-reuse-component.component';

@NgModule({
  imports: [
    SharedModule,
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
