import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';
import 'rxjs';

import { artikel } from '../../model/artikel';
/*
  Generated class for the ArtikelProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ArtikelProvider {
  private dokterList: artikel[]=[];

  constructor(public http: Http) {
    console.log('Hello artikelProvider');
  }

  loadArtikel(cat : string){
    return this.http.get("http://localhost:8081/api/category/"+cat+"/artikel").map((response:Response)=>{
      let data= response.json();
      this.dokterList = data;
      return data;
    },
    (error)=>console.log(error)
    );
  }
}
