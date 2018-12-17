import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { JanjiProvider } from '../../providers/janji/janji';
import { LoginProvider } from '../../providers/login/login';
import { ListDokterPage } from '../list-dokter/list-dokter';

/**
 * Generated class for the AddAppointmentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-appointment',
  templateUrl: 'add-appointment.html',
})
export class AddAppointmentPage {
  items: any;
  idUser:any;
  idDokter:any;
  tanggal: any = null;
  keluhan: any = null;
  status: any = "1";
  public listDataUser: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public janjiProvider: JanjiProvider,
    public userProvider: LoginProvider ) 
  {

    this.items = this.navParams.data;
   
    setTimeout(() => { 
      this.listDataUser = userProvider.listtemp; 
    }, 500);
    
    this.idDokter = this.items.id;
  }


  addData(id){
    var data={
      "idUser":id,
      "idDokter":this.idDokter,
      "tanggal":this.tanggal,
      "keluhan":this.keluhan,
      "status":this.status
    }
    this.janjiProvider.addApo(data).subscribe((result)=>{
      this.navCtrl.setRoot(ListDokterPage);
    })
  }


}
