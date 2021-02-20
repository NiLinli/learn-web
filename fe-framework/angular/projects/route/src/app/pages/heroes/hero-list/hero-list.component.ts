// TODO SOMEDAY: Feature Componetized like CrisisCenter
import { Observable } from 'rxjs';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Hero, HeroService } from '../hero.service';
import { switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './hero-list.component.html'
})
export class HeroListComponent implements OnInit, OnDestroy {
  heroes$: Observable<Hero[]>;

  selectedId: number;

  constructor(
    private service: HeroService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.heroes$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        this.selectedId = +params.get('id');
        return this.service.getHeroes();
      })
    );

    console.log(this.route.snapshot.paramMap.get('id'));
  }


  ngOnDestroy() {
    console.log('Hero list destroy');
  }
}


// 1. 路由模块引用了 component , 但是在相应的 module中 别忘了添加到 declarations 数组
// 2. 普通非懒加载的特性模块， 需要导入到 app.module 中 , 告诉程序立即加载
// 3. 这里的 forChild 是相对于 路由 上下文 为 /
