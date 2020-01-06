import {
  Component,
  Inject
} from '@angular/core';
import { Router } from '@angular/router';
import { ExampleDef } from './example.model';
import { FeatureRangeService } from './feature-module-demo/feature-range.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    @Inject('ExampleDefs') public examples: ExampleDef[],
    // private featureRangeService: FeatureRangeService
  ) {
    // console.log(featureRangeService.title);
  }
}
