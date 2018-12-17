import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DetailDokterPage } from '../detail-dokter/detail-dokter';
import { AddAppointmentPage } from '../add-appointment/add-appointment';
import { DokterProvider } from '../../providers/dokter/dokter';
import { dokter } from '../../model/dokter';
/**
 * Generated class for the ListDokterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-dokter',
  templateUrl: 'list-dokter.html',
})
export class ListDokterPage {
  items: any;
  asda:any;
  dokterlist: dokter[]=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public dokterProvider : DokterProvider) 
  {
    this.items = this.navParams.data;
    //console.log(this.items);
    this.loadDokter();
  }

  loadDokter(){
    this.dokterlist=[];
    this.dokterProvider.loadDokter(this.items)
    .subscribe((result)=>{
      this.dokterlist=result
      this.asda= this.dokterlist.find(o=> o.nama === 'Airina, Drg. Sp Perio')
      //Airina, Drg. Sp Perio
      //console.log(this.asda.nama);
    })
  }

  more(item) {
    this.navCtrl.push(DetailDokterPage, item)
  }

  appointment(item) {
    this.navCtrl.push(AddAppointmentPage, item)
  }

  belum() {
      const alert = this.alertCtrl.create({
        title: 'Fungsi Belum Bisa di Gunakan',
        buttons: ['OK']
      });
      alert.present();
    }

  }
