import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LoginComponent } from './login.component';
import { AuthService } from '../../providers/auth.service';

@NgModule({
  imports: [
    SharedModule
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
