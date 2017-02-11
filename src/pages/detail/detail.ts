import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CartService} from "../../providers/cart-service";

/*
  Generated class for the Detail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html'
})
export class DetailPage {
  private item: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cartService: CartService) {
    this.item = this.navParams.get('item');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  addToCart(item) {
    this._cartService.addProduct(this.item);
  }

}
