import { Injectable } from '@angular/core';


import { AdItem } from './ad-item';
import { HeroProfileComponent } from './ad/hero-profile/hero-profile.component';
import { HeroJobAdComponent } from './ad/hero-job-ad/hero-job-ad.component';

@Injectable()
export class AdService {

  constructor() { }


  getAds(): any[] {
    return [
      new AdItem(HeroJobAdComponent, { headline: 'nixixi1', body: 'heheda1' }),
      new AdItem(HeroProfileComponent, { name: 'nixixi2', bio: 'heheda1' }),
      new AdItem(HeroJobAdComponent, { headline: 'nixixi3', body: 'heheda1' }),
      new AdItem(HeroJobAdComponent, { headline: 'nixixi4', body: 'heheda1' }),
      new AdItem(HeroProfileComponent, { name: 'nixixi5', bio: 'heheda1' }),
    ];
  }

}
