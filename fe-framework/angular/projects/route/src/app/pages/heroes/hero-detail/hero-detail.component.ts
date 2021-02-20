import { Component, OnInit, HostBinding, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Hero, HeroService } from '../hero.service';

@Component({
  templateUrl: './hero-detail.component.html',
  styles: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit, OnDestroy {
  @HostBinding('style.display') display = 'block';
  // @HostBinding('style.position') position = 'absolute';

  hero$: Observable<Hero>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: HeroService
  ) { }

  ngOnInit() {

    // 组件不会被复用
    const id = this.route.snapshot.paramMap.get('id');
  
    this.hero$ = this.service.getHero(id);

  }

  gotoHeroes(hero: Hero) {
    const heroId = hero ? hero.id : 11;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/hero-muti', heroId]);
  }

  ngOnDestroy() {
    console.log('Hero detail destroy');
  }

}
