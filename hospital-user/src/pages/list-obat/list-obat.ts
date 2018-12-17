import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailObatPage } from '../detail-obat/detail-obat';
import { BeliObatPage } from '../beli-obat/beli-obat';
import { ObatProvider } from '../../providers/obat/obat';
import { obat } from '../../model/obat';

/**
 * Generated class for the ListObatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-obat',
  templateUrl: 'list-obat.html',
})
export class ListObatPage {
  items: any;
  dokterlist : obat[]=[];

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams,
     public obatProvider: ObatProvider){
       
    this.items = this.navParams.data;
    this.loadDokter();
  }

  loadDokter(){
    this.dokterlist=[];
    this.obatProvider.loadObat(this.items)
    .subscribe((result)=>{
      this.dokterlist=result
    });
  }

  more(item) {
    this.navCtrl.push(DetailObatPage, item);
  }

  buy(item) {
    this.navCtrl.push(BeliObatPage, item);
  }

}
