import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHeros'
})
export class FlyingHerosPipe implements PipeTransform {

  transform(allHeroes: any[], args?: any): any {
    return allHeroes.filter(hero => hero.canFly);
  }

}
