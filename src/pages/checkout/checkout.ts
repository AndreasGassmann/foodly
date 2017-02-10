import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {DetailPage} from "../detail/detail";

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

    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.items.push({
            count: 1,
            name: 'Finn',
            image: 'https://unsplash.it/200/?random',
            category: '',
            currency: 'CHF',
            price: 5
        });

        this.items.push({
            count: 1,
            name: 'Finn',
            image: 'https://unsplash.it/201/?random',
            category: '',
            currency: 'CHF',
            price: 3
        });
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
