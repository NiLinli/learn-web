import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {

  constructor(private readonly reflector: Reflector) { }

  // true 返回调用
  // false 忽略
  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {

    const roles = this.reflector.get<string[]>('roles', context.getHandler());

    const request = context.switchToHttp().getRequest();
    const user = request.user;    // 将用户信息挂到 request 上面是一种很常见的做法

    const hasRole = () => user.roles.some(role => roles.includes(role));

    return user && user.roles && hasRole();
  }

}