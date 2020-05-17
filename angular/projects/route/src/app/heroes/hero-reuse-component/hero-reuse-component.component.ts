import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap, map } from 'rxjs/operators';

@Component({
  selector: 'app-hero-reuse-component',
  templateUrl: './hero-reuse-component.component.html',
  styleUrls: ['./hero-reuse-component.component.scss']
})
export class HeroReuseComponentComponent implements OnInit {

  id: string;
  constructor(
    private route: ActivatedRoute
  ) {
    this.route.paramMap.pipe(
      map((params)=> params.get('id'))
    ).subscribe(
      id => this.id = id
    );
  }

  ngOnInit() {
  }

}
