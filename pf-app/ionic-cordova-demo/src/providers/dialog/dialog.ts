import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';


@Injectable()
export class DialogProvider {

  constructor(
    private alertCtrl: AlertController
  ) { }

  ionicAlert(
    title: string,
    subTitle?: string,
    okText?: string
  ): Promise<any> {
    return new Promise((resolve) => {
      const alert = this.alertCtrl.create({
        title,
        subTitle,
        buttons: [
          {
            text: okText ? okText : 'OK',
            handler: () => {
              resolve();
            }
          }
        ]
      });
      alert.present();
    });
  }

  ionicConfirm() {

  }

  ionicPrompt() {

  }
}
