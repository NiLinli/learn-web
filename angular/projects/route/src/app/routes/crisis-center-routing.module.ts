import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterHomeComponent } from '../pages/crisis-center/crisis-center-home/crisis-center-home.component';
import { CrisisListComponent } from '../pages/crisis-center/crisis-list/crisis-list.component';
import { CrisisCenterComponent } from '../pages/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from '../pages/crisis-center/crisis-detail/crisis-detail.component';
import { CanDeactivateGuard } from '../providers/can-deactivate-guard.service';
import { CrisisDetailResolver } from '../pages/crisis-center/providers/crisis-detail-resolver.service';
import { resolverFunc } from '../pages/crisis-center/providers/crisis-detail-resolver.func';


const crisisCenterRoutes: Routes = [
  {
    path: '',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: '',
            component: CrisisCenterHomeComponent
          },
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard],
            data: {
              title: 'detail'
            },
            resolve: {
              // 等所有的取到了 ResolveEnd 才会通知
              crisis: CrisisDetailResolver,
              crisisFunc: 'resolverFunc'
            }
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    CrisisDetailResolver,
    { provide: 'resolverFunc', useValue: resolverFunc }
  ]
})
export class CrisisCenterRoutingModule { }
