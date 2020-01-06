import { Component, OnInit } from '@angular/core';
import { HttpService } from '../providers/http.service';
import { Router, NavigationExtras, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  constructor(
    private httpService: HttpService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // 出现在 ResolveEnd 之后, 开始初始化组件
    console.log('Intro constructor');

    // 可以访问 ActivatedRoute
    console.log('this.route = ', this.route.routeConfig);
  }

  ngOnInit() {
    console.log('Intro ngOnInit');

    this.route.url.subscribe(url => {
      console.log(url);   // UrlSegment
    });

    // 可以访问 ActivatedRoute
    console.log('this.route.routeConfig = ', this.route.routeConfig);   // 路由配置
    console.log('this.route.outlet = ', this.route.outlet);             // 路由出口名 不设置为 'primary'

    console.log('this.route.component = ', typeof this.route.component);  // function  组件的构造函数
    // console.log('this.route.routeConfig.component = ', typeof this.route.routeConfig.component);  // function
    // console.log('this.route.routeConfig.component === this.route.component ? ',
    // this.route.routeConfig.component === this.route.component);  // true

    console.log('this.route.root = ', this.route.root);
    console.log('this.route === this.route? ', this.route === this.router.routerState.root);  // true
    // console.log('this.route === this.router.routerState?', this.route === this.router.routerState);
  }


  onOptionalParamsClick(): void {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        name: 'nixixi',
        age: 18
      }
    };
    this.router.navigate(['test-params-optional', {
      id: '100000',
      foo: 'what the hell is foo?'
    }], navigationExtras);
  }

}

