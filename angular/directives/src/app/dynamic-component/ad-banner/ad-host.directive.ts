import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[app-ad-host]'
})
export class AdHostDirective {

  constructor(
    public viewContainerRef: ViewContainerRef // 来获取对容器视图的访问权，这个容器就是那些动态加入的组件的宿主
  ) { }

}
