import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { Http, Response } from '@angular/http';
import 'rxjs';

/*
  Generated class for the JanjiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class JanjiProvider {
  public listDataJanji: any [];

  constructor(public storage: Storage,
    public alertCtrl: AlertController,
    public http: Http) {
    
  }

  addApo(data){
    var url = "http://localhost:8081/api/add/apoitment";
    return this.http.post(url,data);
  }

  loadbyidApo(data){
    return this.http.post("http://localhost:8081/api/select/status/apoitment",data).map((response:Response)=>{
      let data= response.json();
      return data;
    },
    (error)=>console.log(error)
    );
  }

  updateApo(data){
    var url = "http://localhost:8081/api/update/status/apoitment";
    return this.http.post(url,data);
  }
/*
  ambilDataJanji() {
    this.storage.get(KEY_DATA_JANJI).then((data) => {
      if (data != null) {
        this.listDataJanji = JSON.parse(data);
        console.log(this.listDataJanji);
      } else {
        this.listDataJanji = [];
        console.log('empty');
      }
    })
  }
  
  doRefresh(Refresher){
    this.ambilDataJanji();
    Refresher.complete(); 
  }


  simpanData(tempData) {
    this.listDataJanji.push(tempData);
    this.storage.set(KEY_DATA_JANJI, JSON.stringify(this.listDataJanji));
  }


  deleteAllDataJanji() {    
    this.storage.remove(KEY_DATA_JANJI);
    this.listDataJanji = [];
  }

  deleteDataJanji(item) {
    let confirm = this.alertCtrl.create({
      message:'Do You Want To Cancel Data Appointment ?',
      buttons:[
        {
          text:'No',
          handler:() => {
            console.log('Disagree Clicked');
          }
        },
        {
          text:'Yes',
          handler:() => {
            var temp = this.listDataJanji.indexOf(item);
            this.listDataJanji.splice(temp, 1);
            this.storage.set(KEY_DATA_JANJI, JSON.stringify(this.listDataJanji));
          }
        }
      ]
    });
    confirm.present();
  }
*/
  
}
