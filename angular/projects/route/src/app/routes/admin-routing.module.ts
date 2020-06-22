import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AdminComponent } from '../pages/admin/admin.component';
import { AdminDashboardComponent } from '../pages/admin/admin-dashboard/admin-dashboard.component';
import { ManageCrisesComponent } from '../pages/admin/manage-crises/manage-crises.component';
import { ManageHeroesComponent } from '../pages/admin/manage-heroes/manage-heroes.component';

import { AuthGuard } from '../providers/auth-guard.service';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '', // 无组件路由, 给子路由分组, 一个无组件的路由能让守卫子路由变得更容易
        canActivateChild: [AuthGuard],
        children: [
          { path: 'crises', component: ManageCrisesComponent },
          { path: 'heroes', component: ManageHeroesComponent },
          { path: '', component: AdminDashboardComponent }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
