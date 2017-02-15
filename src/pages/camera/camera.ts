import {Component, NgZone} from '@angular/core';
import {NavController, NavParams, Slides, ToastController, Platform} from 'ionic-angular';
import {OnboardingPage} from "../onboarding/onboarding";
import {CheckoutPage} from "../checkout/checkout";
import {ViewChild} from '@angular/core';
import {CartPage} from "../cart/cart";
import {TabsPage} from "../tabs/tabs";
import {ItemRepository} from "../../providers/item-repository";
import {CartService} from "../../providers/cart-service";

declare let cordova;
declare let Quagga;
declare let MediaStreamTrack;

@Component({
  selector: 'page-camera',
  templateUrl: 'camera.html'
})
export class CameraPage {
  @ViewChild(Slides) slides: Slides;

  private lastId = 0;
  public item = null;
  public similars = [];

  constructor(public toastController: ToastController, public navCtrl: NavController, public navParams: NavParams, private zone: NgZone, private _itemRepository: ItemRepository, private cartSerivce: CartService, public toastCtrl: ToastController, private platform: Platform) {
    if (!localStorage.getItem("firstStart")) {
      this.navCtrl.push(OnboardingPage);
      if (this.platform.is('android')) {
        this.openScanner();
      }

    }
    localStorage.setItem("firstStart", "no");
  }

  ionViewDidEnter() {
    //this.initCamera();
    this.lastId = 7617400033557;
    this.item = this._itemRepository.getItemByEan(7617400033557);

  }


  presentToast(text) {
    let toast = this.toastCtrl.create({
      message: text,
      duration: 1000,
      position: 'top'
    });

    toast.present();
  }

  initCamera() {
    let self = this;

    if (MediaStreamTrack.getSources) {
      MediaStreamTrack.getSources(function (sources) {
        for (let i = 0; i < sources.length; i++) {
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
                  self.presentToast('Product not in database.');
                  return
                }
                Quagga.start();
                console.log('Scanner started');
              });


            Quagga.onDetected(data => {
              self.zone.run(() => {
                self.lastId = data.codeResult.code;
                self.item = self._itemRepository.getItemByEan(data.codeResult.code);

                if(self.item == null) {
                  self.presentToast('Konnte nicht gelesen werden. Bitte nochmals probieren');
                  return;
                }

                self.similars = [];

                for (var i = 0; i < self.item.similar.length; i++) {
                  var similar = self._itemRepository.getItemByEan(self.item.similar[i]);
                  if (similar != null) {
                    self.similars.push(similar);
                  }
                }

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
          locator: {
            halfSample: false,
            patchSize: "large", // x-small, small, medium, large, x-large
            debug: {
              showCanvas: true,
              showPatches: true,
              showFoundPatches: true,
              showSkeleton: true,
              showLabels: true,
              showPatchLabels: true,
              showRemainingPatchLabels: true,
              boxFromPatches: {
                showTransformed: true,
                showTransformedBox: true,
                showBB: true
              }
            }
          },
          numOfWorkers: 4,
          decoder: {"readers": [{"format": "ean_reader", "config": {}}]},
          locate: false
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
          self.item = self._itemRepository.getItemByEan(data.codeResult.code);

          if(self.item == null) {
            self.presentToast('Konnte nicht gelesen werden. Bitte nochmals probieren');
            return;
          }

          self.similars = [];

          for (var i = 0; i < self.item.similar.length; i++) {
            var similar = self._itemRepository.getItemByEan(self.item.similar[i]);
            if (similar != null) {
              self.similars.push(similar);
            }
          }

        });
      });

    }
  }


  ionViewDidLoad() {
    this.initCamera();
  }

  addProduct(item) {
    this.cartSerivce.addProduct(item);

    this.lastId = 0;
    this.item = null;

    let toast = this.toastCtrl.create({
      message: 'Produkt hinzugefügt',
      duration: 3000
    });
    toast.present();
  }

  openCart() {
    this.navCtrl.push(CartPage);
  }

  openDetail() {
    if (this.item) {
      console.log('open detail', this.item);
      this.navCtrl.push(TabsPage, {
        item: this.item
      });
    }
  }

  openDetailAlternative(item) {
    this.navCtrl.push(TabsPage, {
      item: item
    });

  }

  openCheckout() {
    this.navCtrl.push(CheckoutPage);
  }


  openScanner() {
    cordova.plugins.barcodeScanner.scan(
      function (result) {
        /*
        alert("We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);
          */
      },
      function (error) {
        //alert("Scanning failed: " + error);
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

  openOnboarding() {
    this.navCtrl.push(OnboardingPage);
  }

  resetCamera() {
    this.lastId = 0;
  }
}
