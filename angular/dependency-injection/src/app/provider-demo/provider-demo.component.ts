import { Component, OnInit } from '@angular/core';

import { OldProviderDemoService } from '../providers/old-provider-demo.service';
import { ProviderDemoService } from '../providers/provider-demo.service';
import { ProviderDemoService1Service } from '../providers/provider-demo-service1.service';
import { ProviderDemoBackupService } from '../providers/provider-demo-backup.service';

@Component({
  selector: 'app-provider-demo',
  templateUrl: './provider-demo.component.html',
  styleUrls: ['./provider-demo.component.css']
})
export class ProviderDemoComponent implements OnInit {

  constructor(
    // 别名
    private opds: OldProviderDemoService,
    private pds: ProviderDemoService,
    // 不同类
    private pd1s: ProviderDemoService1Service,
    private pdbus: ProviderDemoBackupService

  ) {
    console.log(opds === pds);

    console.log(pd1s === pdbus);


  }

  ngOnInit() {
  }

}
