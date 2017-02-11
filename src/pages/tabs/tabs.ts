import {Component, ViewChild} from '@angular/core';

import { HomePage } from '../home/home';
import { UmweltPage } from '../umwelt/umwelt';
import {NavParams, Tabs} from "ionic-angular";
import {HealthTabPage} from "../health-tab/health-tab";
import {LokalTabPage} from "../lokal-tab/lokal-tab";
import {SparfuchsTabPage} from "../sparfuchs-tab/sparfuchs-tab";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  item: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = SparfuchsTabPage;
  tab3Root: any = UmweltPage;
  tab4Root: any = LokalTabPage;
  tab5Root: any = HealthTabPage;

  @ViewChild('myTabs') tabRef: Tabs;

  constructor(private navParams: NavParams) {
    this.item = { item: this.navParams.get('item') };
  }

  ionViewDidEnter() {
    let index = 0;

    let type = parseInt(localStorage.getItem('clientType'));
/*
    if (type === 0) {
      index = 1; // sparfuchs
    } else if (type === 1) {
      index = 4; // health
    } else if (type === 2) {
      index = 3; // lokal
    } else {
      index = 2; // umwelt
    }
    */
    this.tabRef.select(index);
  }
}
