import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartService } from "../../providers/cart-service";

/*
  Generated class for the HealthTab page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-health-tab',
  templateUrl: 'health-tab.html'
})
export class HealthTabPage {
  item: any;
  matches: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _cartService: CartService) {
    this.item = this.navParams.get('item');
    this.matches = this._cartService.getSimilarSortedByMoney(this.item.id);
  }

  public getFirst() {
    return this.matches[0];
  }

  public getSecond() {
    return this.matches[1];
  }

  public getThird() {
    return this.matches[2];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthTabPage');
  }

  back() {
    this.navCtrl.parent.parent.pop();
  }

  addToCart() {
    this._cartService.addProduct(this.item);
    this.back();
  }
}
