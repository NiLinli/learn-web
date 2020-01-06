import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { AttrDirectiveDemoComponent } from './attr-directive-demo/attr-directive-demo.component';
import { MyHighlightDirective } from './attr-directive-demo/my-highlight.directive';

import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { MessageComponent } from './content-projection/message.component';
import { ContentTabComponent } from './content-projection/content-tab/content-tab.component';
import { ContentTabsestComponent } from './content-projection/content-tabsest/content-tabsest.component';
import { StructuralDirectivesModule } from './structural-directives/structural-directives.module';
import { DynamicComponentModule } from './dynamic-component/dynamic-component.module';
import { PipeDemoModule } from './pipe-demo/pipe-demo.module';



const examples: ExampleDef[] = [
  { label: 'Intro', path: 'intro' },
  { label: 'Attribute指令', path: 'attribute' },
  { label: '结构指令', path: 'structural-demo' },
  { label: '内容投影 Content Projection', path: 'content-projection' },
  { label: '动态组件 Dynamic Component', path: 'dynamic-component' },
  { label: '管道 Pipe', path: 'pipe' }
];

const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'intro', component: IntroComponent },
  { path: 'attribute', component: AttrDirectiveDemoComponent },
  { path: 'content-projection', component: ContentProjectionComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MyHighlightDirective,
    AttrDirectiveDemoComponent,
    MessageComponent,
    ContentTabComponent,
    ContentTabsestComponent,
    ContentProjectionComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    StructuralDirectivesModule,
    DynamicComponentModule,
    PipeDemoModule,
    RouterModule.forRoot(routes),
    SidebarModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

