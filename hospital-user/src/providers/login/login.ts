import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Storage } from '@ionic/storage';
import 'rxjs';
const key_data_User ="dataUser";


/*
  Generated class for the LoginProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.

  find(o=> o.nama === 'Airina, Drg. Sp Perio')
*/
@Injectable()
export class LoginProvider {

  listtemp:any ;

  constructor(
    public http: Http,
    public storage: Storage) {
     this.getDataStorage();
  }

  

  getUserLogin(data){
    return this.http.post("http://localhost:8081/api/select/login/user",data)
    .map((response:Response)=>{
      let data = response.json();
      this.saveDataStorage(data);
      return data;
      
    },
    (error)=>console.log(error));
  }

  createUser(data){
    return this.http.post("http://localhost:8081/api/add/user",data);
  }


  getDataStorage(){
    this.storage.get(key_data_User).then((data)=>{
      if (data != null) {
        this.listtemp = JSON.parse(data);
      } else {
        this.listtemp = [];
        console.log('empty');
      }
    })
  }

  saveDataStorage(data){
    this.storage.set(key_data_User,JSON.stringify(data));
  }
}
