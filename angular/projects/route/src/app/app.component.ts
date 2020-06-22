import { Component, Inject, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ExampleDef } from './sidebar/example.model';
import { HttpService } from './providers/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  constructor(
    private router: Router,
    private httpService: HttpService,
    private activatedRoute: ActivatedRoute,
    @Inject('ExampleDefs') public examples: ExampleDef[]) {

    httpService.urlOrign = window.location.origin;
    httpService.urlPathName = window.location.pathname;
    httpService.urlSearch = window.location.search;
    // const url = 'http://localhost:9001/#/test-params-optional;id=100000;foo=what%20the%20hell%20is%20foo%3F?name=nixixi&age=18';
    // const url = '?name=nixixi&age=18';
    // const urlTree = this.router.parseUrl(url);
    // console.log(urlTree.queryParams);

    // this.router.events.subscribe(value => {
    //   console.log(value);
    // });

    // 自定义 tiltle
    // this.router.events
    //   .pipe(
    //     filter((event) => event instanceof NavigationEnd),
    //     // map(() => this.router.routerState.root),
    //     map(() => this.activatedRoute),
    //     map((route) => {
    //       while (route.firstChild)
    //         route = route.firstChild;
    //       return route;
    //     }),
    //     filter((route) => route.outlet === 'primary'),
    //     mergeMap((route) => route.data),
    // ).subscribe((event) => document.title = event.title);


  }

  ngOnInit() {
    // console.log('AppComponent ngOnInit()');
    // const urlSearchParams: URLSearchParams = new URLSearchParams(window.location.search.substring(1));
    // console.log(urlSearchParams.get('locationId'));
    // console.log(urlSearchParams.paramsMap);
  }
}
