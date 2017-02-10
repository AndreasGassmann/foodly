import {Component, NgZone} from '@angular/core';
import {NavController, NavParams, Slides} from 'ionic-angular';
import {OnboardingPage} from "../onboarding/onboarding";
import {DetailPage} from "../detail/detail";
import {CheckoutPage} from "../checkout/checkout";
import { ViewChild } from '@angular/core';
import {CartPage} from "../cart/cart";
import {TabsPage} from "../tabs/tabs";

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
  private products = {
    '7640150491001': 'http://static.wixstatic.com/media/8ef132_db0a53c0917c4d118061767f65a37452.png_srz_355_316_85_22_0.50_1.20_0.00_png_srz',
    '7610097111072': 'http://limon.ch/wp-content/uploads/2015/09/rivella.jpg'
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, private zone: NgZone) {

    if (!localStorage.getItem("firstStart")) {
      this.navCtrl.push(OnboardingPage);
    }
    localStorage.setItem("firstStart", "no");

  }

  goToSlide() {
    this.slides.slideTo(2, 500);
  }

  ionViewDidLoad() {
    let self = this;

    if (MediaStreamTrack.getSources) {
      MediaStreamTrack.getSources(function (sources) {
        for (var i = 0; i < sources.length; i++) {
          if (sources[i].facing == 'environment' && sources[i].kind == 'video') {
            Quagga.init(
              {
                //frequency: 5, // allow a maximum of 5 scans per second
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
              });


            Quagga.onDetected(data => {
              self.zone.run(() => {
                self.lastId = data.codeResult.code;
              });
            });


            return;
          }
        }
      });
    } else {

      Quagga.init(
        {
          inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#live-view')    // Or '#yourElement' (optional)
          },
          locator: {patchSize: "medium", halfSample: true},
          debug: {
            drawBoundingBox: true,
            showFrequency: true,
            drawScanline: true,
            showPattern: true
          },
          numOfWorkers: 4,
          decoder: {"readers": [{"format": "ean_reader", "config": {}}]},
          locate: true
        }, function (err) {
          if (err) {
            console.log(err);
            return
          }
          Quagga.start();
        });


      Quagga.onDetected(data => {
        self.zone.run(() => {
          self.lastId = data.codeResult.code;
        });
      });

    }
  }

  openCart() {
    this.navCtrl.push(CartPage);
  }

  openDetail() {
    this.navCtrl.setRoot(TabsPage);
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
