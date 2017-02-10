import {Component} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {OnboardingPage} from "../onboarding/onboarding";
import {DetailPage} from "../detail/detail";
import {CheckoutPage} from "../checkout/checkout";
import { ViewChild } from '@angular/core';
declare var cordova;
declare var Quagga;

/*
 Generated class for the Camera page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    if (!localStorage.getItem("firstStart")) {
      this.navCtrl.push(OnboardingPage);
    }
    localStorage.setItem("firstStart", "no");

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  ionViewDidLoad() {

    navigator.mediaDevices.enumerateDevices()
      .then(function(devices) {
        devices.forEach(function(device) {
          console.log(device.kind + ": " + device.label +
            " id = " + device.deviceId);
        });
      })
      .catch(function(err) {
        console.log(err.name + ": " + err.message);
      });


    navigator.mediaDevices.enumerateDevices()
      .then(devices => devices.filter(device => device.kind === 'videoinput' && device.label.indexOf('back') !== -1))
      .then(backFacingDevices =>{

        // console.log(backFacingDevices.map(device => device.deviceId)

        Quagga.init(
          {
            inputStream: {
              name: "Live",
              type: "LiveStream",
              constraints: {
                width: {min: 768},
                height: {min: 480},
                aspectRatio: {min: 1, max: 100},
                facingMode: "environment",
              },
              target: document.querySelector('#live-view')    // Or '#yourElement' (optional)
            },
            locator: {patchSize: "medium", halfSample: true},
            numOfWorkers: 4,
            decoder: {"readers": [{"format": "ean_reader", "config": {}}]},
            locate: true

          }, function (err) {
            if (err) {
              console.log(err);
              return
            }
            console.log("Initialization finished. Ready to start");
            Quagga.start();

            Quagga.onDetected(data => {
              console.log(data.codeResult.code);
            });
          });


      });




  }

  openDetail() {
    this.navCtrl.push(DetailPage);
  }

  openCheckout() {
    this.navCtrl.push(CheckoutPage);
  }


  openScanner() {

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
        preferFrontCamera: false, // iOS and Android
        showFlipCameraButton: false, // iOS and Android
        showTorchButton: false, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        prompt: "Scan a product", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats: "EAN_13", // default: all but PDF_417 and RSS_EXPANDED
        orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations: true, // iOS
        disableSuccessBeep: true // iOS
      }
    );

  }

}
