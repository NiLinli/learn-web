import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, TemplateRef, ViewRef, ViewContainerRef, Inject, Injector, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { HostViewDemoComponent } from './host-view-demo/host-view-demo.component';

@Component({
  selector: 'app-intro',
  templateUrl: './dom-abstractions.component.html',
  styleUrls: ['./dom-abstractions.component.scss']
})
export class DomAbstractionsComponent implements OnInit, AfterViewInit {

  @ViewChild('title') title: ElementRef;
  @ViewChild('davc', { read: ViewContainerRef }) davc: ViewContainerRef;    // 必须要指定 read, 因为无法和 ElementRef 区分开

  constructor(
    private hostElemnt: ElementRef,    // 依赖注入获取
    private injector: Injector,
    private r: ComponentFactoryResolver // 得到一个 component 的 factory
  ) {
    console.log((hostElemnt.nativeElement as HTMLElement).outerHTML);
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    console.log(this.title.nativeElement.textContent);    // 模版变量获取

    // 新建 hostview 的工厂
    // 1. HostViewDemoComponent 和 DomAbstractionsComponent 同一个模块
    // 2. if a module with a resolved component factory is imported
    const factory = this.r.resolveComponentFactory(HostViewDemoComponent);
    const componentRef: ComponentRef<HostViewDemoComponent> = factory.create(this.injector);
    const hostViewDemo_hostview = componentRef.hostView;

    this.davc.insert(hostViewDemo_hostview);
  }
}
