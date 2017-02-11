import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { UmweltPage } from '../umwelt/umwelt';
import { MapPage } from '../map/map';
import { NavParams } from "ionic-angular";

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  item: any;
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = AboutPage;
  tab3Root: any = UmweltPage;
  tab4Root: any = UmweltPage;
  tab5Root: any = MapPage;

  constructor(private navParams: NavParams) {
    this.item = { item: this.navParams.get('item') };
  }
}
