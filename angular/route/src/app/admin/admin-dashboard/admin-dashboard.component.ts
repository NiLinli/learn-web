import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



// import { SelectivePreloadingStrategy } from '../providers/selective-preloading-strategy';


@Component({
  templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit {
  sessionId: Observable<string>;
  token: Observable<string>;
  modules: string[];

  constructor(
    private route: ActivatedRoute,
    // private preloadStrategy: SelectivePreloadingStrategy
  ) {
    // this.modules = preloadStrategy.preloadedModules;
  }

  ngOnInit() {
    // Capture the session ID if available
    this.sessionId = this.route
      .queryParamMap
      .pipe(map(params => params.get('session_id') || 'None'));


    console.log(this.route.snapshot.paramMap.get('name'));
    console.log(this.route.snapshot.queryParamMap.get('session_id'));


    // Capture the fragment if available
    this.token = this.route
      .fragment
      .pipe(
        map(fragment => fragment || 'None')
      );

  }
}
