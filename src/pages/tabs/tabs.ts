import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { UmweltPage } from '../umwelt/umwelt';
import { MapPage } from '../map/map';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab3Root: any = UmweltPage;
  tab4Root: any = UmweltPage;
  tab5Root: any = MapPage;

  constructor() {

  }
}
