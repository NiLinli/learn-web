import { Component, OnInit } from '@angular/core';
import { FeatureRangeService } from '../feature-range.service';

@Component({
  selector: 'app-feature-range',
  templateUrl: './feature-range.component.html',
  styleUrls: ['./feature-range.component.scss']
})
export class FeatureRangeComponent implements OnInit {

  constructor(
    private featureRangeService: FeatureRangeService
  ) { }

  ngOnInit() {
  }

}
