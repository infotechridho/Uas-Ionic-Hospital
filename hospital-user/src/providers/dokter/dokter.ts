import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';
import 'rxjs';

import { dokter } from '../../model/dokter';
/*
  Generated class for the DokterProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DokterProvider {

 // private asdw: dokter[]=[];

  constructor(public http: Http) {
    console.log('Hello DokterProvider');
  }

  loadDokter(cat : string){
    return this.http.get("http://localhost:8081/api/category/"+cat+"/dokter")
    .map((response:Response)=>{
      let data= response.json();
    //  this.asdw = data;
      return data;
    },
    (error)=>console.log(error)
    );
  }

}
