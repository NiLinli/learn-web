import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicallyFormsDemoComponent } from './dynamically-forms-demo.component';
import { DynamicFormQuestionComponent } from './dynamic-form/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    DynamicFormQuestionComponent,
    DynamicFormComponent,
    DynamicallyFormsDemoComponent,
  ],
  exports: [
    DynamicallyFormsDemoComponent
  ]
})
export class DynamicallyFormsDemoModule { }
