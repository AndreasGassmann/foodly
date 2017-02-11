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
  cartItems: any = [];
  public normalPrice;
  public actionPrice;
  public priceDiff;


  constructor(public navCtrl: NavController, public navParams: NavParams, private _cartService: CartService) {
    this.cartItems = this._cartService.getCartItems();
    this.normalPrice = this.getTotalPrice().toFixed(2);
    this.actionPrice = this.getTotalActionPrice().toFixed(2);
    this.priceDiff = (this.normalPrice - this.actionPrice).toString().substr(0, (this.normalPrice - this.actionPrice).toString().indexOf('.') + 3);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CheckoutPage');
  }

  openSuccess() {
    this.navCtrl.push(SuccessPage);
  }

  /**
   * @returns {int}
   */
  public getTotalPrice() {
    let totalPrice = 0;
    this.cartItems.forEach(function (element) {
      if (element.quantity > 0) {
        totalPrice += parseFloat(element.price) * parseFloat(element.quantity)
      } else {
        totalPrice += parseFloat(element.price);
      }
    });
    return totalPrice;
  }

  /**
   * @returns {int}
   */
  public getTotalActionPrice() {
    let totalPrice = 0;
    this.cartItems.forEach(function (element) {
      if (element.quantity > 0) {
        totalPrice += parseFloat(element.actionPrice) * parseFloat(element.quantity)
      } else {
        totalPrice += parseFloat(element.actionPrice);
      }
    });
    return totalPrice;
  }
}
