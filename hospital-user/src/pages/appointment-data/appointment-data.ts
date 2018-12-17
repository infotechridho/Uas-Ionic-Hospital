import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { JanjiProvider } from '../../providers/janji/janji';
import { apoitment } from '../../model/apoitment';
import { LoginProvider } from '../../providers/login/login';
/**
 * Generated class for the AppointmentDataPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-appointment-data',
  templateUrl: 'appointment-data.html',
})
export class AppointmentDataPage {

  public listDataJanji : apoitment[]=[];
  listDataUser: any;
  kategoriStatus = "";
  kategoriStatus2="";

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController,  
    public janjiProvider: JanjiProvider,
    public userProvider: LoginProvider){

      setTimeout(() => { 
        this.listDataUser = userProvider.listtemp; 
      }, 500);
    
  }

  loadApoitment(id){
    var data={
      "idUser":id,
      "status":this.kategoriStatus
    }

    this.janjiProvider.loadbyidApo(data).subscribe((result)=>{
      this.listDataJanji=result;
    });
  }

  updateApoitment(iduser,item){
    var data={
      "idUser":iduser,
      "idDokter":item.id,
      "tanggal": item.tanggal,
      "status": this.kategoriStatus2
    }
    console.log(data);
    this.janjiProvider.updateApo(data).subscribe(()=>{
      //this.navCtrl.push(AppointmentDataPage);
    })
  }

  

}

