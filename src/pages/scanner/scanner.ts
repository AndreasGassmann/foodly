import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare var cordova;

/*
  Generated class for the Scanner page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scanner',
  templateUrl: 'scanner.html'
})

export class ScannerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScannerPage');
  }

  openScanner(){

    cordova.plugins.barcodeScanner.scan(
      function (result) {
        alert("We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);
      },
      function (error) {
        alert("Scanning failed: " + error);
      },
      {
        preferFrontCamera : false, // iOS and Android
        showFlipCameraButton : false, // iOS and Android
        showTorchButton : false, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        prompt : "Scan a product", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats : "EAN_13", // default: all but PDF_417 and RSS_EXPANDED
        orientation : "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations : true, // iOS
        disableSuccessBeep: true // iOS
      }
    );

  }

}
