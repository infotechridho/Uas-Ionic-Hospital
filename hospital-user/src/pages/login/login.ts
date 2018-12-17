import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CreateUserPage } from '../create-user/create-user';
import { LoginProvider } from '../../providers/login/login';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
  userData={"email":"","pw":""};
  temp:any;
  data:any;


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public userProvider:LoginProvider) {

  }

  

  loginUser(){
    this.userProvider.getUserLogin(this.userData)
    .subscribe((result)=>{
      this.temp=result;
      //this.data= this.temp.find();
      if(this.temp == [] , this.temp == null){
        
      } else{
        this.navCtrl.setRoot(TabsPage);
        //this.userProvider.saveDataStorage(this.temp);
      }
    })

  }

  createUser(){
    this.navCtrl.push(CreateUserPage);
  }

  ionViewDidLoad() {
   // console.log('ionViewDidLoad LoginPage');
  }

}
