import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { DynamicallyFormsComponent } from './dynamically-forms.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question/dynamic-form-question.component';
import { DynamicFormWrapperComponent } from './dynamic-form-wrapper/dynamic-form-wrapper.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [
    DynamicFormQuestionComponent,
    DynamicFormWrapperComponent,
    DynamicallyFormsComponent,
  ],
  exports: [
    DynamicallyFormsComponent
  ]
})
export class DynamicallyFormsModule { }
