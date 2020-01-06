import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-mat-icon-demo',
  templateUrl: './mat-icon-demo.component.html',
  styleUrls: ['./mat-icon-demo.component.css']
})
export class MatIconDemoComponent implements OnInit {

  constructor(
    private iconRegistry: MatIconRegistry,
    private sanitizer: DomSanitizer
  ) {
    // 注册一个 svg icon
    iconRegistry.addSvgIcon(
      'thumbs-up', sanitizer.bypassSecurityTrustResourceUrl('/assets/img/thumbs-up.svg')
    );

    // 更改 setDefaultFontSetClass
    // iconRegistry.setDefaultFontSetClass('iconfont');
  }

  ngOnInit() {

    console.log(this.iconRegistry.getDefaultFontSetClass());    // material-icons
  }

}

// mat icon

