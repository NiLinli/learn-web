import { Component, Inject } from '@angular/core';
import { ExampleDef } from './example.model';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    @Inject('ExampleDefs') public examples: ExampleDef[],
    private translate: TranslateService
  ) {

    translate.setDefaultLang('en');
    // translate.use('zh');

    console.log('1');
    this.translate.get('HELLO').subscribe(value => {
      console.log(value);
    });
    console.log('2');
    console.log(this.translate.currentLang);
    console.log('3');
  }
}
