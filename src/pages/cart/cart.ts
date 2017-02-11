import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CartService} from "../../providers/cart-service";

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

  constructor(public cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
