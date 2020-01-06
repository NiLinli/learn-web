import { Component, OnInit } from '@angular/core';
import { ProviderDemoUsefactoryService } from '../providers/provider-demo-usefactory.service';


@Component({
  selector: 'app-provider-demo-usefactory',
  templateUrl: './provider-demo-usefactory.component.html',
  styleUrls: ['./provider-demo-usefactory.component.css']
})
export class ProviderDemoUsefactoryComponent implements OnInit {

  constructor(
    private pdufService: ProviderDemoUsefactoryService
  ) {
    console.log(pdufService);
  }

  ngOnInit() {
  }

}
