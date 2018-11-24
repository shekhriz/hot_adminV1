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
import { UserActionPopoverComponent } from '../components/user-action-popover/user-action-popover';
import { SettingsPage }  from '../pages/settings/settings'
import { AddUserPage }  from '../pages/add-user/add-user'
import { EditUserPage }  from '../pages/edit-user/edit-user'

  
@NgModule({
  declarations: [  
    MyApp,
    HomePage,
    LoginPage, 
    UsersPage,
    SettingsPage,
    PopoverComponent,
    MainHeaderComponent,
    SideMenuComponent,
    UserActionPopoverComponent,
    AddUserPage,
    EditUserPage
    
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
    UserActionPopoverComponent,
    AddUserPage,
    EditUserPage
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
