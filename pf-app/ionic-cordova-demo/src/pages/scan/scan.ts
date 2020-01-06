import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from "@ionic-native/qr-scanner";

/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-scan',
  templateUrl: 'scan.html',
})
export class ScanPage {

  light: boolean;         // 闪关灯开关
  frontCamera: boolean;   // 前置摄像头, 还是后置摄像头
  isShow: boolean;        // 

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private qrScanner: QRScanner
  ) {

    this.light = false;
    this.frontCamera = false;
    this.isShow = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScanPage');
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // 有扫描权限
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            alert(text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
            this.navCtrl.pop();
          });

          // show camera preview
          this.qrScanner.show();

          // wait for user to scan something, then the observable callback will be called
        } else if (status.denied) {
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
        }
      })
      .catch((e: any) => console.log('Error is', e));

  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
    //页面可见时才执行
    this.showCamera();
    this.isShow = true;//显示背景
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave')
    this.hideCamera();
  }

  /**
   * 闪光灯控制，默认关闭
   */
  toggleLight() {
    if (this.light) {
      this.qrScanner.disableLight();
    } else {
      this.qrScanner.enableLight();
    }
    this.light = !this.light;
  }

  /**
   * 前后摄像头互换
   */
  toggleCamera() {
    if (this.frontCamera) {
      this.qrScanner.useBackCamera();
    } else {
      this.qrScanner.useFrontCamera();
    }
    this.frontCamera = !this.frontCamera;
  }

  showCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.add('cameraView');
  }


  hideCamera() {
    (window.document.querySelector('ion-app') as HTMLElement).classList.remove('cameraView');
    this.qrScanner.hide();//需要关闭扫描，否则相机一直开着
    this.qrScanner.destroy();//关闭
  }

}
