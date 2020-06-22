import { Injectable } from '@angular/core';
import {
  Router, Resolve, RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

import { Crisis, CrisisService } from './crisis.service';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis> {
  constructor(
    private cs: CrisisService,
    private router: Router
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis> {
    const id = route.paramMap.get('id');

    return this.cs.getCrisis(id).pipe(
      take(1),                // 这里返回的 Observable 一定是能够走向 completed!!!
      map(crisis => {
        if (crisis) {
          console.log('crisis 已经取到了');
          return crisis;
        } else {
          console.log('没有取到数据');
          this.router.navigate(['/crisis-center']);
          return null;
        }
      })
    );

    // 1. Router Event: ResolveStart 然后开始取数据
    // 2. crisis 已经取到了
    // 3. Router Event: ResolveEnd 取数据结束
  }
}

// Resolve 使用场景
// 1. 提前准备好数据
// 2. 避免模版上面出现 person?.name , 因为初始化的时候 person 为 undefined , 需要异步获取
