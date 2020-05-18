import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-pipes-change-detection',
  templateUrl: './pipes-change-detection.component.html',
  styleUrls: ['./pipes-change-detection.component.scss']
})
export class PipesChangeDetectionComponent implements OnInit {

  @ViewChild('box') box: ElementRef;

  heroes: any[];
  canFly = true;

  constructor() {
    this.heroes = [];
    this.reset();
  }

  addHero(name: string) {
    name = name.trim();
    if (!name) { return; }
    const hero = {
      name, canFly: this.canFly
    };
    console.log(hero);
    // 改变 mutable 指向
    // this.heroes = this.heroes.concat([]);
    this.heroes.push(hero);
    this.box.nativeElement.value = '';
  }

  reset() {
    this.heroes = [
      { name: 'Windstorm', canFly: true },
      { name: 'Bombasto', canFly: false },
      { name: 'Magneto', canFly: false },
      { name: 'Tornado', canFly: true }
    ];
  }

  ngOnInit() {

  }

}
