import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';
// url
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { OverlayModule } from '@angular/cdk/overlay';

// Our models
import { ExampleDef } from './example.model';

// App harness components
import { AppComponent } from './app.component';


import { APP_CONFIG, APP_CONFIG_INFO } from './app.config';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

// feature module
import { SidebarModule } from './sidebar/sidebar.module';
import { IntroComponent } from './intro/intro.component';
import { DomainFeatureModule } from './domain-feature/domain-feature.module';
import { RoutedFeatureModule } from './routed-feature/routed-feature.module';
import { SharedIntroFeatureModule } from './shared-intro-feature/shared-intro-feature.module';

// ng zorro

import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { AntDemoComponent } from './ant-demo/ant-demo.component';
import { SharedModule } from './shared/shared.module';
import { TipAComponent } from './tip-a/tip-a.component';



registerLocaleData(en);



const examples: ExampleDef[] = [
  { label: 'Intro', path: 'intro' },
  { label: '带路由的特性模块', path: 'routed-feature' },
  { label: 'shared module Into', path: 'shared-intro' },
  { label: 'ant demo', path: 'ant-demo' },
];

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'ant-demo', component: AntDemoComponent },
];


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    TipAComponent,
    AntDemoComponent
  ],
  entryComponents: [
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    OverlayModule,
    RoutedFeatureModule,
    RouterModule.forRoot(routes),
    SidebarModule,
    DomainFeatureModule,
    SharedIntroFeatureModule,
    HttpClientModule,
    TranslateModule.forRoot(
      {
        loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
        }
      }
    ),
    NgZorroAntdModule.forRoot()
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples },
    { provide: APP_CONFIG, useValue: APP_CONFIG_INFO },
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

