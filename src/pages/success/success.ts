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
  public cattype = 3;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.type = parseInt(localStorage.getItem('clientType'));

    //console.log(localStorage.getItem('clientType'));
    if (this.cattype === 0) {
      // sparfuchs
    } else if (this.cattype === 1) {
      // health
    } else if (this.cattype === 2) {
      // lokal
    } else {
      // umwelt
    }

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
