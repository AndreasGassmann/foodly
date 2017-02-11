import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { SlidesPage } from "../pages/slides/slides";
import {CameraPage} from "../pages/camera/camera";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage = CameraPage;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
