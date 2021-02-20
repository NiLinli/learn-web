import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { InputEventComponent } from './pages/input-event/input-event.component';
import { TemplateDrivenFormsComponent } from './pages/template-driven-forms/template-driven-forms.component';
import { ReactiveFormsComponent } from './pages/reactive-forms/reactive-forms.component';
import { DynamicallyFormsModule } from './pages/dynamically-forms/dynamically-forms.module';
import { DynamicallyFormsComponent } from './pages/dynamically-forms/dynamically-forms.component';
import { CvaComponent } from './pages/control-value-accessor/cva.component';

const routes: Routes = [
  { path: '', redirectTo: 'input-event', pathMatch: 'full' },
  { path: 'input-event', component: InputEventComponent },
  { path: 'cva', component: CvaComponent },
  { path: 'template-driven-forms', component: TemplateDrivenFormsComponent },
  { path: 'reactive-forms', component: ReactiveFormsComponent },
  { path: 'dynamic-forms', component: DynamicallyFormsComponent },
];

@NgModule({
  imports: [
    CommonModule,
    DynamicallyFormsModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
