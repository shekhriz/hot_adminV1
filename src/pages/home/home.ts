import { Component } from '@angular/core';
import { NavController,PopoverController,MenuController  } from 'ionic-angular';
import { PopoverComponent } from '../../components/popover/popover';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,public popoverCtrl: PopoverController,public menuCtrl: MenuController) {
    this.menuCtrl.enable(true);
  }



}
