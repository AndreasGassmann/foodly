import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { UmweltPage } from '../umwelt/umwelt';
import { MapPage } from '../map/map';
import { NavParams } from "ionic-angular";
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

  constructor(private navParams: NavParams) {
    this.item = { item: this.navParams.get('item') };
  }
}
