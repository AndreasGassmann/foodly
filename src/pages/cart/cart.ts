import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CartService} from "../../providers/cart-service";
import {DetailPage} from "../detail/detail";
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
    this.cartService.addProduct({"id":1, "quantity":1});
    this.cartService.addProduct({"id":2, "quantity":1});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
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

  calculateTotalPrice() {
    let price = 0;
    this.cartItems.forEach(i => {
      price += i.quantity * i.price;
    });
    return price.toFixed(2);
  }

  calculateTotalItems() {
    let count = 0;
    this.cartItems.forEach(i => {
      count += i.quantity;
    });
    return count;
  }

  getPriceWithDecimal(price) {
    if (price) {
      return price.toFixed(2);
    } else {
      return 0;
    }
  }

  getCurrency() {
    return 'CHF';
  }

  openCheckout() {
    this.navCtrl.push(CheckoutPage);
  }
}
