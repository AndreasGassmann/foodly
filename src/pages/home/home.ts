import { Component } from '@angular/core';

import {NavController, NavParams, Platform} from 'ionic-angular';

declare let cordova: any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

}
