import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from '../../routes/login-routing.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../../providers/auth.service';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  declarations: [
    LoginComponent
  ],
  providers: [
    // 声明在这里，也会使用 root 注入器
    AuthService
  ]
})
export class LoginModule { }
