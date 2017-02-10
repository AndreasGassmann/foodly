import {Component, NgZone} from '@angular/core';
import {NavController, NavParams, Platform, Slides} from 'ionic-angular';
import {OnboardingPage} from "../onboarding/onboarding";
import {DetailPage} from "../detail/detail";
import {CheckoutPage} from "../checkout/checkout";
import { ViewChild } from '@angular/core';
declare var cordova;
declare var Quagga;
declare var MediaStreamTrack;

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

  private lastId = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private platform: Platform, private zone:NgZone) {

    if (!localStorage.getItem("firstStart")) {
      this.navCtrl.push(OnboardingPage);
    }
    localStorage.setItem("firstStart", "no");

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  ionViewDidLoad() {
    MediaStreamTrack.getSources(function (sources) {
      for (var i = 0; i < sources.length; i++) {
        if (sources[i].facing == 'environment' && sources[i].kind == 'video') {
          Quagga.init(
            {
              frequency: 2, // allow a maximum of 5 scans per second
              inputStream: {
                name: "Live",
                type: "LiveStream",
                constraints: {
                  deviceId: sources[i].id
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
              Quagga.start();

              let self = this;
              Quagga.onDetected(data => {
                self.lastId = data.codeResult.code;


              });
            });

          return;
        }
      }
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
