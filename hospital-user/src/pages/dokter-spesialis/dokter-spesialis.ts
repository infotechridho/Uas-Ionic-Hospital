import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import data from '../../data/dokter-spesialis';
import { ListDokterPage } from '../list-dokter/list-dokter';

/**
 * Generated class for the DokterSpesialisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dokter-spesialis',
  templateUrl: 'dokter-spesialis.html',
})
export class DokterSpesialisPage {

  items: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams) 
  {
    this.items = data;
   
  }

  dokter(item) {
    this.navCtrl.push(ListDokterPage, item)
  }

  

}
