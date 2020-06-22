import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../pages/login/login.component';

const loginRoutes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: 'login' } }
];

@NgModule({
  imports: [
    RouterModule.forChild(loginRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    // AuthGuard,

  ]
})
export class LoginRoutingModule { }
