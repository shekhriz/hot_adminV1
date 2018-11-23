import { Component } from '@angular/core';
import { MenuController } from 'ionic-angular';
import { UsersPage } from '../../pages/users/users';
import { HomePage } from '../../pages/home/home';
import {App} from 'ionic-angular';


/**
 * Generated class for the SideMenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'side-menu',
  templateUrl: 'side-menu.html'
})
export class SideMenuComponent {

  constructor(public menuCtrl: MenuController,public app: App) {
  }

  gotoState(stateName:string){
    console.log(stateName);
    this.menuCtrl.close();
    if(stateName === 'USERS'){
      this.app.getActiveNav().setRoot(UsersPage);
    }else if(stateName === 'DASHBOARD'){
      this.app.getActiveNav().setRoot(HomePage);
    }
  }

}
