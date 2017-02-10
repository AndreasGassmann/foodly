import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import {MapPage} from "../pages/map/map";
import { ApiService } from '../providers/api-service';
import {CheckoutPage} from "../pages/checkout/checkout";
import {DetailPage} from "../pages/detail/detail";
import {CameraPage} from "../pages/camera/camera";
import {OnboardingPage} from "../pages/onboarding/onboarding";
import {SlidesPage} from "../pages/slides/slides";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MapPage,
    TabsPage,
    OnboardingPage,
    CameraPage,
    DetailPage,
    CheckoutPage,
    SlidesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    MapPage,
    TabsPage,
    OnboardingPage,
    CameraPage,
    DetailPage,
    CheckoutPage,
    SlidesPage
  ],
  providers: [
    {
      provide: ErrorHandler,
      useClass: IonicErrorHandler
    },
    ApiService
  ]
})
export class AppModule {}
