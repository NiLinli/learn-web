import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes, Router } from '@angular/router';
// url
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

// Our models
import { ExampleDef } from './example.model';

// App harness components
import { AppComponent } from './app.component';

// feature module
import { SidebarModule } from './sidebar/sidebar.module';
import { IntroComponent } from './intro/intro.component';
import { DirectlyInjectorComponent } from './directly-injector/directly-injector.component';
import { ComponentRangeComponent } from './component-range/component-range/component-range.component';
import { FeatureModuleDemoModule } from './feature-module-demo/feature-module-demo.module';
import { ProviderDemoComponent } from './provider-demo/provider-demo.component';
import { ProviderDemoUsevalueComponent } from './provider-demo-usevalue/provider-demo-usevalue.component';
import { ProviderDemoUsefactoryComponent } from './provider-demo-usefactory/provider-demo-usefactory.component';

// service
import { UserService } from './providers/user.service';
import { ComponentRangeDemoComponent } from './component-range/component-range-demo.component';

import { OldProviderDemoService } from './providers/old-provider-demo.service';
import { ProviderDemoService } from './providers/provider-demo.service';
import { ProviderDemoBackupService } from './providers/provider-demo-backup.service';
import { APP_CONFIG, HERO_DI_CONFIG, AppConfig } from './app.config';
import { ProviderDemoUsefactoryService } from './providers/provider-demo-usefactory.service';
import { HierarchicalDiComponent } from './hierarchical-di/hierarchical-di.component';
import { ProviderDemoService1Service } from './providers/provider-demo-service1.service';
import { HeroBiosComponent } from './hero-bios/hero-bios.component';

import { HeroBioComponent } from './hero-bios/hero-bio/hero-bio.component';
import { HeroContactComponent } from './hero-bios/hero-bio/hero-contact/hero-contact.component';
import { GrandpaComponent } from './grandpa/grandpa.component';
import { ParentComponent } from './grandpa/parent/parent.component';
import { ChildComponent } from './grandpa/parent/child/child.component';

const examples: ExampleDef[] = [
  { label: 'Intro', path: 'intro' },
  { label: '直接从inject.get()', path: 'directly-injector' },
  { label: 'component内注册', path: 'component-range' },
  { label: 'feature module内注册', path: 'feature-module-di' },
  { label: 'provider-useClass', path: 'provider-class' },
  { label: 'provider-useValue', path: 'provider-value' },
  { label: 'provider-useFactory', path: 'provider-factory' },
  { label: '限定服务查找方式', path: 'optional-host' },
  { label: '利用服务寻找父元素', path: 'finder-parent' }
];


const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'directly-injector', component: DirectlyInjectorComponent },
  { path: 'component-range', component: ComponentRangeDemoComponent },
  { path: 'provider-class', component: ProviderDemoComponent },
  { path: 'provider-value', component: ProviderDemoUsevalueComponent },
  { path: 'provider-factory', component: ProviderDemoUsefactoryComponent },
  { path: 'optional-host', component: HeroBiosComponent },
  { path: 'finder-parent', component: GrandpaComponent }
];

const someServiceFactory = (config: AppConfig) => {
  if (config.debug) {
    return new ProviderDemoUsefactoryService();
  } else {
    return {
      name: 'heheda'
    };
  }
};

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    DirectlyInjectorComponent,
    ComponentRangeComponent,
    ComponentRangeDemoComponent,
    ProviderDemoComponent,
    ProviderDemoUsevalueComponent,
    ProviderDemoUsefactoryComponent,
    HierarchicalDiComponent,
    HeroBiosComponent,
    HeroContactComponent,
    GrandpaComponent,
    ParentComponent,
    ChildComponent,
    HeroBioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    FeatureModuleDemoModule,
    RouterModule.forRoot(routes),
    SidebarModule
  ],
  providers: [
    UserService,
    // LoggerService,
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples },
    // demo
    // 别名
    ProviderDemoService,
    { provide: OldProviderDemoService, useExisting: ProviderDemoService },

    // 不同名字
    ProviderDemoBackupService,
    { provide: ProviderDemoService1Service, useClass: ProviderDemoBackupService },

    // value
    { provide: 'APP_URL', useValue: 'www.google.com' },
    // factory
    {
      provide: ProviderDemoUsefactoryService,
      useFactory: someServiceFactory,
      deps: [APP_CONFIG]
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

