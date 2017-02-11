import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DetailPage} from "../detail/detail";
import {CartService} from "../../providers/cart-service";

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

    openDetail(item) {
        this.navCtrl.push(DetailPage, {
            item: item
        })
    }

    removeItem(item) {
      this._cartService.removeProduct(item.id);
      this.items = this._cartService.getCartItems();
    }

    calculateTotalPrice() {
        let price = 0;
        this.items.forEach(i => {
            price += i.count * i.price;
        });
        return price;
    }

    calculateTotalItems() {
        let count = 0;
        this.items.forEach(i => {
            count += i.count;
        });
        return count;
    }

    getCurrency() {
        return 'CHF';
    }
}
