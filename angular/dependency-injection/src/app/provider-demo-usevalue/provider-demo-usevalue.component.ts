import { Component, OnInit, Inject } from '@angular/core';
import { APP_CONFIG, AppConfig } from '../app.config';

@Component({
  selector: 'app-provider-demo-usevalue',
  templateUrl: './provider-demo-usevalue.component.html',
  styleUrls: ['./provider-demo-usevalue.component.css']
})
export class ProviderDemoUsevalueComponent implements OnInit {

  constructor(
    @Inject('APP_URL') appUrl: string,
    @Inject(APP_CONFIG) config: AppConfig

  ) {
    console.log(appUrl);
    console.log(config);
  }

  ngOnInit() {
  }

}
