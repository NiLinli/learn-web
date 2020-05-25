import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { IntroComponent } from './intro/intro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './providers/auth-guard.service';
import { SelectivePreloadingStrategy } from './providers/selective-preloading-strategy';
import { TestParamsComponent } from './test-params/test-params.component';
import { TestParamsOptionalComponent } from './test-params-optional/test-params-optional.component';

const routes: Routes = [
  {
    path: 'intro',
    component: IntroComponent,
    data: {
      title: '路由介绍'
    }
  },
  {
    path: 'test-params/:id',
    component: TestParamsComponent,
    data: {
      title: '测试 Params'
    }
  },
  {
    path: 'test-params-optional',
    component: TestParamsOptionalComponent,
    data: {
      title: '测试 Params'
    }
  },
  {
    path: 'admin',
    loadChildren: 'src/app/admin/admin.module#AdminModule',
    data: {
      title: 'admin 路由守卫 in'
    },
    canLoad: [AuthGuard] // 只有 canActivate 了之后才会立即加载 懒加载模块, 并且会阻止预加载
  },
  {
    path: 'crisis-center',
    loadChildren: 'src/app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: {
      preload: false,
      title: 'crisis-center'
    }
  },
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }