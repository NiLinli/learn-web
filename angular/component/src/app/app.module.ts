import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { SidebarComponent } from './sidebar/sidebar.component';
import { StylingModule } from './styling/styling.module';
import { LifecycleModule } from './lifecycle/lifecycle.module';
import { ChangeDetectionModule } from './change-detection/change-detection.module';
import { ZoneModule } from './zone/zone.module';
import { ParentChildModule } from './parent-child/parent-child.module';
import { DomAbstractionsComponent } from './dom-abstractions/dom-abstractions.component';
import { DomAbstractionsModule } from './dom-abstractions/dom-abstractions.module';


const examples: ExampleDef[] = [
  { label: 'DOM 抽象', path: 'dom-abstactions' },
  { label: '组件样式', path: 'styling' },
  { label: '组件通讯setter', path: 'setter-input' },
  { label: '组件通讯onchange', path: 'onchange' },
  { label: '组件通讯 ViewChild', path: 'viewchild' },
  { label: '组件通讯 Service', path: 'service' },
  { label: 'all-hooks', path: 'all-hooks' },
  { label: 'DoCheck检查其他变化', path: 'differs' },
  { label: 'change-detection', path: 'change-detection' },
  { label: 'NgZone', path: 'zone-demo' },
  { label: '父子组件', path: 'parent-child' },
];
const routes: Routes = [
  { path: '', redirectTo: 'intro', pathMatch: 'full' },
  { path: 'dom-abstactions', component: DomAbstractionsComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DomAbstractionsModule,
    StylingModule,
    LifecycleModule,
    ChangeDetectionModule,
    ZoneModule,
    ParentChildModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

