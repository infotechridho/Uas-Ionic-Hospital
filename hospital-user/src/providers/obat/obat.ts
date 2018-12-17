import { Injectable } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
const KEY_DATA_OBAT = "dataObat";
import { Http,Response } from '@angular/http';
import 'rxjs';


/*
  Generated class for the ObatProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ObatProvider {
  public listDataObat: any [];

  constructor(
    public http: Http,
    public storage: Storage, 
    public alertCtrl: AlertController) {
    
  }

  loadObat(cat : string){
    return this.http.get("http://localhost:8081/api/category/"+ cat + "/obat").map((response:Response)=>{
      let data= response.json();
      return data;
    },
    (error)=>console.log(error)
    );
  }

  addPembelian(data){
    var url = "http://localhost:8081/api/add/pembelian";
    return this.http.post(url,data);
  }
  
  loadPembelian(id : string){
    return this.http.get("http://localhost:8081/api/select/"+id+"/obat").map((response:Response)=>{
      let data= response.json();
      return data;
    },
    (error)=>console.log(error)
    );
  }


/*  
  doRefresh(Refresher){
    this.ambilDataObat();
    Refresher.complete(); 
  }

  ambilDataObat() {
    this.storage.get(KEY_DATA_OBAT).then((data) => {
      if (data != null) {
        this.listDataObat = JSON.parse(data);
        console.log(this.listDataObat);
      } else {
        this.listDataObat = [];
        console.log('empty');
      }
    })
  }

  simpan(tempData) {
    this.listDataObat.push(tempData);
    this.storage.set(KEY_DATA_OBAT, JSON.stringify(this.listDataObat));
  }
  
  deleteAllDataObat() {
    this.storage.remove(KEY_DATA_OBAT);            
    this.listDataObat = [];
  }

  deleteDataObat(item) {
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
            var temp = this.listDataObat.indexOf(item);
            this.listDataObat.splice(temp, 1);
            this.storage.set(KEY_DATA_OBAT, JSON.stringify(this.listDataObat));
          }
        }
      ]
    });
    confirm.present();
  }*/

}
