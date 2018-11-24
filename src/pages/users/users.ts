import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController,PopoverController } from 'ionic-angular';
import { UtilsProvider } from '../../providers/utils/utils';
import { RestProvider } from '../../providers/rest/rest';
import { UserActionPopoverComponent } from '../../components/user-action-popover/user-action-popover';
import { AddUserPage }  from '../../pages/add-user/add-user'
import { EditUserPage }  from '../../pages/edit-user/edit-user'

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {

  userObj:Array<Object> = [];
  recruiterScoringSchema:any;
  tsScoringSchema:any;
  scoringDetails:Array<Object> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public util: UtilsProvider,
              public popoverCtrl: PopoverController,
              public loadingCtrl: LoadingController,
              public restProvider: RestProvider) {
                let token = this.util.getToken();
                this.users(token);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UsersPage');
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(UserActionPopoverComponent);
    popover.present({
      ev: myEvent  
    });  
  }

  users(token){ 
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.restProvider.users(token)
    .then((res:any) => {
      this.recruiterScoringSchema    = res.RecruiterScoringSchema;
      this.tsScoringSchema           = res.TsScoringSchema;
      
      Object.keys(res.scoringDetails).forEach(key=> {
        if(this.scoringDetails[res.scoringDetails[key].userId] == undefined){
          this.scoringDetails[res.scoringDetails[key].userId] = res.scoringDetails[key];
        }
      });

      Object.keys(res.userList).forEach(key=> {
        if(res.userList[key].enabled){
          res.userList[key].enabledStatus = "Active";
        }else{
          res.userList[key].enabledStatus = "Inactive";
        }

        res.userList[key].ratingFlag = 'NA';
        let scoreObj:any = this.scoringDetails[res.userList[key].id];
        if(scoreObj != undefined){
          if(res.userList[key].role == "TechnicalScreener"){
              if(scoreObj.score>=0 && scoreObj.score<=parseInt(this.tsScoringSchema.novice)){
                res.userList[key].ratingFlag = "Novice";
              }else if(scoreObj.score>=parseInt(this.tsScoringSchema.novice)+1 && scoreObj.score<=parseInt(this.tsScoringSchema.average)){
                res.userList[key].ratingFlag = "Average";
              }else if(scoreObj.score>=parseInt(this.tsScoringSchema.average)+1 && scoreObj.score<=parseInt(this.tsScoringSchema.good)){
                res.userList[key].ratingFlag = "Good";
              }else if(scoreObj.score>=parseInt(this.tsScoringSchema.good)+1 && scoreObj.score<=parseInt(this.tsScoringSchema.expert)){
                res.userList[key].ratingFlag = "Expert";
              }else if(scoreObj.score>=parseInt(this.tsScoringSchema.expert)+1 && scoreObj.score<=parseInt(this.tsScoringSchema.guru)){
                res.userList[key].ratingFlag = "Guru";
              }

          }else if(res.userList[key].role == "Recruiter"){
              if(scoreObj.score>=0 && scoreObj.score<=parseInt(this.recruiterScoringSchema.novice)){
                res.userList[key].ratingFlag = "Novice";
              }else if(scoreObj.score>=parseInt(this.recruiterScoringSchema.novice)+1 && scoreObj.score<=parseInt(this.recruiterScoringSchema.average)){
                res.userList[key].ratingFlag = "Average";
              }else if(scoreObj.score>=parseInt(this.recruiterScoringSchema.average)+1 && scoreObj.score<=parseInt(this.recruiterScoringSchema.good)){
                res.userList[key].ratingFlag = "Good";
              }else if(scoreObj.score>=parseInt(this.recruiterScoringSchema.good)+1 && scoreObj.score<=parseInt(this.recruiterScoringSchema.expert)){
                res.userList[key].ratingFlag = "Expert";
              }else if(scoreObj.score>=parseInt(this.recruiterScoringSchema.expert)+1 && scoreObj.score<=parseInt(this.recruiterScoringSchema.guru)){
                res.userList[key].ratingFlag = "Guru";
              }
          }
      }
        this.userObj.push(res.userList[key]);
    });
      loading.dismiss();
    },error => {
      loading.dismiss();     
    });  
  }  
    
  gotoAddUser(){
    this.navCtrl.push(AddUserPage);
  }
 
  gotoEditUser(id){
    this.navCtrl.push(EditUserPage,{userId:id});
  }

}
