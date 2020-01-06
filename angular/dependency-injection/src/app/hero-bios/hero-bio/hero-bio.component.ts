import { Component, OnInit, Input } from '@angular/core';
import { HeroCacheService } from './hero-cache.service';

@Component({
  selector: 'app-hero-bio',
  templateUrl: './hero-bio.component.html',
  styleUrls: ['./hero-bio.component.css'],
  providers: [HeroCacheService]
})
export class HeroBioComponent implements OnInit {

  @Input() heroId: number;

  constructor(private heroCache: HeroCacheService) { }

  ngOnInit() {
    this.heroCache.fetchCachedHero(this.heroId);
  }

  get hero() {
    return this.heroCache.hero;
  }

}
