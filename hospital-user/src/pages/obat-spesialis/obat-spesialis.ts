import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import data from '../../data/obat-spesialis';
import { ListObatPage } from '../list-obat/list-obat';
/**
 * Generated class for the ObatSpesialisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-obat-spesialis',
  templateUrl: 'obat-spesialis.html',
})
export class ObatSpesialisPage {
  items;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams){
      
    this.items = data;
    console.log(this.items);
  }

  obat(item) {
    this.navCtrl.push(ListObatPage, item)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ObatSpesialisPage');
  }

}
