import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { UsersPage } from '../pages/users/users';
import { RestProvider } from '../providers/rest/rest';
import { UtilsProvider } from '../providers/utils/utils';
import { HttpClientModule } from '@angular/common/http';
import { PopoverComponent } from '../components/popover/popover';
import { MainHeaderComponent } from '../components/main-header/main-header';
import { SideMenuComponent } from '../components/side-menu/side-menu';
import { SettingsPage }  from '../pages/settings/settings'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    UsersPage,
    SettingsPage,
    PopoverComponent,
    MainHeaderComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    UsersPage,
    SettingsPage,
    PopoverComponent,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    UtilsProvider
  ]
})
export class AppModule {}
