import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { UmweltPage } from '../pages/umwelt/umwelt';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HealthTabPage } from '../pages/health-tab/health-tab';
import { LokalTabPage } from '../pages/lokal-tab/lokal-tab';
import { SparfuchsTabPage } from '../pages/sparfuchs-tab/sparfuchs-tab';

import {MapPage} from "../pages/map/map";
import {ItemRepository} from '../providers/item-repository';
import {CheckoutPage} from "../pages/checkout/checkout";
import {DetailPage} from "../pages/detail/detail";
import {CameraPage} from "../pages/camera/camera";
import {OnboardingPage} from "../pages/onboarding/onboarding";
import {SlidesPage} from "../pages/slides/slides";
import {CartPage} from "../pages/cart/cart";
import {CartService} from "../providers/cart-service";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    UmweltPage,
    HomePage,
    MapPage,
    TabsPage,
    OnboardingPage,
    CameraPage,
    DetailPage,
    CheckoutPage,
    SlidesPage,
    CartPage,
    HealthTabPage,
    LokalTabPage,
    SparfuchsTabPage
  ],
  imports: [
    IonicModule.forRoot(MyApp, { mode:'md', tabsPlacement: 'top' })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    UmweltPage,
    HomePage,
    MapPage,
    TabsPage,
    OnboardingPage,
    CameraPage,
    DetailPage,
    CheckoutPage,
    SlidesPage,
    CartPage,
    HealthTabPage,
    LokalTabPage,
    SparfuchsTabPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    CartService,
    ItemRepository
  ]
})
export class AppModule {}
