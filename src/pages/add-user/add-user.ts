import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the AddUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {

  rolls:any;
  morData:any;
  vosData:any;
  newUser:any;
  objRole:string;
  objReportingMgrOfRec:string;
  objReportingVpOfSales:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public util: UtilsProvider,
    public loadingCtrl: LoadingController,
    public restProvider: RestProvider) {
      let token = this.util.getToken();
      this.getRoles(token);
      this.managerOfRecruiting(token);
      this.vpOfSales(token);
  } 

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddUserPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  getRoles(token){
    this.restProvider.groupName(token)
    .then((res:any)=>{
      this.rolls = res;
    },errrr=>{
    });
  }
  managerOfRecruiting(token){
    this.restProvider.managerOfRecruiting(0,token)
    .then((res:any)=>{
        this.morData = res;
    },errrr=>{
    });
  }
  vpOfSales(token){
    this.restProvider.vpOfSales(0,token)
    .then((res:any)=>{
      this.vosData = res;
    },errrr=>{
      
    });
  }
}
