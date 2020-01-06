import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  gaming: string;

  selectedArr: string[];


  constructor(public navCtrl: NavController) {
    this.gaming = 'ps';
    this.selectedArr = [
      'NES',
      'NES2',
      'NES3',
      'NES4',
      'NES5',
      'NES6'
    ]
  }

  ionViewDidLoad() {
    console.log('Home ionViewDidLoad');
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('Home afterviewInit')
  }

}
