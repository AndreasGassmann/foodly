import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {NavController} from "ionic-angular";
import {DetailPage} from "../pages/detail/detail";
import {CheckoutPage} from "../pages/checkout/checkout";

@Injectable()
export class CartService {
  private cartItems;

  /**
   * @param http
   * @param navCtrl
   */
  constructor(public http: Http, public navCtrl: NavController) {
    this.cartItems = this.getCartItems();
  }

  /**
   * @param productObject
   */
  public addProduct(productObject) {
    this.cartItems.push(productObject);
    this.updateCart();
  }

  /**
   * @param productId
   */
  public showProductDetails(productId) {
    this.navCtrl.push(DetailPage, productId);
  }

  /**
   * @param productId
   */
  public removeProduct(productId) {
    this.cartItems.forEach(function (element, key) {
      if(element.id == productId) {
        delete this.cartItems[key];
      }
    });
    this.updateCart();
  }

  /**
   * @param productId
   * @param amount
   */
  public increaseQuantity(productId, amount) {
    this.cartItems.forEach(function (element, key) {
      if(element.id == productId) {
        this.cartItems[key].quantity = element.quantity + amount;
      }
    });
    this.updateCart();
  }

  /**
   * @param productId
   * @param amount
   */
  public decraseQuanitity(productId, amount) {
    this.cartItems.forEach(function (element, key) {
      if(element.id == productId) {
        this.cartItems[key].quantity = element.quantity - amount;
      }
    });
    this.updateCart();
  }


  public startCheckout() {
    this.navCtrl.push(CheckoutPage, this.cartItems);
  }

  /**
   * @returns {boolean | object}
   */
  public getCartItems() {
    return localStorage.getItem('actualCart') == null ? {} : JSON.parse(localStorage.getItem('actualCart'));
  }

  private updateCart() {
    localStorage.setItem('actualCart', JSON.stringify(this.cartItems));
  }
}
