import { Injectable } from '@angular/core';

import { Http,Response } from '@angular/http';
import 'rxjs';

import { teknologi } from '../../model/teknologi';


/*
  Generated class for the TeknologiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TeknologiProvider {
  private dokterList: teknologi[]=[];

  constructor(public http: Http) {
    console.log('Hello teknologiProvider');
  }

  loadTeknologi(cat : string){
    return this.http.get("http://localhost:8081/api/category/"+cat+"/teknologi").map((response:Response)=>{
      let data= response.json();
      this.dokterList = data;
      return data;
    },
    (error)=>console.log(error)
    );
  }
}
