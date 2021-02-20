import { Injectable } from '@angular/core';


@Injectable()
export class FeatureRangeService {

  title: string;

  constructor(

  ) {
    console.log('FeatureRangeService constructor');
    this.title = 'FeatureRangeService title';
  }

}
