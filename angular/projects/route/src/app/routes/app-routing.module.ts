import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SelectivePreloadingStrategy } from '../providers/selective-preloading-strategy';
import { AuthGuard } from '../providers/auth-guard.service';

import { PageNotFoundComponent } from '../pages/page-not-found/page-not-found.component';
import { TestParamsComponent } from '../pages/test-params/test-params.component';
import { TestParamsOptionalComponent } from '../pages/test-params-optional/test-params-optional.component';


import { AdminRoutingModule } from '../routes/admin-routing.module';
import { HeroRoutingModule } from '../routes/heroes-routing.module';
import { LoginRoutingModule } from '../routes/login-routing.module';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';


const routes: Routes = [
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
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    HeroRoutingModule,
    LoginRoutingModule,
    CrisisCenterRoutingModule,
    RouterModule.forRoot(routes, {
      enableTracing: true,
      preloadingStrategy: SelectivePreloadingStrategy
    })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
