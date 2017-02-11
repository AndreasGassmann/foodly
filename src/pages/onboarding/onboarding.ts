import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CameraPage} from "../camera/camera";

/*
  Generated class for the Onboarding page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-onboarding',
  templateUrl: 'onboarding.html'
})
export class OnboardingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad OnboardingPage');
  }

  public setClientType(type) {
    localStorage.setItem('clientType', type);
    this.navCtrl.setRoot(CameraPage);
  }

}
