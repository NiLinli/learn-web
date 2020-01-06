import { Component, OnInit, OnDestroy, Input, ViewChild, ComponentFactoryResolver } from '@angular/core';
import { AdHostDirective } from './ad-host.directive';
import { AdItem } from './ad-item';
import { AdComponent } from './ad/ad.component';

@Component({
  selector: 'app-ad-banner',
  templateUrl: './ad-banner.component.html',
  styleUrls: ['./ad-banner.component.scss']
})
export class AdBannerComponent implements OnInit, OnDestroy {

  @Input() ads: AdItem[];
  @ViewChild(AdHostDirective) adHost: AdHostDirective;
  private currentAdIndex = -1;
  private interval: any;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    this.loadComponent();
    this.getAds();
  }


  loadComponent() {
    this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
    const adItem: AdItem = this.ads[this.currentAdIndex];

    // componentFactoryResolver 工厂模式 -> (获得, 编译器已经生成 entryComponents 中)解析出一个具体的工厂
    // componentFactory -> 具体的工厂, 用来创建 component
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(adItem.component);

    const viewContainerRef = this.adHost.viewContainerRef;
    viewContainerRef.clear();

    // 在这个容器下面创建 component 实例
    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<AdComponent>componentRef.instance).data = adItem.data;
  }

  getAds() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }


  ngOnDestroy() {
    clearInterval(this.interval);
  }

}
