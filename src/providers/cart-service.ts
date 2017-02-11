import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CartService {
  private cartItems;
  /**
   * @param http
   * @param navCtrl
   */
  constructor(public http: Http) {
    this.cartItems = this.getCartItems();
  }

  /**
   * @param productObject
   */
  public addProduct(productObject) {
    // TODO: I don't think this works as intended (product gets pushed for every item in the cart
    let self = this;
    if(this.cartItems.length > 0) {
      this.cartItems.forEach(function (item) {
        if(item.id == productObject.id) {
          self.increaseQuantity(productObject.id, 1);
        } else {
          productObject.quantity = 1;
          self.cartItems.push(productObject);
        }

      });
    } else {
      productObject.quantity = 1;
      this.cartItems.push(productObject);
    }
    this.updateCart();
  }

  /**
   * @param productId
   */
  public removeProduct(productId) {
    this.cartItems.forEach(function (element, index, cartItems) {
      if(element.id == productId) {
       cartItems.splice(cartItems.indexOf(index), 1);
      }
    });
    this.updateCart();
  }

  /**
   * @param productId
   * @param amount
   */
  public increaseQuantity(productId, amount) {
    let self = this;
    this.cartItems.forEach(function (element, index) {
      if(element.id == productId) {
        if (!element.quantity) {
          self.cartItems[index].quantity = 0;
        }
        self.cartItems[index].quantity = parseInt(element.quantity) + parseInt(amount);
      }
    });
    this.updateCart();
  }

  /**
   * @param productId
   * @param amount
   */
  public decraseQuanitity(productId, amount) {
    this.cartItems.forEach(function (element, index, cartItems) {
      if(element.id == productId) {
        cartItems[index].quantity = element.quantity - amount;
      }
    });
    this.updateCart();
  }

  /**
   * @returns {boolean | object}
   */
  public getCartItems() {
    return localStorage.getItem('actualCart') == null ? [] : JSON.parse(localStorage.getItem('actualCart'));
  }

  private updateCart() {
    console.log('cart content', this.cartItems);
    localStorage.setItem('actualCart', JSON.stringify(this.cartItems));
  }
}
