/* tslint:disable max-line-length */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CvaComponent } from './control-value-accessor/cva.component';
import { PRadioComponent } from './control-value-accessor/p-radio/p-radio.component';
import { ExampleDef } from './example.model';

import { InputEventDemoComponent } from './input-event-demo/input-event-demo.component';
import { TemplateDrivenFormsDemoComponent } from './template-driven-forms-demo/template-driven-forms-demo.component';
import { ReactiveFormsDemoComponent } from './reactive-forms-demo/reactive-forms-demo.component';
import { DynamicallyFormsDemoModule } from './dynamically-forms-demo/dynamically-forms-demo.module';
import { DynamicallyFormsDemoComponent } from './dynamically-forms-demo/dynamically-forms-demo.component';
import { CustomCountComponent } from './custom-count/custom-count.component';

/*
 * Here's the master list of our examples for this chapter.
 */
export const examples: ExampleDef[] = [
  { label: '用户输入相应事件', path: 'input-event-demo' },
  { label: '模版驱动表单', path: 'template-driven-forms-demo' },
  { label: '响应式表单', path: 'reactive-forms-demo' },
  { label: '动态创建表单', path: 'dynamic-forms-demo' },
];

const routes: Routes = [
  { path: '', redirectTo: 'input-event-demo', pathMatch: 'full' },
  { path: 'input-event-demo', component: InputEventDemoComponent },
  { path: 'template-driven-forms-demo', component: TemplateDrivenFormsDemoComponent },
  { path: 'reactive-forms-demo', component: ReactiveFormsDemoComponent },
  { path: 'dynamic-forms-demo', component: DynamicallyFormsDemoComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PRadioComponent,
    CvaComponent,
    InputEventDemoComponent,
    TemplateDrivenFormsDemoComponent,
    CustomCountComponent,
    ReactiveFormsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    DynamicallyFormsDemoModule,
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
