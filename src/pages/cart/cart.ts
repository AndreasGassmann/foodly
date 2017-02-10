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

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.cartService.addProduct({"id": 1, "quantity": 2});
    this.cartService.increaseQuantity(1, 2);// id | amount
    this.cartService.decraseQuanitity(1, 2);// id | amount
    this.cartService.removeProduct(1);
    //this.cartService.startCheckout();
    //this.cartService.showProductDetails()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

}
