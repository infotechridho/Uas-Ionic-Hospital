import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailObatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-obat',
  templateUrl: 'detail-obat.html',
})
export class DetailObatPage {
  items: any;
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams){
      
    this.items = this.navParams.data;
    console.log(this.items);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailObatPage');
  }

}
