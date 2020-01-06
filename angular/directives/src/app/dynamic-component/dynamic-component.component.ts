import { Component, OnInit } from '@angular/core';
import { AdService } from './ad-banner/ad.service';
import { AdItem } from './ad-banner/ad-item';

@Component({
  selector: 'app-dynamic-component',
  templateUrl: './dynamic-component.component.html',
  styleUrls: ['./dynamic-component.component.scss'],
  providers: [AdService]
})
export class DynamicComponentComponent implements OnInit {

  ads: AdItem[];

  constructor(
    private adService: AdService
  ) { }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

}
