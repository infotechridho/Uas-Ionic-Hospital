import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginProvider } from '../../providers/login/login';
import { LoginPage } from '../login/login';

/**
 * Generated class for the CreateUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-user',
  templateUrl: 'create-user.html',
})
export class CreateUserPage {

  userData={"nama":"","email":"","pw":"","telp":"","alamat":""}

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public userProvider:LoginProvider) {
  }

  createUser(){
    this.userProvider.createUser(this.userData)
    .subscribe((result)=>{
      this.navCtrl.push(LoginPage);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateUserPage');
  }

}
