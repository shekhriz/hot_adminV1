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

  presentPopover(myEvent) {
   let popover = this.popoverCtrl.create(PopoverComponent);
   popover.present({
     ev: myEvent
   });
 }

 openMenu() {
  this.menuCtrl.open();
  }

  closeMenu() {
    this.menuCtrl.close();
  }

  toggleMenu() {
    this.menuCtrl.toggle();
  }

}
