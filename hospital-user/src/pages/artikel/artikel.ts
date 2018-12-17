import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import data from '../../data/artikel';
import { ListArtikelPage } from '../list-artikel/list-artikel';

/**
 * Generated class for the ArtikelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-artikel',
  templateUrl: 'artikel.html',
})
export class ArtikelPage {
  items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = data;
    //console.log(this.items);
  }

  artikel(item) {
    this.navCtrl.push(ListArtikelPage, item);
  }

  

}
