import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PipeDemoComponent } from './pipe-demo.component';
import { BuildInPipeComponent } from './build-in-pipe/build-in-pipe.component';
import { CustomPipeDemoComponent } from './custom-pipe-demo/custom-pipe-demo.component';
import { PipesChangeDetectionComponent } from './pipes-change-detection/pipes-change-detection.component';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';
import { FlyingHerosPipe } from './pipes/flying-heros.pipe';
import { FlyingHerosImpurePipe } from './pipes/flying-heros-impure.pipe';
import { AsyncPipeComponent } from './async-pipe/async-pipe.component';
import { AsyncCachingPipeComponent } from './async-caching-pipe/async-caching-pipe.component';
import { FetchJsonPipe } from './pipes/fetch-json.pipe';

const pipeDemoRoutes: Routes = [
  { path: 'pipe', component: PipeDemoComponent }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(pipeDemoRoutes)
  ],
  declarations: [
    PipeDemoComponent,
    BuildInPipeComponent,
    CustomPipeDemoComponent,
    PipesChangeDetectionComponent,
    ExponentialStrengthPipe,
    FlyingHerosPipe,
    FlyingHerosImpurePipe,
    AsyncPipeComponent,
    AsyncCachingPipeComponent,
    FetchJsonPipe,
  ]
})
export class PipeDemoModule { }
