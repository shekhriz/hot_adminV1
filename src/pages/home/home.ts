import { Component } from '@angular/core';
import { NavController,MenuController,LoadingController  } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  requirementStatics:any;  
  trackRecr:any;
  trackTSc:any;

  totalUsers:number=0;
  approvedCandidates:number=0;
  closeRequirements:number=0;
  openRequirements:number=0;
  screenedCandidates:number=0;
  totalCandidates:number=0;
  totalClients:number=0;
  totalRequirements:number=0;
  unScreenedCandidates: number=0;


  constructor(public navCtrl: NavController,
              public menuCtrl: MenuController,
              public util: UtilsProvider,
              public loadingCtrl: LoadingController,
              public restProvider: RestProvider,) {
                    this.menuCtrl.enable(true);
                    let token = this.util.getToken();
                    let user  = this.util.getSessionUser();
                    let jsonData = {
                      id:user.id,
                      role:user.role,
                      userName:user.userName
                    }

                    this.getDashBoardCounts(jsonData,token);
                    this.getRequirementStatics(jsonData,token);
                    this.trackRec(token);
                    this.trackTS(token);
  }

  trackTS(token){
    this.restProvider.trackTS(token)
    .then(res => {
      this.trackTSc = res;
    },error => {
    });
  }
  trackRec(token){
    this.restProvider.trackRec(token)
    .then(res => {
      this.trackRecr = res;
    },error => {
    });
  }
  getRequirementStatics(data,token){
    this.restProvider.getRequirementStatics(data,token)
    .then(res => {
      this.requirementStatics = res;
    },error => {
    }); 
  }
  getDashBoardCounts(data,token){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.restProvider.getDashBoardCounts(data,token)
    .then((res:any) => {
      loading.dismiss();
      this.totalUsers=res.map.totalUsers;
      this.approvedCandidates=res.map.approvedCandidates;
      this.closeRequirements=res.map.closeRequirements;
      this.openRequirements=res.map.openRequirements;
      this.screenedCandidates=res.map.screenedCandidates;
      this.totalCandidates=res.map.totalCandidates;
      this.totalClients=res.map.totalClients;
      this.totalRequirements=res.map.totalRequirements;
      this.unScreenedCandidates= res.map.unScreenedCandidates;
    },error => {
      loading.dismiss();
    });
  }



}
