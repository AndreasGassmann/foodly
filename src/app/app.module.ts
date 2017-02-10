import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ApiService } from '../providers/api-service';
import {CheckoutPage} from "../pages/checkout/checkout";
import {DetailPage} from "../pages/detail/detail";
import {CameraPage} from "../pages/camera/camera";
import {OnboardingPage} from "../pages/onboarding/onboarding";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    OnboardingPage,
    CameraPage,
    DetailPage,
    CheckoutPage
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
    TabsPage,
    OnboardingPage,
    CameraPage,
    DetailPage,
    CheckoutPage
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
