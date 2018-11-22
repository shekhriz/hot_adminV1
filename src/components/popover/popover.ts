import { Component } from '@angular/core';
import { ViewController,NavController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { LoginPage } from '../../pages/login/login';
/**
 * Generated class for the PopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'popover',
  templateUrl: 'popover.html'
})
export class PopoverComponent {
  text: string;
  constructor(public viewCtrl: ViewController,
              public util: UtilsProvider,
              public navCtrl: NavController) {
  }

  close() {
    this.viewCtrl.dismiss();
  }

  logout(){
      this.close();
      this.util.removeAllLocalStorage();
      this.navCtrl.push(LoginPage);
  }

}
