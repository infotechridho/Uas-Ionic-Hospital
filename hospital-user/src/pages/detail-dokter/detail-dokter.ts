import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailDokterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-dokter',
  templateUrl: 'detail-dokter.html',
})
export class DetailDokterPage {
  items: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.data;
    console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailDokterPage');
  }

}
