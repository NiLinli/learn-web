import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ExampleDef } from './sidebar/example.model';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { DialogService } from './providers/dialog.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminModule } from './pages/admin/admin.module';
import { CrisisCenterModule } from './pages/crisis-center/crisis-center.module';
import { HeroesModule } from './pages/heroes/heroes.module';
import { LoginModule } from './pages/login/login.module';

const examples: ExampleDef[] = [
  { label: '默认路由', path: 'intro' },
  { label: '测试 params (required)', path: 'test-params/100' },
  { label: '测试 params (optional)', path: 'test-params-optional' },
  { label: '带路由的特性模块 (heroes)', path: 'hero-muti/11' },
  { label: 'Admin 路由守卫 in', path: 'admin' },
  { label: 'Login', path: 'login' },
  { label: 'Resolver + 路由守卫 out (crisis-center)', path: 'crisis-center' },
  { label: 'reuse', path: 'reuse-demo' },
  { label: '** 不存在的路由', path: 'aaaaaaaaaaaaaaaaaaaaaaa' },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // 特性模块必须导入到主模块中
    AdminModule,
    CrisisCenterModule,
    HeroesModule,
    LoginModule,
    // 路由模块
    AppRoutingModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples },
    DialogService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

