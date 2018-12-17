import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { LoginProvider } from '../../providers/login/login';
import { Storage } from '@ionic/storage';
import { user } from '../../model/user';
const key_data_User ="dataUser";

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  temp: user[]=[];
  nama:any = "";
  email:any = "";
  telp:any = "";
  alamat:any = "";

  constructor(
    public navCtrl: NavController, 
    public alertCtrl: AlertController,
    public userProvider : LoginProvider) {
      setTimeout(() => { 
        this.temp= userProvider.listtemp; 
      }, 500);
  }
  

  kirim() {
    const alert = this.alertCtrl.create({
      title: 'Pesan anda telah terkirim',
      buttons: ['OK']
    });
    alert.present();
    this.navCtrl.setRoot(HomePage);
  }
    

}
