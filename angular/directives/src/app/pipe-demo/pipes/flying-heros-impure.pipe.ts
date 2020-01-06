import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'flyingHerosImpure',
  pure: false
})

export class FlyingHerosImpurePipe implements PipeTransform {

  transform(allHeroes: any[], args?: any): any {

    console.log('impure pipe transform!!!');
    
    return allHeroes.filter(hero => hero.canFly);
  }
}
