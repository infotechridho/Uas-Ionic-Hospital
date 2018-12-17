import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { artikel } from '../../model/artikel';
import { ArtikelProvider } from '../../providers/artikel/artikel';

/**
 * Generated class for the ListArtikelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list-artikel',
  templateUrl: 'list-artikel.html',
})
export class ListArtikelPage {
  items: any;
  dokterlist : artikel[]=[];

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public viewCtrl: ViewController,
    public artikelProvider : ArtikelProvider) {

    this.items = this.navParams.data;
    this.loadDokter();
  }

  loadDokter(){
    this.dokterlist=[];
    this.artikelProvider.loadArtikel(this.items)
    .subscribe((result)=>{
      this.dokterlist=result;
    });
  }

  

}
