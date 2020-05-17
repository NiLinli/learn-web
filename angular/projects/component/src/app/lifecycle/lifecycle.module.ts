import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { OnchangeComponent } from './onchange/onchange.component';
import { OnChangesItemComponent } from './onchange/on-changes-item/on-changes-item.component';
import { SetterInputComponent } from './setter-input/setter-input.component';
import { SetterInputSubComponent } from './setter-input/setter-input-sub/setter-input-sub.component';
import { AllHooksComponent } from './all-hooks/all-hooks/all-hooks.component';
import { AllHooksDemoComponent } from './all-hooks/all-hooks-demo.component';
import { CommentsListComponent } from './differs/comments-list.component';
import { CommentComponent } from './differs/comment/comment.component';
import { ViewchildDemoComponent } from './viewchild-demo/viewchild-demo.component';
import { ChildVvvComponent } from './viewchild-demo/child-vvv/child-vvv.component';
import { ServiceCommunicationDemoComponent } from './service-communication-demo/service-communication-demo.component';
import { ChildComponent } from './service-communication-demo/child/child.component';
import { GrandchildComponent } from './service-communication-demo/child/grandchild/grandchild.component';
import { SetterInputSub2Component } from './setter-input/setter-input-sub2/setter-input-sub2.component';


const lifecycleRoutes: Routes = [
  { path: 'setter-input', component: SetterInputComponent },
  { path: 'onchange', component: OnchangeComponent },
  { path: 'viewchild', component: ViewchildDemoComponent },
  { path: 'service', component: ServiceCommunicationDemoComponent },
  { path: 'all-hooks', component: AllHooksDemoComponent },
  { path: 'differs', component: CommentsListComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(lifecycleRoutes)
  ],
  declarations: [
    OnchangeComponent,
    OnChangesItemComponent,
    SetterInputComponent,
    SetterInputSubComponent,
    AllHooksComponent,
    AllHooksDemoComponent,
    CommentsListComponent,
    CommentComponent,
    ViewchildDemoComponent,
    ChildVvvComponent,
    ServiceCommunicationDemoComponent,
    ChildComponent,
    GrandchildComponent,
    SetterInputSub2Component
  ]
})
export class LifecycleModule { }
