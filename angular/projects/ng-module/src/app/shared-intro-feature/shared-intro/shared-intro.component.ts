import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-shared-intro',
  templateUrl: './shared-intro.component.html',
  styleUrls: ['./shared-intro.component.scss']
})
export class SharedIntroComponent implements OnInit {

  name: string;
  nameValueObj: any;

  constructor(private translate: TranslateService) {
    this.name = 'nixixi';
    this.nameValueObj = {
      value: this.name
    };

    console.log('1');
    this.translate.get('HELLO').subscribe(value => console.log(value));
    console.log('2');
    console.log(this.translate.currentLang);
    console.log('3');
  }

  ngOnInit() {
  }

}
