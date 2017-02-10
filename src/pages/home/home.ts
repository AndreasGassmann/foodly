import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ApiService } from "../../providers/api-service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public _apiService: ApiService, public navCtrl: NavController) {
    this._apiService.getDataForIncredient()
      .map(res => res.json())
      .subscribe(data => {
        console.log(data);
    })
  }

}
