import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouteReuseStrategy } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { ExampleDef } from './example.model';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IntroComponent } from './intro/intro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeroesModule } from './heroes/heroes.module';
import { LoginModule } from './login/login.module';
import { DialogService } from './providers/dialog.service';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TestParamsComponent } from './test-params/test-params.component';
import { TestParamsOptionalComponent } from './test-params-optional/test-params-optional.component';

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
    IntroComponent,
    PageNotFoundComponent,
    TestParamsOptionalComponent,
    TestParamsComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HeroesModule,     // 特性模块带路由, 需要考虑和 AppRoutingModule 的导入顺序, 路由匹配是从上到下的
    LoginModule,
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
export class AppModule {


}

