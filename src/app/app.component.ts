import { Component } from '@angular/core';
import { Platform,AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { UtilsProvider } from '../providers/utils/utils';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  user:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
    public utilProvider: UtilsProvider,
    public alertCtrl: AlertController,
    ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.user = this.utilProvider.getSessionUser();
      if(this.user != null){
        this.rootPage = HomePage;
      }else{
        this.rootPage = LoginPage;
      }

      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
