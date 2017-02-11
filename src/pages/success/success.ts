import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
declare var money_rain;
/*
  Generated class for the Success page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-success',
  templateUrl: 'success.html'
})
export class SuccessPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad SuccessPage');

  }
  ionViewDidEnter() {
    console.log('ionVieqDidEnter');
    money_rain();
    console.log('ani');
  }

}
