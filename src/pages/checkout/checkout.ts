import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {CartService} from "../../providers/cart-service";
import {SuccessPage} from "../success/success";

/*
 Generated class for the Checkout page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
    selector: 'page-checkout',
    templateUrl: 'checkout.html'
})
export class CheckoutPage {
    items: any = [];

    constructor(public navCtrl: NavController, public navParams: NavParams, private _cartService: CartService) {
        this.items = this._cartService.getCartItems();
    }

    ionViewDidLoad() {
        console.log('ionViewDidLoad CheckoutPage');
    }

    openSuccess() {
      this.navCtrl.push(SuccessPage);
    }
}
