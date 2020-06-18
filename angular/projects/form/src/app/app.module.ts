/* tslint:disable max-line-length */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF, LocationStrategy, HashLocationStrategy } from '@angular/common';

import { AppComponent } from './app.component';
import { ExampleDef } from './components/sidebar/example.model';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CvaComponent } from './pages/control-value-accessor/cva.component';
import { PRadioComponent } from './components/p-radio/p-radio.component';

import { InputEventDemoComponent } from './pages/input-event/input-event.component';
import { TemplateDrivenFormsDemoComponent } from './pages/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsDemoComponent } from './pages/reactive-forms/reactive-forms.component';
import { DynamicallyFormsDemoModule } from './pages/dynamically-forms/dynamically-forms-demo.module';
import { DynamicallyFormsDemoComponent } from './pages/dynamically-forms/dynamically-forms-demo.component';
import { CustomCountComponent } from './pages/custom-count/custom-count.component';

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
