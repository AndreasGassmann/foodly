import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {CartService} from "../../providers/cart-service";
import {CheckoutPage} from "../checkout/checkout";
import {TabsPage} from "../tabs/tabs";

/*
  Generated class for the Cart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html'
})
export class CartPage {
  public cartItems;

  constructor(public navCtrl: NavController, public cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  /**
   * @returns {int}
   */
  public getTotalPrice()
  {
    let totalPrice = 0;
    this.cartItems.forEach(function (element) {
      if(element.quantity > 0) {
        totalPrice += parseInt(element.price) * parseInt(element.quantity)
      } else {
        totalPrice += parseInt(element.price);
      }
    });
    return totalPrice;
  }

  openDetail(item) {
    this.navCtrl.push(TabsPage, {
      item: item
    })
  }

  removeItem(item) {
    this.cartService.removeProduct(item.id);
    this.cartItems = this.cartService.getCartItems();
  }

  calculateTotalItems() {
    let count = 0;
    this.cartItems.forEach(i => {
      count += i.quantity;
    });
    return count;
  }

  getCurrency() {
    return 'CHF';
  }

  openCheckout() {
    this.navCtrl.push(CheckoutPage);
  }
}
