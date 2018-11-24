import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

/**
 * Generated class for the UserActionPopoverComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-action-popover',
  templateUrl: 'user-action-popover.html'
})
export class UserActionPopoverComponent {

  text: string;

  constructor(public viewCtrl: ViewController) {
    console.log('Hello UserActionPopoverComponent Component');
    this.text = 'Hello World';
  }

  close(pageName) {
    this.viewCtrl.dismiss();
  }

}
