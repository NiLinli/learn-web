/* tslint:disable max-line-length */
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PRadioComponent } from './components/p-radio/p-radio.component';

export const examples: ExampleDef[] = [
  { label: '用户输入相应事件', path: 'input-event' },
  { label: '模版驱动表单', path: 'template-driven-forms' },
  { label: '响应式表单', path: 'reactive-forms' },
  { label: '动态创建表单', path: 'dynamic-forms' },
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    PRadioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: 'ExampleDefs', useValue: examples }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
