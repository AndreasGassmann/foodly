import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {ItemRepository} from "./item-repository";

@Injectable()
export class CartService {

  constructor(private _itemRepository: ItemRepository) {}

  /**
   * @param productObject
   */
  public addProduct(productObject) {
    let cartItems = this.getCartItems();
    let found = false;
    if(cartItems.length > 0) {
      cartItems.forEach(function (item) {
        if(parseInt(item.id) == parseInt(productObject.id)) {
          item.quantity = productObject.quantity + 1;
          found = true;
        } else if (found == false) {
          cartItems.push(productObject);
        }
      });
    } else {
      cartItems.push(productObject);
    }
    this.updateCart(cartItems);
  }

  /**
   * @param productId
   */
  public removeProduct(productId) {
    let cartItems = this.getCartItems();
    cartItems.forEach(function (element, index) {
      if(element.id == productId) {
       cartItems.splice(index, 1);
      }
    });
    this.updateCart(cartItems);
  }

  /**
   * @param productId
   * @param amount
   */
  public increaseQuantity(productId, amount) {
    let cartItems = this.getCartItems();
    cartItems.forEach(function (element, index) {
      if(element.id == productId) {
        cartItems[index].quantity = parseInt(element.quantity) + parseInt(amount);
      }
    });
    this.updateCart(cartItems);
  }

  /**
   * @param productId
   * @param amount
   */
  public decraseQuanitity(productId, amount) {
    let cartItems = this.getCartItems();
    cartItems.forEach(function (element, index) {
      if(element.id == productId) {
        cartItems[index].quantity = element.quantity - amount;
      }
    });
    this.updateCart(cartItems);
  }

  /**
   * @returns {boolean | object}
   */
  public getCartItems() {
    return localStorage.getItem('actualCart') == null ? [] : JSON.parse(localStorage.getItem('actualCart'));
  }

  private updateCart(cartItems) {
    localStorage.setItem('actualCart', JSON.stringify(cartItems));
  }

  getSimilarSortedByMoney(ean) {
    let similars = this._itemRepository.getSimilars(ean);

    similars.sort((a, b) => {
      if (a.price < b.price) {
        return -1;
      }
      if (a.price > b.price) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    return similars;
  }



}
